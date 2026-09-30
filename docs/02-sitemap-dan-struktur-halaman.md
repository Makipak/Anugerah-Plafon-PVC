# 02. Sitemap dan Struktur Halaman

## Sitemap

```mermaid
flowchart TD
  H[Home /] --> P[Produk /produk]
  H --> L[Layanan /layanan]
  H --> G[Galeri /galeri]
  H --> A[Area Layanan /area-layanan]
  H --> B[Blog /blog]
  H --> T[Tentang Kami /tentang-kami]
  H --> K[Kontak /kontak]
  P --> P1[/produk/plafon-pvc]
  P --> P2[/produk/wall-panel PVC - opsional]
  L --> L1[/layanan/pasang-plafon-pvc]
  L --> L2[/layanan/harga-dan-biaya-pasang]
  A --> A1[/area-layanan/serang]
  A --> A2[/area-layanan/cilegon]
  A --> A3[/area-layanan/kota-lain - hanya yang dilayani]
  B --> B1[/blog/slug-artikel]
```

Halaman dengan label "opsional" dibuat hanya jika klien benar-benar menjual atau mengerjakannya.

## Detail per halaman

| URL | Tujuan | Isi wajib | Keyword utama |
|---|---|---|---|
| `/` | Halaman pendaratan utama | Hero + CTA WA, keunggulan, produk unggulan, galeri singkat, testimoni, FAQ ringkas, area layanan, NAP + peta | plafon pvc serang |
| `/produk` | Listing produk | Kartu produk/motif, rentang harga, CTA WA per produk | plafon pvc serang banten |
| `/produk/plafon-pvc` | Halaman produk inti | Varian motif, ukuran, ketebalan, harga mulai dari, kelebihan, perbandingan dengan gypsum, FAQ, schema Product | harga plafon pvc serang |
| `/layanan/pasang-plafon-pvc` | Halaman jasa | Proses kerja, contoh proyek, garansi, cara order, schema Service | jasa pasang plafon pvc serang |
| `/layanan/harga-dan-biaya-pasang` | Halaman harga | Rentang harga material dan jasa, contoh hitungan 3x3 m, faktor harga, FAQ | harga jasa pasang plafon pvc |
| `/galeri` | Bukti sosial | Foto proyek asli, lokasi (kecamatan), jenis ruang, alt text deskriptif | (pendukung) |
| `/area-layanan/[kota]` | SEO lokal | Konten unik per wilayah, proyek di wilayah itu, waktu tempuh, FAQ lokal | jasa plafon pvc [kota] |
| `/blog` dan `/blog/[slug]` | Traffic informasional | Artikel, daftar isi, internal link ke produk/layanan | lihat dokumen 06 |
| `/tentang-kami` | Kepercayaan (E-E-A-T) | Sejarah, tim, pengalaman, legalitas, foto toko | (brand) |
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
- Halaman produk menaut ke halaman harga dan galeri.
- Halaman area layanan menaut ke halaman layanan dan galeri.
- Anchor text deskriptif (hindari "klik di sini").

## Kontrol kualitas halaman area layanan

Sebelum menerbitkan satu halaman wilayah, pastikan:

- [ ] Klien benar-benar melayani wilayah itu
- [ ] Ada minimal satu proyek atau fakta lokal yang unik
- [ ] Isi tidak sekadar mengganti nama kota
- [ ] Ada FAQ khusus wilayah (mis. akses, waktu survei)
