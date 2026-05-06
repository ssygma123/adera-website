# Adera

Modern AI advertising & prompt agency — marketing site, services catalog, prompt
shop, and contact form. Built with Next.js 14 (App Router), Tailwind CSS, Framer
Motion, Stripe Checkout, and Resend.

Domain: [adera.design](https://adera.design)

## Features

- Five marketing pages: landing, services, shop, portfolio, contact
- Stripe Checkout for ad packages (€299–€1499) and prompt packages (€29–€149)
- Individual prompt purchases (€4.99–€19.99) with category filtering
- Contact form delivered via Resend
- Dark, premium aesthetic with animated gradients
- Fully mobile-responsive
- Vercel-ready

## Tech stack

| Layer       | Choice                                |
|-------------|---------------------------------------|
| Framework   | Next.js 14 (App Router, TypeScript)   |
| Styling     | Tailwind CSS                          |
| Animation   | Framer Motion                         |
| Payments    | Stripe Checkout (`price_data` mode)   |
| Email       | Resend                                |
| Hosting     | Vercel                                |

## Getting started

### 1. Clone & install

```bash
git clone https://github.com/ssygma123/adera-website.git
cd adera-website
npm install
```

### 2. Environment

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

| Variable | Where to get it |
|---|---|
| `STRIPE_SECRET_KEY` | [Stripe → API keys](https://dashboard.stripe.com/apikeys) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Same dashboard |
| `RESEND_API_KEY` | [Resend → API keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Your inbox for form submissions |
| `CONTACT_FROM_EMAIL` | A verified Resend sender (or `onboarding@resend.dev` in dev) |
| `NEXT_PUBLIC_SITE_URL` | Used for Stripe redirect URLs |

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How payments work

Products live in `lib/products.ts`. The `/api/checkout` route uses Stripe's
`price_data` flow — no need to pre-create products in the Stripe dashboard. To
switch to pre-created Price IDs later, replace `price_data` with `price` in
`app/api/checkout/route.ts` and store the IDs alongside each product.

## Project layout

```
app/                  Pages & API routes (App Router)
  api/checkout/       Creates a Stripe Checkout Session
  api/contact/        Sends contact form via Resend
components/           Reusable UI (Hero, PricingCard, ContactForm, …)
lib/
  products.ts         Catalog (packages + individual prompts)
  stripe.ts           Server Stripe client
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Add the environment variables from `.env.example`.
4. Deploy.

`vercel.json` already pins the framework and build commands.

## Before you ship

A few things this starter does not handle — add them before launching publicly:

- **Real ad imagery.** The portfolio grid uses placeholder gradient panels.
- **Verify your sending domain in Resend** so contact emails are not rejected.
- **Rate-limit `/api/contact`** (e.g. with Upstash or a Vercel Edge Middleware) to
  prevent abuse.
- **Set up Stripe webhooks** if you want post-purchase fulfillment automation.

## License

© Adera. All rights reserved.
