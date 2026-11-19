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
  { no: "05", en: "IoT PoC", tags: ["ESP32", "Raspberry Pi", "BLE", "Cloud"] },
  {
    no: "06",
    en: "Security",
    tags: ["PHP", "Node.js", "Linux Kernel", "CVE", "IPS / IDPS", "Monitoring"],
    span: "md:col-span-4",
  },
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
    title: "ENGINEERNEST — 1人月約$1,000のAI開発チーム | 日本 × カンボジア",
    description:
      "ENGINEERNESTは、AIを使いこなすカンボジアのエンジニアで最小構成のAI開発チームを構築・運営・サポートします。1人あたり月約$1,000から、AR/VR、モバイルアプリ、AI活用、医療系Webサイト、IoT PoCまで。",
  },
  nav: { contact: "Contact", cta: "Let's talk →", openMenu: "メニューを開く" },
  footer: {
    tagline: "AIを使いこなすカンボジアのエンジニアで、最小コスト・最大アウトプットの開発チームを。",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
  },
  hero: {
    badge: ["AI dev teams", "Japan × Singapore × Cambodia"],
    lead: (
      <>
        AIを使いこなすカンボジアのエンジニアで、
        <br className="hidden sm:block" />
        あなた専属の開発チームを。1人あたり
        <strong className="font-bold text-white">月 約$1,000</strong>から、
        <br className="hidden sm:block" />
        最小構成で最大のアウトプットを出します。
      </>
    ),
    cta: "AIチームを相談する",
    secondary: "仕組みを見る",
  },
  aiTeam: {
    label: "Why ENGINEERNEST",
    title: ["ソフトウェア開発は、", "もう高くない。"],
    intro:
      "AIの登場で、これまで大人数・高コストだったソフトウェア開発は、少人数・低コストで回せるようになりました。ENGINEERNESTは、AIを使いこなすカンボジアのエンジニアで「最小構成のAI開発チーム」をつくり、運営し、サポートします。",
    compareTitle: "エンジニア1人あたりの月額コスト",
    compare: [
      { label: "国内の受託・SES（一般的な目安）", value: "¥80〜120万", width: "100%" },
      { label: "ENGINEERNEST AIエンジニア", value: "約 $1,000", width: "16%", highlight: true },
    ],
    compareNote: "※ 国内相場は一般的な目安です。実際の費用はチーム構成や案件内容によって変わります。",
    highlights: [
      ["約$1,000", "1人あたりの月額"],
      ["AI × 少人数", "最小構成で高速開発"],
      ["日本側リード", "要件整理と品質管理"],
    ],
    teamTitle: "最小構成の例",
    teamRows: [
      ["Lead", "日本側リード", "要件整理・設計・レビュー"],
      ["Engineer", "AIエンジニア × 2", "カンボジア / AIへの指示出しと成果物の検証"],
      ["Agents", "AIコーディングエージェント", "人の指示でコード生成・テスト・ドキュメント"],
    ],
    teamNote: {
      title: "AIだけでは、開発は回らない。",
      body: "AIに作業を始めさせる「トリガー」と、出てきたものが正しいかを確かめる「検証（バリデーション）」は、まだ人がやるべき仕事です。ENGINEERNESTでは、この部分を人のチームがしっかり埋めます。",
    },
    teamFoot: "1人から始めて、必要に応じて増やせます。",
    flow: {
      label: "How we build",
      title: "要件から、チームをつくる。",
      intro:
        "必要なスキルと人数を見極めて人を集め、必要があればプノンペンにオフィスを構えます。開発・運用・セキュリティまで、タスクに応じて動けるチームを組み立てます。",
      optional: "必要に応じて",
      steps: [
        { en: "Requirements", title: "要件を整理", body: "つくりたいものと、必要なスキル・人数・期間を一緒に整理します。", tags: ["スキル", "人数", "期間"] },
        { en: "Hiring", title: "人を集める", body: "カンボジアのコンピュータサイエンス大学 出身・在籍のエンジニアから、要件に合うメンバーを集めます。" },
        { en: "Office", title: "プノンペンにオフィス", body: "チームの規模や機密性に応じて、プノンペンに専用のオフィスを構えます。", optional: true },
        { en: "Your team", title: "チーム始動", body: "タスクに合わせて役割を組み合わせ、開発から運用、セキュリティまで対応します。" },
      ],
      roles: [
        ["dev", "Dev", "開発"],
        ["ops", "Ops", "運用"],
        ["sec", "Security", "セキュリティ"],
      ],
    },
    pillars: [
      {
        no: "01",
        en: "Build",
        title: "チームを構築する",
        body: "カンボジアのコンピュータサイエンス大学 出身・在籍のエンジニアから案件に合うメンバーを選び、AIコーディングツールと開発フローを整えて、最小構成のチームを立ち上げます。",
      },
      {
        no: "02",
        en: "Operate",
        title: "チームを運営する",
        body: "日本側のリードが要件整理、タスク設計、コードレビューを担当。AIでスピードを出しつつ、品質は人がしっかり見ます。",
      },
      {
        no: "03",
        en: "Support",
        title: "チームを支える",
        body: "リリース後の保守・改善、メンバーの追加や入れ替え、社内へのAI開発の導入まで、長く伴走します。",
      },
    ],
  },
  services: {
    label: "Services",
    title: ["AIチームで、", "つくれるもの。"],
    intro: "少人数のAIチームでも、カバーできる領域は幅広い。新しい技術の検証から、しっかり運用するプロダクトまでお任せください。",
    items: zip(SERVICE_META, [
      {
        title: "AR・VR コンテンツ制作",
        body: "Meta Quest、Apple Vision Pro、スマートグラス、スマートフォンARまで。展示会・研修・プロモーション向けの没入体験を企画から実装まで一気通貫で。",
      },
      { title: "モバイルアプリ開発", body: "iOS / Android / Apple Watch。企画、UI設計、ストア公開、運用まで。" },
      { title: "AI活用・業務委託", body: "LLM・画像認識を使った業務自動化や社内ツール。現場で「使える」AIを素早く形に。" },
      { title: "医療関連ホームページ制作", body: "クリニック・医療機関向けのWebサイト。信頼感のあるデザインと、更新しやすい仕組みを。" },
      { title: "IoTデバイス PoC・研究開発", body: "センサー、組み込み、クラウド連携まで。アイデアを検証できるプロトタイプを短期間で。" },
      {
        title: "セキュリティ対策・運用サポート",
        body: "PHP・Node.jsからLinuxカーネルまでの脆弱性対応と、IPS / IDPSによる侵入検知・防御の継続運用。作って終わりではなく、守り続ける体制をつくります。",
        points: [
          ["脆弱性対応", "PHP・Node.js・Linuxカーネルの脆弱性を調べ、アップデートやパッチ適用まで対応します。"],
          ["IPS / IDPS", "侵入検知・防御システムを導入し、継続的に運用・チューニングします。"],
          ["セキュリティサポート", "設定の見直しや診断結果への対応など、日々のセキュリティの相談に応えます。"],
        ],
      },
    ]),
  },
  team: {
    label: "Team",
    title: ["AIを使いこなす", "カンボジアの若手。"],
    banner: "From Cambodia, to the world.",
    body: (
      <>
        開発を担うのは、<strong className="text-white">カンボジアのコンピュータサイエンス大学</strong>{" "}
        出身・在籍のエンジニアメンバー。AIツールを毎日の開発で使いこなし、新しい技術をすぐに吸収する若いチームです。
        日本側がプロジェクトをリードし、要件整理から品質管理までしっかり橋渡しします。
      </>
    ),
    points: [
      ["💡", "Cost", "1人あたり月 約$1,000"],
      ["⚡", "Speed", "AI × 少人数で高速開発"],
      ["🎯", "Quality", "日本側リードが品質を担保"],
    ],
    photoAlt: ["カンボジアの開発オフィス", "VR開発中のエンジニア"],
  },
  leader: {
    label: "Leadership",
    name: "Satoshi Gotoh",
    roles: ["CTO — Kirirom Institute of Technology", "CTO — BIRD INITIATIVE（BIIM Cloud 開発主導）"],
    body: "教育機関とクラウド企業、両方のCTOとしての経験をもとに、カンボジアのエンジニアとAI時代の開発チームをつくっています。かつてはアメリカでH-1Bビザを取得し、主にファイナンス系のソフトウェアエンジニアとして長年働いてきました。現在も大企業・スタートアップを問わず、多くの企業をサポートしています。",
  },
  process: {
    label: "Process",
    title: ["小さく始めて、", "大きく育てる。"],
    steps: [
      { no: "01", title: "Hearing", sub: "ヒアリング", body: "課題・ゴール・予算を整理し、必要最小限のチーム構成をご提案します。" },
      { no: "02", title: "Team Setup", sub: "チーム立ち上げ", body: "メンバーを選び、AI開発環境と開発フローを整備。最短で動ける状態をつくります。" },
      { no: "03", title: "Build", sub: "開発", body: "日本側リード × カンボジアのAIチームで開発。定期的なデモで進捗を共有します。" },
      { no: "04", title: "Operate & Grow", sub: "運営・サポート", body: "リリース後の運用・改善に加え、必要に応じてチームを拡張します。" },
    ],
  },
  works: {
    label: "Works",
    title: ["つくってきたもの。", "使われてきたもの。"],
    intro: "受託開発から、自社でリリースしているアプリ・拡張機能、技術書の執筆まで。実際に世に出して、使われることを大切にしています。",
    stats: [
      ["30,000+", "Chrome拡張ユーザー"],
      ["11", "App Store アプリ"],
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
    intro: "「まずは1人から試したい」「この予算でどこまでできる？」くらいのラフな相談から大歓迎です。AIチームの構築、PoC、見積もりなど、お気軽にどうぞ。",
    name: "お名前",
    email: "メールアドレス",
    company: "会社名（任意）",
    topics: "ご相談内容",
    interests: ["AIチーム構築", "AR / VR", "Mobile", "AI", "Medical Web", "IoT PoC", "セキュリティ", "その他"],
    message: "ご相談の内容を教えてください",
    submit: "送信する",
    sending: "送信中…",
    sent: "送信しました。折り返しご連絡いたします。",
    error: "送信に失敗しました。時間をおいて再度お試しください。",
  },
};

