import Image from "next/image";

export type SupplyItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
};

export function SupplyGrid({ items }: { items: SupplyItem[] }) {
  return (
    <div className="supply-grid">
      {items.map((item) => (
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
  );
}
