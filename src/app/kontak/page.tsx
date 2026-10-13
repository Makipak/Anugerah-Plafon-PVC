import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { buttonClass } from "@/components/ui/button";
import { site, waMessages } from "@/lib/site";
import { TrackedLink } from "@/components/layout/tracked-link";

export const metadata: Metadata = buildMetadata({
  title: "Kontak Plafon PVC Serang",
  description: "Temukan alamat, jam operasional, peta, dan WhatsApp Anugrah Plafon PVC di Serang. Hubungi kami untuk berkonsultasi tentang produk dan jasa pasang.",
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
        lead="Kunjungi toko atau chat kami melalui WhatsApp untuk membahas produk dan jadwal survei."
      />
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <dl className="space-y-5">
              <div>
                <dt className="font-medium">Alamat</dt>
                <dd>{`${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`}</dd>
                <dd>{site.address.landmark}</dd>
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
                <dt className="font-medium">Wilayah layanan</dt>
                <dd>Serang, Cilegon, Merak, dan Ciruas</dd>
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
                        className="inline-flex min-h-11 items-center text-ink underline underline-offset-4"
                      >
                        {sosmedLabel(url)}
                      </a>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton message={waMessages.umum} location="kontak" />
              <TrackedLink
                href={site.mapsUrl}
                event="map_click"
                location="kontak"
                className={buttonClass.secondary}
              >
                Lihat lokasi di Google Maps
              </TrackedLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-line">
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