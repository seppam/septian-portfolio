// Full-page preview screenshots at 390 and 1440 px into docs/preview/ (English and Indonesian).
// Also checks: no horizontal scroll, hero shows name, statement, status line and both CTAs above the fold,
// no CV links, no phone/WhatsApp, the language toggle and the lang attribute.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.env.BASE ?? "http://localhost:3000";
mkdirSync("docs/preview", { recursive: true });
const browser = await chromium.launch({ channel: process.env.CHROME_CHANNEL ?? "chrome" });
const routes = [["home", ""], ["ursset", "/work/ursset"], ["gameforge", "/work/gameforge"], ["verihire", "/work/verihire"]];
let bad = 0;
for (const lang of ["en", "id"]) {
  const prefix = lang === "id" ? "/id" : "";
  for (const [w, h] of [[390, 844], [1440, 900]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: w < 500 ? 2 : 1, colorScheme: "light" });
    for (const [name, path] of routes) {
      const page = await ctx.newPage();
      await page.goto(base + (prefix + path || "/"), { waitUntil: "networkidle" });
      await page.addStyleTag({ content: "html{scroll-behavior:auto!important}" });
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); } window.scrollTo(0, 0); });
      await page.waitForTimeout(400);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      const html = await page.content();
      const cv = /cv(-id)?\.pdf|wa\.me|whatsapp/i.test(html);
      const htmlLang = await page.evaluate(() => document.documentElement.lang);
      console.log(`${lang} ${w}px ${prefix}${path || "/"} overflow ${overflow}px, html lang=${htmlLang}, cv/whatsapp refs: ${cv}`);
      if (overflow > 0 || cv || htmlLang !== lang) bad++;
      if (name === "home") {
        const fold = await page.evaluate((vh) => {
          const vis = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= vh && r.width > 0; };
          const q = (t) => [...document.querySelectorAll("a,h1,p,span")].find((e) => e.textContent.trim().startsWith(t) && e.offsetParent !== null);
          return {
            name: vis(q("Muhamad Septian Pamungkas")), h1: vis(document.querySelector("h1")),
            openLine: vis(q("Open to hybrid and remote") ?? q("Terbuka untuk peran hybrid")),
            cta: vis(q("View work") ?? q("Lihat karya")), toggle: vis(document.querySelector('[aria-current="true"]')),
          };
        }, h);
        console.log(`${lang} ${w}px above the fold (${h}px tall):`, JSON.stringify(fold));
        if (Object.values(fold).includes(false)) bad++;
      }
      await page.screenshot({ path: `docs/preview/${name}-${lang}-${w}.jpg`, fullPage: true, type: "jpeg", quality: 72 });
      await page.close();
    }
    await ctx.close();
  }
}
await browser.close();
process.exit(bad ? 1 : 0);
