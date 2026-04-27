import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { defaultLocale, getMessages, isLocale, locales, type Locale } from "@/src/lib/i18n";
import { fetchProjects } from "@/src/lib/projects";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const locale: Locale =
    resolved.locale && isLocale(resolved.locale)
      ? (resolved.locale as Locale)
      : defaultLocale;

  const t = getMessages(locale);
  return {
    title: "Bagdja",
    description: t.hero.subtitle,
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const resolved = await params;
  if (!isLocale(resolved.locale)) notFound();
  const locale = resolved.locale as Locale;
  const t = getMessages(locale);
  const projects = await fetchProjects();
  
  return <LandingPage locale={locale} t={t} initialProjects={projects} />;
}
