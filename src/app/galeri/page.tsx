import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { Gallery } from "@/components/sections/gallery";
import { VideoSection } from "@/components/sections/video-section";
import { kategoriGaleri } from "@/content/galeri";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Galeri Proyek Plafon dan Interior",
  description:
    "Lihat foto kamar set, kitchen set, berbagai model plafon, WPC, dan wallboard di Serang, Banten.",
  path: "/galeri",
});

export default function GaleriPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Galeri", path: "/galeri" }]}
        label="Galeri"
        title="Galeri hasil pemasangan plafon dan interior"
        lead="Lihat hasil pekerjaan berdasarkan kategori, mulai dari kamar set dan kitchen set hingga berbagai model plafon, WPC, dan wallboard."
      />
      <Section tone="surface">
        <Gallery categories={kategoriGaleri} />
      </Section>
      <VideoSection />
      <CtaBand message={waMessages.umum} location="galeri-cta" title="Rencanakan plafon atau interior untuk ruangan Anda" />
    </>
  );
}
