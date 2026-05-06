"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export type PortfolioCategory =
  | "all"
  | "ecommerce"
  | "saas"
  | "lifestyle"
  | "b2b";

interface Item {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  gradient: string;
  caption: string;
}

const items: Item[] = [
  {
    id: "p1",
    title: "Aurora Skincare",
    category: "ecommerce",
    gradient: "linear-gradient(135deg, #312e81 0%, #6366f1 50%, #c7d2fe 100%)",
    caption: "Glow that lasts."
  },
  {
    id: "p2",
    title: "Stack Analytics",
    category: "saas",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 60%, #67e8f9 100%)",
    caption: "Numbers, finally readable."
  },
  {
    id: "p3",
    title: "North Coffee",
    category: "lifestyle",
    gradient: "linear-gradient(135deg, #3f3f46 0%, #525252 50%, #d6d3d1 100%)",
    caption: "Brewed slow. Drunk fast."
  },
  {
    id: "p4",
    title: "Proxima Cloud",
    category: "b2b",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 60%, #818cf8 100%)",
    caption: "Infra without the cost."
  },
  {
    id: "p5",
    title: "Verdant Greens",
    category: "ecommerce",
    gradient: "linear-gradient(135deg, #064e3b 0%, #10b981 60%, #a7f3d0 100%)",
    caption: "Eat your colors."
  },
  {
    id: "p6",
    title: "Helio Solar",
    category: "b2b",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #f97316 60%, #fdba74 100%)",
    caption: "Energy on tap."
  },
  {
    id: "p7",
    title: "Lume Lighting",
    category: "lifestyle",
    gradient: "linear-gradient(135deg, #422006 0%, #ca8a04 60%, #fde68a 100%)",
    caption: "Light, redesigned."
  },
  {
    id: "p8",
    title: "Pulse Wearables",
    category: "ecommerce",
    gradient: "linear-gradient(135deg, #831843 0%, #ec4899 60%, #fbcfe8 100%)",
    caption: "Wear your health."
  },
  {
    id: "p9",
    title: "Forge IDE",
    category: "saas",
    gradient: "linear-gradient(135deg, #134e4a 0%, #14b8a6 60%, #99f6e4 100%)",
    caption: "Code at the speed of thought."
  },
  {
    id: "p10",
    title: "Mira Books",
    category: "lifestyle",
    gradient: "linear-gradient(135deg, #581c87 0%, #a855f7 60%, #e9d5ff 100%)",
    caption: "Stories you'll finish."
  },
  {
    id: "p11",
    title: "Routine Shop",
    category: "ecommerce",
    gradient: "linear-gradient(135deg, #1e293b 0%, #475569 60%, #cbd5e1 100%)",
    caption: "Less, but better."
  },
  {
    id: "p12",
    title: "Atlas CRM",
    category: "b2b",
    gradient: "linear-gradient(135deg, #1f2937 0%, #3b82f6 50%, #93c5fd 100%)",
    caption: "Pipeline at a glance."
  }
];

const filters: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "saas", label: "SaaS" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "b2b", label: "B2B" }
];

export function PortfolioGrid({
  limit,
  showFilter = true
}: {
  limit?: number;
  showFilter?: boolean;
}) {
  const [active, setActive] = useState<PortfolioCategory>("all");

  let visible = active === "all" ? items : items.filter((i) => i.category === active);
  if (limit) visible = visible.slice(0, limit);

  return (
    <div>
      {showFilter && (
        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                active === f.id
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((it, i) => (
            <motion.figure
              key={it.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5"
            >
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: it.gradient }}
              />
              <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/90 backdrop-blur">
                  {it.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {it.title}
                </h3>
                <p className="text-sm text-white/70">{it.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
