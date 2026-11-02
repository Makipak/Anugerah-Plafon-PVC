import Link from "next/link";
import { ProdukFoto } from "@/components/katalog/produk-foto";
import { keteranganKartu, labelAtas, type ProdukView } from "@/lib/katalog-view";

// Kartu produk: foto utama, merek dan seri, nama, jumlah warna. Seluruh kartu adalah satu tautan.
export function ProdukCard({ produk: p }: { produk: ProdukView }) {
  const foto = p.warna.find((w) => w.foto[0])?.foto[0];
  const atas = labelAtas(p);
  const keterangan = keteranganKartu(p);
  return (
    <li className="group min-w-0">
      <Link
        href={`/produk/${p.slug}`}
        className="block h-full min-w-0 rounded-card border border-line bg-surface p-2 transition-colors hover:border-line-strong"
      >
        <div className="overflow-hidden rounded-control">
          <ProdukFoto
            src={foto?.src}
            alt={foto?.alt ?? p.namaLengkap}
            label={p.namaLengkap}
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 30vw, calc(50vw - 26px)"
            className="transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </div>
        {atas ? <p className="text-label mt-2 break-words px-1 text-ink sm:mt-3 sm:px-2">{atas}</p> : null}
        <p className={`break-words px-1 font-display text-sm font-semibold leading-5 sm:px-2 sm:text-base ${atas ? "mt-1" : "mt-2 sm:mt-3"}`}>
          {p.nama}
        </p>
        {keterangan ? <p className="break-words px-1 text-xs text-ink-muted sm:px-2 sm:text-sm">{keterangan}</p> : null}
      </Link>
    </li>
  );
}

export function ProdukGrid({ produk }: { produk: readonly ProdukView[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {produk.map((p) => (
        <ProdukCard key={p.slug} produk={p} />
      ))}
    </ul>
  );
}
