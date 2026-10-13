import type { Metadata } from "next";
import { Asset } from "@/components/asset";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Tentang Anugrah Plafon PVC Serang",
  description: "Kenali Anugrah Plafon PVC, toko dan jasa pasang di Serang, Banten, dengan pilihan plafon PVC, WPC, kisi-kisi, panel dinding, dan layanan interior.",
  path: "/tentang-kami",
});

export default function TentangPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Tentang Kami", path: "/tentang-kami" }]}
        label="Tentang"
        title="Tentang Anugrah Plafon PVC"
        lead="Toko dan jasa pasang plafon PVC di Serang, Banten, dengan pilihan bahan dan layanan interior untuk berbagai ruangan."
      />

      <Section tone="surface" labelledBy="judul-cerita">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="judul-cerita" label="Cerita">
              Tentang usaha
            </SectionHeading>
            <div className="space-y-4">
              <p>
                Anugrah Plafon PVC adalah toko dan jasa pasang plafon PVC di Kota Serang, Banten. Kami menyediakan panel plafon PVC dalam berbagai warna
                dan motif, serta melayani pemasangannya untuk hunian, perkantoran, dan tempat ibadah.
              </p>
              <p>
                Selain plafon, kami juga menyediakan WPC, kisi-kisi, panel dinding, dan rangka hollow, serta menangani pekerjaan interior seperti kamar
                set, kitchen set, partisi, dan backdrop TV.
              </p>
              <p>Kami siap membantu menjadikan interior hunian Anda makin cantik dan berwarna, sesuai model dan karakter yang Anda inginkan.</p>
            </div>
          </div>
          <Asset id="TOKO-01" sizes="(min-width: 1024px) 560px, 100vw" className="rounded-card" />
        </div>
      </Section>

      <Section labelledBy="judul-bahan">
        <SectionHeading id="judul-bahan" label="Bahan">
          Mengenal plafon PVC
        </SectionHeading>
        {/* Klaim sifat api bersumber dari klien dan sengaja ditulis hati-hati. Cocokkan dengan lembar spesifikasi pemasok sebelum diperkuat. */}
        <div className="max-w-3xl space-y-4">
          <p>
            Plafon PVC terbuat dari <em>Polyvinyl Chloride</em>, bahan plastik yang kuat dan ringan.
          </p>
          <p>
            <strong>Ringan dan mudah dipasang.</strong> Karakternya yang ringan membuat plafon PVC cocok untuk berbagai jenis ruangan.
          </p>
          <p>
            <strong>Tahan air.</strong> Sifat ini membuat plafon PVC cocok untuk ruangan yang kerap terpapar kelembapan.
          </p>
          <p>
            <strong>Tidak mudah menyulut api.</strong> PVC punya sifat yang cukup berbeda dari plastik pada umumnya. Plafon PVC tidak mudah menyulut api,
            dan api cenderung padam sendiri setelah sumber api hilang, sehingga tidak merambat cepat ke seluruh bagian langit-langit.
          </p>
        </div>
      </Section>

      <Section tone="surface" labelledBy="judul-ruang">
        <SectionHeading
          id="judul-ruang"
          label="Penggunaan"
          intro="Plafon PVC tersedia dalam berbagai warna dan desain yang estetik, sehingga bisa disesuaikan dengan karakter ruangan Anda."
        >
          Cocok untuk hunian, perkantoran, dan tempat ibadah
        </SectionHeading>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/produk">Lihat produk</ButtonLink>
          <ButtonLink href="/galeri" variant="secondary">
            Lihat hasil pemasangan
          </ButtonLink>
        </div>
      </Section>

      <Section labelledBy="judul-tim">
        <div className="grid gap-10 lg:grid-cols-2">
          <Asset id="TIM-01" sizes="(min-width: 1024px) 560px, 100vw" className="rounded-card" />
          <div>
            <SectionHeading id="judul-tim" label="Tim">
              Tim pemasangan
            </SectionHeading>
            <p>Tim lapangan menangani pemasangan plafon PVC.</p>
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="judul-layanan">
        <SectionHeading
          id="judul-layanan"
          label="Layanan"
          intro="Merek yang tersedia antara lain DANTE, LAMIWOOD, JAVAFON, dan Conwood."
        >
          Produk dan layanan kami
        </SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold">Produk</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Plafon PVC</li>
              <li>WPC dan WPC outdoor</li>
              <li>PVC marble granite</li>
              <li>Kisi-kisi dan kisi-kisi outdoor</li>
              <li>Hollow rangka</li>
              <li>Panel dinding Conwood</li>
            </ul>
            <div className="mt-5">
              <ButtonLink href="/produk" variant="secondary">
                Lihat semua produk
              </ButtonLink>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Interior design</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Kamar set</li>
              <li>Kitchen set (dapur set)</li>
              <li>Partisi</li>
              <li>Backdrop TV</li>
              <li>Dan kebutuhan interior lainnya</li>
            </ul>
            <div className="mt-5">
              <ButtonLink href="/layanan/interior-design" variant="secondary">
                Lihat layanan interior
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        message={waMessages.umum}
        location="tentang-cta"
        title="Wujudkan interior hunian yang lebih cantik dan berwarna"
        description="Pilih model dan motif sesuai karakter ruangan Anda, lalu konsultasikan lewat WhatsApp."
        secondaryHref="/produk"
        secondaryLabel="Lihat produk"
      />
    </>
  );
}