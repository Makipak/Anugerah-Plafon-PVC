---
version: "0.1-provisional"
name: "Anugerah Plavon PVC"
description: "Sistem desain website company profile toko dan jasa plafon PVC di Serang. Gaya katalog material yang jujur, berbasis foto proyek nyata, tanpa efek dekoratif."
status: "Warna primer dan aksen bersifat sementara sampai logo klien diterima."
colors:
  background: "#F6F3EC"
  surface: "#FFFFFF"
  panel: "#ECE7DB"
  text-primary: "#1B1A17"
  text-secondary: "#5C5950"
  border: "#D8D2C4"
  border-strong: "#7A7568"
  primary: "#1F4A3F"
  primary-hover: "#163A31"
  primary-tint: "#E3ECE8"
  accent: "#8A4B12"
  whatsapp: "#0E7C3A"
  error: "#A32A1F"
typography:
  display: { family: "Archivo", weight: 700, size: "clamp(2.25rem, 5vw, 3.5rem)", line-height: 1.08, letter-spacing: "-0.01em" }
  heading: { family: "Archivo", weight: 700, size: "clamp(1.5rem, 3vw, 2rem)", line-height: 1.15 }
  title: { family: "Archivo", weight: 600, size: "1.25rem", line-height: 1.3 }
  body: { family: "Public Sans", weight: 400, size: "1.0625rem", line-height: 1.65 }
  label: { family: "Archivo", weight: 500, size: "0.75rem", line-height: 1.2, letter-spacing: "0.08em", transform: "uppercase" }
spacing:
  base: "4px"
  container: "1200px"
  gutter: "20px"
  section: "64px mobile, 96px desktop"
rounded:
  control: "6px"
  card: "8px"
  pill: "9999px (hanya untuk chip filter)"
elevation:
  default: "none"
  floating: "0 1px 2px rgba(27,26,23,0.16)"
motion:
  library: "Motion (paket npm: motion), import dari motion/react"
  micro: "120-200ms untuk hover, tap, fokus"
  reveal: "400-600ms untuk masuknya elemen saat scroll"
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
  properties: "transform dan opacity saja"
  rule: "Animasi harus punya tujuan. Hormati reduced motion lewat MotionConfig reducedMotion=user."
assets:
  rule: "Semua gambar dan video memakai placeholder sampai aset final dibuat pemilik proyek. Daftar dan spesifikasi ada di docs/16."
---

# DESIGN.md: Anugerah Plavon PVC

Format mengikuti pola DESIGN.md (frontmatter token, lalu panduan naratif) yang dipakai pustaka DESIGN.md di aura.build. Nilai di frontmatter adalah sumber kebenaran untuk token `@theme` Tailwind.

## 1. Arah desain

**Katalog material yang jujur.** Halaman terasa seperti katalog produk yang dirancang rapi ditambah buku catatan mandor: terang, hangat, padat informasi, dan penuh bukti. Pengunjung utama adalah pemilik rumah di Serang yang membuka dari HP, membandingkan beberapa toko, lalu menghubungi lewat WhatsApp.

Prinsip:

1. **Foto nyata lebih kuat dari dekorasi.** Plafon terpasang di ruangan sungguhan adalah hero sekaligus bukti.
2. **Informasi yang dicari harus terlihat.** Harga, varian, lokasi, dan tombol WhatsApp tidak disembunyikan di balik animasi.
3. **Satu sinyal brand yang benar-benar terkait produk**, bukan banyak efek.
4. **Tenang dan cepat.** Tanpa efek berat; performa adalah bagian dari desain.

## 2. Referensi (dibaca lewat browser, 1 Oktober 2026)

| Sumber | Yang diambil | Yang tidak diambil |
|---|---|---|
| **aura.build, halaman DESIGN.MD** | Struktur dokumen: token warna, tipografi, spasi, radius, komponen, motion, plus bagian Guardrails. Kebiasaan menulis aturan "jangan" secara eksplisit | Gaya visualnya. Perpustakaan 725 sistem itu didominasi tema SaaS dan teknologi (banyak yang gelap, serba Inter dan mono); tidak cocok untuk toko plafon |
| **21st.dev** | Konvensi shadcn/ui (kode milik sendiri, Tailwind, mudah diubah). Kategori struktural: Heroes, Galleries, Testimonials, Pricing Sections, FAQs, Maps, Footers, Navigation Menus | Komponen terpopulernya yang bergaya efek: liquid metal, vapour text, animated beams, gradient dan shader background, ASCII hero |
| **armstrong.com** (produsen plafon) | Pola industri: foto ruang nyata dengan plafon terpasang, hero polos dengan satu pesan dan satu tombol, navigasi jelas | Format korporat berskala besar dan carousel |

