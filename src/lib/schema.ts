import { assets, type AssetId, type AssetSpec } from "@/content/assets";
import { site } from "@/lib/site";
import type { Produk, Faq } from "@/content/schemas";

const abs = (path: string) => `${site.url}${path}`;

// Hanya aset yang sudah diisi pemilik (punya src) yang boleh masuk schema; placeholder tidak.
const srcOf = (id: AssetId): string | undefined => {
  const spec: AssetSpec = assets[id];
  return spec.src ? abs(spec.src) : undefined;
};
const imagesOf = (ids: readonly AssetId[]): string[] =>
  ids.map(srcOf).filter((u): u is string => Boolean(u));

// Tiap halaman diurai Google sendiri-sendiri, jadi rujukan ke usaha memuat nama dan url,
// bukan hanya @id yang entitasnya ada di halaman lain.
const businessRef = { "@type": "HomeAndConstructionBusiness", "@id": abs("/#business"), name: site.name, url: site.url };

// Sinyal nama situs untuk Google (baris kecil di atas judul hasil pencarian).
// Dipasang di beranda saja; url harus persis URL beranda.
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    name: site.name,
    alternateName: ["Anugerah Plafon", "Anugerah Plafon PVC Serang"],
    url: abs("/"),
    inLanguage: "id-ID",
    publisher: { "@id": abs("/#business") },
  };
}

export function localBusinessLd() {
  const logo = srcOf("LOGO-01");
  const image = imagesOf(["TOKO-01", "HERO-01"]);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": abs("/#business"),
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.geo ? { geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng } } : {}),
    openingHours: site.hours.schema,
    areaServed: site.areaServed,
    ...(logo ? { logo } : {}),
    ...(image.length > 0 ? { image } : {}),
    ...(site.priceRange ? { priceRange: site.priceRange } : {}),
    ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
  };
}

export function productLd(p: Produk, path: string) {
  const pakaiHarga = typeof p.hargaMulai === "number" && typeof p.hargaSampai === "number";
  const image = imagesOf(p.varian.map((v) => v.assetId as AssetId));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nama,
    description: p.ringkasan,
    url: abs(path),
    ...(image.length > 0 ? { image } : {}),
    // Offer hanya jika harga benar-benar tampil di halaman.
    ...(pakaiHarga
      ? {
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "IDR",
            lowPrice: p.hargaMulai,
            highPrice: p.hargaSampai,
          },
        }
      : {}),
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: abs(path),
    provider: businessRef,
    areaServed: site.areaServed,
  };
}

// Hanya untuk FAQ yang juga tampil di halaman.
export function faqLd(items: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(trail: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function articleLd(post: { title: string; description: string; date: string; updated: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated,
    mainEntityOfPage: abs(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: site.name },
    publisher: businessRef,
  };
}
