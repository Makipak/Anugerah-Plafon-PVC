import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { ProdukGrid } from "@/components/katalog/produk-card";
import { PageIntro } from "@/components/ui/page-intro";
import { Section } from "@/components/ui/section";
import { kategoriBySlug, merekAktif, semuaProduk } from "@/lib/katalog";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return merekAktif("plafon-pvc").map((merek) => ({
    kategori: "plafon-pvc",
    merek: merek.slug,
  }));
}

export async function generateMetadata({ params }: PageProps<"/produk/kategori/[kategori]/merek/[merek]">): Promise<Metadata> {
  const { kategori, merek: merekSlug } = await params;
  const merek = merekAktif(kategori).find((item) => item.slug === merekSlug);
  if (!merek) return {};
  return buildMetadata({
    title: `${merek.nama} ${kategoriBySlug(kategori)?.nama ?? "Plafon PVC"} Serang`,
    description: `Lihat pilihan produk ${merek.nama} beserta foto dan detailnya di Anugrah Plafon PVC, Serang, Banten.`,
    path: `/produk/kategori/${kategori}/merek/${merek.slug}`,
  });
}

export default async function MerekPage({ params }: PageProps<"/produk/kategori/[kategori]/merek/[merek]">) {
  const { kategori, merek: merekSlug } = await params;
  const k = kategoriBySlug(kategori);
  const merek = merekAktif(kategori).find((item) => item.slug === merekSlug);
  if (!k || !merek) notFound();

  const produk = semuaProduk(kategori).filter((item) => item.merek?.slug === merek.slug);

  return (
    <>
      <PageIntro
        trail={[
          { name: "Produk", path: "/produk" },
          { name: k.nama, path: `/produk/kategori/${k.slug}` },
          { name: merek.nama, path: `/produk/kategori/${k.slug}/merek/${merek.slug}` },
        ]}
        label={`Merek ${k.nama}`}
        title={merek.nama}
        lead={`Pilih produk ${merek.nama} untuk melihat foto dan detailnya.`}
      />
      <Section tone="surface" labelledBy="judul-katalog">
        <h2 id="judul-katalog" className="sr-only">
          Produk {merek.nama}
        </h2>
        <ProdukGrid produk={produk} />
      </Section>
      <CtaBand
        message={waMessages.produkUmum}
        location="merek-cta"
        secondaryHref={`/produk/kategori/${k.slug}`}
        secondaryLabel={`Kembali ke merek ${k.nama}`}
      />
    </>
  );
}
