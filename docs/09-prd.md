# 09. Product Requirements Document (PRD)

| Item | Isi |
|---|---|
| Produk | Website company profile Anugerah Plafon PVC |
| Versi | 0.1 (draf) |
| Tanggal | 1 Oktober 2026 |
| Penulis | Hans |
| Status | Draf, menunggu konfirmasi klien |

## 1. Latar belakang

Anugerah Plafon PVC adalah usaha plafon PVC di Serang, Banten, yang belum memiliki jejak digital yang dapat ditemukan (pencarian nama usaha tidak menemukan web, profil bisnis, maupun sosmed pada 1 Oktober 2026). Riset SERP menunjukkan halaman 1 untuk keyword lokal didominasi Facebook, Instagram, TikTok, OLX, dan direktori, sedangkan website kompetitor lemah secara teknis (konten tipis, tanpa schema LocalBusiness, alt text minim, tanpa harga). Peluang: website yang cepat, terstruktur, dan transparan soal harga.

## 2. Tujuan dan metrik keberhasilan

| Tujuan | Metrik | Target awal (asumsi, sesuaikan dengan klien) |
|---|---|---|
| Ditemukan di pencarian lokal | Halaman terindeks, impresi Search Console | Semua halaman utama terindeks dalam 4 minggu setelah launch |
| Menghasilkan lead | Klik tombol WhatsApp per bulan | Baseline dicatat bulan 1, target ditetapkan setelahnya |
| Kepercayaan | Jumlah proyek dan testimoni tampil di web | Min. 15 proyek di galeri, 3 testimoni (dengan izin) |
| Kualitas teknis | Core Web Vitals | LCP < 2,5 s, CLS < 0,1, INP < 200 ms |
| Keterlihatan lokal | Posisi keyword Tier 1 | Dipantau; tidak dijanjikan angka tertentu |

Target numerik ranking sengaja tidak ditetapkan karena bergantung kompetisi dan waktu. Tetapkan target setelah ada data Search Console.

## 3. Pengguna dan kebutuhan

| Persona | Kebutuhan | Perilaku |
|---|---|---|
| Pemilik rumah di Serang yang renovasi | Tahu harga, melihat hasil nyata, cepat menghubungi | Mencari lewat HP, membandingkan beberapa toko, menghubungi lewat WhatsApp |
| Pemilik ruko/kantor/masjid | Kepercayaan, pengalaman, kecepatan kerja | Membutuhkan bukti proyek serupa |
| Kontraktor/tukang | Harga material, ketersediaan | Menanyakan stok dan harga partai |
| Klien (pemilik usaha) | Web yang menghasilkan chat, mudah dipahami | Memantau laporan bulanan |

Mayoritas trafik diasumsikan dari mobile; desain mobile-first.

## 4. Ruang lingkup

### 4.1 Dalam scope (MVP)

1. Halaman: Home, Produk, Detail Produk Plafon PVC, Layanan Pasang, Harga dan Biaya, Galeri, Area Layanan (wilayah yang dilayani), Blog, Tentang Kami, Kontak.
2. CTA WhatsApp (header, floating, per produk) dengan pesan prefilled.
3. SEO teknis: metadata, canonical, sitemap, robots, JSON-LD, breadcrumb.
4. Performa: SSG, optimasi gambar dan font.
5. Analytics: event klik WhatsApp, telepon, peta.
6. Deploy ke Vercel dengan custom domain dan Search Console.
7. 3 artikel blog awal.

### 4.2 Di luar scope (MVP)

Toko online dan pembayaran, admin panel/CMS, multi bahasa, akun pengguna, iklan berbayar, pembuatan logo/branding, fotografi proyek.

### 4.3 Kandidat fase 2

CMS (mis. untuk artikel dan galeri), kalkulator estimasi biaya interaktif, formulir survei lokasi, integrasi review Google yang ditampilkan di web, halaman motif per produk.

