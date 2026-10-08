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
};

export const assets = {
  "LOGO-01": { ratio: "4/1", minWidth: 800, minHeight: 200, brief: "Logo horizontal (SVG)", src: "/assets/logo-01.png", alt: "Logo Anugerah Plavon PVC", bare: true },
  "LOGO-02": { ratio: "1/1", minWidth: 512, minHeight: 512, brief: "Logo ringkas untuk favicon (SVG + PNG)", src: "/assets/logo-02.svg", alt: "Logo ringkas", bare: true },
  "OG-DEFAULT": { ratio: "1200/630", minWidth: 1200, minHeight: 630, brief: "Gambar berbagi tautan: nama usaha dan produk" },
  "HERO-01": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Ruangan dengan plafon PVC terpasang terlihat jelas, cahaya alami", src: "/assets/hero/hero-01.png", alt: "Ruangan dengan plafon PVC terpasang", bare: true },
  "MOTIF-01": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 01, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-01.png", alt: "Close-up motif 01", },
  "MOTIF-02": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 02, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-02.png", alt: "Close-up motif 02", },
  "MOTIF-03": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 03, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-03.png", alt: "Close-up motif 03", },
  "MOTIF-04": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 04, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-04.png", alt: "Close-up motif 04", },
  "MOTIF-05": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 05, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-05.png", alt: "Close-up motif 05", },
  "MOTIF-06": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 06, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-06.png", alt: "Close-up motif 06", },
  "MOTIF-07": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 07, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-07.png", alt: "Close-up motif 07", },
  "MOTIF-08": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 08, pencahayaan sama untuk semua motif", src: "/assets/motif/motif-08.png", alt: "Close-up motif 08", },
  "DETAIL-01": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sambungan dan profil panel dari dekat" },
  "DETAIL-02": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sudut pemasangan atau finishing" },
  "PROJ-01-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 01", src: "/assets/proyek/proj-1.jpg", alt: "Hasil akhir proyek 01", },
  "PROJ-02-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 02", src: "/assets/proyek/proj-2.jpg", alt: "Hasil akhir proyek 02", },
  "PROJ-03-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 03", src: "/assets/proyek/proj-3.jpg", alt: "Hasil akhir proyek 03", },
  "PROJ-04-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 04", src: "/assets/proyek/proj-4.jpg", alt: "Hasil akhir proyek 04", },
  "PROJ-05-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 05", src: "/assets/proyek/proj-5.jpg", alt: "Hasil akhir proyek 05", },
  "PROJ-06-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 06", src: "/assets/proyek/proj-6.jpg", alt: "Hasil akhir proyek 06", },
  "PROSES-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Survei lokasi", src: "/assets/proses/proses-1.jpg", alt: "Survei lokasi", },
  "PROSES-02": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pengukuran", src: "/assets/proses/proses-2.jpg", alt: "Pengukuran", },
  "PROSES-03": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pemasangan", src: "/assets/proses/proses-3.jpg", alt: "Pemasangan", },
  "PROSES-04": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Finishing", src: "/assets/proses/proses-4.jpg", alt: "Finishing", },
  "TOKO-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tampak depan toko atau gudang", src: "/assets/tentang/toko-1.jpg", alt: "Tampak depan toko atau gudang", },
  "TIM-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tim di lokasi kerja", src: "/assets/tentang/tim-1.jpg", alt: "Tim di lokasi kerja", },
  "AREA-serang-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Proyek nyata di wilayah Serang" },
  "BLOG-01": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 01", src: "/assets/blog/blog-1.jpg", alt: "Sampul artikel 01", },
  "BLOG-02": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 02", src: "/assets/blog/blog-2.jpg", alt: "Sampul artikel 02", },
  "BLOG-03": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 03", src: "/assets/blog/blog-3.jpg", alt: "Sampul artikel 03", },
} satisfies Record<string, AssetSpec>;

export type AssetId = keyof typeof assets;
