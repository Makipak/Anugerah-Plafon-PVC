import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kontak Toko Plafon PVC Serang",
  description: "Alamat, jam operasional, peta, dan WhatsApp Anugerah Plafon PVC, toko dan jasa pasang plafon PVC di Serang, Banten. Hubungi kami untuk tanya motif dan harga.",
  path: "/kontak",
});

const MAPS_LINK = "https://maps.app.goo.gl/GpR5Cb22pDKahc697";
// Ganti dengan src dari Google Maps > Bagikan > Sematkan peta
const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Anugerah+Plafon+PVC+Serang+Banten&output=embed";

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
                <dd>{`${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`}</dd>
              </div>
              <div>
                <dt className="font-medium">Jam operasional</dt>
                <dd>{site.hours.text}</dd>
              </div>
              <div>
                <dt className="font-medium">WhatsApp</dt>
                <dd>{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-medium">Area layanan</dt>
                <dd>Kota Serang, Kabupaten Serang, Cilegon, dan sekitarnya</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Halo, saya mau tanya harga plafon PVC.")}
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
              title="Peta lokasi Anugerah Plafon PVC di Serang"
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