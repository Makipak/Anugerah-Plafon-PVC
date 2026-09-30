import Link from "next/link";
import { Asset } from "@/components/asset";
import { JsonLd } from "@/components/seo/json-ld";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroCopy } from "@/components/motion/hero-copy";
import { Reveal } from "@/components/motion/reveal";
import { SeamLines } from "@/components/motion/seam-lines";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactBlock } from "@/components/sections/contact-block";
import { Faq } from "@/components/sections/faq";
import { MotifGrid } from "@/components/sections/motif-grid";
import { PriceTable } from "@/components/sections/price-table";
import { Steps } from "@/components/sections/steps";
import { areaList } from "@/content/area";
import { faqUmum } from "@/content/faq";
import { hargaDiperbaruiPada, hargaJasa, hargaMaterial } from "@/content/harga";
import { produkUtama } from "@/content/produk";
import { proyekList } from "@/content/proyek";
import { testimoniList } from "@/content/testimoni";
import type { AssetId } from "@/content/assets";
import { formatTanggal } from "@/lib/format";
import { faqLd, localBusinessLd } from "@/lib/schema";
import { waMessages } from "@/lib/site";

export default function HomePage() {
  const proyekTerbaru = proyekList.slice(0, 3);

  return (
    <>
      <JsonLd data={localBusinessLd()} />
      <JsonLd data={faqLd(faqUmum)} />

      <section aria-labelledby="judul-hero" className="relative overflow-hidden border-b border-line bg-background">
        <SeamLines />
        <div className="container-page relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div className="space-y-6">
            <HeroCopy>
              <h1 id="judul-hero" className="text-display">
                Plafon PVC di Serang, Banten: toko dan jasa pasang
              </h1>
              <p className="max-w-xl text-lg text-ink-muted">
                Pilih motif, lihat kisaran harga, dan minta estimasi pasang langsung lewat WhatsApp.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton message={waMessages.umum} location="hero" />
                <Link href="/layanan/harga-dan-biaya-pasang" className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">
                  Lihat harga
                </Link>
              </div>
            </HeroCopy>
          </div>
          {/* Foto hero adalah kandidat LCP: tanpa animasi yang menundanya. */}
          <Asset id="HERO-01" priority sizes="(min-width: 1024px) 600px, 100vw" className="rounded-card lg:-mr-[max(20px,calc((100vw-1200px)/2))] lg:rounded-r-none" />
        </div>
      </section>

      <Section tone="surface" labelledBy="judul-motif">
        <Reveal>
          <SectionHeading id="judul-motif" label="Katalog" intro="Kode motif bisa langsung disebut saat chat agar ketersediaan dan harganya cepat dicek.">
            Motif plafon PVC
          </SectionHeading>
          <MotifGrid varian={produkUtama.varian} />
          <div className="mt-10">
            <ButtonLink href="/produk/plafon-pvc" variant="secondary">
              Spesifikasi lengkap
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Section labelledBy="judul-proyek">
        <Reveal>
          <SectionHeading id="judul-proyek" label="Proyek" intro="Setiap proyek dicatat dengan kecamatan dan tahun pengerjaan.">
            Proyek terbaru
          </SectionHeading>
          <ul className="grid gap-x-5 gap-y-8 md:grid-cols-3">
            {proyekTerbaru.map((p) => (
              <li key={p.slug}>
                <Asset id={p.assetId as AssetId} sizes="(min-width: 768px) 384px, 100vw" className="rounded-card" />
                <p className="text-label mt-3 text-accent">
                  {p.lokasi.kecamatan}, {p.tahun}
                </p>
                <p className="font-display text-lg font-semibold">{p.judul}</p>
                <p className="text-sm text-ink-muted">{p.ruang}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/galeri" variant="secondary">
              Semua proyek
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Section tone="panel" labelledBy="judul-harga">
        <Reveal>
          <SectionHeading
            id="judul-harga"
            label="Harga"
            intro={`Kisaran diperbarui ${formatTanggal(hargaDiperbaruiPada)}. Harga akhir bergantung motif, luas, dan lokasi.`}
          >
            Kisaran harga material dan jasa pasang
          </SectionHeading>
          <div className="space-y-10">
            <PriceTable caption="Material" rows={hargaMaterial} />
            <PriceTable caption="Jasa pasang" rows={hargaJasa} />
          </div>
          <div className="mt-10">
            <ButtonLink href="/layanan/harga-dan-biaya-pasang">Rincian dan contoh hitungan</ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Section tone="surface" labelledBy="judul-cara">
        <Reveal>
          <SectionHeading id="judul-cara" label="Cara kerja">
            Dari survei sampai rapi
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
                  <Link href={`/area-layanan/${a.slug}`} className="inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4">
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
            Datang atau chat
          </SectionHeading>
          <ContactBlock location="home" />
        </Reveal>
      </Section>

      <CtaBand message={waMessages.umum} location="home-cta" />
    </>
  );
}
