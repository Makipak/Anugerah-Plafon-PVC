import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CtaBand } from "@/components/sections/cta-band";
import { PriceTable } from "@/components/sections/price-table";
import { JsonLd } from "@/components/seo/json-ld";
import { faktorHarga, hargaDiperbaruiPada, hargaJasa, hargaMaterial } from "@/content/harga";
import { formatTanggal } from "@/lib/format";
import { serviceLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

const path = "/layanan/harga-dan-biaya-pasang";

export const metadata: Metadata = buildMetadata({
  title: "Harga Jasa Pasang Plafon PVC per Meter",
  description: "Kisaran harga material dan biaya jasa pasang plafon PVC di Serang, faktor penentu harga, dan contoh hitungan ruangan 3x3 meter. Minta penawaran lewat WhatsApp.",
  path,
});

export default function HargaPage() {
  return (
    <>
      <JsonLd data={serviceLd("Pemasangan plafon PVC", "Biaya material dan jasa pasang plafon PVC di Serang.", path)} />
      <PageIntro
        trail={[
          { name: "Jasa Pasang Plafon PVC", path: "/layanan/pasang-plafon-pvc" },
          { name: "Harga dan Biaya Pasang", path },
        ]}
        label="Harga"
        title="Harga plafon PVC di Serang dan biaya pasang"
        lead={`Kisaran harga diperbarui ${formatTanggal(hargaDiperbaruiPada)}. Harga material dan jasa pasang dipisah agar mudah dibandingkan.`}
      >
        <WhatsAppButton message={waMessages.harga} location="harga" label="Minta penawaran via WhatsApp" />
      </PageIntro>

      <Section tone="surface" labelledBy="judul-tabel">
        <SectionHeading id="judul-tabel" label="Kisaran harga">
          Material dan jasa pasang
        </SectionHeading>
        <div className="space-y-12">
          <PriceTable caption="Harga material" rows={hargaMaterial} />
          <PriceTable caption="Biaya jasa pasang" rows={hargaJasa} />
        </div>
      </Section>

      <Section labelledBy="judul-faktor">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="judul-faktor" label="Faktor harga">
              Yang membuat harga berbeda
            </SectionHeading>
            <ul className="list-disc space-y-3 pl-5">
              {faktorHarga.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-heading">Contoh hitungan ruangan 3 x 3 m</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5">
              <li>Luas ruangan: 3 m x 3 m = 9 m2.</li>
              <li>Tambahkan cadangan untuk potongan dan sisa; tanyakan besarnya ke pemasang.</li>
              <li>Biaya material = luas yang dibutuhkan x harga material per m2.</li>
              <li>Biaya jasa = luas x biaya jasa per m2, ditambah transport bila di luar wilayah.</li>
            </ol>
            <p className="mt-5 text-ink-muted">
              Angka akhir tergantung harga yang berlaku saat penawaran. Panduan lengkap ada di artikel{" "}
              <Link href="/blog/cara-menghitung-biaya-plafon-pvc-3x3" className="text-primary underline underline-offset-4">
                cara menghitung biaya plafon PVC
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <CtaBand message={waMessages.harga} location="harga-cta" title="Minta penawaran sesuai ruangan Anda" secondaryHref="/produk/plafon-pvc" secondaryLabel="Lihat motif" />
    </>
  );
}
