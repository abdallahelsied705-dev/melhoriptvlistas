import { facts, formatEuro, lowestMonthly, lowestPrice, offer, priceFor } from "@/config/offer";
import type { Page } from "@/content/types";

const updated = "2026-09-25";

export const moneyPages: Page[] = [
  {
    slug: "/precos",
    kind: "money",
    nav: "Preços",
    keyword: "preços iptv portugal",
    seoTitle: "Preços IPTV Portugal 2026: Planos desde 12,99€ | Tabela",
    description: `Preços IPTV em Portugal sem fidelização: 1, 3, 6 ou 12 meses, de 1 a 4 dispositivos. Plano anual ${facts.fromMonthly}. Vê a tabela completa.`,
    eyebrow: "Planos e preços",
    h1: "Preços IPTV em Portugal: planos de 1 a 12 meses, até 4 dispositivos",
    summary: `Um plano de IPTV custa ${formatEuro(lowestPrice)} por 1 mês e ${formatEuro(priceFor(1, 12))} por 12 meses (cerca de ${formatEuro(lowestMonthly)} por mês) para 1 dispositivo. Todos os planos incluem ${facts.channels}, ${facts.vod}, guia TV e apoio ${offer.support}, sem fidelização. O preço depende da duração e dos dispositivos em simultâneo.`,
    updated,
    blocks: [
      { t: "pricing" },
      { t: "h2", text: "O que está incluído em todos os planos" },
      {
        t: "p",
        text: `O preço muda com a **duração** e com o **número de ecrãs a ver ao mesmo tempo**. O conteúdo é igual em todos os planos.`,
      },
      { t: "facts" },
      { t: "h2", text: "Tabela completa de preços" },
      {
        t: "table",
        caption: "Preço total em euros por duração e número de dispositivos em simultâneo",
        head: ["Duração", "1 dispositivo", "2 dispositivos", "3 dispositivos", "4 dispositivos"],
        rows: offer.months.map((m) => [
          m === 1 ? "1 mês" : `${m} meses`,
          ...offer.devices.map((d) => formatEuro(priceFor(d, m))),
        ]),
      },
      { t: "h2", text: "Que plano faz mais sentido para ti?" },
      {
        t: "ul",
        items: [
          "**1 mês** — para quem quer começar sem compromisso, depois do [teste grátis](/teste-iptv-gratis).",
          "**3 meses** — para cobrir uma época curta ou um período específico (por exemplo, um torneio).",
          "**6 meses** — o equilíbrio mais escolhido entre preço mensal e flexibilidade.",
          `**12 meses** — cerca de ${formatEuro(lowestMonthly)} por mês com 1 dispositivo.`,
        ],
      },
      {
        t: "callout",
        tone: "tip",
        title: "Quantos dispositivos escolher?",
        text: "Conta os ecrãs que vão estar ligados **ao mesmo tempo**, não o total de aparelhos da casa. Podes instalar a app em várias TVs e telemóveis; o plano limita apenas as ligações em simultâneo. Mais detalhes em [IPTV em vários dispositivos](/blog/iptv-varios-dispositivos).",
      },
      { t: "h2", text: "Como funciona o pagamento" },
      {
        t: "steps",
        items: [
          { title: "Escolhe o plano", text: "Nos cartões acima, seleciona o número de dispositivos e carrega em «Escolher plano». O WhatsApp abre com o plano e o preço já escritos." },
          { title: "Recebe o link de pagamento", text: "A equipa de apoio confirma o pedido e envia-te o link de pagamento pelo WhatsApp." },
          { title: "Recebe os dados de acesso", text: "Depois do pagamento, recebes os dados para a tua app e ajuda na instalação, se precisares." },
        ],
      },
      { t: "cta", kind: "trial" },
    ],
    faq: [
      { q: "Há fidelização ou renovação automática?", a: "Não. Pagas o período que escolheres (1, 3, 6 ou 12 meses) e decides no fim se queres renovar." },
      { q: "Os planos mais caros têm mais canais?", a: `Não. Todos os planos têm o mesmo conteúdo: ${facts.channels} e ${facts.vod}. O preço depende só da duração e dos dispositivos em simultâneo.` },
      { q: "Posso experimentar antes de pagar?", a: `Sim. Pede o teste grátis de ${offer.trialHours} horas pelo WhatsApp e confirma no teu equipamento os canais e a qualidade antes de escolher.` },
      { q: "Posso mudar para mais dispositivos depois?", a: "Sim. Fala connosco pelo WhatsApp e indicamos o valor para ajustar o plano." },
    ],
    related: ["/teste-iptv-gratis", "/lista-iptv-portugal", "/blog/quanto-custa-iptv-portugal", "/iptv-vs-meo-nos-vodafone"],
  },
  {
    slug: "/teste-iptv-gratis",
    kind: "money",
    nav: "Teste grátis",
    keyword: "teste iptv grátis",
    seoTitle: "Teste IPTV Grátis 24 Horas em Portugal | Pede pelo WhatsApp",
    description: `Pede um teste IPTV grátis de ${offer.trialHours} horas e experimenta ${facts.channels} no teu dispositivo antes de pagar. Sem cartão, pedido pelo WhatsApp.`,
    eyebrow: "Teste grátis",
    h1: `Teste IPTV grátis de ${offer.trialHours} horas: experimenta antes de pagar`,
    summary: `O teste IPTV grátis dá-te ${offer.trialHours} horas de acesso completo para confirmares canais, qualidade de imagem e estabilidade no teu próprio equipamento. Pedes pelo WhatsApp, indicas o dispositivo e recebes os dados de acesso. Não pedimos cartão nem pagamento para o teste.`,
    updated,
    blocks: [
      { t: "cta", kind: "trial" },
      { t: "h2", text: "Como pedir o teste em 3 passos" },
      {
        t: "steps",
        items: [
          { title: "Abre o WhatsApp", text: "Carrega em «Pedir teste grátis». A mensagem já vai escrita; só tens de indicar o teu dispositivo (Smart TV, Fire TV Stick, box Android, telemóvel…)." },
          { title: "Instala a app indicada", text: "Dizemos-te qual a app mais adequada ao teu equipamento. Os nossos [guias de instalação](/instalar-iptv) mostram o passo a passo." },
          { title: "Testa durante 24 horas", text: "Vê os canais que te interessam, muda de canal, experimenta filmes e séries e repara na estabilidade à hora de ponta." },
        ],
      },
      { t: "h2", text: "O que deves verificar durante o teste" },
      {
        t: "p",
        text: "Um teste só é útil se for feito com método. Estas são as verificações que recomendamos — as mesmas que usamos no nosso guia sobre [como escolher a melhor lista IPTV](/melhor-lista-iptv).",
      },
      {
        t: "ol",
        items: [
          "**Os teus canais**: procura os canais portugueses e de desporto que vês mais. Se faltar algum importante, pergunta-nos antes de pagar.",
          "**Horário nobre**: testa entre as 20h e as 23h e durante um jogo, quando os servidores têm mais carga.",
          "**Tempo de mudança de canal**: deve ser de poucos segundos, sem bloqueios.",
          "**Guia TV (EPG)**: confirma que mostra a programação correta dos canais.",
          "**Filmes e séries**: abre dois ou três títulos e vê se arrancam depressa.",
          "**A tua internet**: se houver cortes, faz o teste por cabo de rede — ajuda a perceber se o problema é o Wi-Fi. Vê [como resolver o buffering](/resolver-buffering-iptv).",
        ],
      },
      {
        t: "callout",
        tone: "info",
        title: "Regras do teste",
        text: `Um teste de ${offer.trialHours} horas por pessoa e por equipamento. O teste inclui o mesmo conteúdo dos planos pagos.`,
      },
      { t: "h2", text: "Depois do teste" },
      {
        t: "p",
        text: `Se gostares, escolhe um plano na página de [preços](/precos) — desde ${formatEuro(lowestPrice)} por 1 mês ou cerca de ${formatEuro(lowestMonthly)} por mês no plano anual. Se não gostares, não pagas nada e o acesso termina sozinho.`,
      },
      { t: "cta", kind: "pricing" },
    ],
    faq: [
      { q: "O teste IPTV é mesmo grátis?", a: `Sim. O teste de ${offer.trialHours} horas não tem custo e não pedimos cartão. No fim, o acesso termina automaticamente.` },
      { q: "Quanto tempo demora a receber o teste?", a: "Depois de enviares a mensagem com o teu dispositivo, a equipa de apoio responde pelo WhatsApp com os dados de acesso e a app recomendada." },
      { q: "Em que dispositivos posso fazer o teste?", a: "Em Smart TV Samsung e LG, Fire TV Stick, box Android, Google TV, iPhone, iPad, Android e computador. Cada teste é para um equipamento." },
      { q: "O teste tem os mesmos canais do plano pago?", a: "Sim. O objetivo é veres exatamente o serviço que vais pagar." },
    ],
    related: ["/precos", "/instalar-iptv", "/melhor-lista-iptv", "/resolver-buffering-iptv"],
  },
  {
    slug: "/lista-iptv-portugal",
    kind: "money",
    nav: "Lista de canais",
    keyword: "lista iptv portugal",
    seoTitle: "Lista IPTV Portugal: 45.000 Canais por Categoria (2026)",
    description: `Lista IPTV Portugal com ${facts.channels}: generalistas portugueses, desporto, notícias, filmes, infantis e internacionais, com guia TV e ${facts.vod}.`,
    eyebrow: "Lista de canais",
    h1: "Lista IPTV Portugal: canais portugueses e internacionais por categoria",
    summary: `A lista IPTV inclui ${facts.channels} em direto — generalistas portugueses, desporto, notícias, cinema, séries, infantis e canais de dezenas de países — mais ${facts.vod} a pedido, em qualidade até 4K. Os canais estão organizados por país e categoria, com guia TV (EPG). A forma mais segura de confirmar um canal específico é o teste grátis de ${offer.trialHours} horas.`,
    updated,
    blocks: [
      { t: "channels" },
      { t: "h2", text: "Como a lista está organizada" },
      {
        t: "p",
        text: "Numa app IPTV, os canais aparecem agrupados em **categorias** (por exemplo «Portugal | Desporto» ou «Portugal | Notícias»). Assim encontras o que procuras sem percorrer milhares de canais. Podes também marcar favoritos e criar a tua própria lista.",
      },
      {
        t: "table",
        caption: "O que encontras em cada grupo",
        head: ["Grupo", "O que inclui"],
        rows: [
          ["Portugal", "Generalistas, informação, desporto, entretenimento, regionais e canais para crianças"],
          ["Desporto", "Futebol português e europeu, Fórmula 1, NBA, ténis, combate e eventos PPV"],
          ["Cinema e séries", "Canais temáticos de filmes e séries, mais o catálogo a pedido (VOD)"],
          ["Internacional", "Brasil, Espanha, França, Reino Unido, Alemanha, Itália, Países Baixos, países árabes, África lusófona e mais"],
          ["Infantil", "Canais de desenhos animados e conteúdo familiar"],
          ["Música e documentários", "Canais de música, natureza, história e ciência"],
        ],
      },
      { t: "h2", text: "Filmes e séries a pedido (VOD)" },
      {
        t: "p",
        text: `Além dos canais em direto, a lista inclui ${facts.vod}, organizados por género, com capa e sinopse. Vês quando quiseres, com pausa e retoma.`,
      },
      { t: "h2", text: "Guia TV e Catch-Up" },
      {
        t: "p",
        text: "O guia TV (EPG) mostra o que está a dar agora e a seguir em cada canal. Nos canais com Catch-Up, podes voltar atrás e ver programas que já passaram. Explicamos tudo em [EPG e Catch-Up explicados](/blog/epg-catch-up-iptv).",
      },
      {
        t: "callout",
        tone: "tip",
        title: "Procuras um canal específico?",
        text: "As grelhas mudam com o tempo. Antes de pagar, pede o [teste grátis](/teste-iptv-gratis) e confirma no teu equipamento os canais que mais vês — ou pergunta-nos diretamente pelo WhatsApp.",
      },
      { t: "h2", text: "Em que formato recebes a lista" },
      {
        t: "p",
        text: "Recebes os dados em formato **Xtream Codes** (servidor, utilizador e palavra-passe) e/ou **link M3U**, conforme a app que usas. Se não sabes a diferença, lê [M3U vs Xtream Codes](/lista-m3u-vs-xtream-codes).",
      },
      { t: "cta", kind: "trial" },
    ],
    faq: [
      { q: "Quantos canais tem a lista IPTV?", a: `A lista tem ${facts.channels} em direto e ${facts.vod} a pedido.` },
      { q: "A lista tem canais portugueses?", a: "Sim. Há uma secção dedicada a Portugal com generalistas, informação, desporto, entretenimento e canais infantis." },
      { q: "Os canais estão em HD e 4K?", a: `Sim. A maioria dos canais está em HD ou Full HD e há canais e conteúdos em 4K. A qualidade real depende também da tua ligação à internet.` },
      { q: "Posso ver canais de outros países?", a: "Sim. A lista inclui canais de dezenas de países, útil também para quem vive fora de Portugal." },
    ],
    related: ["/precos", "/teste-iptv-gratis", "/iptv-futebol", "/blog/iptv-portugueses-no-estrangeiro"],
  },
];
