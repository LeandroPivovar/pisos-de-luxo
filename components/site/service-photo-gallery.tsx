"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

type Photo = { src: string; alt: string };

export function ServicePhotoGallery({ title, photos }: { title: string; photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = (index: number) => {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  };

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + photos.length) % photos.length);
  };

  return (
    <>
      <div className="service-gallery-photos">
        {photos.map((photo, index) => (
          <button
            className="service-gallery-photo"
            type="button"
            key={photo.src}
            aria-label={`Ampliar: ${photo.alt}`}
            onClick={() => open(index)}
          >
            <Image src={photo.src} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw" />
          </button>
        ))}
      </div>

      <dialog
        className="service-lightbox"
        ref={dialogRef}
        aria-label={`Imagem ampliada de ${title}`}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
      >
        <div className="service-lightbox-header">
          <strong>{title}</strong>
          <button type="button" className="service-lightbox-close" aria-label="Fechar imagem ampliada" onClick={() => dialogRef.current?.close()}>
            <X size={24} />
          </button>
        </div>
        <div className="service-lightbox-view">
          <button type="button" className="service-lightbox-arrow" aria-label="Imagem anterior" onClick={() => move(-1)}>
            <ChevronLeft size={25} />
          </button>
          <div className="service-lightbox-media">
            <Image src={photos[activeIndex].src} alt={photos[activeIndex].alt} fill sizes="100vw" />
          </div>
          <button type="button" className="service-lightbox-arrow" aria-label="Próxima imagem" onClick={() => move(1)}>
            <ChevronRight size={25} />
          </button>
        </div>
        <p className="service-lightbox-caption">{photos[activeIndex].alt}</p>
      </dialog>
    </>
  );
}
