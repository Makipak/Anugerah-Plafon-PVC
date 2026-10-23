import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { ProdukDetail } from "@/components/katalog/produk-detail";
import { ProdukGrid } from "@/components/katalog/produk-card";
import { kategoriAktif, produkBySlug, produkTerkait, semuaProduk } from "@/lib/katalog";
import { pesanProduk } from "@/lib/katalog-view";
import { productLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return semuaProduk().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produk/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = produkBySlug(slug);
  if (!p) return {};
  const warna = p.warna.length > 1 ? ` dalam ${p.warna.length} pilihan warna` : "";
  return buildMetadata({
    title: p.namaLengkap,
    description: `Lihat foto dan spesifikasi ${p.kategori.nama} ${p.namaLengkap}${warna}. Hubungi Anugrah Plafon PVC Serang melalui WhatsApp untuk menanyakan ketersediaan.`,
    path: `/produk/${p.slug}`,
  });
}

export default async function ProdukDetailPage({ params }: PageProps<"/produk/[slug]">) {
  const { slug } = await params;
  const p = produkBySlug(slug);
  if (!p) notFound();

  const path = `/produk/${p.slug}`;
  const terkait = produkTerkait(p);
  const gambar = p.warna.flatMap((w) => w.foto.map((f) => f.src)).filter(Boolean);
  const banyakKategori = kategoriAktif().length > 1;
  const motif = p.motif ? `motif ${p.motif.toLowerCase()}` : undefined;

  return (
    <>
      <JsonLd
        data={productLd(
          {
            nama: p.namaLengkap,
            ringkasan: `${p.kategori.nama} ${p.namaLengkap}${motif ? `, ${motif}` : ""}${p.warna.length > 1 ? `, tersedia dalam ${p.warna.length} pilihan warna` : ""}.`,
            kategori: p.kategori.nama,
            ...(p.merek ? { merek: p.merek.nama } : {}),
            gambar,
          },
          path,
        )}
      />
      <PageIntro
        trail={[
          { name: "Produk", path: "/produk" },
          ...(banyakKategori ? [{ name: p.kategori.nama, path: `/produk/kategori/${p.kategori.slug}` }] : []),
          ...(p.merek && p.kategori.slug === "plafon-pvc"
            ? [{
                name: p.merek.nama,
                path: `/produk/kategori/${p.kategori.slug}/merek/${p.merek.slug}`,
              }]
            : []),
          { name: p.namaLengkap, path },
        ]}
        label={p.merek ? p.merek.nama : p.kategori.nama}
        title={p.namaLengkap}
        lead={
          p.warna.length > 1
            ? `${p.kategori.nama}${motif ? `, ${motif}` : ""}, dengan ${p.warna.length} pilihan warna. Pilih warna untuk melihat fotonya.`
            : `${p.kategori.nama}${motif ? `, ${motif}` : ""}. Hubungi kami untuk menanyakan ketersediaan.`
        }
      />

      <Section tone="surface" labelledBy="judul-produk">
        <h2 id="judul-produk" className="sr-only">
          Foto dan pilihan warna
        </h2>
        <ProdukDetail produk={p} />
      </Section>

      {terkait.length > 0 ? (
        <Section labelledBy="judul-terkait">
          <SectionHeading id="judul-terkait" label="Produk lain">
            Pilihan lain yang mungkin cocok
          </SectionHeading>
          <ProdukGrid produk={terkait} />
        </Section>
      ) : null}

      <CtaBand
        message={pesanProduk(p)}
        location="produk-detail-cta"
        secondaryHref="/produk"
        secondaryLabel="Lihat semua produk"
      />
    </>
  );
}
