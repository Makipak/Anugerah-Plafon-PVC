# 05. Spesifikasi Teknis SEO (Next.js App Router)

Contoh kode ditulis untuk Next.js 16 (versi terbaru saat diverifikasi: 16.3.8 pada 1 Oktober 2026), App Router, TypeScript. `params` dan `searchParams` bertipe `Promise`; akses sinkron sudah dihapus. Aturan lengkap dan daftar perubahan ada di [../AGENTS.md](../AGENTS.md). Contoh di bawah belum dijalankan; verifikasi saat implementasi.

## 1. Konfigurasi situs terpusat

`src/lib/site.ts`

```ts
export const site = {
  name: "Anugerah Plafon PVC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com", // [ISI] domain final
  locale: "id_ID",
  phone: "[ISI]",            // format +62...
  whatsapp: "62[ISI]",       // tanpa + dan tanpa spasi
  email: "[ISI]",
  address: {
    street: "[ISI]",
    locality: "Serang",
    region: "Banten",
    postalCode: "[ISI]",
    country: "ID",
  },
  geo: { lat: 0, lng: 0 },   // [ISI] dari Google Maps
  hours: "Mo-Sa 08:00-17:00", // [ISI] sesuaikan
  sameAs: [] as string[],    // [ISI] URL IG/FB/GBP/TikTok
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
```

## 2. Metadata global

`src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Plafon PVC Serang Banten - Toko & Jasa Pasang | Anugerah Plafon PVC",
    template: "%s | Anugerah Plafon PVC",
  },
  description: "[ISI 140-160 karakter: produk, wilayah, CTA]",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: site.locale, siteName: site.name },
  robots: { index: true, follow: true },
};
```

Di `<html>` pakai `lang="id"`.

## 3. Metadata per halaman

```tsx
// src/app/layanan/pasang-plafon-pvc/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pasang Plafon PVC Serang - Rapi & Bergaransi",
  description: "[ISI: jasa, wilayah, proses, CTA]",
  alternates: { canonical: "/layanan/pasang-plafon-pvc" },
};
```

Halaman dinamis (blog, area layanan):

```tsx
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.date, modifiedTime: post.updated },
  };
}
export const dynamicParams = false; // hanya slug yang ada
export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}
```

## 4. Schema JSON-LD

Komponen pembantu:

```tsx
// src/components/JsonLd.tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```

### LocalBusiness (Home dan Kontak)

```ts
export const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  image: `${site.url}/og/home.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHours: site.hours,
  areaServed: ["Serang", "Cilegon"], // [ISI] hanya wilayah yang benar-benar dilayani
  sameAs: site.sameAs,
};
```

Catatan: pilih tipe yang paling sesuai kegiatan usaha (toko material vs kontraktor). Jangan menambahkan `aggregateRating` kecuali ada review nyata yang ditampilkan di halaman.

### Product (halaman produk)

```ts
{
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Plafon PVC Motif Kayu",
  description: "[ISI]",
  image: ["[ISI URL gambar]"],
  brand: { "@type": "Brand", name: "[ISI]" },
  offers: {
    "@type": "Offer",
    priceCurrency: "IDR",
    price: "[ISI angka]",
    availability: "https://schema.org/InStock",
    url: "[ISI URL halaman]",
  },
}
```

Hanya pakai `Offer` jika harga benar-benar tampil di halaman. Kalau hanya rentang, pakai `AggregateOffer` dengan `lowPrice` dan `highPrice`.

### FAQPage, BreadcrumbList, Article

- `FAQPage`: hanya untuk FAQ yang juga terlihat di halaman. Catatan: Google sudah membatasi tampilan rich result FAQ pada banyak situs, jadi anggap ini manfaat tambahan, bukan jaminan.
- `BreadcrumbList`: semua halaman selain Home.
- `Article`: blog (`headline`, `datePublished`, `dateModified`, `author`, `image`).

Validasi semua schema di Rich Results Test dan Schema Markup Validator sebelum launch.

## 5. Sitemap dan robots

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/produk", "/layanan/pasang-plafon-pvc", "/galeri", "/tentang-kami", "/kontak", "/blog"];
  const posts = await getAllPosts();
  return [
    ...staticPaths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.updated ?? p.date) })),
  ];
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  return isProd
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } }; // preview/dev tidak diindeks
}
```

Gunakan `lastModified` yang jujur (tanggal update konten), jangan selalu `new Date()` untuk halaman yang tidak berubah. Ganti dengan tanggal nyata bila tersedia.

## 6. Performa (Core Web Vitals)

| Area | Aturan |
|---|---|
| Gambar | `next/image`, format WebP/AVIF, `sizes` benar, `priority` hanya untuk gambar LCP |
| Font | `next/font`, maksimal 2 keluarga font |
| JS | Utamakan Server Components; `"use client"` hanya untuk interaksi |
| CLS | Tentukan `width/height` atau `aspect-ratio` semua media |
| Script pihak ketiga | Muat dengan `next/script` strategi `afterInteractive` atau `lazyOnload` |
| Peta | Embed Google Maps dengan `loading="lazy"` atau klik-untuk-muat |

Target awal: LCP < 2,5 s, INP < 200 ms, CLS < 0,1 (ukur dengan PageSpeed Insights pada data lab lalu data lapangan setelah ada traffic).

## 7. Checklist on-page tiap halaman

- [ ] Title unik dan memuat keyword utama
- [ ] Meta description unik
- [ ] Satu H1
- [ ] Canonical benar
- [ ] Alt text semua gambar informatif
- [ ] Breadcrumb dan schema sesuai
- [ ] Minimal 2 internal link relevan
- [ ] CTA WhatsApp terlihat tanpa scroll di mobile
- [ ] NAP konsisten dengan GBP

## 8. Checklist sebelum launch

- [ ] `VERCEL_ENV=production` hanya pada domain final
- [ ] Sitemap dapat diakses dan hanya berisi URL 200
- [ ] Tidak ada `noindex` tersisa di produksi
- [ ] Redirect 301 dari `www` ke non-`www` (atau sebaliknya)
- [ ] 404 page kustom dengan tautan ke halaman utama
- [ ] Open Graph image untuk Home dan artikel
- [ ] Favicon dan manifest
- [ ] Uji mobile dan PageSpeed
- [ ] Rich Results Test lolos
