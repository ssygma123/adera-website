"use client";

import { motion } from "framer-motion";

interface FeaturedVideoProps {
  src: string;
  poster?: string;
  eyebrow?: string;
  title?: string;
  caption?: string;
}

export function FeaturedVideo({
  src,
  poster,
  eyebrow = "Featured work",
  title,
  caption
}: FeaturedVideoProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
    >
      <div className="relative aspect-video w-full">
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
        />
      </div>

      {(title || caption) && (
        <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur">
            {eyebrow}
          </span>
          {title && (
            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              {title}
            </h3>
          )}
          {caption && (
            <p className="mt-1 max-w-xl text-sm text-white/70 sm:text-base">
              {caption}
            </p>
          )}
        </figcaption>
      )}
    </motion.figure>
  );
}
