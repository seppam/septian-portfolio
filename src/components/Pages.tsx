import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import Nav from "@/components/Nav";
import { About, Approach, Contact, Credentials, Engineering, Footer, Hero, ProofStrip, Timeline, Work } from "@/components/Sections";
import { caseStudies } from "@/data/case-studies";
import { langHref, other, ui, type Lang } from "@/data/i18n";
import { contact } from "@/data/profile";
import { caseStudyProjects, getProject } from "@/data/projects";
import { SITE_URL } from "@/data/site";

const personLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  jobTitle: lang === "id" ? "Full-Stack Developer dan Systems Analyst" : "Full-Stack Developer and Systems Analyst",
  url: SITE_URL + langHref(lang, "/"),
  image: `${SITE_URL}/images/profile-og.jpg`,
  email: `mailto:${contact.email}`,
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: ["React", "Next.js", "Node.js", "Solidity", "AI application development", "Systems analysis"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Gunadarma" },
  address: { "@type": "PostalAddress", addressLocality: "Karawang", addressRegion: "West Java", addressCountry: "ID" },
  inLanguage: lang,
});

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} alt={langHref(other(lang), "/")} />
      <main id="main">
        <Hero lang={lang} />
        <ProofStrip lang={lang} />
        <Work lang={lang} />
        <Engineering lang={lang} />
        <Approach lang={lang} />
        <About lang={lang} />
        <Credentials lang={lang} />
        <Timeline lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd(lang)) }} />
    </>
  );
}

export function CaseStudyPage({ lang, slug }: { lang: Lang; slug: string }) {
  const p = getProject(slug);
  const cs = caseStudies[slug];
  if (!p || !cs) notFound();
  const list = caseStudyProjects();
  const next = list[(list.findIndex((x) => x.slug === slug) + 1) % list.length];
  return (
    <>
      <Nav lang={lang} alt={langHref(other(lang), `/work/${slug}`)} />
      <CaseStudy p={p} cs={cs[lang]} next={next} lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export function NotFoundPage({ lang }: { lang: Lang }) {
  return (
    <>
      <Nav lang={lang} alt={langHref(other(lang), "/")} />
      <main id="main" className="wrap section min-h-[60vh]">
        <h1 className="text-[34px] md:text-[56px]">{ui.nf.title[lang]}</h1>
        <p className="mt-4 max-w-[60ch] muted">{ui.nf.text[lang]}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="btn btn-primary" href={langHref(lang, "/")}>{ui.nf.back[lang]}</Link>
          <a className="btn btn-secondary" href={`mailto:${contact.email}`}>{ui.nf.email[lang]}</a>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
