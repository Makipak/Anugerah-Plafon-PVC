import { TrackedLink } from "@/components/layout/tracked-link";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { site, waMessages } from "@/lib/site";

const belumAda = (v: string) => v === "" || v.includes("[ISI]");

export function ContactBlock({ location }: { location: string }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <address className="not-italic">
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3">{site.address.street}</p>
          <p>
            {site.address.locality}, {site.address.region} {site.address.postalCode}
          </p>
          <p className="mt-4">
            Telepon:{" "}
            <TrackedLink href={`tel:${site.phone}`} event="phone_click" location={location} className="text-primary underline underline-offset-4">
              {site.phone}
            </TrackedLink>
          </p>
          <p>Email: {site.email}</p>
          <p className="mt-4">Jam operasional: {site.hours.text}</p>
        </address>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton message={waMessages.umum} location={location} />
          {belumAda(site.mapsUrl) ? null : (
            <TrackedLink
              href={site.mapsUrl}
              event="map_click"
              location={location}
              className="inline-flex min-h-12 items-center justify-center rounded-control border border-ink px-5 font-display font-semibold hover:bg-panel"
            >
              Buka di Google Maps
            </TrackedLink>
          )}
        </div>
      </div>

      {belumAda(site.mapsEmbedUrl) ? (
        <div aria-hidden="true" className="flex min-h-64 items-end border border-line bg-panel p-4">
          <p className="text-label text-ink-muted">Peta | embed Google Maps menunggu titik lokasi klien</p>
        </div>
      ) : (
        <iframe
          title={`Peta lokasi ${site.name}`}
          src={site.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-80 w-full border border-line"
        />
      )}
    </div>
  );
}