Catatan jujur: situs Javafon tidak bisa dibuka lewat browser saat riset, dan tampilan visual kompetitor lokal belum dianalisis. Lakukan audit visual manual kompetitor Serang sebelum finalisasi desain.

### Aturan memakai referensi: inspirasi, bukan salinan

Referensi di atas hanya menunjukkan **prinsip** (struktur dokumen, konvensi komponen, pola industri). Hasil akhir harus terlihat sebagai identitas Anugerah Plavon PVC, bukan turunan situs lain.

- Dilarang meniru tata letak, komposisi, palet, tipografi, teks, atau urutan bagian dari satu situs tertentu.
- Ambil satu prinsip dari tiap referensi, lalu terapkan dengan token dan motif milik proyek ini (palet hangat, Archivo + Public Sans, garis sambungan panel).
- Komponen dari 21st.dev atau shadcn hanya titik awal struktur. Setelah disalin, ubah tampilan, gerak, dan isinya sampai tidak dikenali sebagai komponen aslinya, dan periksa lisensinya.
- Uji jarak: letakkan halaman jadi di samping referensi. Jika orang yang melihat bisa berkata "ini mirip situs X", ubah komposisinya.
- Jangan menyalin aset (gambar, ikon, ilustrasi) dari situs referensi.

## 3. Aturan anti "AI slop"

Dilarang di seluruh situs:

- Gradien ungu-biru, gradient text, blob atau glow blur di belakang konten.
- Glassmorphism, neon di atas latar gelap, background beams, shader, liquid metal, efek teks uap.
- Baris tiga kartu identik dengan ikon di lingkaran berwarna sebagai pengganti konten.
- Semua kartu memakai `rounded-2xl` dan `shadow-lg`.
- Grid bento demi gaya, atau semua bagian rata tengah.
- Emoji sebagai ikon atau dekorasi.
- Foto stok atau gambar hasil AI yang tampil sebagai proyek klien.
- Angka atau klaim karangan ("500+ proyek", "termurah", bintang rating) tanpa data nyata.
- Teks pengisi, lorem ipsum, dan headline generik ("Solusi terbaik untuk Anda").
- Badge atau stempel yang tidak bisa dibuktikan.
- Animasi tanpa tujuan (gerak yang tidak menunjukkan status, urutan, atau perhatian) dan efek yang hanya memamerkan library.

Ganti dengan: foto asli, tabel harga, keterangan lokasi proyek, bahasa konkret, dan hierarki tipografi yang kuat.

## 4. Elemen khas: garis sambungan panel

Satu-satunya motif dekoratif adalah **garis sambungan panel** plafon PVC: garis vertikal tipis berjarak tetap, terinspirasi sambungan antar panel.

- Dibuat dengan CSS (`repeating-linear-gradient`), bukan gambar.
- Kontras sangat rendah (warna `border` pada `background`), hanya di latar hero dan pembatas bagian.
- Tidak beranimasi. Hilangkan jika mengganggu keterbacaan.

```css
.panel-seams {
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0 79px,
    var(--color-border) 79px 80px
  );
}
```

## 5. Warna

| Token | Hex | Penggunaan |
|---|---|---|
| background | `#F6F3EC` | Latar halaman (putih hangat) |
| surface | `#FFFFFF` | Kartu, tabel, input |
| panel | `#ECE7DB` | Blok pembeda, latar tabel header |
| text-primary | `#1B1A17` | Teks utama |
| text-secondary | `#5C5950` | Teks pendukung |
| border | `#D8D2C4` | Garis dekoratif dan pembatas kartu |
| border-strong | `#7A7568` | Batas input dan kontrol interaktif |
| primary | `#1F4A3F` | Tombol utama, tautan, fokus |
| primary-hover | `#163A31` | Hover tombol utama |
| primary-tint | `#E3ECE8` | Latar ringan untuk info/penanda |
| accent | `#8A4B12` | Label kecil dan penekanan teks (bukan latar besar) |
| whatsapp | `#0E7C3A` | Hanya tombol WhatsApp |
| error | `#A32A1F` | Pesan galat |

