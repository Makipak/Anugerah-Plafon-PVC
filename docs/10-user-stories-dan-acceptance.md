# 10. User Stories dan Acceptance Criteria

Format: **Sebagai** [peran], **saya ingin** [tujuan], **agar** [manfaat]. Acceptance criteria ditulis Given/When/Then atau daftar cek yang dapat diuji.

Prioritas: M = Must, S = Should, C = Could.

## Epic A: Menemukan dan memahami penawaran

### US-01 (M) Melihat apa yang dijual dan di mana
Sebagai calon pelanggan di Serang, saya ingin langsung paham bahwa ini toko/jasa plafon PVC di Serang, agar saya tahu situs ini relevan.

Acceptance:
- Given saya membuka Home di HP, when halaman selesai dimuat, then H1, ringkasan penawaran, dan tombol WhatsApp terlihat tanpa scroll.
- Nama kota (Serang) muncul di H1 atau subjudul hero.
- Title dan meta description sesuai dokumen 03.

### US-02 (M) Melihat produk dan varian
Sebagai calon pelanggan, saya ingin melihat motif, ukuran, dan ketebalan, agar saya bisa memilih.

Acceptance:
- Halaman `/produk/plafon-pvc` memuat daftar varian dengan gambar, nama, dan spesifikasi.
- Setiap varian punya tombol "Tanya via WhatsApp" dengan pesan berisi nama produk.
- Gambar memiliki alt text deskriptif.

### US-03 (M) Mengetahui harga
Sebagai calon pelanggan, saya ingin melihat kisaran harga material dan biaya pasang, agar saya bisa memperkirakan anggaran.

Acceptance:
- Halaman harga memuat rentang harga material dan jasa, faktor yang memengaruhi, dan contoh hitungan ruang 3x3 m.
- Tampil tanggal "diperbarui pada".
- Ada pernyataan bahwa harga final mengikuti survei/penawaran.
- Harga berasal dari klien, bukan dari artikel pihak ketiga.

## Epic B: Membangun kepercayaan

### US-04 (M) Melihat hasil nyata
Sebagai calon pelanggan, saya ingin melihat foto proyek, agar yakin dengan kualitas kerja.

Acceptance:
- Galeri minimal 15 proyek sebelum launch.
- Setiap item memuat lokasi (kecamatan), jenis ruang, dan alt text.
- Gambar dimuat lazy kecuali yang di atas lipatan; tidak ada layout shift.

### US-05 (S) Membaca testimoni
Sebagai calon pelanggan, saya ingin membaca pengalaman pelanggan lain, agar yakin.

Acceptance:
- Testimoni hanya ditampilkan jika ada izin pelanggan.
- Tidak ada schema `AggregateRating` kecuali ulasan nyata tampil dan dapat diverifikasi.

### US-06 (S) Mengenal usaha
Sebagai calon pelanggan, saya ingin tahu siapa di balik usaha ini, agar saya percaya.

Acceptance:
- Halaman Tentang Kami memuat sejarah singkat, pengalaman, foto toko/tim, dan alamat.

## Epic C: Menghubungi

### US-07 (M) Menghubungi lewat WhatsApp
Sebagai calon pelanggan, saya ingin chat cepat, agar mendapat penawaran.

Acceptance:
- Given saya di halaman mana pun, when saya menekan tombol WhatsApp, then WhatsApp terbuka ke nomor klien dengan pesan prefilled yang menyebut halaman/produk.
- Tombol floating tidak menutupi konten penting atau tombol lain di mobile.
- Klik tercatat sebagai event analitik `whatsapp_click` dengan parameter halaman.

### US-08 (M) Menemukan lokasi dan jam buka
Sebagai calon pelanggan, saya ingin tahu alamat dan jam, agar bisa datang.

Acceptance:
- Alamat dan telepon tampil sebagai **teks** (bukan gambar) di Kontak dan footer.
- Peta tertanam dan tombol "Petunjuk arah" ke Google Maps.
- Data identik dengan Google Business Profile.

## Epic D: Konten edukasi

### US-09 (M) Menemukan jawaban pertanyaan umum
Sebagai calon pelanggan, saya ingin jawaban pertanyaan seperti harga per meter dan cara menghitung kebutuhan, agar tidak perlu bertanya satu per satu.

Acceptance:
- Artikel harga dan artikel hitungan 3x3 m terbit dan terindeks.
- Setiap artikel memuat jawaban singkat di awal, tanggal terbit dan diperbarui, serta tautan ke halaman produk/layanan.

### US-10 (S) Menjelajah artikel terkait
Sebagai pembaca, saya ingin melihat artikel terkait, agar dapat melanjutkan membaca.

Acceptance:
- Setiap artikel menampilkan 2-3 artikel atau halaman terkait.

## Epic E: Jangkauan wilayah

### US-11 (S) Memastikan wilayah saya dilayani
Sebagai pelanggan di Cilegon (atau wilayah lain), saya ingin tahu apakah saya dilayani, agar tidak buang waktu.

Acceptance:
- Halaman area layanan hanya ada untuk wilayah yang dilayani klien.
- Setiap halaman memuat konten unik (proyek atau fakta lokal, FAQ wilayah), bukan sekadar pergantian nama kota.

## Epic F: Pemilik usaha (klien)

### US-12 (M) Memantau hasil
Sebagai pemilik usaha, saya ingin laporan sederhana tiap bulan, agar tahu manfaat web.

Acceptance:
- Laporan bulanan memuat impresi/klik organik, klik WhatsApp, dan tindakan GBP, dalam bahasa awam.

### US-13 (S) Meminta perubahan konten
Sebagai pemilik usaha, saya ingin mengubah harga atau menambah proyek lewat developer dengan proses yang jelas, agar konten tetap akurat.

Acceptance:
- Alur permintaan perubahan dan SLA dicantumkan di SOW (dokumen 15).
- Perubahan harga memperbarui tanggal "diperbarui pada".

## Epic G: Teknis dan SEO (story pengembang)

### US-14 (M) Halaman terindeks dengan benar
Sebagai developer, saya ingin memastikan mesin pencari dapat merayapi dan memahami situs.

Acceptance:
- `sitemap.xml` memuat hanya URL berstatus 200 dan kanonik.
- `robots.txt` produksi mengizinkan perayapan; preview memblokir.
- Schema lolos Rich Results Test tanpa error.

### US-15 (M) Performa baik di mobile
Sebagai developer, saya ingin situs cepat di perangkat mid-range.

Acceptance:
- PageSpeed mobile (data lab) untuk Home dan satu halaman produk memenuhi target LCP, CLS, INP di PRD.
- Tidak ada layout shift akibat font atau gambar.

### US-16 (S) Domain non-produksi tidak bersaing
Sebagai developer, saya ingin domain `*.vercel.app` tidak terindeks.

Acceptance:
- `robots` non-produksi `Disallow: /`.
- Setelah domain final aktif, `*.vercel.app` produksi dialihkan 301 ke domain final atau diblokir.

## Matriks keterlacakan

| Story | FR terkait | Halaman |
|---|---|---|
| US-01 | FR-01, FR-02 | Home |
| US-02 | FR-03 | Produk |
| US-03 | FR-04 | Harga |
| US-04 | FR-05 | Galeri |
| US-07, US-08 | FR-02, FR-06 | Semua, Kontak |
| US-09, US-10 | FR-07 | Blog |
| US-11 | FR-08 | Area layanan |
| US-14 sampai US-16 | NFR-01, 02, 06 | Seluruh situs |
