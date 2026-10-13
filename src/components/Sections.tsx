import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { about, approach, contact, credentials, credentialsMore, currently, hero, internshipCert, openLine, proof, timeline } from "@/data/profile";
import { langHref, ui, type Lang } from "@/data/i18n";
import { byTier } from "@/data/projects";
import { demoState } from "@/lib/links";
import { Badge } from "./Badges";
import ProjectCard from "./ProjectCard";
import { Shot } from "./Media";

type L = { lang: Lang };
const internshipTitle: Record<Lang, string> = { en: "Career break", id: "Jeda karier" };

function Eyebrow({ n, label }: { n: string; label: string }) {
  return <p className="mono muted mb-3">{n} {label}</p>;
}

export function Hero({ lang }: L) {
  const h = hero[lang];
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <section className="wrap pb-10 pt-6 md:pb-16 md:pt-14" aria-labelledby="hero-h">
      <div className="grid items-center gap-6 md:grid-cols-[7fr_5fr] md:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-4 md:hidden">
            <Image src="/images/profile.webp" alt="" width={72} height={72} priority sizes="72px" className="h-[72px] w-[72px] rounded-full object-cover object-[50%_18%]" />
            <p className="mono !normal-case !tracking-normal text-[13px] font-semibold">Muhamad Septian Pamungkas</p>
          </div>
          <p className="mb-4 flex items-start gap-2 text-[15px] font-medium text-[var(--live-fg)]">
            <span className="dot mt-[9px] shrink-0 bg-[var(--accent)]" aria-hidden /> <span className="text-[var(--text)]">{openLine[lang]}</span>
          </p>
          <h1 id="hero-h" className="text-[34px] leading-[1.08] md:text-[56px]">
            <span className="mono muted mb-3 hidden !text-[13px] md:block">Muhamad Septian Pamungkas</span>
            <span className="sr-only md:hidden">Muhamad Septian Pamungkas: </span>
            {h.h1}
          </h1>
          <p className="mt-4 max-w-[60ch] text-[17px] muted md:mt-6 md:text-lg">
            <span className="md:hidden">{h.sublineShort}</span>
            <span className="hidden md:inline">{h.sublineLong}</span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="btn btn-primary">{ui.hero.viewWork[lang]}</a>
            <a href={`mailto:${contact.email}`} className="btn btn-secondary"><Mail size={18} aria-hidden /> {ui.hero.email[lang]}</a>
          </div>
          <p className="small mt-5 flex flex-wrap gap-x-5 gap-y-1">
            <a className="tlink inline-flex min-h-11 items-center" href={contact.linkedin} {...ext}>LinkedIn</a>
            <a className="tlink inline-flex min-h-11 items-center" href={contact.github} {...ext}>GitHub</a>
          </p>
        </div>
        <figure className="hidden md:block">
          <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border hair bg-[var(--surface)]">
            <Image src="/images/profile.webp" alt={ui.hero.photoAlt[lang]} width={533} height={666} priority sizes="400px" className="aspect-[4/5] h-auto w-full object-cover object-[50%_20%]" />
          </div>
          <figcaption className="mono muted mx-auto mt-3 max-w-[400px]">{ui.hero.caption[lang]}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ProofStrip({ lang }: L) {
  return (
    <section aria-label={ui.hero.glance[lang]} className="border-y hair">
      <ul className="wrap grid grid-cols-2 md:grid-cols-4">
        {proof[lang].map((c, i) => {
          // Every cell that has a divider on its left gets padding on that side, so text never touches the line.
          const cell = [
            "",
            "border-l border-[var(--border)] pl-4 md:pl-6",
            "border-t border-[var(--border)] md:border-l md:border-t-0 md:pl-6",
            "border-l border-t border-[var(--border)] pl-4 md:border-t-0 md:pl-6",
          ][i];
          return (
            <li key={c.value} className={cell}>
              <Link href={c.href.startsWith("/") ? langHref(lang, c.href) : c.href} className="block py-5 pr-3 hover:text-[var(--accent)] md:pr-5">
                <span className="block text-[24px] font-semibold leading-none md:text-[40px]">{c.value}</span>
                <span className="small muted mt-2 block">{c.caption}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function Work({ lang }: L) {
  const [a, b, c, d] = byTier(1);
  const s = ui.sections;
  return (
    <section id="work" className="wrap section" aria-labelledby="work-h">
      <Eyebrow n="01" label={s.workEyebrow[lang]} />
      <h2 id="work-h" className="h2">{s.workTitle[lang]}</h2>
      <p className="mt-3 max-w-[60ch] muted">{s.workIntro[lang]}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ProjectCard p={a} lang={lang} variant="featured" />
        <ProjectCard p={b} lang={lang} variant="featured" />
        <ProjectCard p={c} lang={lang} variant="half" />
        <ProjectCard p={d} lang={lang} variant="half" />
      </div>
    </section>
  );
}

export function Engineering({ lang }: L) {
  const t2 = byTier(2);
  const t3 = byTier(3);
  const s = ui.sections;
  const nt = ui.newTab[lang];
  return (
    <section id="projects" className="wrap section pt-0 md:pt-0" aria-labelledby="eng-h">
      <Eyebrow n="02" label={s.engEyebrow[lang]} />
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 id="eng-h" className="h2">{s.engTitle[lang]}</h2>
        <p className="small muted">{s.engNote[lang]}</p>
      </div>
      <ul className="mt-8 divide-y divide-[var(--border)] border-y hair">
        {t2.map((p) => (
          <li key={p.slug} className="grid gap-3 py-6 md:grid-cols-[1.1fr_2fr_auto_224px] md:items-start md:gap-8">
            <h3 className="h3">{p.title}</h3>
            <div className="flex flex-col gap-3">
              <p className="small">{p.oneLiner[lang]}</p>
              <ul className="flex flex-wrap gap-2" aria-label={s.stack[lang]}>{p.stack.map((x) => <li key={x} className="chip">{x}</li>)}</ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.links.repos?.map((r) => (
                <a key={r.url} className="btn btn-secondary btn-sm" href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${r.label[lang].toLowerCase()} GitHub (${nt})`}>{r.label[lang]} <ArrowUpRight size={16} aria-hidden /></a>
              ))}
              {p.links.readme && (
                <a className="btn btn-secondary btn-sm" href={p.links.readme} target="_blank" rel="noopener noreferrer" aria-label={`README ${p.title} (${nt})`}>{ui.buttons.readme[lang]} <ArrowUpRight size={16} aria-hidden /></a>
              )}
            </div>
            {p.images?.[0] ? (
              <div className="frame order-first w-full max-w-[220px] md:order-none md:max-w-none">
                <Shot img={p.images[0]} lang={lang} sizes="(min-width: 768px) 224px, 360px" />
              </div>
            ) : (
              <div className="hidden md:block" aria-hidden />
            )}
          </li>
        ))}
      </ul>
      <details className="mt-8 rounded-2xl border hair bg-[var(--surface)] p-4 md:p-6">
        <summary className="h3 flex min-h-11 cursor-pointer items-center">{s.earlier[lang]} ({t3.length})</summary>
        <ul className="mt-4 divide-y divide-[var(--border)]">
          {t3.map((p) => {
            const demo = demoState(p);
            return (
              <li key={p.slug} className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
                {p.images?.[0] && (
                  <div className={`frame w-full max-w-[160px] shrink-0 md:order-first ${p.images[0].kind === "mobile" ? "frame-phone max-w-[72px] md:max-w-[72px]" : "md:max-w-[144px]"}`}>
                    <Shot img={p.images[0]} lang={lang} sizes="144px" />
                  </div>
                )}
                <div className="md:mr-auto">
                  <p className="font-semibold">
                    {p.title} <span className="mono muted ml-1 block md:inline">{p.meta[lang]}</span>
                  </p>
                  <p className="small muted">{p.oneLiner[lang]}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {demo === "offline" && <Badge kind="warn">{ui.badge.offline[lang]}</Badge>}
                  {p.badges.includes("prototype") && <Badge kind="warn">{ui.badge.prototype[lang]}</Badge>}
                  {demo === "ok" && (
                    <a className="btn btn-secondary btn-sm" href={p.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${ui.buttons.openDemo[lang].toLowerCase()} (${nt})`}>{ui.buttons.openDemo[lang]} <ArrowUpRight size={16} aria-hidden /></a>
                  )}
                  {p.links.repos?.map((r) => (
                    <a key={r.url} className="btn btn-secondary btn-sm" href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} ${r.label[lang].toLowerCase()} GitHub (${nt})`}>{r.label[lang]} <ArrowUpRight size={16} aria-hidden /></a>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </details>
    </section>
  );
}

export function Approach({ lang }: L) {
  const s = ui.sections;
  return (
    <section id="approach" className="wrap section pt-0 md:pt-0" aria-labelledby="ap-h">
      <Eyebrow n="03" label={s.apEyebrow[lang]} />
      <h2 id="ap-h" className="h2">{s.apTitle[lang]}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {approach[lang].map((a) => (
          <div key={a.n} className="flex flex-col gap-3 border-t hair pt-6">
            <p className="mono muted">{a.n}</p>
            <h3 className="h3">{a.title}</h3>
            <p className="muted">{a.text}</p>
            <ul className="flex flex-wrap gap-2">{a.chips.map((c) => <li key={c} className="chip">{c}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About({ lang }: L) {
  const s = ui.sections;
  return (
    <section id="about" className="wrap section pt-0 md:pt-0" aria-labelledby="ab-h">
      <Eyebrow n="04" label={s.abEyebrow[lang]} />
      <h2 id="ab-h" className="h2">{s.abTitle[lang]}</h2>
      <div className="mt-8 grid gap-10 md:grid-cols-[7fr_5fr]">
        <div className="flex max-w-[68ch] flex-col gap-5">
          {about[lang].map((t) => <p key={t}>{t}</p>)}
        </div>
        <dl className="flex flex-col gap-5 self-start rounded-2xl border hair bg-[var(--surface)] p-6">
          {currently[lang].map((c) => (
            <div key={c.label}>
              <dt className="mono muted">{c.label}</dt>
              <dd className="mt-1">{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Credentials({ lang }: L) {
  const s = ui.sections;
  const nt = ui.newTab[lang];
  return (
    <section id="credentials" className="wrap section pt-0 md:pt-0" aria-labelledby="cr-h">
      <Eyebrow n="05" label={s.crEyebrow[lang]} />
      <h2 id="cr-h" className="h2">{s.crTitle[lang]}</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c) => (
          <li key={c.title} className="card flex flex-col gap-2 !p-5">
            <p className="mono muted">{c.issuer}</p>
            <p className="font-semibold">{c.title}</p>
            {c.date && <p className="small muted">{c.date[lang]}</p>}
            {c.href && (() => {
              const credly = c.href.includes("credly.com");
              const label = credly ? ui.buttons.verify[lang] : ui.buttons.viewCert[lang];
              return (
                <a className="tlink small mt-auto inline-flex min-h-11 items-center gap-1 pt-2" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${c.title} (${nt})`}>
                  {label} <ArrowUpRight size={16} aria-hidden />
                </a>
              );
            })()}
          </li>
        ))}
      </ul>
      <details className="more-certs mt-6">
        <summary className="small inline-flex min-h-11 cursor-pointer items-center gap-2 font-medium">
          {ui.buttons.moreCerts[lang]} ({credentialsMore[lang].length})
          <ChevronDown size={16} aria-hidden className="more-chev" />
        </summary>
        <ul className="small muted mt-4 flex flex-col gap-x-6 gap-y-2 sm:flex-row sm:flex-wrap">
          {credentialsMore[lang].map((c) => (
            <li key={c.text}>
              {c.text}
              {c.links?.map((l) => (
                <span key={l.href}>
                  {" "}
                  <a className="tlink inline-flex min-h-6 items-center gap-0.5" href={l.href} target="_blank" rel="noopener noreferrer" aria-label={`${l.label[lang]}: ${c.text} (${nt})`}>
                    {l.label[lang]} <ArrowUpRight size={14} aria-hidden />
                  </a>
                </span>
              ))}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

export function Timeline({ lang }: L) {
  const s = ui.sections;
  return (
    <section id="timeline" className="wrap section pt-0 md:pt-0" aria-labelledby="tl-h">
      <Eyebrow n="06" label={s.tlEyebrow[lang]} />
      <h2 id="tl-h" className="h2">{s.tlTitle[lang]}</h2>
      <ol className="mt-8 border-l hair md:border-l-0">
        {timeline[lang].map((t) => (
          <li key={t.title} className="relative grid gap-1 border-[var(--border)] py-4 pl-5 md:grid-cols-[220px_1fr] md:gap-8 md:border-t md:pl-0">
            <span className="absolute -left-[5px] top-6 h-[9px] w-[9px] rounded-full bg-[var(--accent)] md:hidden" aria-hidden />
            <p className="mono muted md:pt-1">{t.date}</p>
            <div>
              <h3 className="font-semibold">{t.title}</h3>
              <p className="small muted">{t.text}</p>
              {t.title.startsWith(internshipTitle[lang]) && (
                <a className="tlink small mt-1 inline-flex min-h-11 items-center gap-1 md:min-h-6" href={internshipCert.href} target="_blank" rel="noopener noreferrer" aria-label={`${internshipCert.label[lang]}: Bank Sampah Digital (${ui.newTab[lang]})`}>
                  {internshipCert.label[lang]} <ArrowUpRight size={14} aria-hidden />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact({ lang }: L) {
  const b = "btn btn-secondary w-full sm:w-auto";
  const s = ui.sections;
  return (
    <section id="contact" className="wrap section pt-0 md:pt-0" aria-labelledby="co-h">
      <div className="rounded-2xl border hair bg-[var(--surface)] p-6 md:p-12">
        <Eyebrow n="07" label={s.coEyebrow[lang]} />
        <h2 id="co-h" className="h2">{s.coTitle[lang]}</h2>
        <p className="mt-3 max-w-[60ch] muted">{openLine[lang]}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-primary w-full sm:w-auto" href={`mailto:${contact.email}`}><Mail size={18} aria-hidden /> {contact.email}</a>
          <a className={b} href={contact.linkedin} target="_blank" rel="noopener noreferrer">{contact.linkedinLabel} <ArrowUpRight size={18} aria-hidden /></a>
          <a className={b} href={contact.github} target="_blank" rel="noopener noreferrer">{contact.githubLabel} <ArrowUpRight size={18} aria-hidden /></a>
        </div>
        <p className="small muted mt-6">{contact.location}</p>
      </div>
    </section>
  );
}

export function Footer({ lang }: L) {
  return (
    <footer className="border-t hair py-8">
      <div className="wrap small muted flex flex-wrap justify-between gap-2">
        <p>© 2026 Muhamad Septian Pamungkas</p>
        <p>{ui.footer.built[lang]}</p>
      </div>
    </footer>
  );
}
