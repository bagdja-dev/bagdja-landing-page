"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Phone,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { getDirection, type Locale, type Messages } from "@/src/lib/i18n";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchProjects, type ProjectAPIResponse } from "@/src/lib/projects";

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
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
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

function ServiceSection({
  eyebrow,
  title,
  subtitle,
  items,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: Array<{ id: string; title: string; description: string; image: string }>;
}) {
  return (
    <section id="services" className="scroll-mt-24 border-t border-[var(--border-default)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-full">

          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl justify-center align-middle flex">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base justify-center align-middle flex">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="space-y-12 overflow-hidden">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-8 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6 sm:p-8 lg:flex-row lg:items-center"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[color:rgba(92,126,154,0.12)] sm:h-80 lg:h-96 lg:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="flex flex-col gap-4 lg:w-1/2">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-4 lg:w-1/2">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[color:rgba(92,126,154,0.12)] sm:h-80 lg:h-96 lg:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestProjectSection({
  eyebrow,
  title,
  subtitle,
  seeAll,
  items,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  seeAll?: string;
  items: Array<{
    id: string;
    media: string;
    mediaType: "image" | "video";
    title: string;
    description: string;
    demoUrl?: string;
    detailUrl?: string;
    learnMoreUrl: string;
    projectUrl?: string;
    blogUrl?: string;
  }>;
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
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="scroll-mt-24 border-t border-[var(--border-default)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                {title}
              </h2>
              {subtitle ? (
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {seeAll ? (
              <a
                href={`${process.env.NEXT_PUBLIC_PROJECT_BASE_URL}/digital`}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-main)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-section)] hover:border-[var(--color-accent)]"
              >
                {seeAll}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border-default)] bg-[var(--bg-main)] p-3 shadow-lg hover:bg-[var(--bg-section)]"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-[var(--text-primary)]" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 pt-2 snap-x snap-mandatory"
            style={{ scrollBehavior: "smooth" }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex w-80 flex-shrink-0 snap-start rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="relative h-48 w-full bg-[color:rgba(92,126,154,0.12)]">
                    {item.mediaType === "video" ? (
                      <video
                        src={item.media}
                        className="h-full w-full object-cover"
                        controls
                        muted
                        loop
                      />
                    ) : (
                      <Image
                        src={item.media}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-3 p-5">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-5 text-[var(--text-secondary)] line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-end">
                      <Link
                        href={`${process.env.NEXT_PUBLIC_PROJECT_BASE_URL}${item.learnMoreUrl}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] underline-offset-2 hover:underline"
                      >
                        Pelajari lebih lanjut
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border-default)] bg-[var(--bg-main)] p-3 shadow-lg hover:bg-[var(--bg-section)]"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-[var(--text-primary)]" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function OurProductSection({
  eyebrow,
  title,
  subtitle,
  items,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: Array<{
    id: string;
    name: string;
    tagline: string;
    description: string;
    image: string;
    link: string;
  }>;
}) {
  return (
    <section id="products" className="scroll-mt-24 border-t border-[var(--border-default)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-full text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)] sm:text-base max-w-2xl mx-auto">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] overflow-hidden transition-all hover:border-[var(--color-accent)] hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full bg-[color:rgba(92,126,154,0.12)]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {item.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-[var(--text-secondary)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent)]" />
                </div>
                <p className="text-xs font-medium text-[var(--color-accent)]">
                  {item.tagline}
                </p>
                <p className="text-sm leading-5 text-[var(--text-secondary)] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({
  eyebrow,
  title,
  subtitle,
  formName,
  formEmail,
  formMessage,
  sendEmailLabel,
  sendWALabel,
  locations,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  sendEmailLabel: string;
  sendWALabel: string;
  locations: Array<{
    id: string;
    name: string;
    address: string;
    lat: number;
    lng: number;
  }>;
}) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section id="contact" className="scroll-mt-24 border-t border-[var(--border-default)]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Map Visualizer */}
          <div className="relative aspect-square sm:aspect-video lg:aspect-square w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] overflow-hidden">
            {/* Simple Map Background Grid */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, var(--text-secondary) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

            {/* Markers Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* This is a visual representation since we don't have a map provider API key */}
              <div className="relative w-full h-full p-8">
                {locations.map((loc, idx) => {
                  // Pseudo-random but deterministic positions based on lat/lng for visualization
                  const x = ((loc.lng - 106) * 100) % 80 + 10;
                  const y = ((loc.lat + 7) * 100) % 80 + 10;

                  return (
                    <motion.button
                      key={loc.id}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.2 }}
                      onClick={() => setSelectedLocation(loc)}
                      className="absolute group"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className={`relative flex items-center justify-center p-2 rounded-full border transition-all ${selectedLocation.id === loc.id
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white scale-125 z-10'
                          : 'bg-[var(--bg-main)] border-[var(--border-default)] text-[var(--text-secondary)] hover:border-[var(--color-accent)]'
                        }`}>
                        <MapPin className="h-5 w-5" />

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20">
                          <div className="bg-[var(--bg-main)] border border-[var(--border-default)] rounded-lg p-2 shadow-xl text-xs">
                            <p className="font-bold text-[var(--text-primary)]">{loc.name}</p>
                            <p className="text-[var(--text-secondary)] mt-1">{loc.address}</p>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}

                {/* Info Card Overlay for Selected Location */}
                <div className="absolute bottom-6 left-6 right-6 md:left-auto md:w-64 bg-[var(--bg-main)] border border-[var(--border-default)] rounded-xl p-4 shadow-2xl">
                  <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">{selectedLocation.name}</h4>
                  <p className="text-[var(--text-secondary)] text-xs mb-3">{selectedLocation.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-accent)] text-xs font-medium flex items-center gap-1 hover:underline"
                  >
                    Open in Maps <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] p-6 sm:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">{formName}</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-main)] px-4 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">{formEmail}</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-main)] px-4 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">{formMessage}</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-main)] px-4 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                    placeholder="I'm interested in..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:contact@bagdja.com"
                className="flex items-center justify-center gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-accent)] hover:shadow-lg group"
              >
                <div className="p-2 rounded-lg bg-[color:rgba(92,126,154,0.12)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                {sendEmailLabel}
              </a>
              <a
                href="https://wa.me/6285188448383"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-section)] p-4 text-sm font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-accent)] hover:shadow-lg group"
              >
                <div className="p-2 rounded-lg bg-[color:rgba(37,211,102,0.12)] text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                {sendWALabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LandingPage({
  locale,
  t,
  initialProjects = []
}: {
  locale: Locale;
  t: Messages;
  initialProjects?: ProjectAPIResponse['data'];
}) {
  const dir = getDirection(locale);
  const [projects, setProjects] = useState(initialProjects);

  useEffect(() => {
    if (initialProjects && initialProjects.length > 0) {
      setProjects(initialProjects);
    } else {
      // If no initial projects, try to fetch client-side as fallback
      const loadProjects = async () => {
        const data = await fetchProjects();
        if (data && data.length > 0) {
          setProjects(data);
        }
      };
      loadProjects();
    }
  }, [initialProjects]);

  // Latest Projects from API
  const displayLatestProjects = projects && projects.length > 0
    ? projects.map(p => ({
      id: p.id,
      media: p.image || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      mediaType: "image" as const,
      title: p.title || "Untitled",
      description: p.excerpt || "",
      demoUrl: p.demo_url,
      detailUrl: p.project_url || (p as any).projectUrl || (p.slug ? `/dev/projects/${p.slug}` : "#"),
      learnMoreUrl: p.project_url || (p as any).projectUrl || (p.slug ? `/dev/projects/${p.slug}` : "#"),
      projectUrl: p.project_url || (p as any).projectUrl,
      blogUrl: p.blog_url || (p as any).blogUrl
    }))
    : [];

  // Our Products always from i18n
  const displayProducts = t.sections.ourProducts.map(p => ({
    ...p,
    image: p.image.startsWith("/images/projects/") ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop" : p.image
  }));

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

        <div id="service" />
        <ServiceSection
          eyebrow={t.sections.servicesEyebrow}
          title={t.sections.servicesTitle}
          subtitle={t.sections.servicesSubtitle}
          items={t.sections.services.items}
        />

        <div id="project" />
        <LatestProjectSection
          eyebrow={t.sections.latestProjectEyebrow}
          title={t.sections.latestProjectTitle}
          subtitle={t.sections.latestProjectSubtitle}
          seeAll={t.sections.latestProjectSeeAll}
          items={displayLatestProjects}
        />

        <div id="product" />
        <OurProductSection
          eyebrow={t.sections.ourProductEyebrow}
          title={t.sections.ourProductTitle}
          subtitle={t.sections.ourProductSubtitle}
          items={displayProducts}
        />

        <div id="contact" />
        <ContactSection
          eyebrow={t.sections.contactEyebrow}
          title={t.sections.contactTitle}
          subtitle={t.sections.contactSubtitle}
          formName={t.sections.contactFormName}
          formEmail={t.sections.contactFormEmail}
          formMessage={t.sections.contactFormMessage}
          sendEmailLabel={t.sections.contactFormSendEmail}
          sendWALabel={t.sections.contactFormSendWA}
          locations={t.sections.contactLocations}
        />

      </main>

      <Footer t={t} />
    </div>
  );
}
