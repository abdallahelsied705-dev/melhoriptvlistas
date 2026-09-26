import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function absoluteUrl(path: string) {
  return path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
}

/** Imagem social gerada em app/og/[...slug]/route.tsx. */
export function ogImageUrl(path: string) {
  return `${siteConfig.url}/og${path === "/" ? "/inicio" : path}`;
}

type MetaInput = {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  socialTitle?: string;
  socialDescription?: string;
};

/**
 * Metadados de cada página: título absoluto (sem sufixo automático), canonical,
 * Open Graph e Twitter, com a imagem social própria de cada página.
 */
export function pageMetadata({ path, title, description, type = "website", publishedTime, modifiedTime, socialTitle, socialDescription }: MetaInput): Metadata {
  const url = absoluteUrl(path);
  const image = { url: ogImageUrl(path), width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: socialTitle ?? title,
      description: socialDescription ?? description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [image],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: socialTitle ?? title, description: socialDescription ?? description, images: [image.url] },
  };
}
