"use client";

import { track } from "@/lib/analytics";

// Tautan telepon atau peta dengan event analitik.
export function TrackedLink({
  href,
  event,
  location,
  children,
  className = "",
}: {
  href: string;
  event: "phone_click" | "map_click";
  location: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      onClick={() => track(event, { location })}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
