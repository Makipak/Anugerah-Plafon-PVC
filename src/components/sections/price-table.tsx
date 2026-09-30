import type { HargaRow } from "@/content/schemas";

// Tabel di layar lebar, daftar per baris di mobile (DESIGN.md bagian 8).
export function PriceTable({ caption, rows }: { caption: string; rows: readonly HargaRow[] }) {
  return (
    <div>
      <table className="hidden w-full border-collapse text-left md:table">
        <caption className="pb-3 text-left font-display text-lg font-semibold">{caption}</caption>
        <thead>
          <tr className="bg-panel">
            <th scope="col" className="border border-line px-4 py-3 font-display font-semibold">Item</th>
            <th scope="col" className="border border-line px-4 py-3 font-display font-semibold">Satuan</th>
            <th scope="col" className="border border-line px-4 py-3 text-right font-display font-semibold">Kisaran harga</th>
          </tr>
        </thead>
        <tbody className="bg-surface">
          {rows.map((r) => (
            <tr key={r.item}>
              <th scope="row" className="border border-line px-4 py-3 font-normal">
                {r.item}
                {r.catatan ? <span className="mt-1 block text-sm text-ink-muted">{r.catatan}</span> : null}
              </th>
              <td className="border border-line px-4 py-3">{r.satuan}</td>
              <td className="tabular border border-line px-4 py-3 text-right">{r.kisaran}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="md:hidden">
        <p className="pb-3 font-display text-lg font-semibold">{caption}</p>
        <ul className="divide-y divide-line border-y border-line bg-surface">
          {rows.map((r) => (
            <li key={r.item} className="px-4 py-4">
              <p className="font-semibold">{r.item}</p>
              <p className="mt-1 text-ink-muted">
                <span className="tabular">{r.kisaran}</span> / {r.satuan}
              </p>
              {r.catatan ? <p className="mt-1 text-sm text-ink-muted">{r.catatan}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
