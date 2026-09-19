import Image from "next/image";
import {
  ArrowRight,
  AtSign,
  Check,
  ChevronDown,
  Hammer,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/5547988198456?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20ambiente.";

const services = [
  {
    title: "Pisos vinílicos",
    copy: "Conforto acústico, toque agradável e resistência para uma rotina mais leve.",
    image: "/assets/projeto-cozinha.png",
    alt: "Cozinha integrada com piso vinílico amadeirado",
    className: "service-card service-card-large",
  },
  {
    title: "Pisos laminados",
    copy: "Visual acolhedor, instalação eficiente e excelente relação entre beleza e praticidade.",
    className: "service-card service-card-text service-card-laminate",
  },
  {
    title: "Rodapés",
    copy: "O encontro preciso entre piso e parede, com acabamento limpo em cada detalhe.",
    className: "service-card service-card-text service-card-baseboard",
  },
  {
    title: "Papel de parede",
    copy: "Textura e personalidade para completar o ambiente com uma composição coerente.",
    image: "/assets/projeto-escritorio.png",
    alt: "Escritório finalizado com piso amadeirado e parede texturizada",
    className: "service-card service-card-image",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Entender",
    copy: "Você compartilha medidas, fotos e o resultado que imagina para o espaço.",
  },
  {
    icon: Ruler,
    title: "Medir",
    copy: "A equipe avalia o ambiente e calcula o material com precisão.",
  },
  {
    icon: Layers3,
    title: "Definir",
    copy: "Comparamos opções de acordo com uso, estética e investimento.",
  },
  {
    icon: Hammer,
    title: "Instalar",
    copy: "A execução acontece com organização, cuidado e acabamento criterioso.",
  },
];

const faqs = [
  {
    question: "Quais tipos de piso vocês trabalham?",
    answer:
      "Trabalhamos com pisos vinílicos e laminados, além de rodapés e papel de parede. A indicação considera o uso do ambiente, o estilo e o investimento disponível.",
  },
  {
    question: "Como pedir um orçamento?",
    answer:
      "Envie uma mensagem pelo WhatsApp com fotos e medidas aproximadas. A equipe orienta os próximos passos e, quando necessário, agenda a avaliação técnica.",
  },
  {
    question: "Quanto tempo leva a instalação?",
    answer:
      "O prazo varia conforme a metragem, a condição do contrapiso e o material escolhido. Após a avaliação, você recebe uma previsão clara para o seu projeto.",
  },
  {
    question: "Como preparar o ambiente?",
    answer:
      "Antes da instalação, orientamos sobre retirada de móveis, nivelamento e condições do contrapiso. Assim, o serviço começa com a base correta.",
  },
  {
    question: "Vocês atendem fora de Itajaí?",
    answer:
      "Consulte a disponibilidade para a sua cidade pelo WhatsApp. O atendimento é organizado conforme localização e escopo do projeto.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pisos de Luxo, início">
          <Image
            src="/assets/logo-pisos-de-luxo.svg"
            alt="Pisos de Luxo"
            width={160}
            height={95}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Como funciona</a>
          <a href="#depoimentos">Avaliações</a>
        </nav>

        <a className="button button-primary header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir orçamento <ArrowRight size={17} />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Menu size={24} /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#processo">Como funciona</a>
            <a href="#depoimentos">Avaliações</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">Pedir orçamento</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/assets/hero-pisos-de-luxo.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-light" />
        </div>
        <div className="hero-content page-shell">
          <p className="hero-kicker">Venda e instalação especializada</p>
          <h1>Seu ambiente começa pelo chão.</h1>
          <p className="hero-copy">Pisos e acabamentos instalados com precisão em Itajaí e região.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir orçamento <ArrowRight size={18} />
            </a>
            <a className="button button-ghost" href="#projetos">Ver projetos</a>
          </div>
        </div>
      </section>

      <div className="service-ribbon" aria-label="Principais soluções">
        <span>Pisos vinílicos</span>
        <span>Pisos laminados</span>
        <span>Rodapés</span>
        <span>Papel de parede</span>
      </div>

      <section className="section page-shell services" id="servicos">
        <div className="section-heading">
          <h2>Soluções que transformam por inteiro.</h2>
          <p>Do piso ao acabamento final, cada escolha é orientada para combinar beleza, durabilidade e uso real.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className={service.className} key={service.title}>
              {service.image && (
                <div className="service-media">
                  <Image src={service.image} alt={service.alt ?? ""} fill sizes="(max-width: 760px) 100vw, 50vw" />
                </div>
              )}
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-section" id="projetos">
        <div className="page-shell">
          <div className="section-heading project-heading">
            <h2>Ambientes entregues. Detalhes que permanecem.</h2>
            <p>Projetos reais que mostram como o piso certo muda a luz, a amplitude e a sensação do espaço.</p>
          </div>
          <div className="project-grid">
            <figure className="project project-office">
              <div className="project-media"><Image src="/assets/projeto-escritorio.png" alt="Escritório com piso amadeirado instalado" fill sizes="(max-width: 760px) 100vw, 44vw" /></div>
              <figcaption><strong>Escritório</strong><span>Conforto desde a recepção</span></figcaption>
            </figure>
            <figure className="project project-kitchen">
              <div className="project-media"><Image src="/assets/projeto-cozinha.png" alt="Cozinha integrada com piso amadeirado" fill sizes="(max-width: 760px) 100vw, 26vw" /></div>
              <figcaption><strong>Cozinha integrada</strong><span>Continuidade visual</span></figcaption>
            </figure>
            <figure className="project project-living">
              <div className="project-media"><Image src="/assets/projeto-sala.png" alt="Sala ampla com piso vinílico amadeirado" fill sizes="(max-width: 760px) 100vw, 30vw" /></div>
              <figcaption><strong>Sala de estar</strong><span>Amplitude e acolhimento</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section page-shell transformation">
        <div className="transformation-copy">
          <h2>Da preparação ao acabamento.</h2>
          <p>Uma instalação de alto padrão começa na base e termina nos detalhes que você percebe todos os dias.</p>
          <ul>
            <li><Check size={18} /> Avaliação do contrapiso</li>
            <li><Check size={18} /> Paginação e recortes precisos</li>
            <li><Check size={18} /> Finalização limpa do ambiente</li>
          </ul>
          <small>Registros de etapas em projetos diferentes.</small>
        </div>
        <div className="stage-pair">
          <figure>
            <div className="stage-media"><Image src="/assets/obra-preparacao.png" alt="Contrapiso preparado antes da instalação" fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
            <figcaption>Preparação técnica</figcaption>
          </figure>
          <figure>
            <div className="stage-media"><Image src="/assets/hero-pisos-de-luxo.png" alt="Ambiente finalizado com piso amadeirado" fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
            <figcaption>Ambiente finalizado</figcaption>
          </figure>
        </div>
      </section>

      <section className="section process" id="processo">
        <div className="page-shell">
          <div className="section-heading process-heading">
            <h2>Do primeiro contato ao último encaixe.</h2>
            <p>Um caminho simples para você, conduzido com orientação técnica em cada decisão.</p>
          </div>
          <div className="process-grid">
            {processSteps.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={25} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="assurance-row">
            <span><ShieldCheck size={19} /> Atendimento próximo</span>
            <span><Ruler size={19} /> Medição cuidadosa</span>
            <span><Hammer size={19} /> Instalação especializada</span>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="page-shell">
          <p className="section-kicker">Avaliações reais</p>
          <div className="testimonials-heading">
            <h2>A confiança aparece no resultado.</h2>
            <p>Atendimento, materiais e acabamento reconhecidos por quem já vive a transformação.</p>
          </div>
          <div className="quote-wall">
            <blockquote>
              <div className="stars" aria-label="5 estrelas">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p>“Super recomendo. Muito bom o atendimento, materiais de qualidade e equipe muito prestativa.”</p>
              <footer><strong>Marcelo de Souza</strong><span>Cliente Pisos de Luxo</span></footer>
            </blockquote>
            <blockquote>
              <div className="stars" aria-label="5 estrelas">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p>“Ótimo serviço, qualidade, compromisso com o prazo e mão de obra excelente.”</p>
              <footer><strong>Clarice Motta</strong><span>Cliente Pisos de Luxo</span></footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section page-shell faq-section">
        <div className="faq-visual">
          <Image src="/assets/projeto-sala.png" alt="Detalhe de sala finalizada com piso amadeirado" fill sizes="(max-width: 760px) 100vw, 32vw" />
        </div>
        <div className="faq-content">
          <div className="section-heading">
            <h2>Perguntas antes de escolher seu novo piso.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<ChevronDown size={20} /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="page-shell contact-grid">
          <div className="contact-copy">
            <h2>Vamos transformar o seu ambiente?</h2>
            <p>Conte o que você imagina. A equipe orienta o melhor caminho para o seu projeto.</p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Pedir orçamento <ArrowRight size={18} />
            </a>
          </div>
          <address className="contact-details">
            <a href="tel:+5547988198456"><Phone size={21} /><span><small>Telefone</small>(47) 98819-8456</span></a>
            <a href="https://maps.google.com/?q=Rua+Expedicionario+Carlos+Costa+82+Itajai+SC" target="_blank" rel="noreferrer"><MapPin size={21} /><span><small>Endereço</small>Rua Expedicionário Carlos Costa, 82<br />Itajaí - SC</span></a>
            <a href="https://www.instagram.com/pisosdeluxos/" target="_blank" rel="noreferrer"><AtSign size={21} /><span><small>Instagram</small>@pisosdeluxos</span></a>
          </address>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <Image className="footer-logo" src="/assets/logo-pisos-de-luxo.svg" alt="Pisos de Luxo" width={145} height={86} />
          <p>Pisos e acabamentos que transformam ambientes.</p>
          <nav aria-label="Navegação do rodapé">
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#processo">Como funciona</a>
          </nav>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Pedir orçamento pelo WhatsApp">
        <Phone size={22} />
      </a>
    </main>
  );
}
