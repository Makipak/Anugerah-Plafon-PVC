# Perubahan Bahasa Situs

| File | Teks lama | Teks baru | Alasan singkat |
|---|---|---|---|
| `src/app/page.tsx` | “Plafon PVC di Serang, Banten: toko dan jasa pasang” | “Plafon PVC Serang” | H1 lebih ringkas dan mempertahankan kata kunci utama. |
| `src/app/page.tsx` | Deskripsi hero lama | “Toko dan jasa pasang plafon PVC di Serang, Banten. Pilih motif dan konsultasikan kebutuhan pemasangan langsung lewat WhatsApp.” | Menggunakan kalimat yang ditetapkan klien. |
| `src/app/page.tsx` | Kartu keunggulan hanya berisi label; “Tidak merambat api” | Tiga kartu memiliki deskripsi; “Tidak mudah menyulut api” | Menambahkan penjelasan dan menghapus klaim mutlak sesuai arahan klien. |
| `src/app/page.tsx` | Pengantar motif hanya meminta pengunjung menyebut kode | “Tersedia dalam berbagai warna dan motif: polos, kayu, dan marmer. Cocok untuk hunian, perkantoran, dan tempat ibadah. Sebutkan kode motif saat chat agar tim dapat mengecek ketersediaannya.” | Menjelaskan pilihan dan memakai daftar jenis tempat yang konsisten. |
| `src/app/page.tsx` | CTA beranda memakai judul dan teks bawaan | “Wujudkan interior hunian yang lebih cantik dan berwarna”; “Pilih model dan motif sesuai karakter ruangan Anda, lalu konsultasikan lewat WhatsApp.”; tombol “Lihat produk” | Memakai ajakan yang spesifik dan menambahkan jalur ke produk. |
| `src/app/page.tsx` | “Dari survei sampai rapi”; “Datang atau chat” | “Dari survei hingga pemasangan selesai”; “Kunjungi toko atau chat kami” | Memperjelas proses dan tindakan yang tersedia. |
| `src/app/layout.tsx` | Judul dan deskripsi situs lama | Judul bawaan “Plafon PVC Serang” dengan template brand yang sudah ada dan deskripsi toko/jasa pasang yang diperbarui | Memperjelas identitas layanan dan lokasi pada metadata tanpa mengulang nama brand. |
| `src/content/produk.ts` | Ringkasan produk lama | “Plafon PVC dibuat dari polivinil klorida (Polyvinyl Chloride), bahan plastik yang kuat dan ringan. Panelnya dipasang pada rangka dan tersedia sebagai material saja atau dengan jasa pasang.” | Menggunakan definisi bahan yang ditetapkan klien. |
| `src/content/produk.ts` | Jawaban area menyebut daftar ruang yang berbeda | “Plafon PVC cocok untuk hunian, perkantoran, dan tempat ibadah.” | Menyamakan kategori dengan pengantar motif di beranda. |
| `src/content/produk.ts` | Jawaban waktu pemasangan menyebut satu sampai dua hari | Waktu disebut bergantung pada ukuran dan kondisi ruangan; pengunjung diminta berkonsultasi | Menghindari angka durasi yang belum dikonfirmasi. |
| `src/content/faq.ts` | Jawaban berulang memakai “perkiraan luas”, “lewat”, dan “tanya” | Kalimat diringkas dengan “ukuran”, “melalui”, dan “berkonsultasi”; FAQ memakai “perbedaan” | Mengurangi pengulangan dan merapikan pilihan kata. |
| `src/content/area.ts` | Klaim proyek terbanyak dan waktu survei tertentu | Keterangan jangkauan bergantung pada lokasi/jadwal; ajakan mengirim ukuran dan foto | Mengganti rincian yang perlu verifikasi dengan panduan konsultasi. |
| `src/app/area-layanan/page.tsx` dan `src/app/area-layanan/[kota]/page.tsx` | Metadata dan pengantar bertele-tele | Metadata serta judul bagian diringkas; ajakan menghubungi tim dibuat lebih jelas | Memperjelas cakupan halaman dan cara membahas layanan. |
| `src/app/produk/page.tsx` dan `src/app/produk/plafon-pvc/page.tsx` | Metadata, pengantar, dan tombol generik | Copy menekankan pilihan motif, spesifikasi, dan tindakan seperti “Lihat spesifikasi produk” serta “Tanyakan ketersediaan” | Membuat tindakan pada halaman produk lebih konkret. |
| `src/app/layanan/pasang-plafon-pvc/page.tsx` | Metadata dan CTA umum; rincian garansi tanpa konfirmasi | Copy jasa pasang diringkas; FAQ garansi meminta pengunjung memastikan ketersediaan dan syarat | Menghindari janji garansi yang belum dipastikan. |
| `src/app/layanan/harga-dan-biaya-pasang/page.tsx` | Pengantar konsultasi lama | Ajakan menyiapkan lokasi, ukuran, motif, dan foto kondisi plafon | Memberi langkah persiapan yang mudah dipahami tanpa menyebut harga. |
| `src/app/galeri/page.tsx` dan `src/app/blog/page.tsx` | Judul, deskripsi, dan pengantar generik | Copy menjelaskan isi galeri atau panduan serta tindakan yang dapat dilakukan | Membuat manfaat halaman lebih langsung. |
| `src/app/tentang-kami/page.tsx` | “Berdiri sejak 2020”, “puluhan proyek”, dan “NIB tersedia atas permintaan” | Informasi usaha dibatasi pada penyediaan panel plafon PVC dan jasa pasang | Menghapus klaim usaha yang perlu dikonfirmasi. |
| `src/app/kontak/page.tsx` | Pengantar, label, dan petunjuk peta lama | Copy konsultasi diringkas; “Area layanan” menjadi “Wilayah layanan”; petunjuk peta menjadi “Lihat lokasi di Google Maps” | Memperjelas informasi kontak dan aksi pengunjung. |
| `src/app/not-found.tsx` | Pesan halaman tidak ditemukan dan tombol lama | Pesan diperjelas; tombol menjadi “Buka beranda” dan “Lihat produk” | Membantu pengunjung menentukan langkah berikutnya. |
| `src/lib/site.ts` | Tagline tanpa tanda titik dan pesan WhatsApp memakai “tanya” atau “konsultasi” | Tagline diakhiri titik; pesan siap kirim memakai “berkonsultasi” dan “menanyakan” | Merapikan kalimat dan menyamakan nada. |
| `src/lib/site.ts` | “Jl. Ayip Usman, Unyur” | “Jl. Ayip Usman No. 11, Unyur”; landmark “Seberang gerbang Perumahan Bumi Agung Permai 1 (BAP 1)” | Memakai alamat dan patokan yang ditetapkan klien. |
| `src/components/sections/cta-band.tsx` | Deskripsi CTA selalu statis | Menambahkan prop opsional `description` dengan teks bawaan yang sama | CTA beranda dapat memakai copy khusus tanpa mengubah CTA halaman lain. |
| `src/components/sections/contact-block.tsx`, `src/components/layout/footer.tsx`, dan `src/app/kontak/page.tsx` | Patokan alamat tidak ditampilkan | Landmark ditampilkan satu baris di bawah alamat | Memudahkan pengunjung mengenali lokasi toko. |
| `src/components/sections/steps.tsx` | Langkah “Ukur”, “Pasang”, dan “Rapikan” dengan uraian singkat | “Pengukuran”, “Pemasangan”, dan “Pemeriksaan akhir” dengan instruksi yang lebih jelas | Menyamakan istilah dan memperjelas proses. |
| `src/components/sections/video-section.tsx` | Pengantar “Ketuk video” dan judul “Lihat hasil pemasangan langsung” | Pengantar “Pilih video” dan judul “Cuplikan pemasangan plafon PVC” | Menggunakan instruksi yang jelas dan tidak menyiratkan video sudah tersedia. |
| `src/components/layout/footer.tsx` | “Pusat Plafon PVC” dan “Area layanan” | “Toko plafon PVC” dan “Wilayah layanan” | Menggunakan istilah yang lebih langsung dan konsisten. |
| `src/content/blog/cara-menghitung-biaya-plafon-pvc-3x3.mdx` | “punya”, “lewat WhatsApp”, dan beberapa kalimat panjang | Ejaan dan kalimat dirapikan; langkah pengukuran serta angka tetap | Meningkatkan keterbacaan tanpa mengubah fakta, angka, atau susunan judul. |
| `src/content/blog/plafon-pvc-vs-gypsum.mdx` | “tukang gypsum yang berpengalaman” dan ajakan “untuk mulai” | “penyedia jasa yang menangani material tersebut” dan langkah berikutnya dibuat jelas | Mengganti kata informal dan memperjelas ajakan. |
| `src/content/blog/harga-plafon-pvc-per-meter-serang.mdx` | “motif yang diminati” dan kalimat konsultasi lama | “motif pilihan” dan kalimat konsultasi diringkas | Menyamakan istilah dan memperjelas proses. |

## Perlu dikonfirmasi klien

- Klaim “tahan air”, ketahanan terhadap kelembapan, serta perbandingan ketahanan air PVC dengan gypsum.
- Klaim PVC tidak mudah menyulut api atau cenderung padam sendiri saat sumber api hilang.
- Klaim bahwa PVC tidak dimakan rayap, mudah dibersihkan, serta klaim bahan “kuat dan ringan” dan pemasangan lebih cepat.
- Apakah usaha berdiri sejak 2020, jumlah proyek yang pernah dikerjakan, dan ketersediaan atau nomor NIB.
- Garansi pemasangan, syaratnya, dan masa berlakunya.
- Durasi pekerjaan, jadwal survei, dan wilayah layanan yang saat ini masih dicantumkan di situs.
- Jam operasional, ukuran dan ketebalan panel, serta data proyek yang tampil pada galeri.
- Ketersediaan izin untuk setiap testimoni yang akan ditampilkan; bagian testimoni saat ini hanya muncul jika datanya berizin.
