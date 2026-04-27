"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale, Messages } from "@/src/lib/i18n";

type NavItem = { label: string; href: string };

export function Header({ locale, t }: { locale: Locale; t: Messages }) {
  const [open, setOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: t.nav.platform, href: "https://console.bagdja.com" },
      { label: t.nav.development, href: "https://digital.bagdja.com" },
      { label: t.nav.service, href: "#service" },
      { label: t.nav.project, href: "#project" },
      { label: t.nav.product, href: "#product" },
      { label: t.nav.contact, href: "#contact" },
      { label: t.nav.store, href: "https://store.bagdja.com" },
      { label: t.nav.course, href: "https://course.bagdja.com" },
    ],
    [t],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-[color:rgba(26,29,33,0.8)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image src="/logo-gold.png" alt="Bagdja" width={92} height={28} priority />
          <span className="sr-only">Bagdja</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher locale={locale} />
          <a
            href="mailto:contact@bagdja.com"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-transparent px-3 py-2 text-sm text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
          >
            <Mail className="h-4 w-4" />
            {t.nav.email}
          </a>
          <a
            href="https://wa.me/6285188448383"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--action-primary)] px-3 py-2 text-sm font-medium text-[#111] hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" />
            {t.nav.whatsapp}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--border-default)] p-2 text-[var(--text-primary)] md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--border-default)] bg-[var(--bg-section)] md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <LanguageSwitcher locale={locale} />
              </div>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="mailto:contact@bagdja.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border-default)] px-3 py-2 text-sm text-[var(--text-primary)]"
                >
                  <Mail className="h-4 w-4" />
                  {t.nav.email}
                </a>
                <a
                  href="https://wa.me/6285188448383"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--action-primary)] px-3 py-2 text-sm font-medium text-[#111]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.nav.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
