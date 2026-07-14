import Image from "next/image";
import type { Messages } from "@/src/lib/i18n";

export function Footer({ t }: { t: Messages }) {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-section)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo-silver.png" alt="Bagdja" width={92} height={28} />
          <p className="text-sm text-[var(--text-secondary)]">
            {t.footer.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-[var(--text-secondary)] md:text-right">
          <a className="hover:text-[var(--text-primary)]" href="mailto:contact@bagdja.com">
            contact@bagdja.com
          </a>
          <a
            className="hover:text-[var(--text-primary)]"
            href="https://wa.me/6285188448383"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.whatsappLabel} +62 851-8844-8383
          </a>
          <span className="text-xs text-[color:rgba(136,150,164,0.85)]">
            © {new Date().getFullYear()} Bagdja. {t.footer.rights}
          </span>
          <span className="text-xs text-[color:rgba(136,150,164,0.85)]">
            {t.footer.legalEntity}
          </span>
        </div>
      </div>
    </footer>
  );
}
