"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryImage = { src: string; width: number; height: number; alt: string };

export function ServiceGallery({ images }: { images: GalleryImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);

  const open = (index: number) => {
    setCurrent(index);
    dialogRef.current?.showModal();
  };

  const move = (step: number) => setCurrent((index) => (index + step + images.length) % images.length);

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") move(1);
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "Escape") dialogRef.current?.close();
  };

  const image = images[current];

  return (
    <>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <button key={item.src} type="button" className="gallery-item" onClick={() => open(index)} aria-label={`Ampliar foto: ${item.alt}`}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 760px) 50vw, (max-width: 1080px) 33vw, 25vw" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Foto ampliada"
        onKeyDown={onKeyDown}
        onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}
      >
        <figure>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="92vw" />
          <figcaption>
            <span>{image.alt}</span>
            <span>{current + 1} / {images.length}</span>
          </figcaption>
        </figure>
        <button type="button" className="lightbox-close" onClick={() => dialogRef.current?.close()} aria-label="Fechar"><X size={22} /></button>
        <button type="button" className="lightbox-nav lightbox-prev" onClick={() => move(-1)} aria-label="Foto anterior"><ChevronLeft size={26} /></button>
        <button type="button" className="lightbox-nav lightbox-next" onClick={() => move(1)} aria-label="Próxima foto"><ChevronRight size={26} /></button>
      </dialog>
    </>
  );
}
