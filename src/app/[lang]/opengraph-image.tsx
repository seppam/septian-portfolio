import { notFound } from "next/navigation";
import { isLang, LANGS } from "@/data/i18n";
import { SITE_URL } from "@/data/site";
import { ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Muhamad Septian Pamungkas";
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return renderOg({
    eyebrow: "Muhamad Septian Pamungkas",
    title: lang === "id" ? "Full-stack developer, systems analyst, pembangun aplikasi AI" : "Full-stack developer, systems analyst, AI application builder",
    footer: SITE_URL.replace(/^https?:\/\//, "") + (lang === "id" ? "/id" : ""),
  });
}
