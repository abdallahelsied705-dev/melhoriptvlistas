import Link from "next/link";
import { facts, formatEuro, lowestMonthly, offer } from "@/config/offer";
import { trialUrl } from "@/lib/whatsapp";
import { Icon, WhatsAppIcon } from "@/components/Icon";

export function CtaBand({ kind }: { kind: "trial" | "pricing" }) {
  if (kind === "pricing") {
    return (
      <aside className="cta-band">
        <div>
          <p className="cta-title">Planos desde {formatEuro(lowestMonthly)}/mês, sem fidelização</p>
          <p>{facts.channels}, {facts.vod} e apoio {offer.support}. De 1 a 4 dispositivos.</p>
        </div>
        <Link className="button button-signal" href="/precos">Ver preços <Icon name="arrow" size={18} /></Link>
      </aside>
    );
  }
  return (
    <aside className="cta-band">
      <div>
        <p className="cta-title">Experimenta grátis durante {offer.trialHours} horas</p>
        <p>Sem cartão. Pedes pelo WhatsApp, indicas o teu equipamento e recebes os dados de acesso.</p>
      </div>
      <a className="button button-signal" href={trialUrl()} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={18} /> Pedir teste grátis
      </a>
    </aside>
  );
}
