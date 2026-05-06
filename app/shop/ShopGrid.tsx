"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shopPrompts, shopCategories, type ShopCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ShopGrid() {
  const [active, setActive] = useState<ShopCategory | "all">("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? shopPrompts
        : shopPrompts.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {shopCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              active === c.id
                ? "bg-white text-black"
                : "border border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20 hover:text-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="py-12 text-center text-sm text-zinc-500">
          No prompts in this category yet.
        </p>
      )}
    </div>
  );
}
