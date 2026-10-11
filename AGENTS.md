# AGENTS.md: Aturan Kode Proyek Anugrah Plafon PVC

File ini dibaca oleh developer dan agent AI sebelum menulis kode. Aturan di sini mengikat.

## 1. Aturan utama

1. **Jangan menebak.** Setiap API, opsi konfigurasi, nomor versi, atau perintah harus diverifikasi dari sumber resmi lewat browser (atau registry npm) sebelum dipakai. Jika sumber tidak bisa dibuka, katakan itu dan jangan mengarang.
2. **Pakai praktik terbaru (2026).** Tidak boleh memakai API yang sudah deprecated atau dihapus. Sebelum menulis kode untuk sebuah fitur, baca halaman dokumentasi fitur itu untuk versi yang terpasang.
3. **Tanpa emoji** di kode, komentar, commit message, dokumentasi, teks UI, dan alt text.
4. **Dokumentasi singkat namun jelas.** Tulis hanya yang dibutuhkan pembaca berikutnya. Jelaskan alasan (mengapa), bukan mengulang isi kode (apa).
5. **Jangan menambah dependensi tanpa alasan.** Cek dulu apakah Next.js, React, atau CSS sudah menyediakannya.

## 2. Cara memverifikasi (wajib)

| Kebutuhan | Sumber | Cara |
|---|---|---|
| Versi paket terbaru | Registry npm | `npm view <paket> version` atau buka `https://registry.npmjs.org/<paket>/latest` di browser |
| Syarat Node/peer dependency | Registry npm | Baca `engines` dan `peerDependencies` dari `.../latest` |
| API dan konfigurasi Next.js | nextjs.org/docs | Baca halaman versi yang terpasang; untuk upgrade baca panduan Version 16 |
| Tailwind | tailwindcss.com/docs | Baca panduan instalasi Next.js dan halaman Theme |
| Hosting dan batasan | vercel.com/docs | Baca halaman yang relevan |
| Komponen UI | Halaman komponen di 21st.dev atau shadcn | Periksa kode, lisensi, dan dependensinya |

Catat tanggal verifikasi saat memperbarui bagian 3.

## 3. Versi referensi

Diverifikasi dari registry npm dan dokumentasi resmi pada **1 Oktober 2026**. Verifikasi ulang sebelum scaffold dan sebelum tiap upgrade besar; angka ini akan menjadi usang.

| Paket | Versi | Catatan |
|---|---|---|
| next | 16.3.8 | Node minimum 20.9.0 |
| react, react-dom | 19.3.0 | Sesuai peer dependency Next |
| tailwindcss, @tailwindcss/postcss | 4.3.3 | Konfigurasi lewat CSS |
| typescript | 6.0.3 (dipin) | 7.0.2 terbaru di npm. `tsc` dan `next build` lulus dengan 7.0.2, tetapi `typescript-eslint` (dalam eslint-config-next) menolak TS 7 ("does not support TS 7.0"). Dipin ke 6.0.3 pada 1 Oktober 2026. Coba lagi 7.x saat typescript-eslint mendukungnya |
| eslint | 9.39.5 (dipin) | 10.11.0 terbaru di npm, tetapi `eslint-plugin-react` bawaan eslint-config-next gagal di ESLint 10 (`context.getFilename is not a function`; peer hanya sampai ^9). Dipin ke 9.x pada 1 Oktober 2026 |
| eslint-config-next | 16.3.8 | Flat config |
| zod | 4.6.5 | Validasi data konten |
| @playwright/test | 1.63.0 | E2E ringan |
| next-mdx-remote | 6.0.0 | Alternatif: @next/mdx 16.3.8 |
| motion | 13.4.6 | Library animasi. Import dari `motion/react`; peer React 18 atau 19. Panduan instalasi Motion menyebut React 18.2 ke atas |
| lucide-react | 1.49.0 | Ikon fungsional saja; verifikasi ekspor sebelum dipakai |

Gunakan Node versi yang memenuhi semua syarat di atas (minimal 22.13 atau lebih baru). Simpan di `package.json` bidang `engines` dan di `.nvmrc`.

## 4. Aturan Next.js 16 (dari panduan resmi)

Sumber: nextjs.org/docs/app/guides/upgrading/version-16 (diperbarui 25 Agustus 2026).

