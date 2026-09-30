import type { Metadata } from "next";
import { site } from "@/lib/site";

type Input = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

// Title memakai template "%s | Anugerah Plavon PVC" dari layout, jadi jangan menambah brand di sini.
export function buildMetadata({ title, description, path, type = "website", publishedTime, modifiedTime }: Input): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url: path,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
  };
}
