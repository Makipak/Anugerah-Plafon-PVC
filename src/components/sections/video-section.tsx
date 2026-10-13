import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { VideoCarousel } from "@/components/sections/video-carousel";
import { videoList, type VideoItem } from "@/content/video";
import { isProduction } from "@/lib/placeholders";
import { videoLd } from "@/lib/schema";

// Slot contoh agar posisi dan ukuran bagian ini terlihat di dev/preview sebelum video pertama diunggah.
const slotContoh: VideoItem[] = Array.from({ length: 4 }, (_, i) => ({
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

  return (
    <Section tone="surface" labelledBy="judul-video">
      {!kosong ? videoList.map((v) => <JsonLd key={v.id} data={videoLd(v)} />) : null}
      <Reveal>
        <SectionHeading id="judul-video" label="Video" intro="Pilih video untuk memutar. Geser ke samping untuk melihat video lainnya.">
          Cuplikan pemasangan plafon PVC
        </SectionHeading>
        <VideoCarousel items={kosong ? slotContoh : videoList} placeholder={kosong} />
      </Reveal>
    </Section>
  );
}
