import { offer, devicesLabel, formatEuro, monthsLabel, priceFor, type Devices, type Months } from "@/config/offer";
import { siteConfig } from "@/config/site";

/** Todas as mensagens começam com o site, para saber de onde vem cada pedido. */
export function whatsappUrl(message: string) {
  const text = `🌐 Site: ${siteConfig.domain}\n\n${message}`;
  return `https://wa.me/${offer.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function trialUrl() {
  return whatsappUrl(`Olá! 👋 Quero pedir o teste grátis de ${offer.trialHours} horas.\n\n📺 O meu dispositivo é: `);
}

export function planUrl(devices: Devices, months: Months) {
  return whatsappUrl(
    [
      "Olá! 👋 Quero subscrever este plano:",
      "",
      `📦 Duração: ${monthsLabel(months)}`,
      `📺 Dispositivos: ${devicesLabel(devices)}`,
      `💰 Preço: ${formatEuro(priceFor(devices, months))}`,
      "",
      "Podem enviar-me o link de pagamento?",
    ].join("\n"),
  );
}

export function contactUrl() {
  return whatsappUrl("Olá! 👋 Tenho uma dúvida sobre o serviço IPTV.");
}
