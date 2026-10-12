"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contact } from "@/data/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#engineering", label: "Engineering" },
  { href: "/#about", label: "About" },
  { href: "/#credentials", label: "Credentials" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
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
        <Link href="/" aria-label="Muhamad Septian Pamungkas, home" className="mono !text-sm flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-strong)] !normal-case !tracking-normal font-semibold">
          SP
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="flex min-h-11 items-center rounded-lg px-3 text-[15px] hover:text-[var(--accent)]">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={contact.cvEn} className="btn btn-secondary btn-sm hidden md:inline-flex">CV</a>
          <a href={`mailto:${contact.email}`} className="btn btn-primary btn-sm">Hire me</a>
          <button
            ref={toggle}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border-strong)] md:hidden"
            aria-expanded={open}
            aria-controls="menu-sheet"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>
      {open && (
        <div id="menu-sheet" ref={sheet} className="border-t hair bg-[var(--bg)] md:hidden">
          <nav aria-label="Mobile" className="wrap flex flex-col py-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b hair text-lg">
                {l.label}
              </Link>
            ))}
            <a href={contact.cvEn} className="flex min-h-12 items-center border-b hair text-lg">CV (English, PDF)</a>
            <a href={contact.cvId} className="flex min-h-12 items-center text-lg">CV (Bahasa Indonesia, PDF)</a>
          </nav>
        </div>
      )}
    </header>
  );
}
