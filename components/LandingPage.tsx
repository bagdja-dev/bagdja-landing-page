"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CreditCard,
  KeyRound,
  LineChart,
  PackageCheck,
  Rocket,
  Store,
  Users,
  Wrench,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { getDirection, type Locale, type Messages } from "@/src/lib/i18n";
import { useRef, useState } from "react";

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[var(--border-default)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center rounded-full border border-[var(--border-default)] bg-[color:rgba(92,126,154,0.12)] px-3 py-1 text-xs font-medium text-[var(--text-primary)]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-5">
      <div className="text-2xl font-semibold text-[var(--text-primary)]">{value}</div>
      <div className="mt-1 text-sm text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}

function PartnerSection({
  eyebrow,
  title,
  subtitle,
  partners,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  partners: Array<{ name: string; logo: string }>;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="scroll-mt-24 border-t border-[var(--border-default)] bg-[var(--bg-main)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl justify-center align-middle flex">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base justify-center align-middle flex">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="relative">
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border-default)] bg-[var(--bg-main)] p-2 shadow-lg hover:bg-[var(--bg-section)]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-[var(--text-primary)]" />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pt-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl px-2 "
              >
                <div className="flex items-center gap-2 flex-col">
                  <div className="flex w-full items-center justify-center rounded-lg">
                    <Image
                      src={partner.logo}
                      alt={``}
                      width={150}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  {/* <span className="text-xs font-medium text-[var(--text-primary)]">
                    {partner.name}
                  </span> */}
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border-default)] bg-[var(--bg-main)] p-2 shadow-lg hover:bg-[var(--bg-section)]"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-[var(--text-primary)]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:rgba(229,160,68,0.16)] text-[var(--action-primary)]">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color:rgba(92,126,154,0.16)] text-[var(--action-secondary)]">
              <BadgeCheck className="h-3.5 w-3.5" />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LandingPage({ locale, t }: { locale: Locale; t: Messages }) {
  const dir = getDirection(locale);

  return (
    <div className="min-h-screen bg-[var(--bg-main)]" lang={locale} dir={dir}>
      <Header locale={locale} t={t} />

      <main>
        <HeroCarousel slides={t.heroCarousel.slides} />

        <PartnerSection
          eyebrow={t.sections.partnerEyebrow}
          title={t.sections.partnerTitle}
          subtitle={t.sections.partnerSubtitle}
          partners={t.sections.partners}
        />

      </main>

      <Footer t={t} />
    </div>
  );
}
