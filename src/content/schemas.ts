import { z } from "zod";

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal harus YYYY-MM-DD");
const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug harus huruf kecil dan tanda hubung");

export const faqSchema = z.object({ q: z.string().min(1), a: z.string().min(1) });
export type Faq = z.infer<typeof faqSchema>;

export const produkSchema = z.object({
  slug,
  nama: z.string().min(1),
  ringkasan: z.string().min(1),
  // Gambar diambil dari manifest aset lewat assetId (docs/16), bukan src langsung.
  varian: z.array(
    z.object({
      assetId: z.string().min(1),
      kode: z.string().min(1),
      nama: z.string().min(1),
      motif: z.string().min(1),
      ukuran: z.string().min(1),
      tebal: z.string().optional(),
    }),
  ),
  hargaMulai: z.number().positive().optional(),
  hargaSampai: z.number().positive().optional(),
  catatanHarga: z.string().optional(),
  kelebihan: z.array(z.string().min(1)),
  faq: z.array(faqSchema),
  diperbaruiPada: isoDate,
});
export type Produk = z.infer<typeof produkSchema>;

export const proyekSchema = z.object({
  slug,
  judul: z.string().min(1),
  assetId: z.string().min(1),
  lokasi: z.object({ kecamatan: z.string().min(1), kota: z.string().min(1) }),
  ruang: z.string().min(1),
  jenisRuang: z.enum(["rumah", "ruko", "masjid", "kantor", "lainnya"]),
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

export const hargaRowSchema = z.object({
  item: z.string().min(1),
  satuan: z.string().min(1),
  kisaran: z.string().min(1),
  catatan: z.string().optional(),
});
export type HargaRow = z.infer<typeof hargaRowSchema>;

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
