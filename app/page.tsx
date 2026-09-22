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
} from "lucide-react";
import { brands, galleryImages, reviews } from "./catalog-data";
import { BrandCatalog } from "@/components/site/brand-catalog";
import { ReviewsCarousel } from "@/components/site/reviews-carousel";
import { ServiceGallery } from "@/components/site/service-gallery";
import { ServicePhotoGallery } from "@/components/site/service-photo-gallery";

const whatsappUrl =
  "https://wa.me/5547988198456?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20meu%20ambiente.";

const services = [
  {
    title: "Piso vinílico",
    slug: "piso-vinilico",
    photos: [
      { src: "/assets/galeria/servico-06.jpg", alt: "Piso vinílico amadeirado em escritório" },
      { src: "/assets/galeria/servico-09.jpg", alt: "Piso vinílico claro em quarto" },
      { src: "/assets/servicos/piso-amadeirado-painel-ripado.jpeg", alt: "Piso vinílico amadeirado em quarto com painel ripado" },
    ],
  },
  {
    title: "Rodapé",
    slug: "rodape",
    photos: [
      { src: "/assets/servicos/piso-cinza-rodape-preto.jpeg", alt: "Rodapé preto contornando piso vinílico cinza" },
      { src: "/assets/servicos/boiserie-rodape-corredor.jpeg", alt: "Rodapé branco no corredor com boiserie" },
      { src: "/assets/servicos/rodape-branco-detalhe.jpeg", alt: "Detalhe do encontro do rodapé branco com piso amadeirado" },
    ],
  },
  {
    title: "Placa vinílica",
    slug: "placa-vinilica",
    photos: [
      { src: "/assets/servicos/placa-vinilica-marmore-preto-branco.jpeg", alt: "Placas com efeito de mármore preto e branco em banheiro" },
      { src: "/assets/servicos/placa-vinilica-marmore-claro.jpeg", alt: "Revestimento com efeito de mármore claro em parede de lavabo" },
      { src: "/assets/servicos/placa-vinilica-marmore-preto.jpeg", alt: "Placas com efeito de mármore preto em banheiro" },
    ],
  },
  {
    title: "Painel ripado",
    slug: "painel-ripado",
    photos: [
      { src: "/assets/servicos/painel-ripado-entrada.jpeg", alt: "Painel ripado amadeirado na parede de entrada" },
      { src: "/assets/servicos/painel-ripado-sala.jpeg", alt: "Painel ripado contornando a passagem da sala para a cozinha" },
      { src: "/assets/servicos/painel-ripado-parede.jpeg", alt: "Painel ripado de madeira junto à parede do corredor" },
    ],
  },
  {
    title: "Boiserie",
    slug: "boiserie",
    photos: [
      { src: "/assets/servicos/boiserie-detalhe.jpeg", alt: "Detalhe de boiserie em parede cinza com arandela" },
      { src: "/assets/servicos/boiserie-corredor.jpeg", alt: "Boiserie branca ao longo da parede de um corredor" },
      { src: "/assets/servicos/boiserie-parede-cinza.jpeg", alt: "Molduras de boiserie em parede cinza" },
    ],
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
      "Trabalhamos com piso vinílico e placa vinílica, além de rodapés, painéis ripados e boiserie. A indicação considera o uso do ambiente, o estilo e o investimento disponível.",
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
          <a href="#marcas">Marcas</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#galeria">Galeria</a>
          <a href="#depoimentos">Avaliações</a>
        </nav>

        <a className="button button-primary header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir orçamento <ArrowRight size={17} />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Menu size={24} /></summary>
          <nav aria-label="Navegação móvel">
            <a href="#servicos">Serviços</a>
            <a href="#marcas">Marcas</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#galeria">Galeria</a>
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
            <a className="button button-ghost" href="#galeria">Ver serviços</a>
          </div>
        </div>
      </section>

      <div className="service-ribbon" aria-label="Principais soluções">
        <span>Piso vinílico</span>
        <span>Rodapé</span>
        <span>Placa vinílica</span>
        <span>Painel ripado</span>
        <span>Boiserie</span>
      </div>

      <section className="section page-shell gallery-section" id="galeria">
        <div className="section-heading">
          <p className="section-kicker">Serviços realizados</p>
          <h2>Obras entregues pela nossa equipe.</h2>
          <p>Registros de instalações de pisos, rodapés e escadas em casas, apartamentos e espaços comerciais da região.</p>
        </div>
        <ServiceGallery images={galleryImages} />
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="page-shell">
          <p className="section-kicker">Avaliações reais</p>
          <div className="testimonials-heading">
            <h2>A confiança aparece no resultado.</h2>
            <p>Avaliações 5 estrelas deixadas no Google por clientes que já transformaram seus ambientes com a Pisos de Luxo.</p>
          </div>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      <section className="section page-shell gallery-section" id="servicos">
        <div className="section-heading">
          <p className="section-kicker">Nossos serviços</p>
          <h2>Acabamentos para cada ambiente.</h2>
          <p>Veja os detalhes de cada serviço em ambientes reais.</p>
        </div>
        <div className="service-galleries">
          {services.map((service, serviceIndex) => (
            <section className="service-gallery-group" key={service.slug} aria-labelledby={`${service.slug}-titulo`}>
              <div className="service-gallery-heading">
                <span aria-hidden="true">{String(serviceIndex + 1).padStart(2, "0")}</span>
                <h3 id={`${service.slug}-titulo`}>{service.title}</h3>
              </div>
              <ServicePhotoGallery title={service.title} photos={service.photos} />
            </section>
          ))}
        </div>
      </section>

      <section className="brands-section" id="marcas" aria-labelledby="marcas-titulo">
        <div className="page-shell">
          <div className="brands-heading">
            <p className="section-kicker">Marcas parceiras</p>
            <h2 id="marcas-titulo">Trabalhamos com fabricantes que respeitam o seu projeto.</h2>
          </div>
          <ul className="brand-wall">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <a href={`#catalogo-${brand.slug}`} aria-label={`Ver catálogo ${brand.name}`}>
                  <Image src={brand.logo.src} alt={brand.name} width={brand.logo.width} height={brand.logo.height} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section catalog-section" id="catalogo">
        <div className="page-shell">
          <div className="section-heading">
            <p className="section-kicker">Catálogo</p>
            <h2>Linhas, formatos e cores de cada marca.</h2>
            <p>Escolha uma marca para ver as linhas disponíveis, as especificações técnicas e as opções de cor. Na dúvida, a equipe ajuda a comparar.</p>
          </div>
          <BrandCatalog brands={brands} />
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
            <div className="stage-media"><Image src="/assets/galeria/servico-18.jpg" alt="Instalação de rodapé em sala com piso cinza" fill sizes="(max-width: 760px) 100vw, 28vw" /></div>
            <figcaption>Instalação em andamento</figcaption>
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

      <section className="section page-shell faq-section">
        <div className="faq-visual">
          <Image src="/assets/galeria/servico-10.jpg" alt="Sala ampla com piso vinílico cinza amadeirado" fill sizes="(max-width: 760px) 100vw, 32vw" />
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
            <a href="#catalogo">Catálogo</a>
            <a href="#galeria">Galeria</a>
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
