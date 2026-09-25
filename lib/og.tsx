import { ImageResponse } from "next/og";
import { facts } from "@/config/offer";
import { siteConfig } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };

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
