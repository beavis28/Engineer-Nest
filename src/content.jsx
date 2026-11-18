import React from "react";

// Language-independent data shared by both locales.
export const TECH = [
  "Unity", "Apple Vision Pro", "Meta Quest", "ARKit", "ARCore", "WebXR", "Swift", "SwiftUI",
  "Kotlin", "Flutter", "React", "Firebase", "Python", "LLM", "RAG", "ESP32", "Raspberry Pi",
  "BLE", "AWS", "GCP",
];

export const APP_STORE_URL = "https://apps.apple.com/developer/satoshi-goto/id1452605561";
export const APPS = [
  "SeaChess", "Catch Thief!", "PingPongGame", "CryptoTradeSimulator", "SwingTradeSimulator", "FamousArtQuiz",
  "OddColorPicker", "CelloTuningWatch", "ViolinTuningWatch", "NationalFlagQuiz", "Dice Watch",
];

const SERVICE_META = [
  { no: "01", en: "AR / VR", tags: ["Unity", "visionOS", "Smart Glasses", "ARKit", "ARCore", "WebXR"], span: "md:col-span-2 md:row-span-2", big: true },
  { no: "02", en: "Mobile", tags: ["Swift", "Kotlin", "Flutter", "watchOS"] },
  { no: "03", en: "AI", tags: ["LLM", "RAG", "Agents", "Vision"] },
  { no: "04", en: "Medical Web", tags: ["Design", "CMS", "SEO"] },
  { no: "05", en: "IoT PoC", tags: ["ESP32", "Raspberry Pi", "BLE", "Cloud"], span: "md:col-span-2" },
];

const PROJECT_META = [
  { tag: "GovTech / Auth", featured: true },
  { tag: "Smart Glasses", featured: true },
  { tag: "Medical Web", url: "https://www.nerima-recruit.com/", host: "nerima-recruit.com" },
  { tag: "AI × Hardware", url: "https://www.anosa.ai/", host: "anosa.ai" },
  { tag: "IoT / Bluetooth" },
];

const EXTENSION_META = [
  {
    name: "Copy and Paste more",
    stat: "30,000+",
    url: "https://chromewebstore.google.com/detail/copy-and-paste-more/mjijaapcbpbcppapekipkdhipfcdpidb",
  },
  {
    name: "ScreenShot To Text More",
    stat: "OCR",
    url: "https://chromewebstore.google.com/detail/screenshot-to-text-more/fahofjhendapkdjddgjaopepmoafpoba",
  },
];

// The books are published in Japanese, so their titles stay Japanese in both locales.
export const BOOKS = [
  {
    title: "読んで理解する サイバーセキュリティ",
    sub: "AI時代の攻撃と回避、そして防御戦略",
    cover: "/img/books/cybersecurity.jpg",
    url: "https://www.amazon.co.jp/dp/B0GPH3W2VN",
  },
  {
    title: "Pythonで市場センチメントを分析しよう",
    cover: "/img/books/sentiment.jpg",
    url: "https://www.amazon.co.jp/dp/B09MQ17PNP",
  },
  {
    title: "Pythonで米国株をデータ分析",
    sub: "-40%ルール、PSR、株価成長率を見ていこう-",
    cover: "/img/books/us-stocks.jpg",
    url: "https://www.amazon.co.jp/dp/B08X4Z1F75",
  },
];

const zip = (meta, texts) => meta.map((m, i) => ({ ...m, ...texts[i] }));

