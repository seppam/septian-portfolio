// Language plumbing. English lives at `/`, Indonesian at `/id`.
// Every user-visible string lives in src/data as { en, id } (a `Loc`), or in `ui` below.

export const LANGS = ["en", "id"] as const;
export type Lang = (typeof LANGS)[number];
export type Loc<T> = { en: T; id: T };

export const isLang = (v: string): v is Lang => (LANGS as readonly string[]).includes(v);
export const other = (l: Lang): Lang => (l === "en" ? "id" : "en");

/** Prefix an internal path for a language: "/" -> "/id", "/#work" -> "/id#work", "/work/x" -> "/id/work/x". */
export function langHref(lang: Lang, path: string): string {
  if (lang === "en") return path;
  if (path === "/") return "/id";
  if (path.startsWith("/#")) return `/id${path.slice(1)}`;
  return `/id${path}`;
}

export const ui = {
  skip: { en: "Skip to content", id: "Langsung ke konten" },
  nav: {
    work: { en: "Work", id: "Karya" },
    engineering: { en: "Engineering", id: "Engineering" },
    about: { en: "About", id: "Tentang" },
    credentials: { en: "Credentials", id: "Kredensial" },
    contact: { en: "Contact", id: "Kontak" },
    hire: { en: "Hire me", id: "Hubungi saya" },
    primary: { en: "Primary", id: "Navigasi utama" },
    mobile: { en: "Mobile", id: "Navigasi mobile" },
    openMenu: { en: "Open menu", id: "Buka menu" },
    closeMenu: { en: "Close menu", id: "Tutup menu" },
    home: { en: "Muhamad Septian Pamungkas, home", id: "Muhamad Septian Pamungkas, beranda" },
    language: { en: "Language", id: "Bahasa" },
  },
  newTab: { en: "opens in a new tab", id: "terbuka di tab baru" },
  hero: {
    viewWork: { en: "View work", id: "Lihat karya" },
    email: { en: "Email", id: "Email" },
    photoAlt: {
      en: "Muhamad Septian Pamungkas, smiling, in a batik shirt with a laptop on his shoulder",
      id: "Muhamad Septian Pamungkas tersenyum, mengenakan kemeja batik dengan laptop di bahunya",
    },
    caption: { en: "Karawang, 2026", id: "Karawang, 2026" },
    glance: { en: "At a glance", id: "Sekilas" },
  },
  sections: {
    workEyebrow: { en: "WORK", id: "KARYA" },
    workTitle: { en: "Selected work", id: "Karya pilihan" },
    workIntro: {
      en: "Four 2026 products. Two are live today. Each shows my part.",
      id: "Empat produk 2026. Dua di antaranya sudah live. Masing-masing menunjukkan bagian yang saya kerjakan.",
    },
    engEyebrow: { en: "ENGINEERING", id: "ENGINEERING" },
    engTitle: { en: "More engineering", id: "Engineering lainnya" },
    engNote: { en: "Each repo has a README and tests.", id: "Setiap repo punya README dan tes." },
    earlier: { en: "Earlier experiments", id: "Eksperimen sebelumnya" },
    stack: { en: "Stack", id: "Stack" },
    apEyebrow: { en: "APPROACH", id: "PENDEKATAN" },
    apTitle: { en: "What I do", id: "Yang saya kerjakan" },
    abEyebrow: { en: "ABOUT", id: "TENTANG" },
    abTitle: { en: "About", id: "Tentang" },
    crEyebrow: { en: "CREDENTIALS", id: "KREDENSIAL" },
    crTitle: { en: "Credentials", id: "Kredensial" },
    tlEyebrow: { en: "TIMELINE", id: "RIWAYAT" },
    tlTitle: { en: "Timeline", id: "Riwayat" },
    coEyebrow: { en: "CONTACT", id: "KONTAK" },
    coTitle: { en: "Let's talk.", id: "Mari berbincang." },
  },
  buttons: {
    live: { en: "Live demo", id: "Demo live" },
    openDemo: { en: "Open demo", id: "Buka demo" },
    caseStudy: { en: "Case study", id: "Studi kasus" },
    repo: { en: "Repo", id: "Repo" },
    readme: { en: "README", id: "README" },
    verify: { en: "Verify on Credly", id: "Verifikasi di Credly" },
    allCerts: { en: "View all certificates", id: "Lihat semua sertifikat" },
    allCertsNote: { en: "Google Drive folder, opens in a new tab", id: "Folder Google Drive, terbuka di tab baru" },
    allWork: { en: "All work", id: "Semua karya" },
    next: { en: "Next case study", id: "Studi kasus berikutnya" },
    github: { en: "GitHub", id: "GitHub" },
    linkedin: { en: "LinkedIn", id: "LinkedIn" },
    playClip: { en: "Play 9-second clip", id: "Putar klip 9 detik" },
  },
  badge: {
    live: { en: "Live", id: "Live" },
    offline: { en: "Demo offline", id: "Demo offline" },
    solo: { en: "Solo", id: "Solo" },
    team: { en: "Team", id: "Tim" },
    participant: { en: "Hackathon participant", id: "Peserta hackathon" },
    prototype: { en: "Prototype, not submitted", id: "Prototipe, tidak dikirim" },
    notlive: { en: "Demo not hosted", id: "Demo tidak di-host" },
    pm: { en: "PM and Lead", id: "PM dan Lead" },
  },
  cs: {
    facts: { en: "Project facts", id: "Fakta proyek" },
    role: { en: "Role", id: "Peran" },
    team: { en: "Team", id: "Tim" },
    when: { en: "When", id: "Waktu" },
    stack: { en: "Stack", id: "Stack" },
    problem: { en: "The problem", id: "Masalahnya" },
    myRole: { en: "My role", id: "Peran saya" },
    approach: { en: "Approach", id: "Pendekatan" },
    decisions: { en: "Decisions and trade-offs", id: "Keputusan dan trade-off" },
    results: { en: "Results", id: "Hasil" },
    screens: { en: "Screens", id: "Tampilan" },
    learned: { en: "What I learned and what is next", id: "Yang saya pelajari dan langkah berikutnya" },
    pipelineCaption: {
      en: "Pipeline redrawn from the team repository README. Highlighted: the orchestration I worked on.",
      id: "Pipeline digambar ulang dari README repositori tim. Disorot: orkestrasi yang saya kerjakan.",
    },
    contractsCaption: { en: "Architecture redrawn from the repo README.", id: "Arsitektur digambar ulang dari README repo." },
    titleSuffix: { en: "case study", id: "studi kasus" },
    eyebrow: { en: "Case study", id: "Studi kasus" },
  },
  footer: {
    built: { en: "Built with Next.js. Hosted on Vercel.", id: "Dibangun dengan Next.js. Di-host di Vercel." },
  },
  nf: {
    title: { en: "This page does not exist.", id: "Halaman ini tidak ada." },
    text: {
      en: "The link may be old. Try the work section or write to me.",
      id: "Tautannya mungkin sudah tidak berlaku. Coba bagian karya atau kirim pesan kepada saya.",
    },
    back: { en: "Back to home", id: "Kembali ke beranda" },
    email: { en: "Email me", id: "Kirim email" },
    metaTitle: { en: "Page not found", id: "Halaman tidak ditemukan" },
  },
  clip: {
    caption: {
      en: "Short silent clip of a generated game running. Loads only when you press play.",
      id: "Klip singkat tanpa suara dari game hasil generate yang sedang berjalan. Baru dimuat saat Anda menekan putar.",
    },
  },
} as const;

export const t = <T,>(v: Loc<T>, lang: Lang): T => v[lang];
