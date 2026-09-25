"use client";

import { useState } from "react";
import { devicesLabel, formatEuro, monthlyFor, monthsLabel, offer, priceFor, type Devices, type Months } from "@/config/offer";
import { planUrl, trialUrl } from "@/lib/whatsapp";
import { Icon, WhatsAppIcon } from "@/components/Icon";

const tags: Record<Months, string> = { 1: "Flexível", 3: "Curto prazo", 6: "Mais escolhido", 12: "Melhor valor" };

export function PricingMatrix() {
  const [devices, setDevices] = useState<Devices>(1);

  return (
    <div className="pricing" id="planos">
      <fieldset className="device-picker">
        <legend>Dispositivos a ver em simultâneo</legend>
        <div className="device-options">
          {offer.devices.map((count) => (
            <label key={count} className={count === devices ? "is-active" : undefined}>
              <input type="radio" name="devices" value={count} checked={count === devices} onChange={() => setDevices(count)} />
              <span className="device-count">{count}</span>
              <span className="device-text">{count === 1 ? "ecrã" : "ecrãs"}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="price-grid" aria-live="polite">
        {offer.months.map((months) => {
          const featured = months === 12;
          const price = priceFor(devices, months);
          return (
            <article key={months} className={`price-card${featured ? " is-featured" : ""}`}>
              <p className="price-tag">{tags[months]}</p>
              <h3 className="price-duration">{monthsLabel(months)}</h3>
              <p className="price-value">
                <span className="price-number">{formatEuro(price).replace("€", "")}</span>
                <span className="price-currency">€</span>
              </p>
              <p className="price-monthly">
                {months === 1 ? "Pagamento único" : `≈ ${formatEuro(monthlyFor(devices, months))} por mês`}
              </p>
              <ul className="price-features">
                <li><Icon name="check" size={16} /> {devicesLabel(devices)} em simultâneo</li>
                {offer.features.map((feature) => (
                  <li key={feature}><Icon name="check" size={16} /> {feature}</li>
                ))}
              </ul>
              <a
                className={`button ${featured ? "button-signal" : "button-ink"} price-cta`}
                href={planUrl(devices, months)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escolher {monthsLabel(months)} <Icon name="arrow" size={18} />
              </a>
            </article>
          );
        })}
      </div>

      <div className="pricing-trial">
        <div>
          <p className="pricing-trial-title">Ainda com dúvidas? Testa primeiro.</p>
          <p>Teste grátis de {offer.trialHours} horas, sem cartão. Escolhes o plano depois.</p>
        </div>
        <a className="button button-outline" href={trialUrl()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={18} /> Pedir teste grátis
        </a>
      </div>
      <p className="pricing-note">
        <Icon name="info" size={16} /> Ao escolher, o WhatsApp abre com o plano, os dispositivos e o preço já escritos. Recebes o link de pagamento da equipa de apoio.
      </p>
    </div>
  );
}
