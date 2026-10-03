import Image from "next/image";
import { assets, type AssetId, type AssetSpec } from "@/content/assets";
import { isProduction } from "@/lib/placeholders";

type Props = { id: AssetId; sizes: string; priority?: boolean; className?: string };

// Semua gambar lewat komponen ini (AGENTS.md 6b). Tanpa src: placeholder berlabel di dev/preview,
// dan build produksi dihentikan.
export function Asset({ id, sizes, priority = false, className = "" }: Props) {
  const spec: AssetSpec = assets[id];
  const box = `relative ${spec.bare ? "" : "overflow-hidden bg-panel"} ${className}`;
  const style = { aspectRatio: spec.ratio };

  if (spec.src) {
    if (!spec.alt) throw new Error(`Aset ${id} punya src tetapi alt kosong`);
    return (
      <div className={box} style={style}>
        <Image
          src={spec.src}
          alt={spec.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={spec.bare ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  return (
    <div
      className={`${box} flex items-end border border-line`}
      style={{
        ...style,
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent 0 11px, rgba(27,26,23,0.06) 11px 12px)",
      }}
      aria-hidden="true"
    >
      <p className="text-label m-3 text-ink-muted">
        {id} | {spec.ratio.replace("/", ":")} | min {spec.minWidth}x{spec.minHeight} | {spec.brief}
      </p>
    </div>
  );
}
