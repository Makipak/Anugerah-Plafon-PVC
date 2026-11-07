"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Asset } from "@/components/asset";
import type { KategoriGaleri, FotoGaleri } from "@/content/galeri";

export function Gallery({ categories }: { categories: readonly KategoriGaleri[] }) {
  const [active, setActive] = useState<FotoGaleri | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryListRef = useRef<HTMLUListElement>(null);
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

  const visibleCategories = selectedCategory
    ? categories.filter((category) => category.slug === selectedCategory)
    : categories;

  const scrollCategories = (direction: -1 | 1) => {
    categoryListRef.current?.scrollBy({
      left: direction * Math.max(categoryListRef.current.clientWidth * 0.75, 180),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav aria-label="Kategori galeri" className="mb-8">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="flex min-h-11 min-w-0 items-center gap-1 text-xs text-ink-muted sm:gap-2 sm:text-sm">
            <ChevronLeft aria-hidden="true" className="size-4 shrink-0" />
            <span className="truncate">Geser kategori</span>
            <ChevronRight aria-hidden="true" className="size-4 shrink-0" />
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollCategories(-1)}
              aria-label="Geser kategori ke kiri"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-background text-ink hover:bg-panel"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCategories(1)}
              aria-label="Geser kategori ke kanan"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line-strong bg-background text-ink hover:bg-panel"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
        <ul
          ref={categoryListRef}
          className="scrollbar-hidden flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-3"
        >
          <li className="shrink-0 snap-start">
            <button
              type="button"
              aria-pressed={selectedCategory === null}
              onClick={() => setSelectedCategory(null)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 font-display text-sm font-medium ${
                selectedCategory === null
                  ? "border-primary bg-primary text-white"
                  : "border-line-strong bg-background text-ink hover:bg-panel"
              }`}
            >
              Semua
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.slug} className="shrink-0 snap-start">
              <button
                type="button"
                aria-pressed={selectedCategory === category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 font-display text-sm font-medium ${
                  selectedCategory === category.slug
                    ? "border-primary bg-primary text-white"
                    : "border-line-strong bg-background text-ink hover:bg-panel"
                }`}
              >
                {category.nama}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {visibleCategories.map((category) => (
        <section
          key={category.slug}
          aria-labelledby={`judul-galeri-${category.slug}`}
          className="mb-14 last:mb-0"
        >
          <h2 id={`judul-galeri-${category.slug}`} className="mb-6 font-display text-2xl font-semibold text-ink">
            {category.nama}
          </h2>
          {category.foto.length > 0 ? (
            <ul className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 lg:gap-5">
              <AnimatePresence mode="popLayout">
                {category.foto.map((foto) => (
                  <motion.li
                    key={foto.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="mb-3 min-w-0 break-inside-avoid sm:mb-4 lg:mb-5"
                  >
                    <button
                      type="button"
                      className="block w-full overflow-hidden rounded-control text-left"
                      aria-label={`Perbesar foto: ${foto.alt}`}
                      onClick={(e) => {
                        lastTrigger.current = e.currentTarget;
                        setActive(foto);
                      }}
                    >
                      <Asset
                        id={foto.assetId}
                        alt={foto.alt}
                        sizes="(min-width: 1280px) 290px, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        fit="contain"
                        frame={false}
                        ratio={foto.ratio}
                      />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          ) : (
            <p className="rounded-card border border-line bg-background p-6 text-ink-muted">
              Foto proyek belum tersedia.
            </p>
          )}
        </section>
      ))}

      <AnimatePresence>
        {active ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Foto proyek: ${active.alt}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[calc(100dvh-6rem)]"
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
              <Asset id={active.assetId} alt={active.alt} sizes="(min-width: 1024px) 896px, 100vw" fit="contain" frame={false} ratio={active.ratio} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
