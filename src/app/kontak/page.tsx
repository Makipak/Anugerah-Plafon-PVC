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
  description: "Alamat, jam operasional, peta, dan WhatsApp Anugrah Plafon PVC, toko dan jasa pasang plafon PVC di Serang, Banten. Hubungi kami untuk tanya motif dan harga.",
  path: "/kontak",
});

// Label ramah dari hostname; URL lain jatuh ke hostname apa adanya.
function sosmedLabel(url: string): string {
  const host = new URL(url).hostname;
  if (host.includes("instagram")) return "Instagram";
  if (host.includes("tiktok")) return "TikTok";
  if (host.includes("facebook")) return "Facebook";
  return host.replace("www.", "");
}

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
                <dd>Kota Serang, Kabupaten Serang (termasuk Ciruas), Cilegon, Merak, dan sekitarnya</dd>
              </div>
              {site.sameAs.length > 0 ? (
                <div>
                  <dt className="font-medium">Media sosial</dt>
                  <dd className="flex flex-wrap gap-x-5">
                    {site.sameAs.map((url) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center text-primary underline underline-offset-4"
                      >
                        {sosmedLabel(url)}
                      </a>
                    ))}
                  </dd>
                </div>
              ) : null}
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
                href={site.mapsUrl}
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
              src={site.mapsEmbedUrl}
              title="Peta lokasi Anugrah Plafon PVC di Serang"
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