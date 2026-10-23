import { z } from "zod";

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal harus YYYY-MM-DD");
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug harus huruf kecil dan tanda hubung");

export const faqSchema = z.object({ q: z.string().min(1), a: z.string().min(1) });
export type Faq = z.infer<typeof faqSchema>;

export const produkSchema = z.object({
  slug,
  nama: z.string().min(1),
  ringkasan: z.string().min(1),
  kelebihan: z.array(z.string().min(1)),
  faq: z.array(faqSchema),
  diperbaruiPada: isoDate,
});
export type Produk = z.infer<typeof produkSchema>;

export const kategoriSchema = z.object({
  slug,
  nama: z.string().min(1),
  ringkasan: z.string().min(1).optional(),
  thumbnail: z.string().startsWith("/").optional(),
});
export type Kategori = z.infer<typeof kategoriSchema>;

export const merekSchema = z.object({
  slug,
  nama: z.string().min(1),
  ringkasan: z.string().min(1).optional(),
  thumbnail: z.string().startsWith("/").optional(),
});
export type Merek = z.infer<typeof merekSchema>;

// slug seri hanya perlu unik di dalam satu merek (mis. "glossy" ada di dua merek).
export const seriSchema = z.object({
  slug,
  merek: slug,
  nama: z.string().min(1),
  ringkasan: z.string().min(1).optional(),
  ukuran: z.string().min(1).optional(),
  tebal: z.string().min(1).optional(),
});
export type Seri = z.infer<typeof seriSchema>;

// Foto kosong hanya boleh pada data contoh; tampil sebagai placeholder.
export const warnaSchema = z.object({
  slug,
  nama: z.string().min(1),
  hex: z.string().regex(/^#[0-9a-fA-F]{6}$/, "Format hex harus #RRGGBB").optional(),
  foto: z.array(z.string()),
  fotoOpsional: z.boolean().optional(),
});
export type Warna = z.infer<typeof warnaSchema>;

export const produkKatalogSchema = z.object({
  slug,
  nama: z.string().min(1),
  kode: z.string().min(1).optional(),
  kategori: slug,
  merek: slug.optional(),
  seri: slug.optional(),
  motif: z.string().min(1).optional(),
  ukuran: z.string().min(1).optional(),
  tebal: z.string().min(1).optional(),
  warna: z.array(warnaSchema).min(1),
  contoh: z.boolean().optional(),
});
export type ProdukKatalog = z.infer<typeof produkKatalogSchema>;

// Jenis pekerjaan interior. Urutan di sini = urutan tampil di situs. Tambah jenis baru: tambahkan slug di sini,
// label di src/lib/interior-label.ts, dan entri di src/content/interior.ts.
export const interiorSlugs = ["plafon", "kamar-set", "kitchen-set", "partisi", "backdrop-tv"] as const;
export type InteriorSlug = (typeof interiorSlugs)[number];

// Satu entri = satu halaman /layanan/interior-design/<slug>.
export const interiorSchema = z.object({
  slug: z.enum(interiorSlugs),
  nama: z.string().min(1), // nama di kartu dan judul bagian
  ringkasan: z.string().min(1), // satu kalimat untuk kartu di halaman induk
  judul: z.string().min(1), // H1 halaman detail
  metaTitle: z.string().min(1).max(38), // template " | Anugrah Plafon PVC" ditambah layout
  metaDescription: z.string().min(80).max(170),
  lead: z.string().min(1), // paragraf pembuka di bawah H1
  penjelasan: z.array(z.string().min(1)).min(1), // paragraf penjelasan
  poin: z.array(z.string().min(1)).min(1), // daftar "yang bisa dikonsultasikan"
  faq: z.array(faqSchema).min(2),
  foto: z.array(z.string().startsWith("/")).optional(),
});
export type Interior = z.infer<typeof interiorSchema>;

export const proyekSchema = z.object({
  slug,
  judul: z.string().min(1),
  assetId: z.string().min(1),
  lokasi: z.object({ kecamatan: z.string().min(1), kota: z.string().min(1) }),
  ruang: z.string().min(1),
  // Kategori galeri hanya tiga. Ruko, toko, atau ruang usaha lain dimasukkan ke "kantor".
  jenisRuang: z.enum(["rumah", "masjid", "kantor"]),
  // Jenis pekerjaan pada proyek ini (mis. rumah + kamar-set). Tampil sebagai keterangan di galeri.
  interior: z.enum(interiorSlugs),
  luasM2: z.number().positive().optional(),
  bahan: z.string().min(1),
  tahun: z.number().int().min(2000).max(2100),
});
export type Proyek = z.infer<typeof proyekSchema>;

export const areaSchema = z.object({
  slug,
  nama: z.string().min(1),
  ringkasan: z.string().min(1),
  fakta: z.array(z.string().min(1)),
  proyekSlugs: z.array(z.string()),
  assetId: z.string().min(1),
  faq: z.array(faqSchema),
});
export type Area = z.infer<typeof areaSchema>;

export const testimoniSchema = z.object({
  kutipan: z.string().min(1),
  nama: z.string().min(1), // boleh inisial
  lokasi: z.string().min(1),
  izin: z.literal(true), // testimoni hanya dengan izin (PRD NFR-08)
});
export type Testimoni = z.infer<typeof testimoniSchema>;

export const postSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(100).max(170),
  date: isoDate,
  updated: isoDate,
  slug,
  keyword: z.string().min(1),
  coverAssetId: z.string().min(1),
  menautKe: z.array(z.string().startsWith("/")).min(1),
});
export type PostMeta = z.infer<typeof postSchema>;
