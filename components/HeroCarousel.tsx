"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Boxes,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Handshake,
  KeyRound,
  LineChart,
  PackageCheck,
  Store,
  Wrench,
} from "lucide-react";
import type { Messages } from "@/src/lib/i18n";

type Slide = Messages["heroCarousel"]["slides"][number];

function getSlideIcons(slideId: string) {
  if (slideId === "software-house") {
    return {
      header: Handshake,
      cards: [Wrench, PackageCheck, LineChart] as const,
    };
  }

  return {
    header: Boxes,
    cards: [Store, KeyRound, CreditCard] as const,
  };
}

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = slides.length;
  const canNavigate = count > 1;

  const safeActiveIndex = count ? ((activeIndex % count) + count) % count : 0;

  const next = () => {
    if (!canNavigate) return;
    setActiveIndex((idx) => (idx + 1) % count);
  };

  const prev = () => {
    if (!canNavigate) return;
    setActiveIndex((idx) => (idx - 1 + count) % count);
  };

  const goTo = (idx: number) => {
    if (!canNavigate) return;
    setActiveIndex(((idx % count) + count) % count);
  };

  useEffect(() => {
    if (!canNavigate || paused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % count);
    }, 9000);
    return () => window.clearInterval(interval);
  }, [canNavigate, paused, count]);

  const activeName = slides[safeActiveIndex]?.name ?? "";

  const trackStyle = useMemo(
    () => ({ transform: `translateX(-${safeActiveIndex * 100}%)` }),
    [safeActiveIndex],
  );

  return (
    <section
      className="relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Hero carousel"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (!canNavigate) return;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          prev();
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          next();
        }
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_30%_20%,rgba(229,160,68,0.20),transparent_60%),radial-gradient(700px_circle_at_70%_35%,rgba(92,126,154,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(26,29,33,0.25),rgba(26,29,33,1))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-secondary)]">
            {canNavigate ? (
              <span aria-live="polite">{activeName}</span>
            ) : (
              <span>{activeName}</span>
            )}
          </div>

          {canNavigate ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.55)] text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.55)] text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={trackStyle}
          >
            {slides.map((slide, idx) => {
              const { header: HeaderIcon, cards: cardIcons } = getSlideIcons(
                slide.id,
              );
              const [CardIconA, CardIconB, CardIconC] = cardIcons;
              const cards = slide.right.cards;

              return (
                <div
                  key={slide.id}
                  className="w-full flex-none"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${idx + 1} of ${count}`}
                >
                  <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="animate-float-up">
                      <div className="mb-5 inline-flex items-center rounded-full border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.6)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                        {slide.pill}
                      </div>
                      <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                        {slide.subtitle}
                      </p>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                          href="https://wa.me/6285188448383"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--action-primary)] px-5 py-3 text-sm font-medium text-[#111] hover:brightness-105"
                        >
                          {slide.ctaWhatsApp}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                          href="mailto:contact@bagdja.com"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)] cursor-pointer"
                        >
                          {slide.ctaEmail}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>

                      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {slide.stats.map((st) => (
                          <div
                            key={`${st.value}-${st.label}`}
                            className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-5"
                          >
                            <div className="text-2xl font-semibold text-[var(--text-primary)]">
                              {st.value}
                            </div>
                            <div className="mt-1 text-sm text-[var(--text-secondary)]">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative">
                      <div className="rounded-3xl border border-[var(--border-default)] bg-[color:rgba(32,36,42,0.65)] p-6">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:rgba(229,160,68,0.16)] text-[var(--action-primary)]">
                            <HeaderIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[var(--text-primary)]">
                              {slide.right.title}
                            </div>
                            <div className="text-xs text-[var(--text-secondary)]">
                              {slide.right.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 space-y-3">
                          <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                              <CardIconA className="h-4 w-4 text-[var(--action-secondary)]" />
                              {cards?.[0]?.title}
                            </div>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                              {cards?.[0]?.desc}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                              <CardIconB className="h-4 w-4 text-[var(--action-secondary)]" />
                              {cards?.[1]?.title}
                            </div>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                              {cards?.[1]?.desc}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                              <CardIconC className="h-4 w-4 text-[var(--action-secondary)]" />
                              {cards?.[2]?.title}
                            </div>
                            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                              {cards?.[2]?.desc}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full bg-[color:rgba(229,160,68,0.22)] blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-[color:rgba(92,126,154,0.22)] blur-3xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {canNavigate ? (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={`${slide.id}-dot`}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to ${slide.name}`}
                aria-current={safeActiveIndex === idx ? "true" : undefined}
                className={[
                  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs",
                  safeActiveIndex === idx
                    ? "border-[color:rgba(229,160,68,0.6)] bg-[color:rgba(229,160,68,0.10)] text-[var(--text-primary)]"
                    : "border-[var(--border-default)] bg-[color:rgba(32,36,42,0.4)] text-[var(--text-secondary)] hover:border-[color:rgba(229,160,68,0.4)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "h-1.5 w-1.5 rounded-full",
                    safeActiveIndex === idx
                      ? "bg-[var(--action-primary)]"
                      : "bg-[color:rgba(136,150,164,0.7)]",
                  ].join(" ")}
                />
                <span>{slide.name}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
