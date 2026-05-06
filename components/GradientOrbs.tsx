"use client";

import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.2 }}
        className="absolute right-[-8rem] top-32 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.4 }}
        className="absolute left-[-8rem] bottom-[-8rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/15 blur-[100px]"
      />
    </div>
  );
}
