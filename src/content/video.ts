// Video potret (9:16) untuk beranda. Pemilik cukup menambah satu objek ke daftar di bawah:
// 1. Simpan video di public/videos/<nama>.mp4 (H.264, rasio 9:16, ideal di bawah 15 MB dan 60 detik).
// 2. Simpan gambar sampul (frame terbaik dari video) di public/assets/video/<nama>.webp, rasio 9:16, min 540x960.
// 3. Isi judul, alt sampul, dan tanggal unggah (YYYY-MM-DD). Video terbaru taruh paling atas.
// Beranda menampilkan 4 video sekaligus di layar lebar; bila lebih banyak, pengunjung menggesernya ke samping.
// Selama daftar kosong, bagian ini hanya tampil sebagai kotak placeholder di dev/preview dan hilang di produksi.
export type VideoItem = {
  id: string;
  judul: string;
  src: string; // "/videos/proyek-ruang-tamu.mp4"
  poster: string; // "/assets/video/proyek-ruang-tamu.webp"
  alt: string; // deskripsi gambar sampul
  diunggah: string; // "2026-10-01"
  deskripsi?: string;
};

export const videoList: readonly VideoItem[] = [
  // {
  //   id: "ruang-tamu",
  //   judul: "Pemasangan plafon ruang tamu",
  //   src: "/videos/ruang-tamu.mp4",
  //   poster: "/assets/video/ruang-tamu.webp",
  //   alt: "Tukang memasang panel plafon PVC motif kayu di ruang tamu",
  //   diunggah: "2026-10-01",
  // },
];
