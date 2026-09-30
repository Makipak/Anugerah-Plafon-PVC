import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Asset } from "@/components/asset";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { areaList } from "@/content/area";
import { proyekList } from "@/content/proyek";
import type { AssetId } from "@/content/assets";
import { faqLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaList.map((a) => ({ kota: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/area-layanan/[kota]">): Promise<Metadata> {
  const { kota } = await params;
  const area = areaList.find((a) => a.slug === kota);
  if (!area) return {};
  return buildMetadata({
    title: `Jasa Plafon PVC ${area.nama}`,
    description: `Jasa pasang plafon PVC di ${area.nama}, Banten: proyek yang sudah dikerjakan, informasi wilayah, dan cara meminta estimasi lewat WhatsApp.`,
    path: `/area-layanan/${area.slug}`,
  });
}

export default async function AreaPage({ params }: PageProps<"/area-layanan/[kota]">) {
  const { kota } = await params;
  const area = areaList.find((a) => a.slug === kota);
  if (!area) notFound();

  const path = `/area-layanan/${area.slug}`;
  const proyek = proyekList.filter((p) => area.proyekSlugs.includes(p.slug));

  return (
    <>
      <JsonLd data={faqLd(area.faq)} />
      <PageIntro
        trail={[
          { name: "Area Layanan", path: "/area-layanan" },
          { name: area.nama, path },
        ]}
        label="Area layanan"
        title={`Jasa plafon PVC ${area.nama}`}
        lead={area.ringkasan}
      />

      <Section tone="surface" labelledBy="judul-fakta">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="judul-fakta" label="Tentang wilayah ini">
              Yang perlu Anda tahu
            </SectionHeading>
            <ul className="list-disc space-y-3 pl-5">
              {area.fakta.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="mt-6">
              Proses dan biaya dijelaskan di{" "}
              <Link href="/layanan/pasang-plafon-pvc" className="text-primary underline underline-offset-4">
                halaman jasa pasang
              </Link>{" "}
              dan contoh hasil di{" "}
              <Link href="/galeri" className="text-primary underline underline-offset-4">
                galeri
              </Link>
              .
            </p>
          </div>
          <Asset id={area.assetId as AssetId} sizes="(min-width: 1024px) 560px, 100vw" className="rounded-card" />
        </div>
      </Section>

      {proyek.length > 0 ? (
        <Section labelledBy="judul-proyek-area">
          <SectionHeading id="judul-proyek-area" label="Proyek">
            Pekerjaan di {area.nama}
          </SectionHeading>
          <ul className="grid gap-x-5 gap-y-8 md:grid-cols-3">
            {proyek.map((p) => (
              <li key={p.slug}>
                <Asset id={p.assetId as AssetId} sizes="(min-width: 768px) 384px, 100vw" className="rounded-card" />
                <p className="text-label mt-3 text-accent">
                  {p.lokasi.kecamatan}, {p.tahun}
                </p>
                <p className="font-display text-lg font-semibold">{p.judul}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section tone="surface" labelledBy="judul-faq-area">
        <SectionHeading id="judul-faq-area" label="FAQ">
          Pertanyaan dari pelanggan di {area.nama}
        </SectionHeading>
        <div className="max-w-3xl">
          <Faq items={area.faq} />
        </div>
      </Section>

      <CtaBand message={waMessages.jasa} location={`area-${area.slug}`} />
    </>
  );
}
