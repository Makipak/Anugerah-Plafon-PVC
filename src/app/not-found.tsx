import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = { title: "Halaman tidak ditemukan", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="container-page py-24">
      <p className="text-label mb-3 text-accent">Galat 404</p>
      <h1 className="text-display max-w-2xl">Halaman yang Anda cari tidak ada</h1>
      <p className="mt-5 max-w-xl text-ink-muted">Alamatnya mungkin salah atau halamannya sudah dipindah. Mulai dari beranda atau lihat produk kami.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Ke beranda</ButtonLink>
        <ButtonLink href="/produk" variant="secondary">Lihat produk</ButtonLink>
      </div>
    </div>
  );
}
