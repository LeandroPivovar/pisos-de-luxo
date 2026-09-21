"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCarousel } from "./use-carousel";

type GalleryImage = { src: string; alt: string };

const SLIDE_MS = 4500;
const VISIBLE = 3; // cards rendered on each side of the active one (the outermost fade in/out)

// Coverflow geometry per distance from the centre card: horizontal shift (% of card width), scale, tilt.
const SHIFT = [0, 64, 112, 150];
const SCALE = [1, 0.86, 0.74, 0.64];
const TILT = [0, 16, 24, 28];

function offsetOf(i: number, index: number, count: number) {
  let offset = i - index;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

export function ServiceGallery({ images }: { images: GalleryImage[] }) {
  const { rootRef, index, go, next, prev, autoplay, paused, duration, stopped, setStopped, swipe } =
    useCarousel<HTMLDivElement>(images.length, () => SLIDE_MS);

  return (
    <div className="coverflow" ref={rootRef} aria-roledescription="carrossel" aria-label="Obras entregues">
      <div className="coverflow-stage" {...swipe}>
        {images.map((item, i) => {
          const offset = offsetOf(i, index, images.length);
          const distance = Math.abs(offset);
          if (distance > VISIBLE) return null;
          const side = Math.sign(offset);
          const active = offset === 0;
          return (
            <button
              key={item.src}
              type="button"
              className="coverflow-card"
              data-active={active}
              aria-hidden={distance > 2}
              tabIndex={distance > 2 ? -1 : 0}
              aria-label={active ? item.alt : `Ver foto: ${item.alt}`}
              aria-current={active}
              onClick={() => go(i)}
              style={{
                transform: `translateX(${side * SHIFT[distance]}%) scale(${SCALE[distance]}) rotateY(${-side * TILT[distance]}deg)`,
                zIndex: 10 - distance,
                opacity: distance === VISIBLE ? 0 : 1,
              }}
            >
              <Image src={item.src.replace("/galeria/", "/galeria/card/")} alt="" fill sizes="(max-width: 760px) 70vw, 400px" draggable={false} />
              <span className="coverflow-chip">
                <span className="coverflow-avatar" aria-hidden="true">PL</span>
                <span>
                  <strong>Pisos de Luxo</strong>
                  <small>Obra entregue</small>
                </span>
              </span>
              {active && autoplay && (
                <span
                  className="carousel-progress"
                  style={{ animationDuration: `${duration}ms`, animationPlayState: paused ? "paused" : "running" }}
                />
              )}
            </button>
          );
        })}

        <button type="button" className="coverflow-arrow coverflow-prev" onClick={prev} aria-label="Foto anterior">
          <ChevronLeft size={20} />
        </button>
        <button type="button" className="coverflow-arrow coverflow-next" onClick={next} aria-label="Próxima foto">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="coverflow-footer">
        <p aria-live="polite">
          <span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
          {images[index].alt}
        </p>
        <button
          type="button"
          className="coverflow-pause"
          onClick={() => setStopped(!stopped)}
          aria-label={stopped ? "Retomar apresentação" : "Pausar apresentação"}
        >
          {stopped ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>
    </div>
  );
}
