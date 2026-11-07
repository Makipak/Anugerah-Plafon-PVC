import { areaSchema, type Area } from "./schemas";

// Tambahkan wilayah hanya jika klien melayani, ada fakta atau proyek lokal yang unik,
// dan isinya bukan sekadar mengganti nama kota (docs/02, kontrol kualitas).
export const areaList: readonly Area[] = [
  areaSchema.parse({
    slug: "serang",
    nama: "Serang dan sekitarnya",
    ringkasan:
      "Kami menerima permintaan jasa pasang plafon PVC di Serang dan sekitarnya. Kirim alamat melalui WhatsApp untuk memastikan jangkauan dan jadwal survei.",
    fakta: [
      "Jangkauan jasa pasang di Serang dan sekitarnya bergantung pada lokasi dan jadwal yang tersedia.",
      "Kirim ukuran ruangan dan foto plafon untuk membahas kebutuhan pemasangan.",
    ],
    proyekSlugs: [],
    assetId: "AREA-serang-01",
    faq: [
      {
        q: "Bagaimana menjadwalkan survei lokasi di Serang dan sekitarnya?",
        a: "Chat kami melalui WhatsApp untuk membahas kebutuhan dan jadwal survei lokasi.",
      },
    ],
  }),
];
