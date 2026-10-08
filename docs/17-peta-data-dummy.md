# 17. Peta Data Dummy

Dokumen ini memetakan data yang awalnya berupa contoh ke berkas dan sumber datanya, agar verifikasi dengan fakta usaha tidak perlu mencari satu per satu.

## Status (6 Oktober 2026)

Atas keputusan pemilik proyek, data contoh ditetapkan sebagai data final untuk demo. Penanda `DUMMY` sudah dihapus dan `DATA_DUMMY` di `src/lib/placeholders.ts` bernilai `false`, sehingga build produksi tidak lagi berhenti karena data contoh.

Nilai berikut tampil publik dan **belum diverifikasi** dengan fakta usaha. Verifikasi sebelum website dipakai untuk klien sungguhan:

| Nilai | Berkas |
|---|---|
| Harga material, jasa pasang, transport | `src/content/harga.ts`, dan angka contoh di dua artikel blog |
| Nama motif, ukuran, ketebalan, jawaban FAQ produk | `src/content/produk.ts` |
| Daftar proyek, lokasi, tahun | `src/content/proyek.ts`, `src/content/area.ts` |
| Klaim "berdiri sejak 2020", "puluhan proyek", NIB, deskripsi tim, garansi | `src/app/tentang-kami/page.tsx`, `src/app/layanan/pasang-plafon-pvc/page.tsx` |
| Jam operasional | `src/lib/site.ts` |
| Wilayah layanan di halaman Kontak (menyebut Cilegon) berbeda dari `areaServed` (hanya Serang) | `src/app/kontak/page.tsx`, `src/lib/site.ts` |

Email dan koordinat (`geo`) sengaja dikosongkan dan tidak ditampilkan sampai nilai aslinya diisi di `src/lib/site.ts`. Slot gambar `OG-DEFAULT`, `DETAIL-01`, `DETAIL-02`, `AREA-serang-01`, dan `BLOG-01` sampai `BLOG-03` bertanda `optional: true`: tidak dirender di produksi dan tidak menggagalkan build. Hapus tanda itu saat gambarnya tersedia.

Data klien dikumpulkan lewat [04-checklist-materi-klien.md](04-checklist-materi-klien.md). Nomor telepon, WhatsApp, dan alamat sudah asli (commit "update alamat asli").

## Data teks dan angka

| Berkas | Yang diganti | Sumber (docs/04) |
|---|---|---|
| `src/lib/site.ts` | `email`, `geo` (koordinat toko), `hours.text` dan `hours.schema`, `mapsEmbedUrl` (src dari Google Maps > Sematkan peta) | A |
| `src/lib/site.ts` | Opsional: `priceRange` (dari harga asli), `sameAs` (Instagram, Facebook, TikTok, marketplace) | C, G |
| `src/content/harga.ts` | Semua baris harga material, jasa pasang, dan transport | C |
| `src/content/produk.ts` | Nama motif, jenis motif, ukuran, ketebalan, catatan harga, 3 jawaban FAQ. Opsional `hargaMulai` dan `hargaSampai` agar schema Offer muncul | C |
| `src/content/proyek.ts` | Seluruh daftar proyek (minimal 15): judul, kecamatan, ruang, bahan, tahun, luas | E |
| `src/content/area.ts` | Ringkasan, fakta lokal, FAQ, `proyekSlugs`. Tambah wilayah hanya jika dilayani dan punya isi unik | D |
| `src/content/faq.ts` | Jawaban harga dan wilayah layanan | C, D |
| `src/content/testimoni.ts` | Kosong. Isi hanya testimoni asli dengan izin; bagiannya tampil otomatis | F |
| `src/app/tentang-kami/page.tsx` | Kalimat pembuka, cerita usaha (tahun berdiri, jumlah proyek, legalitas), deskripsi tim | A |
| `src/app/kontak/page.tsx` | Daftar wilayah layanan; samakan dengan `areaServed` di `site.ts` | D |
| `src/app/layanan/pasang-plafon-pvc/page.tsx` | 3 jawaban FAQ: garansi, cara memesan, pekerjaan yang tidak dikerjakan | C |

Klaim yang harus benar dan dapat dibuktikan: tahun berdiri, jumlah proyek, NIB, garansi. Jangan diisi dari perkiraan.

## Aset gambar

Daftar lengkap ada di [16-daftar-aset-placeholder.md](16-daftar-aset-placeholder.md). Yang belum punya `src` di `src/content/assets.ts`:

| ID | Keterangan |
|---|---|
| `OG-DEFAULT` | Gambar pratinjau tautan, 1200 x 630. Kode OG dan twitter card sudah siap; aktif otomatis saat `src` dan `alt` terisi |
| `DETAIL-01`, `DETAIL-02` | Foto detail sambungan dan finishing |
| `AREA-serang-01` | Foto proyek nyata di Serang |
| `BLOG-01` sampai `BLOG-03` | Sampul artikel |

`MOTIF-xx` dan `PROJ-xx` sudah punya berkas. Pastikan isinya sesuai dengan data motif dan proyek asli yang dimasukkan.

## Saat rilis

1. Verifikasi data pada tabel status di atas dengan fakta usaha.
2. Di Vercel Production: set `NEXT_PUBLIC_SITE_URL` ke domain final, isi `NEXT_PUBLIC_GA_ID`, hapus `SITE_STAGING`.
3. Gunakan paket yang mengizinkan penggunaan komersial (AGENTS.md bagian 10, [07-deploy-vercel-dan-domain.md](07-deploy-vercel-dan-domain.md)).
4. Jalankan checklist AGENTS.md bagian 8, lalu daftarkan sitemap di Search Console ([08-local-seo-dan-monitoring.md](08-local-seo-dan-monitoring.md)).
