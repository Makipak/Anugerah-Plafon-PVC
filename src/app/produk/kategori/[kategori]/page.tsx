import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { KatalogBrowser } from "@/components/katalog/katalog-browser";
import { MerekGrid } from "@/components/katalog/merek-grid";
import { ProdukGrid } from "@/components/katalog/produk-card";
import { kategoriBySlug, merekAktif, semuaKategori, semuaProduk } from "@/lib/katalog";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return semuaKategori().map((k) => ({ kategori: k.slug }));
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
  if (!k) notFound();
  const merek = merekAktif(k.slug);
  const produk = semuaProduk(k.slug);
  const tanpaMerek = produk.filter((p) => !p.merek);

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
          {k.slug === "plafon-pvc" ? `Merek ${k.nama}` : `Daftar produk ${k.nama}`}
        </h2>
        {k.slug === "plafon-pvc" ? (
          <>
            <MerekGrid kategori={k.slug} items={merek} />
            {tanpaMerek.length > 0 ? (
              <div className="mt-12">
                <h3 className="mb-6 font-display text-xl font-semibold">Produk tanpa merek</h3>
                <ProdukGrid produk={tanpaMerek} />
              </div>
            ) : null}
          </>
        ) : (
          <KatalogBrowser produk={produk} merek={merek} />
        )}
      </Section>
      <CtaBand message={waMessages.produkUmum} location="kategori-cta" secondaryHref="/produk" secondaryLabel="Lihat semua produk" />
    </>
  );
}
