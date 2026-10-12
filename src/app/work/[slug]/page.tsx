import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { caseStudies } from "@/data/case-studies";
import { caseStudyProjects, getProject } from "@/data/projects";
import { SITE_NAME } from "@/data/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return caseStudyProjects().map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} case study | ${SITE_NAME}`;
  return {
    title,
    description: p.oneLiner,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title, description: p.oneLiner, url: `/work/${slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description: p.oneLiner },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  const cs = caseStudies[slug];
  if (!p || !cs) notFound();
  const list = caseStudyProjects();
  const next = list[(list.findIndex((x) => x.slug === slug) + 1) % list.length];
  return (
    <>
      <Nav />
      <CaseStudy p={p} cs={cs} next={next} />
      <Footer />
    </>
  );
}
