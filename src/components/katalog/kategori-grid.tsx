import Link from "next/link";
import { ProdukFoto } from "@/components/katalog/produk-foto";

type Item = { slug: string; nama: string; thumbnail?: string };

export function KategoriGrid({ items }: { items: Item[] }) {
  return (
    <ul aria-label="Kategori produk" className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {items.map((k) => (
        <li key={k.slug} className="group min-w-0">
          <Link
            href={`/produk/kategori/${k.slug}`}
            className="block h-full min-w-0 rounded-card border border-line bg-surface p-2 transition-colors hover:border-line-strong"
          >
            <div className="overflow-hidden rounded-control">
              <ProdukFoto
                src={k.thumbnail}
                alt={`Foto kategori ${k.nama}`}
                label={k.nama}
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 30vw, calc(50vw - 26px)"
                className="transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </div>
            <span className="mt-2 block min-h-11 break-words px-1 font-display text-sm font-semibold leading-5 sm:mt-3 sm:px-2 sm:text-base">
              {k.nama}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
