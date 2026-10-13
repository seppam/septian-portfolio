import { notFound } from "next/navigation";
import { isLang, LANGS, ui } from "@/data/i18n";
import { caseStudyProjects, getProject } from "@/data/projects";
import { SITE_URL } from "@/data/site";
import { ogSize, renderOg } from "@/lib/og";
import { liveState } from "@/lib/links";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case study";
export function generateStaticParams() {
  return LANGS.flatMap((lang) => caseStudyProjects().map((p) => ({ lang, slug: p.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const p = getProject(slug);
  if (!p || !isLang(lang)) notFound();
  const chips = [liveState(p) === "live" ? ui.badge.live[lang] : "", p.badges.includes("solo") ? ui.badge.solo[lang] : p.teamLabel?.[lang] ?? ""].filter(Boolean);
  return renderOg({
    eyebrow: `${ui.cs.eyebrow[lang]} · Muhamad Septian Pamungkas`,
    title: p.title,
    chips,
    footer: SITE_URL.replace(/^https?:\/\//, "") + (lang === "id" ? "/id" : ""),
  });
}
