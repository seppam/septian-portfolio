"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/data/profile";
import { langHref, other, ui, type Lang } from "@/data/i18n";

const LANG_NAME: Record<Lang, string> = { en: "English", id: "Bahasa Indonesia" };

/** `alt` is the same page in the other language (a plain link, so it works without JavaScript). */
export default function Nav({ lang, alt }: { lang: Lang; alt: string }) {
  const links = [
    { href: langHref(lang, "/#work"), label: ui.nav.work[lang] },
    { href: langHref(lang, "/#engineering"), label: ui.nav.engineering[lang] },
    { href: langHref(lang, "/#about"), label: ui.nav.about[lang] },
    { href: langHref(lang, "/#credentials"), label: ui.nav.credentials[lang] },
    { href: langHref(lang, "/#contact"), label: ui.nav.contact[lang] },
  ];
  const o = other(lang);
  const [open, setOpen] = useState(false);
  const sheet = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = sheet.current!;
    const items = () =>
      Array.from(root.querySelectorAll<HTMLElement>("a,button")).filter((e) => !e.hasAttribute("disabled"));
    items()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      } else if (e.key === "Tab") {
        const list = [toggle.current!, ...items()];
        const i = list.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); list[list.length - 1].focus(); }
        else if (!e.shiftKey && i === list.length - 1) { e.preventDefault(); list[0].focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b hair bg-[var(--bg)]">
      <div className="wrap flex h-14 items-center justify-between gap-3 md:h-16">
        <Link href={langHref(lang, "/")} aria-label={ui.nav.home[lang]} className="mono !text-sm flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-strong)] !normal-case !tracking-normal font-semibold">
          SP
        </Link>
        <nav aria-label={ui.nav.primary[lang]} className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="flex min-h-11 items-center rounded-lg px-3 text-[15px] hover:text-[var(--accent)]">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div role="group" aria-label={ui.nav.language[lang]} className="flex items-center rounded-lg border border-[var(--border-strong)] text-sm font-semibold">
            <span lang={lang} aria-current="true" className="flex h-11 min-w-11 items-center justify-center rounded-[7px] bg-[var(--accent)] px-2 text-[var(--on-accent)]">{lang.toUpperCase()}</span>
            <a href={alt} hrefLang={o} lang={o} aria-label={LANG_NAME[o]} className="flex h-11 min-w-11 items-center justify-center px-2 hover:text-[var(--accent)]">{o.toUpperCase()}</a>
          </div>
          <a href={`mailto:${contact.email}`} className="btn btn-primary btn-sm !px-3 sm:!px-3.5">{ui.nav.hire[lang]}</a>
          <button
            ref={toggle}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-strong)] md:hidden"
            aria-expanded={open}
            aria-controls="menu-sheet"
            aria-label={open ? ui.nav.closeMenu[lang] : ui.nav.openMenu[lang]}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <div id="menu-sheet" ref={sheet} className="border-t hair bg-[var(--bg)] md:hidden">
          <nav aria-label={ui.nav.mobile[lang]} className="wrap flex flex-col py-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b hair text-lg last:border-b-0">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
