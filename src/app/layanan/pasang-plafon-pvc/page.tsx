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
  description: "Jasa pasang plafon PVC di Serang: proses survei, pengukuran, pemasangan, dan finishing. Minta estimasi biaya lewat WhatsApp, kirim lokasi dan luas ruangan.",
  path,
});

const faq: FaqItem[] = [
  { q: "Apakah ada garansi pemasangan?", a: "Garansi pemasangan berlaku untuk pekerjaan rangka dan sambungan panel; syarat dan lamanya dijelaskan saat penawaran." },
  { q: "Bagaimana cara memesan jasa pasang?", a: "Hubungi lewat WhatsApp, kirim lokasi dan luas ruangan, lalu jadwalkan survei. Pembayaran disepakati saat penawaran." },
  { q: "Apa yang tidak dikerjakan?", a: "Pekerjaan di luar plafon, seperti perbaikan atap bocor atau instalasi listrik, tidak termasuk." },
];

export default function JasaPasangPage() {
  return (
    <>
      <JsonLd data={serviceLd("Jasa pasang plafon PVC", "Jasa survei, pengukuran, dan pemasangan plafon PVC di Serang, Banten.", path)} />
      <JsonLd data={faqLd(faq)} />
      <PageIntro
        trail={[{ name: "Jasa Pasang Plafon PVC", path }]}
        label="Layanan"
        title="Jasa pasang plafon PVC di Serang"
        lead="Dari survei ruangan sampai pekerjaan dirapikan. Kirim lokasi dan perkiraan luas untuk mendapat estimasi biaya."
      >
        <WhatsAppButton message={waMessages.jasa} location="jasa" label="Minta estimasi via WhatsApp" />
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
        <ul className="grid gap-x-5 gap-y-8 md:grid-cols-3">
          {proyekList.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 768px) 384px, 100vw" className="rounded-card" />
              <p className="text-label mt-3 text-accent">
                {p.lokasi.kecamatan}, {p.tahun}
              </p>
              <p className="font-display text-lg font-semibold">{p.judul}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Semua proyek ada di{" "}
          <Link href="/galeri" className="text-primary underline underline-offset-4">
            galeri
          </Link>
          . Biaya dijelaskan di{" "}
          <Link href="/layanan/harga-dan-biaya-pasang" className="text-primary underline underline-offset-4">
            halaman harga dan biaya pasang
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
