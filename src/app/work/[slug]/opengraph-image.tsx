import { notFound } from "next/navigation";
import { caseStudyProjects, getProject } from "@/data/projects";
import { SITE_URL } from "@/data/site";
import { ogSize, renderOg } from "@/lib/og";
import { liveState } from "@/lib/links";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case study";
export function generateStaticParams() {
  return caseStudyProjects().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const chips = [liveState(p) === "live" ? "Live" : "", p.badges.includes("solo") ? "Solo" : p.teamLabel ?? ""].filter(Boolean);
  return renderOg({
    eyebrow: "Case study · Muhamad Septian Pamungkas",
    title: p.title,
    chips,
    footer: SITE_URL.replace(/^https?:\/\//, ""),
  });
}
