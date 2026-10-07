import { hargaRowSchema, type HargaRow } from "./schemas";

// Kisaran harga sesuai data pemilik usaha; perbarui bila berubah.
export const hargaDiperbaruiPada = "2026-10-01";

export const hargaMaterial: readonly HargaRow[] = [
  { item: "Plafon PVC motif polos", satuan: "per m2", kisaran: "Rp 50.000 - Rp 70.000" },
  { item: "Plafon PVC motif kayu", satuan: "per m2", kisaran: "Rp 65.000 - Rp 95.000" },
  { item: "Plafon PVC motif marmer", satuan: "per m2", kisaran: "Rp 70.000 - Rp 100.000" },
].map((r) => hargaRowSchema.parse(r));

export const hargaJasa: readonly HargaRow[] = [
  { item: "Jasa pasang (termasuk rangka)", satuan: "per m2", kisaran: "Rp 35.000 - Rp 55.000", catatan: "Sudah termasuk rangka dan pembersihan setelah pekerjaan." },
  { item: "Biaya transport luar Serang", satuan: "per kunjungan", kisaran: "Rp 50.000 - Rp 150.000" },
].map((r) => hargaRowSchema.parse(r));

export const faktorHarga = [
  "Motif dan kualitas panel.",
  "Ukuran dan ketebalan panel.",
  "Luas dan bentuk ruangan; ruang dengan banyak sudut butuh lebih banyak potongan.",
  "Lokasi pemasangan dan akses ke lokasi.",
  "Kondisi plafon lama: dibongkar dulu atau dipasang di atasnya.",
] as const;
