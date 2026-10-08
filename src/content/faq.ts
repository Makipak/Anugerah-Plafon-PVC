import { faqSchema, type Faq } from "./schemas";

export const faqUmum: readonly Faq[] = [
  {
    q: "Berapa harga plafon PVC per meter di Serang?",
    a: "Kisaran harga material dan jasa pasang ada di halaman harga dan diperbarui berkala. Harga akhir bergantung pada motif, luas, dan lokasi.",
  },
  {
    q: "Apakah bisa minta estimasi biaya lewat WhatsApp?",
    a: "Bisa. Kirim lokasi, perkiraan luas ruangan, dan motif yang diminati lewat WhatsApp untuk mendapat estimasi.",
  },
  {
    q: "Apa beda plafon PVC dan gypsum?",
    a: "Keduanya berbeda bahan dan cara perawatan. Pembahasan lengkap ada di artikel perbandingan plafon PVC dan gypsum di blog.",
  },
  {
    q: "Wilayah mana saja yang dilayani?",
    a: "Kami melayani Kota Serang dan sekitarnya. Kirim alamat lewat WhatsApp untuk memastikan lokasi Anda terjangkau.",
  },
].map((f) => faqSchema.parse(f));
