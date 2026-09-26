const liveUrl = process.env.SITE_URL?.replace(/\/$/, "") || "https://melhoriptvlistas.vercel.app";

export const siteConfig = {
  name: "Melhor IPTV Listas",
  shortName: "MelhorIPTV",
  domain: new URL(liveUrl).host,
  // O domínio .pt ainda não responde; usar a origem pública até o DNS e HTTPS estarem ativos.
  url: liveUrl,
  locale: "pt_PT",
  language: "pt-PT",
  title: "Melhor IPTV Portugal 2026: 45.000 Canais e Teste Grátis 24h",
  description:
    "Lista IPTV em Portugal com 45.000 canais, +120.000 filmes e séries em 4K, guia TV e apoio 24/7 em português. Teste grátis 24h e planos desde 12,99€.",
  /** Data da última revisão geral do conteúdo (mostrada como "Atualizado em"). */
  updated: "2026-09-26",
} as const;
