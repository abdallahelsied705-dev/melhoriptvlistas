# Melhor IPTV Listas — melhoriptvlistas.pt

Site em Next.js 16 (App Router) + TypeScript, alojado na Vercel. Estático sempre que possível; blog, sitemap e llms.txt renderizados a pedido para publicar artigos agendados no dia certo.

## Onde alterar o quê

| O quê | Ficheiro |
|---|---|
| Canais, preços, WhatsApp, teste | `config/offer.ts` (fonte única — todo o site lê daqui) |
| Nome, domínio, título e descrição da homepage | `config/site.ts` |
| Menus | `config/navigation.ts` |
| Páginas (preços, guias, legais…) | `content/pages/*.ts` |
| Artigos do blog (com agendamento por `publishedAt`) | `content/blog.ts` |
| Homepage | `app/page.tsx` |
| Design | `app/globals.css` |

As páginas de conteúdo são dados (`Block[]`): títulos, parágrafos, listas, passos, tabelas, avisos e blocos especiais (`pricing`, `channels`, `devices`, `facts`, `cta`). No texto, usa `**negrito**` e `[texto](/ligacao)`. As ligações para artigos ainda agendados aparecem como texto simples até à data de publicação.

## Comandos

```bash
npm install
npm run dev          # desenvolvimento
npm run verify       # lint + typecheck + build (antes de cada push)
npm start & npm run verify:seo   # auditoria SEO de todas as páginas (servidor em localhost:3000)
npm run indexnow     # depois de um deploy com conteúdo novo (Bing/IndexNow)
```

## Variáveis de ambiente (Vercel → Production)

- `GOOGLE_SITE_VERIFICATION` — valor do meta tag do Search Console (opcional se usares DNS).
- `BING_SITE_VERIFICATION` — valor `msvalidate.01` do Bing Webmaster (opcional).

## SEO

Plano completo, análise de concorrentes e tarefas pós-lançamento em [SEO-PLAN.md](SEO-PLAN.md).
