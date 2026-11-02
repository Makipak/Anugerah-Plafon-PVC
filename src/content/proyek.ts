import { proyekSchema, type InteriorSlug, type Proyek } from "./schemas";

// Proyek yang tampil di galeri dan halaman wilayah; tambahkan proyek nyata lain bila ada.
//
// jenisRuang : kategori galeri, hanya "rumah" | "masjid" | "kantor" (ruko/toko/ruang usaha -> "kantor").
// interior   : jenis pekerjaan, salah satu slug di src/content/interior.ts
//              ("plafon" | "kamar-set" | "kitchen-set" | "partisi" | "backdrop-tv").
//              Contoh: rumah + kamar-set tampil di galeri sebagai "Rumah · Furniture".
// assetId    : ID di src/content/assets.ts (PROJ-xx-SESUDAH). Untuk proyek baru, tambahkan aset di sana juga.
type DataProyek = {
  judul: string;
  ruang: string;
  bahan: string;
  kecamatan?: string;
  tahun?: number;
  jenisRuang: Proyek["jenisRuang"];
  interior: InteriorSlug;
};

const daftarProyek: ReadonlyArray<DataProyek> = [
  { judul: "Plafon Ruang Tamu", kecamatan: "Cipocok Jaya", ruang: "Ruang tamu", bahan: "PVC motif kayu", tahun: 2026, jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Teras Depan", kecamatan: "Serang", ruang: "Teras", bahan: "PVC motif polos", tahun: 2026, jenisRuang: "rumah", interior: "plafon" },
  // Sebelumnya "ruko"; galeri hanya punya tiga kategori sehingga dipindah ke "kantor". Konfirmasi ke pemilik bila perlu.
  { judul: "Plafon Ruang Kantor DPRD", kecamatan: "Kasemen", ruang: "Area toko", bahan: "PVC motif polos", tahun: 2025, jenisRuang: "kantor", interior: "plafon" },
  { judul: "Plafon Masjid", kecamatan: "Taktakan", ruang: "Serambi", bahan: "PVC motif marmer", tahun: 2025, jenisRuang: "masjid", interior: "plafon" },
  { judul: "Plafon Kamar Utama", kecamatan: "Walantaka", ruang: "Kamar tidur", bahan: "PVC motif kayu", tahun: 2025, jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Ruang Kantor", kecamatan: "Curug", ruang: "Ruang kerja", bahan: "PVC motif polos", tahun: 2024, jenisRuang: "kantor", interior: "plafon" },
];

const fotoTambahan: ReadonlyArray<Omit<DataProyek, "bahan">> = [
  { judul: "Plafon Masjid 2", ruang: "area masjid", jenisRuang: "masjid", interior: "plafon" },
  { judul: "Pemasangan Plafon Masjid 3", ruang: "area masjid", jenisRuang: "masjid", interior: "plafon" },
  { judul: "Plafon Masjid 4", ruang: "area masjid", jenisRuang: "masjid", interior: "plafon" },
  { judul: "Pemasangan Plafon Masjid 5", ruang: "area masjid", jenisRuang: "masjid", interior: "plafon" },
  { judul: "Plafon Rumah 1", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 2", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Backdrop TV Rumah 1", ruang: "ruang keluarga", jenisRuang: "rumah", interior: "backdrop-tv" },
  { judul: "Plafon Rumah 3", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 4", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Backdrop TV Rumah 2", ruang: "ruang keluarga", jenisRuang: "rumah", interior: "backdrop-tv" },
  { judul: "Backdrop TV Rumah 3", ruang: "ruang keluarga", jenisRuang: "rumah", interior: "backdrop-tv" },
  { judul: "Panel Interior Rumah 1", ruang: "lorong rumah", jenisRuang: "rumah", interior: "partisi" },
  { judul: "Plafon Teras Rumah 1", ruang: "teras rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Teras Rumah 2", ruang: "teras rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Pemasangan Plafon Rumah 1", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Pemasangan Plafon Rumah 2", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Pemasangan Plafon Rumah 3", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 5", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 6", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 7", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 8", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 9", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 10", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 11", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 12", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 13", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 14", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 15", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
  { judul: "Plafon Rumah 16", ruang: "interior rumah", jenisRuang: "rumah", interior: "plafon" },
];

const semuaProyek: ReadonlyArray<DataProyek> = [
  ...daftarProyek,
  ...fotoTambahan.map((foto) => ({ ...foto, bahan: "PVC" })),
];

export const proyekList: readonly Proyek[] = semuaProyek.map((d, i) =>
  proyekSchema.parse({
    slug: `proyek-${String(i + 1).padStart(2, "0")}`,
    judul: d.judul,
    assetId: `PROJ-${String(i + 1).padStart(2, "0")}-SESUDAH`,
    ...(d.kecamatan ? { lokasi: { kecamatan: d.kecamatan, kota: "Serang" } } : {}),
    ruang: d.ruang,
    jenisRuang: d.jenisRuang,
    interior: d.interior,
    bahan: d.bahan,
    ...(d.tahun ? { tahun: d.tahun } : {}),
  }),
);
