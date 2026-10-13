import type { Metadata, Viewport } from "next";
import { langHref, type Lang } from "@/data/i18n";
import { OG_LOCALE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/data/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1211" },
  ],
};

/** hreflang alternates for a language-neutral path such as "/" or "/work/ursset". */
export function alternatesFor(lang: Lang, path: string) {
  return {
    canonical: langHref(lang, path),
    languages: {
      en: langHref("en", path),
      id: langHref("id", path),
      "x-default": langHref("en", path),
    },
  };
}

/** Defaults for a language's root layout. Pages override title/description/alternates. */
export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE[lang],
    description: SITE_DESCRIPTION[lang],
    alternates: alternatesFor(lang, "/"),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: SITE_TITLE[lang],
      description: SITE_DESCRIPTION[lang],
      url: langHref(lang, "/"),
      locale: OG_LOCALE[lang],
      alternateLocale: [OG_LOCALE[lang === "en" ? "id" : "en"]],
    },
    twitter: { card: "summary_large_image", title: SITE_TITLE[lang], description: SITE_DESCRIPTION[lang] },
  };
}

export function pageMetadata(lang: Lang, path: string, title: string, description: string, type: "website" | "article" = "website"): Metadata {
  return {
    title,
    description,
    alternates: alternatesFor(lang, path),
    openGraph: {
      type,
      siteName: SITE_NAME,
      title,
      description,
      url: langHref(lang, path),
      locale: OG_LOCALE[lang],
      alternateLocale: [OG_LOCALE[lang === "en" ? "id" : "en"]],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
