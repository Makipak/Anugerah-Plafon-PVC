import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Preview dan domain *.vercel.app tidak boleh terindeks; hanya produksi yang terbuka.
export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === "production";
  return isProd
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
