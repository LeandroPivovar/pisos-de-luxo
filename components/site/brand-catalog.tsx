"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import type { Brand, CatalogLine } from "@/app/catalog-data";

const WHATSAPP = "5547988198456";
const VISIBLE_COLORS = 8;

function whatsappFor(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function LineCard({ brand, line }: { brand: Brand; line: CatalogLine }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = line.colors.length - VISIBLE_COLORS;
  const colors = expanded || hidden <= 0 ? line.colors : line.colors.slice(0, VISIBLE_COLORS);

  return (
    <article className="line-card">
      <div className="line-media">
        <Image src={line.image} alt={`${brand.name} ${line.name}`} fill sizes="(max-width: 760px) 100vw, (max-width: 1180px) 50vw, 33vw" />
      </div>
      <div className="line-body">
        <p className="line-kind">{line.kind}</p>
        <h4>{line.name}</h4>
        <dl className="line-specs">
          {line.specs.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="line-colors">
          <span className="line-colors-label">
            {line.colors.length} {line.colors.length === 1 ? "opção" : "opções"}
          </span>
          <ul>
            {colors.map((color) => <li key={color}>{color}</li>)}
            {hidden > 0 && (
              <li>
                <button type="button" className="chip-more" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
                  {expanded ? "Mostrar menos" : `+${hidden}`}
                </button>
              </li>
            )}
          </ul>
        </div>
        <a
          className="line-cta"
          href={whatsappFor(`Olá! Tenho interesse na linha ${line.name} da ${brand.name}. Poderia me passar mais informações?`)}
          target="_blank"
          rel="noreferrer"
        >
          Consultar esta linha <ArrowRight size={15} />
        </a>
      </div>
    </article>
  );
}

export function BrandCatalog({ brands }: { brands: Brand[] }) {
  const [active, setActive] = useState(brands[0].slug);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const syncFromHash = () => {
      const slug = window.location.hash.replace("#catalogo-", "");
      if (brands.some((brand) => brand.slug === slug)) setActive(slug);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [brands]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = brands.findIndex((brand) => brand.slug === active);
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = (index + step + brands.length) % brands.length;
    setActive(brands[next].slug);
    tabRefs.current[next]?.focus();
  };

  const brand = brands.find((item) => item.slug === active) ?? brands[0];

  return (
    <div className="catalog">
      <div className="catalog-tabs" role="tablist" aria-label="Marcas do catálogo" onKeyDown={onKeyDown}>
        {brands.map((item, index) => (
          <button
            key={item.slug}
            id={`catalogo-${item.slug}`}
            ref={(node) => { tabRefs.current[index] = node; }}
            type="button"
            role="tab"
            aria-selected={item.slug === active}
            aria-controls="catalogo-painel"
            tabIndex={item.slug === active ? 0 : -1}
            className="catalog-tab"
            onClick={() => setActive(item.slug)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="catalog-panel" id="catalogo-painel" role="tabpanel" aria-labelledby={`catalogo-${brand.slug}`} key={brand.slug}>
        <header className="catalog-brand">
          <div className="catalog-brand-logo">
            <Image src={brand.logo.src} alt={brand.name} width={brand.logo.width} height={brand.logo.height} />
          </div>
          <div className="catalog-brand-copy">
            <p className="section-kicker">{brand.tagline}</p>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            <ul className="catalog-highlights">
              {brand.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
          <div className="catalog-brand-actions">
            <a className="button button-primary" href={brand.pdf.href} target="_blank" rel="noreferrer">
              <Download size={17} /> Catálogo completo <small>PDF · {brand.pdf.size}</small>
            </a>
            <a
              className="button button-outline"
              href={whatsappFor(`Olá! Gostaria de um orçamento com produtos da ${brand.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> Orçamento {brand.name}
            </a>
          </div>
        </header>

        <div className="line-grid">
          {brand.lines.map((line) => <LineCard key={line.name} brand={brand} line={line} />)}
        </div>
      </div>
    </div>
  );
}
