"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Adera replaced an entire creative agency for us. We ship more variants in a week than we used to in a quarter.",
    author: "Maya Chen",
    role: "Head of Growth, Aurora",
    avatar: "linear-gradient(135deg,#8b5cf6,#3b82f6)"
  },
  {
    quote:
      "The Pro Bundle paid for itself in the first hour. These prompts are not theory — they're production-tested.",
    author: "Daniel Hofer",
    role: "Performance Lead, Stack",
    avatar: "linear-gradient(135deg,#ec4899,#f97316)"
  },
  {
    quote:
      "Premium delivered 25 ads in five days, all on-brand. The dedicated manager made it feel like an in-house team.",
    author: "Sara Müller",
    role: "Founder, Verdant",
    avatar: "linear-gradient(135deg,#10b981,#3b82f6)"
  }
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="label-eyebrow">Loved by operators</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Teams ship faster with Adera.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <svg
                aria-hidden
                className="mb-4 h-6 w-6 text-blue-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.13 11.5h-3a3 3 0 1 1 0-6 1 1 0 0 1 0 2 1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h1v-6Zm10 0h-3a3 3 0 1 1 0-6 1 1 0 0 1 0 2 1 1 0 1 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h1v-6Z" />
              </svg>
              <blockquote className="text-base text-zinc-200">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-9 w-9 rounded-full"
                  style={{ background: t.avatar }}
                />
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
