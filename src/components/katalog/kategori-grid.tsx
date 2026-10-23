import Link from "next/link";
import { ProdukFoto } from "@/components/katalog/produk-foto";

type Item = { slug: string; nama: string; thumbnail?: string };

export function KategoriGrid({ items }: { items: Item[] }) {
  return (
    <ul aria-label="Kategori produk" className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((k) => (
        <li key={k.slug} className="group">
          <Link href={`/produk/kategori/${k.slug}`} className="block">
            <div className="overflow-hidden rounded-card">
              <ProdukFoto
                src={k.thumbnail}
                alt={`Foto kategori ${k.nama}`}
                label={k.nama}
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
                className="transition-transform duration-200 group-hover:scale-[1.03]"
              />
            </div>
            <span className="mt-3 block font-display font-semibold">{k.nama}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
