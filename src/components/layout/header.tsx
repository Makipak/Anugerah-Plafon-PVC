"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Orbitron } from "next/font/google";
import { Asset } from "@/components/asset";
import { navItems, waMessages } from "@/lib/site";
import { WhatsAppButton } from "./whatsapp-button";

const logoFont = Orbitron({ subsets: ["latin"], weight: "900", display: "swap" });

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/95">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="-ml-4 flex min-w-0 shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <span className="block w-24 sm:w-28">
            <Asset id="LOGO-01" sizes="(min-width: 640px) 112px, 96px" />
          </span>
          <span
            className={`${logoFont.className} -ml-6 block -skew-x-12 whitespace-nowrap text-xs uppercase tracking-wide text-ink min-[400px]:text-sm sm:text-base`}
          >
            Anugrah Plafon PVC
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-base text-ink hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppButton message={waMessages.umum} location="header" label="Chat WhatsApp" className="min-h-11 max-sm:hidden" />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-control border border-line-strong lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-mobile" aria-label="Navigasi utama" className="border-t border-line bg-background lg:hidden">
          <ul className="container-page py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-line text-base text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <WhatsAppButton message={waMessages.umum} location="menu-mobile" className="w-full" />
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}