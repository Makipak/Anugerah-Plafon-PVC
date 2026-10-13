import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { KatalogBrowser } from "@/components/katalog/katalog-browser";
import { kategoriAktif, kategoriBySlug, merekAktif, semuaProduk } from "@/lib/katalog";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return kategoriAktif().map((k) => ({ kategori: k.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produk/kategori/[kategori]">): Promise<Metadata> {
  const { kategori } = await params;
  const k = kategoriBySlug(kategori);
  if (!k) return {};
  return buildMetadata({
    title: `${k.nama} Serang`,
    description: `Lihat pilihan ${k.nama} beserta warna dan fotonya di Anugrah Plafon PVC, Serang, Banten. Hubungi kami melalui WhatsApp untuk menanyakan ketersediaan.`,
    path: `/produk/kategori/${k.slug}`,
  });
}

export default async function KategoriPage({ params }: PageProps<"/produk/kategori/[kategori]">) {
  const { kategori } = await params;
  const k = kategoriBySlug(kategori);
  // Dengan satu kategori saja, halaman ini hanya menggandakan /produk, jadi tidak ditampilkan.
  if (!k || kategoriAktif().length < 2) notFound();

  return (
    <>
      <PageIntro
        trail={[
          { name: "Produk", path: "/produk" },
          { name: k.nama, path: `/produk/kategori/${k.slug}` },
        ]}
        label="Kategori"
        title={k.nama}
        lead={k.ringkasan ?? "Pilih produk untuk melihat warna dan fotonya."}
      />
      <Section tone="surface" labelledBy="judul-katalog">
        <h2 id="judul-katalog" className="sr-only">
          Daftar produk {k.nama}
        </h2>
        <KatalogBrowser produk={semuaProduk(k.slug)} merek={merekAktif(k.slug)} />
      </Section>
      <CtaBand message={waMessages.produkUmum} location="kategori-cta" secondaryHref="/produk" secondaryLabel="Lihat semua produk" />
    </>
  );
}
