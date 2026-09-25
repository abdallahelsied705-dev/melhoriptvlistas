import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { getArticle, isPublished } from "@/content";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { article, breadcrumb, faqPage, graph, webPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

async function resolve(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const post = getArticle(`/blog/${slug}`);
  return post && isPublished(post) ? post : undefined;
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  await connection();
  const post = await resolve(props.params);
  if (!post) return {};
  return pageMetadata({
    path: post.slug,
    title: post.seoTitle,
    description: post.description,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updated,
  });
}

export default async function BlogPost(props: PageProps<"/blog/[slug]">) {
  // Renderizado a cada pedido: um artigo agendado fica visível assim que chega a data
  // (com geração estática ficava preso em 404 até ao próximo deploy).
  await connection();
  const post = await resolve(props.params);
  if (!post) notFound();

  const crumbs = [
    { name: "Início", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.category, href: post.slug },
  ];
  const nodes: object[] = [
    webPage({ path: post.slug, name: post.seoTitle, description: post.description, updated: post.updated }),
    breadcrumb(crumbs),
    article({ path: post.slug, headline: post.h1, description: post.description, published: post.publishedAt, updated: post.updated }),
  ];
  if (post.faq?.length) nodes.push(faqPage(post.faq));

  return (
    <>
      <JsonLd data={graph(...nodes)} />
      <ContentPage
        crumbs={crumbs}
        eyebrow={post.eyebrow}
        h1={post.h1}
        summary={post.summary}
        updated={post.updated}
        published={post.publishedAt}
        blocks={post.blocks}
        faq={post.faq}
        related={post.related}
      />
    </>
  );
}