Warna `primary` dan `accent` bersifat sementara. Setelah logo diterima, turunkan keduanya dari logo dan hitung ulang kontras.

### Kontras (dihitung dengan rumus WCAG, 1 Oktober 2026)

| Pasangan | Rasio | Lulus |
|---|---|---|
| text-primary di background | 15,70 | AA dan AAA |
| text-secondary di background | 6,32 | AA |
| text-secondary di surface | 7,00 | AA |
| putih di primary | 9,95 | AA dan AAA |
| putih di whatsapp | 5,30 | AA |
| primary di background (teks/tautan) | 8,98 | AA dan AAA |
| accent di background (teks) | 6,12 | AA |
| error di background | 6,52 | AA |
| border-strong di surface (batas input) | 4,59 | Lulus 3:1 untuk komponen UI |
| border di background | 1,36 | Hanya dekoratif, jangan untuk batas input |

Hijau WhatsApp resmi terang (`#25D366`) memberi kontras 1,98 dengan teks putih dan **tidak boleh** dipakai sebagai latar tombol berteks putih. Pakai `whatsapp` di atas.

## 6. Tipografi

| Peran | Font | Catatan |
|---|---|---|
| Display dan heading | **Archivo** 600-700 | Grotesk tegas bergaya papan dan label industri; tidak generik |
| Body | **Public Sans** 400-600 | Terbaca di layar HP |
| Angka harga | Public Sans dengan `font-variant-numeric: tabular-nums` | Cek visual bahwa angka sejajar; jika font tidak mendukung, ganti font angka |

Kedua font tersedia di Google Fonts (permintaan CSS untuk Archivo dan Public Sans berhasil saat diverifikasi). Muat lewat `next/font/google`, maksimal dua keluarga, hanya bobot yang dipakai.

Aturan:

- Heading rata kiri, panjang baris teks 60-75 karakter.
- Body minimal 17 px (1,0625rem) di mobile.
- Label kecil memakai huruf kapital dengan jarak huruf, hanya untuk metadata (lokasi proyek, kode motif).
- Hindari tebal berlebihan; hierarki lewat ukuran dan jarak.

## 7. Tata letak dan komposisi

- Mobile-first, container maks 1200 px, gutter 20 px.
- Teks rata kiri. Hero desktop asimetris: teks di kiri, foto ruang dengan plafon terpasang di kanan dan dipotong penuh ke tepi.
- Ritme vertikal bagian: 64 px (mobile) dan 96 px (desktop). Variasikan latar (`background`, `surface`, `panel`) agar bagian terbaca sebagai blok berbeda tanpa garis berlebih.

### Komposisi halaman Home

| Urutan | Bagian | Bentuk |
|---|---|---|
| 1 | Hero | H1 memuat produk + Serang, satu kalimat pendukung, tombol WhatsApp, tautan "Lihat harga"; foto nyata |
| 2 | Katalog motif | Grid swatch foto motif dengan nama dan kode, bukan kartu ikon |
| 3 | Proyek terbaru | Galeri dengan keterangan "kecamatan, tahun" dan jenis ruang |
| 4 | Harga | Tabel sungguhan (rentang harga, satuan, tanggal pembaruan) |
| 5 | Cara kerja | Langkah bernomor (survei, ukur, pasang, rapikan), teks konkret |
| 6 | Testimoni | Kutipan polos dengan nama/inisial dan lokasi; tanpa bintang kecuali ulasan nyata |
| 7 | Area layanan dan FAQ | Daftar wilayah nyata, accordion pertanyaan umum |
| 8 | Kontak | Alamat teks, jam, peta, tombol WhatsApp |

## 8. Komponen

