import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotFoundPage } from "@/components/Pages";
import { isLang, ui } from "@/data/i18n";

// Rendered by src/proxy.ts with a real 404 status for every unknown URL (EN: /nope, ID: /id/nope).
// (A notFound() boundary renders as an unstyled client shell in this Next version, so the proxy is used instead.)
export async function generateMetadata({ params }: PageProps<"/[lang]/not-found-page">): Promise<Metadata> {
  const { lang } = await params;
  return { title: isLang(lang) ? ui.nf.metaTitle[lang] : "Page not found", robots: { index: false, follow: false }, alternates: {} };
}

export default async function Page({ params }: PageProps<"/[lang]/not-found-page">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <NotFoundPage lang={lang} />;
}
