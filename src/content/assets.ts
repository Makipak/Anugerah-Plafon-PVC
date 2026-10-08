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

export const assets = {
  "LOGO-01": { ratio: "4/1", minWidth: 800, minHeight: 200, brief: "Logo horizontal (SVG)", src: "/assets/logo-01.webp", alt: "Logo Anugerah Plafon PVC", bare: true },
  "LOGO-02": { ratio: "1/1", minWidth: 512, minHeight: 512, brief: "Logo ringkas untuk favicon (SVG + PNG)", src: "/assets/logo-02.svg", alt: "Logo Anugerah Plafon PVC", bare: true },
  "OG-DEFAULT": { ratio: "1200/630", minWidth: 1200, minHeight: 630, brief: "Gambar berbagi tautan: nama usaha dan produk", optional: true },
  "HERO-01": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Ruangan dengan plafon PVC terpasang terlihat jelas, cahaya alami", src: "/assets/hero/hero-01.webp", alt: "Tumpukan panel plafon PVC motif marmer, kayu, abu-abu, dan putih", bare: true },
  "MOTIF-01": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 01, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-01.webp", alt: "Close-up motif 01", },
  "MOTIF-02": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 02, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-02.webp", alt: "Close-up motif 02", },
  "MOTIF-03": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 03, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-03.webp", alt: "Close-up motif 03", },
  "MOTIF-04": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 04, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-04.webp", alt: "Close-up motif 04", },
  "MOTIF-05": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 05, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-05.webp", alt: "Close-up motif 05", },
  "MOTIF-06": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 06, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-06.webp", alt: "Close-up motif 06", },
  "MOTIF-07": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 07, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-07.webp", alt: "Close-up motif 07", },
  "MOTIF-08": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 08, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-08.webp", alt: "Close-up motif 08", },
  "DETAIL-01": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sambungan dan profil panel dari dekat", optional: true },
  "DETAIL-02": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sudut pemasangan atau finishing", optional: true },
  "PROJ-01-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 01", src: "/assets/proyek/proj-01.webp", alt: "Hasil akhir proyek 01", },
  "PROJ-02-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 02", src: "/assets/proyek/proj-02.webp", alt: "Hasil akhir proyek 02", },
  "PROJ-03-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 03", src: "/assets/proyek/proj-03.webp", alt: "Hasil akhir proyek 03", },
  "PROJ-04-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 04", src: "/assets/proyek/proj-04.webp", alt: "Hasil akhir proyek 04", },
  "PROJ-05-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 05", src: "/assets/proyek/proj-05.webp", alt: "Hasil akhir proyek 05", },
  "PROJ-06-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 06", src: "/assets/proyek/proj-06.webp", alt: "Hasil akhir proyek 06", },
  "PROSES-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Survei lokasi", src: "/assets/proses/proses-01.webp", alt: "Survei lokasi sebelum pemasangan plafon PVC", },
  "PROSES-02": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pengukuran", src: "/assets/proses/proses-02.webp", alt: "Pengukuran ruangan untuk plafon PVC", },
  "PROSES-03": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pemasangan", src: "/assets/proses/proses-03.webp", alt: "Pemasangan panel plafon PVC", },
  "PROSES-04": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Finishing", src: "/assets/proses/proses-04.webp", alt: "Finishing pemasangan plafon PVC", },
  "TOKO-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tampak depan toko atau gudang", src: "/assets/tentang/toko-01.webp", alt: "Tampak depan usaha Anugerah Plafon PVC di Serang", },
  "TIM-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tim di lokasi kerja", src: "/assets/tentang/tim-01.webp", alt: "Dua pekerja memasang papan plafon pada rangka besi", },
  "AREA-serang-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Proyek nyata di wilayah Serang", optional: true },
  "BLOG-01": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 01", src: "/assets/blog/blog-01.webp", alt: "Sampul artikel 01", },
  "BLOG-02": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 02", src: "/assets/blog/blog-02.webp", alt: "Sampul artikel 02", },
  "BLOG-03": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 03", src: "/assets/blog/blog-03.webp", alt: "Sampul artikel 03", },
} satisfies Record<string, AssetSpec>;

export type AssetId = keyof typeof assets;
