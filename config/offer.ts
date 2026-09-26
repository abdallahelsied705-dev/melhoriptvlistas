/**
 * Fonte única dos factos comerciais. Qualquer número mostrado no site
 * (canais, preços, teste, dispositivos) vem daqui — altera só este ficheiro.
 * Preços e dispositivos incluídos iguais aos planos do iptv-pt.pt (setembro 2026).
 */

export type Devices = 1 | 2 | 3 | 4;
export type Months = 1 | 3 | 6 | 12;

export const offer = {
  whatsapp: "212710141872",
  whatsappDisplay: "+212 710 141 872",
  channels: 45000,
  vod: 120000,
  quality: "4K Ultra HD, Full HD e HD",
  support: "24/7 em português",
  trialHours: 24,
  devices: [1, 2, 3, 4] as Devices[],
  months: [1, 3, 6, 12] as Months[],
  /** Cada duração tem o seu preço base e os dispositivos já incluídos. */
  plans: {
    1: { price: 15, includedDevices: 1, extraDevicePrice: 9 },
    3: { price: 46, includedDevices: 2, extraDevicePrice: 13 },
    6: { price: 100, includedDevices: 3, extraDevicePrice: 20 },
    12: { price: 169, includedDevices: 4, extraDevicePrice: 25 },
  } as Record<Months, { price: number; includedDevices: Devices; extraDevicePrice: number }>,
  features: [
    "Qualidade até 4K Ultra HD",
    "45.000 canais em direto",
    "+120.000 filmes e séries",
    "Eventos PPV incluídos",
    "Guia TV (EPG) e Catch-Up",
    "Apoio 24/7 em português",
  ],
} as const;

const intPt = new Intl.NumberFormat("pt-PT");
/** "45.000" com ponto de milhares, independente do motor Intl (alguns usam espaço). */
export function formatCount(value: number) {
  return intPt.format(value).replace(/\s/g, ".");
}

export function formatEuro(value: number) {
  return `${value.toFixed(2).replace(".", ",")}€`;
}

export function priceFor(devices: Devices, months: Months) {
  const plan = offer.plans[months];
  return plan.price + Math.max(0, devices - plan.includedDevices) * plan.extraDevicePrice;
}

export function monthlyFor(devices: Devices, months: Months) {
  return priceFor(devices, months) / months;
}

export function monthsLabel(months: Months) {
  return months === 1 ? "1 mês" : `${months} meses`;
}

export function devicesLabel(devices: Devices) {
  return devices === 1 ? "1 dispositivo" : `${devices} dispositivos`;
}

/** Custo mensal mais baixo (plano anual, com 4 dispositivos incluídos). */
export const lowestMonthly = monthlyFor(1, 12);
export const lowestPrice = priceFor(1, 1);

export const facts = {
  channels: `${formatCount(offer.channels)} canais`,
  vod: `+${formatCount(offer.vod)} filmes e séries`,
  trial: `Teste grátis ${offer.trialHours}h`,
  fromMonthly: `desde ${formatEuro(lowestMonthly)}/mês`,
};
