// Full-page preview screenshots at 390 and 1440 px into docs/preview/.
// Also checks: no horizontal scroll at 390, hero shows name, statement, status and both CTAs above the fold.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.env.BASE ?? "http://localhost:3000";
mkdirSync("docs/preview", { recursive: true });
const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL ?? "chrome" });
const routes = [["home", "/"], ["ursset", "/work/ursset"], ["gameforge", "/work/gameforge"], ["verihire", "/work/verihire"]];
for (const [w, h] of [[390, 844], [1440, 900]]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: w < 500 ? 2 : 1, colorScheme: "light" });
  for (const [name, path] of routes) {
    const page = await ctx.newPage();
    await page.goto(base + path, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: "html{scroll-behavior:auto!important}" });
    // lazy images: scroll through so they load
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(400);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(`${w}px ${path} horizontal overflow: ${overflow}px`);
    if (name === "home") {
      const fold = await page.evaluate((vh) => {
        const vis = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= vh && r.width > 0; };
        const q = (t) => [...document.querySelectorAll("a,h1,p,span")].find((e) => e.textContent.trim().startsWith(t) && e.offsetParent !== null);
        return {
          name: vis(q("Muhamad Septian Pamungkas")), h1: vis(document.querySelector("h1")), status: vis(q("Open to work")),
          viewWork: vis(q("View work")), cv: vis(q("Download CV")),
        };
      }, h);
      console.log(`${w}px above the fold (${h}px tall):`, JSON.stringify(fold));
    }
    await page.screenshot({ path: `docs/preview/${name}-${w}.png`, fullPage: true });
    await page.close();
  }
  await ctx.close();
}
await browser.close();
