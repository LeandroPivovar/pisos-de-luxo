"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

export type SupplyItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

const ITEMS_PER_PAGE = 8;

export function SupplyGrid({ items }: { items: SupplyItem[] }) {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);
  const visibleItems = useMemo(
    () => items.slice(page * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE + ITEMS_PER_PAGE),
    [items, page],
  );

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(nextPage, 0), pageCount - 1));
  };

  return (
    <div className="supply-showcase">
      <div className="supply-grid">
        {visibleItems.map((item) => (
          <article className="supply-card" key={item.image}>
            <div className="supply-card-media">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 25vw, 220px" />
            </div>
            <div className="supply-card-copy">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>

      <nav className="supply-pagination" aria-label="Paginação de insumos">
        <button type="button" onClick={() => goToPage(page - 1)} disabled={page === 0} aria-label="Página anterior de insumos">
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            type="button"
            key={index}
            className="supply-page-button"
            data-active={index === page}
            onClick={() => goToPage(index)}
            aria-label={`Página ${index + 1} de insumos`}
            aria-current={index === page ? "page" : undefined}
          >
            {index + 1}
          </button>
        ))}
        <button type="button" onClick={() => goToPage(page + 1)} disabled={page === pageCount - 1} aria-label="Próxima página de insumos">
          <ChevronRight size={18} />
        </button>
      </nav>
    </div>
  );
}
