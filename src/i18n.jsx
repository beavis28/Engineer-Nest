import React, { createContext, useContext, useLayoutEffect, useState } from "react";
import content from "./content";

export const LANGS = ["ja", "en"];
const STORAGE_KEY = "lang";

// ?lang= in the URL wins, then the viewer's saved choice, then the browser locale.
function detectLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
  } catch {}
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {}
  // first supported language in the browser's preference order; anything else falls back to English
  const locales = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
  for (const locale of locales) {
    const base = locale?.toLowerCase().split("-")[0];
    if (LANGS.includes(base)) return base;
  }
  return "en";
}

const LangContext = createContext({ lang: "ja", setLang: () => {}, t: content.ja });

export const LangProvider = ({ children }) => {
  const [lang, setLangState] = useState(detectLang);

  const setLang = (next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  // layout effect so a page's own title (set in a regular effect, e.g. Legal) wins
  useLayoutEffect(() => {
    const t = content[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

export const LangSwitch = ({ className = "" }) => {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex rounded-full border border-line bg-white/[0.03] p-1 font-mono text-xs ${className}`}
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 uppercase tracking-wider transition ${
            lang === l ? "bg-white text-ink" : "text-white/55 hover:text-white"
          }`}
        >
          {l === "ja" ? "JP" : "EN"}
        </button>
      ))}
    </div>
  );
};
