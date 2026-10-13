// Long-form case-study text, keyed by project slug, one { en, id } per case study.
// Facts only; every number here comes from the repo READMEs, the CV or 00-MASTER-PLAN.md.
import type { Loc } from "./i18n";

export type CaseStudy = {
  role: string; // facts sidebar
  team: string;
  time: string;
  problem: string[];
  myRole: { did: string[]; others?: string };
  approach: string[];
  decisions: { title: string; text: string }[];
  results: string[];
  learned: string[];
};

export const caseStudies: Record<string, Loc<CaseStudy>> = {
  ursset: {
    en: {
      role: "Solo builder",
      team: "Solo",
      time: "Ethereum Jakarta Hackathon 2026 (participant), Oct 2026",
      problem: [
        "Renting out or co-owning a house is closed to small investors. On fractional platforms money is often locked up and investors have to trust the operator's rent reports. Crypto products add wallets, gas and seed phrases on top.",
        "URSSET tries to hide the blockchain from the user while keeping the facts that matter verifiable onchain.",
      ],
      myRole: {
        did: [
          "Everything: the Solidity contracts, the Foundry test suite, the Next.js app, the API routes, the bilingual ID/EN interface and the deployment.",
          "Sign-in uses Privy embedded wallets (email or Google), so there is no seed phrase and no gas for the user.",
        ],
        others: "Third-party pieces are credited in the repo README: Scaffold-ETH 2, OpenZeppelin, Foundry, Privy.",
      },
      approach: [
        "A Next.js app for investors and a server for the operator talk to contracts on Robinhood Chain Testnet. A factory lists a property in one transaction by deploying and wiring four contracts; three more are shared. That is the 7 contract types in the diagram.",
        "Every rent deposit and its pro-rata split is an onchain event, and each transaction in the UI links to the explorer as proof.",
      ],
      decisions: [
        {
          title: "KYC allow-list inside the token contract",
          text: "Units can only move between wallets verified in the KYCRegistry. A transfer to an unverified wallet is rejected by the contract, not by the app. This is an allow-list, not a claim of regulatory compliance.",
        },
        {
          title: "Non-custodial resale and pro-rata rent",
          text: "Resale happens through a marketplace contract between verified investors at a price the seller sets, and the seller keeps earning rent while listed. Rent is split by units held.",
        },
        {
          title: "What I would change",
          text: "The test token skips the approve step so a purchase is one transaction; a production setup would use a licensed payment provider and normal approvals. A single operator key can verify wallets, mint test Rupiah and deposit rent; production needs real KYC and rent from the SPV's bank account. Rent is split with a snapshot at deposit time, which a buyer could game, and I have no contract-level fix for it yet.",
        },
      ],
      results: [
        "45 Foundry tests, covering the factory, KYC, sale, rent and marketplace, plus property-based invariants.",
        "7 Solidity contract types, deployed to Robinhood Chain Testnet.",
        "Bilingual (Indonesian and English) live demo, with pitch and demo videos.",
        "Scope is honest: a hackathon entry on a test network, with test Rupiah. I took part; I claim no placement.",
      ],
      learned: [
        "Writing the limits down (the repo has a Limits section and a security review that is explicitly not a third-party audit) made the demo easier to defend.",
        "Next: a pilot with one real boarding house, a sandbox application, a licensed payment partner.",
      ],
    },
    id: {
      role: "Builder tunggal",
      team: "Solo",
      time: "Ethereum Jakarta Hackathon 2026 (peserta), Okt 2026",
      problem: [
        "Menyewakan atau memiliki rumah bersama masih tertutup bagi investor kecil. Di platform kepemilikan fraksional, dana sering terkunci dan investor harus percaya pada laporan sewa dari operator. Produk kripto menambah beban lain: wallet, gas, dan seed phrase.",
        "URSSET berusaha menyembunyikan blockchain dari pengguna, sambil tetap membuat hal-hal yang penting bisa diverifikasi onchain.",
      ],
      myRole: {
        did: [
          "Semuanya: kontrak Solidity, rangkaian tes Foundry, aplikasi Next.js, API route, antarmuka dwibahasa ID/EN, dan deployment.",
          "Proses masuk memakai wallet tertanam Privy (email atau Google), jadi pengguna tidak perlu seed phrase dan tidak membayar gas.",
        ],
        others: "Komponen pihak ketiga dicantumkan di README repo: Scaffold-ETH 2, OpenZeppelin, Foundry, Privy.",
      },
      approach: [
        "Aplikasi Next.js untuk investor dan server untuk operator berkomunikasi dengan kontrak di Robinhood Chain Testnet. Sebuah factory mendaftarkan properti dalam satu transaksi dengan men-deploy dan menghubungkan empat kontrak; tiga kontrak lainnya dipakai bersama. Itulah 7 jenis kontrak pada diagram.",
        "Setiap setoran sewa dan pembagian pro ratanya tercatat sebagai event onchain, dan setiap transaksi di antarmuka tertaut ke explorer sebagai buktinya.",
      ],
      decisions: [
        {
          title: "Allow-list KYC di dalam kontrak token",
          text: "Unit hanya bisa berpindah antar wallet yang terverifikasi di KYCRegistry. Transfer ke wallet yang belum terverifikasi ditolak oleh kontrak, bukan oleh aplikasi. Ini allow-list, bukan klaim kepatuhan regulasi.",
        },
        {
          title: "Jual kembali non-custodial dan sewa pro rata",
          text: "Jual kembali berlangsung lewat kontrak marketplace antar investor terverifikasi dengan harga yang ditetapkan penjual, dan penjual tetap menerima sewa selama unitnya terdaftar di marketplace. Sewa dibagi berdasarkan jumlah unit yang dimiliki.",
        },
        {
          title: "Yang akan saya ubah",
          text: "Token uji melewati langkah approve sehingga pembelian cukup satu transaksi; untuk produksi, saya akan memakai penyedia pembayaran berlisensi dan approval yang normal. Satu kunci operator bisa memverifikasi wallet, mencetak Rupiah uji, dan menyetor sewa; produksi membutuhkan KYC sungguhan dan sewa dari rekening bank SPV. Sewa dibagi dengan snapshot saat setoran, yang bisa dimanipulasi pembeli, dan saya belum punya solusi di level kontrak untuk itu.",
        },
      ],
      results: [
        "45 tes Foundry yang mencakup factory, KYC, penjualan, sewa, dan marketplace, ditambah invariant berbasis properti.",
        "7 jenis kontrak Solidity, di-deploy ke Robinhood Chain Testnet.",
        "Demo live dwibahasa (Indonesia dan Inggris), dengan video pitch dan demo.",
        "Lingkupnya apa adanya: karya hackathon di jaringan uji, dengan Rupiah uji. Saya berpartisipasi; saya tidak mengklaim peringkat apa pun.",
      ],
      learned: [
        "Menuliskan batasan secara terbuka (repo punya bagian Limits dan tinjauan keamanan yang secara jelas bukan audit pihak ketiga) membuat demo lebih mudah dipertanggungjawabkan.",
        "Berikutnya: pilot dengan satu kos sungguhan, pengajuan sandbox, dan mitra pembayaran berlisensi.",
      ],
    },
  },
  gameforge: {
    en: {
      role: "Backend and multi-agent AI orchestration",
      team: "Team of 4, remote",
      time: "MAXY Academy Project Sprint for KADA alumni, 7 to 18 Sep 2026",
      problem: [
        "People who are not programmers cannot turn a game idea into something playable. GameForge AI takes a plain-English description and produces a 2D browser game.",
      ],
      myRole: {
        did: [
          "Backend and multi-agent AI orchestration; 25 of 61 commits in a teammate's repository.",
          "Areas I worked on: the spec, asset-mapper, coder and debug agents, the multi-provider LLM fallback, the Kenney asset pipeline, the Supabase schema and generation stability.",
        ],
        others: "My three teammates worked on the rest of the product. The code lives in a teammate's repository (devinfebrian/GameForge), so I link it as the team repo, not mine.",
      },
      approach: [
        "A prompt goes to /api/generate, which streams progress over SSE while a pipeline runs: the spec agent writes a game requirements document, the asset mapper matches entities and sounds to curated CC0 Kenney assets or procedural sound presets, and the coder agent writes a short Phaser 4 scene.",
        "Results are stored in Supabase, previewed in an isolated sandbox and published at a play URL. A debug agent can repair runtime errors. The highlighted boxes in the diagram are the orchestration I worked on.",
      ],
      decisions: [
        {
          title: "Provider fallback across all agents",
          text: "The admin panel can route all four agents through Claude, OpenAI, Gemini or Groq, with automatic failover, so one failing model does not stop a generation.",
        },
        {
          title: "Four agents with narrow jobs",
          text: "Spec, asset mapping, coding and debugging are separate agents. The coder agent writes short Phaser 4 scene code (typically under 200 lines, per the repo README) on top of a pre-injected engine layer instead of writing physics from scratch.",
        },
        {
          title: "What I would change, and what is still in progress",
          text: "GameForge AI still needs improvement. It works end to end and I am happy with what a team of four delivered in two weeks, but I do not consider it finished. The agent orchestration is the part I would keep improving first. I have not listed specific fixes here because I have not scoped them yet and do not want to guess.",
        },
      ],
      results: [
        "Live app: game-forge-rho.vercel.app (sign-up required to generate).",
        "The team repository reports 430+ automated tests for the whole project.",
        "Delivered in a 2-week remote sprint with a team of 4.",
        "The screens below come from a local build of the team app; the short clip is silent and plays only when you press play.",
      ],
      learned: [
        "Working in a teammate's repository on a two-week clock meant agreeing on interfaces first and keeping my changes small and reviewable.",
      ],
    },
    id: {
      role: "Backend dan orkestrasi AI multi-agen",
      team: "Tim berempat, remote",
      time: "Sprint proyek MAXY Academy untuk alumni KADA, 7 sampai 18 Sep 2026",
      problem: [
        "Orang yang bukan programmer sulit mengubah ide game menjadi sesuatu yang bisa dimainkan. GameForge AI menerima deskripsi dalam bahasa Inggris biasa dan menghasilkan game 2D di browser.",
      ],
      myRole: {
        did: [
          "Backend dan orkestrasi AI multi-agen; 25 dari 61 commit di repositori rekan tim.",
          "Bagian yang saya kerjakan: agen spec, asset-mapper, coder, dan debug, fallback LLM multi-provider, pipeline aset Kenney, skema Supabase, dan stabilitas proses generate.",
        ],
        others: "Tiga rekan tim mengerjakan bagian produk lainnya. Kodenya ada di repositori rekan tim (devinfebrian/GameForge), jadi saya mencantumkannya sebagai repo tim, bukan repo saya.",
      },
      approach: [
        "Sebuah prompt dikirim ke /api/generate, yang mengirimkan progres secara streaming lewat SSE selama pipeline berjalan: agen spec menulis dokumen kebutuhan game, asset mapper mencocokkan entitas dan suara dengan aset Kenney CC0 pilihan atau preset suara prosedural, dan agen coder menulis scene Phaser 4 yang singkat.",
        "Hasilnya disimpan di Supabase, dipratinjau di sandbox terisolasi, dan dipublikasikan di URL untuk memainkannya. Agen debug dapat memperbaiki error saat runtime. Kotak yang disorot pada diagram adalah orkestrasi yang saya kerjakan.",
      ],
      decisions: [
        {
          title: "Fallback provider untuk semua agen",
          text: "Panel admin dapat mengarahkan keempat agen lewat Claude, OpenAI, Gemini, atau Groq, dengan failover otomatis, sehingga satu model yang gagal tidak menghentikan proses generate.",
        },
        {
          title: "Empat agen dengan tugas yang sempit",
          text: "Spec, pemetaan aset, penulisan kode, dan debugging adalah agen yang terpisah. Agen coder menulis kode scene Phaser 4 yang pendek (umumnya di bawah 200 baris, menurut README repo) di atas lapisan engine yang sudah disisipkan sebelumnya, alih-alih menulis fisika dari nol.",
        },
        {
          title: "Yang akan saya ubah, dan yang masih dalam pengerjaan",
          text: "GameForge AI masih perlu disempurnakan. Produknya berjalan dari awal sampai akhir dan saya puas dengan apa yang dihasilkan tim berempat dalam dua minggu, tetapi saya belum menganggapnya selesai. Orkestrasi agen adalah bagian yang akan saya perbaiki lebih dulu. Saya tidak mencantumkan perbaikan yang spesifik di sini karena belum saya petakan dan tidak ingin menebak-nebak.",
        },
      ],
      results: [
        "Demo live: game-forge-rho.vercel.app (perlu mendaftar untuk melakukan generate).",
        "Repositori tim melaporkan 430+ tes otomatis untuk seluruh proyek.",
        "Diselesaikan dalam sprint remote 2 minggu bersama tim berempat.",
        "Tampilan di bawah berasal dari build lokal aplikasi tim; klip singkatnya tanpa suara dan baru diputar saat Anda menekan putar.",
      ],
      learned: [
        "Bekerja di repositori rekan tim dengan tenggat dua minggu berarti menyepakati antarmuka lebih dulu dan menjaga perubahan saya tetap kecil dan mudah ditinjau.",
      ],
    },
  },
  verihire: {
    en: {
      role: "PM and Lead Developer",
      team: "Team of 5",
      time: "Korea ASEAN Digital Academy, Phase 3 Batch 3, Feb to Apr 2026 (250 hours)",
      problem: [
        "Job seekers receive scam postings and need honest feedback on their CVs. VeriHire analyses a CV and flags likely job scams.",
      ],
      myRole: {
        did: [
          "Project manager and team lead of a team of 5 in KADA Phase 3 Batch 3 (250 hours). I led the planning of the project.",
          "My main job was the backend. I built the Node.js and Express backend on MongoDB: JWT authentication, CV parsing and ATS analysis, and the Gemini and Elice AI integration (13 commits in seppam/verihire-backend).",
          "I also contributed to parts of the React frontend (React 19 and React Router): 6 of the 20 commits in timurboys112/verihire-capstone.",
        ],
        others: "The other four members worked on the remaining features and most of the frontend; the frontend repository lives under a teammate's account.",
      },
      approach: [
        "A React frontend (React Router) talks to a Node.js and Express backend with MongoDB for storage. The backend handles JWT authentication, CV parsing and ATS analysis, and calls the Gemini and Elice AI APIs.",
      ],
      decisions: [
        {
          title: "One Node service for authentication, CV analysis and AI integration",
          text: "The backend handles JWT authentication, CV parsing, ATS analysis and the AI integration in a single Node.js and Express service on MongoDB.",
        },
      ],
      results: [
        "Delivered inside the 250-hour KADA Phase 3 (Batch 3) programme, Feb to Apr 2026.",
        "Two public repositories: backend and frontend. No live URL; no ranking claim.",
        "It later became the base of my Job Personal Assistant experiment.",
      ],
      learned: [],
    },
    id: {
      role: "PM dan Lead Developer",
      team: "Tim berlima",
      time: "Korea ASEAN Digital Academy, Phase 3 Batch 3, Feb sampai Apr 2026 (250 jam)",
      problem: [
        "Pencari kerja menerima lowongan penipuan dan membutuhkan masukan yang jujur untuk CV mereka. VeriHire menganalisis CV dan menandai lowongan yang kemungkinan penipuan.",
      ],
      myRole: {
        did: [
          "Project manager dan team lead dalam tim berlima di KADA Phase 3 Batch 3 (250 jam). Saya memimpin perencanaan proyek.",
          "Tugas utama saya adalah backend. Saya membangun backend Node.js dan Express di atas MongoDB: autentikasi JWT, parsing CV dan analisis ATS, serta integrasi AI Gemini dan Elice (13 commit di seppam/verihire-backend).",
          "Saya juga berkontribusi pada sebagian frontend React (React 19 dan React Router): 6 dari 20 commit di timurboys112/verihire-capstone.",
        ],
        others: "Empat anggota lainnya mengerjakan fitur lainnya dan sebagian besar frontend; repositori frontend berada di akun seorang rekan tim.",
      },
      approach: [
        "Frontend React (React Router) berkomunikasi dengan backend Node.js dan Express dengan MongoDB sebagai penyimpanan. Backend menangani autentikasi JWT, parsing CV dan analisis ATS, serta memanggil API AI Gemini dan Elice.",
      ],
      decisions: [
        {
          title: "Satu layanan Node untuk autentikasi, analisis CV, dan integrasi AI",
          text: "Backend menangani autentikasi JWT, parsing CV, analisis ATS, dan integrasi AI dalam satu layanan Node.js dan Express di atas MongoDB.",
        },
      ],
      results: [
        "Diselesaikan dalam program KADA Phase 3 (Batch 3) selama 250 jam, Feb sampai Apr 2026.",
        "Dua repositori publik: backend dan frontend. Tanpa URL live; tanpa klaim peringkat.",
        "Kemudian menjadi dasar eksperimen Job Personal Assistant saya.",
      ],
      learned: [],
    },
  },
};