const ja = {
  meta: {
    title: "ENGINEERNEST — AR/VR・AI・モバイル・IoT 開発",
    description:
      "ENGINEERNESTは日本・シンガポール・カンボジアをつなぎ、カンボジアのエンジニアチームとともに、AR/VR、モバイルアプリ、AI活用、医療系Webサイト、IoTデバイスのPoC研究開発を手がける開発スタジオです。",
  },
  nav: { contact: "Contact", cta: "Let's talk →", openMenu: "メニューを開く" },
  footer: {
    tagline: "日本 × シンガポール × カンボジアのチームで、AR/VR・AI・モバイル・IoT のアイデアをプロダクトに。",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
  },
  hero: {
    badge: ["Dev studio", "Japan × Singapore × Cambodia"],
    lead: (
      <>
        AR/VR、AI、モバイル、IoT。
        <br className="hidden sm:block" />
        カンボジアの若く優秀なエンジニアチームと、
        <br className="hidden sm:block" />
        あなたのアイデアを<strong className="font-bold text-white">“動くプロダクト”</strong>に変えます。
      </>
    ),
    cta: "プロジェクトを相談する",
    secondary: "Services",
  },
  services: {
    label: "Services",
    title: ["作れるものは、", "けっこう幅広い。"],
    intro: "最新技術の検証から、しっかり運用するプロダクトまで。受託開発・業務委託・PoCなど、プロジェクトに合わせた形でご一緒します。",
    items: zip(SERVICE_META, [
      {
        title: "AR・VR コンテンツ制作",
        body: "Meta Quest、Apple Vision Pro、スマートグラス、スマートフォンARまで。展示会・研修・プロモーション向けの没入体験を企画から実装まで一気通貫で。",
      },
      { title: "モバイルアプリ開発", body: "iOS / Android / Apple Watch。企画、UI設計、ストア公開、運用まで。" },
      { title: "AI活用・業務委託", body: "LLM・画像認識を使った業務自動化や社内ツール。現場で「使える」AIを素早く形に。" },
      { title: "医療関連ホームページ制作", body: "クリニック・医療機関向けのWebサイト。信頼感のあるデザインと、更新しやすい仕組みを。" },
      { title: "IoTデバイス PoC・研究開発", body: "センサー、組み込み、クラウド連携まで。アイデアを検証できるプロトタイプを短期間で。" },
    ]),
  },
  team: {
    label: "Team",
    title: ["日本の品質 ×", "カンボジアの熱量。"],
    body: (
      <>
        開発を担うのは、カンボジアの <strong className="text-white">Kirirom Institute of Technology</strong>{" "}
        出身・在籍のエンジニアメンバー。最新技術への吸収力が高く、スピード感のある若いチームです。
        日本側がプロジェクトをリードし、要件整理から品質管理までしっかり橋渡しします。
      </>
    ),
    points: [
      ["⚡", "Speed", "小さく作って早く回す"],
      ["🎯", "Quality", "日本側PMが品質を担保"],
      ["💡", "Cost", "オフショアで無理なく"],
    ],
    japan: "PM・設計・品質",
    cambodia: "開発・実装・検証",
  },
  leader: {
    label: "Leadership",
    name: "後藤 智",
    altName: "Satoshi Goto",
    roles: ["CTO — Kirirom Institute of Technology", "CTO — BIRD INITIATIVE（BIIM Cloud 開発主導）"],
    body: "教育機関とクラウド企業、両方のCTOとしての経験をもとに、カンボジアのエンジニアチームを率いています。「おもしろい技術を、ちゃんと役に立つ形に。」がチームのモットーです。",
  },
  process: {
    label: "Process",
    title: ["まずは、", "動くものから。"],
    steps: [
      { no: "01", title: "Hearing", sub: "ヒアリング", body: "課題とゴールを整理。技術的に何ができるかをその場で一緒に考えます。" },
      { no: "02", title: "Prototype", sub: "PoC・プロトタイプ", body: "まず動くものを。小さく作って早く検証し、方向性を固めます。" },
      { no: "03", title: "Build", sub: "開発", body: "日本側PM × カンボジアチームでアジャイル開発。定期的にデモで進捗を共有。" },
      { no: "04", title: "Launch & Grow", sub: "リリース・運用", body: "ストア公開や本番運用、改善サイクルまで伴走します。" },
    ],
  },
  works: {
    label: "Works",
    title: ["つくってきたもの。", "使われてきたもの。"],
    intro: "受託開発から、自社でリリースしているアプリ・拡張機能、技術書の執筆まで。実際に世に出して、使われることを大切にしています。",
    stats: [
      ["30,000+", "Chrome拡張ユーザー"],
      ["11", "App Store アプリ"],
      ["3", "著書"],
    ],
    projects: zip(PROJECT_META, [
      {
        title: "デジタル庁向け 認証開発",
        body: "デジタル庁向けの認証まわりの開発。高いセキュリティと信頼性が求められる公共領域のシステムに対応。",
      },
      {
        title: "Even G2 アプリ開発",
        body: "Even Realities のスマートグラス「Even G2」向けアプリを開発。視界に情報を重ねる、新しいUI体験をつくっています。",
      },
      {
        title: "医療法人社団AAE 採用サイト",
        body: "練馬区光が丘・板橋区成増で内視鏡クリニックを運営する医療法人の採用サイト。職種ごとの求人、職場の魅力、見学会案内までを設計・開発。",
      },
      {
        title: "アノサAI",
        body: "会話を通して好奇心と学びを育てる、AI搭載の話すぬいぐるみ「ちょこ」と、キャラクターに会話機能を与える企業向けプラットフォームを開発。",
      },
      {
        title: "Bluetooth ハンズフリー開発",
        body: "Bluetoothを使ったハンズフリー機器の開発。ソフトウェアだけでなく、ハードウェアに近い領域まで対応します。",
      },
    ]),
    extensions: zip(EXTENSION_META, [
      {
        body: "ブラウザの外でも使える、クリップボード履歴ツール。過去のコピーをフィルタですぐ呼び出せます。",
        statLabel: "users · ★4.4",
      },
      {
        body: "画面の一部をスクリーンショットして、その中の文字をテキスト化。オンライン会議で共有された文字もすぐコピー。",
        statLabel: "screenshot → text",
      },
    ]),
    appsIntro: "ゲーム、チューナー、トレードシミュレーター、クイズなど。iPhone と Apple Watch 向けに企画からリリースまで自社で手がけています。",
    appsLink: "App Store で見る →",
    bookLink: "Kindle →",
  },
  contact: {
    label: "Contact",
    intro: "「こんなこと出来る？」くらいのラフな相談から大歓迎です。PoCの相談、見積もり、業務委託のご依頼など、お気軽にどうぞ。",
    name: "お名前",
    email: "メールアドレス",
    company: "会社名（任意）",
    topics: "ご相談内容",
    interests: ["AR / VR", "Mobile", "AI", "Medical Web", "IoT PoC", "その他"],
    message: "ご相談の内容を教えてください",
    submit: "送信する",
    sending: "送信中…",
    sent: "送信しました。折り返しご連絡いたします。",
    error: "送信に失敗しました。時間をおいて再度お試しください。",
  },
};

