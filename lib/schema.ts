import { formatEuro, monthsLabel, offer, priceFor } from "@/config/offer";
import { siteConfig } from "@/config/site";
import type { Faq } from "@/content/types";
import { absoluteUrl, ogImageUrl } from "@/lib/seo";
import { plain } from "@/lib/text";

const orgId = `${siteConfig.url}/#organization`;
const siteId = `${siteConfig.url}/#website`;

export function organization() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png`, width: 512, height: 512 },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: `+${offer.whatsapp}`,
      url: `https://wa.me/${offer.whatsapp}`,
      availableLanguage: ["pt-PT", "pt"],
      hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    },
  };
}

export function website() {
  return {
    "@type": "WebSite",
    "@id": siteId,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: { "@id": orgId },
  };
}

export function breadcrumb(items: { name: string; href: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.href) })),
  };
}

export function webPage(input: { path: string; name: string; description: string; updated: string; type?: "WebPage" | "FAQPage" | "AboutPage" | "ContactPage" | "CollectionPage" }) {
  const url = absoluteUrl(input.path);
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": siteId },
    dateModified: input.updated,
    primaryImageOfPage: { "@type": "ImageObject", url: ogImageUrl(input.path), width: 1200, height: 630 },
  };
}

export function faqPage(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: plain(item.a) } })),
  };
}

export function article(input: { path: string; headline: string; description: string; published: string; updated: string }) {
  const url = absoluteUrl(input.path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    inLanguage: siteConfig.language,
    datePublished: input.published,
    dateModified: input.updated,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: ogImageUrl(input.path),
    author: { "@id": orgId },
    publisher: { "@id": orgId },
  };
}

/** Produto com as ofertas reais por duração e dispositivo. Sem avaliações inventadas. */
export function product(path: string) {
  const prices = offer.devices.flatMap((d) => offer.months.map((m) => priceFor(d, m)));
  return {
    "@type": "Product",
    "@id": `${siteConfig.url}/#product`,
    name: "Subscrição IPTV Portugal",
    description: `IPTV com ${offer.channels} canais, ${offer.vod} filmes e séries, qualidade até 4K e apoio ${offer.support}.`,
    brand: { "@type": "Brand", name: siteConfig.name },
    image: ogImageUrl("/"),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: prices.length,
      offers: offer.months.map((m) => ({
        "@type": "Offer",
        name: `Plano ${monthsLabel(m)} · 1 dispositivo (${formatEuro(priceFor(1, m))})`,
        price: priceFor(1, m).toFixed(2),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl(path),
        seller: { "@id": orgId },
      })),
    },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
