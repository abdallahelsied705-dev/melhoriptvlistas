import Link from "next/link";
import type { Metadata } from "next";
import { connection } from "next/server";
import { publishedArticles } from "@/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, graph, webPage } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/text";

const title = "Blog IPTV Portugal: Guias, Preços e Dicas Práticas";
const description = "Artigos práticos sobre IPTV em Portugal: preços, segurança, internet necessária, vários dispositivos, guia TV e canais portugueses no estrangeiro.";

export const metadata: Metadata = pageMetadata({ path: "/blog", title, description });

const crumbs = [
  { name: "Início", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default async function BlogIndex() {
  // Renderizado a cada pedido: artigos agendados aparecem no dia certo, sem novo deploy.
  await connection();
  const list = publishedArticles();
  const updated = list[0]?.updated ?? "2026-09-25";

  return (
    <main id="conteudo" className="content-page">
      <JsonLd data={graph(webPage({ path: "/blog", name: title, description, updated, type: "CollectionPage" }), breadcrumb(crumbs))} />
      <header className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">Blog</p>
          <h1>Blog: guias práticos sobre IPTV em Portugal</h1>
          <p className="page-intro">{description}</p>
        </div>
      </header>
      <div className="container section-tight">
        <ul className="card-grid">
          {list.map((a) => (
            <li key={a.slug}>
              <Link href={a.slug} className="post-card">
                <small>{a.category} · <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time></small>
                <strong>{a.h1}</strong>
                <span>{a.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
