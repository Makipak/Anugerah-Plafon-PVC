import type { InteriorSlug, Proyek } from "@/content/schemas";

// File ringan tanpa zod agar aman dipakai komponen client (galeri).
export const labelInterior: Record<InteriorSlug, string> = {
  plafon: "Plafon",
  "kamar-set": "Kamar set",
  "kitchen-set": "Kitchen set",
  partisi: "Partisi",
  "backdrop-tv": "Backdrop TV",
};

export const labelRuang: Record<Proyek["jenisRuang"], string> = {
  rumah: "Rumah",
  masjid: "Masjid",
  kantor: "Kantor",
};

// Urutan kategori galeri; selalu tampil ketiganya.
export const urutanRuang: readonly Proyek["jenisRuang"][] = ["rumah", "masjid", "kantor"];

// Contoh: "Rumah · Kamar set"
export function keteranganProyek(p: Pick<Proyek, "jenisRuang" | "interior">): string {
  return `${labelRuang[p.jenisRuang]} · ${labelInterior[p.interior]}`;
}
