// Profile facts: timeline, credentials, contact. Source of truth: CV v2 and
// 00-MASTER-PLAN.md sections 2, 8, 9. Edit here; the page updates automatically.

export const contact = {
  name: "Muhamad Septian Pamungkas",
  email: "muhseptianp@outlook.com",
  github: "https://github.com/seppam",
  linkedin: "https://www.linkedin.com/in/muh-septian-pamungkas",
  whatsapp: "https://example.invalid/removed",
  location: "Karawang, West Java, Indonesia",
  cvEn: "/cv.pdf",
  cvId: "/cv-id.pdf",
};

export const hero = {
  status: "Open to work · Remote or hybrid",
  h1: "Full-stack developer who starts from the business problem.",
  sublineLong:
    "Systems analyst turned AI application builder. I spent 3 years in enterprise IT at Astra Graphia IT. In 2026 I built URSSET solo and worked on GameForge AI and VeriHire in teams, each with a live demo or a repo you can check.",
  sublineShort:
    "Systems analyst turned AI application builder. 3 years in enterprise IT, then URSSET (solo), GameForge AI and VeriHire (teams).",
};

export const proof = [
  { value: "3 years", caption: "Enterprise IT at Astra Graphia IT, 2018 to 2021", href: "#timeline" },
  { value: "45 tests", caption: "7 contract types in URSSET (Foundry)", href: "/work/ursset" },
  { value: "5 repos", caption: "Documented, each with a README and tests", href: "#engineering" },
  { value: "3 credentials", caption: "AWS re/Start, Cisco Cyber Analyst, KADA Phase 3", href: "#credentials" },
];

export const approach = [
  {
    n: "01",
    title: "Full-stack and AI products",
    text: "React, Next.js, Node.js and TypeScript on the front and back end. LLM features with provider fallback, guardrails and streaming. Smart contracts in Solidity tested with Foundry.",
    chips: ["React", "Next.js", "Node.js", "TypeScript", "Solidity", "Foundry"],
  },
  {
    n: "02",
    title: "Systems analysis and delivery",
    text: "Requirements, business process documents and technical system designs, test documentation, ASP.NET and SQL Server, SAP and MicroStrategy reporting, Jira and Scrum.",
    chips: ["BPD / TSD", "ASP.NET", "SQL Server", "SAP", "MicroStrategy", "Jira"],
  },
];

export const about = [
  "I started in enterprise IT. For three years at Astra Graphia IT I wrote and fixed ASP.NET systems, produced business process and technical design documents, and supported an internal ERP ticketing application that met its 95% SLA every month during my support role.",
  "After a career break for family caregiving and self-directed retraining, I came back in 2026 through the Korea ASEAN Digital Academy, where I was PM and Lead Developer of VeriHire in a team of 5. Since then I built URSSET alone, worked on the backend and AI orchestration of GameForge AI with a team of 4, and published five documented engineering projects.",
  "I am looking for full-stack or systems-analyst roles on teams that use AI in their product or their workflow. I like turning a vague requirement into a spec, a working feature and a test that proves it. My 2026 work was done in remote teams, and I read and write English professionally.",
];

export const currently = [
  { label: "Building", value: "AI-assisted products with tests" },
  { label: "Languages", value: "Indonesian (native), English (professional), Japanese (elementary)" },
];

export type Credential = {
  issuer: string;
  title: string;
  date?: string;
  href?: string;
  hrefLabel?: string;
};

export const credentials: Credential[] = [
  {
    issuer: "Amazon Web Services",
    title: "AWS re/Start Graduate (Orbit reStart)",
    date: "Sep 2026",
    href: "https://www.credly.com/badges/a8cea779-85ff-449a-beae-b7630e2b4fdf",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Junior Cybersecurity Analyst Career Path",
    date: "Aug 2026",
    href: "https://www.credly.com/badges/7bcf5307-ff97-4056-b260-bdb31932cc8a",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    href: "https://www.credly.com/badges/135f8bf0-4e3c-4836-aa15-8c1baaef0a95",
  },
  { issuer: "Korea ASEAN Digital Academy", title: "Phase 3, Batch 3 (250 hours)", date: "Apr 2026" },
  { issuer: "Studi DevSecOps", title: "Certified Practical DevSecOps Engineer", date: "Apr 2024" },
];

export const credentialsMore = [
  "Project Management Bootcamp, Belajarlagi (Jun 2022)",
  "Data Science, Digital Skola (Jun 2021, 86/100)",
  "SQL (Basic), HackerRank (Jun 2021)",
  "R Fundamental for Data Science, DQLab (Nov 2019)",
];

export const timeline = [
  {
    date: "Apr 2026 to now",
    title: "Independent builder and cloud trainee",
    text: "AWS re/Start (Orbit reStart), URSSET, GameForge AI (MAXY Academy Project Sprint, Sep 2026), Sectors AI Advisor.",
  },
  {
    date: "Feb to Apr 2026",
    title: "PM and Lead Developer, VeriHire",
    text: "Korea ASEAN Digital Academy, Phase 3 Batch 3. Team of 5, 250 hours.",
  },
  {
    date: "Aug 2021 to Jan 2026",
    title: "Career break and retraining",
    text: "Family caregiving, then self-directed retraining. Includes a Data Science internship at Bank Sampah Digital (20 Sep to 30 Oct 2021).",
  },
  {
    date: "Feb to Jul 2021",
    title: "Application Support, Astra Graphia IT",
    text: "Astra Graphia IT (contract for PT Astra International). Supported an internal ERP ticketing app for the 4-wheeler Sales Operation: 5 to 8 tickets a day, 15 to 20 on peak days. Met the 95% SLA every month.",
  },
  {
    date: "Jul 2018 to Feb 2021",
    title: "Developer, Project Operation Acceleration",
    text: "Astra Graphia IT (contract for PT Astra International). Delivered 4 handovers a month from Development to Operations in a 3-person team; BPD, TSD, ASP.NET.",
  },
  {
    date: "2013 to 2017",
    title: "Universitas Gunadarma",
    text: "Bachelor of Information Systems (S.Kom), GPA 3.78 / 4.00.",
  },
];
