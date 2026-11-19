import React, { useEffect, useState } from "react";
import { LangSwitch, useLang } from "./i18n";

export const NAV_LINKS = [
  { href: "/#ai-team", label: "AI Team" },
  { href: "/#services", label: "Services" },
  { href: "/#team", label: "Team" },
  { href: "/#process", label: "Process" },
  { href: "/#works", label: "Works" },
];

export const Logo = () => (
  <a href="/#top" className="group flex items-center gap-2.5" aria-label="ENGINEERNEST home">
    <img
      src="/brand/engineernest-icon.svg"
      alt=""
      className="h-9 w-9 shrink-0 drop-shadow-[0_0_12px_rgba(47,107,255,0.6)] transition-transform duration-500 group-hover:rotate-45"
    />
    <span className="font-display text-base font-bold tracking-[0.12em] sm:text-lg sm:tracking-[0.18em]">
      ENGINEER<span className="text-nest-400">NEST</span>
    </span>
  </a>
);

const Navbar = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-sm tracking-wide text-white/60 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LangSwitch />
          <a
            href="/#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 font-display text-sm font-semibold text-ink transition hover:bg-nest-400 hover:text-white md:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch />
          <button
            type="button"
            className="relative h-10 w-10"
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-2 right-2 h-0.5 bg-white transition-all ${open ? "top-5 rotate-45" : "top-3.5"}`}
            />
            <span
              className={`absolute left-2 right-2 h-0.5 bg-white transition-all ${open ? "top-5 -rotate-45" : "top-6"}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {[...NAV_LINKS, { href: "/#contact", label: t.nav.contact }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-3xl font-semibold text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
