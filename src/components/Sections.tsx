import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import { about, approach, contact, credentials, credentialsMore, currently, hero, proof, timeline } from "@/data/profile";
import { byTier } from "@/data/projects";
import { liveState } from "@/lib/links";
import { Badge } from "./Badges";
import ProjectCard from "./ProjectCard";

function Eyebrow({ n, label }: { n: string; label: string }) {
  return <p className="mono muted mb-3">{n} {label}</p>;
}

export function Hero() {
  return (
    <section className="wrap pb-10 pt-6 md:pb-16 md:pt-14" aria-labelledby="hero-h">
      <div className="grid items-center gap-6 md:grid-cols-[7fr_5fr] md:gap-12">
        <div>
          <div className="mb-4 flex items-center gap-4 md:hidden">
            <Image src="/images/profile.webp" alt="" width={72} height={72} priority sizes="72px" className="h-[72px] w-[72px] rounded-full object-cover object-[50%_18%]" />
            <p className="mono !normal-case !tracking-normal text-[13px] font-semibold">Muhamad Septian Pamungkas</p>
          </div>
          <p className="badge badge-live mb-4 !text-[12px]">
            <span className="dot" aria-hidden /> {hero.status}
          </p>
          <h1 id="hero-h" className="text-[34px] leading-[1.08] md:text-[56px]">
            <span className="mono muted mb-3 hidden !text-[13px] md:block">Muhamad Septian Pamungkas</span>
            <span className="sr-only md:hidden">Muhamad Septian Pamungkas: </span>
            {hero.h1}
          </h1>
          <p className="mt-4 max-w-[60ch] text-[17px] muted md:mt-6 md:text-lg">
            <span className="md:hidden">{hero.sublineShort}</span>
            <span className="hidden md:inline">{hero.sublineLong}</span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="btn btn-primary">View work</a>
            <a href={contact.cvEn} className="btn btn-secondary" download>
              <Download size={18} aria-hidden /> Download CV
            </a>
          </div>
          <p className="small mt-5 flex flex-wrap gap-x-5 gap-y-1">
            <a className="tlink inline-flex min-h-11 items-center" href={`mailto:${contact.email}`}>Email</a>
            <a className="tlink inline-flex min-h-11 items-center" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="tlink inline-flex min-h-11 items-center" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="tlink inline-flex min-h-11 items-center" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
        </div>
        <figure className="hidden md:block">
          <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border hair bg-[var(--surface)]">
            <Image src="/images/profile.webp" alt="Muhamad Septian Pamungkas, smiling, in a batik shirt with a laptop on his shoulder" width={533} height={666} priority sizes="400px" className="aspect-[4/5] h-auto w-full object-cover object-[50%_20%]" />
          </div>
          <figcaption className="mono muted mx-auto mt-3 max-w-[400px]">Karawang, 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ProofStrip() {
  return (
    <section aria-label="At a glance" className="border-y hair">
      <ul className="wrap grid grid-cols-2 md:grid-cols-4">
        {proof.map((c, i) => (
          <li key={c.value} className={`border-[var(--border)] ${i % 2 === 0 ? "border-r" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} md:border-r md:last:border-r-0`}>
            <Link href={c.href} className={`block py-5 pr-3 hover:text-[var(--accent)] md:px-5 md:first:pl-0 ${i % 2 === 1 ? "pl-4 md:pl-5" : ""}`}>
              <span className="block text-[24px] font-semibold leading-none md:text-[40px]">{c.value}</span>
              <span className="small muted mt-2 block">{c.caption}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Work() {
  const [a, b, c, d] = byTier(1);
  return (
    <section id="work" className="wrap section" aria-labelledby="work-h">
      <Eyebrow n="01" label="WORK" />
      <h2 id="work-h" className="h2">Selected work</h2>
      <p className="mt-3 max-w-[60ch] muted">
        Four 2026 products. Two are live today. Each shows what I owned.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ProjectCard p={a} variant="featured" />
        <ProjectCard p={b} variant="featured" />
        <ProjectCard p={c} variant="half" />
        <ProjectCard p={d} variant="half" />
      </div>
    </section>
  );
}

export function Engineering() {
  const t2 = byTier(2);
  const t3 = byTier(3);
  return (
    <section id="engineering" className="wrap section pt-0 md:pt-0" aria-labelledby="eng-h">
      <Eyebrow n="02" label="ENGINEERING" />
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 id="eng-h" className="h2">More engineering</h2>
        <p className="small muted">Each repo has a README and tests.</p>
      </div>
      <ul className="mt-8 divide-y divide-[var(--border)] border-y hair">
        {t2.map((p) => (
          <li key={p.slug} className="grid gap-3 py-6 md:grid-cols-[1.2fr_2fr_auto] md:items-start md:gap-8">
            <h3 className="h3">{p.title}</h3>
            <div className="flex flex-col gap-3">
              <p className="small">{p.oneLiner}</p>
              <ul className="flex flex-wrap gap-2" aria-label="Stack">{p.stack.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {p.links.repos?.map((r) => (
                <a key={r.url} className="btn btn-secondary btn-sm" href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository on GitHub (opens in a new tab)`}>Repo <ArrowUpRight size={16} aria-hidden /></a>
              ))}
              {p.links.readme && (
                <a className="btn btn-secondary btn-sm" href={p.links.readme} target="_blank" rel="noopener noreferrer" aria-label={`Read the ${p.title} README (opens in a new tab)`}>README <ArrowUpRight size={16} aria-hidden /></a>
              )}
            </div>
          </li>
        ))}
      </ul>
      <details className="mt-8 rounded-2xl border hair bg-[var(--surface)] p-4 md:p-6">
        <summary className="h3 flex min-h-11 cursor-pointer items-center">Earlier experiments ({t3.length})</summary>
        <ul className="mt-4 divide-y divide-[var(--border)]">
          {t3.map((p) => (
            <li key={p.slug} className="flex flex-col gap-2 py-4 md:flex-row md:items-center md:justify-between md:gap-6">
              <div>
                <p className="font-semibold">
                  {p.title} <span className="mono muted ml-1 block md:inline">{p.meta}</span>
                </p>
                <p className="small muted">{p.oneLiner}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {liveState(p) === "live" && <Badge kind="live">Live</Badge>}
                {liveState(p) === "offline" && <Badge kind="warn">Demo offline</Badge>}
                {p.badges.includes("prototype") && <Badge kind="warn">Prototype, not submitted</Badge>}
                {liveState(p) === "live" && (
                  <a className="btn btn-secondary btn-sm" href={p.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo (opens in a new tab)`}>Live <ArrowUpRight size={16} aria-hidden /></a>
                )}
                {p.links.repos?.map((r) => (
                  <a key={r.url} className="btn btn-secondary btn-sm" href={r.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository on GitHub (opens in a new tab)`}>Repo <ArrowUpRight size={16} aria-hidden /></a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}

export function Approach() {
  return (
    <section id="approach" className="wrap section pt-0 md:pt-0" aria-labelledby="ap-h">
      <Eyebrow n="03" label="APPROACH" />
      <h2 id="ap-h" className="h2">What I do</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {approach.map((a) => (
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

export function About() {
  return (
    <section id="about" className="wrap section pt-0 md:pt-0" aria-labelledby="ab-h">
      <Eyebrow n="04" label="ABOUT" />
      <h2 id="ab-h" className="h2">About</h2>
      <div className="mt-8 grid gap-10 md:grid-cols-[7fr_5fr]">
        <div className="flex max-w-[68ch] flex-col gap-5">
          {about.map((t) => <p key={t}>{t}</p>)}
        </div>
        <dl className="flex flex-col gap-5 self-start rounded-2xl border hair bg-[var(--surface)] p-6">
          {currently.map((c) => (
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

export function Credentials() {
  return (
    <section id="credentials" className="wrap section pt-0 md:pt-0" aria-labelledby="cr-h">
      <Eyebrow n="05" label="CREDENTIALS" />
      <h2 id="cr-h" className="h2">Credentials</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c) => (
          <li key={c.title} className="card flex flex-col gap-2 !p-5">
            <p className="mono muted">{c.issuer}</p>
            <p className="font-semibold">{c.title}</p>
            {c.date && <p className="small muted">{c.date}</p>}
            {c.href && (
              <a className="tlink small mt-auto inline-flex min-h-11 items-center gap-1 pt-2" href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${c.title} on Credly (opens in a new tab)`}>
                Verify on Credly <ArrowUpRight size={16} aria-hidden />
              </a>
            )}
          </li>
        ))}
      </ul>
      <ul className="small muted mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {credentialsMore.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="wrap section pt-0 md:pt-0" aria-labelledby="tl-h">
      <Eyebrow n="06" label="TIMELINE" />
      <h2 id="tl-h" className="h2">Timeline</h2>
      <ol className="mt-8 border-l hair md:border-l-0">
        {timeline.map((t) => (
          <li key={t.title} className="relative grid gap-1 border-[var(--border)] py-4 pl-5 md:grid-cols-[220px_1fr] md:gap-8 md:border-t md:pl-0">
            <span className="absolute -left-[5px] top-6 h-[9px] w-[9px] rounded-full bg-[var(--accent)] md:hidden" aria-hidden />
            <p className="mono muted md:pt-1">{t.date}</p>
            <div>
              <h3 className="font-semibold">{t.title}</h3>
              <p className="small muted">{t.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  const b = "btn btn-secondary w-full sm:w-auto";
  return (
    <section id="contact" className="wrap section pt-0 md:pt-0" aria-labelledby="co-h">
      <div className="rounded-2xl border hair bg-[var(--surface)] p-6 md:p-12">
        <Eyebrow n="07" label="CONTACT" />
        <h2 id="co-h" className="h2">Let&apos;s talk.</h2>
        <p className="mt-3 max-w-[60ch] muted">
          Open to full-stack and systems-analyst roles that use AI. Open to hybrid and remote roles.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="btn btn-primary w-full sm:w-auto" href={`mailto:${contact.email}`}><Mail size={18} aria-hidden /> {contact.email}</a>
          <a className={b} href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden /> WhatsApp</a>
          <a className={b} href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={18} aria-hidden /></a>
          <a className={b} href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={18} aria-hidden /></a>
        </div>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className={b} href={contact.cvEn} download><Download size={18} aria-hidden /> Download CV (PDF)</a>
          <a className={b} href={contact.cvId} download lang="id"><Download size={18} aria-hidden /> CV Bahasa Indonesia</a>
        </div>
        <p className="small muted mt-6">{contact.location}</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t hair py-8">
      <div className="wrap small muted flex flex-wrap justify-between gap-2">
        <p>© 2026 Muhamad Septian Pamungkas</p>
        <p>Built with Next.js. Hosted on Vercel.</p>
      </div>
    </footer>
  );
}
