import RootShell from "@/components/RootShell";
import { isLang, LANGS } from "@/data/i18n";
import { rootMetadata, viewport as vp } from "@/lib/meta";

// English is served at "/" (rewritten to /en in next.config.ts); Indonesian lives at /id.
export const viewport = vp;
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return rootMetadata(isLang(lang) ? lang : "en");
}

export default async function Layout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  // /anything-else matches [lang] too: show the English shell, the page below will 404.
  return <RootShell lang={isLang(lang) ? lang : "en"}>{children}</RootShell>;
}
