import type { Metadata } from "next";
import Link from "next/link";
import { Asset } from "@/components/asset";
import { Section } from "@/components/ui/section";
import { PageIntro } from "@/components/ui/page-intro";
import type { AssetId } from "@/content/assets";
import { getAllPosts } from "@/lib/blog";
import { formatTanggal } from "@/lib/format";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog Plafon PVC: Harga, Perbandingan, dan Panduan",
  description: "Artikel tentang plafon PVC: cara menghitung biaya, perbandingan dengan gypsum, dan panduan memilih untuk rumah di Serang dan sekitarnya.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <PageIntro
        trail={[{ name: "Blog", path: "/blog" }]}
        label="Blog"
        title="Panduan plafon PVC"
        lead="Jawaban untuk pertanyaan yang paling sering muncul sebelum memasang plafon."
      />
      <Section tone="surface">
        <ul className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <Asset id={p.coverAssetId as AssetId} sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" className="rounded-card" />
                <p className="text-label mt-4 text-accent">Diperbarui {formatTanggal(p.updated)}</p>
                <h2 className="text-title mt-1 group-hover:text-primary">{p.title}</h2>
                <p className="mt-2 text-ink-muted">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
