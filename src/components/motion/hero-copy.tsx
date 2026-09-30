"use client";

import { motion } from "motion/react";
import { Children } from "react";

// Judul, teks, dan tombol muncul berurutan (DESIGN.md bagian 10, "Masuk hero").
export function HeroCopy({ children }: { children: React.ReactNode }) {
  return (
    <>
      {Children.toArray(children).map((child, i) => (
        <motion.div
          key={i}
          className="reveal"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
