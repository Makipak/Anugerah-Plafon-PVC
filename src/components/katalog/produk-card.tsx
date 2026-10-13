import Link from "next/link";
import { ProdukFoto } from "@/components/katalog/produk-foto";
import { keteranganKartu, labelAtas, type ProdukView } from "@/lib/katalog-view";

// Kartu produk: foto utama, merek dan seri, nama, jumlah warna. Seluruh kartu adalah satu tautan.
export function ProdukCard({ produk: p }: { produk: ProdukView }) {
  const foto = p.warna.find((w) => w.foto[0])?.foto[0];
  const atas = labelAtas(p);
  const keterangan = keteranganKartu(p);
  return (
    <li className="group">
      <Link href={`/produk/${p.slug}`} className="block">
        <div className="overflow-hidden rounded-card">
          <ProdukFoto
            src={foto?.src}
            alt={foto?.alt ?? p.namaLengkap}
            label={p.namaLengkap}
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
            className="transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </div>
        {atas ? <p className="text-label mt-3 text-ink">{atas}</p> : null}
        <p className={`font-display font-semibold ${atas ? "" : "mt-3"}`}>{p.nama}</p>
        {keterangan ? <p className="text-sm text-ink-muted">{keterangan}</p> : null}
      </Link>
    </li>
  );
}

export function ProdukGrid({ produk }: { produk: readonly ProdukView[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
      {produk.map((p) => (
        <ProdukCard key={p.slug} produk={p} />
      ))}
    </ul>
  );
}
