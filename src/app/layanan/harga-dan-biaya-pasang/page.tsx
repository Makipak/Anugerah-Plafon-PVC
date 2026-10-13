import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { serviceLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

const path = "/layanan/harga-dan-biaya-pasang";

export const metadata: Metadata = buildMetadata({
  title: "Konsultasi Plafon PVC Serang",
  description: "Konsultasikan kebutuhan plafon PVC di Serang. Siapkan lokasi, ukuran ruangan, motif pilihan, dan foto kondisi plafon sebelum menghubungi kami.",
  path,
});

export default function PenawaranPage() {
  return (
    <>
      <JsonLd data={serviceLd("Konsultasi plafon PVC", "Konsultasi kebutuhan material dan pemasangan plafon PVC di Serang.", path)} />
      <PageIntro
        trail={[
          { name: "Jasa Pasang Plafon PVC", path: "/layanan/pasang-plafon-pvc" },
          { name: "Minta Estimasi", path },
        ]}
        label="Konsultasi"
        title="Minta estimasi kebutuhan plafon PVC"
        lead="Sampaikan lokasi, ukuran ruangan, dan motif pilihan melalui WhatsApp agar kami memahami kebutuhan Anda."
      >
        <WhatsAppButton message={waMessages.penawaran} location="penawaran" label="Chat WhatsApp untuk konsultasi" />
      </PageIntro>

      <Section tone="surface" labelledBy="judul-kebutuhan">
        <SectionHeading id="judul-kebutuhan" label="Persiapan">
          Informasi untuk konsultasi
        </SectionHeading>
        <p className="max-w-2xl text-ink-muted">
          Sertakan lokasi pemasangan, ukuran ruangan, motif yang Anda pilih, dan foto kondisi plafon. Kami akan membahas kebutuhan Anda dan langkah selanjutnya.
        </p>
      </Section>

      <CtaBand message={waMessages.penawaran} location="penawaran-cta" title="Diskusikan kebutuhan ruangan Anda" secondaryHref="/produk/plafon-pvc" secondaryLabel="Lihat motif" />
    </>
  );
}
