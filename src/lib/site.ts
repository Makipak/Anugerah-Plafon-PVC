// Sumber tunggal data usaha. Semua nilai bertanda DUMMY adalah data contoh; ganti dengan data klien (docs/04).
// Build produksi gagal selama DATA_DUMMY true (lihat lib/placeholders.ts).
export const site = {
  name: "Anugerah Plavon PVC",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "id_ID",
  tagline: "Toko dan jasa pasang plafon PVC di Serang, Banten",
  phone: "+628120000000", // DUMMY, format +62...
  whatsapp: "628120000000", // DUMMY, 62..., tanpa + dan tanpa spasi
  email: "halo@example.com", // DUMMY
  address: {
    street: "Jl. Contoh Raya No. 12, Kec. Cipocok Jaya", // DUMMY
    locality: "Serang",
    region: "Banten",
    postalCode: "42121", // DUMMY
    country: "ID",
  },
  geo: { lat: -6.1201, lng: 106.1503 }, // DUMMY, titik kasar Serang
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Serang%2C+Banten", // DUMMY
  mapsEmbedUrl: "", // DUMMY, isi URL embed Google Maps; kosong = kotak placeholder
  hours: {
    text: "Senin - Sabtu, 08.00 - 17.00 WIB", // DUMMY
    schema: "Mo-Sa 08:00-17:00", // DUMMY
  },
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
  umum: "Halo Anugerah Plavon PVC, saya ingin tanya plafon PVC.",
  produk: (motif: string) =>
    `Halo, saya tertarik dengan plafon PVC motif ${motif}. Boleh tahu harga dan ketersediaannya?`,
  jasa: "Halo, saya ingin minta estimasi biaya pasang plafon PVC di [lokasi], luas sekitar [m2].",
  harga: "Halo, saya ingin minta penawaran harga plafon PVC dan biaya pasang di [lokasi].",
} as const;
