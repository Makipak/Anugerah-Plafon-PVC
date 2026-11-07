import { galeriAssetId, galeriFotoKategori, galeriFotoRatio, type GaleriAssetId } from "./galeri-aset";

// Manifest aset. Semua gambar dibuat pemilik proyek (AGENTS.md 6b).
// Mengganti placeholder: simpan berkas di public/assets/<kategori>/, isi src dan alt di sini.
// ID baru harus dicatat juga di docs/16-daftar-aset-placeholder.md pada commit yang sama.
export type AssetSpec = {
  ratio: string; // "4/3"
  minWidth: number;
  minHeight: number;
  brief: string; // isi yang diminta, tampil di placeholder
  src?: string; // "/assets/hero/hero-01.webp"
  alt?: string; // wajib jika src terisi
  bare?: boolean;
  optional?: boolean; // true: boleh kosong; slot tidak dirender di produksi dan tidak menggagalkan build
};

const asetGaleri: Record<string, AssetSpec> = Object.fromEntries(
  galeriFotoKategori.flatMap((kategori) =>
    kategori.files.map((file, index) => [
      galeriAssetId(kategori.slug, index),
      {
        ratio: galeriFotoRatio(kategori.slug, index),
        minWidth: 700,
        minHeight: 900,
        brief: `${kategori.nama}, foto ${index + 1}`,
        src: `/${kategori.folder}/${file}`,
        alt: `${kategori.nama}, foto ${index + 1}`,
      },
    ]),
  ),
);

