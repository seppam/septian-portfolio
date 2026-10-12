// Single source for the public site URL. Change it here (or set NEXT_PUBLIC_SITE_URL)
// once a custom domain exists. Until then the default Vercel name is used.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://septian-pamungkas.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Muhamad Septian Pamungkas";
export const SITE_TITLE =
  "Muhamad Septian Pamungkas | Full-Stack Developer and Systems Analyst";
export const SITE_DESCRIPTION =
  "Full-stack developer and systems analyst building AI products. 3 years in enterprise IT, 2026 projects: URSSET, GameForge AI, VeriHire. Remote or hybrid.";
