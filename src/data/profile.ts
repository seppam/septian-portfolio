// Profile facts: timeline, credentials, contact. Source of truth: CV v2 and
// 00-MASTER-PLAN.md sections 2, 8, 9. Edit here; both language pages update.
// Every text block is { en, id }.
import type { Loc } from "./i18n";

export const contact = {
  name: "Muhamad Septian Pamungkas",
  email: "muhseptianp@outlook.com",
  github: "https://github.com/seppam",
  githubLabel: "github.com/seppam",
  linkedin: "https://www.linkedin.com/in/muh-septian-pamungkas",
  linkedinLabel: "linkedin.com/in/muh-septian-pamungkas",
  location: "Karawang, West Java, Indonesia",
};

export const openLine: Loc<string> = {
  en: "Open to hybrid and remote roles, including remote roles worldwide.",
  id: "Terbuka untuk kerja hybrid dan remote, termasuk kerja remote di seluruh dunia.",
};

export const hero: Loc<{ h1: string; sublineLong: string; sublineShort: string }> = {
  en: {
    h1: "Full-stack developer who starts from the business problem.",
    sublineLong:
      "Systems analyst turned AI application builder. I spent 3 years in enterprise IT at Astra Graphia IT. In 2026 I built URSSET solo and worked on GameForge AI and VeriHire in teams, each with a live demo or a repo you can check.",
    sublineShort:
      "Systems analyst turned AI application builder. 3 years in enterprise IT, then URSSET (solo), GameForge AI and VeriHire (teams).",
  },
  id: {
    h1: "Full-stack developer yang memulai dari masalah bisnisnya.",
    sublineLong:
      "Systems analyst yang beralih menjadi pembangun aplikasi AI. Saya bekerja 3 tahun di IT enterprise, yaitu di Astra Graphia IT. Pada 2026 saya membangun URSSET sendirian serta mengerjakan GameForge AI dan VeriHire dalam tim, masing-masing dengan demo live atau repo yang bisa Anda periksa.",
    sublineShort:
      "Systems analyst yang beralih menjadi pembangun aplikasi AI. 3 tahun di IT enterprise, lalu URSSET (solo), GameForge AI dan VeriHire (tim).",
  },
};

export const proof: Loc<{ value: string; caption: string; href: string }[]> = {
  en: [
    { value: "3 years", caption: "Enterprise IT at Astra Graphia IT, 2018 to 2021", href: "#timeline" },
    { value: "45 tests", caption: "7 contract types in URSSET (Foundry)", href: "/work/ursset" },
    { value: "5 repos", caption: "Documented, each with a README and tests", href: "#projects" },
    { value: "10 certificates", caption: "Including AWS re/Start, Cisco Cybersecurity, KADA Phase 3", href: "#credentials" },
  ],
  id: [
    { value: "3 tahun", caption: "IT enterprise di Astra Graphia IT, 2018 sampai 2021", href: "#timeline" },
    { value: "45 tes", caption: "7 jenis kontrak di URSSET (Foundry)", href: "/work/ursset" },
    { value: "5 repo", caption: "Terdokumentasi, masing-masing dengan README dan tes", href: "#projects" },
    { value: "10 sertifikat", caption: "Termasuk AWS re/Start, Cisco Cybersecurity, KADA Phase 3", href: "#credentials" },
  ],
};

export const approach: Loc<{ n: string; title: string; text: string; chips: string[] }[]> = {
  en: [
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
  ],
  id: [
    {
      n: "01",
      title: "Produk full-stack dan AI",
      text: "React, Next.js, Node.js, dan TypeScript di sisi frontend maupun backend. Fitur LLM dengan fallback antar-provider, guardrail, dan streaming. Smart contract Solidity yang diuji dengan Foundry.",
      chips: ["React", "Next.js", "Node.js", "TypeScript", "Solidity", "Foundry"],
    },
    {
      n: "02",
      title: "Analisis sistem dan delivery",
      text: "Kebutuhan, dokumen proses bisnis dan desain sistem teknis, dokumentasi pengujian, ASP.NET dan SQL Server, pelaporan SAP dan MicroStrategy, serta Jira dan Scrum.",
      chips: ["BPD / TSD", "ASP.NET", "SQL Server", "SAP", "MicroStrategy", "Jira"],
    },
  ],
};

