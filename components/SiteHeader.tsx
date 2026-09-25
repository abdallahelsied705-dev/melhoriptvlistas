import Link from "next/link";
import { mainNav } from "@/config/navigation";
import { Logo } from "@/components/Logo";
import { Icon, WhatsAppIcon } from "@/components/Icon";
import { trialUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <div className="container header-row">
        <Link href="/" className="header-logo" aria-label="Melhor IPTV Listas — página inicial">
          <Logo />
        </Link>
        <nav className="header-nav" aria-label="Principal">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <a className="button button-signal header-cta" href={trialUrl()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={18} /> Teste grátis 24h
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Icon name="menu" size={24} /></summary>
          <nav className="mobile-panel" aria-label="Menu">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/teste-iptv-gratis">Teste grátis</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
