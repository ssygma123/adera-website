"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GradientOrbs } from "./GradientOrbs";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <GradientOrbs />
      <div className="container-x relative pt-28 pb-24 sm:pt-36 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="label-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            AI advertising agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-center font-semibold tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1.05 }}
        >
          <span className="text-gradient">AI Ads</span> that convert.
          <br />
          <span className="text-gradient">Prompts</span> that perform.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-400 sm:text-xl"
        >
          We design AI-generated ad creative and sell the prompt libraries we use
          internally. Built for teams that need to ship, fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/services" className="btn-gradient">
            <span>Explore packages</span>
            <span aria-hidden>→</span>
          </Link>
          <Link href="/shop" className="btn-secondary">
            Shop prompts
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            ["3-day", "delivery"],
            ["100+", "prompts"],
            ["25", "ads / package"],
            ["€29", "starter prompts"]
          ].map(([k, v]) => (
            <div key={k} className="text-center">
              <div className="text-2xl font-semibold text-white sm:text-3xl">{k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
