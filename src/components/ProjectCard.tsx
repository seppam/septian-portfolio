import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { langHref, ui, type Lang } from "@/data/i18n";
import { liveState } from "@/lib/links";
import { BadgeCluster } from "./Badges";
import { ProjectVisual } from "./Media";

export function Links({ p, lang, size = "md" }: { p: Project; lang: Lang; size?: "md" | "sm" }) {
  const live = liveState(p) === "live";
  const cls = size === "sm" ? "btn-sm" : "";
  const nt = ui.newTab[lang];
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {live && (
        <a className={`btn btn-primary ${cls}`} href={p.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${ui.buttons.live[lang].toLowerCase()} (${nt})`}>
          {ui.buttons.live[lang]} <ArrowUpRight size={18} aria-hidden />
        </a>
      )}
      {p.caseStudy && (
        <Link className={`btn ${live ? "btn-secondary" : "btn-primary"} ${cls}`} href={langHref(lang, `/work/${p.slug}`)} aria-label={`${p.title} ${ui.cs.titleSuffix[lang]}`}>
          {ui.buttons.caseStudy[lang]} <ArrowRight size={18} aria-hidden />
        </Link>
      )}
      {p.links.repos?.map((r) => (
        <a key={r.url} className={`btn btn-secondary ${cls}`} href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${r.label[lang].toLowerCase()} GitHub (${nt})`}>
          {r.label[lang]} <ArrowUpRight size={18} aria-hidden />
        </a>
      ))}
      {/* Projects without a case study carry their videos on the card. */}
      {!p.caseStudy &&
        p.links.videos?.map((v) => (
          <a key={v.url} className={`btn btn-secondary ${cls}`} href={v.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${v.label[lang]} YouTube (${nt})`}>
            {v.label[lang]} <ArrowUpRight size={18} aria-hidden />
          </a>
        ))}
    </div>
  );
}

export default function ProjectCard({ p, lang, variant }: { p: Project; lang: Lang; variant: "featured" | "half" }) {
  const featured = variant === "featured";
  const visual = <ProjectVisual p={p} lang={lang} variant={variant} />;
  const hasVisual = !!(p.images?.length || p.visual);
  return (
    <article className={`card flex flex-col gap-5 ${featured ? "md:col-span-2" : ""}`} aria-labelledby={`${p.slug}-t`}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="mono muted">{p.meta[lang]}</p>
        <BadgeCluster p={p} lang={lang} />
      </div>
      <div className={featured && hasVisual ? "grid items-center gap-8 md:grid-cols-[1.1fr_1fr]" : "flex flex-col gap-5"}>
        {hasVisual && <div className="pb-6 sm:pb-8 md:pb-0">{visual}</div>}
        <div className="flex flex-col gap-4">
          <h3 id={`${p.slug}-t`} className="h3">{p.title}</h3>
          <p>{p.oneLiner[lang]}</p>
          <ul className="small flex list-disc flex-col gap-2 pl-5 muted">
            {p.bullets?.[lang].map((b) => <li key={b}>{b}</li>)}
          </ul>
          {p.links.repoNote && <p className="small muted">{p.links.repoNote[lang]}</p>}
          <ul className="flex flex-wrap gap-2" aria-label={ui.sections.stack[lang]}>
            {p.stack.slice(0, 5).map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
          <Links p={p} lang={lang} />
        </div>
      </div>
    </article>
  );
}
