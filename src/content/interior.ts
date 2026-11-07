import { interiorSchema, type Interior, type InteriorSlug } from "./schemas";

// Layanan interior design. Satu entri = satu halaman /layanan/interior-design/<slug>
// (foto, penjelasan, FAQ, tombol WhatsApp). Urutan array = urutan tampil.
//
// Teks sengaja belum memuat klaim bahan, ukuran khusus, harga, garansi, atau lama pengerjaan
// sebelum dikonfirmasi pemilik. Setelah pemilik mengonfirmasi, tambahkan di `penjelasan` dan `faq`.
//
// Foto hasil pekerjaan (opsional, maksimal 3 tampil) disimpan di public/assets/interior/
// dan dicantumkan dengan path aktual di `foto`. Foto pertama juga dipakai di kartu halaman induk.
// Jika foto belum tersedia, halaman tampil tanpa gambar di produksi (placeholder hanya di dev/preview).
const data: readonly Interior[] = [
  {
    slug: "plafon",
    nama: "Plafon",
    ringkasan: "Pemasangan plafon PVC untuk rumah, masjid, dan kantor.",
    foto: ["/assets/interior/intr-01.jpeg"],
    judul: "Plafon interior di Serang dan sekitarnya",
    metaTitle: "Plafon Interior Serang",
    metaDescription:
      "Jasa pasang plafon PVC untuk interior rumah, masjid, dan kantor di Serang dan sekitarnya. Lihat penjelasan, FAQ, dan konsultasi lewat WhatsApp.",
    lead: "Plafon adalah layanan utama kami. Kami menyediakan panel plafon PVC dan jasa pasangnya untuk ruangan di Serang dan sekitarnya.",
    penjelasan: [
      "Plafon memengaruhi tampilan seluruh ruangan. Pilihan motif dan warna panel menentukan kesan ruang, mulai dari ruang tamu, kamar, teras, serambi masjid, hingga ruang kerja.",
      "Pekerjaan dimulai dari survei dan pengukuran ruangan, lalu pemilihan motif, pemasangan, dan finishing. Anda bisa melihat contoh motif di katalog produk dan hasil pemasangan di galeri.",
    ],
    poin: [
      "Pilihan motif dan warna panel plafon PVC",
      "Pemasangan di rumah, masjid, dan kantor",
      "Survei lokasi dan pengukuran ruangan",
      "Penggabungan plafon dengan pekerjaan interior lain, misalnya partisi atau backdrop TV",
    ],
    faq: [
      { q: "Apa yang perlu saya kirim untuk konsultasi plafon?", a: "Kirim lokasi, perkiraan ukuran ruangan, dan motif yang Anda inginkan lewat WhatsApp. Foto ruangan membantu kami memahami kebutuhan Anda." },
      { q: "Di mana saya bisa melihat pilihan motif plafon?", a: "Pilihan motif dan warna ada di halaman katalog produk. Contoh hasil pemasangan ada di halaman galeri." },
      { q: "Apakah plafon bisa dipasang bersama pekerjaan interior lain?", a: "Bisa dibahas. Sebutkan semua pekerjaan yang Anda butuhkan saat konsultasi agar kami bisa mengatur survei sekaligus." },
      { q: "Berapa biaya pasang plafon?", a: "Biaya bergantung pada luas ruangan, motif, dan kondisi lokasi. Hubungi kami lewat WhatsApp untuk membahas estimasinya." },
    ],
  },
  {
    slug: "kamar-set",
    nama: "Kamar Set",
    ringkasan: "Kamar set sesuai ukuran dan kebutuhan ruangan.",
    foto: ["/assets/interior/intr-02.jpeg"],
    judul: "Kamar set di Serang dan sekitarnya",
    metaTitle: "Kamar Set Serang",
    metaDescription:
      "Layanan kamar set di Serang dan sekitarnya, ditata mengikuti ukuran dan kebutuhan ruangan. Lihat penjelasan, FAQ, dan konsultasi lewat WhatsApp.",
    lead: "Kamar set ditata mengikuti ukuran dan kebutuhan ruangan Anda.",
    penjelasan: [
      "Kamar set dapat mencakup tempat tidur, lemari pakaian, dan meja. Susunannya disesuaikan dengan ukuran kamar agar ruang terasa tertata.",
      "Ceritakan ukuran kamar, kebutuhan perabot, dan gaya yang disukai. Dari situ kami membahas langkah berikutnya, termasuk survei lokasi.",
    ],
    poin: [
      "Penataan kamar set sesuai ukuran ruangan",
      "Kamar utama, kamar anak, atau kamar tamu",
      "Penyesuaian dengan plafon dan dinding kamar",
      "Survei lokasi sebelum pekerjaan dimulai",
    ],
    faq: [
      { q: "Apa saja yang termasuk dalam kamar set?", a: "Kamar set dapat mencakup tempat tidur, lemari pakaian, dan meja. Sebutkan kebutuhan Anda saat konsultasi, lalu kami bahas bersama." },
      { q: "Apakah kamar set bisa disesuaikan dengan ukuran kamar saya?", a: "Bisa dibahas. Kirim ukuran dan foto kamar lewat WhatsApp agar kami dapat memberi gambaran awal." },
      { q: "Bagaimana cara memesan kamar set?", a: "Chat kami lewat WhatsApp, ceritakan kebutuhan dan lokasi Anda, lalu kami atur jadwal survei." },
      { q: "Berapa biaya kamar set?", a: "Biaya bergantung pada jenis perabot, ukuran, dan bahan yang dipilih. Hubungi kami untuk membahas estimasinya." },
    ],
  },
  {
    slug: "kitchen-set",
    nama: "Kitchen Set ",
    ringkasan: "Lemari dan penataan area dapur.",
    foto: ["/assets/interior/intr-03.jpeg"],
    judul: "Kitchen Set di Serang dan sekitarnya",
    metaTitle: "Kitchen Set Serang",
    metaDescription:
      "Layanan kitchen set  di Serang dan sekitarnya: lemari dan penataan dapur sesuai ruangan. Lihat penjelasan, FAQ, dan konsultasi lewat WhatsApp.",
    lead: "Kitchen set menata lemari dan area kerja dapur sesuai bentuk ruangan Anda.",
    penjelasan: [
      "Dapur yang tertata membuat kegiatan memasak lebih nyaman. Kitchen set mengatur lemari atas dan bawah serta area kerja mengikuti denah dapur Anda.",
      "Kirim foto dan ukuran dapur, lalu ceritakan kebutuhan penyimpanan Anda. Kami membahas langkah berikutnya dan menjadwalkan survei lokasi.",
    ],
    poin: [
      "Lemari dapur sesuai bentuk dan ukuran ruangan",
      "Penataan area kerja dan penyimpanan",
      "Dapur rumah maupun dapur usaha kecil",
      "Survei lokasi sebelum pekerjaan dimulai",
    ],
    faq: [
      { q: "Apa itu kitchen set?", a: "Kitchen set adalah lemari dan penataan area dapur yang dibuat menyesuaikan ruangan, sering juga disebut ." },
      { q: "Apa yang perlu saya siapkan untuk konsultasi kitchen set?", a: "Siapkan foto dapur, perkiraan ukuran, dan kebutuhan Anda, lalu kirim lewat WhatsApp." },
      { q: "Apakah ukuran kitchen set bisa disesuaikan dengan dapur saya?", a: "Bisa dibahas. Ukuran dipastikan saat survei lokasi agar sesuai dengan dapur Anda." },
      { q: "Berapa biaya kitchen set?", a: "Biaya bergantung pada ukuran dapur, model, dan bahan yang dipilih. Hubungi kami untuk membahas estimasinya." },
    ],
  },
  {
    slug: "partisi",
    nama: "Partisi",
    ringkasan: "Sekat pemisah antar ruangan.",
    foto: ["/assets/interior/intr-04.jpeg"],
    judul: "Partisi ruangan di Serang dan sekitarnya",
    metaTitle: "Partisi Ruangan Serang",
    metaDescription:
      "Layanan partisi atau sekat ruangan di Serang dan sekitarnya untuk rumah dan kantor. Lihat penjelasan, FAQ, dan konsultasi lewat WhatsApp.",
    lead: "Partisi adalah sekat pemisah antar ruangan untuk membagi area di rumah maupun kantor.",
    penjelasan: [
      "Partisi membantu membagi satu ruangan menjadi beberapa area tanpa membangun dinding permanen. Cocok untuk memisahkan ruang kerja, ruang tamu, atau area lain sesuai kebutuhan.",
      "Ceritakan ruangan yang ingin dibagi dan fungsi tiap areanya. Kami membahas langkah berikutnya dan menjadwalkan survei lokasi.",
    ],
    poin: [
      "Sekat ruangan di rumah atau kantor",
      "Pembagian area sesuai fungsi ruang",
      "Penyesuaian dengan plafon dan interior sekitarnya",
      "Survei lokasi sebelum pekerjaan dimulai",
    ],
    faq: [
      { q: "Untuk apa partisi digunakan?", a: "Partisi dipakai untuk membagi atau memisahkan area dalam satu ruangan, misalnya di rumah atau kantor." },
      { q: "Apakah partisi bisa dipasang di ruangan yang sudah jadi?", a: "Bisa dibahas. Kirim foto dan ukuran ruangan lewat WhatsApp, lalu kami cek kebutuhannya saat survei." },
      { q: "Bagaimana cara memesan partisi?", a: "Chat kami lewat WhatsApp, ceritakan lokasi dan area yang ingin dipisah, lalu kami atur jadwal survei." },
      { q: "Berapa biaya partisi?", a: "Biaya bergantung pada ukuran, model, dan bahan yang dipilih. Hubungi kami untuk membahas estimasinya." },
    ],
  },
  {
    slug: "backdrop-tv",
    nama: "Backdrop TV",
    ringkasan: "Dinding dekoratif di belakang televisi.",
    foto: ["/assets/interior/intr-05.jpeg"],
    judul: "Backdrop TV di Serang dan sekitarnya",
    metaTitle: "Backdrop TV Serang",
    metaDescription:
      "Layanan backdrop TV di Serang dan sekitarnya: dinding dekoratif di belakang televisi untuk ruang keluarga. Lihat penjelasan, FAQ, dan konsultasi lewat WhatsApp.",
    lead: "Backdrop TV adalah dinding dekoratif di belakang televisi yang membuat ruang keluarga atau ruang tamu terlihat lebih rapi.",
    penjelasan: [
      "Backdrop TV memberi bingkai pada televisi sekaligus mempercantik dinding. Modelnya dapat disesuaikan dengan ukuran dinding dan gaya ruangan Anda.",
      "Kirim foto dinding, ukuran televisi, dan gaya yang Anda suka. Kami membahas langkah berikutnya dan menjadwalkan survei lokasi.",
    ],
    poin: [
      "Dinding dekoratif untuk ruang keluarga dan ruang tamu",
      "Penyesuaian dengan ukuran dinding dan televisi",
      "Padanan dengan plafon dan interior ruangan",
      "Survei lokasi sebelum pekerjaan dimulai",
    ],
    faq: [
      { q: "Apa fungsi backdrop TV?", a: "Backdrop TV mempercantik dinding di belakang televisi dan membuat ruangan terlihat lebih tertata." },
      { q: "Apa yang perlu saya kirim untuk konsultasi backdrop TV?", a: "Kirim foto dinding, perkiraan ukuran, dan ukuran televisi Anda lewat WhatsApp." },
      { q: "Apakah backdrop TV bisa disesuaikan dengan ruangan saya?", a: "Bisa dibahas. Modelnya menyesuaikan ukuran dinding dan gaya ruangan, dan dipastikan saat survei." },
      { q: "Berapa biaya backdrop TV?", a: "Biaya bergantung pada ukuran dinding, model, dan bahan yang dipilih. Hubungi kami untuk membahas estimasinya." },
    ],
  },
];

export const interiorList: readonly Interior[] = data.map((i) => interiorSchema.parse(i));

export function interiorBySlug(slug: string): Interior | undefined {
  return interiorList.find((i) => i.slug === slug);
}

export function interiorLain(slug: InteriorSlug): readonly Interior[] {
  return interiorList.filter((i) => i.slug !== slug);
}
