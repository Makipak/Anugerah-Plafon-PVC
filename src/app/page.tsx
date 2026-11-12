import { Asset } from "@/components/asset";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroCopy } from "@/components/motion/hero-copy";
import { Reveal } from "@/components/motion/reveal";
import { SeamLines } from "@/components/motion/seam-lines";
import { Section, SectionHeading } from "@/components/ui/section";
import { Droplets, Feather, Flame } from "lucide-react";
import { ContactBlock } from "@/components/sections/contact-block";
import { testimoniList } from "@/content/testimoni";
import { localBusinessLd, websiteLd } from "@/lib/schema";
import { site } from "@/lib/site";
import { TrackedLink } from "@/components/layout/tracked-link";

export default function HomePage() {
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

      <section aria-labelledby="judul-hero" className="relative overflow-hidden bg-background">
        <SeamLines />
        <div className="container-page relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2">
          <div className="space-y-6">
            <HeroCopy>
              <p className="text-label text-primary">Plafon PVC & interior — Serang, Banten</p>
              <h1 id="judul-hero" className="text-display">
                Plafon PVC Serang
              </h1>
              <p className="max-w-xl text-lg text-ink-muted">
                Pilihan Plafon PVC dan Interior Untuk Hunian maupun Ruang Kantor Anda.
              </p>
              <div className="space-y-2 text-base">
                <address className="not-italic leading-relaxed text-ink-muted">
                  {site.address.street}, {site.address.locality}, {site.address.region}
                </address>
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-muted">
                  <span className="font-medium text-ink">Hubungi:</span>
                  <TrackedLink href={`tel:${site.phone}`} event="phone_click" location="hero" className="text-ink underline underline-offset-4">
                    {site.phoneDisplay}
                  </TrackedLink>
                  <span aria-hidden="true">/</span>
                  <TrackedLink href={`tel:${site.phoneSecondary}`} event="phone_click" location="hero" className="text-ink underline underline-offset-4">
                    {site.phoneSecondaryDisplay}
                  </TrackedLink>
                </p>
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

      <Section tone="surface" labelledBy="judul-lokasi-toko">
        <Reveal>
          <SectionHeading id="judul-lokasi-toko" label="Lokasi toko">
            Kunjungi toko kami
          </SectionHeading>
          <ContactBlock location="home" />
        </Reveal>
      </Section>

    </>
  );
}