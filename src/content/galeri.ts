import type { AssetId } from "./assets";
import { galeriAssetId, galeriFotoKategori, galeriFotoRatio } from "./galeri-aset";

export type FotoGaleri = {
  id: string;
  assetId: AssetId;
  alt: string;
  ratio: string;
};

export type KategoriGaleri = {
  slug: string;
  nama: string;
  foto: readonly FotoGaleri[];
};

export const kategoriGaleri: readonly KategoriGaleri[] = [
  ...galeriFotoKategori.map((kategori) => ({
    slug: kategori.slug,
    nama: kategori.nama,
    foto: kategori.files.map((_, index) => ({
      id: `${kategori.slug}-${index + 1}`,
      assetId: galeriAssetId(kategori.slug, index),
      alt: `${kategori.nama}, foto ${index + 1}`,
      ratio: galeriFotoRatio(kategori.slug, index),
    })),
  })),
];
