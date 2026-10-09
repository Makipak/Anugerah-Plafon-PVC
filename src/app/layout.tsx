import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Providers } from "@/components/motion/providers";
import { assertProductionReady } from "@/lib/content-check";
import { isProduction } from "@/lib/placeholders";
import { shareImages } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-archivo" });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-public-sans" });

assertProductionReady();

const ogImages = shareImages();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Anugerah Plafon PVC: Plafon PVC Serang - Toko & Jasa Pasang",
    template: "%s | Anugerah Plafon PVC",
  },
  description:
    "Anugerah Plafon PVC, toko dan jasa pasang plafon PVC di Serang, Banten. Lihat motif, kisaran harga, dan contoh proyek, lalu tanya langsung lewat WhatsApp.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: { icon: "/assets/logo-02.svg" },
  openGraph: { type: "website", locale: site.locale, siteName: site.name, ...(ogImages ? { images: ogImages } : {}) },
  twitter: { card: ogImages ? "summary_large_image" : "summary", ...(ogImages ? { images: ogImages } : {}) },
  // Preview dan dev tidak boleh terindeks (docs/07 bagian 3); robots.ts memblokir di level crawler.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${archivo.variable} ${publicSans.variable}`}>
      <head>
        {/* Tanpa JavaScript, elemen animasi masuk tetap terlihat. */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-primary focus:px-4 focus:py-3 focus:text-white"
        >
          Lewati ke konten
        </a>
        <Providers>
          <Header />
          <main id="konten">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
