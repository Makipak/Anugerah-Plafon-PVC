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
  "LOGO-02": { ratio: "1/1", minWidth: 512, minHeight: 512, brief: "Logo ringkas untuk favicon (SVG + PNG)", src: "/assets/logo-pvc.png", alt: "Logo Anugrah Plafon PVC", bare: true },
  "OG-DEFAULT": { ratio: "1200/630", minWidth: 1200, minHeight: 630, brief: "Gambar berbagi tautan: nama usaha dan produk", optional: true },
  "HERO-01": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Ruangan dengan plafon PVC terpasang terlihat jelas, cahaya alami", src: "/assets/hero/hero-01.webp", alt: "Tumpukan panel plafon PVC motif marmer, kayu, abu-abu, dan putih", bare: true },
  "HERO-02": { ratio: "3/2", minWidth: 1536, minHeight: 1024, brief: "Interior rumah dengan plafon dan panel PVC bermotif kayu", src: "/assets/hero/hero-02.png", alt: "Interior rumah dengan plafon PVC putih dan panel dinding bermotif kayu" },
  "DETAIL-01": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sambungan dan profil panel dari dekat", optional: true },
  "DETAIL-02": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sudut pemasangan atau finishing", optional: true },
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
