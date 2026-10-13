// Build-time link checker. Reads every `live:` URL in src/data/projects.ts,
// requests it, and writes src/data/link-status.json ({ url: httpStatus }).
// The site shows a "Live" badge only for URLs recorded here as 200. Anything else
// is downgraded automatically and reported loudly below. Repo links are checked too
// (warning only). Run with --strict to exit non-zero when a Live URL is not 200.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "src/data/projects.ts"), "utf8");
const pick = (re) => [...new Set([...src.matchAll(re)].map((m) => m[1]))];
const liveUrls = pick(/(?:live|demo):\s*"(https?:\/\/[^"]+)"/g);
const repoUrls = pick(/(?:url:\s*|gh\()\s*"?(https:\/\/github\.com\/[^"]+|[\w.-]+\/[\w.-]+)"/g)
  .map((u) => (u.startsWith("http") ? u : `https://github.com/${u}`));
// gh("owner/name") helper calls:
for (const m of src.matchAll(/gh\("([^"#]+)/g)) repoUrls.push(`https://github.com/${m[1]}`);

async function status(url) {
  for (const method of ["HEAD", "GET"]) {
    try {
      const r = await fetch(url, { method, redirect: "follow", signal: AbortSignal.timeout(15000), headers: { "user-agent": "portfolio-link-checker" } });
      if (r.status === 405 && method === "HEAD") continue;
      return r.status;
    } catch {
      if (method === "GET") return 0;
    }
  }
  return 0;
}

const result = {};
const bad = [];
for (const u of liveUrls) {
  const s = await status(u);
  result[u] = s;
  const ok = s === 200;
  console.log(`[links] LIVE ${ok ? "ok  " : "FAIL"} ${s} ${u}`);
  if (!ok) bad.push([u, s]);
}
// Demo videos (YouTube) and credential links (Credly, Drive files): warn only.
const otherUrls = [...new Set([...src.matchAll(/url:\s*"(https:\/\/youtu\.be\/[^"]+)"/g)].map((m) => m[1]))];
const profile = readFileSync(join(root, "src/data/profile.ts"), "utf8");
for (const m of profile.matchAll(/href:\s*"(https:\/\/[^"]+)"/g)) otherUrls.push(m[1]);
for (const m of profile.matchAll(/DRIVE\("([^"]+)"\)/g)) otherUrls.push(`https://drive.google.com/file/d/${m[1]}/view`);
const badOther = [];
for (const u of otherUrls) {
  const s = await status(u);
  if (s !== 200) badOther.push([u, s]);
}
console.log(`[links] videos and credential links checked: ${otherUrls.length}, not 200: ${badOther.length}`);
for (const [u, s] of badOther) console.warn(`[links] WARN ${s} ${u}`);
const badRepos = [];
for (const u of [...new Set(repoUrls)]) {
  const s = await status(u);
  if (s !== 200) badRepos.push([u, s]);
}
console.log(`[links] repos checked: ${new Set(repoUrls).size}, not 200: ${badRepos.length}`);
for (const [u, s] of badRepos) console.warn(`[links] WARN repo ${s} ${u}`);

if (bad.length) {
  const line = "!".repeat(72);
  console.warn(`\n${line}\n[links] ${bad.length} LIVE URL(S) NOT 200. The "Live" badge is removed for:`);
  for (const [u, s] of bad) console.warn(`[links]   ${s || "no response"}  ${u}`);
  console.warn(`${line}\n`);
}
writeFileSync(join(root, "src/data/link-status.json"), JSON.stringify(result, null, 2) + "\n");
if (bad.length && process.argv.includes("--strict")) process.exit(1);
