import type { Metadata } from "next";
import { adPackages, promptPackages } from "@/lib/products";
import { PricingCard } from "@/components/PricingCard";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services & pricing",
  description:
    "Ad packages from €299 and prompt packages from €29. Production-ready creative and the prompt libraries we use internally."
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-28">
        <div className="container-x text-center">
          <span className="label-eyebrow">Services</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Built for teams that need to <span className="text-gradient">ship</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Two ways to work with us — full-service ad creative, or buy the
            prompts and run it yourself.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="label-eyebrow">Ad Packages</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Full-service AI ad creative.
              </h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {adPackages.map((p, i) => (
              <PricingCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="label-eyebrow">Prompt Packages</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Run it yourself with our prompts.
              </h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {promptPackages.map((p, i) => (
              <PricingCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
