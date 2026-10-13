"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Asset } from "@/components/asset";
import type { AssetId } from "@/content/assets";
import type { Proyek } from "@/content/schemas";
import type { InteriorSlug } from "@/content/schemas";
import { altProyek } from "@/lib/alt";
import { keteranganProyek, labelInterior, labelRuang, urutanRuang } from "@/lib/interior-label";

const chip = (aktif: boolean) =>
  `min-h-11 rounded-full border px-4 font-display text-sm font-medium transition-colors ${
    aktif ? "border-primary bg-primary-tint text-primary" : "border-line-strong bg-surface text-ink hover:bg-panel"
  }`;

export function Gallery({ items }: { items: readonly Proyek[] }) {
  const [filter, setFilter] = useState<Proyek["jenisRuang"] | "semua">("semua");
  const [filterInterior, setFilterInterior] = useState<InteriorSlug | "semua">("semua");
  const [active, setActive] = useState<Proyek | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Kategori ruang selalu tiga (Rumah, Masjid, Kantor); jenis interior hanya yang sudah punya proyek.
  const jenisInterior = (Object.keys(labelInterior) as InteriorSlug[]).filter((k) => items.some((p) => p.interior === k));
  const shown = items.filter(
    (p) => (filter === "semua" || p.jenisRuang === filter) && (filterInterior === "semua" || p.interior === filterInterior),
  );

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
      <div className="mb-8 space-y-4">
        <div role="group" aria-label="Filter jenis ruang" className="flex flex-wrap items-center gap-2">
          {(["semua", ...urutanRuang] as const).map((j) => (
            <button key={j} type="button" aria-pressed={filter === j} onClick={() => setFilter(j)} className={chip(filter === j)}>
              {j === "semua" ? "Semua" : labelRuang[j]}
            </button>
          ))}
        </div>
        {jenisInterior.length > 1 ? (
          <div role="group" aria-label="Filter jenis interior" className="flex flex-wrap items-center gap-2">
            <span className="text-label mr-1 text-ink-muted">Interior</span>
            {(["semua", ...jenisInterior] as const).map((j) => (
              <button key={j} type="button" aria-pressed={filterInterior === j} onClick={() => setFilterInterior(j)} className={chip(filterInterior === j)}>
                {j === "semua" ? "Semua" : labelInterior[j]}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {shown.length === 0 ? (
        <p className="rounded-card border border-line bg-background p-6 text-ink-muted">
          Belum ada foto untuk kombinasi ini. Coba pilih kategori lain, atau tanyakan contoh pekerjaannya lewat WhatsApp.
        </p>
      ) : null}

      <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 lg:grid-cols-3">
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
                <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 1024px) 384px, 50vw" className="rounded-card" />
                <span className="mt-3 block">
                  <span className="text-label block text-ink">{keteranganProyek(p)}</span>
                  <span className="mt-1 block font-display text-lg font-semibold">{p.judul}</span>
                  {p.luasM2 ? <span className="block text-sm text-ink-muted">{p.luasM2} m2</span> : null}
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
              <Asset id={active.assetId as AssetId} alt={altProyek(active)} sizes="(min-width: 1024px) 896px, 100vw" className="rounded-card" />
              <p className="mt-3 text-white">
                {active.judul}
                <span className="block text-sm text-white/80">
                  {keteranganProyek(active)}
                </span>
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
