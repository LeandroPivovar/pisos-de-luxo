"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

/**
 * Shared state for the autoplaying carousels. A timer advances the slides and keeps the
 * remaining time across pauses; the CSS progress bar only mirrors it visually.
 */
export function useCarousel(count: number, durationOf: (index: number) => number) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const go = useCallback((target: number) => setIndex(((target % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((value) => (value + 1) % count), [count]);
  const prev = useCallback(() => setIndex((value) => (value - 1 + count) % count), [count]);

  const autoplay = !reducedMotion && !stopped;
  const paused = !autoplay || hovered;
  const duration = durationOf(index);
  const remaining = useRef(duration);

  useEffect(() => {
    remaining.current = duration;
  }, [index, duration]);

  useEffect(() => {
    if (paused) return;
    const started = performance.now();
    const timer = window.setTimeout(next, remaining.current);
    return () => {
      window.clearTimeout(timer);
      remaining.current -= performance.now() - started;
    };
  }, [index, paused, next]);

  const swipe = {
    onPointerDown: (event: PointerEvent) => { startX.current = event.clientX; },
    onPointerUp: (event: PointerEvent) => {
      if (startX.current === null) return;
      const delta = event.clientX - startX.current;
      startX.current = null;
      if (Math.abs(delta) > 40) (delta < 0 ? next : prev)();
    },
  };

  const hover = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  return { index, go, next, prev, autoplay, paused, duration, stopped, setStopped, swipe, hover };
}