const en = {
  meta: {
    title: "ENGINEERNEST — AI dev teams from around $1,000 per engineer | Japan × Cambodia",
    description:
      "ENGINEERNEST builds, runs and supports lean AI-powered development teams of Cambodian engineers — from around $1,000 per engineer per month — for AR/VR, mobile apps, AI solutions, medical websites and IoT PoCs.",
  },
  nav: { contact: "Contact", cta: "Let's talk →", openMenu: "Open menu" },
  footer: {
    tagline: "Lean, AI-powered development teams of Cambodian engineers — minimum cost, maximum output.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  hero: {
    badge: ["AI dev teams", "Japan × Singapore × Cambodia"],
    lead: (
      <>
        Your own development team of AI-savvy engineers in Cambodia.
        <br className="hidden sm:block" />
        From <strong className="font-bold text-white">around $1,000 per engineer per month</strong>
        <br className="hidden sm:block" />— the smallest team, the biggest output.
      </>
    ),
    cta: "Talk about your AI team",
    secondary: "How it works",
  },
  aiTeam: {
    label: "Why ENGINEERNEST",
    title: ["Software doesn't have", "to be expensive anymore."],
    intro:
      "AI has changed the economics of software. Work that used to need large, expensive teams can now be done by a few people. ENGINEERNEST builds, runs and supports minimum-size AI development teams of Cambodian engineers who use AI every day.",
    compareTitle: "Monthly cost per engineer",
    compare: [
      { label: "Typical contract engineer in Japan (market estimate)", value: "¥0.8–1.2M", width: "100%" },
      { label: "ENGINEERNEST AI engineer", value: "around $1,000", width: "16%", highlight: true },
    ],
    compareNote: "Japanese market figures are general estimates. Actual costs depend on team composition and project scope.",
    highlights: [
      ["Around $1,000", "per engineer / month"],
      ["AI × small team", "lean and fast"],
      ["Japan-side lead", "requirements & QA"],
    ],
    teamTitle: "A minimum team, for example",
    teamRows: [
      ["Lead", "Japan-side lead", "Requirements · design · review"],
      ["Engineer", "AI engineers × 2", "Cambodia · direct the AI, validate its output"],
      ["Agents", "AI coding agents", "Code · tests · docs, on human instruction"],
    ],
    teamNote: {
      title: "AI alone doesn't ship software.",
      body: "Someone still has to pull the trigger — decide what the AI should do and set it going — and someone has to validate what comes back. That's still work for people, and our human team fills it.",
    },
    teamFoot: "Start with one engineer and scale when you need to.",
    flow: {
      label: "How we build",
      title: "From requirements to a running team.",
      intro:
        "We work out the skills and headcount you need, bring the people together and, when it makes sense, set up an office in Phnom Penh — building a team that covers development, operations and security as your tasks require.",
      optional: "If needed",
      steps: [
        { en: "Requirements", title: "Scope it", body: "Together we pin down what to build and the skills, headcount and timeline it needs.", tags: ["Skills", "Headcount", "Timeline"] },
        { en: "Hiring", title: "Bring people together", body: "We recruit engineers from a computer science university in Cambodia who fit your requirements." },
        { en: "Office", title: "Office in Phnom Penh", body: "Depending on team size and confidentiality, we set up a dedicated office in Phnom Penh.", optional: true },
        { en: "Your team", title: "Up and running", body: "Roles are combined to fit the work — from development to operations and security." },
      ],
      roles: [
        ["dev", "Dev", "Development"],
        ["ops", "Ops", "Operations"],
        ["sec", "Security", "Security"],
      ],
    },
    pillars: [
      {
        no: "01",
        en: "Build",
        title: "We build your team",
        body: "We pick the right engineers from a computer science university in Cambodia, set up AI coding tools and a development workflow, and launch a minimum-size team.",
      },
      {
        no: "02",
        en: "Operate",
        title: "We run it",
        body: "A Japan-side lead handles requirements, task design and code review. AI brings the speed; people keep the quality.",
      },
      {
        no: "03",
        en: "Support",
        title: "We keep supporting it",
        body: "Maintenance and improvements after launch, adding or rotating members, and helping you bring AI-driven development in-house.",
      },
    ],
  },
  services: {
    label: "Services",
    title: ["What an AI team", "can build for you."],
    intro: "A small AI team covers a surprising amount of ground — from validating new technology to products that run in production.",
    items: zip(SERVICE_META, [
      {
        title: "AR / VR Experiences",
        body: "Meta Quest, Apple Vision Pro, smart glasses and mobile AR. Immersive experiences for exhibitions, training and promotion — from concept to delivery.",
      },
      { title: "Mobile Apps", body: "iOS, Android and Apple Watch. Planning, UI design, store release and ongoing operation." },
      { title: "AI Solutions", body: "Workflow automation and internal tools powered by LLMs and computer vision. AI that's actually useful on the ground, built fast." },
      { title: "Medical Websites", body: "Websites for clinics and medical institutions. Trustworthy design with content that's easy to keep up to date." },
      { title: "IoT PoC & R&D", body: "Sensors, embedded systems and cloud integration. Prototypes that let you validate an idea, built in a short time." },
      {
        title: "Security & Ongoing Protection",
        body: "Vulnerability response from PHP and Node.js down to the Linux kernel, plus continuous intrusion detection and prevention with IPS / IDPS. Not just building it — keeping it safe.",
        points: [
          ["Vulnerability response", "We track vulnerabilities in PHP, Node.js and the Linux kernel and handle updates and patching."],
          ["IPS / IDPS", "We deploy intrusion detection and prevention systems and keep running and tuning them."],
          ["Security support", "Configuration reviews, follow-up on audit findings and everyday security questions."],
        ],
      },
    ]),
  },
  team: {
    label: "Team",
    title: ["Young engineers,", "fluent in AI."],
    banner: "From Cambodia, to the world.",
    body: (
      <>
        Development is handled by graduates and students of{" "}
        <strong className="text-white">a computer science university in Cambodia</strong> — a young team that uses AI
        tools in everyday development and picks up new technology quickly. The Japan side leads each project and
        bridges everything from requirements to quality assurance.
      </>
    ),
    points: [
      ["💡", "Cost", "Around $1,000 per engineer / month"],
      ["⚡", "Speed", "AI × small team, shipped fast"],
      ["🎯", "Quality", "Japan-side lead owns quality"],
    ],
    photoAlt: ["Our development office in Cambodia", "An engineer building a VR app"],
  },
  leader: {
    label: "Leadership",
    name: "Satoshi Gotoh",
    roles: ["CTO — Kirirom Institute of Technology", "CTO — BIRD INITIATIVE (leading BIIM Cloud development)"],
    body: "Drawing on his experience as CTO of both an educational institution and a cloud company, he builds AI-era development teams with our engineers in Cambodia. Earlier, he worked in the United States on an H-1B visa as a software engineer for many years, mainly in finance. Today he continues to support many companies, from large enterprises to startups.",
  },
  process: {
    label: "Process",
    title: ["Start small,", "grow big."],
    steps: [
      { no: "01", title: "Hearing", sub: "Discovery", body: "We clarify your goals and budget, and propose the smallest team that can get there." },
      { no: "02", title: "Team Setup", sub: "Launch the team", body: "We pick the members and set up AI tooling and the workflow, so the team is productive from day one." },
      { no: "03", title: "Build", sub: "Development", body: "A Japan-side lead and the Cambodian AI team build together, with regular demos along the way." },
      { no: "04", title: "Operate & Grow", sub: "Run & support", body: "Operation and improvement after launch — and we scale the team when you need it." },
    ],
  },
  works: {
    label: "Works",
    title: ["Things we've built.", "Things people use."],
    intro: "From client work to our own apps, browser extensions and technical books. We care about shipping things that real people use.",
    stats: [
      ["30,000+", "Chrome extension users"],
      ["11", "App Store apps"],
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
    intro: "\"Can we try with one engineer?\" \"What can we get for this budget?\" — rough questions are welcome. AI teams, PoCs or estimates, feel free to reach out.",
    name: "Name",
    email: "Email",
    company: "Company (optional)",
    topics: "What can we help with?",
    interests: ["AI team", "AR / VR", "Mobile", "AI", "Medical Web", "IoT PoC", "Security", "Other"],
    message: "Tell us about your project",
    submit: "Send",
    sending: "Sending…",
    sent: "Thanks! We'll get back to you soon.",
    error: "Something went wrong. Please try again later.",
  },
};

export default { ja, en };
