export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "steps"; items: { title: string; text: string }[] }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "callout"; tone: "info" | "tip" | "warn"; title: string; text: string }
  | { t: "cta"; kind: "trial" | "pricing" }
  | { t: "pricing" }
  | { t: "channels" }
  | { t: "devices" }
  | { t: "facts" };

export type Faq = { q: string; a: string };

export type PageKind = "money" | "guide" | "hub" | "trust" | "legal";

export type Page = {
  /** Caminho sem barra final, ex.: "/precos". */
  slug: string;
  kind: PageKind;
  /** Palavra-chave principal (uma por página, sem canibalização). */
  keyword: string;
  /** Título SEO absoluto (≤ 60 caracteres). */
  seoTitle: string;
  /** Meta description (120–160 caracteres). */
  description: string;
  eyebrow: string;
  h1: string;
  /** Resposta curta no topo da página — pensada para Google e motores de IA. */
  summary: string;
  updated: string;
  blocks: Block[];
  faq?: Faq[];
  related?: string[];
  parent?: string;
  /** Nome curto para menus e breadcrumbs. */
  nav: string;
};

export type Article = Omit<Page, "kind" | "parent" | "nav"> & {
  category: string;
  /** ISO. Artigos com data futura ficam escondidos até ao dia (agendamento). */
  publishedAt: string;
};
