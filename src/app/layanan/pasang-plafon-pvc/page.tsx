import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { Steps } from "@/components/sections/steps";
import { Asset } from "@/components/asset";
import { altProyek } from "@/lib/alt";
import { proyekList } from "@/content/proyek";
import type { AssetId } from "@/content/assets";
import type { Faq as FaqItem } from "@/content/schemas";
import { faqLd, serviceLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

const path = "/layanan/pasang-plafon-pvc";

export const metadata: Metadata = buildMetadata({
  title: "Jasa Pasang Plafon PVC Serang",
  description: "Lihat proses jasa pasang plafon PVC di Serang dan contoh hasil pekerjaan. Siapkan lokasi, ukuran ruangan, dan motif pilihan untuk berkonsultasi.",
  path,
});

const faq: FaqItem[] = [
  { q: "Apakah jasa pasang dilengkapi garansi?", a: "Hubungi kami untuk memastikan ketersediaan garansi, syarat, dan masa berlakunya." },
  { q: "Bagaimana cara memesan jasa pasang?", a: "Chat kami melalui WhatsApp. Sertakan lokasi dan ukuran ruangan untuk membahas langkah berikutnya." },
  { q: "Pekerjaan apa yang termasuk jasa pasang?", a: "Jasa pasang mencakup pekerjaan plafon PVC. Perbaikan atap bocor dan instalasi listrik tidak termasuk." },
];

export default function JasaPasangPage() {
  return (
    <>
      <JsonLd data={serviceLd("Jasa pasang plafon PVC", "Survei, pengukuran, dan pemasangan plafon PVC di Serang, Banten.", path)} />
      <JsonLd data={faqLd(faq)} />
      <PageIntro
        trail={[{ name: "Jasa Pasang Plafon PVC", path }]}
        label="Layanan"
        title="Jasa pasang plafon PVC di Serang"
        lead="Kirim lokasi dan ukuran ruangan melalui WhatsApp untuk membahas kebutuhan pemasangan dan jadwal survei."
      >
        <WhatsAppButton message={waMessages.jasa} location="jasa" label="Konsultasi jasa pasang" />
      </PageIntro>

      <Section tone="surface" labelledBy="judul-proses">
        <SectionHeading id="judul-proses" label="Proses">
          Empat langkah pengerjaan
        </SectionHeading>
        <Steps />
      </Section>

      <Section labelledBy="judul-contoh">
        <SectionHeading id="judul-contoh" label="Contoh pekerjaan">
          Hasil pemasangan
        </SectionHeading>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3">
          {proyekList.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 768px) 384px, 50vw" className="rounded-card" />
              <p className="font-display text-lg font-semibold">{p.judul}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Lihat semua proyek di{" "}
          <Link href="/galeri" className="text-ink underline underline-offset-4">
            galeri
          </Link>
          .
        </p>
      </Section>

      <Section tone="surface" labelledBy="judul-faq">
        <SectionHeading id="judul-faq" label="FAQ">
          Pertanyaan tentang jasa pasang
        </SectionHeading>
        <div className="max-w-3xl">
          <Faq items={faq} />
        </div>
      </Section>

      <CtaBand message={waMessages.jasa} location="jasa-cta" />
    </>
  );
}
