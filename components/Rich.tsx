import Link from "next/link";
import type { ReactNode } from "react";
import { getArticle, isPublished } from "@/content";

/** Ligação para um artigo ainda agendado → mostra só o texto até ao dia da publicação. */
function isLive(href: string) {
  if (!href.startsWith("/blog/")) return true;
  const article = getArticle(href);
  return Boolean(article && isPublished(article));
}

/**
 * Markup mínimo para texto de conteúdo: **negrito** e [texto](/ligacao).
 * Ligações internas usam <Link>; externas abrem num separador novo.
 * Nota: só para componentes de servidor (lê o calendário de publicação do blog).
 */
export function Rich({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    if (match[1]) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else {
      const href = match[3];
      parts.push(
        !isLive(href) ? (
          match[2]
        ) : href.startsWith("/") ? (
          <Link key={key++} href={href}>{match[2]}</Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer">{match[2]}</a>
        ),
      );
    }
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
