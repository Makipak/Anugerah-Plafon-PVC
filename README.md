# Anugerah Plafon PVC

Website company profile toko dan jasa pasang plafon PVC di Serang, Banten. Next.js 16 (App Router), Tailwind CSS 4, statis (SSG), tanpa backend. Perencanaan lengkap ada di [docs/](docs/README.md); aturan kode di [AGENTS.md](AGENTS.md); sistem desain di [DESIGN.md](DESIGN.md).

## Menjalankan

```bash
nvm use            # Node 22 (lihat .nvmrc)
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

| Perintah | Fungsi |
|---|---|
| `npm run typecheck` | `next typegen` lalu `tsc --noEmit` |
| `npm run lint` | ESLint flat config |
| `npm run build` | Build produksi |

Sebelum commit: jalankan checklist di AGENTS.md bagian 8.

## Variabel lingkungan

| Variabel | Wajib | Keterangan |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Ya di produksi | URL kanonik, tanpa slash akhir |
| `NEXT_PUBLIC_GA_ID` | Tidak | ID GA4; event `whatsapp_click`, `phone_click`, `map_click` |
| `SITE_STAGING` | Tidak | `1` = perilaku preview di deploy Production (lihat Deploy) |

## Mengisi data klien

Saat ini semua harga, kontak, motif, proyek, dan teks adalah **data dummy**, ditandai komentar `DUMMY` di kode (cari dengan `grep -rn DUMMY src`). Ganti dengan data asli klien:

| Berkas | Isi |
|---|---|
| `src/lib/site.ts` | Nama, alamat, telepon, WhatsApp, jam, peta, sosmed |
| `src/content/produk.ts`, `harga.ts` | Motif, ukuran, ketebalan, harga |
| `src/content/proyek.ts`, `area.ts` | Proyek nyata dan wilayah yang benar-benar dilayani |
| `src/content/testimoni.ts` | Testimoni dengan izin; kosong = bagian tidak tampil |
| `src/app/tentang-kami/page.tsx`, `layanan/pasang-plafon-pvc/page.tsx` | Teks usaha dan FAQ jasa |
| `src/content/blog/*.mdx` | Contoh angka di 3 artikel awal |
| `src/content/assets.ts` | `src` dan `alt` tiap aset setelah berkas ada di `public/assets/` |

Setelah semua diganti, set `DATA_DUMMY = false` di `src/lib/placeholders.ts`. **Build dengan `VERCEL_ENV=production` sengaja gagal** selama `DATA_DUMMY` true, ada `[ISI]`, atau ada aset tanpa `src`/`alt`. Di dev dan preview, aset kosong tampil sebagai placeholder berlabel dan meta robots `noindex`.

## Deploy

**Deploy sementara dengan data dummy:** di Vercel (Settings, Environment Variables) set `SITE_STAGING=1` dan `NEXT_PUBLIC_SITE_URL` ke URL `*.vercel.app`. Situs akan `noindex`, robots `Disallow: /`, dan gerbang data tidak aktif, walau deploy berasal dari `main`. **Hapus `SITE_STAGING` saat rilis sungguhan**; setelah itu build produksi menuntut `DATA_DUMMY = false` dan semua data serta aset terisi.


1. Import repo di Vercel, set `NEXT_PUBLIC_SITE_URL`.
2. Preview otomatis `noindex`. Produksi hanya lolos build bila semua `[ISI]` terisi.
3. Hobby dibatasi non-komersial; pakai paket yang mengizinkan penggunaan komersial sebelum tayang. Detail: [docs/07](docs/07-deploy-vercel-dan-domain.md).

## Belum dikerjakan

- Aset visual (dibuat pemilik proyek, docs/16) dan logo; warna primer/aksen masih sementara.
- Penggeser sebelum/sesudah dan video (butuh foto proyek).
- Gambar OG dan favicon (menunggu OG-DEFAULT, LOGO-02).
- Uji E2E Playwright dan Lighthouse (docs/13).
- Konfirmasi klien atas klaim umum bahan (tahan rayap, mudah dilap) dan tahapan kerja di `steps.tsx`.
