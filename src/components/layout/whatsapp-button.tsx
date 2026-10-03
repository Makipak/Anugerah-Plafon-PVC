"use client";

import { track } from "@/lib/analytics";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function WhatsAppButton({
  message,
  location,
  label = "Chat WhatsApp",
  className = "",
}: {
  message: string;
  location: string; // untuk analitik: letak tombol
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
      className={`inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-whatsapp px-5 py-3 font-display text-base font-semibold text-white transition-[filter,transform] duration-150 hover:brightness-90 active:scale-[0.98] ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
