import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { Gallery } from "@/components/sections/gallery";
import { VideoSection } from "@/components/sections/video-section";
import { proyekList } from "@/content/proyek";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Galeri Proyek Plafon dan Interior",
  description:
    "Lihat foto dan video hasil pemasangan plafon dan interior di Serang, Banten.",
  path: "/galeri",
});

export default function GaleriPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Galeri", path: "/galeri" }]}
        label="Galeri"
        title="Galeri hasil pemasangan plafon dan interior"
        lead="Foto dan video ditampilkan bersama untuk sementara. Setelah foto dikelompokkan, galeri akan disusun berdasarkan bentuk pemasangan seperti flat, flat kombinasi, dan drop."
      />
      <Section tone="surface">
        <Gallery items={proyekList} />
      </Section>
      <VideoSection />
      <CtaBand message={waMessages.umum} location="galeri-cta" title="Rencanakan plafon atau interior untuk ruangan Anda" />
    </>
  );
}
