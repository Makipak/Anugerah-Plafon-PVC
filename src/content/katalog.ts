import {
  kategoriSchema,
  merekSchema,
  produkKatalogSchema,
  type Kategori,
  type Merek,
  type ProdukKatalog,
  type Seri,
} from "./schemas";
// KATALOG: kategori > produk, dengan merek dan seri opsional; tiap produk punya warna, dan tiap warna punya foto.
//
// Satu folder jenis produk dengan foto menjadi satu produk. Masukkan semua foto folder ke `foto`;
// folder atau data tanpa foto tidak masuk katalog. File thumbnail hanya dipakai sebagai thumbnail.
export const kategoriData: readonly Kategori[] = [
  { slug: "plafon-pvc", nama: "PVC", ringkasan: "Panel plafon dari PVC dalam berbagai merek, motif, dan warna.", thumbnail: "/produk/PVC/PVC.png" },
  { slug: "lis-dinding-6cm", nama: "LIS DINDING 6CM", thumbnail: "/produk/LIS-DINDING-6CM/LIS-DINDING-6CM-1.png" },
  { slug: "lis-dinding-laminate", nama: "LIS DINDING LAMINATE", thumbnail: "/produk/LIS-DINDING-LAMINATE/LIS-DINDING-LAMINATE-1.png" },
  { slug: "lis-wallboard", nama: "LIS WALLBOARD", thumbnail: "/produk/LIS-WALLBOARD/LIS-WALLBOARD-1.jpeg" },
  { slug: "wallboard-40cm", nama: "WALLBOARD 40CM", thumbnail: "/produk/WALLBOARD-40CM/WALLBOARD-40CM-1.png" },
  { slug: "wpc-outdoor", nama: "WPC Outdoor", ringkasan: "Panel WPC untuk area luar ruangan.", thumbnail: "/produk/WPC-Outdoor/WPC-OD-Thum.jpg" },
].map((k) => kategoriSchema.parse(k));

export const merekData: readonly Merek[] = [
  { slug: "dante", nama: "DANTE", thumbnail: "/produk/PVC/DANTE/DANTE-1.jpg", kategori: "plafon-pvc" },
  { slug: "lamiwood-glossy", nama: "LAMIWOOD GLOSSY", thumbnail: "/produk/PVC/LAMIWOOD-GLOSSY/LAMI-GLOSS-1.jpeg", kategori: "plafon-pvc" },
  { slug: "lamiwood-laminatedoff-series", nama: "LAMIWOOD LAMINATEDOFF SERIES", thumbnail: "/produk/PVC/LAMIWOOD-LAMINATEDOFF-SERIES/DOFF-1.png", kategori: "plafon-pvc" },
  { slug: "safir-laminatedoff-series", nama: "SAFIR LAMINATEDOFF SERIES", thumbnail: "/produk/PVC/SAFIR-LAMINATEDOFF-SERIES/SAFIR-1.png", kategori: "plafon-pvc" },
].map((m) => merekSchema.parse(m));

export const seriData: readonly Seri[] = [];

function fotoBerurutan(folder: string, prefix: string, jumlah: number, ekstensi: (nomor: number) => string): string[] {
  return Array.from({ length: jumlah }, (_, index) => {
    const nomor = index + 1;
    return `/produk/${folder}/${prefix}${nomor}.${ekstensi(nomor)}`;
  });
}

function produkFolder(data: {
  slug: string;
  nama: string;
  kategori: string;
  foto: string[];
  merek?: string;
}): ProdukKatalog {
  return produkKatalogSchema.parse({
    slug: data.slug,
    nama: data.nama,
    kategori: data.kategori,
    ...(data.merek ? { merek: data.merek } : {}),
    warna: [{ slug: "foto-produk", nama: "Foto produk", foto: data.foto }],
  });
}

