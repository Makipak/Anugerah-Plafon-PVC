import type { Produk, Proyek } from "@/content/schemas";

// Alt text dibentuk dari data konten, bukan ditulis ulang di tiap komponen,
// sehingga tetap akurat saat data contoh diganti data klien.
export function altProyek(p: Proyek): string {
  return `Plafon ${p.bahan} di ${p.ruang.toLowerCase()}, ${p.lokasi.kecamatan}, ${p.lokasi.kota}`;
}

export function altVarian(v: Produk["varian"][number]): string {
  return `Plafon PVC ${v.nama}, motif ${v.motif.toLowerCase()}`;
}
