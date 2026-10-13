import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { ProdukFoto } from "@/components/katalog/produk-foto";
import { interiorList } from "@/content/interior";
import type { Faq as FaqItem } from "@/content/schemas";
import { faqLd, serviceLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

const path = "/layanan/interior-design";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design Serang",
  description:
    "Layanan interior di Serang, Banten: plafon, kamar set, kitchen set, partisi, dan backdrop TV. Pilih jenis pekerjaan dan konsultasi lewat WhatsApp.",
  path,
});

const faq: FaqItem[] = [
  { q: "Bagaimana cara memesan?", a: "Chat kami melalui WhatsApp. Ceritakan jenis pekerjaan, lokasi, dan ukuran ruangan untuk membahas langkah berikutnya." },
  { q: "Berapa biayanya?", a: "Biaya bergantung pada jenis pekerjaan, ukuran, dan bahan yang dipilih. Hubungi kami untuk membahas estimasinya." },
];

export default function InteriorPage() {
  return (
    <>
      <JsonLd data={serviceLd("Interior design", "Plafon, kamar set, kitchen set, partisi, backdrop TV, dan kebutuhan interior lainnya di Serang, Banten.", path)} />
      <JsonLd data={faqLd(faq)} />
      <PageIntro
        trail={[{ name: "Interior Design", path }]}
        label="Layanan"
        title="Interior design di Serang"
        lead="Kami menangani plafon, kamar set, kitchen set, partisi, dan backdrop TV. Pilih jenis pekerjaan di bawah untuk melihat penjelasannya, atau ceritakan ruangan Anda lewat WhatsApp."
      >
        <WhatsAppButton message={waMessages.interior} location="interior" label="Konsultasi interior" />
      </PageIntro>

      <Section tone="surface" labelledBy="judul-jenis">
        <SectionHeading id="judul-jenis" label="Jenis pekerjaan" intro="Kebutuhan interior lain di luar daftar ini juga bisa dikonsultasikan lewat WhatsApp.">
          Pilih pekerjaan yang Anda butuhkan
        </SectionHeading>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interiorList.map((i) => (
            <li key={i.slug} className="flex flex-col rounded-card border border-line bg-background p-5">
              {i.foto?.[0] ? (
                <div className="mb-4 overflow-hidden rounded-card">
                  <ProdukFoto src={i.foto[0]} alt={`${i.nama} hasil pekerjaan Anugrah Plafon PVC`} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                </div>
              ) : null}
              <h3 className="font-display text-xl font-semibold">
                <Link href={`${path}/${i.slug}`} className="underline-offset-4 hover:underline">
                  {i.nama}
                </Link>
              </h3>
              <p className="mt-1 text-ink-muted">{i.ringkasan}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link href={`${path}/${i.slug}`} className="inline-flex min-h-11 items-center font-semibold text-ink underline underline-offset-4">
                  Lihat penjelasan
                </Link>
                <WhatsAppButton
                  message={`Halo Anugrah Plafon PVC, saya tertarik dengan layanan ${i.nama}. Saya ingin menanyakan bahan, biaya, dan jadwal survei.`}
                  location={`interior-${i.slug}`}
                  label="Tanyakan"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Lihat bahan dan pilihan warna di{" "}
          <Link href="/produk" className="text-ink underline underline-offset-4">
            katalog produk
          </Link>
          , dan hasil pekerjaan di{" "}
          <Link href="/galeri" className="text-ink underline underline-offset-4">
            galeri
          </Link>
          .
        </p>
      </Section>

      <Section labelledBy="judul-faq-interior">
        <SectionHeading id="judul-faq-interior" label="FAQ">
          Pertanyaan tentang interior
        </SectionHeading>
        <div className="max-w-3xl">
          <Faq items={faq} />
        </div>
      </Section>

      <CtaBand message={waMessages.interior} location="interior-cta" />
    </>
  );
}
