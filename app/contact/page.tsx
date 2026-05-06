import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your campaign. We respond within 24 hours."
};

export default function ContactPage() {
  return (
    <section className="pt-20 sm:pt-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="label-eyebrow">Contact</span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us what you're <span className="text-gradient">shipping</span>.
            </h1>
            <p className="mt-5 max-w-md text-lg text-zinc-400">
              We respond within 24 hours with a creative plan tailored to your
              campaign.
            </p>

            <dl className="mt-12 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Email
                </dt>
                <dd className="mt-1 text-base">
                  <a
                    href="mailto:hello@adera.design"
                    className="text-white hover:text-blue-400"
                  >
                    hello@adera.design
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Response time
                </dt>
                <dd className="mt-1 text-base text-zinc-300">
                  Within 24 hours, Monday – Friday.
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Working with us
                </dt>
                <dd className="mt-1 max-w-md text-base text-zinc-400">
                  Most projects start within a week. For Premium retainers, we
                  hop on a 30-minute discovery call before kicking off.
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
