import type { Metadata } from "next";
import { Asset } from "@/components/asset";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Anugerah Plavon PVC, Toko Plafon PVC di Serang",
  description: "Profil Anugerah Plavon PVC di Serang, Banten: usaha, tim, pengalaman, dan cara kami mengerjakan pemasangan plafon PVC.",
  path: "/tentang-kami",
});

export default function TentangPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Tentang Kami", path: "/tentang-kami" }]}
        label="Tentang"
        title="Tentang Anugerah Plavon PVC"
        lead="Toko dan jasa pasang plafon PVC di Serang, Banten." // DUMMY
      />
      <Section tone="surface" labelledBy="judul-cerita">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="judul-cerita" label="Cerita">
              Usaha kami
            </SectionHeading>
            <div className="space-y-4">
              <p>Anugerah Plavon PVC menjual material plafon PVC dan mengerjakan pemasangannya untuk rumah, ruko, dan bangunan publik di sekitar Serang.</p> {/* DUMMY */}
              <p>Berdiri sejak 2020 dan telah mengerjakan puluhan proyek pemasangan.</p> {/* DUMMY */}
              <p>Legalitas usaha: NIB tersedia atas permintaan.</p> {/* DUMMY */}
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
              Yang mengerjakan di lapangan
            </SectionHeading>
            <p>Tim lapangan terdiri dari pemasang berpengalaman yang bekerja dengan pengawasan langsung dari pemilik usaha.</p> {/* DUMMY */}
          </div>
        </div>
      </Section>
      <CtaBand message={waMessages.umum} location="tentang-cta" />
    </>
  );
}
