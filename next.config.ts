import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Nilai default Next 16 diubah; atur eksplisit agar perilaku tidak bergeser saat upgrade.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    minimumCacheTTL: 14400,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Host lama (ejaan "anugerah") dialihkan permanen ke host kanonis supaya Google hanya
  // mengindeks satu host dan membaca WebSite schema yang url-nya cocok dengan host halaman.
  // Berkas verifikasi Search Console tetap dilayani di host lama agar verifikasi tidak lepas.
  async redirects() {
    const hostLama = [{ type: "host" as const, value: "anugerahplafonpvc.vercel.app" }];
    const hostBaru = "https://anugrahplafonpvc.vercel.app";
    return [
      { source: "/", has: hostLama, destination: `${hostBaru}/`, permanent: true },
      {
        source: "/:path((?!googlee6e194d0a9e8d56b\\.html$).+)",
        has: hostLama,
        destination: `${hostBaru}/:path`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
