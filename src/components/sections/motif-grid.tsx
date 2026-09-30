import { Asset } from "@/components/asset";
import type { AssetId } from "@/content/assets";
import type { Produk } from "@/content/schemas";

// Swatch foto motif dengan nama dan kode, bukan kartu ikon (DESIGN.md bagian 7).
export function MotifGrid({ varian }: { varian: Produk["varian"] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-4">
      {varian.map((v) => (
        <li key={v.assetId} className="group">
          <div className="overflow-hidden rounded-card">
            <Asset
              id={v.assetId as AssetId}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
              className="transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </div>
          <p className="text-label mt-3 text-accent">{v.kode}</p>
          <p className="font-display font-semibold">{v.nama}</p>
          <p className="text-sm text-ink-muted">
            {v.ukuran}
            {v.tebal ? ` | ${v.tebal}` : ""}
          </p>
        </li>
      ))}
    </ul>
  );
}
