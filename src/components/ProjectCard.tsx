import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { liveState } from "@/lib/links";
import { BadgeCluster } from "./Badges";
import { ProjectVisual } from "./Media";

export function Links({ p, size = "md" }: { p: Project; size?: "md" | "sm" }) {
  const live = liveState(p) === "live";
  const cls = size === "sm" ? "btn-sm" : "";
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {live && (
        <a className={`btn btn-primary ${cls}`} href={p.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo (opens in a new tab)`}>
          Live demo <ArrowUpRight size={18} aria-hidden />
        </a>
      )}
      {p.caseStudy && (
        <Link className={`btn ${live ? "btn-secondary" : "btn-primary"} ${cls}`} href={`/work/${p.slug}`} aria-label={`${p.title} case study`}>
          Case study <ArrowRight size={18} aria-hidden />
        </Link>
      )}
      {p.links.repos?.map((r) => (
        <a key={r.url} className={`btn btn-secondary ${cls}`} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${r.label.toLowerCase()} on GitHub (opens in a new tab)`}>
          {r.label} <ArrowUpRight size={18} aria-hidden />
        </a>
      ))}
    </div>
  );
}

export default function ProjectCard({ p, variant }: { p: Project; variant: "featured" | "half" }) {
  const featured = variant === "featured";
  const visual = <ProjectVisual p={p} variant={variant} />;
  const hasVisual = !!(p.images?.length || p.visual);
  return (
    <article className={`card flex flex-col gap-5 ${featured ? "md:col-span-2" : ""}`} aria-labelledby={`${p.slug}-t`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="mono muted">{p.meta}</p>
        <BadgeCluster p={p} />
      </div>
      <div className={featured && hasVisual ? "grid items-center gap-8 md:grid-cols-[1.1fr_1fr]" : "flex flex-col gap-5"}>
        {hasVisual && <div className="pb-6 sm:pb-8 md:pb-0">{visual}</div>}
        <div className="flex flex-col gap-4">
          <h3 id={`${p.slug}-t`} className="h3">{p.title}</h3>
          <p>{p.oneLiner}</p>
          <ul className="small flex list-disc flex-col gap-2 pl-5 muted">
            {p.bullets?.map((b) => <li key={b}>{b}</li>)}
          </ul>
          {p.links.repoNote && <p className="small muted">{p.links.repoNote}</p>}
          <ul className="flex flex-wrap gap-2" aria-label="Stack">
            {p.stack.slice(0, 5).map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
          <Links p={p} />
        </div>
      </div>
    </article>
  );
}
