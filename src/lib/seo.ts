import type { Metadata } from "next";
import { assets, type AssetId, type AssetSpec } from "@/content/assets";
import { site } from "@/lib/site";

type Input = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Sampul khusus halaman; jatuh ke OG-DEFAULT bila aset sampul belum punya src. */
  imageAssetId?: AssetId;
  /** True untuk judul yang sudah lengkap sendiri (artikel): template " | brand" dilewati. */
  omitBrand?: boolean;
};

// Gambar berbagi tautan hanya dipasang jika pemilik sudah mengisi src aset (AGENTS.md 6b).
// Tanpa src, tag og:image dan twitter:image tidak dibuat daripada menunjuk ke berkas yang tidak ada.
// Lebar dan tinggi tidak diisi karena ukuran asli berkas belum diketahui dari manifest.
export function shareImages(assetId?: AssetId) {
  const candidates: AssetId[] = assetId ? [assetId, "OG-DEFAULT"] : ["OG-DEFAULT"];
  for (const id of candidates) {
    const spec: AssetSpec = assets[id];
    if (!spec.src) continue;
    if (!spec.alt) throw new Error(`Aset ${id} punya src tetapi alt kosong`);
    return [{ url: spec.src, alt: spec.alt }];
  }
  return undefined;
}

// Title memakai template "%s | Anugerah Plafon PVC" dari layout, jadi jangan menambah brand di sini.
// Batas praktis: judul halaman maksimal sekitar 38 karakter agar total dengan template tidak melewati ~60.
// Next.js menggabungkan metadata secara dangkal, jadi openGraph dan twitter harus lengkap di sini.
export function buildMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  imageAssetId,
  omitBrand = false,
}: Input): Metadata {
  const images = shareImages(imageAssetId);
  return {
    title: omitBrand ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url: path,
      ...(images ? { images } : {}),
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      ...(images ? { images } : {}),
    },
  };
}
