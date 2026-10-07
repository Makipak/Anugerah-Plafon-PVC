import { proyekSchema, type Proyek } from "./schemas";

// Proyek yang tampil di galeri dan halaman wilayah; tambahkan proyek nyata lain bila ada.
const daftarProyek = [
  { judul: "Plafon ruang tamu", kecamatan: "Cipocok Jaya", ruang: "Ruang tamu", bahan: "PVC motif kayu", tahun: 2026 },
  { judul: "Plafon teras depan", kecamatan: "Serang", ruang: "Teras", bahan: "PVC motif polos", tahun: 2026 },
  { judul: "Plafon ruko dua lantai", kecamatan: "Kasemen", ruang: "Area toko", bahan: "PVC motif polos", tahun: 2025 },
  { judul: "Plafon serambi masjid", kecamatan: "Taktakan", ruang: "Serambi", bahan: "PVC motif marmer", tahun: 2025 },
  { judul: "Plafon kamar utama", kecamatan: "Walantaka", ruang: "Kamar tidur", bahan: "PVC motif kayu", tahun: 2025 },
  { judul: "Plafon ruang kantor", kecamatan: "Curug", ruang: "Ruang kerja", bahan: "PVC motif polos", tahun: 2024 },
];
const ruangContoh = ["rumah", "rumah", "ruko", "masjid", "rumah", "kantor"] as const;

export const proyekList: readonly Proyek[] = ruangContoh.map((jenisRuang, i) =>
  proyekSchema.parse({
    slug: `proyek-${String(i + 1).padStart(2, "0")}`,
    judul: daftarProyek[i]?.judul ?? "Proyek plafon PVC",
    assetId: `PROJ-${String(i + 1).padStart(2, "0")}-SESUDAH`,
    lokasi: { kecamatan: daftarProyek[i]?.kecamatan ?? "Serang", kota: "Serang" },
    ruang: daftarProyek[i]?.ruang ?? "Ruangan",
    jenisRuang,
    bahan: daftarProyek[i]?.bahan ?? "PVC",
    tahun: daftarProyek[i]?.tahun ?? 2026,
  }),
);
