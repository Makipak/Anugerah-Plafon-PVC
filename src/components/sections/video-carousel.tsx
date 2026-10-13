"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { VideoItem } from "@/content/video";
import { track } from "@/lib/analytics";

// Satu video aktif pada satu waktu: memutar video lain otomatis menutup yang sebelumnya.
// Video berhenti sendiri saat tergeser keluar layar supaya suaranya tidak terus berjalan.
function PlayingVideo({ item, onEnd }: { item: VideoItem; onEnd: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry && entry.intersectionRatio < 0.4) el.pause();
    }, { threshold: [0, 0.4, 1] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={item.src}
      poster={item.poster}
      autoPlay
      controls
      playsInline
      preload="auto"
      aria-label={item.judul}
      onEnded={onEnd}
      className="absolute inset-0 size-full bg-ink object-cover"
    />
  );
}

export function VideoCarousel({ items, placeholder = false }: { items: readonly VideoItem[]; placeholder?: boolean }) {
  const scroller = useRef<HTMLUListElement>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [edge, setEdge] = useState({ start: true, end: true });

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update, items.length]);

  const geser = (arah: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: arah * el.clientWidth * 0.9, behavior: reduce ? "auto" : "smooth" });
  };

  const putar = (item: VideoItem) => {
    setPlaying(item.id);
    track("video_play", { video: item.id });
  };

  const bisaGeser = !(edge.start && edge.end);

  return (
    <div>
      {/* -mx-5 px-5: kartu terakhir menyembul di tepi layar HP sebagai petunjuk bahwa daftar bisa digeser. */}
      <ul
        ref={scroller}
        onScroll={update}
        className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="basis-[58%] shrink-0 snap-start sm:basis-[calc((100%-40px)/3)] lg:basis-[calc((100%-60px)/4)]"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-card bg-panel">
              {placeholder ? (
                <div
                  aria-hidden="true"
                  className="flex size-full items-end border border-line"
                  style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent 0 11px, rgba(27,26,23,0.06) 11px 12px)" }}
                >
                  <p className="text-label m-3 text-ink-muted">
                    {item.id} | 9:16 | min 540x960 | {item.deskripsi}
                  </p>
                </div>
              ) : playing === item.id ? (
                <PlayingVideo item={item} onEnd={() => setPlaying(null)} />
              ) : (
                <button
                  type="button"
                  onClick={() => putar(item)}
                  aria-label={`Putar video: ${item.judul}`}
                  className="group absolute inset-0 block size-full"
                >
                  <Image
                    src={item.poster}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 58vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-ink/15 transition-colors duration-150 group-hover:bg-ink/25" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/95 text-ink shadow-floating transition-transform duration-150 group-hover:scale-105"
                  >
                    <Play className="ml-0.5 size-6 fill-current" />
                  </span>
                </button>
              )}
            </div>
            <p className="font-display mt-3 text-base font-semibold leading-snug">{item.judul}</p>
          </li>
        ))}
      </ul>

      {bisaGeser ? (
        <div className="mt-6 hidden justify-end gap-2 md:flex">
          <button
            type="button"
            onClick={() => geser(-1)}
            disabled={edge.start}
            aria-label="Video sebelumnya"
            className="flex size-11 items-center justify-center rounded-full border border-primary text-ink transition-colors hover:bg-panel disabled:cursor-not-allowed disabled:border-line disabled:text-line-strong disabled:hover:bg-transparent"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => geser(1)}
            disabled={edge.end}
            aria-label="Video berikutnya"
            className="flex size-11 items-center justify-center rounded-full border border-primary text-ink transition-colors hover:bg-panel disabled:cursor-not-allowed disabled:border-line disabled:text-line-strong disabled:hover:bg-transparent"
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