const produkPVC: ProdukKatalog[] = [
  produkFolder({
    slug: "dante",
    nama: "DANTE",
    kategori: "plafon-pvc",
    merek: "dante",
    foto: fotoBerurutan("PVC/DANTE", "DANTE-", 9, () => "jpg"),
  }),
  produkFolder({
    slug: "lamiwood-glossy",
    nama: "LAMIWOOD GLOSSY",
    kategori: "plafon-pvc",
    merek: "lamiwood-glossy",
    foto: fotoBerurutan("PVC/LAMIWOOD-GLOSSY", "LAMI-GLOSS-", 30, (nomor) =>
      nomor === 6 ? "jpg" : nomor === 27 ? "png" : nomor >= 28 ? "jpg" : "jpeg",
    ),
  }),
  produkFolder({
    slug: "lamiwood-laminatedoff-series",
    nama: "LAMIWOOD LAMINATEDOFF SERIES",
    kategori: "plafon-pvc",
    merek: "lamiwood-laminatedoff-series",
    foto: fotoBerurutan("PVC/LAMIWOOD-LAMINATEDOFF-SERIES", "DOFF-", 11, () => "png"),
  }),
  produkFolder({
    slug: "safir-laminatedoff-series",
    nama: "SAFIR LAMINATEDOFF SERIES",
    kategori: "plafon-pvc",
    merek: "safir-laminatedoff-series",
    foto: fotoBerurutan("PVC/SAFIR-LAMINATEDOFF-SERIES", "SAFIR-", 5, () => "png"),
  }),
];

const produkPanelDinding: ProdukKatalog[] = [
  produkFolder({
    slug: "lis-dinding-6cm",
    nama: "LIS DINDING 6CM",
    kategori: "lis-dinding-6cm",
    foto: fotoBerurutan("LIS-DINDING-6CM", "LIS-DINDING-6CM-", 7, () => "png"),
  }),
  produkFolder({
    slug: "lis-dinding-laminate",
    nama: "LIS DINDING LAMINATE",
    kategori: "lis-dinding-laminate",
    foto: fotoBerurutan("LIS-DINDING-LAMINATE", "LIS-DINDING-LAMINATE-", 4, () => "png"),
  }),
  produkFolder({
    slug: "lis-wallboard",
    nama: "LIS WALLBOARD",
    kategori: "lis-wallboard",
    foto: fotoBerurutan("LIS-WALLBOARD", "LIS-WALLBOARD-", 4, () => "jpeg"),
  }),
  produkFolder({
    slug: "wallboard-40cm",
    nama: "WALLBOARD 40CM",
    kategori: "wallboard-40cm",
    foto: fotoBerurutan("WALLBOARD-40CM", "WALLBOARD-40CM-", 8, () => "png"),
  }),
];

const produkWpcOutdoor = produkFolder({
  slug: "wpc-outdoor",
  nama: "WPC Outdoor",
  kategori: "wpc-outdoor",
  foto: fotoBerurutan("WPC-Outdoor", "WPC-OD-", 5, () => "png"),
});

export const produkNyataLengkap: readonly ProdukKatalog[] = [
  ...produkPVC,
  ...produkPanelDinding,
  produkWpcOutdoor,
];

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
  for (const p of produkNyataLengkap) {
    if (slugPakai.has(p.slug)) galat.push(`slug produk ganda atau dicadangkan: ${p.slug}`);
    slugPakai.add(p.slug);
    if (!kategoriSlugs.has(p.kategori)) galat.push(`produk ${p.slug}: kategori ${p.kategori} tidak ada`);
    if (p.seri && !p.merek) galat.push(`produk ${p.slug}: seri tanpa merek`);
    if (p.merek && !merekSlugs.has(p.merek)) galat.push(`produk ${p.slug}: merek ${p.merek} tidak ada`);
    if (p.merek && p.seri && !seriKunci.has(`${p.merek}/${p.seri}`)) galat.push(`produk ${p.slug}: seri ${p.seri} tidak ada di merek ${p.merek}`);
    const warnaSlugs = new Set(p.warna.map((w) => w.slug));
    if (warnaSlugs.size !== p.warna.length) galat.push(`produk ${p.slug}: slug warna ganda`);
  }
  for (const p of produkNyataLengkap) {
    for (const w of p.warna) {
      if (w.foto.length === 0) galat.push(`produk ${p.slug}/${w.slug}: harus memiliki foto`);
      if (w.foto.some((f) => !f.startsWith("/"))) galat.push(`produk ${p.slug}/${w.slug}: foto harus berupa jalur berawalan "/"`);
    }
  }
  if (galat.length > 0) throw new Error(`Data katalog tidak valid:\n- ${galat.join("\n- ")}`);
}
validasi();
