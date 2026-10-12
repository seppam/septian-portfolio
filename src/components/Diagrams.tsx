// Theme-aware, text-based SVG diagrams (colours come from CSS variables).
const box = { fill: "var(--surface)", stroke: "var(--border-strong)", strokeWidth: 1.5 } as const;
const mine = { fill: "var(--live-bg)", stroke: "var(--accent)", strokeWidth: 2 } as const;
const t = { fill: "var(--text)", fontSize: 15, fontFamily: "var(--font-geist-sans), system-ui, sans-serif" } as const;
const s = { ...t, fill: "var(--muted)", fontSize: 12.5 } as const;
const line = { stroke: "var(--muted)", strokeWidth: 1.5, fill: "none" } as const;

function Arrow({ x, y1, y2 }: { x: number; y1: number; y2: number }) {
  return (
    <g {...line}>
      <path d={`M${x} ${y1} V${y2 - 4}`} />
      <path d={`M${x - 5} ${y2 - 9} L${x} ${y2 - 3} L${x + 5} ${y2 - 9}`} />
    </g>
  );
}

export function PipelineDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 560"
      className={className}
      role="img"
      aria-label="GameForge pipeline: a prompt enters the Studio UI, the generate API streams to the spec agent, asset mapper and coder agent; results are stored in Supabase and shown in a sandboxed preview, with a debug agent repairing runtime errors. Provider fallback spans Claude, OpenAI, Gemini and Groq."
    >
      <rect x="110" y="8" width="200" height="44" rx="10" {...box} />
      <text x="210" y="35" textAnchor="middle" {...t}>Prompt (Studio UI)</text>
      <Arrow x={210} y1={52} y2={78} />
      <rect x="40" y="78" width="340" height="40" rx="10" {...mine} />
      <text x="210" y="103" textAnchor="middle" {...t}>/api/generate (SSE stream)</text>
      <Arrow x={210} y1={118} y2={142} />
      <rect x="40" y="142" width="340" height="150" rx="12" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="52" y="162" {...s}>MY PART: ORCHESTRATION</text>
      <rect x="60" y="172" width="300" height="34" rx="8" {...mine} />
      <text x="210" y="194" textAnchor="middle" {...t}>1 Spec agent: game PRD</text>
      <rect x="60" y="214" width="300" height="34" rx="8" {...mine} />
      <text x="210" y="236" textAnchor="middle" {...t}>2 Asset mapper: Kenney + jsfxr</text>
      <rect x="60" y="256" width="300" height="30" rx="8" {...mine} />
      <text x="210" y="276" textAnchor="middle" {...t}>3 Coder agent: Phaser 4 scene</text>
      <Arrow x={110} y1={292} y2={330} />
      <Arrow x={310} y1={292} y2={330} />
      <rect x="20" y="330" width="180" height="48" rx="10" {...box} />
      <text x="110" y="351" textAnchor="middle" {...t}>Supabase</text>
      <text x="110" y="368" textAnchor="middle" {...s}>game_versions</text>
      <rect x="220" y="330" width="180" height="48" rx="10" {...box} />
      <text x="310" y="351" textAnchor="middle" {...t}>Sandboxed preview</text>
      <text x="310" y="368" textAnchor="middle" {...s}>isolated iframe</text>
      <Arrow x={110} y1={378} y2={412} />
      <Arrow x={310} y1={378} y2={412} />
      <rect x="20" y="412" width="180" height="40" rx="10" {...box} />
      <text x="110" y="437" textAnchor="middle" {...t}>/play/[slug]</text>
      <rect x="220" y="412" width="180" height="40" rx="10" {...mine} />
      <text x="310" y="430" textAnchor="middle" {...t}>Debug agent</text>
      <text x="310" y="446" textAnchor="middle" {...s}>runtime error, repair</text>
      <rect x="20" y="480" width="380" height="64" rx="10" {...mine} />
      <text x="210" y="504" textAnchor="middle" {...t}>Provider fallback across all agents</text>
      <text x="210" y="526" textAnchor="middle" {...s}>Claude, OpenAI, Gemini, Groq</text>
    </svg>
  );
}

export function ContractsDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 520"
      className={className}
      role="img"
      aria-label="URSSET architecture: the Next.js investor app with Privy login and the operator server call contracts on Robinhood Chain Testnet. PropertyFactory deploys PropertyToken, PrimarySale, RentDistributor and Marketplace; KYCRegistry is checked on every token transfer; MockIDR is the test Rupiah token."
    >
      <rect x="10" y="8" width="195" height="62" rx="10" {...box} />
      <text x="107" y="32" textAnchor="middle" {...t}>Investor app</text>
      <text x="107" y="52" textAnchor="middle" {...s}>Next.js, Privy login</text>
      <rect x="215" y="8" width="195" height="62" rx="10" {...box} />
      <text x="312" y="32" textAnchor="middle" {...t}>Operator server</text>
      <text x="312" y="52" textAnchor="middle" {...s}>API routes, KYC flag, rent</text>
      <Arrow x={107} y1={70} y2={104} />
      <Arrow x={312} y1={70} y2={104} />
      <rect x="10" y="104" width="400" height="404" rx="14" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="24" y="126" {...s}>ROBINHOOD CHAIN TESTNET (46630)</text>
      <rect x="110" y="140" width="200" height="40" rx="10" {...mine} />
      <text x="210" y="165" textAnchor="middle" {...t}>PropertyFactory</text>
      <text x="210" y="198" textAnchor="middle" {...s}>lists a property in one transaction</text>
      <Arrow x={210} y1={204} y2={226} />
      <rect x="30" y="226" width="170" height="40" rx="10" {...mine} />
      <text x="115" y="251" textAnchor="middle" {...t}>PropertyToken</text>
      <rect x="220" y="226" width="170" height="40" rx="10" {...mine} />
      <text x="305" y="251" textAnchor="middle" {...t}>PrimarySale</text>
      <rect x="30" y="282" width="170" height="40" rx="10" {...mine} />
      <text x="115" y="307" textAnchor="middle" {...t}>RentDistributor</text>
      <rect x="220" y="282" width="170" height="40" rx="10" {...mine} />
      <text x="305" y="307" textAnchor="middle" {...t}>Marketplace</text>
      <text x="210" y="352" textAnchor="middle" {...s}>4 contracts per property + 3 shared = 7 types</text>
      <rect x="30" y="372" width="170" height="64" rx="10" {...mine} />
      <text x="115" y="396" textAnchor="middle" {...t}>KYCRegistry</text>
      <text x="115" y="416" textAnchor="middle" {...s}>checked on every transfer</text>
      <rect x="220" y="372" width="170" height="64" rx="10" {...box} />
      <text x="305" y="396" textAnchor="middle" {...t}>MockIDR (tIDR)</text>
      <text x="305" y="416" textAnchor="middle" {...s}>test Rupiah, zero decimals</text>
      <text x="210" y="470" textAnchor="middle" {...s}>Every rent deposit and split is an onchain event</text>
      <text x="210" y="490" textAnchor="middle" {...s}>anyone can check.</text>
    </svg>
  );
}
