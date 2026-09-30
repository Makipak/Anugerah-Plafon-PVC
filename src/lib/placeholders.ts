const MARK = "[ISI]";

/** Mengumpulkan jalur semua string yang masih memuat penanda [ISI]. */
export function findPlaceholders(value: unknown, path = "$"): string[] {
  if (typeof value === "string") return value.includes(MARK) ? [path] : [];
  if (Array.isArray(value)) return value.flatMap((v, i) => findPlaceholders(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => findPlaceholders(v, `${path}.${k}`));
  }
  return [];
}

export const isProduction = process.env.VERCEL_ENV === "production";

/**
 * Data contoh (DUMMY) sedang dipakai untuk harga, kontak, proyek, dan teks.
 * Ubah ke false SETELAH semua data dummy diganti data asli klien. Selama true,
 * build produksi sengaja gagal supaya data contoh tidak tayang. Cari penanda "DUMMY" untuk menemukan nilainya.
 */
export const DATA_DUMMY = true;
