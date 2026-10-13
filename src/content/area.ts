import { areaSchema, type Area } from "./schemas";

// Tambahkan wilayah hanya jika klien melayani, ada fakta atau proyek lokal yang unik,
// dan isinya bukan sekadar mengganti nama kota (docs/02, kontrol kualitas).
export const areaList: readonly Area[] = [
  areaSchema.parse({
    slug: "serang",
    nama: "Serang",
    ringkasan:
      "Kami menerima permintaan jasa pasang plafon PVC di Kota Serang. Kirim alamat melalui WhatsApp untuk membahas jangkauan dan jadwal survei.",
    fakta: [
      "Jangkauan jasa pasang bergantung pada lokasi dan jadwal yang tersedia.",
      "Kirim ukuran ruangan dan foto plafon untuk membahas kebutuhan pemasangan.",
    ],
    proyekSlugs: ["proyek-01", "proyek-02"],
    assetId: "AREA-serang-01",
    faq: [
      {
        q: "Bagaimana menjadwalkan survei lokasi di Serang?",
        a: "Chat kami melalui WhatsApp untuk membahas kebutuhan dan jadwal survei lokasi.",
      },
    ],
  }),
];
