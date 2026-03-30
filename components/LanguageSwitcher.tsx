"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { localeLabels, locales, type Locale } from "@/src/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () =>
      locales.map((code) => ({
        code,
        label: localeLabels[code],
        href: `/${code}`,
      })),
    [],
  );

  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-transparent px-3 py-2 text-sm text-[var(--text-primary)] hover:border-[color:rgba(229,160,68,0.6)]"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[var(--text-secondary)]">{localeLabels[locale]}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-section)] shadow-lg"
        >
          {items.map((it) => (
            <Link
              key={it.code}
              role="menuitem"
              href={it.href}
              className={`block px-4 py-2 text-sm ${
                it.code === locale
                  ? "bg-[color:rgba(92,126,154,0.14)] text-[var(--text-primary)]"
                  : "text-[var(--text-secondary)] hover:bg-[color:rgba(255,255,255,0.04)] hover:text-[var(--text-primary)]"
              }`}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

