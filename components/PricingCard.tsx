"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { BuyButton } from "./BuyButton";

const formatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

export function PricingCard({
  product,
  index = 0
}: {
  product: Product;
  index?: number;
}) {
  const highlighted = product.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative rounded-2xl p-6 sm:p-8 ${
        highlighted
          ? "border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]"
          : "border border-white/5 bg-white/[0.02]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Most popular
          </span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <span className="text-xs uppercase tracking-wider text-zinc-500">
          {product.tagline}
        </span>
      </div>

      <p className="mt-2 text-sm text-zinc-400">{product.description}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight">
          {formatter.format(product.priceEUR)}
        </span>
        <span className="text-sm text-zinc-500">
          {product.kind === "ad-package" ? "/ project" : "one-time"}
        </span>
      </div>

      {product.features && (
        <ul className="mt-6 space-y-2.5">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0 text-blue-400"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <BuyButton
          productId={product.id}
          label={highlighted ? "Get started" : "Choose plan"}
          variant={highlighted ? "gradient" : "secondary"}
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
