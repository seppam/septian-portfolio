// axe-core scan of the home page, every case study and the 404, in English and Indonesian, light and dark.
// Usage: BASE=http://localhost:3000 node scripts/a11y.mjs  (run `next start` first)
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const base = process.env.BASE ?? "http://localhost:3000";
const pages = ["/", "/work/ursset", "/work/gameforge", "/work/verihire", "/does-not-exist", "/id", "/id/work/ursset", "/id/work/gameforge", "/id/work/verihire", "/id/does-not-exist"];
const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL ?? "chrome" });
let total = 0;
for (const scheme of ["light", "dark"]) {
  for (const w of [390, 1440]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    for (const path of pages) {
      const page = await ctx.newPage();
      await page.goto(base + path, { waitUntil: "networkidle" });
      const r = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"]).analyze();
      total += r.violations.length;
      console.log(`${scheme} ${w}px ${path}: ${r.violations.length} violations, ${r.passes.length} passes`);
      for (const v of r.violations) console.log(`  - ${v.id} (${v.impact}): ${v.help}\n    ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(" | ")}`);
      await page.close();
    }
    await ctx.close();
  }
}
await browser.close();
console.log(`TOTAL violations: ${total}`);
process.exit(total ? 1 : 0);