- **API request bersifat async penuh.** `params`, `searchParams`, `cookies()`, `headers()`, `draftMode()` hanya boleh diakses dengan `await`. Akses sinkron sudah dihapus.
- Gunakan helper tipe global hasil `npx next typegen`: `PageProps<'/blog/[slug]'>`, `LayoutProps`, `RouteContext`.

```tsx
export default async function Page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params
  // ...
}
```

- **`middleware.ts` sudah deprecated.** Gunakan `proxy.ts` dengan fungsi `proxy`. Runtime proxy adalah Node.js dan tidak bisa diubah. Proyek ini tidak memerlukannya pada MVP.
- **Turbopack default** untuk `next dev` dan `next build`. Jangan menambah flag `--turbopack`. Jangan menambah konfigurasi webpack; build gagal jika ada. Konfigurasi Turbopack ada di `turbopack` tingkat atas pada `next.config.ts`, bukan di `experimental`.
- **`next lint` sudah dihapus.** Jalankan ESLint CLI langsung dengan flat config (`eslint.config.mjs`).
- **Gambar (`next/image`):**
  - Gunakan `images.remotePatterns`, bukan `images.domains` (deprecated).
  - Jangan memakai `next/legacy/image`.
  - Gambar lokal dengan query string butuh `images.localPatterns.search`.
  - Nilai default berubah: `minimumCacheTTL` 4 jam, `qualities` hanya `[75]`, `imageSizes` tanpa 16, `maximumRedirects` 3. Atur eksplisit jika membutuhkan nilai lain.
- **Caching:** `revalidateTag(tag, profile)` butuh argumen kedua (mis. `'max'`); bentuk satu argumen deprecated. `cacheLife` dan `cacheTag` sudah stabil tanpa awalan `unstable_`. Partial Prerendering dipakai lewat `cacheComponents`, bukan `experimental.ppr`.
- **Route sitemap dan gambar:** `id` pada fungsi `sitemap` dan props gambar (`opengraph-image`, `icon`, dst.) sekarang `Promise`.
- **Parallel routes** wajib punya `default.js` per slot.
- AMP dan `useAmp` sudah dihapus.
- Browser yang didukung: Chrome/Edge/Firefox 111+, Safari 16.4+.
- Jalankan `npx @next/codemod@canary agents-md` agar `AGENTS.md` juga menunjuk ke dokumentasi Next.js yang sesuai versi (`node_modules/next/dist/docs/`). Baca dokumen itu sebelum memakai API yang tidak Anda yakini.

## 5. Aturan Tailwind CSS 4

Sumber: tailwindcss.com/docs (v4.3).

- Impor dengan `@import "tailwindcss";` di `app/globals.css`. Bukan `@tailwind base/components/utilities`.
- Plugin PostCSS: `@tailwindcss/postcss` di `postcss.config.mjs`.
- Token desain didefinisikan di CSS dengan `@theme { --color-...: ...; }`. Jangan membuat `tailwind.config.js` kecuali ada kebutuhan yang terdokumentasi.
- Token warna, font, dan spasi mengikuti [DESIGN.md](DESIGN.md). Jangan memakai nilai warna acak di komponen.

## 6. Aturan kode

- TypeScript `strict`. Dilarang `any`; gunakan `unknown` lalu persempit.
- Server Components secara default. `"use client"` hanya untuk interaksi (menu, accordion, lightbox, event analitik).
- Data konten divalidasi dengan Zod saat build; build gagal jika alt text kosong, tanggal salah, atau slug duplikat.
- Semua gambar lewat `next/image` dengan `alt` bermakna, `width`/`height` atau `fill` dengan container beraspek, dan `sizes` yang benar.
- Font lewat `next/font`. Tidak ada `<link>` font eksternal manual.
- Tautan eksternal memakai `rel="noopener noreferrer"`.
- Tidak ada rahasia di variabel `NEXT_PUBLIC_*`.
- Aksesibilitas: elemen semantik, label untuk kontrol, fokus terlihat, target sentuh minimal 44 px.
- Nama berkas `kebab-case`, komponen `PascalCase`, konten dan URL berbahasa Indonesia.
- Komponen dari 21st.dev atau shadcn boleh disalin hanya jika lolos aturan di [DESIGN.md](DESIGN.md) dan lisensinya diperiksa. Hapus efek dan dependensi yang tidak dipakai.

## 6a. Aturan animasi

