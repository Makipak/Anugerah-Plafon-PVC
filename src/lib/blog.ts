import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { postSchema, type PostMeta } from "@/content/schemas";
import { slugify } from "@/lib/slug";
import { findPlaceholders, isProduction } from "@/lib/placeholders";

const dir = path.join(process.cwd(), "src/content/blog");

export type Post = PostMeta & {
  content: React.ReactElement;
  headings: { id: string; text: string }[];
};

function headingsOf(source: string): Post["headings"] {
  const body = source.replace(/^---[\s\S]*?---/, "");
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = (m[1] ?? "").trim();
    return { id: slugify(text), text };
  });
}

async function loadAll(): Promise<Post[]> {
  const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".mdx"));
  const posts: Post[] = [];
  for (const file of files) {
    const source = await fs.readFile(path.join(dir, file), "utf8");
    const { content, frontmatter } = await compileMDX<Record<string, unknown>>({
      source,
      components: mdxComponents,
      options: { parseFrontmatter: true },
    });
    const meta = postSchema.parse(frontmatter);
    if (`${meta.slug}.mdx` !== file) {
      throw new Error(`Slug "${meta.slug}" harus sama dengan nama berkas ${file}`);
    }
    if (isProduction && findPlaceholders(source).length > 0) {
      throw new Error(`Artikel ${file} masih memuat [ISI]; build produksi dihentikan`);
    }
    posts.push({ ...meta, content, headings: headingsOf(source) });
  }
  const slugs = posts.map((p) => p.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error("Slug artikel duplikat");
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export const getAllPosts = cache(loadAll);

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await getAllPosts()).find((p) => p.slug === slug);
}
