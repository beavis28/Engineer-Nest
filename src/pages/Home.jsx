import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLang } from "../i18n";
import { APPS, APP_STORE_URL, BOOKS, TECH } from "../content";

const CONTACT_FUNCTION_URL = "https://us-central1-engineernest-6bb53.cloudfunctions.net/sendEmailContact";
// const CONTACT_FUNCTION_URL = "http://127.0.0.1:5001/engineernest-6bb53/us-central1/sendEmailContact";

// Adds .is-visible to every .reveal element once it scrolls into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const trackGlow = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

const SectionLabel = ({ no, children }) => (
  <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-nest-300">
    <span className="text-white/30">{no}</span>
    <span className="h-px w-10 bg-nest-400/60" />
    {children}
  </p>
);

// Section heading: first line plain, second line in the gradient.
const Heading = ({ lines, className = "font-display text-4xl font-bold leading-tight md:text-5xl xl:text-6xl" }) => (
  <h2 className={className}>
    {lines[0]}
    <br />
    <span className="text-gradient inline-block">{lines[1]}</span>
  </h2>
);

// Wireframe globe with orbiting nodes — the hero's main visual.
const HeroGlobe = () => {
  const R = 150;
  const meridians = Array.from({ length: 8 }, (_, i) => i);
  const parallels = [-110, -60, 0, 60, 110];
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#5ad1ff" stopOpacity="0.55" />
          <stop offset="0.45" stopColor="#2f6bff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5ad1ff" />
          <stop offset="1" stopColor="#2f6bff" />
        </linearGradient>
      </defs>

      <circle cx="200" cy="200" r="190" fill="url(#core)" />

      <g fill="none" stroke="rgba(127,176,255,0.35)" strokeWidth="1">
        {meridians.map((i) => (
          <ellipse key={i} cx="200" cy="200" rx={R} ry={R}>
            <animate
              attributeName="rx"
              values={`${R};0;${R}`}
              keyTimes="0;0.5;1"
              dur="12s"
              begin={`${-i * 1.5}s`}
              repeatCount="indefinite"
            />
          </ellipse>
        ))}
        {parallels.map((y) => {
          const rx = Math.sqrt(R * R - y * y);
          return <ellipse key={y} cx="200" cy={200 + y} rx={rx} ry={rx * 0.16} />;
        })}
      </g>
      <circle cx="200" cy="200" r={R} fill="none" stroke="url(#rim)" strokeWidth="1.5" />

      <g transform="rotate(-18 200 200)">
        <ellipse cx="200" cy="200" rx="190" ry="62" fill="none" stroke="rgba(90,209,255,0.35)" strokeDasharray="3 6" />
        <circle r="5" fill="#5ad1ff">
          <animateMotion dur="9s" repeatCount="indefinite" path="M10,200 a190,62 0 1,0 380,0 a190,62 0 1,0 -380,0" />
        </circle>
      </g>
      <g transform="rotate(32 200 200)">
        <ellipse cx="200" cy="200" rx="175" ry="48" fill="none" stroke="rgba(47,107,255,0.4)" />
        <circle r="4" fill="#7fb0ff">
          <animateMotion dur="13s" repeatCount="indefinite" path="M25,200 a175,48 0 1,1 350,0 a175,48 0 1,1 -350,0" />
        </circle>
      </g>

      {[
        [140, 140],
        [262, 168],
        [214, 262],
        [150, 236],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="3.5" fill="#fff" />
          <circle cx={x} cy={y} r="4" fill="none" stroke="#5ad1ff">
            <animate attributeName="r" values="4;16;4" dur="3s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
            <animate
              attributeName="opacity"
              values="0.8;0;0.8"
              dur="3s"
              begin={`${i * 0.7}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
      <polyline
        points="140,140 262,168 214,262 150,236 140,140"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeDasharray="4 6"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="4s" repeatCount="indefinite" />
      </polyline>
    </svg>
  );
};

const Hero = () => {
  const { t } = useLang();
  const visualRef = useRef(null);

  // gentle parallax tilt on the hero visual
  const onMove = (e) => {
    const el = visualRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const onLeave = () => {
    if (visualRef.current) visualRef.current.style.transform = "";
  };

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-nest-500/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div className="reveal">
          <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 font-mono text-xs tracking-wider text-white/70">
            <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-400" />
            {t.hero.badge}
          </p>
          <h1 className="font-display text-[clamp(3rem,9vw,7.25rem)] font-bold leading-[0.92] tracking-tight">
            Build the
            <br />
            <span className="text-gradient">next reality.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">{t.hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-nest-500 px-7 py-4 font-display font-semibold shadow-[0_10px_40px_-10px_rgba(47,107,255,0.8)] transition hover:bg-nest-400"
            >
              {t.hero.cta}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 font-display font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>

        <div className="reveal relative mx-auto w-full max-w-lg" onMouseMove={onMove} onMouseLeave={onLeave}>
          <div
            ref={visualRef}
            className="relative aspect-square transition-transform duration-300 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <HeroGlobe />

            <span className="float absolute left-0 top-[12%] rounded-2xl border border-line bg-panel/90 px-4 py-2.5 font-display text-sm font-semibold shadow-2xl backdrop-blur">
              🥽 AR / VR
            </span>
            <span
              className="float absolute right-0 top-[30%] rounded-2xl border border-line bg-panel/90 px-4 py-2.5 font-display text-sm font-semibold shadow-2xl backdrop-blur"
              style={{ animationDelay: "-2s" }}
            >
              🧠 AI
            </span>
            <span
              className="float absolute bottom-[22%] left-[2%] rounded-2xl border border-line bg-panel/90 px-4 py-2.5 font-display text-sm font-semibold shadow-2xl backdrop-blur"
              style={{ animationDelay: "-4s" }}
            >
              📡 IoT PoC
            </span>
            <div
              className="float absolute bottom-[4%] right-[2%] w-52 rounded-2xl border border-line bg-panel/90 p-4 font-mono text-[11px] leading-relaxed shadow-2xl backdrop-blur"
              style={{ animationDelay: "-1s" }}
            >
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-nest-400" />
              </div>
              <p className="text-white/40">$ nest deploy</p>
              <p className="text-cyan-400">✓ prototype ready</p>
              <p className="text-white/70">
                → shipping<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-line bg-white/[0.02] py-5">
        <div className="ticker flex w-max gap-10 whitespace-nowrap">
          {[...TECH, ...TECH].map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-lg font-medium text-white/40">
              {t}
              <span className="text-nest-400">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { t } = useLang();
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="reveal mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <SectionLabel no="01">{t.services.label}</SectionLabel>
          <Heading lines={t.services.title} />
        </div>
        <p className="max-w-md text-white/55">{t.services.intro} </p>
      </div>

      <div className="grid auto-rows-[minmax(240px,auto)] gap-4 md:grid-cols-4">
        {t.services.items.map((s, i) => (
          <article
            key={s.no}
            onMouseMove={trackGlow}
            className={`glow-card reveal group flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-colors hover:border-nest-400/40 md:p-8 ${s.span ?? ""}`}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-white/30">{s.no}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-white/50 transition group-hover:rotate-45 group-hover:border-nest-400 group-hover:bg-nest-500 group-hover:text-white">
                ↗
              </span>
            </div>

            {s.big && (
              <div className="pointer-events-none my-6 flex flex-1 items-center justify-center" aria-hidden="true">
                <div className="relative h-44 w-44 md:h-56 md:w-56">
                  <div className="absolute inset-0 animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-nest-400/40" />
                  <div className="absolute inset-6 animate-[spin_16s_linear_infinite_reverse] rounded-full border border-cyan-400/30" />
                  <div className="absolute inset-14 rounded-full bg-gradient-to-br from-nest-500 to-cyan-400 opacity-80 blur-md" />
                  <div className="absolute inset-16 grid place-items-center rounded-full bg-ink font-display text-xl font-bold">
                    XR
                  </div>
                </div>
              </div>
            )}

            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-nest-300">{s.en}</p>
              <h3 className={`mt-2 font-bold ${s.big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}>{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{s.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-white/60">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const Team = () => {
  const { t } = useLang();
  return (
    <section id="team" className="relative overflow-hidden border-y border-line bg-panel/60 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-nest-500/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel no="02">{t.team.label}</SectionLabel>
          <Heading lines={t.team.title} />
          <p className="mt-8 leading-relaxed text-white/60">{t.team.body}</p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.team.points.map(([icon, en, jp]) => (
              <li key={en} className="rounded-2xl border border-line bg-ink/60 p-5">
                <span className="text-2xl">{icon}</span>
                <p className="mt-3 font-display font-semibold">{en}</p>
                <p className="mt-1 text-xs text-white/50">{jp}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative aspect-square w-full max-w-lg justify-self-center" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="h-full w-full">
            <defs>
              <linearGradient id="arc" x1="0" x2="1">
                <stop offset="0" stopColor="#5ad1ff" />
                <stop offset="1" stopColor="#2f6bff" />
              </linearGradient>
            </defs>
            {[60, 110, 160].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="rgba(255,255,255,0.06)" />
            ))}
            <path d="M300 90 Q 180 60 110 290" fill="none" stroke="url(#arc)" strokeWidth="2" strokeDasharray="6 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-140" dur="3s" repeatCount="indefinite" />
            </path>
            <circle cx="300" cy="90" r="7" fill="#5ad1ff" />
            <circle cx="300" cy="90" r="18" fill="none" stroke="#5ad1ff" opacity="0.4">
              <animate attributeName="r" values="8;26;8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="110" cy="290" r="7" fill="#2f6bff" />
            <circle cx="110" cy="290" r="18" fill="none" stroke="#2f6bff" opacity="0.4">
              <animate attributeName="r" values="8;26;8" dur="3s" begin="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          <div className="absolute right-[2%] top-[8%] rounded-xl border border-line bg-ink/80 px-4 py-2 backdrop-blur">
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400">Japan</p>
            <p className="text-sm font-bold">{t.team.japan}</p>
          </div>
          <div className="absolute bottom-[12%] left-0 rounded-xl border border-line bg-ink/80 px-4 py-2 backdrop-blur">
            <p className="font-mono text-[10px] uppercase tracking-widest text-nest-300">Cambodia</p>
            <p className="text-sm font-bold">{t.team.cambodia}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ceo = () => {
  const { t } = useLang();
  return (
    <section id="ceo" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionLabel no="03">{t.leader.label}</SectionLabel>
      <div className="reveal grid gap-8 rounded-3xl border border-line bg-panel p-7 md:grid-cols-[auto_1fr] md:items-center md:p-9">
        <div className="flex items-center gap-5">
          <img
            src="/img/ceo.jpg"
            alt={t.leader.name}
            className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top ring-1 ring-white/10"
          />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-nest-300">CEO</p>
            <p className="mt-1 text-lg font-bold">
              {t.leader.name}{" "}
              <span className="ml-1 font-display text-sm font-medium text-white/45">{t.leader.altName}</span>
            </p>
          </div>
        </div>

        <div className="md:border-l md:border-line md:pl-8">
          <ul className="flex flex-wrap gap-2">
            {t.leader.roles.map((r) => (
              <li key={r} className="rounded-full border border-line px-3.5 py-1.5 text-xs text-white/70">
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-white/55">{t.leader.body}</p>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const { t } = useLang();
  return (
    <section id="process" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal mb-14">
          <SectionLabel no="04">{t.process.label}</SectionLabel>
          <Heading lines={t.process.title} />
        </div>
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <li
              key={s.no}
              className="reveal group bg-ink p-8 transition-colors hover:bg-panel"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className="font-display text-6xl font-bold text-white/10 transition-colors group-hover:text-nest-500">
                {s.no}
              </p>
              <p className="mt-6 font-display text-xl font-semibold">{s.title}</p>
              <p className="text-sm text-nest-300">{s.sub}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const ExternalArrow = () => (
  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-white/50 transition group-hover:rotate-45 group-hover:border-nest-400 group-hover:bg-nest-500 group-hover:text-white">
    ↗
  </span>
);

const WorksLabel = ({ children }) => (
  <h3 className="reveal mb-6 mt-20 flex items-center gap-4 font-display text-xl font-semibold md:text-2xl">
    {children}
    <span className="h-px flex-1 bg-line" />
  </h3>
);

const Works = () => {
  const { t } = useLang();
  return (
    <section id="works" className="relative overflow-hidden border-t border-line bg-panel/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel no="05">{t.works.label}</SectionLabel>
            <Heading lines={t.works.title} />
          </div>
          <p className="max-w-md text-white/55">{t.works.intro}</p>
        </div>

        <dl className="reveal mt-14 grid grid-cols-3 divide-x divide-line rounded-3xl border border-line bg-ink">
          {t.works.stats.map(([n, l]) => (
            <div key={l} className="px-4 py-7 text-center md:py-10">
              <dt className="sr-only">{l}</dt>
              <dd className="text-gradient font-display text-3xl font-bold md:text-6xl">{n}</dd>
              <dd className="mt-2 text-xs text-white/50 md:text-sm">{l}</dd>
            </div>
          ))}
        </dl>

        <WorksLabel>Client Projects</WorksLabel>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {t.works.projects.map((p, i) => {
            const Tag = p.url ? "a" : "div";
            return (
              <Tag
                key={p.title}
                {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                onMouseMove={trackGlow}
                className={`glow-card reveal group flex flex-col rounded-3xl border border-line bg-ink p-7 transition-colors hover:border-nest-400/40 ${
                  p.featured ? "lg:col-span-3 lg:p-9" : "lg:col-span-2"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-nest-300">{p.tag}</span>
                  {p.url && <ExternalArrow />}
                </div>
                <h4 className={`mt-6 font-bold ${p.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>{p.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{p.body}</p>
                {p.host && <p className="mt-6 font-mono text-xs text-white/35">{p.host}</p>}
              </Tag>
            );
          })}
        </div>

        <WorksLabel>Chrome Extensions</WorksLabel>
        <div className="grid gap-4 md:grid-cols-2">
          {t.works.extensions.map((e, i) => (
            <a
              key={e.name}
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={trackGlow}
              className="glow-card reveal group flex flex-col justify-between gap-8 rounded-3xl border border-line bg-ink p-7 transition-colors hover:border-nest-400/40 sm:flex-row sm:items-end"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <h4 className="text-xl font-bold">{e.name}</h4>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">{e.body}</p>
              </div>
              <div className="flex items-end gap-4 sm:flex-col">
                <ExternalArrow />
                <div className="sm:text-right">
                  <p className="font-display text-3xl font-bold text-white">{e.stat}</p>
                  <p className="font-mono text-xs text-white/40">{e.statLabel}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <WorksLabel>iPhone / Apple Watch Apps</WorksLabel>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={trackGlow}
          className="glow-card reveal group block rounded-3xl border border-line bg-ink p-7 transition-colors hover:border-nest-400/40"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm text-white/55">{t.works.appsIntro}</p>
            <ExternalArrow />
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {APPS.map((a) => (
              <li key={a} className="rounded-full border border-line px-3.5 py-1.5 font-display text-sm text-white/75">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-xs text-white/35">{t.works.appsLink}</p>
        </a>

        <WorksLabel>Books</WorksLabel>
        <div className="grid gap-6 sm:grid-cols-3">
          {BOOKS.map((b, i) => (
            <a
              key={b.url}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex gap-5 rounded-3xl border border-line bg-ink p-5 transition-colors hover:border-nest-400/40 sm:flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-24 shrink-0 sm:w-full">
                <img
                  src={b.cover}
                  alt={b.title}
                  loading="lazy"
                  className="mx-auto aspect-[2/3] w-full rounded-lg object-cover shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1.5deg] sm:w-3/5"
                />
              </div>
              <div className="sm:text-center">
                <p className="font-bold leading-snug">{b.title}</p>
                {b.sub && <p className="mt-1 text-xs text-white/50">{b.sub}</p>}
                <p className="mt-3 font-mono text-xs text-nest-300">{t.works.bookLink}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [interests, setInterests] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (v) => setInterests((xs) => (xs.includes(v) ? xs.filter((x) => x !== v) : [...xs, v]));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await axios.post(CONTACT_FUNCTION_URL, {
        email: form.email,
        name: form.name,
        company: form.company,
        interests: interests.map((i) => c.interests[i]).join(", "),
        message: form.message,
        // legacy field read by older versions of the function
        skill: interests.map((i) => c.interests[i]).join(", "),
      });
      if (response.data?.data?.status === 200) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
        setInterests([]);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("There was an error sending the email", error);
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-2xl border border-line bg-white/[0.03] px-5 py-4 text-white placeholder-white/30 outline-none transition focus:border-nest-400 focus:bg-white/[0.05]";

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-nest-500/20 blur-[160px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel no="06">{c.label}</SectionLabel>
          <h2 className="font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Let's build
            <br />
            <span className="text-gradient">something cool.</span>
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-white/60">{c.intro}</p>
        </div>

        <form onSubmit={handleSubmit} className="reveal space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={input} placeholder={c.name} value={form.name} onChange={update("name")} required />
            <input
              className={input}
              type="email"
              placeholder={c.email}
              value={form.email}
              onChange={update("email")}
              required
            />
          </div>
          <input className={input} placeholder={c.company} value={form.company} onChange={update("company")} />

          <fieldset>
            <legend className="mb-3 text-sm text-white/50">{c.topics}</legend>
            <div className="flex flex-wrap gap-2">
              {c.interests.map((label, v) => {
                const on = interests.includes(v);
                return (
                  <button
                    type="button"
                    key={v}
                    onClick={() => toggle(v)}
                    aria-pressed={on}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      on
                        ? "border-nest-400 bg-nest-500 text-white"
                        : "border-line text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <textarea
            className={`${input} min-h-[160px] resize-y`}
            placeholder={c.message}
            value={form.message}
            onChange={update("message")}
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-display text-lg font-semibold text-ink transition hover:bg-nest-500 hover:text-white disabled:opacity-60"
          >
            {status === "sending" ? c.sending : c.submit}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p role="status" className="min-h-[1.5rem] text-center text-sm">
            {status === "sent" && <span className="text-cyan-400">{c.sent}</span>}
            {status === "error" && <span className="text-red-400">{c.error}</span>}
          </p>
        </form>
      </div>
    </section>
  );
};

const Home = () => {
  useReveal();
  return (
    <>
      <Hero />
      <Services />
      <Team />
      <Ceo />
      <Process />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
