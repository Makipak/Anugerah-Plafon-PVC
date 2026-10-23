import { existsSync, statSync } from "node:fs";
import { isAbsolute, relative, resolve, sep } from "node:path";
import { DATA_DUMMY, findPlaceholders, isProduction } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { interiorList } from "@/content/interior";
import { kategoriData, merekData, produkNyataLengkap } from "@/content/katalog";
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
    ...findPlaceholders(produkNyataLengkap, "katalog"),
    ...findPlaceholders(interiorList, "interior"),
    ...findPlaceholders(proyekList, "proyek"),
    ...findPlaceholders(areaList, "area"),
    ...findPlaceholders(faqUmum, "faq"),
  ];
  const assetsKosong = Object.entries(assets)
    .filter(([, spec]) => (!("src" in spec) || !spec.src) && !("optional" in spec && spec.optional))
    .map(([id]) => `asset:${id}`);

  const publicDir = resolve(process.cwd(), "public");
  const fotoBermasalah = produkNyataLengkap.flatMap((p) =>
    p.warna.flatMap((w) => {
      const tidakAdaFoto = w.foto.length === 0;
      const fotoKosong =
        (tidakAdaFoto && !w.fotoOpsional) || w.foto.some((f) => f.trim().length === 0)
          ? [`foto-kosong:${p.slug}/${w.slug}`]
          : [];
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

  const thumbnailHilang = [...kategoriData, ...merekData].flatMap(({ nama, thumbnail }) => {
    if (!thumbnail) return [];
    const filePath = resolve(publicDir, thumbnail.slice(1));
    const rel = relative(publicDir, filePath);
    const diPublic = thumbnail.startsWith("/") && rel !== ".." && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
    return !diPublic || !existsSync(filePath) || !statSync(filePath).isFile()
      ? [`thumbnail-hilang:${nama}:${thumbnail}`]
      : [];
  });

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

  const all = [...pending, ...assetsKosong, ...fotoBermasalah, ...thumbnailHilang, ...fotoInterior];
  if (all.length > 0) {
    throw new Error(
      `Build produksi dihentikan: ${all.length} item belum diisi. Contoh: ${all.slice(0, 8).join(", ")}`,
    );
  }
}
