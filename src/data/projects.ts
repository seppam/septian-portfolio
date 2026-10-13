// All project content lives here. Add a project = add one object.
// Cards, case-study pages, sitemap and the link checker all read this file.
// Text fields are { en, id }.
//
// Live badge rule: only tier 1 projects can show "Live", and only when links.live is
// set AND the build-time link checker (scripts/check-links.mjs) saw HTTP 200 for it.
// Only URSSET and GameForge AI are shown as live. Tier 3 links are plain "Open demo".

import type { Loc } from "./i18n";

export type Badge = "solo" | "team" | "participant" | "prototype" | "notlive" | "pm";

export type ProjectImage = {
  src: string;
  alt: Loc<string>;
  kind: "desktop" | "mobile";
  width: number;
  height: number;
  caption?: Loc<string>;
};

export type Clip = {
  src: string; // mp4, silent, H.264
  poster: string; // webp
  width: number;
  height: number;
  label: Loc<string>; // accessible name of the play button and video
};

export type Project = {
  slug: string;
  tier: 1 | 2 | 3;
  order: number;
  title: string;
  meta: Loc<string>;
  oneLiner: Loc<string>;
  bullets?: Loc<[string, string, string]>; // tier 1 only
  stack: string[];
  badges: Badge[];
  teamLabel?: Loc<string>;
  links: {
    live?: string;
    repos?: { label: Loc<string>; url: string }[];
    repoNote?: Loc<string>;
    videos?: { label: Loc<string>; url: string }[];
    readme?: string;
  };
  /** Screenshots. Empty/absent: the card shows its drawn diagram (if any) or no visual. */
  images?: ProjectImage[];
  /** Optional short silent clip; loads only when the visitor presses play. Needs an image as the first desktop shot. */
  clip?: Clip;
  visual?: "pipeline" | "contracts";
  caseStudy?: boolean;
};

const gh = (path: string) => `https://github.com/${path}`;
const REPO: Loc<string> = { en: "Repo", id: "Repo" };

