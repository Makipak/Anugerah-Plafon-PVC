import type { MetadataRoute } from "next";
import { isProduction } from "@/lib/placeholders";
import { site } from "@/lib/site";

// Preview dan domain *.vercel.app tidak boleh terindeks; hanya produksi yang terbuka.
export default function robots(): MetadataRoute.Robots {
  return isProduction
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${site.url}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
