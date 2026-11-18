import React, { useEffect } from "react";
import { useLang } from "../i18n";
import { APPS } from "../content";
import { LEGAL, LEGAL_CONTACT, LEGAL_UPDATED } from "../legal";

const EXTENSIONS = ["Copy and Paste more", "ScreenShot To Text More"];

const COVERED_LABEL = { ja: "対象となる主なアプリ・拡張機能", en: "Apps and extensions covered include" };

const Block = ({ block }) =>
  Array.isArray(block) ? (
    <ul className="my-4 list-disc space-y-2 pl-6 marker:text-nest-400">
      {block.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : (
    <p className="my-4">{block}</p>
  );

// Renders the unified Privacy Policy or Terms of Service in the current language.
const Legal = ({ doc }) => {
  const { lang } = useLang();
  const d = LEGAL[doc][lang];

  useEffect(() => {
    document.title = `${d.title} — ENGINEERNEST`;
  }, [d]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc]);

  return (
    <article className="relative mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-nest-300">Legal</p>
      <h1 className="font-display text-4xl font-bold md:text-5xl">{d.title}</h1>
      <p className="mt-4 font-mono text-xs text-white/45">
        {d.updatedLabel}: {LEGAL_UPDATED}
      </p>

      <div className="mt-10 leading-relaxed text-white/70">
        <p>{d.intro}</p>

        <div className="my-8 rounded-2xl border border-line bg-panel p-5 text-sm">
          <p className="font-semibold text-white">{COVERED_LABEL[lang]}</p>
          <p className="mt-2 text-white/55">{[...APPS, ...EXTENSIONS].join(" / ")}</p>
        </div>

        {d.sections.map((s) => (
          <section key={s.h} className="mt-10">
            <h2 className="text-xl font-bold text-white">{s.h}</h2>
            {s.body.map((b, i) => (
              <Block key={i} block={b} />
            ))}
            {s.link && (
              <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="text-nest-300 underline">
                {s.link.label}
              </a>
            )}
          </section>
        ))}

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white">{d.contactHeading}</h2>
          <p className="my-4">{d.contactBody}</p>
          <div className="rounded-2xl border border-line bg-panel p-5">
            <p className="font-semibold text-white">{d.operator}</p>
            <a href={`mailto:${LEGAL_CONTACT}`} className="mt-1 inline-block text-nest-300 underline">
              {LEGAL_CONTACT}
            </a>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Legal;