export const projects: Project[] = [
  {
    slug: "ursset",
    tier: 1,
    order: 1,
    title: "URSSET",
    meta: { en: "Hackathon · Solo · Oct 2026", id: "Hackathon · Solo · Okt 2026" },
    oneLiner: {
      en: "Buy a share of a rental property, receive rent, and resell, with ownership and payouts verifiable onchain.",
      id: "Beli bagian dari properti sewa, terima hasil sewanya, dan jual kembali, dengan kepemilikan dan pembayaran yang bisa diverifikasi onchain.",
    },
    bullets: {
      en: [
        "Solo build for Ethereum Jakarta Hackathon 2026 (participant): Next.js app with Privy embedded wallets, so users never handle a seed phrase.",
        "7 Solidity contract types covered by 45 Foundry tests; KYC allow-list enforced inside the token contract.",
        "Pro-rata rent splits and non-custodial resale; bilingual ID/EN interface.",
      ],
      id: [
        "Dibangun sendirian untuk Ethereum Jakarta Hackathon 2026 (peserta): aplikasi Next.js dengan wallet tertanam Privy, sehingga pengguna tidak perlu mengurus seed phrase.",
        "7 jenis kontrak Solidity dicakup 45 tes Foundry; allow-list KYC ditegakkan di dalam kontrak token.",
        "Pembagian sewa pro-rata dan jual kembali non-custodial; antarmuka dwibahasa ID/EN.",
      ],
    },
    stack: ["Next.js", "Privy", "Solidity", "Foundry", "Robinhood Chain"],
    badges: ["solo", "participant"],
    links: {
      live: "https://ursset.vercel.app",
      repos: [{ label: REPO, url: gh("seppam/ursset") }],
      videos: [
        { label: { en: "Pitch video", id: "Video pitch" }, url: "https://youtu.be/jGRaYYAL9Hg" },
        { label: { en: "Demo video", id: "Video demo" }, url: "https://youtu.be/lO4ZWxfpNtI" },
      ],
    },
    images: [
      {
        src: "/work/ursset/desktop-property-id.webp",
        alt: {
          en: "URSSET property page in Indonesian: Kos Dago Asri Bandung with unit price, occupancy and sign-in panel",
          id: "Halaman properti URSSET dalam bahasa Indonesia: Kos Dago Asri Bandung dengan harga unit, okupansi, dan panel masuk",
        },
        kind: "desktop",
        width: 1440,
        height: 900,
        caption: {
          en: "Property page on desktop (Indonesian default). Testnet demo, illustrative data.",
          id: "Halaman properti di desktop (bawaan bahasa Indonesia). Demo testnet, data ilustrasi.",
        },
      },
      {
        src: "/work/ursset/mobile-home-id.webp",
        alt: {
          en: "URSSET home screen on a phone in Indonesian: the headline '3 langkah, kamu punya aset' and the three-step guide",
          id: "Layar beranda URSSET di ponsel dalam bahasa Indonesia: judul '3 langkah, kamu punya aset' dan panduan tiga langkah",
        },
        kind: "mobile",
        width: 780,
        height: 1688,
        caption: {
          en: "Home on mobile, Indonesian. The product is mobile-first.",
          id: "Beranda di mobile, bahasa Indonesia. Produknya mobile-first.",
        },
      },
      {
        src: "/work/ursset/mobile-home-en.webp",
        alt: {
          en: "URSSET home screen on a phone in English: '3 steps, you own an asset'",
          id: "Layar beranda URSSET di ponsel dalam bahasa Inggris: '3 steps, you own an asset'",
        },
        kind: "mobile",
        width: 780,
        height: 1688,
        caption: {
          en: "Same screen in English, from the ID | EN switch.",
          id: "Layar yang sama dalam bahasa Inggris, dari pengalih ID | EN.",
        },
      },
      {
        src: "/work/ursset/desktop-home-en.webp",
        alt: {
          en: "URSSET home page on desktop in English with the three-step How it works row",
          id: "Beranda URSSET di desktop dalam bahasa Inggris dengan baris tiga langkah How it works",
        },
        kind: "desktop",
        width: 1440,
        height: 650,
        caption: { en: "Home on desktop, English.", id: "Beranda di desktop, bahasa Inggris." },
      },
      {
        src: "/work/ursset/mobile-property-en.webp",
        alt: {
          en: "URSSET property page on a phone in English with units sold and the start button",
          id: "Halaman properti URSSET di ponsel dalam bahasa Inggris dengan unit terjual dan tombol mulai",
        },
        kind: "mobile",
        width: 780,
        height: 1688,
        caption: {
          en: "Property page on mobile, English: units sold, verified-onchain badge, price per unit.",
          id: "Halaman properti di mobile, bahasa Inggris: unit terjual, lencana terverifikasi onchain, harga per unit.",
        },
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
    meta: { en: "Team of 4 · Remote · Sep 2026", id: "Tim berempat · Remote · Sep 2026" },
    oneLiner: {
      en: "Describe a game in plain English; a multi-agent pipeline generates a playable one in the browser.",
      id: "Deskripsikan game dalam bahasa Inggris biasa; pipeline multi-agent menghasilkan game yang bisa dimainkan di browser.",
    },
    bullets: {
      en: [
        "My part: backend and AI orchestration. I helped build the agents (spec, asset-mapper, coder, debug) that generate the game.",
        "Multi-provider LLM fallback so a failing model does not stop a generation; Kenney asset pipeline.",
        "MAXY Academy Project Sprint for KADA alumni, 7 to 18 Sep 2026. 25 of the 61 commits in the team repository are mine.",
      ],
      id: [
        "Bagian saya: backend dan orkestrasi AI. Saya ikut membangun agen-agen (spec, asset-mapper, coder, debug) yang menghasilkan game.",
        "Fallback LLM multi-provider agar satu model yang gagal tidak menghentikan proses generate; pipeline aset Kenney.",
        "MAXY Academy Project Sprint untuk alumni KADA, 7 sampai 18 Sep 2026. 25 dari 61 commit di repositori tim adalah milik saya.",
      ],
    },
    stack: ["Next.js", "Supabase", "Phaser", "Playwright", "Claude / OpenAI / Gemini / Groq"],
    badges: ["team"],
    teamLabel: { en: "Team of 4", id: "Tim berempat" },
    links: {
      live: "https://game-forge-rho.vercel.app",
      repos: [{ label: { en: "Repo (teammate's repository)", id: "Repo (repositori rekan tim)" }, url: gh("devinfebrian/GameForge") }],
      repoNote: {
        en: "Code lives in a teammate's repository. The product is still being improved.",
        id: "Kodenya ada di repositori rekan tim. Produknya masih terus disempurnakan.",
      },
    },
    // Frames cropped from the owner's screen recordings of the team app running locally (browser chrome,
    // desktop and every sensitive screen excluded). Derived assets only; originals are never in the repo.
    images: [
      {
        src: "/work/gameforge/game-breaker.webp",
        alt: {
          en: "GameForge Studio showing a generated brick-breaker game running in the preview, with the agent chat on the left",
          id: "GameForge Studio menampilkan game brick-breaker hasil generate yang berjalan di pratinjau, dengan chat agen di sebelah kiri",
        },
        kind: "desktop",
        width: 1440,
        height: 738,
        caption: {
          en: "A generated brick-breaker running in the Studio preview. Captured from a local build of the team app.",
          id: "Game brick-breaker hasil generate yang berjalan di pratinjau Studio. Diambil dari build lokal aplikasi tim.",
        },
      },
      {
        src: "/work/gameforge/studio-start.webp",
        alt: {
          en: "GameForge Studio start screen with four starter ideas and a prompt box",
          id: "Layar awal GameForge Studio dengan empat ide pemula dan kotak prompt",
        },
        kind: "desktop",
        width: 1440,
        height: 738,
        caption: { en: "Studio start screen: describe a game or pick a starter idea.", id: "Layar awal Studio: deskripsikan game atau pilih ide pemula." },
      },
      {
        src: "/work/gameforge/agent-plan.webp",
        alt: {
          en: "Generation plan in progress: spec step done, asset mapping and coder steps running, with the synthesized game architecture shown",
          id: "Rencana generate yang sedang berjalan: langkah spec selesai, pemetaan aset dan langkah coder berjalan, dengan arsitektur game hasil sintesis",
        },
        kind: "desktop",
        width: 1440,
        height: 738,
        caption: { en: "The agent pipeline at work: spec, assets, coder.", id: "Pipeline agen saat bekerja: spec, aset, coder." },
      },
      {
        src: "/work/gameforge/game-runner.webp",
        alt: {
          en: "A generated endless-runner game in the preview with score, lives and distance, next to the agent chat",
          id: "Game endless-runner hasil generate di pratinjau dengan skor, nyawa, dan jarak, di samping chat agen",
        },
        kind: "desktop",
        width: 1440,
        height: 738,
        caption: { en: "A second generated game: an endless runner.", id: "Game kedua hasil generate: endless runner." },
      },
      {
        src: "/work/gameforge/landing.webp",
        alt: {
          en: "GameForge landing page: 'Turn any idea into a playable game in seconds' with a three-step how-it-works section",
          id: "Halaman depan GameForge: 'Turn any idea into a playable game in seconds' dengan bagian tiga langkah cara kerja",
        },
        kind: "desktop",
        width: 1440,
        height: 738,
        caption: { en: "Landing page of the product.", id: "Halaman depan produk." },
      },
    ],
    clip: {
      src: "/work/gameforge/demo.mp4",
      poster: "/work/gameforge/demo-poster.webp",
      width: 1280,
      height: 656,
      label: {
        en: "Silent 9-second clip of a generated brick-breaker game being played",
        id: "Klip 9 detik tanpa suara dari game brick-breaker hasil generate yang dimainkan",
      },
    },
    visual: "pipeline",
    caseStudy: true,
  },
  {
    slug: "sectors-ai-advisor",
    tier: 1,
    order: 3,
    title: "Sectors AI Advisor",
    meta: { en: "Hackathon · Solo · Oct 2026", id: "Hackathon · Solo · Okt 2026" },
    oneLiner: {
      en: "An assistant that explains Indonesian stock market data in plain Indonesian, with a source on every answer.",
      id: "Asisten yang menjelaskan data pasar saham Indonesia dalam bahasa Indonesia yang sederhana, dengan sumber di setiap jawaban.",
    },
    bullets: {
      en: [
        "Sectors Hackathon 2026, Track 1 (participant). A solo project, submitted under the team name cobacobaberhadiah.",
        "Guardrail refuses trade and price-prediction requests before any API or LLM call.",
        "Swappable LLM provider; 10 scenarios tested on live data.",
      ],
      id: [
        "Sectors Hackathon 2026, Track 1 (peserta). Proyek solo, didaftarkan dengan nama tim cobacobaberhadiah.",
        "Guardrail menolak permintaan transaksi dan prediksi harga sebelum memanggil API atau LLM mana pun.",
        "Provider LLM bisa diganti; 10 skenario diuji dengan data live.",
      ],
    },
    stack: ["Next.js", "Sectors API v2", "LLM provider swap"],
    badges: ["solo", "participant", "notlive"],
    links: {
      repos: [{ label: REPO, url: gh("seppam/sectors-ai-advisor") }],
      videos: [
        { label: { en: "Teaser (1 min)", id: "Teaser (1 mnt)" }, url: "https://youtu.be/K4uEjemUpfo" },
        { label: { en: "Demo and walkthrough (3 min)", id: "Demo dan penjelasan teknis (3 mnt)" }, url: "https://youtu.be/bpj0dAYByU0" },
      ],
      repoNote: {
        en: "Demo not hosted: running it needs a Sectors API key with quota. Watch the videos or run it locally from the repo.",
        id: "Demo tidak di-host: untuk menjalankannya dibutuhkan API key Sectors dengan kuota. Tonton videonya atau jalankan secara lokal dari repo.",
      },
    },
  },
  {
    slug: "verihire",
    tier: 1,
    order: 4,
    title: "VeriHire",
    meta: { en: "KADA Phase 3 · Team of 5 · Feb to Apr 2026", id: "KADA Phase 3 · Tim berlima · Feb sampai Apr 2026" },
    oneLiner: {
      en: "A platform that analyses a CV and flags likely job scams.",
      id: "Platform yang menganalisis CV dan menandai lowongan yang kemungkinan penipuan.",
    },
    bullets: {
      en: [
        "PM and Lead Developer of a 5-person team in the 250-hour KADA Phase 3 (Batch 3).",
        "React and Redux Toolkit frontend, Node.js and MongoDB backend, AI API integration, Docker.",
        "Led planning and development as PM and Lead Developer, from scope to the final build.",
      ],
      id: [
        "PM dan Lead Developer tim beranggota 5 orang di KADA Phase 3 (Batch 3) sepanjang 250 jam.",
        "Frontend React dan Redux Toolkit, backend Node.js dan MongoDB, integrasi API AI, Docker.",
        "Memimpin perencanaan dan pengembangan sebagai PM dan Lead Developer, dari penentuan lingkup sampai build akhir.",
      ],
    },
    stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Docker"],
    badges: ["team", "pm"],
    teamLabel: { en: "Team of 5", id: "Tim berlima" },
    links: {
      repos: [
        { label: { en: "Backend", id: "Backend" }, url: gh("seppam/verihire-backend") },
        { label: { en: "Frontend", id: "Frontend" }, url: gh("timurboys112/verihire-capstone") },
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
    meta: { en: "Portfolio case study", id: "Studi kasus portofolio" },
    oneLiner: {
      en: "Warehouse management system for a distribution center: receiving, put-away, inventory, picking, packing and shipping, with role-based access and a Swagger-documented API. Fictional demo data.",
      id: "Sistem manajemen gudang untuk pusat distribusi: penerimaan, put-away, inventori, picking, packing, dan pengiriman, dengan akses berbasis peran dan API yang didokumentasikan lewat Swagger. Data demo fiktif.",
    },
    stack: [".NET 9", "React", "PostgreSQL"],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/wms-distribution-center") }], readme: gh("seppam/wms-distribution-center#readme") },
  },
  {
    slug: "b2b-order-management",
    tier: 2,
    order: 2,
    title: "B2B Order Management",
    meta: { en: "Backend API", id: "API backend" },
    oneLiner: {
      en: "Spring Boot REST service for business-to-business purchase workflows: JWT authentication, wallet-based micro-payments and transactional orders.",
      id: "Layanan REST Spring Boot untuk alur pembelian business-to-business: autentikasi JWT, pembayaran mikro berbasis wallet, dan pesanan transaksional.",
    },
    stack: ["Spring Boot", "JWT", "CI"],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/b2b-order-management") }], readme: gh("seppam/b2b-order-management#readme") },
  },
  {
    slug: "clipgen",
    tier: 2,
    order: 3,
    title: "ClipGen",
    meta: { en: "Local-first tool", id: "Alat local-first" },
    oneLiner: {
      en: "Local-first video clipper: upload a long video, detect highlight moments with FFmpeg, and export short-form clips. No cloud AI or API keys.",
      id: "Pemotong video local-first: unggah video panjang, deteksi momen penting dengan FFmpeg, lalu ekspor klip pendek. Tanpa AI cloud maupun API key.",
    },
    stack: ["Node", "Express", "React", "FFmpeg"],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/clipgen") }], readme: gh("seppam/clipgen#readme") },
  },
  {
    slug: "medialert-network",
    tier: 2,
    order: 4,
    title: "MediAlert Network",
    meta: { en: "Hackathon demo", id: "Demo hackathon" },
    oneLiner: {
      en: "Real-time hospital capacity dashboard and specialist-aware ambulance routing demo. Fictional data; not a medical device and no medical advice.",
      id: "Dasbor kapasitas rumah sakit real-time dan demo rute ambulans yang memperhitungkan spesialis. Data fiktif; bukan alat medis dan bukan nasihat medis.",
    },
    stack: ["TypeScript", "Next.js", "Socket.io"],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/medialert-network") }], readme: gh("seppam/medialert-network#readme") },
  },
  {
    slug: "legalkilat",
    tier: 2,
    order: 5,
    title: "LegalKilat",
    meta: { en: "Hackathon prototype (participant)", id: "Prototipe hackathon (peserta)" },
    oneLiner: {
      en: "Compliance assistant (in Indonesian) for SMEs applying for KUR credit and exporting: calculator, proposal check and retrieval-augmented Q&A. A prototype, not legal or financial advice.",
      id: "Asisten kepatuhan (dalam bahasa Indonesia) untuk UMKM yang mengajukan kredit KUR dan mengekspor: kalkulator, pemeriksaan proposal, dan tanya jawab berbasis retrieval. Prototipe, bukan nasihat hukum atau keuangan.",
    },
    stack: ["Express", "RAG", "Guardrails"],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/LegalKilat") }], readme: gh("seppam/LegalKilat#readme") },
  },

  // Tier 3: one line each, collapsed. Not shown as Live, even when the link works.
  {
    slug: "stellarnest",
    tier: 3,
    order: 1,
    title: "StellarNest",
    meta: {
      en: "Prototype, not submitted · APAC Stellar Hackathon, Jul 2026",
      id: "Prototipe, tidak dikirim · APAC Stellar Hackathon, Jul 2026",
    },
    oneLiner: {
      en: "Cross-border payments prototype on Stellar testnet (React 19, Firebase).",
      id: "Prototipe pembayaran lintas negara di Stellar testnet (React 19, Firebase).",
    },
    stack: [],
    badges: ["prototype"],
    links: { repos: [{ label: REPO, url: gh("seppam/stellarnest") }] },
  },
  {
    slug: "executive-ledger",
    tier: 3,
    order: 2,
    title: "Executive Ledger",
    meta: { en: "Expense tracker", id: "Pencatat pengeluaran" },
    oneLiner: {
      en: "Personal expense tracker with AI spending insights and PDF/CSV reports.",
      id: "Pencatat pengeluaran pribadi dengan wawasan belanja berbasis AI dan laporan PDF/CSV.",
    },
    stack: [],
    badges: [],
    links: { live: "https://seppam.github.io/executive-ledger/", repos: [{ label: REPO, url: gh("seppam/executive-ledger") }] },
  },
  {
    slug: "motocare-astrapay",
    tier: 3,
    order: 3,
    title: "MotoCare AstraPay",
    meta: { en: "AstraPay Hackathon prototype", id: "Prototipe AstraPay Hackathon" },
    oneLiner: {
      en: "Motorcycle service booking app with AstraPay QRIS payment flow.",
      id: "Aplikasi pemesanan servis motor dengan alur pembayaran QRIS AstraPay.",
    },
    stack: [],
    badges: [],
    links: { live: "https://seppam.github.io/motocare-astrapay/", repos: [{ label: REPO, url: gh("seppam/motocare-astrapay") }] },
  },
  {
    slug: "pos-astrapay",
    tier: 3,
    order: 4,
    title: "POS AstraPay (Mitra Pintar)",
    meta: { en: "AstraPay Hackathon prototype", id: "Prototipe AstraPay Hackathon" },
    oneLiner: {
      en: "Mobile and web point-of-sale for small merchants, built against the AstraPay sandbox.",
      id: "Point-of-sale mobile dan web untuk pedagang kecil, dibangun dengan sandbox AstraPay.",
    },
    stack: [],
    badges: [],
    links: { live: "https://pos-astrapay.vercel.app", repos: [{ label: REPO, url: gh("seppam/pos-astrapay") }] },
  },
  {
    slug: "job-personal-assistant",
    tier: 3,
    order: 5,
    title: "Job Personal Assistant",
    meta: { en: "Built on VeriHire", id: "Dibangun di atas VeriHire" },
    oneLiner: {
      en: "AI assistant for job seekers: CV analysis and job-posting fraud checks.",
      id: "Asisten AI untuk pencari kerja: analisis CV dan pemeriksaan penipuan lowongan.",
    },
    stack: [],
    badges: [],
    links: { live: "https://job-personal-assistant.vercel.app", repos: [{ label: REPO, url: gh("seppam/job-personal-assistant") }] },
  },
  {
    slug: "job-automation-studio",
    tier: 3,
    order: 6,
    title: "Job Automation Studio",
    meta: { en: "No-code generator", id: "Generator tanpa kode" },
    oneLiner: {
      en: "Generates personalised job-application automation scripts from three questions.",
      id: "Membuat skrip otomasi lamaran kerja yang dipersonalisasi dari tiga pertanyaan.",
    },
    stack: [],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/job-automation-studio") }] },
  },
  {
    slug: "bisa-fit",
    tier: 3,
    order: 7,
    title: "BisaFit.AI",
    meta: { en: "Fitness and nutrition assistant", id: "Asisten kebugaran dan nutrisi" },
    oneLiner: {
      en: "Fitness, localised nutrition and shift-work circadian planning assistant.",
      id: "Asisten kebugaran, nutrisi lokal, dan perencanaan sirkadian untuk pekerja shift.",
    },
    stack: [],
    badges: [],
    links: { repos: [{ label: REPO, url: gh("seppam/bisa-fit") }] },
  },
];

export const byTier = (t: 1 | 2 | 3) =>
  projects.filter((p) => p.tier === t).sort((a, b) => a.order - b.order);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const caseStudyProjects = () => projects.filter((p) => p.caseStudy);