const asetTetap = {
  "LOGO-01": { ratio: "4/1", minWidth: 800, minHeight: 200, brief: "Logo horizontal (SVG)", src: "/assets/logo-01.webp", alt: "Logo Anugrah Plafon PVC", bare: true },
  "LOGO-02": { ratio: "1/1", minWidth: 512, minHeight: 512, brief: "Logo ringkas untuk favicon (SVG + PNG)", src: "/assets/pvc-logo.svg", alt: "Logo Anugrah Plafon PVC", bare: true },
  "OG-DEFAULT": { ratio: "1200/630", minWidth: 1200, minHeight: 630, brief: "Gambar berbagi tautan: nama usaha dan produk", optional: true },
  "HERO-01": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Ruangan dengan plafon PVC terpasang terlihat jelas, cahaya alami", src: "/assets/hero/hero-01.webp", alt: "Tumpukan panel plafon PVC motif marmer, kayu, abu-abu, dan putih", bare: true },
  "HERO-02": { ratio: "3/2", minWidth: 1536, minHeight: 1024, brief: "Interior rumah dengan plafon dan panel PVC bermotif kayu", src: "/assets/hero/hero-02.png", alt: "Interior rumah dengan plafon PVC putih dan panel dinding bermotif kayu" },
  "DETAIL-01": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sambungan dan profil panel dari dekat", optional: true },
  "DETAIL-02": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sudut pemasangan atau finishing", optional: true },
  "PROJ-01-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 01", src: "/assets/proyek/proj-01.jpeg", alt: "Hasil akhir proyek 01", },
  "PROJ-02-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 02", src: "/assets/proyek/proj-2.jpeg", alt: "Hasil akhir proyek 02", },
  "PROJ-03-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 03", src: "/assets/proyek/proj-03.jpeg", alt: "Hasil akhir proyek 03", },
  "PROJ-04-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 04", src: "/assets/proyek/proj-04.jpeg", alt: "Hasil akhir proyek 04", },
  "PROJ-05-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 05", src: "/assets/proyek/proj-05.webp", alt: "Hasil akhir proyek 05", },
  "PROJ-06-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 06", src: "/assets/proyek/proj-06.jpeg", alt: "Hasil akhir proyek 06", },
  "PROJ-07-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC pada area masjid", src: "/assets/proyek/Masjid/masjid-2.jpeg", alt: "Plafon PVC putih dan motif kayu pada masjid" },
  "PROJ-08-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Pemasangan plafon PVC di masjid", src: "/assets/proyek/Masjid/masjid-3.jpg", alt: "Pekerja memasang plafon PVC di masjid" },
  "PROJ-09-SESUDAH": { ratio: "4/3", minWidth: 700, minHeight: 900, brief: "Plafon PVC pada area masjid", src: "/assets/proyek/Masjid/masjid-4.jpeg", alt: "Plafon PVC putih di area masjid" },
  "PROJ-10-SESUDAH": { ratio: "4/3", minWidth: 700, minHeight: 900, brief: "Pemasangan plafon PVC di masjid", src: "/assets/proyek/Masjid/masjid-5.jpg", alt: "Pekerja memasang plafon PVC pada masjid" },
  "PROJ-11-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/blog-4.jpeg", alt: "Plafon PVC bertingkat dengan lampu di rumah" },
  "PROJ-12-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/blog-5.jpeg", alt: "Plafon PVC putih di rumah" },
  "PROJ-13-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Backdrop TV rumah", src: "/assets/proyek/Rumah/rmh-1.jpeg", alt: "Backdrop TV dengan panel dinding motif kayu di rumah" },
  "PROJ-14-SESUDAH": { ratio: "4/3", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-10.jpg", alt: "Pemasangan plafon PVC bermotif di rumah" },
  "PROJ-15-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-11.jpeg", alt: "Plafon PVC bertingkat dengan lampu di rumah" },
  "PROJ-16-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Backdrop TV rumah", src: "/assets/proyek/Rumah/rmh-2.jpeg", alt: "Backdrop TV dengan panel dinding di rumah" },
  "PROJ-17-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Backdrop TV rumah", src: "/assets/proyek/Rumah/rmh-3.jpeg", alt: "Backdrop TV dan panel dinding di ruang keluarga" },
  "PROJ-18-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Panel interior rumah", src: "/assets/proyek/Rumah/rmh-4.jpeg", alt: "Panel dinding motif kayu pada lorong rumah" },
  "PROJ-19-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-5.jpeg", alt: "Plafon PVC motif kayu pada teras rumah" },
  "PROJ-20-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-6.jpeg", alt: "Plafon PVC pada teras rumah" },
  "PROJ-21-SESUDAH": { ratio: "4/3", minWidth: 700, minHeight: 900, brief: "Pemasangan plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-7.webp", alt: "Pekerja memasang plafon PVC motif kayu di rumah" },
  "PROJ-22-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Pemasangan plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-8.webp", alt: "Pemasangan plafon PVC pada rumah" },
  "PROJ-23-SESUDAH": { ratio: "4/3", minWidth: 700, minHeight: 900, brief: "Pemasangan plafon PVC rumah", src: "/assets/proyek/Rumah/rmh-9.jpg", alt: "Pekerja memasang plafon PVC di rumah" },
  "PROJ-24-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.06 (1).jpeg", alt: "Plafon PVC dengan pencahayaan di rumah" },
  "PROJ-25-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.08 (2).jpeg", alt: "Plafon PVC pada ruang rumah" },
  "PROJ-26-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.08.jpeg", alt: "Plafon PVC pada ruang rumah" },
  "PROJ-27-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.09.jpeg", alt: "Plafon PVC dengan lampu pada rumah" },
  "PROJ-28-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.10 (1).jpeg", alt: "Plafon PVC bermotif pada rumah" },
  "PROJ-29-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.10 (2).jpeg", alt: "Plafon PVC dengan lampu pada rumah" },
  "PROJ-30-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.10.jpeg", alt: "Plafon PVC pada ruang rumah" },
  "PROJ-31-SESUDAH": { ratio: "4/3", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.11 (1).jpeg", alt: "Plafon PVC bermotif pada rumah" },
  "PROJ-32-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.11 (2).jpeg", alt: "Plafon PVC dengan aksen lampu pada rumah" },
  "PROJ-33-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.11.jpeg", alt: "Plafon PVC pada ruang rumah" },
  "PROJ-34-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.12 (1).jpeg", alt: "Plafon PVC dengan lampu pada rumah" },
  "PROJ-35-SESUDAH": { ratio: "3/4", minWidth: 700, minHeight: 900, brief: "Plafon PVC rumah", src: "/assets/proyek/Rumah/WhatsApp Image 2026-10-10 at 17.38.36 (1).jpeg", alt: "Plafon PVC motif kayu pada rumah" },
  "PROSES-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Survei lokasi", src: "/assets/proses/proses-01.webp", alt: "Survei lokasi sebelum pemasangan plafon PVC", },
  "PROSES-02": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pengukuran", src: "/assets/proses/proses-02.webp", alt: "Pengukuran ruangan untuk plafon PVC", },
  "PROSES-03": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pemasangan", src: "/assets/proses/proses-03.webp", alt: "Pemasangan panel plafon PVC", },
  "PROSES-04": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Finishing", src: "/assets/proses/proses-04.webp", alt: "Finishing pemasangan plafon PVC", },
  "TOKO-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tampak depan toko atau gudang", src: "/assets/tentang/toko-01.webp", alt: "Tampak depan usaha Anugrah Plafon PVC di Serang", },
  "TIM-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tim di lokasi kerja", src: "/assets/tentang/tim-01.webp", alt: "Dua pekerja memasang papan plafon pada rangka besi", },
  "AREA-serang-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Proyek nyata di wilayah Serang", optional: true },
  "BLOG-01": { ratio: "16/9", minWidth: 960, minHeight: 1280, brief: "Plafon PVC putih dengan desain bertingkat", src: "/assets/blog/blog-5.jpeg", alt: "Plafon PVC putih dengan desain bertingkat dan lampu gantung" },
  "BLOG-02": { ratio: "16/9", minWidth: 1536, minHeight: 1024, brief: "Interior ruang dengan panel dinding motif kayu", src: "/assets/blog/blog-2.png", alt: "Interior ruang dengan panel dinding motif kayu dan rak televisi" },
  "BLOG-03": { ratio: "16/9", minWidth: 1280, minHeight: 960, brief: "Plafon PVC pada ruang tamu", src: "/assets/blog/blog-3.jpeg", alt: "Plafon PVC terpasang pada ruang tamu" },
  "BLOG-04": { ratio: "16/9", minWidth: 960, minHeight: 1280, brief: "Plafon PVC dengan aksen geometris dan lampu gantung", src: "/assets/blog/blog-4.jpeg", alt: "Plafon PVC putih dengan aksen geometris dan lampu gantung" },
  "BLOG-05": { ratio: "16/9", minWidth: 960, minHeight: 1280, brief: "Pemasangan plafon PVC motif kayu pada area teras", src: "/assets/blog/blog-1.jpeg", alt: "Pemasangan plafon PVC motif kayu di area teras rumah" },
} satisfies Record<string, AssetSpec>;

export const assets: typeof asetTetap & Record<string, AssetSpec> = {
  ...asetTetap,
  ...asetGaleri,
};

export type AssetId = keyof typeof asetTetap | GaleriAssetId;

export function getAssetSpec(id: AssetId): AssetSpec {
  const spec = assets[id];
  if (!spec) throw new Error(`ID aset tidak tersedia di manifest: ${id}`);
  return spec;
}
