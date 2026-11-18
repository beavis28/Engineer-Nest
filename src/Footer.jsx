import React from "react";
import { Logo, NAV_LINKS } from "./Navbar";
import { useLang } from "./i18n";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/50">{t.footer.tagline}</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 font-display text-sm text-white/60">
            {[...NAV_LINKS, { href: "/#contact", label: t.nav.contact }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="outline-text pointer-events-none mt-16 select-none text-center font-display text-[15vw] font-bold leading-none tracking-tight md:text-[11rem]"
        >
          ENGINEERNEST
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} ENGINEERNEST. All rights reserved.</p>
          <p className="font-mono">Japan ⇄ Cambodia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
