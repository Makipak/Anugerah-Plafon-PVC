import { produkSchema, type Produk } from "./schemas";

// Info umum plafon PVC. Daftar merek, motif, dan warna ada di content/katalog.ts.
const plafonPvc: Produk = produkSchema.parse({
  slug: "plafon-pvc",
  nama: "Plafon PVC",
  ringkasan:
    "Plafon PVC dibuat dari polivinil klorida (Polyvinyl Chloride), bahan plastik yang kuat dan ringan. Panelnya dipasang pada rangka dan tersedia sebagai material saja atau dengan jasa pasang.",
  kelebihan: [
    "Bahan PVC tidak dimakan rayap.",
    "Permukaan mudah dilap untuk perawatan sehari-hari.",
    "Panel ringan dan dipasang dengan rangka, sehingga pemasangan tidak membongkar struktur bangunan.",
  ],
  faq: [
    {
      q: "Plafon PVC cocok dipasang di area apa saja?",
      a: "Plafon PVC cocok untuk hunian, perkantoran, dan tempat ibadah. Kirim foto ruangan melalui WhatsApp untuk membahas kebutuhan Anda.",
    },
    {
      q: "Apakah bisa beli material saja tanpa jasa pasang?",
      a: "Bisa. Material dijual terpisah, atau paket dengan jasa pasang.",
    },
    {
      q: "Berapa lama pengerjaan untuk satu ruangan?",
      a: "Waktu pemasangan bergantung pada ukuran dan kondisi ruangan. Hubungi kami untuk membahas kebutuhan Anda.",
    },
  ],
  diperbaruiPada: "2026-10-01",
});

export const produkList: readonly Produk[] = [plafonPvc];
export const produkUtama = plafonPvc;
