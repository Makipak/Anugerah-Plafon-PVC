import Link from "next/link";
import { Orbitron } from "next/font/google";
import { Asset } from "@/components/asset";
import { navItems, site } from "@/lib/site";
import { areaList } from "@/content/area";
import { TrackedLink } from "./tracked-link";

const logoFont = Orbitron({ subsets: ["latin"], weight: "900", display: "swap" });

export function Footer() {
  return (
    <footer className="mt-0 border-t border-line bg-panel">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link href="/" className="-ml-8 flex items-center gap-3">
            <span className="block w-44 shrink-0">
              <Asset id="LOGO-01" sizes="176px" />
            </span>
            <span className="-ml-8 min-w-0">
              <span
                className={`${logoFont.className} block -skew-x-12 whitespace-nowrap text-sm uppercase tracking-wide text-ink min-[400px]:text-base`}
              >
                Anugerah Plafon PVC
              </span>
              <span className="block text-sm leading-tight text-ink-muted">Pusat Plafon PVC</span>
            </span>
          </Link>
          <address className="mt-5 not-italic text-ink-muted">
            <p>{site.address.street}</p>
            <p>
              {site.address.locality}, {site.address.region} {site.address.postalCode}
            </p>
            <p className="mt-2">
              <TrackedLink href={`tel:${site.phone}`} event="phone_click" location="footer" className="text-primary underline underline-offset-4">
                {site.phoneDisplay}
              </TrackedLink>
            </p>
            <p className="mt-2">Jam operasional: {site.hours.text}</p>
          </address>
        </div>

        <nav aria-label="Tautan situs">
          <p className="text-label mb-3 text-accent">Halaman</p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Area layanan">
          <p className="text-label mb-3 text-accent">Area layanan</p>
          <ul className="space-y-1">
            {areaList.map((a) => (
              <li key={a.slug}>
                <Link href={`/area-layanan/${a.slug}`} className="inline-flex min-h-11 items-center hover:text-primary">
                  Jasa plafon PVC {a.nama}
                </Link>
              </li>
            ))}
          </ul>
          {site.sameAs.length > 0 ? (
            <>
              <p className="text-label mb-3 mt-6 text-accent">Media sosial</p>
              <ul className="space-y-1">
                {site.sameAs.map((url) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center hover:text-primary">
                      {new URL(url).hostname.replace("www.", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}