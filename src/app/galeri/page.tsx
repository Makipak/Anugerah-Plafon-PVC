import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { Gallery } from "@/components/sections/gallery";
import { proyekList } from "@/content/proyek";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Galeri Proyek Plafon dan Interior",
  description:
    "Lihat foto hasil pekerjaan plafon dan interior di Serang untuk rumah, masjid, dan kantor. Setiap foto diberi keterangan jenis ruang dan jenis interiornya.",
  path: "/galeri",
});

export default function GaleriPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Galeri", path: "/galeri" }]}
        label="Galeri"
        title="Proyek plafon dan interior yang sudah dikerjakan"
        lead="Pilih jenis ruang (rumah, masjid, atau kantor) dan jenis interior untuk melihat foto hasil pekerjaan. Tiap foto diberi keterangan, misalnya Rumah · Kamar set."
      />
      <Section tone="surface">
        <Gallery items={proyekList} />
      </Section>
      <CtaBand message={waMessages.umum} location="galeri-cta" title="Rencanakan plafon atau interior untuk ruangan Anda" />
    </>
  );
}