| Komponen | Spesifikasi |
|---|---|
| Tombol utama | Latar `primary`, teks putih, tinggi minimal 48 px, radius `control`; hover `primary-hover`; fokus cincin 2 px `primary` dengan offset 2 px |
| Tombol WhatsApp | Latar `whatsapp`, teks putih, label teks jelas ("Chat WhatsApp"); ikon boleh menyertai, bukan menggantikan |
| Tombol sekunder | Transparan, batas 1 px `text-primary`, teks `text-primary` |
| Kartu | Latar `surface`, batas 1 px `border`, radius `card`, tanpa bayangan; padding 20-24 px |
| Input | Latar `surface`, batas 1 px `border-strong`, label selalu terlihat, pesan galat memakai `error` dan teks, bukan warna saja |
| Tabel harga | Header `panel`, baris dipisah garis `border`, kolom angka rata kanan; di mobile berubah menjadi daftar per baris |
| Accordion FAQ | Elemen `button` dengan `aria-expanded`, penanda +/- jelas, animasi tinggi sesuai katalog bagian 10 |
| Galeri | Grid dengan rasio gambar konsisten, lazy load, keterangan di bawah gambar, lightbox sederhana dengan fokus keyboard |
| Tombol WhatsApp melayang | Di mobile berbentuk pill berteks, sudut kanan bawah dengan `safe-area-inset`, bayangan `floating`; tidak menutupi tombol utama atau teks |
| Chip filter | Satu-satunya tempat bentuk `pill` |

## 9. Fotografi dan aset placeholder

**Aset dibuat oleh pemilik proyek.** Kode tidak boleh memakai foto, ikon khusus, ilustrasi, atau video buatan sendiri maupun dari internet. Setiap tempat aset diisi **placeholder** yang jelas, dengan ID yang terdaftar di [docs/16-daftar-aset-placeholder.md](docs/16-daftar-aset-placeholder.md). Saat aset final selesai, cukup isi `src` di manifest; tata letak tidak berubah.

Aturan placeholder:

- Tampil sebagai kotak netral (`panel`) dengan arsiran halus dan label teks: ID aset, rasio, ukuran minimum, dan isi yang diminta. Bukan gambar abu-abu generik tanpa keterangan.
- Rasio dan ukuran kotak sama dengan aset final, agar tidak ada layout shift saat diganti.
- Hanya tampil di pengembangan dan pratinjau. Build produksi **gagal** jika masih ada aset yang dipakai tanpa `src`.
- Placeholder tidak memakai teks alt yang menyesatkan; alt final diisi bersama aset.
- Ikon fungsional (panah, menu, telepon) boleh memakai pustaka ikon. Ilustrasi dan ikon khas brand adalah aset, bukan kode.

Spesifikasi foto (daftar lengkap per ID ada di docs/16):

| Jenis | Isi | Rasio |
|---|---|---|
| Hero | Ruangan dengan plafon terpasang terlihat jelas, cahaya alami | 4:3 atau 3:2 |
| Proyek | Sebelum dan sesudah dari sudut yang sama | 4:3 |
| Detail | Sambungan panel, profil, dan motif dari dekat | 1:1 atau 4:3 |
| Proses | Tim bekerja di lokasi | 3:2 |

Aturan: tanpa filter atau efek, tanpa watermark pihak lain, alt text berisi isi nyata (jenis plafon, ruang, lokasi), nama berkas deskriptif. Gunakan `next/image` dengan `sizes` yang benar.

## 10. Motion dan animasi

Animasi adalah bagian dari desain, bukan tambahan. Tujuannya: mengarahkan perhatian, menunjukkan perubahan status, dan memberi kesan rapi. Bukan dekorasi yang berjalan terus.

### Library

**Motion** (dulu Framer Motion), paket npm `motion`. Dipilih karena API deklaratif untuk React, mendukung animasi masuk, hover/tap, scroll, layout, dan exit, berjalan di atas Web Animations API, serta punya dukungan reduced motion bawaan. Pemeriksaan dokumentasi: motion.dev/docs/react dan halaman instalasi, 1 Oktober 2026.

- Komponen klien: `import { motion } from "motion/react"` dengan `"use client"`.
- Server Component: `import * as motion from "motion/react-client"` agar JS yang dikirim lebih kecil.
- Bungkus aplikasi dengan `MotionConfig reducedMotion="user"`; transform dan layout animation otomatis dinonaktifkan untuk pengguna dengan Reduced Motion, sedangkan opacity dan warna tetap.
- CSS transition tetap dipakai untuk efek sederhana (warna tombol, hover kartu). Gunakan Motion saat butuh urutan, scroll, layout, exit, atau gestur.
- Tidak menambah library animasi kedua (GSAP dan sejenisnya) tanpa alasan tertulis.

