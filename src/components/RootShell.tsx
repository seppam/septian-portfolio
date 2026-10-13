import { Analytics } from "@vercel/analytics/next";
import { ui, type Lang } from "@/data/i18n";
import { geistMono, geistSans } from "@/lib/fonts";
import "@/app/globals.css";

/** The <html>/<body> wrapper. Each language has its own root layout so `lang` is correct in static HTML. */
export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--on-accent)]"
        >
          {ui.skip[lang]}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
