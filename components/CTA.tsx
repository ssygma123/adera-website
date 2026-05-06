"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center sm:p-16"
        >
          <div
            aria-hidden
            className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/30 blur-3xl"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Ready to scale your ads?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Tell us what you're shipping. We'll send back a creative plan
              within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-gradient">
                <span>Start a project</span>
                <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn-secondary">
                View packages
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