### Katalog animasi yang disetujui

| Nama | Di mana | Perilaku | API Motion |
|---|---|---|---|
| Masuk hero | Home | Judul, teks, tombol muncul berurutan (opacity + geser naik 12 px, jeda 60 ms); foto memudar masuk | `initial`, `animate`, `transition.delay` |
| Garis sambungan panel menggambar | Latar hero | Garis vertikal tumbuh satu per satu dari atas, sekali saja, kontras rendah | `scaleY` atau `pathLength`, stagger |
| Reveal bagian | Semua bagian | Opacity + geser naik 16 px saat masuk viewport, **sekali** | `whileInView`, `viewport={{ once: true, margin: "-80px" }}` |
| Hover swatch motif | Katalog | Gambar membesar 1,03 di dalam bingkai `overflow-hidden`; label bergeser halus | `whileHover` atau CSS |
| Filter galeri | Galeri | Item bergeser mulus saat filter berubah | `layout` |
| Lightbox | Galeri | Masuk dan keluar dengan memudar dan skala kecil; fokus terkelola | `AnimatePresence` |
| Sebelum/sesudah | Halaman proyek | Penggeser yang bisa diseret antara dua foto; juga dapat dipakai lewat keyboard | `drag="x"` dan tombol geser alternatif |
| Accordion FAQ | FAQ | Tinggi membuka dan menutup halus | `animate={{ height: "auto" }}` dengan `AnimatePresence` |
| Progres baca | Artikel blog | Garis tipis di atas halaman mengikuti posisi scroll | `useScroll`, `scaleX` |
| Tombol WhatsApp melayang | Semua halaman | Muncul memudar setelah pengguna scroll sedikit | `AnimatePresence` |
| Gestur tombol | Semua tombol | Tekan menurunkan skala ke 0,98 | `whileTap` |

### Aturan

1. Animasikan hanya `transform` dan `opacity` agar tidak memicu layout.
2. Entrance 400-600 ms dengan easing `cubic-bezier(0.22, 1, 0.36, 1)`; mikro-interaksi 120-200 ms. Spring hanya untuk drag.
3. Reveal scroll hanya sekali per elemen; jangan mengulang saat scroll naik-turun.
4. Konten tidak boleh tersembunyi jika JavaScript gagal atau animasi tidak berjalan; keadaan awal harus aman untuk SEO dan keterbacaan (elemen tetap ada di HTML).
5. Elemen LCP (foto hero) tidak boleh menunggu animasi yang menunda tampil; pakai fade singkat atau tanpa animasi.
6. Jangan menyebabkan layout shift (CLS).
7. Reduced Motion: ganti gerak besar dengan fade; tidak ada parallax.
8. Kinerja: uji di HP mid-range; hapus animasi yang menurunkan Lighthouse di bawah target PRD.

### Dilarang

- Parallax, scroll-jacking, smooth-scroll yang membajak scroll, kursor kustom.
- Carousel otomatis, animasi berulang tanpa henti, marquee dekoratif.
- Animasi angka (counter) untuk statistik yang tidak nyata.
- Stagger panjang yang membuat pengguna menunggu, dan animasi masuk pada setiap elemen kecil.
- Efek partikel, glow bergerak, shader, dan gerak latar yang tidak membawa informasi.

## 11. Implementasi di Tailwind 4 dan Next.js

Tailwind 4 mendefinisikan token di CSS lewat `@theme` (diverifikasi di tailwindcss.com/docs/theme, v4.3).

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-background: #F6F3EC;
  --color-surface: #FFFFFF;
  --color-panel: #ECE7DB;
  --color-ink: #1B1A17;
  --color-ink-muted: #5C5950;
  --color-line: #D8D2C4;
  --color-line-strong: #7A7568;
  --color-primary: #1F4A3F;
  --color-primary-hover: #163A31;
  --color-primary-tint: #E3ECE8;
  --color-accent: #8A4B12;
  --color-whatsapp: #0E7C3A;
  --color-danger: #A32A1F;

  --font-display: var(--font-archivo), ui-sans-serif, system-ui, sans-serif;
  --font-body: var(--font-public-sans), ui-sans-serif, system-ui, sans-serif;

  --radius-control: 6px;
  --radius-card: 8px;
}
```

```tsx
// app/layout.tsx (font; verifikasi API di nextjs.org/docs saat implementasi)
import { Archivo, Public_Sans } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-archivo" });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-public-sans" });
```

Nama token di CSS (`--color-ink`, `--color-line`) menghasilkan utilitas seperti `bg-background`, `text-ink`, `border-line`. Jaga agar nama token konsisten dengan tabel warna.

### Motion di Next.js (verifikasi ulang saat implementasi)

```tsx
// components/providers.tsx
"use client";
import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

