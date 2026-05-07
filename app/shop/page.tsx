import type { Metadata } from "next";
import { ShopGrid } from "./ShopGrid";
import { shopPrompts } from "@/lib/products";
import { BuyButton } from "@/components/BuyButton";

export const metadata: Metadata = {
  title: "Prompt shop",
  description:
    "Individual prompts for AI ads, image generation, video, and social. From €4.99."
};

const formatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export default function ShopPage() {
  const featured = shopPrompts.find((p) => p.highlight);

  return (
    <>
      <section className="pt-20 sm:pt-28">
        <div className="container-x text-center">
          <span className="label-eyebrow">Prompt shop</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Buy individual <span className="text-gradient">prompts</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Hand-curated prompts for ad copy, image, video and social. Pay once,
            use forever.
          </p>
        </div>
      </section>

      {featured && (
        <section className="section pt-12 sm:pt-16">
          <div className="container-x">
            <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #f59e0b 100%)"
                }}
              />
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
              <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white backdrop-blur">
                    Featured · {featured.category?.replace("-", " ")}
                  </span>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {featured.name}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-wider text-white/70">
                    {featured.tagline}
                  </p>
                  <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                    {featured.description}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <span className="text-2xl font-semibold text-white">
                      {formatter.format(featured.priceEUR)}
                    </span>
                    <BuyButton
                      productId={featured.id}
                      label="Buy the pack"
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-x">
          <ShopGrid />
        </div>
      </section>
    </>
  );
}
