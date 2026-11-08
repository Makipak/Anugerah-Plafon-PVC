import Link from "next/link";
import { Asset } from "@/components/asset";
import { navItems, site } from "@/lib/site";
import { areaList } from "@/content/area";

export function Footer() {
  return (
    <footer className="mt-0 border-t border-line bg-panel">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link href="/" aria-label="Anugrah Plafon PVC, beranda" className="block w-full max-w-[360px] md:translate-y-28">
            <Asset id="LOGO-01" sizes="(min-width: 1280px) 360px, (min-width: 768px) 30vw, 100vw" />
          </Link>
        </div>

        {/* HP: dua kolom berdampingan (Halaman | Wilayah + Media sosial).
            md ke atas: wrapper ini "menghilang" (contents) sehingga kedua nav
            kembali menjadi kolom ke-2 dan ke-3 pada grid utama. */}
        <div className="grid grid-cols-2 gap-x-6 md:contents">
          <nav aria-label="Tautan situs" className="min-w-0">
            <p className="text-label mb-3 inline-flex min-h-6 items-center border-l-2 border-primary pl-2 font-bold text-primary">
              Menu
            </p>
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Area layanan" className="min-w-0">
            <p className="text-label mb-3 inline-flex min-h-6 items-center border-l-2 border-primary pl-2 font-bold text-primary">
              Wilayah layanan
            </p>
            <ul className="space-y-1">
              {areaList.map((a) => (
                <li key={a.slug}>
                  <Link href={`/area-layanan/${a.slug}`} className="inline-flex min-h-11 items-center hover:text-ink">
                    Jasa plafon PVC {a.nama}
                  </Link>
                </li>
              ))}
            </ul>
            {site.sameAs.length > 0 ? (
              <>
                <p className="text-label mb-3 mt-6 inline-flex min-h-6 items-center border-l-2 border-primary pl-2 font-bold text-primary">
                  Media sosial
                </p>
                <ul className="space-y-1">
                  {site.sameAs.map((url) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center break-words hover:text-ink"
                      >
                        {new URL(url).hostname.replace("www.", "")}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </nav>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-5 text-sm text-ink-muted">
          &copy; {new Date().getFullYear()} {site.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}