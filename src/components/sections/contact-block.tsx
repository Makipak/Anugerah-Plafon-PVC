import { TrackedLink } from "@/components/layout/tracked-link";
import { buttonClass } from "@/components/ui/button";
import { site } from "@/lib/site";

const belumAda = (v: string) => v === "" || v.includes("[ISI]");

export function ContactBlock({ location }: { location: string }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-stretch">
      <div>
        <address className="not-italic">
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3">{site.address.street}</p>
          <p>
            {site.address.locality}, {site.address.region} {site.address.postalCode}
          </p>
          <p>{site.address.landmark}</p>
          <p className="mt-4">
            Telepon:{" "}
            <TrackedLink href={`tel:${site.phone}`} event="phone_click" location={location} className="text-ink underline underline-offset-4">
              {site.phoneDisplay}
            </TrackedLink>
          </p>
          {site.email ? <p>Email: {site.email}</p> : null}
          <p className="mt-4">Jam operasional: {site.hours.text}</p>
        </address>
        {belumAda(site.mapsUrl) ? null : (
          <TrackedLink
            href={site.mapsUrl}
            event="map_click"
            location={location}
            className={`mt-6 ${buttonClass.secondary}`}
          >
            Lihat lokasi di Google Maps
          </TrackedLink>
        )}
      </div>

      {belumAda(site.mapsEmbedUrl) ? (
        <div aria-hidden="true" className="flex min-h-64 items-end rounded-card border border-line bg-panel p-4">
          <p className="text-label text-ink-muted">Peta | embed Google Maps menunggu titik lokasi klien</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-card border border-line">
          <iframe
            title={`Peta lokasi ${site.name}`}
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-80 w-full lg:h-full lg:min-h-80"
          />
        </div>
      )}
    </div>
  );
}