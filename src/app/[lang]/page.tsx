import { notFound } from "next/navigation";
import { HomePage } from "@/components/Pages";
import { isLang } from "@/data/i18n";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <HomePage lang={lang} />;
}
