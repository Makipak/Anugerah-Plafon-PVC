import Link from "next/link";

type Item = { slug: string; nama: string; jumlah: number; merek: string[] };

// Daftar kategori di /produk. Merek tidak disaring di sini; kartu hanya memberi tahu
// bahwa kategori itu punya pilihan merek, supaya pengunjung membukanya untuk melihat.
export function KategoriGrid({ items }: { items: Item[] }) {
  return (
    <ul aria-label="Kategori produk" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((k) => (
        <li key={k.slug}>
          <Link
            href={`/produk/kategori/${k.slug}`}
            className="flex h-full min-h-28 flex-col rounded-card border border-line bg-surface p-5 transition-colors hover:border-primary hover:bg-panel"
          >
            <span className="font-display text-lg font-semibold">{k.nama}</span>
            <span className="text-sm text-ink-muted tabular">{k.jumlah} produk</span>
            {k.merek.length > 0 ? (
              <span className="mt-auto pt-3 text-sm font-semibold text-primary">
                {k.merek.length} merek: {k.merek.join(", ")}
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
