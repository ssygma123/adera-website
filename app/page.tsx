import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <section className="section">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <span className="label-eyebrow">Selected work</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ads that earn the click.
              </h2>
            </div>
          </div>
          <PortfolioGrid limit={6} showFilter={false} />
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
}
