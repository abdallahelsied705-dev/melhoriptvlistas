import type { NextRequest } from "next/server";
import { articles, getArticle, getPage, pages } from "@/content";
import { homeOgImage, ogImage } from "@/lib/og";

/** Imagens sociais (1200×630) de cada página: /og/inicio, /og/precos, /og/blog/<artigo>… */
export function generateStaticParams() {
  return [
    { slug: ["inicio"] },
    { slug: ["blog"] },
    ...pages.map((p) => ({ slug: p.slug.split("/").filter(Boolean) })),
    ...articles.map((a) => ({ slug: a.slug.split("/").filter(Boolean) })),
  ];
}

export async function GET(_req: NextRequest, ctx: RouteContext<"/og/[...slug]">) {
  const { slug } = await ctx.params;
  const path = `/${slug.join("/")}`;
  if (path === "/inicio") return homeOgImage();
  if (path === "/blog") return ogImage("Guias práticos sobre IPTV em Portugal", "Blog");
  const page = getPage(path);
  if (page) return ogImage(page.h1, page.eyebrow);
  const post = getArticle(path);
  if (post) return ogImage(post.h1, post.category);
  return new Response("Not found", { status: 404 });
}
