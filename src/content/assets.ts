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
};

export const assets = {
  "LOGO-01": { ratio: "4/1", minWidth: 800, minHeight: 200, brief: "Logo horizontal (SVG)" },
  "LOGO-02": { ratio: "1/1", minWidth: 512, minHeight: 512, brief: "Logo ringkas untuk favicon (SVG + PNG)" },
  "OG-DEFAULT": { ratio: "1200/630", minWidth: 1200, minHeight: 630, brief: "Gambar berbagi tautan: nama usaha dan produk" },
  "HERO-01": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Ruangan dengan plafon PVC terpasang terlihat jelas, cahaya alami" },
  "MOTIF-01": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 01, pencahayaan sama untuk semua motif" },
  "MOTIF-02": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 02, pencahayaan sama untuk semua motif" },
  "MOTIF-03": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 03, pencahayaan sama untuk semua motif" },
  "MOTIF-04": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 04, pencahayaan sama untuk semua motif" },
  "MOTIF-05": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 05, pencahayaan sama untuk semua motif" },
  "MOTIF-06": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 06, pencahayaan sama untuk semua motif" },
  "MOTIF-07": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 07, pencahayaan sama untuk semua motif" },
  "MOTIF-08": { ratio: "1/1", minWidth: 800, minHeight: 800, brief: "Close-up motif 08, pencahayaan sama untuk semua motif" },
  "DETAIL-01": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sambungan dan profil panel dari dekat" },
  "DETAIL-02": { ratio: "4/3", minWidth: 1200, minHeight: 900, brief: "Sudut pemasangan atau finishing" },
  "PROJ-01-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 01" },
  "PROJ-02-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 02" },
  "PROJ-03-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 03" },
  "PROJ-04-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 04" },
  "PROJ-05-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 05" },
  "PROJ-06-SESUDAH": { ratio: "4/3", minWidth: 1600, minHeight: 1200, brief: "Hasil akhir proyek 06" },
  "PROSES-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Survei lokasi" },
  "PROSES-02": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pengukuran" },
  "PROSES-03": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Pemasangan" },
  "PROSES-04": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Finishing" },
  "TOKO-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tampak depan toko atau gudang" },
  "TIM-01": { ratio: "3/2", minWidth: 1600, minHeight: 1067, brief: "Tim di lokasi kerja" },
  "AREA-serang-01": { ratio: "3/2", minWidth: 1200, minHeight: 800, brief: "Proyek nyata di wilayah Serang" },
  "BLOG-01": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 01" },
  "BLOG-02": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 02" },
  "BLOG-03": { ratio: "16/9", minWidth: 1600, minHeight: 900, brief: "Sampul artikel 03" },
} satisfies Record<string, AssetSpec>;

export type AssetId = keyof typeof assets;
