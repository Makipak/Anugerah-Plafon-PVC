import {
  kategoriSchema,
  merekSchema,
  produkKatalogSchema,
  seriSchema,
  type Kategori,
  type Merek,
  type ProdukKatalog,
  type Seri,
} from "./schemas";
import { assets, type AssetId, type AssetSpec } from "./assets";

// KATALOG: kategori > produk, dengan merek dan seri opsional; tiap produk punya warna, dan tiap warna punya foto.
//
// Menambah produk baru (untuk pemilik usaha):
// 1. Taruh foto di public/produk/<slug-produk>/ dengan nama <slug-warna>-1.webp, <slug-warna>-2.webp, dst.
//    Foto persegi (1:1), minimal 800x800 px, pencahayaan sama untuk semua warna. Foto pertama jadi foto utama.
// 2. Tambahkan satu objek ke produkNyata di bawah. slug produk harus unik, huruf kecil dan tanda hubung,
//    dan tidak boleh "plafon-pvc" atau "kategori" (dipakai halaman lain). Setiap warna minimal punya satu foto.
//    Isi `kategori` dengan slug dari kategoriData.
// 3. Kategori, merek, dan seri baru ditambahkan ke kategoriData, merekData, dan seriData.
//    Kategori atau merek tanpa produk tidak ditampilkan.
// 4. Ukuran dan ketebalan diisi di seri bila sama untuk satu seri; isi di produk bila berbeda.
//
// produkContoh hanya tampil di dev/preview agar tampilan merek, seri, dan warna terlihat sebelum data asli ada.
// Hapus produkContoh setelah data klien lengkap. Di produksi, produkContoh tidak pernah tampil.

// Ringkasan kategori sesuai istilah dari pemilik usaha; mohon dikonfirmasi sebelum tayang.
export const kategoriData: readonly Kategori[] = [
  { slug: "plafon-pvc", nama: "Plafon PVC", ringkasan: "Panel plafon dari PVC dalam berbagai merek, motif, dan warna." },
  { slug: "wpc", nama: "WPC", ringkasan: "WPC (Wood Plastic Composite) adalah bahan komposit dari serbuk kayu dan plastik." },
  { slug: "wpc-outdoor", nama: "WPC Outdoor", ringkasan: "WPC untuk area luar ruangan." },
  { slug: "pvc-marble-granite", nama: "PVC Marble Granite", ringkasan: "Lembaran PVC bermotif marmer dan granit." },
  { slug: "kisi-kisi", nama: "Kisi-kisi", ringkasan: "Batang berjajar untuk dekorasi dinding, plafon, atau sekat ruangan." },
  { slug: "kisi-kisi-outdoor", nama: "Kisi-kisi Outdoor", ringkasan: "Kisi-kisi untuk area luar ruangan." },
  { slug: "hollow-rangka", nama: "Hollow Rangka", ringkasan: "Pipa hollow sebagai rangka pemasangan." },
  { slug: "panel-dinding", nama: "Panel Dinding", ringkasan: "Panel dekoratif untuk melapisi dinding." },
].map((k) => kategoriSchema.parse(k));

export const merekData: readonly Merek[] = [
  { slug: "dante", nama: "DANTE" },
  { slug: "lamiwood", nama: "LAMIWOOD" },
  { slug: "javafon", nama: "JAVAFON" },
  { slug: "conwood", nama: "Conwood", ringkasan: "Merek panel berbahan serat semen (fiber cement) dengan tampilan kayu." },
].map((m) => merekSchema.parse(m));

// Nama seri sesuai daftar klien. Ejaan "Kompak" menunggu konfirmasi klien (tertulis "kompac").
export const seriData: readonly Seri[] = [
  { slug: "glossy", merek: "lamiwood", nama: "Glossy" },
  { slug: "laminate-series", merek: "lamiwood", nama: "Laminate Series" },
  { slug: "glossy", merek: "javafon", nama: "Glossy" },
  { slug: "laminate-series", merek: "javafon", nama: "Laminate Series" },
  { slug: "ultra", merek: "javafon", nama: "Ultra" },
  { slug: "kompak", merek: "javafon", nama: "Kompak" },
].map((s) => seriSchema.parse(s));

// Foto lama (motif tanpa merek) dibaca dari manifest aset agar berkasnya tetap satu.
const fotoAset = (id: AssetId): string[] => {
  const spec: AssetSpec = assets[id];
  return spec.src ? [spec.src] : [];
};

