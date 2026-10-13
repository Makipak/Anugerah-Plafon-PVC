import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { CtaBand } from "@/components/sections/cta-band";
import { ProdukGrid } from "@/components/katalog/produk-card";
import { KatalogBrowser } from "@/components/katalog/katalog-browser";
import { kategoriAktif, merekAktif, semuaProduk } from "@/lib/katalog";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Produk Plafon PVC Serang",
  description: "Lihat pilihan merek, motif, dan warna plafon PVC di Serang, Banten. Hubungi kami melalui WhatsApp untuk berkonsultasi tentang produk dan jasa pasang.",
  path: "/produk",
});

export default function ProdukPage() {
  const merek = merekAktif();
  const semua = semuaProduk();
  const kategori = kategoriAktif();
  const banyakKategori = kategori.length > 1;
  const daftarKategori = kategori.map((k) => k.nama.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " dan $1");
  const wakil = kategori.flatMap((k) => semua.filter((p) => p.kategori.slug === k.slug).slice(0, 1));
  const produkBeranda = banyakKategori ? [...wakil, ...semua.filter((p) => !wakil.includes(p))].slice(0, 8) : semua.slice(0, 8);

  // Merek hanya ditampilkan sebagai petunjuk di sini; pilihannya ada di dalam halaman kategori.
  const kategoriBermerek = kategori
    .map((k) => ({ ...k, merek: merekAktif(k.slug).map((m) => m.nama) }))
    .filter((k) => k.merek.length > 0);

  return (
    <>
      <PageIntro
        trail={[{ name: "Produk", path: "/produk" }]}
        label="Produk"
        title="Plafon PVC Serang Banten"
        lead={
          banyakKategori
            ? "Pilih jenis produk, atau langsung buka produknya untuk melihat pilihan warna dan foto. Pilihan merek ada di dalam halaman jenis produk. Hubungi kami untuk membahas pilihan produk dan jasa pasang."
            : merek.length > 0
              ? "Pilih merek dan seri, lalu buka produknya untuk melihat pilihan warna dan foto. Hubungi kami untuk membahas pilihan produk dan jasa pasang."
              : "Pilih motif yang sesuai dengan ruangan Anda. Hubungi kami untuk membahas pilihan produk dan jasa pasang."
        }
      />
      <Section tone="surface" labelledBy="judul-katalog">
        <SectionHeading
          id="judul-katalog"
          label="Katalog"
        >
          {banyakKategori ? "Pilihan produk" : merek.length > 0 ? "Merek dan motif plafon PVC" : "Motif plafon PVC"}
        </SectionHeading>
        {banyakKategori ? (
          <>
            {/* Pill bisa digeser ke samping. -mx-5/px-5 membuat geseran sampai tepi layar di HP. */}
            <nav aria-label="Jenis produk" className="-mx-5 mb-4">
              <ul className="flex snap-x gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {kategori.map((k) => {
                  const jumlahMerek = merekAktif(k.slug).length;
                  return (
                    <li key={k.slug} className="shrink-0 snap-start">
                      <Link
                        href={`/produk/kategori/${k.slug}`}
                        className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-surface px-4 font-display text-sm font-semibold text-ink transition-colors hover:border-primary hover:bg-panel"
                      >
                        {k.nama}
                        {jumlahMerek > 0 ? (
                          <span className="rounded-full bg-primary-tint px-2 py-0.5 text-xs font-semibold text-primary">
                            {jumlahMerek} merek
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-8">
              <ProdukGrid produk={produkBeranda} />
            </div>
          </>
        ) : (
          <KatalogBrowser produk={semua} merek={merek} />
        )}
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