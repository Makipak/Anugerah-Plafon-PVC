"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

function messageFor(pathname: string): string {
  if (pathname.startsWith("/produk")) return waMessages.produk("[nama motif]");
  if (pathname.startsWith("/layanan/harga")) return waMessages.harga;
  if (pathname.startsWith("/layanan")) return waMessages.jasa;
  return waMessages.umum;
}

// Hanya mobile. Muncul setelah pengguna scroll sedikit; tidak menutupi konten di bagian atas halaman.
export function WhatsAppFloat() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          key="wa-float"
          href={waLink(messageFor(pathname))}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "floating" })}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-5 font-display text-base font-semibold text-white shadow-floating md:hidden"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          <WhatsAppIcon />
          Chat WhatsApp
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