export const about: Loc<string[]> = {
  en: [
    "I started in enterprise IT. For three years at Astra Graphia IT I wrote and fixed ASP.NET systems, produced business process and technical design documents, and supported an internal ERP ticketing application that met its 95% SLA every month during my support role.",
    "After a career break for family caregiving and self-directed retraining, I came back in 2026 through the Korea ASEAN Digital Academy, where I was PM and Lead Developer of VeriHire in a team of 5. Since then I built URSSET alone, worked on the backend and AI orchestration of GameForge AI with a team of 4, and published five documented engineering projects.",
    "I am looking for full-stack or systems-analyst roles on teams that use AI in their product or their workflow. I like turning a vague requirement into a spec, a working feature and a test that proves it. My 2026 work was done in remote teams, and I read and write English professionally.",
  ],
  id: [
    "Saya memulai karier di IT enterprise. Selama tiga tahun di Astra Graphia IT saya menulis dan memperbaiki sistem ASP.NET, menyusun dokumen proses bisnis dan desain sistem teknis, serta mendukung aplikasi ticketing ERP internal yang memenuhi SLA 95% setiap bulan selama saya bertugas di support.",
    "Setelah jeda karier untuk merawat keluarga dan belajar ulang secara mandiri, saya kembali pada 2026 lewat Korea ASEAN Digital Academy, tempat saya menjadi PM dan Lead Developer VeriHire dalam tim berlima. Sejak itu saya membangun URSSET sendirian, mengerjakan backend dan orkestrasi AI GameForge AI bersama tim berempat, dan mempublikasikan lima proyek engineering yang terdokumentasi.",
    "Saya mencari kerja full-stack atau systems analyst di tim yang memakai AI pada produk atau cara kerjanya. Saya suka mengubah kebutuhan yang masih kabur menjadi spesifikasi, fitur yang berjalan, dan tes yang membuktikannya. Pekerjaan saya pada 2026 dilakukan dalam tim remote, dan saya membaca serta menulis bahasa Inggris secara profesional.",
  ],
};

export const currently: Loc<{ label: string; value: string }[]> = {
  en: [
    { label: "Building", value: "AI-assisted products with tests" },
    { label: "Languages", value: "Indonesian (native), English (professional), Japanese (elementary)" },
  ],
  id: [
    { label: "Sedang membangun", value: "Produk berbantuan AI dengan tes" },
    { label: "Bahasa", value: "Indonesia (bahasa ibu), Inggris (profesional), Jepang (dasar)" },
  ],
};

const DRIVE = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export type Credential = {
  issuer: string;
  title: string;
  date?: Loc<string>;
  href?: string;
};

export const credentials: Credential[] = [
  {
    issuer: "Amazon Web Services",
    title: "AWS re/Start Graduate (Orbit reStart)",
    date: { en: "Aug - Sep 2026 (credential issued 30 Sep 2026)", id: "Agu - Sep 2026 (kredensial terbit 30 Sep 2026)" },
    href: "https://www.credly.com/badges/a8cea779-85ff-449a-beae-b7630e2b4fdf",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Junior Cybersecurity Analyst Career Path",
    date: { en: "Aug 2026", id: "Agu 2026" },
    href: "https://www.credly.com/badges/7bcf5307-ff97-4056-b260-bdb31932cc8a",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Cybersecurity",
    href: "https://www.credly.com/badges/135f8bf0-4e3c-4836-aa15-8c1baaef0a95",
  },
  { issuer: "Korea ASEAN Digital Academy", title: "Phase 3, Batch 3 (250 hours)", date: { en: "Apr 2026", id: "Apr 2026" }, href: DRIVE("1ohlL7iUWAvdtIer74XDd7LlKwu67nD2H") },
  { issuer: "Studi DevSecOps", title: "Certified Practical DevSecOps Engineer", date: { en: "Apr 2024", id: "Apr 2024" }, href: DRIVE("1EQ9sHOIuG7-3Lu64U5i-hZHhLY4qjaVQ") },
];

export type CredentialLink = { label: Loc<string>; href: string };
export type CredentialMore = { text: string; links?: CredentialLink[] };

const CERT: Loc<string> = { en: "Certificate", id: "Sertifikat" };

