import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

const shortcuts = [
  { href: "/precos", label: "Preços" },
  { href: "/teste-iptv-gratis", label: "Teste grátis" },
  { href: "/instalar-iptv", label: "Guias de instalação" },
  { href: "/blog", label: "Blog" },
];

export default function NotFound() {
  return (
    <main id="conteudo" className="not-found">
      <div className="container">
        <p className="eyebrow">Erro 404</p>
        <h1>Este canal não está na lista.</h1>
        <p className="section-lead">A página que procuras não existe ou mudou de endereço. Experimenta um destes atalhos:</p>
        <ul className="not-found-links">
          {shortcuts.map((s) => (
            <li key={s.href}><Link className="button button-outline" href={s.href}>{s.label} <Icon name="arrow" size={18} /></Link></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
