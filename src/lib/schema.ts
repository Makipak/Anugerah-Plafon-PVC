import { site } from "@/lib/site";
import type { Produk, Faq } from "@/content/schemas";

const abs = (path: string) => `${site.url}${path}`;

export function localBusinessLd() {
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
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: site.hours.schema,
    areaServed: site.areaServed,
    sameAs: site.sameAs,
  };
}

export function productLd(p: Produk, path: string) {
  const pakaiHarga = typeof p.hargaMulai === "number" && typeof p.hargaSampai === "number";
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nama,
    description: p.ringkasan,
    url: abs(path),
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
    provider: { "@id": abs("/#business") },
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
    publisher: { "@id": abs("/#business") },
  };
}
