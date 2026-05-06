"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI Ad Creative",
    body: "Static and video ads generated with the latest models, hand-curated by our team.",
    points: ["Static + video", "2 → unlimited revisions", "3-day delivery"]
  },
  {
    title: "Prompt Libraries",
    body: "The exact prompts we use, packaged for your team. Ad copy, image, video, social.",
    points: ["10 → 100+ prompts", "Worked examples", "Lifetime updates"]
  },
  {
    title: "Performance Strategy",
    body: "A/B variants, hooks, and frameworks tuned to convert across paid channels.",
    points: ["Hook frameworks", "A/B variants", "Strategy call"]
  }
];

export function ServicesOverview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="label-eyebrow">What we do</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Creative + prompts, in one place.
            </h2>
            <p className="mt-4 text-zinc-400">
              We design AI-generated ads end-to-end and ship the same prompt
              libraries we use internally so your team can move just as fast.
            </p>
          </div>
          <Link href="/services" className="btn-secondary">
            See all packages →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{s.body}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-zinc-300">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-blue-400"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
