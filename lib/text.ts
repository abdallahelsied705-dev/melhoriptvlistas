/** Remove o markup de conteúdo (**negrito**, [texto](url)) — para JSON-LD, meta tags e llms.txt. */
export function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");
}

/** Data ISO → "25 de setembro de 2026". */
export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Lisbon" }).format(new Date(iso));
}