const en = {
  meta: {
    title: "ENGINEERNEST — AR/VR, AI, Mobile & IoT Development",
    description:
      "ENGINEERNEST is a development studio connecting Japan, Singapore and Cambodia, working with an engineering team in Cambodia on AR/VR, mobile apps, AI solutions, medical websites and IoT proof-of-concept R&D.",
  },
  nav: { contact: "Contact", cta: "Let's talk →", openMenu: "Open menu" },
  footer: {
    tagline: "A Japan × Singapore × Cambodia team turning AR/VR, AI, mobile and IoT ideas into real products.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  hero: {
    badge: ["Dev studio", "Japan × Singapore × Cambodia"],
    lead: (
      <>
        AR/VR, AI, mobile and IoT.
        <br className="hidden sm:block" />
        Together with our talented young engineers in Cambodia,
        <br className="hidden sm:block" />
        we turn your ideas into <strong className="font-bold text-white">products that actually work.</strong>
      </>
    ),
    cta: "Start a project",
    secondary: "Services",
  },
  services: {
    label: "Services",
    title: ["We build", "a lot of things."],
    intro: "From validating new technology to products that run in production. Contract development, outsourcing or PoC — we work the way your project needs.",
    items: zip(SERVICE_META, [
      {
        title: "AR / VR Experiences",
        body: "Meta Quest, Apple Vision Pro, smart glasses and mobile AR. Immersive experiences for exhibitions, training and promotion — from concept to delivery.",
      },
      { title: "Mobile Apps", body: "iOS, Android and Apple Watch. Planning, UI design, store release and ongoing operation." },
      { title: "AI Solutions", body: "Workflow automation and internal tools powered by LLMs and computer vision. AI that's actually useful on the ground, built fast." },
      { title: "Medical Websites", body: "Websites for clinics and medical institutions. Trustworthy design with content that's easy to keep up to date." },
      { title: "IoT PoC & R&D", body: "Sensors, embedded systems and cloud integration. Prototypes that let you validate an idea, built in a short time." },
    ]),
  },
  team: {
    label: "Team",
    title: ["Japanese quality ×", "Cambodian energy."],
    body: (
      <>
        Development is handled by engineers from{" "}
        <strong className="text-white">Kirirom Institute of Technology</strong> in Cambodia — a young, fast-moving team
        that picks up new technology quickly. The Japan side leads each project and bridges everything from
        requirements to quality assurance.
      </>
    ),
    points: [
      ["⚡", "Speed", "Build small, iterate fast"],
      ["🎯", "Quality", "Japan-side PM owns quality"],
      ["💡", "Cost", "Offshore, without the trade-offs"],
    ],
    japan: "PM · Design · QA",
    cambodia: "Development · Testing",
  },
  leader: {
    label: "Leadership",
    name: "Satoshi Goto",
    altName: "後藤 智",
    roles: ["CTO — Kirirom Institute of Technology", "CTO — BIRD INITIATIVE (leading BIIM Cloud development)"],
    body: "Drawing on his experience as CTO of both an educational institution and a cloud company, he leads our engineering team in Cambodia. Our motto: take interesting technology and make it genuinely useful.",
  },
  process: {
    label: "Process",
    title: ["Start with", "something that works."],
    steps: [
      { no: "01", title: "Hearing", sub: "Discovery", body: "We clarify the problem and the goal, and work out together what's technically possible." },
      { no: "02", title: "Prototype", sub: "PoC", body: "Something working first. Build small, validate fast and lock in the direction." },
      { no: "03", title: "Build", sub: "Development", body: "Agile development with a Japan-side PM and the Cambodia team, with regular demos along the way." },
      { no: "04", title: "Launch & Grow", sub: "Release & operation", body: "We stay with you through store release, production operation and continuous improvement." },
    ],
  },
  works: {
    label: "Works",
    title: ["Things we've built.", "Things people use."],
    intro: "From client work to our own apps, browser extensions and technical books. We care about shipping things that real people use.",
    stats: [
      ["30,000+", "Chrome extension users"],
      ["11", "App Store apps"],
      ["3", "Published books"],
    ],
    projects: zip(PROJECT_META, [
      {
        title: "Authentication for Japan's Digital Agency",
        body: "Authentication development for Japan's Digital Agency — public-sector systems where security and reliability come first.",
      },
      {
        title: "Even G2 App Development",
        body: "Apps for Even Realities' Even G2 smart glasses, creating new UI experiences that overlay information on your field of view.",
      },
      {
        title: "AAE Medical Corporation — Recruiting Site",
        body: "Recruiting site for a medical corporation running endoscopy clinics in Nerima and Itabashi, Tokyo. Job listings, workplace highlights and open-house info, designed and built end to end.",
      },
      {
        title: "anosa AI",
        body: "\"Choco\", an AI-powered talking plush toy that nurtures curiosity through conversation, plus a platform that gives companies' characters the ability to talk.",
      },
      {
        title: "Bluetooth Hands-free Development",
        body: "Development of Bluetooth hands-free devices — not just software, but work close to the hardware as well.",
      },
    ]),
    extensions: zip(EXTENSION_META, [
      {
        body: "Clipboard history that works even outside the browser. Filter and pull up anything you've copied before.",
        statLabel: "users · ★4.4",
      },
      {
        body: "Screenshot part of your screen and get the text back — handy for text shared in video meetings that you can't copy.",
        statLabel: "screenshot → text",
      },
    ]),
    appsIntro: "Games, instrument tuners, trading simulators, quizzes and more — planned, built and released in-house for iPhone and Apple Watch.",
    appsLink: "View on the App Store →",
    bookLink: "Kindle (Japanese) →",
  },
  contact: {
    label: "Contact",
    intro: "Even a rough \"is this possible?\" is welcome. PoC ideas, estimates or outsourcing requests — feel free to reach out.",
    name: "Name",
    email: "Email",
    company: "Company (optional)",
    topics: "What can we help with?",
    interests: ["AR / VR", "Mobile", "AI", "Medical Web", "IoT PoC", "Other"],
    message: "Tell us about your project",
    submit: "Send",
    sending: "Sending…",
    sent: "Thanks! We'll get back to you soon.",
    error: "Something went wrong. Please try again later.",
  },
};

export default { ja, en };
