import { offer } from "@/config/offer";
import type { Page } from "@/content/types";

const updated = "2026-09-25";

const afterInstall = {
  t: "callout" as const,
  tone: "tip" as const,
  title: "Ainda não tens dados de acesso?",
  text: `Pede o [teste grátis de ${offer.trialHours} horas](/teste-iptv-gratis) pelo WhatsApp. Indica o teu equipamento e recebes os dados e a app recomendada.`,
};

export const installPages: Page[] = [
  {
    slug: "/instalar-iptv",
    kind: "hub",
    nav: "Instalar IPTV",
    keyword: "como instalar iptv",
    seoTitle: "Como Instalar IPTV: Guias para Smart TV, Fire TV e Android",
    description: "Guias passo a passo para instalar IPTV em Smart TV Samsung e LG, Fire TV Stick, box Android, iPhone, iPad e computador. Escolhe o teu equipamento.",
    eyebrow: "Guias de instalação",
    h1: "Como instalar IPTV em qualquer equipamento",
    summary: "Para ver IPTV precisas de três coisas: uma ligação à internet estável, uma app IPTV (o «leitor») instalada no teu equipamento e os dados de acesso da lista (Xtream Codes ou link M3U). A instalação demora normalmente entre 5 e 15 minutos. Escolhe abaixo o guia do teu equipamento.",
    updated,
    blocks: [
      { t: "devices" },
      { t: "h2", text: "O processo é sempre o mesmo" },
      {
        t: "steps",
        items: [
          { title: "Instala uma app IPTV", text: "A app é só o leitor: não traz canais. Vê as recomendações para cada equipamento ou o nosso [comparativo de apps IPTV](/melhores-apps-iptv)." },
          { title: "Introduz os dados de acesso", text: "Com Xtream Codes, escreves servidor, utilizador e palavra-passe. Com M3U, colas um link. Explicamos a diferença em [M3U vs Xtream Codes](/lista-m3u-vs-xtream-codes)." },
          { title: "Espera o carregamento da lista", text: "Na primeira vez, a app descarrega canais, filmes, séries e guia TV. Pode demorar um ou dois minutos." },
        ],
      },
      { t: "h2", text: "Qual o melhor equipamento para IPTV?" },
      {
        t: "table",
        head: ["Equipamento", "Vantagens", "A ter em conta"],
        rows: [
          ["Fire TV Stick 4K", "Barato, rápido, aceita quase todas as apps", "Precisa de ativar apps de origem desconhecida"],
          ["Box Android / Google TV", "Acesso à Play Store, ligação por cabo em muitos modelos", "Modelos muito baratos podem ser lentos"],
          ["Smart TV Samsung / LG", "Sem aparelhos extra", "Menos apps disponíveis; algumas têm ativação paga"],
          ["iPhone / iPad", "Ótimo para ver fora de casa", "Apps IPTV da App Store são diferentes das de Android"],
          ["Computador", "Útil para testes rápidos", "Menos prático para ver na sala"],
        ],
      },
      {
        t: "p",
        text: "Se a tua Smart TV tem mais de 5 anos ou é lenta, um Fire TV Stick ou uma box Android costuma dar melhor resultado do que a app da própria TV.",
      },
      afterInstall,
    ],
    faq: [
      { q: "Preciso de uma box para ver IPTV?", a: "Não. Muitas Smart TV Samsung e LG têm apps IPTV. Uma box ou um Fire TV Stick só é útil se a TV for antiga, lenta ou não tiver apps compatíveis." },
      { q: "A app IPTV já traz canais?", a: "Não. A app é apenas o leitor. Os canais vêm da lista (dados Xtream Codes ou link M3U) que recebes com o teste ou a subscrição." },
      { q: "Ajudam na instalação?", a: `Sim. O apoio ${offer.support} pelo WhatsApp ajuda-te a instalar e configurar a app no teu equipamento.` },
    ],
    related: ["/melhores-apps-iptv", "/lista-m3u-vs-xtream-codes", "/teste-iptv-gratis", "/resolver-buffering-iptv"],
  },
  {
    slug: "/instalar-iptv/smart-tv-samsung",
    kind: "guide",
    parent: "/instalar-iptv",
    nav: "Smart TV Samsung",
    keyword: "iptv samsung smart tv",
    seoTitle: "IPTV na Smart TV Samsung: Instalar em 5 Minutos (2026)",
    description: "Como instalar IPTV numa Smart TV Samsung (Tizen): que apps usar, como introduzir a lista e o que fazer se a app não aparecer na loja.",
    eyebrow: "Guia · Samsung",
    h1: "Como instalar IPTV numa Smart TV Samsung",
    summary: "Nas Smart TV Samsung (sistema Tizen), instalas uma app IPTV a partir da loja «Apps» da TV, abres a app e introduzes os dados da lista (Xtream Codes ou M3U). Apps como IBO Player, Smart IPTV ou IPTV Smarters costumam estar disponíveis, mas a lista muda conforme o modelo e o ano da TV. Se nenhuma estiver disponível, um Fire TV Stick resolve.",
    updated,
    blocks: [
      { t: "h2", text: "Antes de começar" },
      {
        t: "ul",
        items: [
          "Confirma que a TV está ligada à internet (Definições → Geral → Rede).",
          "Se possível, liga a TV ao router por **cabo de rede** — é mais estável do que Wi-Fi.",
          "Tem à mão os teus dados de acesso (ou pede o [teste grátis](/teste-iptv-gratis)).",
        ],
      },
      { t: "h2", text: "Passo a passo" },
      {
        t: "steps",
        items: [
          { title: "Abre a loja de apps", text: "No comando, carrega em Home e abre «Apps». Usa a lupa para pesquisar." },
          { title: "Pesquisa uma app IPTV", text: "Pesquisa por «IBO Player», «Smart IPTV» ou «IPTV Smarters». Se não aparecerem, o teu modelo pode não as suportar — vê a alternativa abaixo." },
          { title: "Instala e abre a app", text: "Algumas apps mostram um endereço MAC e uma chave no ecrã. Guarda esses dados: são necessários para ativar a lista." },
          { title: "Adiciona a lista", text: "Introduz os dados Xtream Codes na app ou, nas apps que usam MAC, envia-nos o MAC e nós associamos a lista por ti." },
          { title: "Reinicia a app", text: "Fecha e volta a abrir a app. Os canais, filmes e o guia TV devem carregar." },
        ],
      },
      {
        t: "callout",
        tone: "info",
        title: "Algumas apps têm ativação paga",
        text: "Certas apps para Smart TV (como Smart IPTV ou IBO Player) dão um período de teste e depois pedem uma ativação paga diretamente ao programador da app. Esse custo é da app, não da subscrição IPTV.",
      },
      { t: "h2", text: "A app não aparece na loja?" },
      {
        t: "p",
        text: "A Samsung retira e volta a aceitar apps IPTV com frequência, e a disponibilidade muda por país e por modelo. Se não encontrares nenhuma app, a solução mais simples é ligar um [Fire TV Stick](/instalar-iptv/fire-tv-stick) ou uma [box Android](/instalar-iptv/android-tv-box) à entrada HDMI da TV.",
      },
      { t: "h2", text: "Dicas para melhor imagem" },
      {
        t: "ul",
        items: [
          "Nas definições da app, escolhe o leitor/decoder recomendado pela app se tiveres cortes.",
          "Para 4K, usa cabo de rede e pelo menos 25 Mbps estáveis. Vê [a internet mínima para IPTV](/blog/internet-minima-para-iptv).",
          "Desliga o modo de poupança de energia da TV, que pode reduzir o desempenho.",
        ],
      },
      afterInstall,
    ],
    faq: [
      { q: "Qual é a melhor app IPTV para Samsung?", a: "Depende do modelo. IBO Player e Smart IPTV são das mais estáveis em Tizen; IPTV Smarters é mais simples quando está disponível. Pede-nos uma recomendação para o teu modelo." },
      { q: "A minha Samsung é antiga. Funciona?", a: "Modelos anteriores a 2017 podem não ter apps compatíveis ou ser lentos. Nesses casos recomendamos um Fire TV Stick ligado por HDMI." },
    ],
    related: ["/instalar-iptv/smart-tv-lg", "/instalar-iptv/fire-tv-stick", "/melhores-apps-iptv", "/resolver-buffering-iptv"],
  },
  {
    slug: "/instalar-iptv/smart-tv-lg",
    kind: "guide",
    parent: "/instalar-iptv",
    nav: "Smart TV LG",
    keyword: "iptv lg smart tv",
    seoTitle: "IPTV na Smart TV LG (webOS): Guia de Instalação 2026",
    description: "Guia para instalar IPTV numa Smart TV LG com webOS: apps compatíveis na LG Content Store, como adicionar a lista e soluções para problemas comuns.",
    eyebrow: "Guia · LG",
    h1: "Como instalar IPTV numa Smart TV LG (webOS)",
    summary: "Numa Smart TV LG, instalas uma app IPTV a partir da LG Content Store (no menu da TV), abres a app e adicionas a tua lista com os dados Xtream Codes ou o link M3U. As apps mais comuns em webOS são IBO Player, Smart IPTV e SS IPTV. Em TVs LG antigas ou lentas, um Fire TV Stick dá melhor resultado.",
    updated,
    blocks: [
      { t: "h2", text: "Passo a passo" },
      {
        t: "steps",
        items: [
          { title: "Abre a LG Content Store", text: "Carrega no botão Home do comando e abre a LG Content Store (ou «Apps»)." },
          { title: "Pesquisa a app", text: "Procura por «IBO Player», «Smart IPTV» ou «SS IPTV» e instala uma delas." },
          { title: "Anota o MAC, se pedido", text: "Algumas apps mostram um endereço MAC ao abrir. É com ele que a lista fica associada à tua TV." },
          { title: "Adiciona a lista", text: "Introduz os dados Xtream Codes ou o link M3U. Nas apps baseadas em MAC, envia-nos o MAC pelo WhatsApp." },
          { title: "Abre os canais", text: "Reinicia a app e espera que canais e guia TV carreguem." },
        ],
      },
      {
        t: "callout",
        tone: "info",
        title: "Ativação da app",
        text: "Tal como na Samsung, algumas apps de webOS têm um período gratuito e depois uma ativação paga ao programador. É independente do plano IPTV.",
      },
      { t: "h2", text: "Problemas frequentes na LG" },
      {
        t: "table",
        head: ["Problema", "Solução"],
        rows: [
          ["A app não aparece na loja", "Confirma que a região da TV está em Portugal; se continuar, usa um Fire TV Stick"],
          ["A lista não carrega", "Verifica os dados introduzidos e reinicia a TV (desligar da tomada 30 segundos)"],
          ["Imagem a parar", "Liga por cabo de rede e vê o guia de [buffering](/resolver-buffering-iptv)"],
          ["Guia TV vazio", "Na app, atualiza o EPG ou volta a carregar a lista"],
        ],
      },
      afterInstall,
    ],
    faq: [
      { q: "Qual a melhor app IPTV para LG?", a: "IBO Player e Smart IPTV são as mais usadas em webOS. A melhor escolha depende do ano do modelo; o apoio indica-te a mais estável para a tua TV." },
      { q: "Posso usar a mesma lista na LG e no telemóvel?", a: "Sim, desde que o teu plano permita o número de ecrãs que usas ao mesmo tempo." },
    ],
    related: ["/instalar-iptv/smart-tv-samsung", "/instalar-iptv/fire-tv-stick", "/melhores-apps-iptv", "/precos"],
  },
  {
    slug: "/instalar-iptv/fire-tv-stick",
    kind: "guide",
    parent: "/instalar-iptv",
    nav: "Fire TV Stick",
    keyword: "iptv fire tv stick",
    seoTitle: "IPTV no Fire TV Stick: Como Instalar Passo a Passo",
    description: "Instala IPTV no Amazon Fire TV Stick: ativar apps de origem desconhecida, instalar com o Downloader e configurar a lista. Guia atualizado para Fire OS.",
    eyebrow: "Guia · Fire TV",
    h1: "Como instalar IPTV no Fire TV Stick",
    summary: "No Fire TV Stick, ativas as opções de programador, permites a instalação de apps de origem desconhecida para a app Downloader e usas o Downloader para instalar uma app IPTV como IPTV Smarters ou TiviMate. Depois introduzes os dados da lista. É um dos equipamentos mais baratos e estáveis para IPTV.",
    updated,
    blocks: [
      { t: "h2", text: "1. Ativar as opções de programador" },
      {
        t: "ol",
        items: [
          "Vai a **Definições → A minha Fire TV → Acerca de**.",
          "Seleciona o nome do teu dispositivo (por exemplo «Fire TV Stick 4K») e carrega **7 vezes** no botão central do comando.",
          "Volta atrás: aparece o menu **Opções de programador**.",
        ],
      },
      { t: "h2", text: "2. Instalar o Downloader" },
      {
        t: "ol",
        items: [
          "No ecrã inicial, pesquisa **Downloader** e instala a app (ícone laranja).",
          "Em **Opções de programador → Instalar apps desconhecidas**, ativa a permissão para o **Downloader**.",
        ],
      },
      { t: "h2", text: "3. Instalar a app IPTV" },
      {
        t: "ol",
        items: [
          "Abre o Downloader e escreve o endereço ou o código da app que te indicarmos pelo WhatsApp.",
          "Confirma a instalação quando aparecer o aviso e, no fim, apaga o ficheiro de instalação para poupar espaço.",
          "Abre a app IPTV e introduz os teus dados Xtream Codes (servidor, utilizador e palavra-passe).",
        ],
      },
      {
        t: "callout",
        tone: "warn",
        title: "Instala apps só de fontes que conheces",
        text: "Uma app de origem desconhecida pode conter malware. Usa apenas os endereços oficiais das apps ou os que o nosso apoio te envia.",
      },
      { t: "h2", text: "Apps recomendadas para Fire TV" },
      {
        t: "ul",
        items: [
          "**TiviMate** — a melhor interface para canais em direto e guia TV; algumas funções exigem a versão Premium paga.",
          "**IPTV Smarters Pro** — simples, grátis, com canais, filmes e séries.",
          "**OTT Navigator** — muito configurável, para quem gosta de ajustar tudo.",
        ],
      },
      {
        t: "p",
        text: "Compara todas as opções no nosso guia das [melhores apps IPTV](/melhores-apps-iptv).",
      },
      { t: "h2", text: "Dicas para o Fire TV Stick" },
      {
        t: "ul",
        items: [
          "Prefere o **Fire TV Stick 4K** ou o **4K Max** — o modelo básico é mais lento.",
          "Se o Wi-Fi for fraco, usa um adaptador Ethernet para ligar por cabo.",
          "Limpa a cache da app IPTV de vez em quando (Definições → Aplicações → Gerir aplicações).",
        ],
      },
      afterInstall,
    ],
    faq: [
      { q: "É preciso fazer «jailbreak» ao Fire TV Stick?", a: "Não. Basta ativar as opções de programador e permitir apps desconhecidas para o Downloader. Não alteras o sistema." },
      { q: "Qual o melhor Fire TV Stick para IPTV?", a: "O Fire TV Stick 4K ou o 4K Max. Têm mais memória e processador mais rápido, o que se nota ao mudar de canal e no guia TV." },
    ],
    related: ["/melhores-apps-iptv", "/instalar-iptv/android-tv-box", "/resolver-buffering-iptv", "/teste-iptv-gratis"],
  },
  {
    slug: "/instalar-iptv/android-tv-box",
    kind: "guide",
    parent: "/instalar-iptv",
    nav: "Box Android / Google TV",
    keyword: "iptv box android",
    seoTitle: "IPTV em Box Android e Google TV: Guia de Instalação",
    description: "Como instalar IPTV numa box Android, Android TV ou Google TV (incluindo Chromecast com Google TV e TV Philips, Sony ou TCL). Apps e configuração.",
    eyebrow: "Guia · Android TV",
    h1: "Como instalar IPTV numa box Android ou Google TV",
    summary: "Em equipamentos com Android TV ou Google TV (box Android, Chromecast com Google TV, TVs Sony, Philips, TCL e outras), instalas uma app IPTV pela Google Play Store — por exemplo TiviMate ou OTT Navigator — e introduzes os dados da lista. Se a app que queres não estiver na Play Store, podes instalá-la com a app Downloader.",
    updated,
    blocks: [
      { t: "h2", text: "Passo a passo" },
      {
        t: "steps",
        items: [
          { title: "Abre a Google Play Store", text: "No ecrã inicial, abre a Play Store e pesquisa «TiviMate» ou «OTT Navigator»." },
          { title: "Instala a app", text: "Instala e abre a app. Aceita as permissões pedidas." },
          { title: "Adiciona a lista", text: "Escolhe «Xtream Codes» e introduz servidor, utilizador e palavra-passe — ou cola o link M3U." },
          { title: "Ativa o guia TV", text: "Na maioria das apps, o EPG carrega sozinho com Xtream Codes. Com M3U, pode ser preciso colar também o link do EPG." },
        ],
      },
      { t: "h2", text: "Que box Android comprar?" },
      {
        t: "p",
        text: "Para IPTV não precisas de uma box cara, mas evita modelos sem marca com Android muito antigo. Procura:",
      },
      {
        t: "ul",
        items: [
          "**Android TV / Google TV certificado** (tem Play Store oficial e atualizações).",
          "**Pelo menos 2 GB de RAM** e 8 GB de armazenamento.",
          "**Porta Ethernet** para ligar por cabo ao router.",
          "Suporte a **4K HDR** se a tua TV for 4K.",
        ],
      },
      {
        t: "callout",
        tone: "tip",
        title: "Chromecast com Google TV",
        text: "O Chromecast com Google TV funciona como uma box Android: instalas as apps diretamente nele, não precisas de «transmitir» do telemóvel.",
      },
      afterInstall,
    ],
    faq: [
      { q: "Posso usar IPTV numa TV Sony, Philips ou TCL?", a: "Sim, se a TV tiver Android TV ou Google TV. Nesse caso segues exatamente este guia." },
      { q: "TiviMate ou IPTV Smarters?", a: "TiviMate é melhor para canais em direto e guia TV; IPTV Smarters é mais simples e junta canais, filmes e séries. Podes experimentar as duas no teste grátis." },
    ],
    related: ["/instalar-iptv/fire-tv-stick", "/melhores-apps-iptv", "/lista-m3u-vs-xtream-codes", "/precos"],
  },
  {
    slug: "/instalar-iptv/iphone-ipad",
    kind: "guide",
    parent: "/instalar-iptv",
    nav: "iPhone e iPad",
    keyword: "iptv iphone",
    seoTitle: "IPTV no iPhone e iPad: Melhores Apps e Configuração",
    description: "Como ver IPTV no iPhone, iPad e Apple TV: apps da App Store compatíveis com Xtream Codes e M3U, configuração e dicas para ver fora de casa.",
    eyebrow: "Guia · Apple",
    h1: "Como ver IPTV no iPhone, iPad e Apple TV",
    summary: "No iPhone, iPad e Apple TV instalas pela App Store uma app IPTV compatível com Xtream Codes ou M3U — por exemplo Smarters Player Lite, GSE Smart IPTV ou IPTVX — e introduzes os dados da tua lista. Assim vês canais, filmes e séries em casa ou fora dela, com rede móvel ou Wi-Fi.",
    updated,
    blocks: [
      { t: "h2", text: "Passo a passo" },
      {
        t: "steps",
        items: [
          { title: "Instala a app", text: "Na App Store, pesquisa «Smarters Player Lite», «GSE Smart IPTV» ou «IPTVX»." },
          { title: "Escolhe o tipo de login", text: "Seleciona «Xtream Codes API» (recomendado) ou «M3U URL»." },
          { title: "Introduz os dados", text: "Escreve um nome à tua escolha, o servidor, o utilizador e a palavra-passe que recebeste." },
          { title: "Começa a ver", text: "Espera que a lista carregue. Podes marcar canais favoritos para os encontrar mais depressa." },
        ],
      },
      { t: "h2", text: "Apps para Apple" },
      {
        t: "table",
        head: ["App", "Para quem", "Nota"],
        rows: [
          ["Smarters Player Lite", "Quem quer simplicidade", "Grátis, com anúncios ou compra na app"],
          ["GSE Smart IPTV", "Quem quer muitas opções", "Suporta M3U, Xtream e EPG externo"],
          ["IPTVX", "Apple TV e iPad", "Interface muito cuidada; app paga"],
        ],
      },
      {
        t: "callout",
        tone: "info",
        title: "Ver na TV a partir do iPhone",
        text: "Podes usar AirPlay para enviar a imagem para uma Apple TV ou TV compatível, mas a experiência é melhor com a app instalada diretamente na Apple TV.",
      },
      { t: "h2", text: "Ver fora de casa" },
      {
        t: "p",
        text: "Com rede móvel, um canal em HD consome cerca de 1,5 a 3 GB por hora. Se o teu tarifário tiver poucos dados, prefere Wi-Fi ou baixa a qualidade nas definições da app.",
      },
      afterInstall,
    ],
    faq: [
      { q: "Há apps IPTV grátis para iPhone?", a: "Sim. Smarters Player Lite e GSE Smart IPTV têm versões gratuitas. Algumas funções extra são pagas dentro da app." },
      { q: "Conta como dispositivo em simultâneo?", a: "Sim. Se vires no iPhone ao mesmo tempo que alguém vê na TV, precisas de um plano com 2 dispositivos." },
    ],
    related: ["/melhores-apps-iptv", "/blog/iptv-varios-dispositivos", "/blog/iptv-portugueses-no-estrangeiro", "/precos"],
  },
  {
    slug: "/instalar-iptv/pc-windows-mac",
    kind: "guide",
    parent: "/instalar-iptv",
    nav: "PC e Mac",
    keyword: "iptv no pc",
    seoTitle: "IPTV no PC (Windows e Mac): VLC e Outras Apps",
    description: "Como ver IPTV no computador com Windows ou Mac: abrir a lista M3U no VLC, usar apps IPTV para desktop e resolver problemas comuns.",
    eyebrow: "Guia · Computador",
    h1: "Como ver IPTV no computador (Windows e Mac)",
    summary: "A forma mais rápida de ver IPTV no computador é abrir o link M3U no VLC (Media → Abrir fluxo de rede). Para uma experiência completa, com guia TV, filmes e séries organizados, usa uma app IPTV para desktop, como IPTV Smarters para Windows e Mac ou MyIPTV Player na Microsoft Store.",
    updated,
    blocks: [
      { t: "h2", text: "Opção 1: VLC (grátis, Windows e Mac)" },
      {
        t: "ol",
        items: [
          "Instala o VLC a partir do site oficial [videolan.org](https://www.videolan.org/).",
          "Abre o VLC e vai a **Media → Abrir fluxo de rede** (no Mac: **Ficheiro → Abrir rede**).",
          "Cola o teu link M3U e carrega em **Reproduzir**.",
          "Abre a lista de reprodução (Ctrl+L) para ver e escolher os canais.",
        ],
      },
      {
        t: "p",
        text: "O VLC é ótimo para testar, mas não tem guia TV nem organiza filmes e séries.",
      },
      { t: "h2", text: "Opção 2: app IPTV para desktop" },
      {
        t: "ul",
        items: [
          "**IPTV Smarters** — versão para Windows e Mac, com login Xtream Codes, canais, filmes, séries e EPG.",
          "**MyIPTV Player** — disponível na Microsoft Store para Windows, suporta M3U e EPG.",
        ],
      },
      { t: "h2", text: "Ligar o computador à TV" },
      {
        t: "p",
        text: "Com um cabo HDMI, vês na TV o que está no computador. Para uso diário na sala, no entanto, um [Fire TV Stick](/instalar-iptv/fire-tv-stick) é mais prático.",
      },
      afterInstall,
    ],
    faq: [
      { q: "Posso ver IPTV no browser?", a: "Algumas soluções funcionam no browser, mas uma app dedicada ou o VLC são mais estáveis e compatíveis com todos os canais." },
      { q: "O VLC mostra o guia TV?", a: "Não. Para guia TV (EPG), usa uma app IPTV como IPTV Smarters ou MyIPTV Player." },
    ],
    related: ["/lista-m3u-vs-xtream-codes", "/melhores-apps-iptv", "/instalar-iptv", "/teste-iptv-gratis"],
  },
];
