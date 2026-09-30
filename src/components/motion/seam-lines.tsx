"use client";

import { motion } from "motion/react";

const COUNT = 24;

// Garis sambungan panel menggambar satu per satu, sekali saja. Dekoratif, kontras rendah.
export function SeamLines() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: COUNT }, (_, i) => (
        <motion.span
          key={i}
          className="absolute top-0 h-full w-px bg-line"
          style={{ left: (i + 1) * 80, originY: 0 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}
