// Video yang tampil di beranda. Berkas video disimpan di public/assets/video/.
export type VideoItem = {
  id: string;
  judul: string;
  src: string;
  poster?: string;
  diunggah?: string;
  deskripsi?: string;
};

export const videoList: readonly VideoItem[] = [
  {
    id: "video-1",
    judul: "Video 1",
    src: "/assets/video/video-1.mp4",
  },
  {
    id: "video-2",
    judul: "Video 2",
    src: "/assets/video/video-2.mp4",
  },
  {
    id: "video-3",
    judul: "Video 3",
    src: "/assets/video/video-3.mp4",
  },
  {
    id: "video-4",
    judul: "Video 4",
    src: "/assets/video/video-4.mp4",
  },
  {
    id: "video-5",
    judul: "Video 5",
    src: "/assets/video/video-5.mp4",
  },
  {
    id: "video-6",
    judul: "Video 6",
    src: "/assets/video/video-6.mp4",
  },
  {
    id: "video-7",
    judul: "Video 7",
    src: "/assets/video/video-7.mp4",
  },
];
