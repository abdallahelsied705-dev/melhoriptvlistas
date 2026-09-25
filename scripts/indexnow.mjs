// Envia todos os URLs do sitemap para o IndexNow (Bing, Yandex, Seznam, Naver).
// Correr depois de cada deploy com conteúdo novo: npm run indexnow
import { readFileSync } from "node:fs";

const host = "melhoriptvlistas.pt";
const key = readFileSync(new URL("../config/indexnow.ts", import.meta.url), "utf8").match(/"([a-f0-9]{32})"/)[1];
const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs → HTTP ${res.status}`);
