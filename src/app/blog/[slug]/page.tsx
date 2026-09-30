import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Asset } from "@/components/asset";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ReadingProgress } from "@/components/motion/reading-progress";
import { CtaBand } from "@/components/sections/cta-band";
import type { AssetId } from "@/content/assets";
import { getAllPosts, getPost } from "@/lib/blog";
import { formatTanggal } from "@/lib/format";
import { articleLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { waMessages } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getAllPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = (await getAllPosts()).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <JsonLd data={articleLd(post)} />
      <Breadcrumb
        trail={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="container-page grid gap-12 py-10 lg:grid-cols-[1fr_260px]">
        <div className="max-w-3xl">
          <h1 className="text-display">{post.title}</h1>
          <p className="mt-4 text-sm text-ink-muted">
            Terbit {formatTanggal(post.date)} | Diperbarui {formatTanggal(post.updated)}
          </p>
          <Asset id={post.coverAssetId as AssetId} sizes="(min-width: 1024px) 768px, 100vw" className="mt-8 rounded-card" />
          <div className="article mt-10">{post.content}</div>
        </div>

        <aside aria-label="Daftar isi dan tautan terkait" className="lg:sticky lg:top-24 lg:self-start">
          {post.headings.length > 0 ? (
            <nav aria-label="Daftar isi">
              <p className="text-label mb-3 text-accent">Daftar isi</p>
              <ul className="space-y-1 border-l border-line pl-4">
                {post.headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="inline-flex min-h-11 items-center text-sm hover:text-primary">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
          <div className="mt-8">
            <p className="text-label mb-3 text-accent">Halaman terkait</p>
            <ul className="space-y-1">
              {post.menautKe.map((href) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-11 items-center text-sm text-primary underline underline-offset-4">
                    {href}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {related.length > 0 ? (
            <div className="mt-8">
              <p className="text-label mb-3 text-accent">Artikel lain</p>
              <ul className="space-y-1">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="inline-flex min-h-11 items-center text-sm hover:text-primary">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </article>
      <CtaBand message={waMessages.harga} location={`blog-${post.slug}`} />
    </>
  );
}
