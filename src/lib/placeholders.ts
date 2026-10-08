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

/**
 * True hanya untuk rilis produksi yang sebenarnya. SITE_STAGING=1 memaksa perilaku preview
 * (noindex, robots disallow, tanpa gerbang data) walau Vercel menandai deploy sebagai Production,
 * mis. saat memamerkan situs dengan data dummy dari branch main. Hapus variabel itu saat rilis.
 */
export const isProduction =
  process.env.VERCEL_ENV === "production" && process.env.SITE_STAGING !== "1";

/**
 * Set true bila data contoh dipakai lagi (mis. proyek baru dengan data sementara). Selama true,
 * build produksi sengaja gagal supaya data contoh tidak tayang.
 */
export const DATA_DUMMY = false;
