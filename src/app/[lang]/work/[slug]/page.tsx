import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/Pages";
import { isLang, LANGS, ui } from "@/data/i18n";
import { caseStudyProjects, getProject } from "@/data/projects";
import { SITE_NAME } from "@/data/site";
import { pageMetadata } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() {
  return LANGS.flatMap((lang) => caseStudyProjects().map((p) => ({ lang, slug: p.slug })));
}

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getProject(slug);
  if (!p || !isLang(lang)) return {};
  return pageMetadata(lang, `/work/${slug}`, `${p.title} ${ui.cs.titleSuffix[lang]} | ${SITE_NAME}`, p.oneLiner[lang], "article");
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  return <CaseStudyPage lang={lang} slug={slug} />;
}
