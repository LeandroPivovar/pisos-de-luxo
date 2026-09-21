"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";

/**
 * Shared state for the autoplaying carousels. A timer advances the slides and keeps the
 * remaining time across pauses; the CSS progress bar only mirrors it visually.
 * Autoplay runs while the carousel is on screen, unless the visitor paused it or prefers reduced motion.
 */
export function useCarousel<T extends HTMLElement>(count: number, durationOf: (index: number) => number) {
  const rootRef = useRef<T>(null);
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const go = useCallback((target: number) => setIndex(((target % count) + count) % count), [count]);
  const next = useCallback(() => setIndex((value) => (value + 1) % count), [count]);
  const prev = useCallback(() => setIndex((value) => (value - 1 + count) % count), [count]);

  const autoplay = !reducedMotion && !stopped;
  const paused = !autoplay || !visible;
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
    onPointerCancel: () => { startX.current = null; },
  };

  return { rootRef, index, go, next, prev, autoplay, paused, duration, stopped, setStopped, swipe };
}