// Motif yang sudah ada sebelum katalog bermerek. Sesuai data pemilik usaha; belum dikaitkan ke merek.
const motifLama = [
  { slug: "polos-putih", nama: "Polos Putih", motif: "Polos" },
  { slug: "polos-krem", nama: "Polos Krem", motif: "Polos" },
  { slug: "kayu-jati", nama: "Kayu Jati", motif: "Kayu" },
  { slug: "kayu-walnut", nama: "Kayu Walnut", motif: "Kayu" },
  { slug: "kayu-oak", nama: "Kayu Oak", motif: "Kayu" },
  { slug: "marmer-putih", nama: "Marmer Putih", motif: "Marmer" },
  { slug: "marmer-abu", nama: "Marmer Abu", motif: "Marmer" },
  { slug: "abu-doff", nama: "Abu Doff", motif: "Polos" },
] as const;
const motifLamaIds: AssetId[] = [
  "MOTIF-01", "MOTIF-02", "MOTIF-03", "MOTIF-04",
  "MOTIF-05", "MOTIF-06", "MOTIF-07", "MOTIF-08",
];

export const produkNyata: readonly ProdukKatalog[] = motifLama.map((m, i) =>
  produkKatalogSchema.parse({
    slug: m.slug,
    nama: m.nama,
    kode: `M${String(i + 1).padStart(2, "0")}`,
    kategori: "plafon-pvc",
    motif: m.motif,
    ukuran: "25 cm x 4 m",
    tebal: "8 mm",
    warna: [{ slug: "standar", nama: m.nama, foto: fotoAset(motifLamaIds[i] ?? "MOTIF-01") }],
  }),
);

// Contoh: foto kosong ("") tampil sebagai placeholder berlabel.
const warnaContoh = (nama: string, jumlahFoto = 3) => ({
  slug: nama.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  nama,
  foto: Array.from({ length: jumlahFoto }, () => ""),
});

// Ukuran kisi-kisi (5x5, 5x10) dan hollow (2x4, 4x4) memakai satuan cm: asumsi, menunggu konfirmasi pemilik.
type Contoh = Omit<ProdukKatalog, "contoh">;
const dataContoh: Contoh[] = [
  // Plafon PVC
  { slug: "dante-contoh-kayu", nama: "Contoh Motif Kayu", kategori: "plafon-pvc", merek: "dante", motif: "Kayu", warna: [warnaContoh("Cokelat"), warnaContoh("Natural"), warnaContoh("Abu")] },
  { slug: "dante-contoh-polos", nama: "Contoh Motif Polos", kategori: "plafon-pvc", merek: "dante", motif: "Polos", warna: [warnaContoh("Putih"), warnaContoh("Krem", 2)] },
  { slug: "lamiwood-glossy-contoh-marmer", nama: "Contoh Motif Marmer", kategori: "plafon-pvc", merek: "lamiwood", seri: "glossy", motif: "Marmer", warna: [warnaContoh("Putih"), warnaContoh("Abu")] },
  { slug: "lamiwood-laminate-contoh-kayu", nama: "Contoh Motif Kayu", kategori: "plafon-pvc", merek: "lamiwood", seri: "laminate-series", motif: "Kayu", warna: [warnaContoh("Jati"), warnaContoh("Walnut"), warnaContoh("Oak")] },
  { slug: "javafon-glossy-contoh-marmer", nama: "Contoh Motif Marmer", kategori: "plafon-pvc", merek: "javafon", seri: "glossy", motif: "Marmer", warna: [warnaContoh("Putih"), warnaContoh("Hitam")] },
  { slug: "javafon-laminate-contoh-kayu", nama: "Contoh Motif Kayu", kategori: "plafon-pvc", merek: "javafon", seri: "laminate-series", motif: "Kayu", warna: [warnaContoh("Cokelat Tua"), warnaContoh("Cokelat Muda")] },
  { slug: "javafon-ultra-contoh-polos", nama: "Contoh Motif Polos", kategori: "plafon-pvc", merek: "javafon", seri: "ultra", motif: "Polos", warna: [warnaContoh("Putih"), warnaContoh("Krem"), warnaContoh("Abu")] },
  { slug: "javafon-kompak-contoh-kayu", nama: "Contoh Motif Kayu", kategori: "plafon-pvc", merek: "javafon", seri: "kompak", motif: "Kayu", warna: [warnaContoh("Natural"), warnaContoh("Cokelat")] },
  // Kategori lain
  { slug: "wpc-contoh-panel", nama: "Contoh Panel WPC", kategori: "wpc", motif: "Kayu", warna: [warnaContoh("Cokelat"), warnaContoh("Abu"), warnaContoh("Hitam")] },
  { slug: "wpc-outdoor-contoh", nama: "Contoh WPC Outdoor", kategori: "wpc-outdoor", motif: "Kayu", warna: [warnaContoh("Teak"), warnaContoh("Abu")] },
  { slug: "pvc-marble-contoh", nama: "Contoh Marble", kategori: "pvc-marble-granite", motif: "Marmer", warna: [warnaContoh("Putih"), warnaContoh("Hitam"), warnaContoh("Abu")] },
  { slug: "pvc-granite-contoh", nama: "Contoh Granite", kategori: "pvc-marble-granite", motif: "Granit", warna: [warnaContoh("Hitam"), warnaContoh("Cokelat")] },
  { slug: "kisi-kisi-contoh-5x5", nama: "Contoh Kisi-kisi 5x5", kategori: "kisi-kisi", ukuran: "5 x 5 cm", motif: "Kayu", warna: [warnaContoh("Cokelat"), warnaContoh("Natural")] },
  { slug: "kisi-kisi-contoh-5x10", nama: "Contoh Kisi-kisi 5x10", kategori: "kisi-kisi", ukuran: "5 x 10 cm", motif: "Kayu", warna: [warnaContoh("Cokelat"), warnaContoh("Natural")] },
  { slug: "kisi-kisi-outdoor-contoh-5x5", nama: "Contoh Kisi-kisi Outdoor 5x5", kategori: "kisi-kisi-outdoor", ukuran: "5 x 5 cm", motif: "Kayu", warna: [warnaContoh("Teak"), warnaContoh("Abu")] },
  { slug: "kisi-kisi-outdoor-contoh-5x10", nama: "Contoh Kisi-kisi Outdoor 5x10", kategori: "kisi-kisi-outdoor", ukuran: "5 x 10 cm", motif: "Kayu", warna: [warnaContoh("Teak"), warnaContoh("Abu")] },
  { slug: "hollow-contoh-2x4", nama: "Contoh Hollow 2x4", kategori: "hollow-rangka", ukuran: "2 x 4 cm", warna: [warnaContoh("Standar", 2)] },
  { slug: "hollow-contoh-4x4", nama: "Contoh Hollow 4x4", kategori: "hollow-rangka", ukuran: "4 x 4 cm", warna: [warnaContoh("Standar", 2)] },
  { slug: "conwood-contoh-panel", nama: "Contoh Panel Dinding", kategori: "panel-dinding", merek: "conwood", motif: "Kayu", warna: [warnaContoh("Natural"), warnaContoh("Cokelat")] },
];
export const produkContoh: readonly ProdukKatalog[] = dataContoh.map((p) =>
  produkKatalogSchema.parse({ ...p, contoh: true }),
);

