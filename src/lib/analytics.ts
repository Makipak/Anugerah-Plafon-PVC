type EventName = "whatsapp_click" | "phone_click" | "map_click";

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params: Record<string, string | number>) => void;
  }
}

// Tidak mengirim data pribadi; hanya nama event dan lokasi tombol.
export function track(name: EventName, params: Record<string, string | number> = {}): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}