## 5. Kebutuhan fungsional

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Situs menampilkan semua halaman di bagian 4.1 dengan navigasi konsisten | Must |
| FR-02 | Tombol WhatsApp terlihat di header dan floating di mobile; pesan prefilled mengikuti halaman/produk | Must |
| FR-03 | Halaman produk menampilkan varian, rentang harga, kelebihan, FAQ, dan CTA | Must |
| FR-04 | Halaman harga menampilkan rentang harga material dan jasa serta contoh hitungan, dengan tanggal pembaruan | Must |
| FR-05 | Galeri menampilkan foto proyek dengan lokasi (kecamatan), jenis ruang, dan alt text | Must |
| FR-06 | Halaman kontak menampilkan NAP sebagai teks, jam, peta, dan tautan sosmed | Must |
| FR-07 | Blog mendukung MDX, daftar isi, tanggal terbit dan diperbarui, artikel terkait | Must |
| FR-08 | Halaman area layanan dibuat per wilayah dari data terstruktur dengan konten unik | Should |
| FR-09 | Breadcrumb tampil dan tersinkron dengan schema | Should |
| FR-10 | Halaman 404 kustom | Should |
| FR-11 | Formulir kontak/survei | Could (fase 2) |

## 6. Kebutuhan non-fungsional

| ID | Kebutuhan |
|---|---|
| NFR-01 | Semua halaman dirender statis (SSG); tanpa server aplikasi dan tanpa database |
| NFR-02 | Core Web Vitals memenuhi target bagian 2 pada mobile |
| NFR-03 | Aksesibilitas dasar: kontras memadai, teks alternatif, navigasi keyboard, label tombol (target WCAG 2.1 AA) |
| NFR-04 | Responsif: 360 px hingga desktop tanpa scroll horizontal |
| NFR-05 | HTTPS dan header keamanan dasar |
| NFR-06 | Preview dan domain `*.vercel.app` tidak terindeks |
| NFR-07 | Struktur konten dipisah dari UI (`/content`) agar mudah dipindah ke CMS |
| NFR-08 | Privasi: analitik tidak mengumpulkan data pribadi yang tidak perlu; testimoni hanya dengan izin |

## 7. Kebutuhan SEO

Rincian ada di dokumen [03](03-keyword-map.md) dan [05](05-spesifikasi-teknis-seo.md). Ringkasan:

- Satu keyword utama per halaman, title/meta/H1 unik.
- Schema: LocalBusiness, Product atau Service, FAQPage (bila FAQ tampil), BreadcrumbList, Article.
- Sitemap dinamis dan robots yang membedakan produksi dan preview.
- Konsistensi NAP dengan Google Business Profile.
- Internal link terstruktur dan artikel harga yang diperbarui berkala.

## 8. Dependensi dan asumsi

| Item | Jenis | Catatan |
|---|---|---|
| Materi klien (dokumen 04) | Dependensi | Blokir utama launch |
| Domain atas nama klien | Dependensi | Belum ada |
| Google Business Profile | Dependensi | Dibuat/diverifikasi klien |
| Kesediaan klien menampilkan harga | Asumsi | Harga transparan adalah diferensiasi utama; jika klien menolak, tampilkan rentang/"mulai dari" |
| Produk hanya plafon PVC | Asumsi | Belum dikonfirmasi; tambah halaman jika ada wall panel/gypsum |
| Hosting Vercel | Asumsi | Sementara; cek ketentuan penggunaan komersial |

## 9. Risiko

Lihat dokumen [01](01-project-brief.md) bagian Risiko. Tambahan spesifik PRD:

| Risiko | Mitigasi |
|---|---|
| Scope melebar (CMS, toko online) | Catat sebagai fase 2 dengan estimasi terpisah |
| Klien tidak punya foto proyek | Jadwalkan sesi pengambilan foto oleh klien; sementara gunakan halaman tanpa galeri, jangan foto stok |
| Persepsi "SEO = pasti ranking 1" | Tanda tangani SOW (dokumen 15) |

## 10. Kriteria peluncuran (Definition of Launch)

- [ ] Semua FR Must selesai dan lulus acceptance (dokumen 10)
- [ ] NFR-02, NFR-04, NFR-06 terverifikasi
- [ ] Konten asli terisi (tanpa placeholder `[ISI]` dan lorem ipsum)
- [ ] Domain aktif, HTTPS, redirect www/non-www benar
- [ ] Sitemap terkirim di Search Console; GBP terhubung
- [ ] Persetujuan tertulis klien atas konten dan harga yang tampil

## 11. Pertanyaan terbuka

1. Produk dan layanan final yang dijual?
2. Wilayah layanan resmi?
3. Apakah harga boleh ditampilkan? Format (rentang, mulai dari, daftar)?
4. Domain yang diinginkan?
5. Siapa yang memegang akses GBP, Search Console, dan domain?
6. Apakah ada garansi dan syaratnya (hanya tulis yang benar-benar diberikan)?
