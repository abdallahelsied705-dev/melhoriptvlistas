import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { facts, formatEuro, lowestPrice } from "@/config/offer";
import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

/** Imagem de partilha da página inicial: arte editorial e texto sempre legível. */
export async function homeOgImage() {
  const artwork = await readFile(join(process.cwd(), "public/images/social-preview-background.jpg"));
  const image = `data:image/jpeg;base64,${artwork.toString("base64")}`;

  return new ImageResponse(
    <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", overflow: "hidden", background: "#081629", color: "#fff", fontFamily: "sans-serif" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" width="1200" height="630" style={{ position: "absolute", inset: 0, width: 1200, height: 630, objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, rgba(5,17,34,.96) 0%, rgba(5,17,34,.88) 35%, rgba(5,17,34,.16) 72%, transparent 100%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 54px", width: 730, height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 50, height: 50, borderRadius: 14, background: "#ef7058", color: "#fff", fontSize: 32, fontWeight: 900 }}>M</div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontSize: 23, fontWeight: 800, letterSpacing: -.5 }}>Melhor IPTV</span>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: 3, color: "#ffad96" }}>LISTAS.PT</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", color: "#9fe6f3", fontSize: 19, fontWeight: 750, letterSpacing: 2 }}>
            <span style={{ display: "flex", width: 9, height: 9, borderRadius: 99, background: "#ff785e" }} /> IPTV PORTUGAL
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 62, fontWeight: 850, lineHeight: 1.02, letterSpacing: -2 }}>
            <span>TV em direto.</span>
            <span style={{ color: "#ff9c80" }}>Filmes a pedido.</span>
          </div>
          <span style={{ fontSize: 21, color: "#d4e3f1" }}>{facts.channels} · {facts.vod}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 19, fontWeight: 700 }}>
          <span style={{ display: "flex", padding: "12px 20px", borderRadius: 99, background: "#f07659", color: "#081629" }}>{facts.trial.toUpperCase()}</span>
          <span style={{ color: "#d9e5ef" }}>Planos desde {formatEuro(lowestPrice)}</span>
        </div>
      </div>
    </div>,
    ogSize,
  );
}

/** Imagem social 1200×630 gerada a partir do título da página. */
export function ogImage(title: string, label: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#111318", color: "#F7F4EE", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "#F7F4EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 22, height: 22, borderRadius: 11, background: "#E23D28" }} />
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ marginLeft: "auto", fontSize: 24, padding: "8px 18px", borderRadius: 999, border: "2px solid #E23D28", color: "#FF8A78" }}>{label}</div>
        </div>
        <div style={{ fontSize: title.length > 60 ? 58 : 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, display: "flex" }}>{title}</div>
        <div style={{ display: "flex", gap: 28, fontSize: 28, color: "#C9C3B6" }}>
          <span>{facts.channels}</span>
          <span>·</span>
          <span>{facts.vod}</span>
          <span>·</span>
          <span>{facts.trial}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
