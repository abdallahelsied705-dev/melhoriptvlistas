/**
 * Fonte única dos factos comerciais. Qualquer número mostrado no site
 * (canais, preços, teste, dispositivos) vem daqui — altera só este ficheiro.
 * Oferta confirmada pelo dono: igual à do iptvbr.pt (setembro 2026).
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
  /** Preço total em euros por número de dispositivos em simultâneo e duração. */
  prices: {
    1: { 1: 12.99, 3: 22.99, 6: 34.99, 12: 49.99 },
    2: { 1: 19.99, 3: 36.99, 6: 54.99, 12: 74.99 },
    3: { 1: 26.99, 3: 47.99, 6: 69.99, 12: 94.99 },
    4: { 1: 32.99, 3: 57.99, 6: 84.99, 12: 114.99 },
  } as Record<Devices, Record<Months, number>>,
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
  return offer.prices[devices][months];
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

/** Custo mensal mais baixo (1 dispositivo, plano de 12 meses). */
export const lowestMonthly = monthlyFor(1, 12);
export const lowestPrice = priceFor(1, 1);

export const facts = {
  channels: `${formatCount(offer.channels)} canais`,
  vod: `+${formatCount(offer.vod)} filmes e séries`,
  trial: `Teste grátis ${offer.trialHours}h`,
  fromMonthly: `desde ${formatEuro(lowestMonthly)}/mês`,
};
