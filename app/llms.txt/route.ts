import { formatCount, formatEuro, monthsLabel, offer, priceFor } from "@/config/offer";
import { siteConfig } from "@/config/site";
import { pages, publishedArticles } from "@/content";
import { generalFaq } from "@/content/pages/trust";
import { absoluteUrl } from "@/lib/seo";
import { plain } from "@/lib/text";

/**
 * /llms.txt — resumo do site em Markdown para assistentes de IA (ChatGPT, Perplexity, Claude, Gemini…).
 * Gerado a partir dos mesmos dados das páginas, por isso nunca fica desatualizado.
 */
export function GET() {
  const section = (kind: string) =>
    pages
      .filter((p) => p.kind === kind)
      .map((p) => `- [${p.h1}](${absoluteUrl(p.slug)}): ${p.description}`)
      .join("\n");

  const prices = offer.months.map((m) => `- ${monthsLabel(m)}: ${offer.devices.map((d) => `${d} disp. ${formatEuro(priceFor(d, m))}`).join(" · ")}`).join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} (${siteConfig.domain}) é um serviço de IPTV para Portugal e para portugueses no estrangeiro, com apoio em português pelo WhatsApp (${offer.whatsappDisplay}).

## Factos
- Canais em direto: ${formatCount(offer.channels)}
- Filmes e séries a pedido: +${formatCount(offer.vod)}
- Qualidade: ${offer.quality}
- Guia TV (EPG) e Catch-Up: sim
- Dispositivos em simultâneo: 1 a 4, conforme o plano
- Teste grátis: ${offer.trialHours} horas, sem cartão, pedido pelo WhatsApp
- Fidelização: nenhuma (planos de 1, 3, 6 ou 12 meses, sem renovação automática)
- Apoio: ${offer.support}
- Equipamentos: Smart TV Samsung e LG, Android TV, Google TV, Fire TV Stick, box Android, iPhone, iPad, Apple TV, Android, Windows e Mac
- Atualizado: ${siteConfig.updated}

## Preços (EUR, preço total)
${prices}

## Páginas principais
- [Página inicial](${absoluteUrl("/")}): ${siteConfig.description}
${section("money")}

## Guias de instalação
${section("hub")}
${pages.filter((p) => p.parent === "/instalar-iptv").map((p) => `- [${p.h1}](${absoluteUrl(p.slug)}): ${p.description}`).join("\n")}

## Guias
${pages.filter((p) => p.kind === "guide" && !p.parent).map((p) => `- [${p.h1}](${absoluteUrl(p.slug)}): ${p.description}`).join("\n")}

## Blog
${publishedArticles().map((a) => `- [${a.h1}](${absoluteUrl(a.slug)}): ${a.description}`).join("\n")}

## Perguntas frequentes
${generalFaq.map((f) => `### ${f.q}\n${plain(f.a)}`).join("\n\n")}

## Sobre e contacto
${section("trust")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