export const credentialsMore: Loc<CredentialMore[]> = {
  en: [
    { text: "Project Management Bootcamp, Belajarlagi (Jun 2022)", links: [{ label: CERT, href: DRIVE("1tql8sXwkoGx0VCDq_z9lvj8t2jHWt76s") }] },
    { text: "Fullstack Digital Marketing Bootcamp, Belajarlagi (Dec 2021)", links: [{ label: CERT, href: DRIVE("1BuI2Y9OwOoWUdaJODcI-RBqZoh720QCI") }] },
    {
      text: "Data Science, Digital Skola (Jun 2021, 86/100)",
      links: [
        { label: { en: "Completion certificate", id: "Sertifikat kelulusan" }, href: DRIVE("1V5DFiJjJkfmbItiXBnZbyh9g1gpenQSA") },
        { label: { en: "Final report", id: "Laporan akhir" }, href: DRIVE("12s3rmv488krlU2J8YEHmoNV23d_gEPyP") },
      ],
    },
    { text: "SQL (Basic), HackerRank (Jun 2021)" },
    { text: "R Fundamental for Data Science, DQLab (Nov 2019)", links: [{ label: CERT, href: DRIVE("1ZzPdFTFdtgmKEXaOE2G70kNWjpogvtDO") }] },
  ],
  id: [
    { text: "Project Management Bootcamp, Belajarlagi (Jun 2022)", links: [{ label: CERT, href: DRIVE("1tql8sXwkoGx0VCDq_z9lvj8t2jHWt76s") }] },
    { text: "Bootcamp Fullstack Digital Marketing, Belajarlagi (Des 2021)", links: [{ label: CERT, href: DRIVE("1BuI2Y9OwOoWUdaJODcI-RBqZoh720QCI") }] },
    {
      text: "Data Science, Digital Skola (Jun 2021, 86/100)",
      links: [
        { label: { en: "Completion certificate", id: "Sertifikat kelulusan" }, href: DRIVE("1V5DFiJjJkfmbItiXBnZbyh9g1gpenQSA") },
        { label: { en: "Final report", id: "Laporan akhir" }, href: DRIVE("12s3rmv488krlU2J8YEHmoNV23d_gEPyP") },
      ],
    },
    { text: "SQL (Basic), HackerRank (Jun 2021)" },
    { text: "R Fundamental for Data Science, DQLab (Nov 2019)", links: [{ label: CERT, href: DRIVE("1ZzPdFTFdtgmKEXaOE2G70kNWjpogvtDO") }] },
  ],
};

export const internshipCert: CredentialLink = {
  label: { en: "Internship certificate", id: "Sertifikat magang" },
  href: DRIVE("1NrJuemvasFOR6ZCvVUfi-LcA2CSzlFkY"),
};

export const timeline: Loc<{ date: string; title: string; text: string }[]> = {
  en: [
    {
      date: "Apr 2026 to now",
      title: "Independent builder and cloud trainee",
      text: "AWS re/Start (Orbit reStart, Aug - Sep 2026), URSSET, GameForge AI (MAXY Academy Project Sprint for KADA alumni, Sep 2026), Sectors AI Advisor.",
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
  ],
  id: [
    {
      date: "Apr 2026 sampai sekarang",
      title: "Builder mandiri dan trainee cloud",
      text: "AWS re/Start (Orbit reStart, Agu - Sep 2026), URSSET, GameForge AI (sprint proyek MAXY Academy untuk alumni KADA, Sep 2026), Sectors AI Advisor.",
    },
    {
      date: "Feb sampai Apr 2026",
      title: "PM dan Lead Developer, VeriHire",
      text: "Korea ASEAN Digital Academy, Phase 3 Batch 3. Tim berlima, 250 jam.",
    },
    {
      date: "Agu 2021 sampai Jan 2026",
      title: "Jeda karier dan belajar ulang",
      text: "Merawat keluarga, lalu belajar ulang secara mandiri. Termasuk magang Data Science di Bank Sampah Digital (20 Sep sampai 30 Okt 2021).",
    },
    {
      date: "Feb sampai Jul 2021",
      title: "Application Support, Astra Graphia IT",
      text: "Astra Graphia IT (kontrak untuk PT Astra International). Mendukung aplikasi ticketing ERP internal untuk Sales Operation roda empat: 5 sampai 8 tiket per hari, 15 sampai 20 pada hari sibuk. Memenuhi SLA 95% setiap bulan.",
    },
    {
      date: "Jul 2018 sampai Feb 2021",
      title: "Developer, Project Operation Acceleration",
      text: "Astra Graphia IT (kontrak untuk PT Astra International). Menyelesaikan 4 serah terima per bulan dari Development ke Operations dalam tim 3 orang; BPD, TSD, ASP.NET.",
    },
    {
      date: "2013 sampai 2017",
      title: "Universitas Gunadarma",
      text: "Sarjana Sistem Informasi (S.Kom), IPK 3,78 / 4,00.",
    },
  ],
};
