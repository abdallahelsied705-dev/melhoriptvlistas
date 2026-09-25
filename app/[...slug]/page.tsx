import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, pages } from "@/content";
import type { Page } from "@/content/types";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { article, breadcrumb, faqPage, graph, product, webPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

// Só existem as páginas definidas em content/ — qualquer outro caminho dá 404 (notFound abaixo).
// Revalida de hora a hora: ligações para artigos agendados ativam-se no dia da publicação.
export const revalidate = 3600;

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug.split("/").filter(Boolean) }));
}

async function resolve(params: Promise<{ slug: string[] }>) {
  const { slug } = await params;
  return getPage(`/${slug.join("/")}`);
}

export async function generateMetadata(props: PageProps<"/[...slug]">): Promise<Metadata> {
  const page = await resolve(props.params);
  if (!page) return {};
  return pageMetadata({ path: page.slug, title: page.seoTitle, description: page.description });
}

function crumbsFor(page: Page) {
  const crumbs = [{ name: "Início", href: "/" }];
  const parent = page.parent ? getPage(page.parent) : undefined;
  if (parent) crumbs.push({ name: parent.nav, href: parent.slug });
  crumbs.push({ name: page.nav, href: page.slug });
  return crumbs;
}

const pageTypes: Record<string, "AboutPage" | "ContactPage" | "CollectionPage"> = {
  "/sobre-nos": "AboutPage",
  "/contacto": "ContactPage",
  "/instalar-iptv": "CollectionPage",
};

export default async function DynamicPage(props: PageProps<"/[...slug]">) {
  const page = await resolve(props.params);
  if (!page) notFound();

  const crumbs = crumbsFor(page);
  const nodes: object[] = [
    webPage({ path: page.slug, name: page.seoTitle, description: page.description, updated: page.updated, type: pageTypes[page.slug] }),
    breadcrumb(crumbs),
  ];
  if (page.kind === "guide") {
    nodes.push(article({ path: page.slug, headline: page.h1, description: page.description, published: page.updated, updated: page.updated }));
  }
  if (page.slug === "/precos") nodes.push(product(page.slug));
  if (page.faq?.length) nodes.push(faqPage(page.faq));

  return (
    <>
      <JsonLd data={graph(...nodes)} />
      <ContentPage
        crumbs={crumbs}
        eyebrow={page.eyebrow}
        h1={page.h1}
        summary={page.summary}
        updated={page.updated}
        blocks={page.blocks}
        faq={page.faq}
        related={page.related}
      />
    </>
  );
}
