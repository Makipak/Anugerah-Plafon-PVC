import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { VideoCarousel } from "@/components/sections/video-carousel";
import { videoList, type VideoItem } from "@/content/video";
import { isProduction } from "@/lib/placeholders";
import { videoLd } from "@/lib/schema";

// Jumlah video yang ditampilkan di beranda. Slot contoh juga memakai jumlah ini.
const JUMLAH_VIDEO = 7;

// Slot contoh agar posisi dan ukuran bagian ini terlihat di dev/preview sebelum video pertama diunggah.
const slotContoh: VideoItem[] = Array.from({ length: JUMLAH_VIDEO }, (_, i) => ({
  id: `VIDEO-0${i + 1}`,
  judul: "Judul video proyek",
  src: "",
  poster: "",
  alt: "",
  diunggah: "",
  deskripsi: "Video potret hasil atau proses pemasangan",
}));

export function VideoSection() {
  const kosong = videoList.length === 0;
  // Seperti slot aset opsional: tidak boleh tampil sebagai kotak placeholder di situs produksi.
  if (kosong && isProduction) return null;

  const tampil = videoList.slice(0, JUMLAH_VIDEO);

  return (
    <Section tone="surface" labelledBy="judul-video">
      {!kosong
        ? tampil.map((v) => {
            const ld = videoLd(v);
            return ld ? <JsonLd key={v.id} data={ld} /> : null;
          })
        : null}
      <Reveal>
        <SectionHeading id="judul-video" label="Video" intro="Klik video untuk memutar. Geser ke kiri atau kanan untuk melihat video lainnya.">
          Cuplikan pemasangan plafon PVC
        </SectionHeading>
        <VideoCarousel items={kosong ? slotContoh : tampil} placeholder={kosong} />
      </Reveal>
    </Section>
  );
}
