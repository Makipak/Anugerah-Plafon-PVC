import { proyekSchema, type InteriorSlug, type Proyek } from "./schemas";

// Proyek yang tampil di galeri dan halaman wilayah; tambahkan proyek nyata lain bila ada.
//
// jenisRuang : kategori galeri, hanya "rumah" | "masjid" | "kantor" (ruko/toko/ruang usaha -> "kantor").
// interior   : jenis pekerjaan, salah satu slug di src/content/interior.ts
//              ("plafon" | "kamar-set" | "kitchen-set" | "partisi" | "backdrop-tv").
//              Contoh: rumah + kamar-set tampil di galeri sebagai "Rumah · Kamar set".
// assetId    : ID di src/content/assets.ts (PROJ-xx-SESUDAH). Untuk proyek baru, tambahkan aset di sana juga.
const daftarProyek: ReadonlyArray<{
  judul: string;
  kecamatan: string;
  ruang: string;
  bahan: string;
  tahun: number;
  jenisRuang: Proyek["jenisRuang"];
  interior: InteriorSlug;
}> = [
  { judul: "Plafon Ruang Tamu", kecamatan: "Cipocok Jaya", ruang: "Ruang tamu", bahan: "PVC motif kayu", tahun: 2026, jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Teras Depan", kecamatan: "Serang", ruang: "Teras", bahan: "PVC motif polos", tahun: 2026, jenisRuang: "rumah", interior: "plafon" },
  // Sebelumnya "ruko"; galeri hanya punya tiga kategori sehingga dipindah ke "kantor". Konfirmasi ke pemilik bila perlu.
  { judul: "Plafon Ruang Kantor DPRD", kecamatan: "Kasemen", ruang: "Area toko", bahan: "PVC motif polos", tahun: 2025, jenisRuang: "kantor", interior: "plafon" },
  { judul: "Plafon Masjid", kecamatan: "Taktakan", ruang: "Serambi", bahan: "PVC motif marmer", tahun: 2025, jenisRuang: "masjid", interior: "plafon" },
  { judul: "Plafon Kamar Utama", kecamatan: "Walantaka", ruang: "Kamar tidur", bahan: "PVC motif kayu", tahun: 2025, jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Ruang Kantor", kecamatan: "Curug", ruang: "Ruang kerja", bahan: "PVC motif polos", tahun: 2024, jenisRuang: "kantor", interior: "plafon" },
];

export const proyekList: readonly Proyek[] = daftarProyek.map((d, i) =>
  proyekSchema.parse({
    slug: `proyek-${String(i + 1).padStart(2, "0")}`,
    judul: d.judul,
    assetId: `PROJ-${String(i + 1).padStart(2, "0")}-SESUDAH`,
    lokasi: { kecamatan: d.kecamatan, kota: "Serang" },
    ruang: d.ruang,
    jenisRuang: d.jenisRuang,
    interior: d.interior,
    bahan: d.bahan,
    tahun: d.tahun,
  }),
);
