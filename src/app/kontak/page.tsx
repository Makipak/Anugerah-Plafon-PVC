import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = buildMetadata({
  title: "Kontak Toko Plafon PVC Serang: Alamat, Jam, dan WhatsApp",
  description: "Alamat, jam operasional, peta, dan WhatsApp Anugerah Plavon PVC, toko dan jasa pasang plafon PVC di Serang, Banten.",
  path: "/kontak",
});

const MAPS_LINK = "https://maps.app.goo.gl/GpR5Cb22pDKahc697";
// Ganti dengan src dari Google Maps > Bagikan > Sematkan peta
const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Anugerah+Plavon+PVC+Serang+Banten&output=embed";

// DUMMY: sebaiknya diambil dari lib/site
const WA_NUMBER = "6281200000000";
const WA_TEXT = encodeURIComponent("Halo, saya mau tanya harga plafon PVC.");

export default function KontakPage() {
  return (
    <>
      <JsonLd data={localBusinessLd()} />
      <PageIntro
        trail={[{ name: "Kontak", path: "/kontak" }]}
        label="Kontak"
        title="Toko plafon PVC di Serang"
        lead="Datang ke toko atau kirim pesan lewat WhatsApp untuk tanya harga dan jadwal survei."
      />
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <dl className="space-y-5">
              <div>
                <dt className="font-medium">Alamat</dt>
                <dd>Serang, Banten</dd> {/* DUMMY: isi alamat lengkap */}
              </div>
              <div>
                <dt className="font-medium">Jam operasional</dt>
                <dd>Senin–Sabtu, 08.00–17.00</dd> {/* DUMMY */}
              </div>
              <div>
                <dt className="font-medium">WhatsApp</dt>
                <dd>0812-0000-0000</dd> {/* DUMMY */}
              </div>
              <div>
                <dt className="font-medium">Area layanan</dt>
                <dd>Kota Serang, Kabupaten Serang, Cilegon, dan sekitarnya</dd> {/* DUMMY */}
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-medium text-white"
              >
                <WhatsAppIcon />
                Chat WhatsApp
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-black/20 px-6 py-3 font-medium"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-black/10">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Peta lokasi Anugerah Plavon PVC di Serang"
              className="aspect-[4/3] h-full min-h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}