import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { facts, formatEuro, lowestMonthly, lowestPrice, offer } from "@/config/offer";
import { siteConfig } from "@/config/site";
import { publishedArticles } from "@/content";
import { generalFaq } from "@/content/pages/trust";
import { FaqList } from "@/components/FaqList";
import { Icon, WhatsAppIcon, type IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PricingMatrix } from "@/components/PricingMatrix";
import { ChannelsGrid, DevicesGrid, FactsGrid } from "@/components/Showcase";
import { faqPage, graph, organization, product, webPage, website } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { trialUrl } from "@/lib/whatsapp";

// Revalida de hora a hora: artigos agendados entram na secção do blog sem novo deploy.
export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({ path: "/", title: siteConfig.title, description: siteConfig.description });

const homeFaq = generalFaq.slice(0, 8);

const benefits: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Testas antes de pagar", text: `Teste grátis de ${offer.trialHours} horas no teu equipamento. Sem cartão, sem compromisso.` },
  { icon: "grid", title: "Preços à vista", text: "Tabela pública por duração e por número de ecrãs. O que vês é o que pagas." },
  { icon: "clock", title: "Sem fidelização", text: "Planos de 1, 3, 6 ou 12 meses. No fim, decides se renovas." },
  { icon: "chat", title: "Apoio em português", text: `Ajuda ${offer.support} pelo WhatsApp, da instalação à resolução de problemas.` },
  { icon: "tv", title: "Todos os ecrãs", text: "Smart TV, Fire TV Stick, box Android, iPhone, iPad e computador." },
  { icon: "globe", title: "Portugal e estrangeiro", text: "Canais portugueses e de dezenas de países, onde quer que estejas." },
];

const steps = [
  { title: "Pede o teste grátis", text: "Carrega no botão, indica o teu equipamento e recebes os dados pelo WhatsApp." },
  { title: "Instala a app", text: "Seguimos contigo o guia do teu equipamento. Demora poucos minutos." },
  { title: "Escolhe o plano", text: "Gostaste? Escolhe duração e ecrãs e recebe o link de pagamento." },
];

const trialChecks: { icon: IconName; title: string; text: string; href: string; link: string }[] = [
  { icon: "tv", title: "Compatibilidade", text: "Testa na TV ou no dispositivo que vais usar e confirma se a app é fácil de navegar.", href: "/instalar-iptv", link: "Guias de instalação" },
  { icon: "bolt", title: "Estabilidade", text: "Experimenta nos horários em que costumas ver televisão e observa pausas ou buffering.", href: "/resolver-buffering-iptv", link: "Resolver interrupções" },
  { icon: "grid", title: "Conteúdo e guia", text: "Procura as categorias que te interessam e verifica a qualidade, o EPG e o Catch-Up.", href: "/lista-iptv-portugal", link: "Explorar categorias" },
  { icon: "chat", title: "Apoio", text: "Faz uma pergunta concreta e vê se a resposta te ajuda a configurar o teu equipamento.", href: "/contacto", link: "Falar com o apoio" },
];

