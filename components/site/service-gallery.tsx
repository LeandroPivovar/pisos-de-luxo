"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCarousel } from "./use-carousel";

type GalleryImage = { src: string; alt: string };

const SLIDE_MS = 5000;

export function ServiceGallery({ images }: { images: GalleryImage[] }) {
  const { rootRef, index, go, next, prev, autoplay, paused, duration, stopped, setStopped, swipe } = useCarousel<HTMLDivElement>(images.length, () => SLIDE_MS);
  const railRef = useRef<HTMLDivElement>(null);
  const image = images[index];

  useEffect(() => {
    const rail = railRef.current;
    const thumb = rail?.children[index] as HTMLElement | undefined;
    if (!rail || !thumb) return;
    rail.scrollTo({ left: thumb.offsetLeft - rail.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
  }, [index]);

  return (
    <div className="showcase" ref={rootRef} aria-roledescription="carrossel" aria-label="Obras entregues">
      <div className="showcase-stage" {...swipe}>
        {images.map((item, i) => {
          // Only the current slide and its neighbours are mounted, so the crossfade works without loading every photo.
          const distance = Math.min(Math.abs(i - index), images.length - Math.abs(i - index));
          if (distance > 1) return null;
          return (
          <div className="showcase-slide" data-active={i === index} aria-hidden={i !== index} key={item.src}>
            <Image className="showcase-backdrop" src={item.src} alt="" fill sizes="10vw" aria-hidden="true" />
            <Image className="showcase-photo" src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 1380px" />
          </div>
          );
        })}

        <div className="showcase-bar">
          <p aria-live="polite">
            <span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
            {image.alt}
          </p>
          <div className="carousel-controls">
            <button type="button" onClick={prev} aria-label="Foto anterior"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setStopped(!stopped)} aria-label={stopped ? "Retomar apresentação" : "Pausar apresentação"}>
              {stopped ? <Play size={17} /> : <Pause size={17} />}
            </button>
            <button type="button" onClick={next} aria-label="Próxima foto"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>

      <div className="showcase-rail" ref={railRef}>
        {images.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className="showcase-thumb"
            aria-current={i === index}
            aria-label={`Ver foto ${i + 1}: ${item.alt}`}
            onClick={() => go(i)}
          >
            <Image src={item.src.replace("/galeria/", "/galeria/thumbs/")} alt="" fill sizes="120px" />
            {i === index && autoplay && (
              <span
                className="carousel-progress"
                style={{ animationDuration: `${duration}ms`, animationPlayState: paused ? "paused" : "running" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
