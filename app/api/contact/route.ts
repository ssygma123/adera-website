import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  packageInterest?: string;
  message?: string;
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email is not configured. Set RESEND_API_KEY." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const company = body.company?.trim() || "—";
  const packageInterest = body.packageInterest?.trim() || "—";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email, and message are required" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long (max 5000 chars)" },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@adera.design";
  const from = process.env.CONTACT_FROM_EMAIL ?? "noreply@adera.design";

  const subject = `New enquiry from ${name}${
    packageInterest !== "—" ? ` — ${packageInterest}` : ""
  }`;

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;color:#111;">
      <h2 style="margin:0 0 16px;font-size:18px;">New Adera enquiry</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tr><td style="padding:6px 0;color:#666;width:140px;">Name</td><td>${escape(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#666;">Company</td><td>${escape(company)}</td></tr>
        <tr><td style="padding:6px 0;color:#666;">Package interest</td><td>${escape(packageInterest)}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;font-size:15px;">Message</h3>
      <div style="padding:12px;border:1px solid #eee;border-radius:8px;white-space:pre-wrap;">${escape(message)}</div>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Adera <${from}>`,
      to: [to],
      replyTo: email,
      subject,
      html
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
