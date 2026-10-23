// Tipe dan fungsi murni untuk tampilan katalog. Aman dipakai di komponen klien
// (tidak mengimpor data), jadi data katalog tidak ikut terkirim ke browser dua kali.
export type FotoView = { src: string; alt: string };
export type WarnaView = { slug: string; nama: string; hex?: string; foto: FotoView[] };
export type ProdukView = {
  slug: string;
  nama: string;
  namaLengkap: string; // merek + seri + nama
  kode?: string;
  kategori: { slug: string; nama: string };
  motif?: string;
  merek?: { slug: string; nama: string };
  seri?: { slug: string; nama: string };
  ukuran?: string;
  tebal?: string;
  warna: WarnaView[];
};
export type KategoriView = { slug: string; nama: string; ringkasan?: string; thumbnail?: string; jumlah: number };
export type MerekView = {
  slug: string;
  nama: string;
  ringkasan?: string;
  thumbnail?: string;
  seri: { slug: string; nama: string }[];
  jumlah: number;
};

export function pesanProduk(p: ProdukView, warna?: WarnaView): string {
  const w = warna && p.warna.length > 1 ? ` warna ${warna.nama}` : "";
  return `Halo, saya tertarik dengan produk ${p.namaLengkap} (${p.kategori.nama})${w}. Saya ingin menanyakan ketersediaan dan spesifikasinya.`;
}

export function labelAtas(p: ProdukView): string | undefined {
  if (p.merek) return p.seri ? `${p.merek.nama} | ${p.seri.nama}` : p.merek.nama;
  return p.kode ?? p.kategori.nama;
}

export function keteranganKartu(p: ProdukView): string {
  const bagian: string[] = [];
  if (p.warna.length > 1) bagian.push(`${p.warna.length} warna`);
  if (p.ukuran) bagian.push(p.ukuran);
  if (p.tebal) bagian.push(p.tebal);
  return bagian.join(" | ");
}
