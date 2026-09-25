import { articles } from "@/content/blog";
import { guidePages } from "@/content/pages/guides";
import { installPages } from "@/content/pages/install";
import { moneyPages } from "@/content/pages/money";
import { trustPages } from "@/content/pages/trust";
import type { Article, Page } from "@/content/types";

export const pages: Page[] = [...moneyPages, ...installPages, ...guidePages, ...trustPages];

export function getPage(slug: string) {
  return pages.find((page) => page.slug === slug);
}

export function isPublished(article: Article, now = Date.now()) {
  return new Date(article.publishedAt).getTime() <= now;
}

/** Artigos já publicados, do mais recente para o mais antigo. Avaliado a cada pedido. */
export function publishedArticles(now = Date.now()) {
  return articles.filter((a) => isPublished(a, now)).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

/** Título curto e resumo de qualquer URL interno (página ou artigo publicado) — para ligações relacionadas. */
export function linkCard(slug: string, now = Date.now()) {
  const page = getPage(slug);
  if (page) return { slug, title: page.h1, text: page.description, label: page.eyebrow };
  const article = getArticle(slug);
  if (article && isPublished(article, now)) return { slug, title: article.h1, text: article.description, label: article.category };
  return null;
}

export { articles };
