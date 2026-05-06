import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order confirmed"
};

export default function SuccessPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container-x text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          You're in. <span className="text-gradient">Thank you.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          We've sent a receipt to your inbox. For agency packages, we'll reach out
          within a few business hours to kick off.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-secondary">
            Back home
          </Link>
          <Link href="/shop" className="btn-gradient">
            <span>Keep browsing</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
