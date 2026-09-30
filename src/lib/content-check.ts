import { DATA_DUMMY, findPlaceholders, isProduction } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { produkList } from "@/content/produk";
import { proyekList } from "@/content/proyek";
import { areaList } from "@/content/area";
import { faqUmum } from "@/content/faq";
import { hargaMaterial, hargaJasa } from "@/content/harga";
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
    ...findPlaceholders(proyekList, "proyek"),
    ...findPlaceholders(areaList, "area"),
    ...findPlaceholders(faqUmum, "faq"),
    ...findPlaceholders(hargaMaterial, "hargaMaterial"),
    ...findPlaceholders(hargaJasa, "hargaJasa"),
  ];
  const assetsKosong = Object.entries(assets)
    .filter(([, spec]) => !("src" in spec) || !spec.src)
    .map(([id]) => `asset:${id}`);

  const all = [...pending, ...assetsKosong];
  if (all.length > 0) {
    throw new Error(
      `Build produksi dihentikan: ${all.length} item belum diisi. Contoh: ${all.slice(0, 8).join(", ")}`,
    );
  }
}
