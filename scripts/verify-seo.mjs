// Auditoria SEO sobre o site a correr (npm run build && npm start).
// Uso: node scripts/verify-seo.mjs [http://localhost:3000]
const base = process.argv[2] ?? "http://localhost:3000";
const site = (process.env.SITE_URL ?? "https://melhoriptvlistas.vercel.app").replace(/\/$/, "");
const errors = [];
const warn = [];

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length < 10) errors.push(`sitemap com apenas ${urls.length} URLs`);

const titles = new Map();
const descriptions = new Map();
const pick = (html, re) => (html.match(re)?.[1] ?? "").replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');

for (const url of urls) {
  const path = url.replace(site, "") || "/";
  const res = await fetch(base + path, { redirect: "manual" });
  if (res.status !== 200) { errors.push(`${path}: HTTP ${res.status}`); continue; }
  const html = await res.text();
  const title = pick(html, /<title>([^<]*)<\/title>/);
  const desc = pick(html, /<meta name="description" content="([^"]*)"/);
  const canonical = pick(html, /<link rel="canonical" href="([^"]*)"/);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  const ogImage = pick(html, /<meta property="og:image" content="([^"]*)"/);
  const jsonld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

  if (!title) errors.push(`${path}: sem <title>`);
  else if (title.length > 65) warn.push(`${path}: título com ${title.length} caracteres`);
  if (!desc) errors.push(`${path}: sem meta description`);
  else if (desc.length < 110 || desc.length > 165) warn.push(`${path}: description com ${desc.length} caracteres`);
  if (canonical !== url) errors.push(`${path}: canonical ${canonical} ≠ ${url}`);
  if (h1 !== 1) errors.push(`${path}: ${h1} H1`);
  if (!ogImage) errors.push(`${path}: sem og:image`);
  if (!jsonld.length) errors.push(`${path}: sem JSON-LD`);
  for (const [, raw] of jsonld) { try { JSON.parse(raw); } catch { errors.push(`${path}: JSON-LD inválido`); } }
  if (/noindex/.test(pick(html, /<meta name="robots" content="([^"]*)"/))) errors.push(`${path}: noindex em produção`);
  if (titles.has(title)) errors.push(`${path}: título duplicado de ${titles.get(title)}`);
  if (descriptions.has(desc)) errors.push(`${path}: description duplicada de ${descriptions.get(desc)}`);
  titles.set(title, path);
  descriptions.set(desc, path);

  // Ligações internas partidas
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (/^\/(_next|icon|apple-icon|manifest|favicon)/.test(href) || href.includes(".")) continue;
    if (!urls.includes(href === "/" ? site : site + href)) errors.push(`${path}: ligação para ${href} fora do sitemap`);
  }
  if (ogImage) {
    const img = await fetch(ogImage.replace(site, base));
    if (img.status !== 200 || !String(img.headers.get("content-type")).includes("image")) errors.push(`${path}: og:image inacessível (${img.status})`);
  }
}

for (const extra of ["/robots.txt", "/llms.txt", "/manifest.webmanifest", "/logo.png"]) {
  const res = await fetch(base + extra);
  if (res.status !== 200) errors.push(`${extra}: HTTP ${res.status}`);
}
if ((await fetch(`${base}/pagina-que-nao-existe`)).status !== 404) errors.push("404 não devolve estado 404");

console.log(`Páginas verificadas: ${urls.length}`);
warn.forEach((w) => console.log("AVISO", w));
errors.forEach((e) => console.log("ERRO ", e));
console.log(errors.length ? `\n${errors.length} erro(s).` : "\nSEO OK — 0 erros.");
process.exit(errors.length ? 1 : 0);
