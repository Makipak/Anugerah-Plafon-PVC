import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbLd } from "@/lib/schema";

export type Crumb = { name: string; path: string };

// Item terakhir adalah halaman saat ini. Sinkron dengan schema BreadcrumbList.
export function Breadcrumb({ trail }: { trail: readonly Crumb[] }) {
  const full: Crumb[] = [{ name: "Beranda", path: "/" }, ...trail];
  return (
    <>
      <nav aria-label="Breadcrumb" className="container-page pt-6 text-sm text-ink-muted">
        <ol className="flex flex-wrap items-center gap-x-2">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-x-2">
                {last ? (
                  <span aria-current="page" className="text-ink">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-primary">
                    {c.name}
                  </Link>
                )}
                {last ? null : <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbLd(full)} />
    </>
  );
}
