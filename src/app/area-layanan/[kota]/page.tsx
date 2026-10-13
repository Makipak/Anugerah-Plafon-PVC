import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Asset } from "@/components/asset";
import { altProyek } from "@/lib/alt";
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
    title: `Jasa Pasang Plafon PVC ${area.nama}`,
    description: `Informasi jasa pasang plafon PVC di ${area.nama}, Banten. Lihat contoh pekerjaan dan hubungi kami melalui WhatsApp untuk membahas kebutuhan Anda.`,
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
              Informasi layanan
            </SectionHeading>
            <ul className="list-disc space-y-3 pl-5">
              {area.fakta.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="mt-6">
              Pelajari proses jasa pasang dan lihat contoh pekerjaan di{" "}
              <Link href="/layanan/pasang-plafon-pvc" className="text-ink underline underline-offset-4">
                halaman jasa pasang
              </Link>{" "}
              serta{" "}
              <Link href="/galeri" className="text-ink underline underline-offset-4">
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
            Contoh pekerjaan di {area.nama}
          </SectionHeading>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3">
            {proyek.map((p) => (
              <li key={p.slug}>
                <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 768px) 384px, 50vw" className="rounded-card" />
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
