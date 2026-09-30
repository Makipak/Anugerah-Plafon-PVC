import type { MetadataRoute } from "next";
import { areaList } from "@/content/area";
import { produkUtama } from "@/content/produk";
import { hargaDiperbaruiPada } from "@/content/harga";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

// lastModified hanya diisi bila ada tanggal konten yang nyata; halaman lain tidak mengarang tanggal.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const url = (p: string) => `${site.url}${p}`;
  return [
    { url: url("/") },
    { url: url("/produk") },
    { url: url("/produk/plafon-pvc"), lastModified: produkUtama.diperbaruiPada },
    { url: url("/layanan/pasang-plafon-pvc") },
    { url: url("/layanan/harga-dan-biaya-pasang"), lastModified: hargaDiperbaruiPada },
    { url: url("/galeri") },
    { url: url("/area-layanan") },
    ...areaList.map((a) => ({ url: url(`/area-layanan/${a.slug}`) })),
    { url: url("/blog") },
    ...posts.map((p) => ({ url: url(`/blog/${p.slug}`), lastModified: p.updated })),
    { url: url("/tentang-kami") },
    { url: url("/kontak") },
  ];
}
