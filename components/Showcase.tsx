import Link from "next/link";
import { facts, formatEuro, lowestMonthly, offer } from "@/config/offer";
import { Icon, type IconName } from "@/components/Icon";

/** Factos do serviço — lista de definições, fácil de citar por motores de busca e IA. */
export function FactsGrid() {
  const items: { label: string; value: string }[] = [
    { label: "Canais em direto", value: facts.channels },
    { label: "Filmes e séries", value: facts.vod.replace(" filmes e séries", "") },
    { label: "Qualidade", value: "Até 4K" },
    { label: "Preço", value: `Desde ${formatEuro(lowestMonthly)}/mês` },
    { label: "Dispositivos", value: "1 a 4 em simultâneo" },
    { label: "Teste grátis", value: `${offer.trialHours} horas` },
    { label: "Fidelização", value: "Nenhuma" },
    { label: "Apoio", value: offer.support },
  ];
  return (
    <dl className="facts">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

const channelGroups: { icon: IconName; title: string; text: string }[] = [
  { icon: "tv", title: "Portugal", text: "Generalistas, informação, entretenimento e canais regionais." },
  { icon: "bolt", title: "Desporto", text: "Futebol português e europeu, F1, NBA, ténis e eventos PPV." },
  { icon: "film", title: "Cinema e séries", text: `Canais temáticos e ${facts.vod} a pedido.` },
  { icon: "globe", title: "Internacional", text: "Canais de dezenas de países, do Brasil ao Reino Unido." },
  { icon: "spark", title: "Infantil", text: "Desenhos animados e conteúdo para toda a família." },
  { icon: "clock", title: "Guia TV e Catch-Up", text: "Programação completa e programas que já passaram." },
];

export function ChannelsGrid() {
  return (
    <ul className="channel-grid">
      {channelGroups.map((group) => (
        <li key={group.title} className="channel-card">
          <span className="channel-icon"><Icon name={group.icon} size={22} /></span>
          <h3>{group.title}</h3>
          <p>{group.text}</p>
        </li>
      ))}
    </ul>
  );
}

const devices = [
  { href: "/instalar-iptv/smart-tv-samsung", title: "Smart TV Samsung", text: "Tizen · IBO Player, Smart IPTV" },
  { href: "/instalar-iptv/smart-tv-lg", title: "Smart TV LG", text: "webOS · IBO Player, SS IPTV" },
  { href: "/instalar-iptv/fire-tv-stick", title: "Fire TV Stick", text: "TiviMate, IPTV Smarters" },
  { href: "/instalar-iptv/android-tv-box", title: "Box Android / Google TV", text: "Play Store · TiviMate" },
  { href: "/instalar-iptv/iphone-ipad", title: "iPhone, iPad, Apple TV", text: "Smarters Lite, GSE, IPTVX" },
  { href: "/instalar-iptv/pc-windows-mac", title: "PC e Mac", text: "VLC, IPTV Smarters" },
];

export function DevicesGrid() {
  return (
    <ul className="device-grid">
      {devices.map((device) => (
        <li key={device.href}>
          <Link href={device.href} className="device-card">
            <span>
              <strong>{device.title}</strong>
              <small>{device.text}</small>
            </span>
            <Icon name="arrow" size={18} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
