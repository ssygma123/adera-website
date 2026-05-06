import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected AI-generated ad creative across ecommerce, SaaS, lifestyle, and B2B."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28">
        <div className="container-x text-center">
          <span className="label-eyebrow">Portfolio</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Recent <span className="text-gradient">work</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            A selection of AI-generated ad creative across ecommerce, SaaS,
            lifestyle, and B2B.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <PortfolioGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
