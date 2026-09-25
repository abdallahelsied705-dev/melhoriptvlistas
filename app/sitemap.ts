import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { siteConfig } from "@/config/site";
import { pages, publishedArticles } from "@/content";
import { absoluteUrl } from "@/lib/seo";

const priority = { money: 0.9, hub: 0.8, guide: 0.7, trust: 0.5, legal: 0.2 } as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Gerado a cada pedido: artigos agendados entram no sitemap no dia da publicação.
  await connection();
  const posts = publishedArticles();

  return [
    { url: absoluteUrl("/"), lastModified: siteConfig.updated, changeFrequency: "weekly", priority: 1 },
    ...pages.map((page) => ({
      url: absoluteUrl(page.slug),
      lastModified: page.updated,
      changeFrequency: page.kind === "legal" ? ("yearly" as const) : ("monthly" as const),
      priority: priority[page.kind],
    })),
    { url: absoluteUrl("/blog"), lastModified: posts[0]?.updated ?? siteConfig.updated, changeFrequency: "weekly", priority: 0.6 },
    ...posts.map((post) => ({
      url: absoluteUrl(post.slug),
      lastModified: post.updated,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
