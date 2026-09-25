import Link from "next/link";
import type { Block, Faq } from "@/content/types";
import { linkCard } from "@/content";
import { Blocks, slugify } from "@/components/Blocks";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { Icon } from "@/components/Icon";
import { formatDate } from "@/lib/text";

type Props = {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  summary: string;
  updated: string;
  published?: string;
  blocks: Block[];
  faq?: Faq[];
  related?: string[];
};

/** Página de conteúdo: resposta curta no topo, índice, corpo, FAQ e ligações relacionadas. */
export function ContentPage({ crumbs, eyebrow, h1, summary, updated, published, blocks, faq, related }: Props) {
  const toc = blocks.flatMap((b) => (b.t === "h2" ? [b.text] : []));
  if (faq?.length) toc.push("Perguntas frequentes");
  const links = (related ?? []).map((slug) => linkCard(slug)).filter((card) => card !== null);

  return (
    <main id="conteudo" className="content-page">
      <header className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{h1}</h1>
          <p className="page-meta">
            <Icon name="clock" size={16} />
            {published ? <>Publicado a <time dateTime={published}>{formatDate(published)}</time> · </> : null}
            Atualizado a <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        </div>
      </header>

      <div className="container page-layout">
        <div className="page-body">
          <section className="answer" aria-label="Resposta curta">
            <p className="answer-label">Resposta curta</p>
            <p>{summary}</p>
          </section>

          <div className="prose">
            <Blocks blocks={blocks} />
          </div>

          {faq?.length ? (
            <section className="page-faq" aria-labelledby="perguntas-frequentes">
              <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
              <FaqList items={faq} />
            </section>
          ) : null}

          {links.length ? (
            <nav className="related" aria-label="Leitura relacionada">
              <h2>Continua a ler</h2>
              <ul>
                {links.map((card) => (
                  <li key={card.slug}>
                    <Link href={card.slug}>
                      <small>{card.label}</small>
                      <strong>{card.title}</strong>
                      <span>{card.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        {toc.length > 2 ? (
          <aside className="toc" aria-label="Nesta página">
            <p className="toc-title">Nesta página</p>
            <ol>
              {toc.map((heading) => (
                <li key={heading}><a href={`#${slugify(heading)}`}>{heading}</a></li>
              ))}
            </ol>
          </aside>
        ) : null}
      </div>
    </main>
  );
}
