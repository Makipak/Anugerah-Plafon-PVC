# 08. Local SEO dan Monitoring

Untuk keyword lokal, Google Business Profile (GBP) sering tampil lebih awal dari hasil organik. Faktor utama pemeringkatan lokal menurut panduan Google dan studi industri: **relevansi**, **jarak**, dan **keterkenalan (prominence)**. Jarak tidak bisa diubah; dua lainnya bisa diperbaiki.

## 1. Google Business Profile

### Pembuatan

- [ ] Buat atau klaim profil atas akun Google milik klien (klien jadi Owner).
- [ ] Nama sesuai papan nama asli (jangan menambahkan keyword ke nama usaha; melanggar pedoman dan berisiko ditangguhkan).
- [ ] Kategori utama sesuai inti usaha (pilih dari daftar Google yang paling mendekati, mis. toko bahan bangunan/kontraktor); tambahkan kategori sekunder yang relevan.
- [ ] Alamat dan titik peta akurat. Jika tidak melayani di tempat, ikuti aturan area layanan.
- [ ] Jam operasional, nomor telepon/WhatsApp, URL website.
- [ ] Verifikasi sesuai metode yang ditawarkan Google.

### Pengisian

- [ ] Deskripsi usaha (ringkas, jujur, menyebut produk dan wilayah secara natural)
- [ ] Produk/layanan dengan foto
- [ ] Foto asli: tampak depan, dalam toko, tim, dan hasil proyek (tambah rutin)
- [ ] Posting berkala (proyek terbaru, artikel blog)
- [ ] Jawab pertanyaan yang masuk

### Review

- Minta review dari pelanggan nyata lewat link langsung ke form review (kirim via WhatsApp setelah proyek selesai).
- **Jangan** membeli, menukar dengan imbalan, atau menulis review palsu. Melanggar kebijakan dan berisiko hukuman.
- Balas semua review, termasuk yang negatif, dengan sopan.

## 2. Konsistensi NAP

Nama, alamat, dan telepon harus **identik** di: website, GBP, sosmed, dan direktori.

| Tempat | Status | Catatan |
|---|---|---|
| Website (footer + kontak, teks biasa) | [ ] | Jangan hanya gambar |
| GBP | [ ] | |
| Instagram / Facebook / TikTok | [ ] | Cantumkan di bio |
| Direktori lokal | [ ] | Lihat bagian 3 |

## 3. Sitasi dan backlink lokal

Dari riset SERP, direktori seperti jasajasa.com dan OLX muncul di hasil. Prioritas:

1. Direktori bisnis yang kredibel dan relevan dengan Indonesia (periksa kualitasnya; hindari direktori spam).
2. Profil sosmed klien dengan tautan ke website.
3. Kerja sama dengan arsitek, kontraktor, developer perumahan, atau toko interior di Serang (saling rujuk dan tautan).
4. Liputan atau konten proyek yang bisa dibagikan komunitas lokal.

Hindari: beli paket backlink massal, jaringan blog privat, atau spam komentar.

## 4. Sinkronisasi dengan website

- `sameAs` di schema LocalBusiness berisi URL GBP, IG, FB, TikTok.
- Website menampilkan embed peta dan link ke profil GBP/review.
- Posting GBP menaut ke halaman relevan (produk, artikel).

## 5. Monitoring

### Alat

| Alat | Fungsi |
|---|---|
| Google Search Console | Query, impresi, klik, posisi, masalah indexing |
| GA4 atau Vercel Analytics | Kunjungan, sumber traffic, klik WhatsApp |
| GBP Performance | Tampilan profil, klik telepon/WA/rute |
| PageSpeed Insights | Core Web Vitals |
| Rich Results Test | Validasi schema |

### Event yang dilacak

| Event | Cara |
|---|---|
| Klik tombol WhatsApp | Event GA4 `whatsapp_click` dengan parameter halaman dan produk |
| Klik telepon | Event `phone_click` |
| Klik rute/peta | Event `map_click` |
| Kirim formulir (jika ada) | Event `form_submit` |

### Metrik bulanan untuk klien

| Metrik | Sumber |
|---|---|
| Impresi dan klik organik | Search Console |
| Posisi rata-rata keyword Tier 1 | Search Console / cek manual |
| Jumlah klik WhatsApp | GA4 |
| Tampilan dan aksi GBP | GBP Performance |
| Jumlah review baru dan rating | GBP |
| Halaman yang terindeks | Search Console |

### Format laporan bulanan

1. Ringkasan (3-5 kalimat, bahasa awam).
2. Angka kunci bulan ini vs bulan lalu.
3. Yang dikerjakan (artikel, perbaikan teknis, posting GBP).
4. Temuan dan rekomendasi bulan depan.

## 6. Ekspektasi realistis

- Indeks awal bisa dalam hitungan hari hingga beberapa minggu; ranking stabil biasanya butuh beberapa bulan.
- Keyword lokal lebih cepat daripada keyword nasional.
- Jangan menjanjikan posisi tertentu ke klien; janjikan proses, fondasi teknis, dan pelaporan.

## 7. Tinjauan berkala

| Waktu | Tinjauan |
|---|---|
| Minggu ke-2 setelah launch | Cek indexing, sitemap, error, dan query pertama |
| Bulan ke-1 | Laporan pertama, sesuaikan title/meta halaman berkinerja rendah |
| Bulan ke-3 | Tinjau keyword map dengan data Search Console, rencanakan konten berikutnya |
| Tiap tahun | Audit penuh dan pembaruan artikel harga |
