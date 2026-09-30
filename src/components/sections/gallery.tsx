"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Asset } from "@/components/asset";
import type { AssetId } from "@/content/assets";
import type { Proyek } from "@/content/schemas";

const labelRuang: Record<Proyek["jenisRuang"], string> = {
  rumah: "Rumah",
  ruko: "Ruko",
  masjid: "Masjid",
  kantor: "Kantor",
  lainnya: "Lainnya",
};

export function Gallery({ items }: { items: readonly Proyek[] }) {
  const [filter, setFilter] = useState<Proyek["jenisRuang"] | "semua">("semua");
  const [active, setActive] = useState<Proyek | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const jenis = Array.from(new Set(items.map((p) => p.jenisRuang)));
  const shown = filter === "semua" ? items : items.filter((p) => p.jenisRuang === filter);

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
      {jenis.length > 1 ? (
        <div role="group" aria-label="Filter jenis ruang" className="mb-8 flex flex-wrap gap-2">
          {(["semua", ...jenis] as const).map((j) => (
            <button
              key={j}
              type="button"
              aria-pressed={filter === j}
              onClick={() => setFilter(j)}
              className={`min-h-11 rounded-full border px-4 font-display text-sm font-medium ${
                filter === j ? "border-primary bg-primary text-white" : "border-line-strong bg-surface text-ink"
              }`}
            >
              {j === "semua" ? "Semua" : labelRuang[j]}
            </button>
          ))}
        </div>
      ) : null}

      <ul className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                className="block w-full text-left"
                aria-label={`Perbesar foto ${p.judul}`}
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setActive(p);
                }}
              >
                <Asset id={p.assetId as AssetId} sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw" className="rounded-card" />
                <span className="mt-3 block">
                  <span className="text-label text-accent">
                    {p.lokasi.kecamatan}, {p.tahun}
                  </span>
                  <span className="mt-1 block font-display text-lg font-semibold">{p.judul}</span>
                  <span className="block text-sm text-ink-muted">
                    {labelRuang[p.jenisRuang]} | {p.bahan}
                    {p.luasM2 ? ` | ${p.luasM2} m2` : ""}
                  </span>
                </span>
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
            aria-label={active.judul}
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
              <Asset id={active.assetId as AssetId} sizes="(min-width: 1024px) 896px, 100vw" className="rounded-card" />
              <p className="mt-3 text-white">
                {active.judul} | {active.lokasi.kecamatan}, {active.lokasi.kota} | {active.tahun}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
