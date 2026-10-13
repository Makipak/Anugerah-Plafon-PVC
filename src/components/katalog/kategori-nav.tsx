import Link from "next/link";

type Item = { href: string; nama: string; jumlah?: number };

// Navigasi ke halaman lain: sengaja berupa teks polos, bukan kotak atau pil,
// supaya tidak bersaing dengan filter merek di bawahnya.
export function KategoriNav({ items, label, className = "" }: { items: Item[]; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-x-6 gap-y-1 ${className}`}>
      {items.map((k) => (
        <li key={k.href}>
          <Link
            href={k.href}
            className="inline-flex min-h-11 items-baseline gap-1.5 py-2 font-display font-semibold text-ink underline-offset-4 hover:text-primary hover:underline"
          >
            {k.nama}
            {k.jumlah !== undefined ? <span className="text-sm font-normal text-ink-muted tabular">{k.jumlah}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
