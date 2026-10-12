// All project content lives here. Add a project = add one object.
// Cards, case-study pages, sitemap and the link checker all read this file.
//
// Live badge rule: a project only shows "Live" when links.live is set AND the
// build-time link checker (scripts/check-links.mjs) saw HTTP 200 for it.

export type Badge = "solo" | "team" | "participant" | "prototype" | "notlive" | "pm";

export type ProjectImage = {
  src: string;
  alt: string;
  kind: "desktop" | "mobile";
  width: number;
  height: number;
  caption?: string;
};

export type Project = {
  slug: string;
  tier: 1 | 2 | 3;
  order: number;
  title: string;
  meta: string;
  oneLiner: string;
  bullets?: [string, string, string]; // tier 1 only
  stack: string[];
  badges: Badge[];
  teamLabel?: string; // e.g. "Team of 4"
  links: {
    live?: string;
    repos?: { label: string; url: string }[];
    repoNote?: string;
    videos?: { label: string; url: string }[];
    readme?: string;
  };
  /** Screenshots. Empty/absent: the card shows its drawn diagram (if any) or no visual. */
  images?: ProjectImage[];
  visual?: "pipeline" | "contracts";
  caseStudy?: boolean;
};

const gh = (path: string) => `https://github.com/${path}`;

export const projects: Project[] = [
  {
    slug: "ursset",
    tier: 1,
    order: 1,
    title: "URSSET",
    meta: "Hackathon · Solo · Oct 2026",
    oneLiner:
      "Buy a share of a rental property, receive rent, and resell, with ownership and payouts verifiable onchain.",
    bullets: [
      "Solo build for Ethereum Jakarta Hackathon 2026 (participant): Next.js app with Privy embedded wallets, so users never handle a seed phrase.",
      "7 Solidity contract types covered by 45 Foundry tests; KYC allow-list enforced inside the token contract.",
      "Pro-rata rent splits and non-custodial resale; bilingual ID/EN interface.",
    ],
    stack: ["Next.js", "Privy", "Solidity", "Foundry", "Robinhood Chain"],
    badges: ["solo", "participant"],
    links: {
      live: "https://ursset.vercel.app",
      repos: [{ label: "Repo", url: gh("seppam/ursset") }],
      videos: [
        { label: "Pitch video", url: "https://youtu.be/jGRaYYAL9Hg" },
        { label: "Demo video", url: "https://youtu.be/lO4ZWxfpNtI" },
      ],
    },
    images: [
      {
        src: "/work/ursset/desktop-property-id.webp",
        alt: "URSSET property page in Indonesian: Kos Dago Asri Bandung with unit price, occupancy and sign-in panel",
        kind: "desktop",
        width: 1440,
        height: 900,
        caption: "Property page on desktop (Indonesian default). Testnet demo, illustrative data.",
      },
      {
        src: "/work/ursset/mobile-home-id.webp",
        alt: "URSSET home screen on a phone in Indonesian: the headline '3 langkah, kamu punya aset' and the three-step guide",
        kind: "mobile",
        width: 780,
        height: 1688,
        caption: "Home on mobile, Indonesian. The product is mobile-first.",
      },
      {
        src: "/work/ursset/mobile-home-en.webp",
        alt: "URSSET home screen on a phone in English: '3 steps, you own an asset'",
        kind: "mobile",
        width: 780,
        height: 1688,
        caption: "Same screen in English, from the ID | EN switch.",
      },
      {
        src: "/work/ursset/desktop-home-en.webp",
        alt: "URSSET home page on desktop in English with the three-step How it works row",
        kind: "desktop",
        width: 1440,
        height: 650,
        caption: "Home on desktop, English.",
      },
      {
        src: "/work/ursset/mobile-property-en.webp",
        alt: "URSSET property page on a phone in English with units sold and the start button",
        kind: "mobile",
        width: 780,
        height: 1688,
        caption: "Property page on mobile, English: units sold, verified-onchain badge, price per unit.",
      },
    ],
    visual: "contracts",
    caseStudy: true,
  },
  {
    slug: "gameforge",
    tier: 1,
    order: 2,
    title: "GameForge AI",
    meta: "Team of 4 · Remote · Sep 2026",
    oneLiner:
      "Describe a game in plain English; a multi-agent pipeline generates a playable one in the browser.",
    bullets: [
      "My part: backend and AI orchestration (spec, asset-mapper, coder and debug agents).",
      "Multi-provider LLM fallback so a failing model does not stop a generation; Kenney asset pipeline.",
      "MAXY Academy Project Sprint for KADA alumni, 7 to 18 Sep 2026. 25 of the 61 commits in the team repository are mine.",
    ],
    stack: ["Next.js", "Supabase", "Phaser", "Playwright", "Claude / OpenAI / Gemini / Groq"],
    badges: ["team"],
    teamLabel: "Team of 4",
    links: {
      live: "https://game-forge-rho.vercel.app",
      repos: [{ label: "Repo (teammate's repository)", url: gh("devinfebrian/GameForge") }],
      repoNote: "Code lives in a teammate's repository.",
    },
    // To add screenshots, append objects here, for example:
    // { src: "/work/gameforge/editor.webp", alt: "...", kind: "desktop", width: 1440, height: 900, caption: "..." }
    images: [],
    visual: "pipeline",
    caseStudy: true,
  },
  {
    slug: "sectors-ai-advisor",
    tier: 1,
    order: 3,
    title: "Sectors AI Advisor",
    meta: "Hackathon · Oct 2026",
    oneLiner:
      "An assistant that explains Indonesian stock market data in plain Indonesian, with a source on every answer.",
    bullets: [
      "Sectors Hackathon 2026, Track 1 (participant), under team cobacobaberhadiah.",
      "Guardrail refuses trade and price-prediction requests before any API or LLM call.",
      "Swappable LLM provider; 10 scenarios tested on live data.",
    ],
    stack: ["Next.js", "Sectors API v2", "LLM provider swap"],
    badges: ["participant", "notlive"],
    links: { repos: [{ label: "Repo", url: gh("seppam/sectors-ai-advisor") }] },
  },
  {
    slug: "verihire",
    tier: 1,
    order: 4,
    title: "VeriHire",
    meta: "KADA Phase 3 · Team of 5 · Feb to Apr 2026",
    oneLiner: "A platform that analyses a CV and flags likely job scams.",
    bullets: [
      "PM and Lead Developer of a 5-person team in the 250-hour KADA Phase 3 (Batch 3).",
      "React and Redux Toolkit frontend, Node.js and MongoDB backend, AI API integration, Docker.",
      "Led planning and development as PM and Lead Developer, from scope to the final build.",
    ],
    stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Docker"],
    badges: ["team", "pm"],
    teamLabel: "Team of 5",
    links: {
      repos: [
        { label: "Backend", url: gh("seppam/verihire-backend") },
        { label: "Frontend", url: gh("timurboys112/verihire-capstone") },
      ],
    },
    caseStudy: true,
  },

  // Tier 2: first sentence of each repo README, claims limited to what it says.
  {
    slug: "wms-distribution-center",
    tier: 2,
    order: 1,
    title: "WMS Distribution Center",
    meta: "Portfolio case study",
    oneLiner:
      "Warehouse management system for a distribution center: receiving, put-away, inventory, picking, packing and shipping, with role-based access and a Swagger-documented API. Fictional demo data.",
    stack: [".NET 9", "React", "PostgreSQL"],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/wms-distribution-center") }], readme: gh("seppam/wms-distribution-center#readme") },
  },
  {
    slug: "b2b-order-management",
    tier: 2,
    order: 2,
    title: "B2B Order Management",
    meta: "Backend API",
    oneLiner:
      "Spring Boot REST service for business-to-business purchase workflows: JWT authentication, wallet-based micro-payments and transactional orders.",
    stack: ["Spring Boot", "JWT", "CI"],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/b2b-order-management") }], readme: gh("seppam/b2b-order-management#readme") },
  },
  {
    slug: "clipgen",
    tier: 2,
    order: 3,
    title: "ClipGen",
    meta: "Local-first tool",
    oneLiner:
      "Local-first video clipper: upload a long video, detect highlight moments with FFmpeg, and export short-form clips. No cloud AI or API keys.",
    stack: ["Node", "Express", "React", "FFmpeg"],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/clipgen") }], readme: gh("seppam/clipgen#readme") },
  },
  {
    slug: "medialert-network",
    tier: 2,
    order: 4,
    title: "MediAlert Network",
    meta: "Hackathon demo",
    oneLiner:
      "Real-time hospital capacity dashboard and specialist-aware ambulance routing demo. Fictional data; not a medical device and no medical advice.",
    stack: ["TypeScript", "Next.js", "Socket.io"],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/medialert-network") }], readme: gh("seppam/medialert-network#readme") },
  },
  {
    slug: "legalkilat",
    tier: 2,
    order: 5,
    title: "LegalKilat",
    meta: "Hackathon prototype (participant)",
    oneLiner:
      "Compliance assistant (in Indonesian) for SMEs applying for KUR credit and exporting: calculator, proposal check and retrieval-augmented Q&A. A prototype, not legal or financial advice.",
    stack: ["Express", "RAG", "Guardrails"],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/LegalKilat") }], readme: gh("seppam/LegalKilat#readme") },
  },

  // Tier 3: one line each, collapsed.
  {
    slug: "stellarnest",
    tier: 3,
    order: 1,
    title: "StellarNest",
    meta: "Prototype, not submitted · APAC Stellar Hackathon, Jul 2026",
    oneLiner: "Cross-border payments prototype on Stellar testnet (React 19, Firebase).",
    stack: [],
    badges: ["prototype"],
    links: { repos: [{ label: "Repo", url: gh("seppam/stellarnest") }] },
  },
  {
    slug: "executive-ledger",
    tier: 3,
    order: 2,
    title: "Executive Ledger",
    meta: "Expense tracker",
    oneLiner: "Personal expense tracker with AI spending insights and PDF/CSV reports.",
    stack: [],
    badges: [],
    links: { live: "https://seppam.github.io/executive-ledger/", repos: [{ label: "Repo", url: gh("seppam/executive-ledger") }] },
  },
  {
    slug: "motocare-astrapay",
    tier: 3,
    order: 3,
    title: "MotoCare AstraPay",
    meta: "AstraPay Hackathon prototype",
    oneLiner: "Motorcycle service booking app with AstraPay QRIS payment flow.",
    stack: [],
    badges: [],
    links: { live: "https://seppam.github.io/motocare-astrapay/", repos: [{ label: "Repo", url: gh("seppam/motocare-astrapay") }] },
  },
  {
    slug: "pos-astrapay",
    tier: 3,
    order: 4,
    title: "POS AstraPay (Mitra Pintar)",
    meta: "AstraPay Hackathon prototype",
    oneLiner: "Mobile and web point-of-sale for small merchants, built against the AstraPay sandbox.",
    stack: [],
    badges: [],
    links: { live: "https://pos-astrapay.vercel.app", repos: [{ label: "Repo", url: gh("seppam/pos-astrapay") }] },
  },
  {
    slug: "job-personal-assistant",
    tier: 3,
    order: 5,
    title: "Job Personal Assistant",
    meta: "Built on VeriHire",
    oneLiner: "AI assistant for job seekers: CV analysis and job-posting fraud checks.",
    stack: [],
    badges: [],
    links: { live: "https://job-personal-assistant.vercel.app", repos: [{ label: "Repo", url: gh("seppam/job-personal-assistant") }] },
  },
  {
    slug: "job-automation-studio",
    tier: 3,
    order: 6,
    title: "Job Automation Studio",
    meta: "No-code generator",
    oneLiner: "Generates personalised job-application automation scripts from three questions.",
    stack: [],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/job-automation-studio") }] },
  },
  {
    slug: "bisa-fit",
    tier: 3,
    order: 7,
    title: "BisaFit.AI",
    meta: "Fitness and nutrition assistant",
    oneLiner: "Fitness, localised nutrition and shift-work circadian planning assistant.",
    stack: [],
    badges: [],
    links: { repos: [{ label: "Repo", url: gh("seppam/bisa-fit") }] },
  },
];

export const byTier = (t: 1 | 2 | 3) =>
  projects.filter((p) => p.tier === t).sort((a, b) => a.order - b.order);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudyProjects = () => projects.filter((p) => p.caseStudy);
