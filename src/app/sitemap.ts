import type { MetadataRoute } from "next";
import { LANGS, langHref } from "@/data/i18n";
import { caseStudyProjects } from "@/data/projects";
import { SITE_URL } from "@/data/site";

const entry = (path: string, priority: number): MetadataRoute.Sitemap =>
  LANGS.map((lang) => ({
    url: SITE_URL + langHref(lang, path).replace(/^\/$/, ""),
    priority,
    alternates: {
      languages: {
        en: SITE_URL + langHref("en", path).replace(/^\/$/, ""),
        id: SITE_URL + langHref("id", path),
        "x-default": SITE_URL + langHref("en", path).replace(/^\/$/, ""),
      },
    },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...entry("/", 1), ...caseStudyProjects().flatMap((p) => entry(`/work/${p.slug}`, 0.7))];
}
