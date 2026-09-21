"use client";

import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";
import { useCarousel } from "./use-carousel";

type Review = { name: string; text: string; badge?: string };

// Long reviews stay on screen longer: ~18 characters per second, 6s minimum.
const durationFor = (text: string) => Math.max(6000, Math.round((text.length / 18) * 1000));

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const { index, go, next, prev, autoplay, paused, duration, stopped, setStopped, swipe, hover } = useCarousel(reviews.length, (i) => durationFor(reviews[i].text));
  const review = reviews[index];

  return (
    <div className="reviews" {...hover} aria-roledescription="carrossel" aria-label="Avaliações de clientes">
      <figure className="review-feature" {...swipe}>
        <div className="stars" aria-label="5 estrelas">
          {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={18} fill="currentColor" />)}
        </div>
        <blockquote key={index} aria-live="polite">
          <p>“{review.text}”</p>
        </blockquote>
        <figcaption>
          <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
          <span>
            <strong>{review.name}</strong>
            <small>{review.badge ? `${review.badge} · Google` : "Avaliação no Google"}</small>
          </span>
          <span className="carousel-controls">
            <button type="button" onClick={prev} aria-label="Avaliação anterior"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => setStopped(!stopped)} aria-label={stopped ? "Retomar apresentação" : "Pausar apresentação"}>
              {stopped ? <Play size={17} /> : <Pause size={17} />}
            </button>
            <button type="button" onClick={next} aria-label="Próxima avaliação"><ChevronRight size={20} /></button>
          </span>
        </figcaption>
      </figure>

      <ol className="review-list">
        {reviews.map((item, i) => (
          <li key={item.name}>
            <button type="button" aria-current={i === index} onClick={() => go(i)}>
              <strong>{item.name}</strong>
              <span>{item.text}</span>
              {i === index && autoplay && (
                <span
                  className="carousel-progress"
                  style={{ animationDuration: `${duration}ms`, animationPlayState: paused ? "paused" : "running" }}
                />
              )}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
