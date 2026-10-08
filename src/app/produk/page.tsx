import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { MotifGrid } from "@/components/sections/motif-grid";
import { produkList } from "@/content/produk";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Produk Plafon PVC Serang Banten",
  description: "Daftar produk plafon PVC di Serang, Banten: motif, ukuran, ketebalan, dan cara memesan. Tanya ketersediaan dan harga langsung lewat WhatsApp.",
  path: "/produk",
});

export default function ProdukPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Produk", path: "/produk" }]}
        label="Produk"
        title="Plafon PVC Serang Banten"
        lead="Pilih motif yang sesuai ruangan, lalu tanyakan ketersediaan dan harganya."
      />
      {produkList.map((p) => (
        <Section key={p.slug} tone="surface">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-heading">{p.nama}</h2>
            <p className="mt-3 text-ink-muted">{p.ringkasan}</p>
          </div>
          <MotifGrid varian={p.varian} />
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={`/produk/${p.slug}`}>Spesifikasi dan FAQ</ButtonLink>
            <Link href="/layanan/harga-dan-biaya-pasang" className="inline-flex min-h-12 items-center font-semibold text-primary underline underline-offset-4">
              Lihat harga
            </Link>
          </div>
        </Section>
      ))}
      <CtaBand message={waMessages.produk("[nama motif]")} location="produk-list" />
    </>
  );
}
