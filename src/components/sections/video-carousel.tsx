"use client";

import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { VideoItem } from "@/content/video";
import { track } from "@/lib/analytics";

function VideoCard({
  item,
  onPlay,
}: {
  item: VideoItem;
  onPlay: (video: HTMLVideoElement, item: VideoItem) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.intersectionRatio < 0.4) video.pause();
    }, { threshold: [0, 0.4, 1] });
    const pauseWhenHidden = () => {
      if (document.hidden) video.pause();
    };
    const updateFullscreen = () => {
      setFullscreen(document.fullscreenElement === container);
    };

    observer.observe(video);
    document.addEventListener("visibilitychange", pauseWhenHidden);
    document.addEventListener("fullscreenchange", updateFullscreen);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pauseWhenHidden);
      document.removeEventListener("fullscreenchange", updateFullscreen);
      video.pause();
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        onPlay(video, item);
      } catch {
        setPlaybackError(true);
      }
    } else {
      video.pause();
    }
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (document.fullscreenElement === container) {
        await document.exitFullscreen();
      } else {
        await container.requestFullscreen();
      }
      setFullscreenError(false);
    } catch {
      setFullscreenError(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="video-player-shell absolute inset-0 overflow-hidden rounded-card bg-ink"
    >
      <div className="video-player-frame relative size-full overflow-hidden">
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster}
          playsInline
          preload="metadata"
          aria-label={item.judul}
          onPlay={() => {
            setPlaying(true);
            setPlaybackError(false);
          }}
          onPause={() => setPlaying(false)}
          className="absolute inset-0 size-full bg-ink object-contain"
        />
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={`${playing ? "Jeda" : "Putar"} video: ${item.judul}`}
          aria-pressed={playing}
          className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/95 text-ink shadow-floating transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {playing ? (
            <span aria-hidden="true" className="flex gap-1">
              <span className="h-5 w-1.5 rounded-sm bg-current" />
              <span className="h-5 w-1.5 rounded-sm bg-current" />
            </span>
          ) : (
            <span aria-hidden="true" className="ml-1 size-0 border-y-[10px] border-l-[15px] border-y-transparent border-l-current" />
          )}
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={`${fullscreen ? "Keluar dari" : "Tampilkan"} layar penuh: ${item.judul}`}
          className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-background/95 text-ink shadow-floating focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {fullscreen ? <Minimize2 aria-hidden="true" className="size-5" /> : <Maximize2 aria-hidden="true" className="size-5" />}
        </button>
        {playbackError || fullscreenError ? (
          <p role="status" className="absolute inset-x-3 bottom-16 rounded bg-ink/80 px-3 py-2 text-center text-sm text-background">
            {playbackError ? "Video tidak dapat diputar. Silakan coba lagi." : "Layar penuh tidak tersedia di browser ini."}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function VideoCarousel({ items, placeholder = false }: { items: readonly VideoItem[]; placeholder?: boolean }) {
  const scroller = useRef<HTMLUListElement>(null);
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

  const onPlay = (active: HTMLVideoElement, item: VideoItem) => {
    scroller.current?.querySelectorAll("video").forEach((video) => {
      if (video !== active) video.pause();
    });
    track("video_play", { video: item.id });
  };

  const bisaGeser = !(edge.start && edge.end);

  return (
    <div>
      <div className="relative -mx-5">
        <ul
          ref={scroller}
          onScroll={update}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 motion-safe:scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                ) : (
                  <VideoCard item={item} onPlay={onPlay} />
                )}
              </div>
            </li>
          ))}
        </ul>

        {bisaGeser ? (
          <div className="pointer-events-none absolute inset-x-1 top-1/2 z-10 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              onClick={() => geser(-1)}
              disabled={edge.start}
              aria-label="Video sebelumnya"
              className="pointer-events-auto flex size-11 items-center justify-center rounded-full border border-primary bg-background/95 text-ink shadow-floating transition-colors hover:bg-panel disabled:cursor-not-allowed disabled:border-line disabled:text-line-strong disabled:hover:bg-background/95"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => geser(1)}
              disabled={edge.end}
              aria-label="Video berikutnya"
              className="pointer-events-auto flex size-11 items-center justify-center rounded-full border border-primary bg-background/95 text-ink shadow-floating transition-colors hover:bg-panel disabled:cursor-not-allowed disabled:border-line disabled:text-line-strong disabled:hover:bg-background/95"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
