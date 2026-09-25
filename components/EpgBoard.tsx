/**
 * Ilustração do hero: um guia TV (EPG) em HTML/CSS — sem imagens, leve e nítido em qualquer ecrã.
 * Os programas são exemplos genéricos de categorias, não uma grelha real.
 */
const rows = [
  { channel: "Desporto", items: [{ title: "Antevisão", w: 22 }, { title: "Futebol · Liga portuguesa", w: 50, live: true }, { title: "Resumos", w: 28 }] },
  { channel: "Notícias", items: [{ title: "Jornal da Noite", w: 55, live: true }, { title: "Grande Entrevista", w: 45 }] },
  { channel: "Cinema", items: [{ title: "Estreia · Ação", w: 70, live: true }, { title: "Drama", w: 30 }] },
  { channel: "Séries", items: [{ title: "T2 · Ep. 5", w: 34 }, { title: "Novo episódio", w: 36, live: true }, { title: "T1 · Ep. 1", w: 30 }] },
  { channel: "Motores", items: [{ title: "F1 · Qualificação", w: 60, live: true }, { title: "Paddock", w: 40 }] },
  { channel: "Infantil", items: [{ title: "Desenhos animados", w: 45, live: true }, { title: "Aventura", w: 55 }] },
];

export function EpgBoard() {
  return (
    <figure className="epg" aria-label="Exemplo de guia TV com canais de desporto, notícias, cinema, séries, motores e infantil">
      <div className="epg-top">
        <span className="epg-live"><span className="epg-dot" /> Agora</span>
        <span className="epg-title">Guia TV</span>
        <span className="epg-badges"><span>4K</span><span>EPG</span><span>Catch-Up</span></span>
      </div>
      <div className="epg-times" aria-hidden="true">
        <span>20:30</span><span>21:00</span><span>21:30</span><span>22:00</span>
      </div>
      <div className="epg-rows" aria-hidden="true">
        {rows.map((row) => (
          <div className="epg-row" key={row.channel}>
            <span className="epg-channel">{row.channel}</span>
            <span className="epg-track">
              {row.items.map((item) => (
                <span key={item.title} className={`epg-item${item.live ? " is-live" : ""}`} style={{ flexBasis: `${item.w}%` }}>
                  {item.title}
                </span>
              ))}
            </span>
          </div>
        ))}
        <span className="epg-now" />
      </div>
      <figcaption className="epg-caption">Canais organizados por categoria, com guia TV e Catch-Up.</figcaption>
    </figure>
  );
}
