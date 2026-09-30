# 13. Rencana QA dan Testing

## 1. Tujuan

Memastikan semua kebutuhan PRD (dokumen 09) dan acceptance criteria (dokumen 10) terpenuhi sebelum launch, terutama aspek SEO, performa, dan konversi WhatsApp.

## 2. Lingkup pengujian

| Area | Metode |
|---|---|
| Fungsional (navigasi, CTA, galeri, FAQ) | Uji manual + Playwright untuk alur kritis |
| SEO teknis | Audit otomatis + pemeriksaan manual |
| Performa | Lighthouse/PageSpeed, data lab dan (setelah live) data lapangan |
| Aksesibilitas | Axe/Lighthouse + uji keyboard manual |
| Responsif | Uji di beberapa ukuran layar dan perangkat nyata |
| Konten | Tinjauan editorial dan persetujuan klien |
| Analitik | Verifikasi event di mode debug |

## 3. Uji fungsional

| ID | Skenario | Hasil yang diharapkan | Terkait |
|---|---|---|---|
| T-01 | Buka Home di 390 px | H1, hero, dan tombol WA terlihat tanpa scroll | US-01 |
| T-02 | Klik tombol WA di Home | Membuka `wa.me/<nomor>` dengan pesan umum | US-07 |
| T-03 | Klik tombol tanya pada varian produk | Pesan memuat nama produk | US-02, US-07 |
| T-04 | Buka halaman harga | Tabel, contoh hitungan, dan tanggal pembaruan tampil | US-03 |
| T-05 | Buka galeri | Minimal 15 proyek, alt text ada, tidak ada layout shift | US-04 |
| T-06 | Buka Kontak | NAP sebagai teks, peta, tombol arah | US-08 |
| T-07 | Buka artikel blog | Jawaban singkat, tanggal, tautan terkait | US-09, US-10 |
| T-08 | Buka URL acak tidak ada | Halaman 404 kustom, status 404 | FR-10 |
| T-09 | Navigasi keyboard di menu dan FAQ | Fokus terlihat, dapat dioperasikan | NFR-03 |
| T-10 | Tombol WA floating di mobile | Tidak menutupi kontrol penting | US-07 |

## 4. Uji SEO

| ID | Pemeriksaan | Cara | Lulus jika |
|---|---|---|---|
| S-01 | Title unik dan sesuai dokumen 03 | Crawl (mis. Screaming Frog versi gratis) | Tidak ada duplikat/kosong |
| S-02 | Meta description unik | Crawl | Tidak ada duplikat/kosong |
| S-03 | Satu H1 per halaman | Crawl | Tepat 1 |
| S-04 | Canonical benar | Crawl | Mengarah ke URL sendiri |
| S-05 | Sitemap valid | Buka `/sitemap.xml`, cek status | Semua URL 200, tanpa noindex |
| S-06 | Robots produksi/preview | Buka `/robots.txt` di produksi dan preview | Produksi Allow; preview Disallow |
| S-07 | Schema valid | Rich Results Test + Schema Markup Validator | Tanpa error |
| S-08 | Alt text | Crawl/DOM | Semua gambar informatif ber-alt |
| S-09 | Tautan rusak | Crawl | Tidak ada 404 internal |
| S-10 | Redirect www/non-www dan `*.vercel.app` | Uji manual | 301 ke domain kanonik |
| S-11 | NAP konsisten | Bandingkan web, GBP, sosmed | Identik |
| S-12 | Tidak ada placeholder | Cari `[ISI]`, `lorem`, `TODO` di build; pastikan tidak ada slot `Asset` tanpa `src` | Tidak ada |
| S-13 | Animasi aman | Aktifkan Reduced Motion di OS/browser, nonaktifkan JS, ukur CLS dan LCP | Konten terbaca, gerak besar diganti fade, target CWV tercapai |

## 5. Uji performa

| Halaman | Metrik | Target (mobile) |
|---|---|---|
| Home | LCP | < 2,5 s |
| Home | CLS | < 0,1 |
| Home | INP/TBT | INP < 200 ms (TBT sebagai proksi di lab) |
| Produk | LCP, CLS | Sama |
| Artikel blog | LCP, CLS | Sama |

Catatan: skor Lighthouse lab bervariasi antar-uji. Jalankan beberapa kali dan gunakan median. Setelah ada traffic, andalkan data lapangan (Search Console, CrUX).

Anggaran awal (pedoman internal, sesuaikan): ukuran JS halaman awal sekecil mungkin, gambar hero dioptimasi, font maksimal 2 keluarga.

## 6. Uji aksesibilitas

- [ ] Axe/Lighthouse tanpa isu kritis
- [ ] Kontras warna memenuhi AA
- [ ] Heading berurutan
- [ ] Semua kontrol fokusable dan berlabel
- [ ] Uji dengan pembaca layar pada alur utama (minimal sekali)

## 7. Uji lintas perangkat

| Perangkat/browser | Status |
|---|---|
| Chrome Android (HP mid-range) | [ ] |
| Safari iOS | [ ] |
| Chrome desktop | [ ] |
| Firefox / Edge desktop | [ ] |
| Lebar 360, 390, 768, 1280 | [ ] |

## 8. Uji analitik

- [ ] `whatsapp_click` terkirim dengan parameter halaman
- [ ] `phone_click` dan `map_click` terkirim
- [ ] Tidak ada data pribadi dalam parameter event
- [ ] Sumber trafik tercatat

## 9. Uji konten dan persetujuan

- [ ] Harga dan klaim diverifikasi klien secara tertulis
- [ ] Testimoni memiliki izin
- [ ] Foto milik klien atau berlisensi
- [ ] Ejaan dan tata bahasa ditinjau
- [ ] Tidak ada klaim tanpa dasar (termurah, terbaik, persentase tanpa sumber)

## 10. Automasi yang disarankan (ringan)

- CI: lint, type-check, validasi data konten (Zod) pada setiap push.
- Playwright: 3-4 skenario kritis (T-01, T-02, T-03, T-08).
- Lighthouse CI pada halaman utama (opsional) dengan ambang peringatan.

## 11. Kriteria lulus rilis

- Semua T dan S berstatus lulus, kecuali yang disetujui sebagai pengecualian tertulis.
- Tidak ada bug kritis atau mayor terbuka.
- Target performa tercapai pada Home dan satu halaman produk.
- Klien menyetujui konten secara tertulis.

## 12. Pelaporan bug

Format: ID, judul, langkah reproduksi, hasil aktual vs diharapkan, tingkat keparahan (Kritis/Mayor/Minor), tangkapan layar, perangkat/browser.

| Tingkat | Definisi | Penanganan |
|---|---|---|
| Kritis | Situs tidak dapat dipakai, CTA WA rusak, salah harga | Perbaiki sebelum rilis |
| Mayor | Fitur penting rusak, layout parah di mobile | Perbaiki sebelum rilis |
| Minor | Kosmetik, teks | Dijadwalkan |
