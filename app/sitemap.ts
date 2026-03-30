import type { MetadataRoute } from "next";
import { locales } from "@/src/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";
  const now = new Date();
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.7,
  }));
}
