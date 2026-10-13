import type { Metadata } from "next";
import { Asset } from "@/components/asset";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Anugrah Plafon PVC Serang",
  description: "Kenali Anugrah Plafon PVC, toko dan jasa pasang di Serang, Banten. Lihat informasi usaha, produk, dan layanan pemasangan untuk berbagai ruangan.",
  path: "/tentang-kami",
});

export default function TentangPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Tentang Kami", path: "/tentang-kami" }]}
        label="Tentang"
        title="Tentang Anugrah Plafon PVC"
        lead="Kami menyediakan plafon PVC dan jasa pasang di Serang, Banten."
      />
      <Section tone="surface" labelledBy="judul-cerita">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="judul-cerita" label="Cerita">
              Tentang usaha
            </SectionHeading>
            <div className="space-y-4">
              <p>Anugrah Plafon PVC menyediakan panel plafon PVC dan jasa pasang untuk rumah, ruko, dan bangunan di sekitar Serang.</p>
            </div>
          </div>
          <Asset id="TOKO-01" sizes="(min-width: 1024px) 560px, 100vw" className="rounded-card" />
        </div>
      </Section>
      <Section labelledBy="judul-tim">
        <div className="grid gap-10 lg:grid-cols-2">
          <Asset id="TIM-01" sizes="(min-width: 1024px) 560px, 100vw" className="rounded-card" />
          <div>
            <SectionHeading id="judul-tim" label="Tim">
              Tim pemasangan
            </SectionHeading>
            <p>Tim lapangan menangani pemasangan plafon PVC.</p>
          </div>
        </div>
      </Section>
      <CtaBand message={waMessages.umum} location="tentang-cta" />
    </>
  );
}