Sumber: motion.dev/docs/react, halaman instalasi dan Accessibility (dibaca 1 Oktober 2026). Katalog dan batasan ada di [DESIGN.md](DESIGN.md) bagian 10.

- Gunakan library **Motion** untuk animasi berurutan, scroll, layout, exit, dan gestur. CSS transition cukup untuk efek sederhana seperti warna tombol.
- Komponen klien: `"use client"` dan `import { motion } from "motion/react"`. Server Component: `import * as motion from "motion/react-client"`.
- Bungkus aplikasi dengan `MotionConfig reducedMotion="user"`.
- Catatan dokumentasi: halaman Accessibility Motion masih menampilkan impor dari `framer-motion` pada contohnya. Pakai `motion/react` dan cek ekspor yang tersedia di versi terpasang.
- Animasikan hanya `transform` dan `opacity`. Jangan menyebabkan layout shift.
- Hanya animasi yang ada di katalog DESIGN.md. Animasi baru harus ditambahkan ke katalog lebih dulu.
- Elemen LCP (foto hero) tidak boleh menunggu animasi sebelum tampil.
- Konten harus tetap ada di HTML dan terbaca tanpa JavaScript.
- Tidak menambah library animasi lain tanpa alasan tertulis.

## 6b. Aturan aset dan referensi

- **Aset dibuat pemilik proyek.** Jangan membuat, mengunduh, atau menempel gambar, foto, ilustrasi, atau video. Pakai `<Asset id="..." />` dengan ID dari [docs/16-daftar-aset-placeholder.md](docs/16-daftar-aset-placeholder.md).
- ID aset baru dicatat di docs/16 dan manifest pada commit yang sama.
- Build produksi harus gagal jika ada aset tanpa `src` atau tanpa `alt`. Pengecualian: aset bertanda `optional: true` di manifest boleh kosong; slotnya tidak dirender di produksi.
- Referensi desain (Aura, 21st.dev, Armstrong, dst.) hanya inspirasi. Dilarang meniru tata letak, komposisi, teks, atau aset satu situs tertentu. Ikuti bagian 2 DESIGN.md.

## 7. Aturan dokumentasi

- `README.md` memuat: tujuan, cara menjalankan, variabel lingkungan, cara deploy. Maksimal satu layar.
- Komentar menjelaskan alasan atau batasan, bukan hal yang sudah jelas dari kode.
- JSDoc hanya untuk fungsi publik di `lib/` dengan perilaku yang tidak jelas dari namanya.
- Satu topik satu berkas di `docs/`; gunakan tabel dan diagram Mermaid, hindari paragraf panjang.
- Saat mengubah perilaku, perbarui dokumen yang terkait pada commit yang sama.
- Commit message singkat dalam bentuk perintah, contoh: `Tambah halaman harga dan schema Product`.

## 8. Sebelum commit atau deploy

- [ ] `npx tsc --noEmit` bersih
- [ ] `npx eslint .` bersih
- [ ] `next build` sukses tanpa peringatan deprecated
- [ ] Validasi konten lulus (alt text, tanggal, slug)
- [ ] Tidak ada `[ISI]`, `TODO`, atau lorem ipsum di produksi
- [ ] Lighthouse mobile pada Home dan satu halaman produk sesuai target PRD
- [ ] `npm audit` ditinjau; tidak ada kerentanan tinggi yang belum ditangani
- [ ] Tidak ada emoji di perubahan

## 9. Pemeriksaan deprecated berkala

- Tiap bulan: `npm outdated`, baca catatan rilis Next.js dan Tailwind lewat browser, perbarui bila aman.
- Setiap upgrade mayor: baca panduan upgrade resmi, jalankan codemod yang disarankan, lalu checklist bagian 8.
- Perbarui tabel bagian 3 beserta tanggal verifikasinya.

## 10. Batasan hosting

Paket Hobby Vercel dibatasi untuk penggunaan non-komersial pribadi (vercel.com/docs/plans/hobby, dibaca 1 Oktober 2026). Website bisnis klien adalah penggunaan komersial. Hosting Hobby hanya untuk tahap pengembangan dan pratinjau internal. Sebelum tayang untuk klien yang membayar, gunakan paket Pro atau platform lain yang mengizinkan penggunaan komersial. Lihat [docs/07-deploy-vercel-dan-domain.md](docs/07-deploy-vercel-dan-domain.md).
