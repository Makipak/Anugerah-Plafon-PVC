import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan | Plafon PVC Serang",
  description: "Halaman yang Anda cari tidak ditemukan. Periksa alamat atau lanjutkan ke beranda dan produk plafon PVC di Serang.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <p className="text-label mb-3 text-ink">Galat 404</p>
      <h1 className="text-display max-w-2xl">Halaman yang Anda cari tidak ditemukan</h1>
      <p className="mt-5 max-w-xl text-ink-muted">Periksa kembali alamatnya atau lanjutkan ke beranda dan lihat produk plafon PVC kami.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Buka beranda</ButtonLink>
        <ButtonLink href="/produk" variant="secondary">Lihat produk</ButtonLink>
      </div>
    </div>
  );
}
