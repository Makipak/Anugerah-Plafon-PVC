import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Asset } from "@/components/asset";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { ProdukFoto } from "@/components/katalog/produk-foto";
import type { AssetId } from "@/content/assets";
import { interiorBySlug, interiorLain, interiorList } from "@/content/interior";
import { proyekList } from "@/content/proyek";
import { altProyek } from "@/lib/alt";
import { keteranganProyek } from "@/lib/interior-label";
import { isProduction } from "@/lib/placeholders";
import { faqLd, serviceLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const induk = "/layanan/interior-design";

export const dynamicParams = false;

export function generateStaticParams() {
  return interiorList.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/layanan/interior-design/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = interiorBySlug(slug);
  if (!i) return {};
  return buildMetadata({ title: i.metaTitle, description: i.metaDescription, path: `${induk}/${i.slug}` });
}

export default async function InteriorDetailPage({ params }: PageProps<"/layanan/interior-design/[slug]">) {
  const { slug } = await params;
  const i = interiorBySlug(slug);
  if (!i) notFound();

  const path = `${induk}/${i.slug}`;
  const pesan = `Halo Anugrah Plafon PVC, saya tertarik dengan layanan ${i.nama}. Saya ingin menanyakan bahan, biaya, dan jadwal survei.`;
  const foto = (i.foto ?? []).slice(0, 3);
  // Placeholder berlabel hanya di dev/preview; di produksi tanpa foto, kolom foto tidak dirender.
  const tampilFoto = foto.length > 0 || !isProduction;
  const proyek = proyekList.filter((p) => p.interior === i.slug).slice(0, 3);
  const lain = interiorLain(i.slug);

  return (
    <>
      <JsonLd data={serviceLd(i.judul, i.metaDescription, path)} />
      <JsonLd data={faqLd(i.faq)} />
      <PageIntro
        trail={[
          { name: "Interior Design", path: induk },
          { name: i.nama, path },
        ]}
        label="Interior"
        title={i.judul}
        lead={i.lead}
      >
        <WhatsAppButton message={pesan} location={`interior-${i.slug}-hero`} label={`Tanyakan ${i.nama.split(" (")[0]?.toLowerCase() ?? "layanan ini"}`} />
      </PageIntro>

      <Section tone="surface" labelledBy="judul-penjelasan">
        <div className={tampilFoto ? "grid gap-10 lg:grid-cols-2 lg:items-start" : "max-w-3xl"}>
          {tampilFoto ? (
            <div className={foto.length > 1 ? "grid grid-cols-2 gap-3 lg:order-2" : "lg:order-2"}>
              {(foto.length > 0 ? foto : [undefined]).map((src, n) => (
                <div key={src ?? "placeholder"} className={`overflow-hidden rounded-card ${foto.length > 2 && n === 0 ? "col-span-2" : ""}`}>
                  <ProdukFoto
                    src={src}
                    alt={`${i.nama} hasil pekerjaan Anugrah Plafon PVC di Serang${foto.length > 1 ? `, foto ${n + 1}` : ""}`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={n === 0}
                    label={`${i.nama} (${i.slug}-${n + 1})`}
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div>
            <SectionHeading id="judul-penjelasan" label="Penjelasan">
              Tentang {i.nama.toLowerCase()}
            </SectionHeading>
            <div className="space-y-4 text-ink-muted">
              {i.penjelasan.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
            <h3 className="mt-8 font-display text-xl font-semibold text-ink">Yang bisa Anda konsultasikan</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
              {i.poin.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton message={pesan} location={`interior-${i.slug}-penjelasan`} label="Chat WhatsApp" />
            </div>
          </div>
        </div>
        {i.slug === "plafon" ? (
          <p className="mt-10">
            Lihat detail pemasangan di{" "}
            <Link href="/layanan/pasang-plafon-pvc" className="text-ink underline underline-offset-4">
              jasa pasang plafon PVC
            </Link>{" "}
            dan pilihan motif di{" "}
            <Link href="/produk" className="text-ink underline underline-offset-4">
              katalog produk
            </Link>
            .
          </p>
        ) : null}
      </Section>

      {proyek.length > 0 ? (
        <Section labelledBy="judul-proyek-interior">
          <SectionHeading id="judul-proyek-interior" label="Hasil pekerjaan">
            Contoh {i.nama.toLowerCase()} yang sudah dikerjakan
          </SectionHeading>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-3">
            {proyek.map((p) => (
              <li key={p.slug}>
                <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 1024px) 384px, 50vw" className="rounded-card" />
                <p className="text-label mt-3 text-ink">{keteranganProyek(p)}</p>
                <p className="mt-1 font-display text-lg font-semibold">{p.judul}</p>
                <p className="text-sm text-ink-muted">{p.bahan}</p>
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
      ) : null}

      <Section tone={proyek.length > 0 ? "surface" : "background"} labelledBy="judul-faq-detail">
        <SectionHeading id="judul-faq-detail" label="FAQ">
          Pertanyaan tentang {i.nama.split(" (")[0]?.toLowerCase()}
        </SectionHeading>
        <div className="max-w-3xl">
          <Faq items={i.faq} />
        </div>
      </Section>

      <Section tone={proyek.length > 0 ? "background" : "surface"} labelledBy="judul-interior-lain">
        <SectionHeading id="judul-interior-lain" label="Layanan lain">
          Pekerjaan interior lainnya
        </SectionHeading>
        <ul className="flex flex-wrap gap-3">
          {lain.map((o) => (
            <li key={o.slug}>
              <Link
                href={`${induk}/${o.slug}`}
                className="inline-flex min-h-11 items-center rounded-control border border-line-strong bg-surface px-4 font-display text-sm font-medium text-ink hover:bg-panel"
              >
                {o.nama.split(" (")[0]}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        message={pesan}
        location={`interior-${i.slug}-cta`}
        title={`Konsultasikan ${i.nama.split(" (")[0]?.toLowerCase()} Anda`}
        description="Kirim lokasi, foto, dan perkiraan ukuran ruangan lewat WhatsApp."
        secondaryHref={induk}
        secondaryLabel="Semua jenis interior"
      />
    </>
  );
}
