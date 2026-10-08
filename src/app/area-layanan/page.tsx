import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { areaList } from "@/content/area";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Area Layanan Jasa Plafon PVC di Banten",
  description: "Wilayah layanan pemasangan plafon PVC Anugerah Plafon PVC di Banten, lengkap dengan proyek dan informasi tiap wilayah. Kirim alamat lewat WhatsApp.",
  path: "/area-layanan",
});

export default function AreaIndexPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Area Layanan", path: "/area-layanan" }]}
        label="Area layanan"
        title="Wilayah yang kami layani"
        lead="Hanya wilayah yang benar-benar kami kerjakan yang tercantum di sini."
      />
      <Section tone="surface">
        <ul className="divide-y divide-line border-y border-line">
          {areaList.map((a) => (
            <li key={a.slug}>
              <Link href={`/area-layanan/${a.slug}`} className="flex min-h-16 flex-col justify-center py-4 hover:text-primary">
                <span className="font-display text-xl font-semibold">Jasa plafon PVC {a.nama}</span>
                <span className="text-ink-muted">{a.ringkasan}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