export default function HomePage() {
  const latest = publishedArticles().slice(0, 3);

  return (
    <main id="conteudo" className="home">
      <JsonLd
        data={graph(
          organization(),
          website(),
          webPage({ path: "/", name: siteConfig.title, description: siteConfig.description, updated: siteConfig.updated }),
          product("/precos"),
          faqPage(homeFaq),
        )}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-live"><span className="live-dot" /> IPTV Portugal · atualizado em 2026</p>
            <h1>Melhor IPTV em Portugal. <span>{facts.channels} para descobrir.</span></h1>
            <p className="hero-lead">
              A melhor experiência IPTV começa com uma escolha informada: canais portugueses e internacionais, {facts.vod} até 4K, guia TV e Catch-Up. Testa no teu ecrã antes de escolher um plano.
            </p>
            <div className="hero-actions">
              <a className="button button-signal button-lg" href={trialUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} /> Pedir teste grátis {offer.trialHours}h
              </a>
              <Link className="button button-outline button-lg" href="/precos">Ver preços <Icon name="arrow" size={18} /></Link>
            </div>
            <ul className="hero-proof">
              <li><Icon name="check" size={16} /> Sem cartão para o teste</li>
              <li><Icon name="check" size={16} /> Sem fidelização</li>
              <li><Icon name="check" size={16} /> Apoio {offer.support}</li>
            </ul>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-glow" aria-hidden="true" />
            <Image className="hero-product-image" src="/images/hero-devices.webp" alt="Televisão, tablet e telemóvel a apresentar experiências de cinema, desporto e paisagens" width={1400} height={933} sizes="(max-width: 920px) 100vw, 50vw" priority />
            <div className="hero-visual-note"><span className="live-dot" /> Em todos os teus ecrãs</div>
          </div>
        </div>
        <div className="container hero-bottom" aria-label="Resumo do serviço">
          <span><strong>{facts.channels}</strong> canais em direto</span>
          <span><strong>Até 4K</strong> qualidade de imagem</span>
          <span><strong>{formatEuro(lowestMonthly)}/mês</strong> no plano anual</span>
          <span><strong>{offer.trialHours} horas</strong> para testar grátis</span>
        </div>
      </section>

      <section className="section section-tight home-summary" aria-labelledby="resumo">
        <div className="container summary-grid">
          <div>
            <p className="eyebrow">Em resumo</p>
            <h2 id="resumo">O que é a {siteConfig.name}?</h2>
            <p className="section-lead">
              A {siteConfig.name} é um serviço de IPTV para Portugal: {facts.channels} em direto e {facts.vod} a pedido, vistos através de uma app na tua TV, box ou telemóvel. Custa {formatEuro(lowestPrice)} por 1 mês ou cerca de {formatEuro(lowestMonthly)} por mês no plano anual, sem fidelização, e podes testar grátis durante {offer.trialHours} horas.
            </p>
          </div>
          <FactsGrid />
        </div>
      </section>

      <section className="section home-benefits" aria-labelledby="porque">
        <div className="container">
          <div className="benefits-banner">
            <Image src="/images/benefits-banner.webp" alt="Sala de estar com televisão e vista para a costa ao entardecer" fill sizes="(max-width: 620px) 100vw, 1200px" />
            <div className="benefits-banner-copy">
              <p className="eyebrow">Porquê nós</p>
              <h2 id="porque" className="section-title">Transparência primeiro. Depois, televisão.</h2>
              <p>Tudo o que precisas de saber para começar com confiança, sem surpresas no fim.</p>
            </div>
          </div>
          <ul className="benefit-grid">
            {benefits.map((b) => (
              <li key={b.title} className="benefit">
                <span className="benefit-icon"><Icon name={b.icon} size={22} /></span>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark home-channels" aria-labelledby="canais">
        <div className="container">
          <div className="channel-banner">
            <Image src="/images/channels-banner.webp" alt="Cenários de televisão, desporto, cinema e entretenimento em painéis luminosos" fill sizes="(max-width: 620px) 100vw, 1200px" />
            <div className="channel-banner-content">
              <p className="eyebrow">Lista de canais</p>
              <h2 id="canais" className="section-title">{facts.channels}, organizados para encontrares tudo depressa</h2>
              <Link className="text-link" href="/lista-iptv-portugal">Ver a lista por categoria <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
          <ChannelsGrid />
        </div>
      </section>

      <section className="section home-steps" aria-labelledby="como-funciona">
        <div className="container">
          <div className="steps-banner">
            <Image src="/images/steps-banner.webp" alt="Telemóvel, box e televisão ligados numa instalação simples" fill sizes="(max-width: 620px) 100vw, 1200px" />
            <div className="steps-banner-copy">
              <p className="eyebrow">Como funciona</p>
              <h2 id="como-funciona" className="section-title">A ver televisão em 3 passos</h2>
            </div>
          </div>
          <ol className="steps steps-row">
            {steps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section home-trial-check" aria-labelledby="avaliar-teste">
        <div className="container">
          <div className="trial-check-head">
            <div>
              <p className="eyebrow">Guia prático · teste de 24 horas</p>
              <h2 id="avaliar-teste" className="section-title">Como avaliar o teu teste IPTV</h2>
            </div>
            <div>
              <p>Um teste útil vai além de contar canais. Usa estas quatro verificações no teu próprio equipamento antes de escolher um plano.</p>
              <Link className="text-link" href="/teste-iptv-gratis">Ver o guia do teste <Icon name="arrow" size={18} /></Link>
            </div>
          </div>
          <ol className="trial-check-grid">
            {trialChecks.map((check, index) => (
              <li key={check.title}>
                <div className="trial-check-top"><span className="trial-check-icon"><Icon name={check.icon} size={24} /></span><span className="trial-check-number">0{index + 1}</span></div>
                <h3>{check.title}</h3>
                <p>{check.text}</p>
                <Link href={check.href}>{check.link} <Icon name="arrow" size={16} /></Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-sand home-pricing" aria-labelledby="precos">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Preços</p>
              <h2 id="precos" className="section-title">Escolhe a duração e o número de ecrãs</h2>
            </div>
            <Link className="text-link" href="/precos">Tabela completa <Icon name="arrow" size={18} /></Link>
          </div>
          <PricingMatrix />
        </div>
      </section>

      <section className="section home-devices" aria-labelledby="dispositivos">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Compatibilidade</p>
              <h2 id="dispositivos" className="section-title">Funciona no que já tens em casa</h2>
            </div>
            <Link className="text-link" href="/instalar-iptv">Todos os guias <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="device-banner">
            <Image src="/images/devices-banner.webp" alt="Televisão, computador, tablet e telemóvel numa sala de estar" fill sizes="(max-width: 620px) 100vw, 1200px" />
            <div className="device-banner-copy"><span>UM SERVIÇO.</span><strong>Todos os teus ecrãs.</strong></div>
          </div>
          <DevicesGrid />
        </div>
      </section>

      <section className="section section-tight home-compare" aria-labelledby="comparar">
        <div className="container compare">
          <div>
            <p className="eyebrow">IPTV vs operador</p>
            <h2 id="comparar" className="section-title">Compara as condições, não só os canais</h2>
            <p className="section-lead">Os serviços e pacotes variam. Compara duração, ecrãs, conteúdos e condições de acesso antes de decidir.</p>
            <Link className="text-link" href="/iptv-vs-meo-nos-vodafone">Ler a comparação completa <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="table-wrap" role="region" aria-label="Comparação entre IPTV e operador" tabIndex={0}>
            <table>
              <thead><tr><th scope="col"></th><th scope="col">Operador</th><th scope="col">{siteConfig.name}</th></tr></thead>
              <tbody>
                <tr><th scope="row">Duração</th><td>Depende do contrato</td><td>Planos de 1 a 12 meses, sem fidelização</td></tr>
                <tr><th scope="row">Canais</th><td>Dependem do pacote escolhido</td><td>Consulta as categorias antes do teste</td></tr>
                <tr><th scope="row">Ecrãs</th><td>Confirma no teu pacote</td><td>Escolhe 1 a 4 em simultâneo</td></tr>
                <tr><th scope="row">Fora de casa</th><td>Verifica as condições da app</td><td>Testa na tua ligação e no teu dispositivo</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {latest.length ? (
        <section className="section section-sand home-guides" aria-labelledby="guias">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Guias e blog</p>
                <h2 id="guias" className="section-title">Aprende a tirar o máximo do IPTV</h2>
              </div>
              <Link className="text-link" href="/blog">Todos os artigos <Icon name="arrow" size={18} /></Link>
            </div>
            <ul className="card-grid">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link href={a.slug} className="post-card">
                    <small>{a.category}</small>
                    <strong>{a.h1}</strong>
                    <span>{a.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section home-faq" aria-labelledby="faq">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 id="faq" className="section-title">Dúvidas antes de começar</h2>
            <p className="section-lead">Não encontras a tua? Vê <Link href="/perguntas-frequentes">todas as perguntas</Link> ou fala connosco pelo WhatsApp.</p>
          </div>
          <FaqList items={homeFaq} />
        </div>
      </section>

      <section className="final-cta home-final-cta" aria-labelledby="comecar">
        <div className="container final-cta-inner">
          <h2 id="comecar">Vê primeiro. Decide depois.</h2>
          <p>{offer.trialHours} horas grátis com {facts.channels} e {facts.vod}. Sem cartão.</p>
          <a className="button button-signal button-lg" href={trialUrl()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={20} /> Pedir teste grátis
          </a>
        </div>
      </section>
    </main>
  );
}
