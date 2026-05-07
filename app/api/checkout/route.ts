import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductById } from "@/lib/products";
import { signDownloadToken } from "@/lib/download-token";

export const runtime = "nodejs";

const DIGITAL_DOWNLOADS: Record<string, string> = {
  "prompt-cinematic-portraits": "/download/cinematic-portrait-pack"
};

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured. Set STRIPE_SECRET_KEY." },
      { status: 500 }
    );
  }

  let body: { productId?: string; quantity?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const productId = body.productId;
  const quantity = Math.max(1, Math.min(10, Number(body.quantity ?? 1)));

  if (!productId) {
    return NextResponse.json({ error: "productId is required" }, { status: 400 });
  }

  const product = getProductById(productId);
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 400 });
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin;

  const downloadPath = DIGITAL_DOWNLOADS[product.id];
  const successUrl = downloadPath
    ? `${siteUrl}${downloadPath}?token=${signDownloadToken(
        product.id
      )}&session_id={CHECKOUT_SESSION_ID}`
    : `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: product.kind === "ad-package" ? "payment" : "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity,
          price_data: {
            currency: "eur",
            unit_amount: Math.round(product.priceEUR * 100),
            product_data: {
              name: product.name,
              description: product.description,
              metadata: { productId: product.id, kind: product.kind }
            }
          }
        }
      ],
      success_url: successUrl,
      cancel_url: `${siteUrl}/cancel`,
      metadata: { productId: product.id, kind: product.kind },
      allow_promotion_codes: true
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe session has no URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] stripe error", err);
    const message = err instanceof Error ? err.message : "Stripe error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