// Pemeriksaan acuan silang saat modul dimuat: salah isi data menghentikan dev/build dengan pesan jelas.
function validasi(): void {
  const galat: string[] = [];
  const merekSlugs = new Set(merekData.map((m) => m.slug));
  if (merekSlugs.size !== merekData.length) galat.push("slug merek ganda");

  const seriKunci = new Set<string>();
  for (const s of seriData) {
    if (!merekSlugs.has(s.merek)) galat.push(`seri ${s.slug}: merek ${s.merek} tidak ada`);
    const kunci = `${s.merek}/${s.slug}`;
    if (seriKunci.has(kunci)) galat.push(`seri ganda: ${kunci}`);
    seriKunci.add(kunci);
  }

  const kategoriSlugs = new Set(kategoriData.map((k) => k.slug));
  if (kategoriSlugs.size !== kategoriData.length) galat.push("slug kategori ganda");

  const slugPakai = new Set<string>(["plafon-pvc", "kategori"]);
  for (const p of [...produkNyata, ...produkContoh]) {
    if (slugPakai.has(p.slug)) galat.push(`slug produk ganda atau dicadangkan: ${p.slug}`);
    slugPakai.add(p.slug);
    if (!kategoriSlugs.has(p.kategori)) galat.push(`produk ${p.slug}: kategori ${p.kategori} tidak ada`);
    if (p.seri && !p.merek) galat.push(`produk ${p.slug}: seri tanpa merek`);
    if (p.merek && !merekSlugs.has(p.merek)) galat.push(`produk ${p.slug}: merek ${p.merek} tidak ada`);
    if (p.merek && p.seri && !seriKunci.has(`${p.merek}/${p.seri}`)) galat.push(`produk ${p.slug}: seri ${p.seri} tidak ada di merek ${p.merek}`);
    const warnaSlugs = new Set(p.warna.map((w) => w.slug));
    if (warnaSlugs.size !== p.warna.length) galat.push(`produk ${p.slug}: slug warna ganda`);
  }
  for (const p of produkNyata) {
    for (const w of p.warna) {
      if (w.foto.some((f) => !f.startsWith("/"))) galat.push(`produk ${p.slug}/${w.slug}: foto harus berupa jalur berawalan "/"`);
    }
  }
  if (galat.length > 0) throw new Error(`Data katalog tidak valid:\n- ${galat.join("\n- ")}`);
}
validasi();
