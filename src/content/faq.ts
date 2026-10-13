import { faqSchema, type Faq } from "./schemas";

export const faqUmum: readonly Faq[] = [
  {
    q: "Bagaimana mendapatkan penawaran plafon PVC?",
    a: "Kirim lokasi, ukuran ruangan, dan motif pilihan melalui WhatsApp untuk membahas kebutuhan Anda.",
  },
  {
    q: "Bisakah saya berkonsultasi melalui WhatsApp?",
    a: "Bisa. Kirim lokasi, ukuran ruangan, dan motif pilihan melalui WhatsApp untuk membahas kebutuhan Anda.",
  },
  {
    q: "Apa perbedaan plafon PVC dan gypsum?",
    a: "Keduanya berbeda bahan dan cara perawatan. Pembahasan lengkap ada di artikel perbandingan plafon PVC dan gypsum di blog.",
  },
  {
    q: "Wilayah mana saja yang dilayani?",
    a: "Kami melayani wilayah yang tercantum di halaman area layanan. Kirim alamat melalui WhatsApp untuk memastikan jangkauannya.",
  },
].map((f) => faqSchema.parse(f));
