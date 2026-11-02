# 02. Sitemap dan Struktur Halaman

## Sitemap

```mermaid
flowchart TD
  H[Home /] --> P[Produk /produk]
  H --> L[Layanan /layanan]
  H --> G[Galeri /galeri]
  H --> A[Area Layanan /area-layanan]
  H --> B[Blog /blog]
  H --> T[Tentang Toko /tentang-kami]
  H --> K[Kontak /kontak]
  P --> P1[/produk/kategori/plafon-pvc]
  P1 --> P1a[/produk/kategori/plafon-pvc/merek/dante]
  P --> P2[/produk/kategori/lis-dinding-6cm]
  P --> P3[/produk/kategori/lis-dinding-laminate]
  P --> P4[/produk/kategori/lis-wallboard]
  P --> P5[/produk/kategori/wallboard-40cm]
  P --> P6[/produk/kategori/wpc-outdoor]
  L --> L1[/layanan/pasang-plafon-pvc]
  L --> L2[/layanan/harga-dan-biaya-pasang - konsultasi]
  A --> A1[/area-layanan/serang]
  A --> A2[/area-layanan/cilegon]
  A --> A3[/area-layanan/kota-lain - hanya yang dilayani]
  B --> B1[/blog/slug-artikel]
```

Halaman dengan label "opsional" dibuat hanya jika klien benar-benar menjual atau mengerjakannya.

## Detail per halaman

| URL | Tujuan | Isi wajib | Keyword utama |
|---|---|---|---|
| `/` | Halaman pendaratan utama | Hero + CTA WA, keunggulan, video, testimoni, NAP + peta | plafon pvc serang |
| `/produk` | Daftar folder produk | Kartu kategori berurutan: PVC, WPC OUTDOOR, wallboard, lis dinding 6 cm, lis dinding laminate, dan lis wallboard | produk plafon pvc dan material interior Serang |
| `/produk/kategori/plafon-pvc` | Daftar folder di dalam PVC | Kartu nama dan foto berurutan: JAVAFON, LAMIWOOD LAMINATE, SAFIR, LAMIWOOD GLOSSY, DANTE | produk plafon pvc Serang |
| `/produk/kategori/plafon-pvc/merek/[merek]` | Galeri jenis PVC | Semua foto dari folder merek/jenis yang dipilih | nama jenis plafon pvc Serang |
| `/produk/kategori/[kategori]` | Galeri folder produk lain | Semua foto dari folder WPC, wallboard, lis dinding, atau lis wallboard | nama jenis produk + Serang |
| `/produk/plafon-pvc` | Halaman produk inti | Varian motif, ukuran, ketebalan, kelebihan, perbandingan dengan gypsum, FAQ, schema Product | plafon pvc serang |
| `/layanan/pasang-plafon-pvc` | Halaman jasa | Proses kerja, contoh proyek, garansi, cara order, schema Service | jasa pasang plafon pvc serang |
| `/layanan/harga-dan-biaya-pasang` | Konsultasi | Informasi yang perlu disiapkan dan CTA WhatsApp; nominal tidak ditampilkan | konsultasi plafon pvc serang |
| `/galeri` | Bukti sosial | Foto dan video proyek; pengelompokan berdasarkan bentuk pemasangan (flat, flat kombinasi, drop 1-3) ditambahkan setelah foto diklasifikasikan | (pendukung) |
| `/area-layanan/[kota]` | SEO lokal | Konten unik per wilayah, proyek di wilayah itu, waktu tempuh, FAQ lokal | jasa plafon pvc [kota] |
| `/blog` dan `/blog/[slug]` | Traffic informasional | Artikel, daftar isi, internal link ke produk/layanan | lihat dokumen 06 |
| `/tentang-kami` | Tentang Toko dan kepercayaan (E-E-A-T) | Sejarah, tim, pengalaman, legalitas, foto toko | (brand) |
| `/kontak` | Konversi | NAP teks, jam, tombol WA, peta, formulir singkat (opsional) | toko plafon pvc serang |

## Elemen global

- Header: logo, menu, tombol WA.
- Tombol WA floating (pesan prefilled sesuai halaman).
- Footer: NAP, jam operasional, tautan sosmed, tautan area layanan.
- Breadcrumb di semua halaman selain Home.

## Aturan URL

- Huruf kecil, pakai tanda hubung, bahasa Indonesia, pendek.
- Tidak ada trailing slash ganda; pilih satu format dan pertahankan.
- Hindari parameter di URL yang diindeks.
- Jika URL berubah, pasang redirect 301.

## Internal linking

- Setiap artikel blog menaut ke minimal satu halaman produk/layanan.
- Halaman produk menaut ke galeri dan mengarahkan konsultasi melalui WhatsApp.
- Halaman area layanan menaut ke halaman layanan dan galeri.
- Anchor text deskriptif (hindari "klik di sini").

## Kontrol kualitas halaman area layanan

Sebelum menerbitkan satu halaman wilayah, pastikan:

- [ ] Klien benar-benar melayani wilayah itu
- [ ] Ada minimal satu proyek atau fakta lokal yang unik
- [ ] Isi tidak sekadar mengganti nama kota
- [ ] Ada FAQ khusus wilayah (mis. akses, waktu survei)
