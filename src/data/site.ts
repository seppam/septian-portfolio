// Single source for the public site URL. Change it here (or set NEXT_PUBLIC_SITE_URL)
// when a custom domain exists.
import type { Lang, Loc } from "./i18n";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://septian-pamungkas.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Muhamad Septian Pamungkas";

export const SITE_TITLE: Loc<string> = {
  en: "Muhamad Septian Pamungkas | Full-Stack Developer and Systems Analyst",
  id: "Muhamad Septian Pamungkas | Full-Stack Developer dan Systems Analyst",
};
export const SITE_DESCRIPTION: Loc<string> = {
  en: "Full-stack developer and systems analyst building AI products. 3 years in enterprise IT, 2026 projects: URSSET, GameForge AI, VeriHire. Open to hybrid and remote roles.",
  id: "Full-stack developer dan systems analyst yang membangun produk AI. 3 tahun di IT enterprise, proyek 2026: URSSET, GameForge AI, VeriHire. Terbuka untuk peran hybrid dan remote.",
};
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", id: "id_ID" };
