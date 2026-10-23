import { kategoriData, merekData, produkContoh, produkNyataLengkap, seriData } from "@/content/katalog";
import type { ProdukKatalog } from "@/content/schemas";
import { isProduction } from "@/lib/placeholders";
import type { KategoriView, MerekView, ProdukView, WarnaView } from "@/lib/katalog-view";

// Akses data katalog untuk komponen server. Produk contoh tidak pernah tampil di produksi.
const aktif: readonly ProdukKatalog[] = isProduction ? produkNyataLengkap : [...produkNyataLengkap, ...produkContoh];

// Alt text dibentuk dari data, bukan ditulis ulang per foto, sehingga tetap akurat saat data diganti.
function altFoto(kategori: string, namaLengkap: string, motif: string | undefined, banyakWarna: boolean, warna: string, urutan: number, jumlah: number): string {
  const m = motif ? `, motif ${motif.toLowerCase()}` : "";
  const w = banyakWarna ? `, warna ${warna}` : "";
  const n = jumlah > 1 ? `, foto ${urutan + 1}` : "";
  return `${kategori} ${namaLengkap}${m}${w}${n}`;
}

function toView(p: ProdukKatalog): ProdukView {
  const kategori = kategoriData.find((k) => k.slug === p.kategori);
  if (!kategori) throw new Error(`Kategori ${p.kategori} tidak ada`);
  const merek = merekData.find((m) => m.slug === p.merek);
  const seri = seriData.find((s) => s.merek === p.merek && s.slug === p.seri);
  const namaLengkap = [merek?.nama, seri?.nama, p.nama].filter(Boolean).join(" ");
  const warna: WarnaView[] = p.warna.map((w) => ({
    slug: w.slug,
    nama: w.nama,
    ...(w.hex ? { hex: w.hex } : {}),
    foto: w.foto.map((src, i) => ({
      src,
      alt: altFoto(kategori.nama, namaLengkap, p.motif, p.warna.length > 1, w.nama, i, w.foto.length),
    })),
  }));
  const ukuran = p.ukuran ?? seri?.ukuran;
  const tebal = p.tebal ?? seri?.tebal;
  return {
    slug: p.slug,
    nama: p.nama,
    namaLengkap,
    ...(p.kode ? { kode: p.kode } : {}),
    kategori: { slug: kategori.slug, nama: kategori.nama },
    ...(p.motif ? { motif: p.motif } : {}),
    ...(merek ? { merek: { slug: merek.slug, nama: merek.nama } } : {}),
    ...(seri ? { seri: { slug: seri.slug, nama: seri.nama } } : {}),
    ...(ukuran ? { ukuran } : {}),
    ...(tebal ? { tebal } : {}),
    warna,
  };
}

export function semuaProduk(kategori?: string): ProdukView[] {
  return aktif.filter((p) => !kategori || p.kategori === kategori).map(toView);
}

export function produkBySlug(slug: string): ProdukView | undefined {
  const p = aktif.find((x) => x.slug === slug);
  return p ? toView(p) : undefined;
}

function toKategoriView(slug: string, nama: string, ringkasan: string | undefined, thumbnail: string | undefined): KategoriView {
  return {
    slug,
    nama,
    ...(ringkasan ? { ringkasan } : {}),
    ...(thumbnail ? { thumbnail } : {}),
    jumlah: aktif.filter((p) => p.kategori === slug).length,
  };
}

export function semuaKategori(): KategoriView[] {
  return kategoriData.map((k) => toKategoriView(k.slug, k.nama, k.ringkasan, k.thumbnail));
}

export function kategoriAktif(): KategoriView[] {
  return semuaKategori().filter((k) => k.jumlah > 0);
}

export function kategoriBySlug(slug: string): KategoriView | undefined {
  return semuaKategori().find((k) => k.slug === slug);
}

// Hanya merek (dan seri) yang punya produk (di kategori tertentu bila diisi); yang kosong tidak ditampilkan.
export function merekAktif(kategori?: string): MerekView[] {
  return merekData
    .map((m) => {
      const produk = aktif.filter((p) => p.merek === m.slug && (!kategori || p.kategori === kategori));
      const seri = seriData
        .filter((s) => s.merek === m.slug && produk.some((p) => p.seri === s.slug))
        .map((s) => ({ slug: s.slug, nama: s.nama }));
      return {
        slug: m.slug,
        nama: m.nama,
        ...(m.ringkasan ? { ringkasan: m.ringkasan } : {}),
        ...(m.thumbnail ? { thumbnail: m.thumbnail } : {}),
        seri,
        jumlah: produk.length,
      };
    })
    .filter((m) => m.jumlah > 0);
}

// Produk lain dari kategori yang sama, lalu merek, lalu seri yang sama; sisanya mengikuti urutan data.
export function produkTerkait(p: ProdukView, batas = 4): ProdukView[] {
  const lain = semuaProduk().filter((x) => x.slug !== p.slug);
  const skor = (x: ProdukView) =>
    (x.kategori.slug === p.kategori.slug ? 4 : 0) +
    (p.merek && x.merek?.slug === p.merek.slug ? 2 : 0) +
    (p.seri && x.seri?.slug === p.seri.slug ? 1 : 0);
  return lain
    .map((x, i) => ({ x, i, s: skor(x) }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, batas)
    .map((r) => r.x);
}

export function fotoUtama(p: ProdukView): { src: string; alt: string } | undefined {
  for (const w of p.warna) {
    const f = w.foto[0];
    if (f) return f;
  }
  return undefined;
}
