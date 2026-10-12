// Long-form case-study text, keyed by project slug. Facts only; every number here
// comes from the repo READMEs, the CV or 00-MASTER-PLAN.md.

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

export const caseStudies: Record<string, CaseStudy> = {
  ursset: {
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
  gameforge: {
    role: "Backend and AI orchestration",
    team: "Team of 4, remote",
    time: "MAXY Academy Project Sprint for KADA alumni, 7 to 18 Sep 2026",
    problem: [
      "People who are not programmers cannot turn a game idea into something playable. GameForge AI takes a plain-English description and produces a 2D browser game.",
    ],
    myRole: {
      did: [
        "I owned the backend and the AI orchestration: the spec, asset-mapper, coder and debug agents, the multi-provider LLM fallback, the Kenney asset pipeline, the Supabase schema and generation stability.",
        "25 of the 61 commits in the team repository are mine.",
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
    ],
    results: [
      "Live app: game-forge-rho.vercel.app (sign-up required to generate).",
      "25 of 61 commits in the team repository; the repo reports 430+ automated tests for the whole project.",
      "Delivered in a 2-week remote sprint with a team of 4.",
    ],
    learned: [
      "Working in a teammate's repository on a two-week clock meant agreeing on interfaces first and keeping my changes small and reviewable.",
    ],
  },
  verihire: {
    role: "PM and Lead Developer",
    team: "Team of 5",
    time: "Korea ASEAN Digital Academy, Phase 3 Batch 3, Feb to Apr 2026 (250 hours)",
    problem: [
      "Job seekers receive scam postings and need honest feedback on their CVs. VeriHire analyses a CV and flags likely job scams.",
    ],
    myRole: {
      did: [
        "As PM, I led the planning of the project for the team of 5.",
        "As Lead Developer, I built the React and Redux Toolkit frontend and the Node.js and MongoDB backend, integrated the AI API and containerised the app with Docker.",
      ],
      others: "The other four members worked on the remaining features and the frontend repository, which lives under a teammate's account.",
    },
    approach: [
      "A React and Redux Toolkit single-page frontend talks to a Node.js and Express backend that handles user authentication, AI analysis and payments, with MongoDB for storage. The AI analysis calls an external AI API. The services run in Docker.",
    ],
    decisions: [
      {
        title: "One Node service for AI analysis, authentication and payments",
        text: "The backend handles the AI analysis, user authentication and cumulative payment processing in a single Node.js and Express service on MongoDB.",
      },
    ],
    results: [
      "Delivered inside the 250-hour KADA Phase 3 (Batch 3) programme, Feb to Apr 2026.",
      "Two public repositories: backend and frontend. No live URL; no ranking claim.",
      "It later became the base of my Job Personal Assistant experiment.",
    ],
    learned: [],
  },
};
