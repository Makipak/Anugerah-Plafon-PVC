"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Asset } from "@/components/asset";
import type { AssetId } from "@/content/assets";
import type { Proyek } from "@/content/schemas";
import { altProyek } from "@/lib/alt";

export function Gallery({ items }: { items: readonly Proyek[] }) {
  const [active, setActive] = useState<Proyek | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!active) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <div>
      {items.length === 0 ? (
        <p className="rounded-card border border-line bg-background p-6 text-ink-muted">
          Foto proyek belum tersedia.
        </p>
      ) : null}

      <ul className="columns-2 gap-4 sm:gap-5 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-4 inline-block w-full break-inside-avoid align-top sm:mb-5"
            >
              <button
                type="button"
                className="block w-full text-left"
                aria-label={`Perbesar foto: ${altProyek(p)}`}
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setActive(p);
                }}
              >
                <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 1024px) 384px, 50vw" className="rounded-card" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <AnimatePresence>
        {active ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Foto proyek: ${altProyek(active)}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.div
              className="w-full max-w-4xl"
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex justify-end">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="inline-flex min-h-11 items-center gap-2 rounded-control bg-surface px-4 font-display font-semibold text-ink"
                >
                  <X aria-hidden="true" className="size-5" />
                  Tutup
                </button>
              </div>
              <Asset id={active.assetId as AssetId} alt={altProyek(active)} sizes="(min-width: 1024px) 896px, 100vw" className="rounded-card" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
