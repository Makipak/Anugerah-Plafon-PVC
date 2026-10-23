import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { KategoriGrid } from "@/components/katalog/kategori-grid";
import { semuaKategori } from "@/lib/katalog";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Produk Plafon PVC dan WPC Serang",
  description: "Lihat jenis produk plafon PVC, WPC, kisi-kisi, dan panel dinding di Serang, Banten. Pilih kategori untuk melihat pilihan produknya.",
  path: "/produk",
});

export default function ProdukPage() {
  const kategori = semuaKategori();

  return (
    <>
      <PageIntro
        trail={[{ name: "Produk", path: "/produk" }]}
        label="Produk"
        title="Produk Plafon PVC dan Material Interior"
        lead="Pilih jenis produk untuk melihat pilihan dan foto produknya. Hubungi kami untuk membahas ketersediaan dan jasa pasang."
      />
      <Section tone="surface" labelledBy="judul-katalog">
        <SectionHeading id="judul-katalog" label="Katalog">
          Jenis produk
        </SectionHeading>
        <KategoriGrid items={kategori} />
        <p className="mt-12 text-ink-muted">
          Ingin tahu bahan, kelebihan, dan pertanyaan umum? Baca{" "}
          <Link href="/produk/plafon-pvc" className="text-ink underline underline-offset-4">
            informasi plafon PVC
          </Link>
          .
        </p>
      </Section>
      <CtaBand message={waMessages.produkUmum} location="produk-list" />
    </>
  );
}