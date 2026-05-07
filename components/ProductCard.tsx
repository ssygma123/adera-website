"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { BuyButton } from "./BuyButton";

const formatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const swatches: Record<string, string> = {
  "ad-copy":
    "linear-gradient(135deg, #1e40af 0%, #3b82f6 60%, #60a5fa 100%)",
  image:
    "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 60%, #c4b5fd 100%)",
  video:
    "linear-gradient(135deg, #be185d 0%, #ec4899 50%, #f472b6 100%)",
  social:
    "linear-gradient(135deg, #047857 0%, #10b981 50%, #6ee7b7 100%)",
  chatgpt:
    "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #f59e0b 100%)"
};

export function ProductCard({
  product,
  index = 0
}: {
  product: Product;
  index?: number;
}) {
  const swatch = product.category ? swatches[product.category] : swatches["ad-copy"];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition hover:border-white/10"
    >
      <div
        aria-hidden
        className="relative h-32 w-full"
        style={{ background: swatch }}
      >
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
        <div className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-white/80">
          {product.category?.replace("-", " ")}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold">{product.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
          {product.tagline}
        </p>
        <p className="mt-3 text-sm text-zinc-400">{product.description}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-semibold">
            {formatter.format(product.priceEUR)}
          </span>
          <BuyButton productId={product.id} label="Buy" variant="secondary" />
        </div>
      </div>
    </motion.article>
  );
}
