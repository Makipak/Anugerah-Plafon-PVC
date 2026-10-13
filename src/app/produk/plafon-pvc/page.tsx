import type { Metadata } from "next";
import Link from "next/link";
import { Asset } from "@/components/asset";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { ProdukGrid } from "@/components/katalog/produk-card";
import { ButtonLink } from "@/components/ui/button";
import { produkUtama as p } from "@/content/produk";
import { formatTanggal } from "@/lib/format";
import { semuaProduk } from "@/lib/katalog";
import { faqLd, productLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

const path = "/produk/plafon-pvc";

export const metadata: Metadata = buildMetadata({
  title: "Motif Plafon PVC Serang",
  description: "Lihat motif, ukuran, dan ketebalan plafon PVC di Serang. Hubungi kami melalui WhatsApp untuk menanyakan ketersediaan produk dan jasa pasang.",
  path,
});

export default function PlafonPvcPage() {
  return (
    <>
      <JsonLd data={productLd({ nama: p.nama, ringkasan: p.ringkasan }, path)} />
      <JsonLd data={faqLd(p.faq)} />
      <PageIntro
        trail={[
          { name: "Produk", path: "/produk" },
          { name: "Plafon PVC", path },
        ]}
        label="Produk"
        title="Plafon PVC di Serang: varian dan spesifikasi"
        lead={p.ringkasan}
      >
        <WhatsAppButton message={waMessages.produkUmum} location="produk-detail" label="Tanyakan ketersediaan" />
      </PageIntro>

      <Section tone="surface" labelledBy="judul-varian">
        <SectionHeading id="judul-varian" label="Varian" intro={`Diperbarui ${formatTanggal(p.diperbaruiPada)}.`}>
          Motif, ukuran, dan ketebalan
        </SectionHeading>
        <ProdukGrid produk={semuaProduk("plafon-pvc").slice(0, 8)} />
        <div className="mt-10">
          <ButtonLink href="/produk" variant="secondary">
            Lihat semua produk
          </ButtonLink>
        </div>
        <p className="mt-8">
          Contoh pekerjaan ada di{" "}
          <Link href="/galeri" className="text-ink underline underline-offset-4">
            galeri proyek
          </Link>
          .
        </p>
      </Section>

      <Section labelledBy="judul-kelebihan">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="judul-kelebihan" label="Kelebihan">
              Pertimbangkan sebelum memilih plafon
            </SectionHeading>
            <ul className="list-disc space-y-3 pl-5">
              {p.kelebihan.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
            <p className="mt-6 text-ink-muted">
              Membandingkan dengan gypsum? Baca{" "}
              <Link href="/blog/plafon-pvc-vs-gypsum" className="text-ink underline underline-offset-4">
                perbandingan plafon PVC dan gypsum
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Asset id="DETAIL-01" sizes="(min-width: 1024px) 280px, 50vw" className="rounded-card" />
            <Asset id="DETAIL-02" sizes="(min-width: 1024px) 280px, 50vw" className="rounded-card" />
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="judul-faq">
        <SectionHeading id="judul-faq" label="FAQ">
          Pertanyaan tentang plafon PVC
        </SectionHeading>
        <div className="max-w-3xl">
          <Faq items={p.faq} />
        </div>
      </Section>

      <CtaBand message={waMessages.produkUmum} location="produk-detail-cta" secondaryHref="/layanan/pasang-plafon-pvc" secondaryLabel="Jasa pasang" />
    </>
  );
}
