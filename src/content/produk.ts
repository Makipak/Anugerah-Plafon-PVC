import { produkSchema, type Produk } from "./schemas";
import type { AssetId } from "./assets";

// Daftar motif dan spesifikasi sesuai data pemilik usaha.
const daftarMotif = [
  { nama: "Polos Putih", motif: "Polos" },
  { nama: "Polos Krem", motif: "Polos" },
  { nama: "Kayu Jati", motif: "Kayu" },
  { nama: "Kayu Walnut", motif: "Kayu" },
  { nama: "Kayu Oak", motif: "Kayu" },
  { nama: "Marmer Putih", motif: "Marmer" },
  { nama: "Marmer Abu", motif: "Marmer" },
  { nama: "Abu Doff", motif: "Polos" },
];
const motifIds: AssetId[] = [
  "MOTIF-01", "MOTIF-02", "MOTIF-03", "MOTIF-04",
  "MOTIF-05", "MOTIF-06", "MOTIF-07", "MOTIF-08",
];

const plafonPvc: Produk = produkSchema.parse({
  slug: "plafon-pvc",
  nama: "Plafon PVC",
  ringkasan:
    "Plafon panel PVC untuk rumah, ruko, dan bangunan publik di Serang dan sekitarnya. Tersedia sebagai material saja atau dengan jasa pasang.",
  varian: motifIds.map((assetId, i) => ({
    assetId,
    kode: `M${String(i + 1).padStart(2, "0")}`,
    nama: daftarMotif[i]?.nama ?? "Motif",
    motif: daftarMotif[i]?.motif ?? "Polos",
    ukuran: "25 cm x 4 m",
    tebal: "8 mm",
  })),
  // Harga tampil hanya jika klien setuju (PRD bagian 8). Jangan menyalin harga dari artikel riset.
  hargaMulai: undefined,
  hargaSampai: undefined,
  catatanHarga: "Harga belum termasuk jasa pasang dan dapat berubah sewaktu-waktu.",
  kelebihan: [
    "Bahan PVC tidak dimakan rayap.",
    "Permukaan mudah dilap untuk perawatan sehari-hari.",
    "Panel ringan dan dipasang dengan rangka, sehingga pemasangan tidak membongkar struktur bangunan.",
  ],
  faq: [
    {
      q: "Plafon PVC cocok dipasang di area apa saja?",
      a: "Plafon PVC umum dipasang di teras, ruang tamu, kamar, kamar mandi, ruko, dan masjid. Kirim foto ruangan lewat WhatsApp untuk saran yang sesuai.",
    },
    {
      q: "Apakah bisa beli material saja tanpa jasa pasang?",
      a: "Bisa. Material dijual terpisah, atau paket dengan jasa pasang.",
    },
    {
      q: "Berapa lama pengerjaan untuk satu ruangan?",
      a: "Untuk ruangan berukuran standar, pemasangan umumnya selesai dalam satu sampai dua hari setelah material siap.",
    },
  ],
  diperbaruiPada: "2026-10-01",
});

export const produkList: readonly Produk[] = [plafonPvc];
export const produkUtama = plafonPvc;
