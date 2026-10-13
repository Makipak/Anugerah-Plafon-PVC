import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import { areaList } from "@/content/area";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Area Layanan Plafon PVC Serang",
  description: "Lihat wilayah layanan jasa pasang plafon PVC Anugrah Plafon PVC di Banten. Kirim alamat melalui WhatsApp untuk membahas kebutuhan Anda.",
  path: "/area-layanan",
});

export default function AreaIndexPage() {
  return (
    <>
      <PageIntro
        trail={[{ name: "Area Layanan", path: "/area-layanan" }]}
        label="Area layanan"
        title="Wilayah yang kami layani"
        lead="Daftar ini memuat wilayah layanan kami. Kirim alamat Anda melalui WhatsApp untuk membahas jangkauan layanan."
      />
      <Section tone="surface">
        <ul className="divide-y divide-line border-y border-line">
          {areaList.map((a) => (
            <li key={a.slug}>
              <Link href={`/area-layanan/${a.slug}`} className="flex min-h-16 flex-col justify-center py-4 hover:text-ink">
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
