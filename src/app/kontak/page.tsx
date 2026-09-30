import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { ContactBlock } from "@/components/sections/contact-block";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontak Toko Plafon PVC Serang: Alamat, Jam, dan WhatsApp",
  description: "Alamat, jam operasional, peta, dan WhatsApp Anugerah Plavon PVC, toko dan jasa pasang plafon PVC di Serang, Banten.",
  path: "/kontak",
});

export default function KontakPage() {
  return (
    <>
      <JsonLd data={localBusinessLd()} />
      <PageIntro
        trail={[{ name: "Kontak", path: "/kontak" }]}
        label="Kontak"
        title="Toko plafon PVC di Serang"
        lead="Datang ke toko atau kirim pesan lewat WhatsApp untuk tanya harga dan jadwal survei."
      />
      <Section tone="surface">
        <ContactBlock location="kontak" />
      </Section>
    </>
  );
}
