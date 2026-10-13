"use client";

import { motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import type { Faq as FaqItem } from "@/content/schemas";

// Jawaban tetap ada di HTML (hanya disembunyikan dengan tinggi 0 dan inert) agar terbaca mesin pencari.
export function Faq({ items }: { items: readonly FaqItem[] }) {
  const base = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;
        return (
          <li key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-lg font-semibold text-ink"
              >
                <span>{item.q}</span>
                {open ? <Minus aria-hidden="true" className="size-5 shrink-0" /> : <Plus aria-hidden="true" className="size-5 shrink-0" />}
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              initial={false}
              animate={{ height: open ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-ink-muted">{item.a}</p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
