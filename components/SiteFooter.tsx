import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { facts, offer } from "@/config/offer";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/Icon";
import { contactUrl } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label={`${siteConfig.name} — página inicial`}><Logo /></Link>
          <p>
            IPTV para Portugal e portugueses no estrangeiro: {facts.channels}, {facts.vod}, planos sem fidelização e apoio {offer.support}.
          </p>
          <a className="footer-whatsapp" href={contactUrl()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> {offer.whatsappDisplay}
          </a>
        </div>
        {footerNav.map((group) => (
          <nav key={group.title} className="footer-col" aria-label={group.title}>
            <p className="footer-title">{group.title}</p>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <p>© 2026 {siteConfig.name} · {siteConfig.domain}</p>
        <p>As marcas e apps referidas pertencem aos respetivos titulares e são mencionadas apenas para fins informativos.</p>
      </div>
    </footer>
  );
}