```tsx
// components/motion/reveal.tsx
"use client";
import { motion } from "motion/react";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

Catatan: halaman Accessibility di dokumentasi Motion masih menampilkan `import { MotionConfig } from "framer-motion"` pada contohnya, sedangkan panduan instalasi memakai `"motion/react"`. Pakai `"motion/react"` dan pastikan ekspor `MotionConfig` dan `useReducedMotion` tersedia di versi terpasang sebelum dipakai.

### Placeholder aset

Konten merujuk aset lewat ID; komponen `Asset` menampilkan gambar jika `src` terisi dan placeholder jika belum. Detail dan kode ada di [docs/16-daftar-aset-placeholder.md](docs/16-daftar-aset-placeholder.md).

### Memakai komponen dari 21st.dev atau shadcn

1. Pilih dari kategori struktural (Galleries, FAQs, Pricing Sections, Maps, Footers, Navigation Menus), bukan dari yang berefek.
2. Baca kode dan lisensi di halaman komponen; periksa perintah instalasi di halaman itu, jangan berasumsi.
3. Setelah disalin: hapus efek, gradien, bayangan, dan animasi; ganti warna dan radius dengan token di atas; ganti teks dan gambar dengan konten klien.
4. Jalankan checklist anti-slop bagian 13.

## 12. Aksesibilitas

- Kontras sesuai tabel bagian 5; hitung ulang bila warna diubah.
- Fokus selalu terlihat; urutan tab logis; semua kontrol dapat dipakai dengan keyboard.
- Target sentuh minimal 44 x 44 px.
- Satu H1 per halaman, heading berurutan.
- Informasi tidak hanya disampaikan lewat warna.
- Uji di layar 360, 390, 768, dan 1280 px.

## 13. Checklist anti-slop (jalankan sebelum tiap halaman dianggap selesai)

- [ ] Apakah hero memakai foto nyata milik klien, dan H1 menyebut produk dan Serang?
- [ ] Apakah harga atau cara mendapatkan harga terlihat tanpa scroll panjang?
- [ ] Adakah gradien, blur, glow, atau efek yang bisa dihapus tanpa kehilangan informasi? Jika ya, hapus.
- [ ] Adakah baris kartu ikon identik yang bisa diganti konten konkret?
- [ ] Apakah semua angka dan klaim punya dasar nyata?
- [ ] Apakah hanya ada satu motif dekoratif (garis sambungan panel) dan sangat halus?
- [ ] Apakah teks di semua bagian spesifik untuk usaha ini, bukan kalimat yang bisa ditempel di situs mana pun?
- [ ] Apakah Lighthouse mobile memenuhi target PRD setelah halaman ditambahkan?
- [ ] Apakah setiap animasi ada di katalog bagian 10 dan punya tujuan yang bisa dijelaskan?
- [ ] Apakah halaman tetap terbaca dan benar dengan Reduced Motion aktif dan JavaScript lambat?
- [ ] Apakah semua gambar memakai ID aset dari docs/16, tanpa gambar yang diambil dari luar?
- [ ] Apakah halaman tidak mirip satu referensi tertentu (uji jarak bagian 2)?

## 14. Guardrails

- Jangan mengganti palet atau font tanpa memperbarui dokumen ini dan menghitung ulang kontras.
- Jangan menambah efek visual baru tanpa alasan fungsional yang tertulis.
- Jangan memakai foto yang bukan milik klien atau tanpa izin. Sebelum aset final ada, gunakan placeholder.
- Jangan menambah animasi di luar katalog bagian 10 tanpa memperbarui dokumen ini.
- Jangan meniru referensi; ikuti aturan di bagian 2.
- Perubahan brand setelah logo diterima dicatat di bagian status frontmatter dan versi dinaikkan.
- Semua kode mengikuti [AGENTS.md](AGENTS.md).
