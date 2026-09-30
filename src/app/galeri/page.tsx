import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { Gallery } from "@/components/sections/gallery";
import { proyekList } from "@/content/proyek";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Galeri Proyek Plafon PVC di Serang dan Sekitarnya",
  description: "Foto proyek pemasangan plafon PVC di Serang: lokasi, jenis ruang, bahan, dan tahun pengerjaan. Filter berdasarkan jenis ruang.",
  path: "/galeri",
});

export default function GaleriPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Galeri", path: "/galeri" }]}
        label="Galeri"
        title="Proyek plafon PVC yang sudah dikerjakan"
        lead="Setiap foto dilengkapi kecamatan, jenis ruang, bahan, dan tahun pengerjaan."
      />
      <Section tone="surface">
        <Gallery items={proyekList} />
      </Section>
      <CtaBand message={waMessages.jasa} location="galeri-cta" title="Ingin hasil seperti ini di ruangan Anda?" />
    </>
  );
}
