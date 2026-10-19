// Sumber tunggal data usaha (docs/04). Email dan geo opsional: baru ditampilkan atau ditulis ke schema setelah diisi.
export const site = {
  name: "Anugrah Plafon PVC",
  // Nama situs yang diharapkan tampil di hasil Google (WebSite schema, og:site_name, application-name).
  // name tetap nama usaha untuk schema LocalBusiness.
  namaSitus: "Anugrah Plafon PVC Serang",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "id_ID",
  tagline: "Toko dan jasa pasang plafon PVC di Serang, Banten.",
  phone: "+6287887980777",
  phoneDisplay: "087887980777",
  whatsapp: "6287887980777",
  email: undefined as string | undefined, // Tampil di halaman Kontak hanya jika diisi
  address: {
    street: "Jl. Ayip Usman No. 11, Unyur",
    landmark: "Seberang gerbang Perumahan Bumi Agung Permai 1 (BAP 1)",
    locality: "Kec. Serang, Kota Serang",
    region: "Banten",
    postalCode: "42111",
    country: "ID",
  },
  
  // Titik pin listing Google Maps (dari mapsUrl).
  geo: { lat: -6.1034139, lng: 106.1647794 } as { lat: number; lng: number } | undefined,
  mapsUrl: "https://maps.app.goo.gl/WbiuLPGSYRZpXuNr8",

  // Embed memakai koordinat pin listing agar tepat di titik toko. Bisa diganti dengan src dari
  // Google Maps > Bagikan > Sematkan peta (hanya isi src, tanpa tag iframe).
  mapsEmbedUrl: "https://www.google.com/maps?q=-6.1034139,106.1647794&output=embed",
  hours: {
    text: "Senin–Sabtu, 08.00–17.00",
    schema: "Mo-Sa 08:00-17:00",
  },
  // Profil yang dikonfirmasi pemilik: Instagram, Facebook, lalu TikTok.
  sameAs: [
    "https://www.instagram.com/anugrah_plafon_pvc/",
    "https://www.facebook.com/anugrah.plafon.pvc.serang",
    "https://www.tiktok.com/@anugrahplafonpvc",
  ] as string[],
  // Hanya wilayah yang benar-benar dilayani (ADR-4). Cilegon, Merak, dan Ciruas tercantum di bio Instagram pemilik.
  areaServed: ["Serang", "Cilegon", "Merak", "Ciruas"],
} as const;

export const navItems = [
  { href: "/produk", label: "Produk" },
  { href: "/layanan/pasang-plafon-pvc", label: "Jasa Pasang" },
  { href: "/layanan/interior-design", label: "Interior" },
  { href: "/galeri", label: "Galeri" },
  { href: "/blog", label: "Blog" },
  { href: "/tentang-kami", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
] as const;

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const waMessages = {
  umum: "Halo Anugrah Plafon PVC, saya ingin berkonsultasi tentang plafon PVC.",
  produk: (motif: string) =>
    `Halo, saya tertarik dengan plafon PVC motif ${motif}. Saya ingin menanyakan ketersediaan dan spesifikasinya.`,
  produkUmum: "Halo Anugrah Plafon PVC, saya tertarik dengan plafon PVC. Saya ingin menanyakan pilihan produk, motif, dan ketersediaannya.",
  interior: "Halo Anugrah Plafon PVC, saya ingin berkonsultasi tentang interior design. Saya ingin menanyakan jenis pekerjaan, bahan, dan jadwal survei.",
  jasa: "Halo, saya ingin berkonsultasi tentang pemasangan plafon PVC di [lokasi], luas sekitar [m2].",
  penawaran: "Halo, saya ingin berkonsultasi tentang plafon PVC dan pemasangannya di [lokasi].",
} as const;