import Image from "next/image";

// Foto produk persegi (1:1). Tanpa src: placeholder berlabel di dev/preview;
// build produksi dihentikan oleh lib/content-check.ts jika masih ada foto kosong.
export function ProdukFoto({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  label = "Foto produk",
}: {
  src?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  label?: string;
}) {
  const box = `relative aspect-square overflow-hidden bg-panel ${className}`;
  if (src) {
    return (
      <div className={box}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`${box} flex items-end border border-line`}
      style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent 0 11px, rgba(27,26,23,0.06) 11px 12px)" }}
    >
      <p className="text-label m-3 text-ink-muted">FOTO | 1:1 | min 800x800 | {label}</p>
    </div>
  );
}
