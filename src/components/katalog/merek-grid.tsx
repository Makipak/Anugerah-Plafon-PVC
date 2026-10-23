import Link from "next/link";
import { ProdukFoto } from "@/components/katalog/produk-foto";
import type { MerekView } from "@/lib/katalog-view";

export function MerekGrid({ kategori, items }: { kategori: string; items: MerekView[] }) {
  return (
    <ul aria-label="Merek produk" className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((merek) => (
        <li key={merek.slug} className="group">
          <Link href={`/produk/kategori/${kategori}/merek/${merek.slug}`} className="block">
            <div className="overflow-hidden rounded-card">
              <ProdukFoto
                src={merek.thumbnail}
                alt={`Foto merek ${merek.nama}`}
                label={merek.nama}
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                className="transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </div>
            <span className="mt-3 block font-display font-semibold">{merek.nama}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
