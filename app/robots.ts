import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** Motores de busca e de respostas com IA que queremos que leiam e citem o site. */
const answerEngines = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  // Pré-visualizações da Vercel nunca são indexadas.
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: answerEngines, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
