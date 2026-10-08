// Sumber tunggal data usaha (docs/04). Email dan geo opsional: baru ditampilkan atau ditulis ke schema setelah diisi.
export const site = {
  name: "Anugerah Plafon PVC",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "id_ID",
  tagline: "Toko dan jasa pasang plafon PVC di Serang, Banten",
  phone: "+6287887980777",
  phoneDisplay: "087887980777",
  whatsapp: "6287887980777",
  email: undefined as string | undefined, // Tampil di halaman Kontak hanya jika diisi
  address: {
    street: "Jl. Ayip Usman, Unyur",
    locality: "Kec. Serang, Kota Serang",
    region: "Banten",
    postalCode: "42111",
    country: "ID",
  },
  
  geo: undefined as { lat: number; lng: number } | undefined,
  mapsUrl: "https://maps.app.goo.gl/WbiuLPGSYRZpXuNr8",

  // Ganti dengan src dari Google Maps > Bagikan > Sematkan peta (hanya isi src, tanpa tag iframe).
  // Sementara memakai pencarian berdasarkan nama usaha; hasilnya bisa meleset dari titik toko.
  mapsEmbedUrl: "https://www.google.com/maps?q=Anugerah+Plafon+PVC+Serang+Banten&output=embed",
  hours: {
    text: "Senin–Sabtu, 08.00–17.00",
    schema: "Mo-Sa 08:00-17:00",
  },
  // Opsional; isi dari harga asli klien, mis. "Rp50.000 - Rp100.000". Kosong berarti tidak ditulis ke schema.
  priceRange: undefined as string | undefined,
  sameAs: [] as string[],
  // Hanya wilayah yang benar-benar dilayani (ADR-4).
  areaServed: ["Serang"],
} as const;

export const navItems = [
  { href: "/produk", label: "Produk" },
  { href: "/layanan/pasang-plafon-pvc", label: "Jasa Pasang" },
  { href: "/layanan/harga-dan-biaya-pasang", label: "Harga" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/tentang-kami", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
] as const;

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const waMessages = {
  umum: "Halo Anugerah Plafon PVC, saya ingin tanya plafon PVC.",
  produk: (motif: string) =>
    `Halo, saya tertarik dengan plafon PVC motif ${motif}. Boleh tahu harga dan ketersediaannya?`,
  jasa: "Halo, saya ingin minta estimasi biaya pasang plafon PVC di [lokasi], luas sekitar [m2].",
  harga: "Halo, saya ingin minta penawaran harga plafon PVC dan biaya pasang di [lokasi].",
} as const;