import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout cancelled"
};

export default function CancelPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-x text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Checkout <span className="text-gradient">cancelled</span>.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          No charge was made. If something went wrong, drop us a line and we'll
          sort it out.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/services" className="btn-gradient">
            <span>Back to packages</span>
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
