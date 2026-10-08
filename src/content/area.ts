import { areaSchema, type Area } from "./schemas";

// Tambahkan wilayah hanya jika klien melayani, ada fakta atau proyek lokal yang unik,
// dan isinya bukan sekadar mengganti nama kota (docs/02, kontrol kualitas).
export const areaList: readonly Area[] = [
  areaSchema.parse({
    slug: "serang",
    nama: "Serang",
    ringkasan:
      "Melayani pemasangan plafon PVC di Kota Serang dan sekitarnya. Survei lokasi dijadwalkan setelah Anda mengirim alamat lewat WhatsApp.",
    fakta: [
      "Proyek terbanyak ada di Cipocok Jaya, Serang, dan Kasemen.",
      "Survei di dalam Kota Serang biasanya dijadwalkan dalam beberapa hari setelah pesan diterima.",
    ],
    proyekSlugs: ["proyek-01", "proyek-02"],
    assetId: "AREA-serang-01",
    faq: [
      {
        q: "Apakah survei lokasi di Serang dikenakan biaya?",
        a: "Survei di dalam Kota Serang tidak dikenai biaya.",
      },
    ],
  }),
];
