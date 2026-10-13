import { existsSync, statSync } from "node:fs";
import { isAbsolute, relative, resolve, sep } from "node:path";
import { DATA_DUMMY, findPlaceholders, isProduction } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { interiorList } from "@/content/interior";
import { produkNyata } from "@/content/katalog";
import { produkList } from "@/content/produk";
import { proyekList } from "@/content/proyek";
import { areaList } from "@/content/area";
import { faqUmum } from "@/content/faq";
import { assets } from "@/content/assets";

// Build produksi berhenti jika data masih berpenanda [ISI] atau ada aset tanpa src/alt.
// Preview dan dev tidak terpengaruh. Artikel blog diperiksa di lib/blog.ts.
export function assertProductionReady(): void {
  if (!isProduction) return;
  if (DATA_DUMMY) {
    throw new Error("Build produksi dihentikan: DATA_DUMMY masih true (src/lib/placeholders.ts). Ganti data dummy dengan data klien lalu set false.");
  }

  const pending = [
    ...findPlaceholders(site, "site"),
    ...findPlaceholders(produkList, "produk"),
    ...findPlaceholders(produkNyata, "katalog"),
    ...findPlaceholders(interiorList, "interior"),
    ...findPlaceholders(proyekList, "proyek"),
    ...findPlaceholders(areaList, "area"),
    ...findPlaceholders(faqUmum, "faq"),
  ];
  const assetsKosong = Object.entries(assets)
    .filter(([, spec]) => (!("src" in spec) || !spec.src) && !("optional" in spec && spec.optional))
    .map(([id]) => `asset:${id}`);

  const publicDir = resolve(process.cwd(), "public");
  const fotoBermasalah = produkNyata.flatMap((p) =>
    p.warna.flatMap((w) => {
      const kosong = w.foto.length === 0 || w.foto.some((f) => f.trim().length === 0);
      const fotoKosong = kosong ? [`foto-kosong:${p.slug}/${w.slug}`] : [];
      const fotoHilang = w.foto
        .filter((f) => f.trim().length > 0)
        .filter((f) => {
          if (!f.startsWith("/")) return true;
          const filePath = resolve(publicDir, f.slice(1));
          const rel = relative(publicDir, filePath);
          const diPublic = rel !== ".." && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
          return !diPublic || !existsSync(filePath) || !statSync(filePath).isFile();
        })
        .map((f) => `foto-hilang:${f}`);
      return [...fotoKosong, ...fotoHilang];
    }),
  );

  const fotoInterior = interiorList.flatMap((item) =>
    (item.foto ?? []).flatMap((foto) => {
      if (foto.trim().length === 0) return [`foto-kosong-interior:${item.slug}`];
      if (!foto.startsWith("/")) return [`foto-hilang:${foto}`];
      const filePath = resolve(publicDir, foto.slice(1));
      const rel = relative(publicDir, filePath);
      const diPublic = rel !== ".." && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
      return !diPublic || !existsSync(filePath) || !statSync(filePath).isFile() ? [`foto-hilang:${foto}`] : [];
    }),
  );

  const all = [...pending, ...assetsKosong, ...fotoBermasalah, ...fotoInterior];
  if (all.length > 0) {
    throw new Error(
      `Build produksi dihentikan: ${all.length} item belum diisi. Contoh: ${all.slice(0, 8).join(", ")}`,
    );
  }
}
