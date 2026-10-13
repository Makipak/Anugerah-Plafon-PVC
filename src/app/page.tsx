import Link from "next/link";
import { Asset } from "@/components/asset";
import { altProyek } from "@/lib/alt";
import { keteranganProyek } from "@/lib/interior-label";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroCopy } from "@/components/motion/hero-copy";
import { Reveal } from "@/components/motion/reveal";
import { SeamLines } from "@/components/motion/seam-lines";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Droplets, Feather, Flame } from "lucide-react";
import { ContactBlock } from "@/components/sections/contact-block";
import { Faq } from "@/components/sections/faq";
import { ProdukGrid } from "@/components/katalog/produk-card";
import { Steps } from "@/components/sections/steps";
import { VideoSection } from "@/components/sections/video-section";
import { areaList } from "@/content/area";
import { faqUmum } from "@/content/faq";
import { proyekList } from "@/content/proyek";
import { testimoniList } from "@/content/testimoni";
import type { AssetId } from "@/content/assets";
import { kategoriAktif, merekAktif, semuaProduk } from "@/lib/katalog";
import { faqLd, localBusinessLd, websiteLd } from "@/lib/schema";
import { waMessages } from "@/lib/site";

export default function HomePage() {
  const proyekTerbaru = proyekList.slice(0, 4);
  const merek = merekAktif();
  const kategori = kategoriAktif();
  const banyakKategori = kategori.length > 1;
  const daftarKategori = kategori.map((k) => k.nama.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " dan $1");
  const semua = semuaProduk();
  const wakil = kategori.flatMap((k) => semua.filter((p) => p.kategori.slug === k.slug).slice(0, 1));
  const produkBeranda = banyakKategori ? [...wakil, ...semua.filter((p) => !wakil.includes(p))].slice(0, 8) : semua.slice(0, 8);
  const keunggulan = [
    {
      label: "Ringan dan mudah dipasang",
      description: "Panel ringan, pemasangan lebih cepat.",
      Icon: Feather,
    },
    {
      label: "Tahan air",
      description: "Tidak mudah rusak oleh kelembapan.",
      Icon: Droplets,
    },
    {
      label: "Tidak mudah menyulut api",
      description: "Cenderung padam sendiri saat sumber api hilang.",
      Icon: Flame,
    },
  ];

  return (
    <>
      <JsonLd data={websiteLd()} />
      <JsonLd data={localBusinessLd()} />
      <JsonLd data={faqLd(faqUmum)} />

      <section aria-labelledby="judul-hero" className="relative overflow-hidden bg-background">
        <SeamLines />
        <div className="container-page relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div className="space-y-6">
            <HeroCopy>
              <h1 id="judul-hero" className="text-display">
                Plafon PVC Serang
              </h1>
              <p className="max-w-xl text-lg text-ink-muted">
                Toko dan jasa pasang plafon PVC di Serang, Banten. Pilih motif dan konsultasikan kebutuhan pemasangan langsung lewat WhatsApp.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton message={waMessages.umum} location="hero" />
              </div>
            </HeroCopy>
          </div>
          {/* Foto hero adalah kandidat LCP: tanpa animasi yang menundanya. Tanpa frame: bentuk asli gambar. */}
          <Asset
            id="HERO-01"
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="-mx-5 lg:mx-0 lg:-mr-[max(20px,calc((100vw-1160px)/2))]"
          />
        </div>
      </section>

      <Section tone="surface" labelledBy="judul-motif">
        <Reveal>
          <SectionHeading
            id="judul-motif"
            label="Katalog"
            intro={
              banyakKategori
                ? `Tersedia ${daftarKategori}. Setiap produk punya pilihan warna dan foto.`
                : merek.length > 0
                  ? "Tersedia dari beberapa merek dan seri, dengan pilihan warna di setiap produk. Cocok untuk hunian, perkantoran, dan tempat ibadah. Sebutkan nama produk dan warnanya saat chat agar tim dapat mengecek ketersediaannya."
                  : "Tersedia dalam berbagai warna dan motif: polos, kayu, dan marmer. Cocok untuk hunian, perkantoran, dan tempat ibadah. Sebutkan kode motif saat chat agar tim dapat mengecek ketersediaannya."
            }
          >
            {banyakKategori ? "Pilihan produk" : merek.length > 0 ? "Merek dan motif plafon PVC" : "Motif plafon PVC"}
          </SectionHeading>
          {banyakKategori || merek.length > 0 ? (
            banyakKategori ? (
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
            ) : (
              <ul aria-label="Merek" className="-mt-4 mb-8 flex flex-wrap gap-x-6 gap-y-1">
                {merek.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/produk?merek=${m.slug}`}
                      className="inline-flex min-h-11 items-baseline gap-1.5 py-2 font-display font-semibold text-ink underline-offset-4 hover:text-primary hover:underline"
                    >
                      {m.nama}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          ) : null}
          <div className={banyakKategori ? "mt-8" : undefined}>
            <ProdukGrid produk={produkBeranda} />
          </div>
          <div className="mt-10">
            <ButtonLink href="/produk" variant="secondary">
              Lihat semua produk
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Section labelledBy="judul-proyek">
        <Reveal>
          <SectionHeading id="judul-proyek" label="Proyek">
            Proyek terbaru
          </SectionHeading>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-5 sm:gap-y-8 md:grid-cols-3">
            {proyekTerbaru.map((p, index) => (
              <li key={p.slug} className={index === 3 ? "lg:hidden" : undefined}>
                <Asset id={p.assetId as AssetId} alt={altProyek(p)} sizes="(min-width: 768px) 384px, 50vw" className="rounded-card" />
                <span className="mt-3 block">
                  <span className="text-label block text-ink">{keteranganProyek(p)}</span>
                  <span className="mt-1 block font-display text-lg font-semibold">{p.judul}</span>
                  {p.luasM2 ? <span className="block text-sm text-ink-muted">{p.luasM2} m2</span> : null}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/galeri" variant="secondary">
              Lihat galeri
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <VideoSection />

      <section aria-labelledby="judul-keunggulan" className="relative isolate overflow-hidden py-16 md:py-24">
        <Asset
          id="HERO-02"
          sizes="100vw"
          className="!absolute inset-0 !h-full !w-full"
        />
        <div aria-hidden="true" className="absolute inset-0 z-10 bg-ink/65" />
        <div className="container-page relative z-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-label mb-3 text-white">Keunggulan</p>
            <h2 id="judul-keunggulan" className="text-heading text-white">
              Mengapa memilih Anugrah Plafon PVC?
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {keunggulan.map(({ label, description, Icon }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white sm:size-12">
                  <Icon aria-hidden="true" className="size-5 text-primary sm:size-6" />
                </span>
                <span>
                  <span className="block font-display text-title text-white">{label}</span>
                  <span className="mt-1 block text-base leading-normal text-white">{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section tone="surface" labelledBy="judul-cara">
        <Reveal>
          <SectionHeading id="judul-cara" label="Cara kerja">
            Dari survei hingga pemasangan selesai
          </SectionHeading>
          <Steps />
        </Reveal>
      </Section>

      {testimoniList.length > 0 ? (
        <Section labelledBy="judul-testimoni">
          <Reveal>
            <SectionHeading id="judul-testimoni" label="Testimoni">
              Kata pelanggan
            </SectionHeading>
            <ul className="grid gap-8 md:grid-cols-3">
              {testimoniList.map((t) => (
                <li key={t.kutipan}>
                  <blockquote className="border-l-2 border-primary pl-4">&ldquo;{t.kutipan}&rdquo;</blockquote>
                  <p className="mt-3 text-sm text-ink-muted">
                    {t.nama}, {t.lokasi}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      ) : null}

      <Section tone={testimoniList.length > 0 ? "surface" : "background"} labelledBy="judul-area">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading id="judul-area" label="Area layanan">
              Wilayah yang kami layani
            </SectionHeading>
            <ul className="space-y-1">
              {areaList.map((a) => (
                <li key={a.slug}>
                  <Link href={`/area-layanan/${a.slug}`} className="inline-flex min-h-11 items-center font-semibold text-ink underline underline-offset-4">
                    Jasa plafon PVC {a.nama}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-heading mb-6">Pertanyaan yang sering diajukan</h2>
            <Faq items={faqUmum} />
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" labelledBy="judul-kontak">
        <Reveal>
          <SectionHeading id="judul-kontak" label="Kontak">
            Kunjungi toko atau chat kami
          </SectionHeading>
          <ContactBlock location="home" />
        </Reveal>
      </Section>

    </>
  );
}