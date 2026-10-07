# 01. Project Brief

## Ringkasan

| Item | Isi |
|---|---|
| Klien | Anugerah Plafon PVC, Serang, Banten |
| Jenis | Website company profile |
| Prioritas | SEO (lokal + nasional), konversi lewat WhatsApp |
| Hosting | Vercel (sementara) |
| Developer | Hans |
| Tanggal mulai | Oktober 2026 |

## Tujuan

1. Muncul di pencarian lokal seperti "plafon pvc serang" dan "jasa pasang plafon pvc serang".
2. Mengubah pengunjung menjadi chat WhatsApp (konversi utama).
3. Membangun kepercayaan: galeri proyek asli, testimoni, harga transparan.
4. Fondasi untuk traffic jangka panjang lewat blog.

## Keputusan yang sudah diambil

| Topik | Keputusan | Alasan |
|---|---|---|
| Framework | Next.js App Router + Tailwind | SSG, metadata API, sitemap, JSON-LD native, cocok Vercel |
| Konten | Dikelola developer (MDX/TS), tanpa CMS | Paling cepat dan murah; struktur dipisah agar mudah pindah ke CMS |
| Target SEO | Lokal Serang/Banten, produk nasional, blog, konversi WA | Sesuai permintaan |
| Bahasa | Indonesia saja | Audiens lokal |
| Backend/DB | Tidak ada | Situs statis |

## Keputusan yang masih terbuka

- [ ] Produk dan layanan yang benar-benar dijual (PVC saja atau juga gypsum, wall panel, WPC)
- [ ] Wilayah layanan resmi
- [ ] Nama domain dan atas nama siapa didaftarkan (disarankan atas nama klien)
- [ ] Scope SEO berkelanjutan (artikel bulanan, monitoring) dan biayanya
- [ ] Desain: langsung coding atau mockup Figma dulu
- [ ] Siapa yang memelihara konten setelah live

## Di luar scope (kecuali disepakati)

- Toko online / keranjang belanja
- Admin panel atau CMS
- Multi bahasa
- Iklan berbayar (Google Ads)

## Temuan riset yang memengaruhi desain

- Halaman 1 Google untuk keyword lokal didominasi sosmed, OLX, dan direktori; website kompetitor lemah secara teknis.
- Pertanyaan pengguna hampir semuanya soal **harga**, jadi harga (rentang) dan contoh hitungan wajib tampil.
- Kompetitor tidak memakai schema LocalBusiness dan jarang memberi alt text.

Detail: [riset-seo-anugerah-plavon-pvc.md](../riset-seo-anugerah-plavon-pvc.md)

## Risiko

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Materi klien lambat atau minim | Web tidak bisa launch; kualitas konten rendah | Checklist di dokumen 04, tenggat jelas, minta foto asli |
| Ekspektasi ranking berlebihan | Sengketa dengan klien | Tulis di kontrak: janji fondasi SEO, bukan posisi tertentu |
| Vercel Hobby untuk situs bisnis | Risiko akun (penggunaan komersial) | Cek ToS terbaru; pindah ke Pro atau alternatif saat berbayar |
| Domain atas nama developer | Sulit diserahkan | Daftarkan atas nama klien |
| Halaman area layanan duplikat | Dianggap doorway page | Isi unik per wilayah, hanya wilayah yang dilayani |
| Konten basi | Kalah kesegaran | Jadwalkan update harga dan artikel tahunan |
