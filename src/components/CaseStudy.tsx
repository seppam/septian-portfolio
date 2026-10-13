import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import type { CaseStudy as CS } from "@/data/case-studies";
import { contact } from "@/data/profile";
import { langHref, ui, type Lang } from "@/data/i18n";
import { liveState } from "@/lib/links";
import { BadgeCluster } from "./Badges";
import { ProjectVisual, Shot } from "./Media";
import { ContractsDiagram, PipelineDiagram } from "./Diagrams";

function Sec({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`s${n}`} className="flex flex-col gap-4">
      <h2 id={`s${n}`} className="h3 flex items-baseline gap-3"><span className="mono muted">{n}</span>{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudy({ p, cs, next, lang }: { p: Project; cs: CS; next?: Project; lang: Lang }) {
  const live = liveState(p) === "live";
  const nt = ui.newTab[lang];
  const c = ui.cs;
  const facts: [string, React.ReactNode][] = [
    [c.role[lang], cs.role],
    [c.team[lang], cs.team],
    [c.when[lang], cs.time],
    [c.stack[lang], p.stack.join(", ")],
  ];
  const shots = p.images ?? [];
  return (
    <main id="main" className="pb-24 md:pb-0">
      <div className="wrap pt-6 md:pt-10">
        <Link href={langHref(lang, "/#work")} className="tlink small inline-flex min-h-11 items-center gap-1"><ArrowLeft size={16} aria-hidden /> {ui.buttons.allWork[lang]}</Link>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <h1 className="text-[34px] leading-[1.08] md:text-[56px]">{p.title}</h1>
          <BadgeCluster p={p} lang={lang} />
        </div>
        <p className="mt-3 max-w-[60ch] text-lg muted">{p.oneLiner[lang]}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {live && (
            <a className="btn btn-primary" href={p.links.live} target="_blank" rel="noopener noreferrer">{ui.buttons.live[lang]} <ArrowUpRight size={18} aria-hidden /></a>
          )}
          {p.links.repos?.map((r) => (
            <a key={r.url} className="btn btn-secondary" href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${r.label[lang].toLowerCase()} GitHub (${nt})`}>{r.label[lang]} <ArrowUpRight size={18} aria-hidden /></a>
          ))}
          {p.links.videos?.map((v) => (
            <a key={v.url} className="btn btn-secondary" href={v.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${v.label[lang]} YouTube (${nt})`}>{v.label[lang]} <ArrowUpRight size={18} aria-hidden /></a>
          ))}
        </div>
        {(p.images?.length || p.visual) && (
          <div className="mt-10 rounded-2xl border hair bg-[var(--surface)] p-4 pb-10 md:p-10 md:pb-14">
            <ProjectVisual p={p} lang={lang} variant="hero" />
            {p.clip && <p className="small muted mt-6 md:mt-8">{ui.clip.caption[lang]}</p>}
          </div>
        )}
      </div>

      <div className="wrap mt-12 grid gap-10 md:grid-cols-[260px_1fr] md:gap-16">
        <aside aria-label={c.facts[lang]} className="md:sticky md:top-24 md:self-start">
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 rounded-2xl border hair bg-[var(--surface)] p-5 md:grid-cols-1">
            {facts.map(([k, v]) => (
              <div key={k} className="contents md:block">
                <dt className="mono muted md:mt-1">{k}</dt>
                <dd className="small">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="flex max-w-[68ch] flex-col gap-12">
          <Sec n={1} title={c.problem[lang]}>{cs.problem.map((t) => <p key={t}>{t}</p>)}</Sec>
          <Sec n={2} title={c.myRole[lang]}>
            <ul className="flex list-disc flex-col gap-2 pl-5">{cs.myRole.did.map((t) => <li key={t}>{t}</li>)}</ul>
            {cs.myRole.others && <p className="small muted">{cs.myRole.others}</p>}
          </Sec>
          <Sec n={3} title={c.approach[lang]}>
            {cs.approach.map((t) => <p key={t}>{t}</p>)}
            {p.slug === "gameforge" && (
              <figure className="rounded-2xl border hair bg-[var(--surface)] p-4">
                <PipelineDiagram lang={lang} className="mx-auto h-auto w-full max-w-[460px]" />
                <figcaption className="small muted mt-3">{c.pipelineCaption[lang]}</figcaption>
              </figure>
            )}
            {p.slug === "ursset" && (
              <figure className="rounded-2xl border hair bg-[var(--surface)] p-4">
                <ContractsDiagram lang={lang} className="mx-auto h-auto w-full max-w-[460px]" />
                <figcaption className="small muted mt-3">{c.contractsCaption[lang]}</figcaption>
              </figure>
            )}
          </Sec>
          <Sec n={4} title={c.decisions[lang]}>
            <div className="flex flex-col gap-5">
              {cs.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="muted">{d.text}</p>
                </div>
              ))}
            </div>
          </Sec>
          <Sec n={5} title={c.results[lang]}>
            <ul className="flex list-disc flex-col gap-2 pl-5">{cs.results.map((t) => <li key={t}>{t}</li>)}</ul>
          </Sec>
          {shots.length > 0 && (
            <Sec n={6} title={c.screens[lang]}>
              <div className="grid gap-6 sm:grid-cols-2">
                {shots.map((i) => (
                  <figure key={i.src} className={i.kind === "mobile" ? "sm:max-w-[240px]" : "sm:col-span-2"}>
                    <div className={`frame ${i.kind === "mobile" ? "frame-phone" : ""}`}><Shot img={i} lang={lang} sizes={i.kind === "mobile" ? "240px" : "700px"} /></div>
                    {i.caption && <figcaption className="small muted mt-2">{i.caption[lang]}</figcaption>}
                  </figure>
                ))}
              </div>
            </Sec>
          )}
          {cs.learned.length > 0 && (
            <Sec n={shots.length ? 7 : 6} title={c.learned[lang]}>
              {cs.learned.map((t) => <p key={t}>{t}</p>)}
            </Sec>
          )}
        </div>
      </div>

      <div className="wrap mt-16">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border hair bg-[var(--surface)] p-6 md:flex-row md:items-center">
          {next ? (
            <Link href={langHref(lang, `/work/${next.slug}`)} className="tlink inline-flex min-h-11 items-center gap-2 font-semibold">{ui.buttons.next[lang]}: {next.title} <ArrowRight size={18} aria-hidden /></Link>
          ) : <span />}
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>{ui.nav.hire[lang]}</a>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-30 border-t hair bg-[var(--bg)] p-3 md:hidden">
        <a className="btn btn-primary w-full" href={`mailto:${contact.email}`}>{ui.nav.hire[lang]}</a>
      </div>
    </main>
  );
}
