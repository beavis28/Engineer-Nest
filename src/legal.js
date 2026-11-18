// Unified Privacy Policy and Terms of Service for all ENGINEERNEST apps, extensions and this website.
// Each section body is a list of blocks: a string is a paragraph, an array is a bullet list.

export const LEGAL_UPDATED = "2026-11-18";
export const LEGAL_CONTACT = "satoshi@engineernest.com";

const privacyJa = {
  title: "プライバシーポリシー",
  updatedLabel: "最終更新日",
  intro:
    "ENGINEERNEST（運営責任者：後藤 智、以下「当方」）は、当方が提供するアプリケーション、ブラウザ拡張機能およびウェブサイト（以下総称して「本サービス」）における利用者の情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。",
  sections: [
    {
      h: "1. 適用範囲",
      body: [
        "本ポリシーは、当方が App Store、Google Play、Chrome ウェブストア等で配信するすべてのアプリケーション・拡張機能、および engineernest.com に適用されます。",
        "個別のアプリケーションに専用のプライバシーポリシーがある場合は、そのアプリケーションについては専用のポリシーが優先されます。当方が受託開発し、他社が提供・運営するサービスには本ポリシーは適用されません。",
      ],
    },
    {
      h: "2. 取得する情報",
      body: [
        [
          "利用者が本サービス内で入力・作成するデータ（設定、記録、クリップボード履歴など）：原則として利用者の端末またはブラウザ内にのみ保存され、当方のサーバーに送信・収集されることはありません。",
          "お問い合わせ情報：ウェブサイトのお問い合わせフォームやメールでご連絡いただいた際の、お名前、メールアドレス、会社名、お問い合わせ内容。",
          "診断情報：アプリの不具合時に、OS やプラットフォーム（Apple、Google）を通じて、端末の機種、OS のバージョン、IP アドレス、利用日時、クラッシュログ等が提供される場合があります。これらは利用者の端末設定で共有に同意している場合に限られます。",
        ],
      ],
    },
    {
      h: "3. 第三者サービス",
      body: [
        "本サービスは、以下の第三者サービスを利用する場合があります。これらのサービスによる情報の取り扱いは、各社のプライバシーポリシーに従います。",
        [
          "Apple（App Store、iCloud 等）",
          "Google Play 開発者サービス、Google Play",
          "Google Firebase（ウェブサイトのホスティングおよびお問い合わせフォームの送信）",
          "Chrome ウェブストア",
        ],
      ],
    },
    {
      h: "4. 利用目的",
      body: [
        [
          "本サービスの提供、維持および改善のため",
          "不具合の調査および修正のため",
          "お問い合わせへの回答のため",
          "法令に基づく対応のため",
        ],
      ],
    },
    {
      h: "5. 第三者への提供",
      body: [
        "当方は、取得した個人情報を販売することはありません。また、次の場合を除き、利用者の同意なく第三者に提供することはありません。",
        ["法令に基づく場合", "人の生命、身体または財産の保護のために必要な場合", "上記の利用目的の達成に必要な範囲で業務を委託する場合"],
      ],
    },
    {
      h: "6. 広告・トラッキング",
      body: [
        "当方は、他社のアプリやウェブサイトをまたいで利用者を追跡（トラッキング）する目的で情報を収集・利用することはありません。",
      ],
    },
    {
      h: "7. 保存期間と安全管理",
      body: [
        "お問い合わせ情報は、回答および対応に必要な期間保存し、その後適切に削除します。当方は情報の漏えい、滅失または毀損を防止するため、合理的な安全管理措置を講じます。ただし、インターネット上の通信および保存方法の安全性を完全に保証するものではありません。",
      ],
    },
    {
      h: "8. 子どものプライバシー",
      body: [
        "本サービスは、13歳未満の方から意図的に個人情報を収集することはありません。13歳未満の方の個人情報を取得したことが判明した場合は、速やかに削除します。保護者の方でお気づきの点があれば、下記までご連絡ください。",
      ],
    },
    {
      h: "9. 利用者の権利",
      body: [
        "利用者は、当方が保有する自己の個人情報について、開示、訂正、利用停止または削除を求めることができます。下記の連絡先までご連絡ください。端末やブラウザ内に保存されたデータは、アプリのアンインストールまたは拡張機能の削除により消去できます。",
      ],
    },
    {
      h: "10. 本ポリシーの変更",
      body: [
        "当方は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは本ページに掲載した時点から効力を生じます。",
      ],
    },
  ],
  contactHeading: "11. お問い合わせ",
  contactBody: "本ポリシーに関するお問い合わせは、以下までご連絡ください。",
  operator: "ENGINEERNEST　運営責任者：後藤 智",
};

const privacyEn = {
  title: "Privacy Policy",
  updatedLabel: "Last updated",
  intro:
    "ENGINEERNEST (operated by Satoshi Goto; \"we\", \"us\") sets out this Privacy Policy to explain how we handle information in the applications, browser extensions and website we provide (collectively, the \"Services\").",
  sections: [
    {
      h: "1. Scope",
      body: [
        "This policy applies to all applications and extensions we distribute on the App Store, Google Play, the Chrome Web Store and elsewhere, and to engineernest.com.",
        "Where an individual app has its own privacy policy, that policy takes precedence for that app. This policy does not apply to services we develop under contract that are provided and operated by other companies.",
      ],
    },
    {
      h: "2. Information we handle",
      body: [
        [
          "Data you enter or create in the Services (settings, records, clipboard history, etc.): as a rule this is stored only on your device or in your browser, and is not sent to or collected on our servers.",
          "Inquiry information: your name, email address, company name and message when you contact us through the website form or by email.",
          "Diagnostic information: when an app crashes, the operating system or platform (Apple, Google) may provide us with information such as device model, OS version, IP address, time of use and crash logs. This happens only if you have agreed to share it in your device settings.",
        ],
      ],
    },
    {
      h: "3. Third-party services",
      body: [
        "The Services may use the following third-party services. Information they handle is governed by their own privacy policies.",
        [
          "Apple (App Store, iCloud, etc.)",
          "Google Play Services and Google Play",
          "Google Firebase (website hosting and contact form delivery)",
          "Chrome Web Store",
        ],
      ],
    },
    {
      h: "4. How we use information",
      body: [
        [
          "To provide, maintain and improve the Services",
          "To investigate and fix bugs",
          "To respond to your inquiries",
          "To comply with legal obligations",
        ],
      ],
    },
    {
      h: "5. Sharing with third parties",
      body: [
        "We do not sell personal information. We do not share it with third parties without your consent, except:",
        [
          "Where required by law",
          "Where necessary to protect a person's life, body or property",
          "Where we outsource work to the extent needed for the purposes above",
        ],
      ],
    },
    {
      h: "6. Advertising and tracking",
      body: [
        "We do not collect or use information to track you across apps or websites owned by other companies.",
      ],
    },
    {
      h: "7. Retention and security",
      body: [
        "We keep inquiry information only as long as needed to respond and follow up, and then delete it appropriately. We take reasonable measures to prevent information from being leaked, lost or damaged. However, no method of transmission over the internet or of electronic storage is completely secure.",
      ],
    },
    {
      h: "8. Children's privacy",
      body: [
        "The Services do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete it promptly. Parents or guardians with concerns can contact us below.",
      ],
    },
    {
      h: "9. Your rights",
      body: [
        "You may ask us to disclose, correct, stop using or delete personal information we hold about you by contacting us below. Data stored on your device or in your browser can be removed by uninstalling the app or removing the extension.",
      ],
    },
    {
      h: "10. Changes to this policy",
      body: ["We may update this policy as needed. The updated policy takes effect when it is posted on this page."],
    },
  ],
  contactHeading: "11. Contact",
  contactBody: "For questions about this policy, please contact:",
  operator: "ENGINEERNEST — operated by Satoshi Goto",
};

const termsJa = {
  title: "利用規約",
  updatedLabel: "最終更新日",
  intro:
    "この利用規約（以下「本規約」）は、ENGINEERNEST（運営責任者：後藤 智、以下「当方」）が提供するアプリケーション、ブラウザ拡張機能およびウェブサイト（以下総称して「本サービス」）の利用条件を定めるものです。利用者は、本サービスを利用することにより本規約に同意したものとみなされます。",
  sections: [
    {
      h: "1. 適用",
      body: [
        "本規約は、本サービスの利用に関する当方と利用者との間の一切の関係に適用されます。個別のアプリケーションに別途の規約がある場合は、その規約も本規約の一部を構成し、内容が矛盾する場合は個別の規約が優先されます。",
      ],
    },
    {
      h: "2. 利用許諾",
      body: [
        "当方は、利用者に対し、本規約に従って本サービスを個人的かつ非独占的に利用する、譲渡不能な権利を許諾します。",
      ],
    },
    {
      h: "3. 禁止事項",
      body: [
        "利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。",
        [
          "法令または公序良俗に違反する行為",
          "本サービスの逆コンパイル、リバースエンジニアリング、改変、再配布その他の不正な利用",
          "本サービスまたは第三者のサーバー・ネットワークの運営を妨げる行為",
          "当方または第三者の知的財産権、プライバシーその他の権利を侵害する行為",
          "その他、当方が不適切と判断する行為",
        ],
      ],
    },
    {
      h: "4. 有料機能・課金",
      body: [
        "本サービスの有料機能やアプリ内課金は、Apple または Google の決済システムを通じて提供されます。購入、請求、返金については各ストアの規約およびポリシーが適用されます。",
      ],
    },
    {
      h: "5. 知的財産権",
      body: [
        "本サービスに関する著作権、商標権その他の知的財産権は、当方または正当な権利者に帰属します。本規約は、これらの権利の譲渡を意味するものではありません。",
      ],
    },
    {
      h: "6. 免責事項",
      body: [
        "本サービスは現状有姿で提供され、当方は、本サービスに誤りや不具合がないこと、特定の目的に適合すること、継続して利用できることを保証しません。",
        "トレードシミュレーター等の金融に関するアプリは学習・娯楽を目的としたものであり、投資助言ではありません。実際の投資判断は利用者ご自身の責任で行ってください。また、クイズや学習コンテンツの内容の正確性・完全性を保証するものではありません。",
      ],
    },
    {
      h: "7. 責任の制限",
      body: [
        "当方は、本サービスの利用または利用できないことにより利用者に生じた損害について、当方の故意または重大な過失による場合を除き、責任を負いません。消費者契約法その他の法令により当方の責任が認められる場合であっても、当方の責任は、利用者が当該損害の発生した本サービスについて当方に支払った金額を上限とします。",
      ],
    },
    {
      h: "8. サービスの変更・終了",
      body: ["当方は、事前の通知なく、本サービスの内容を変更し、または提供を中止・終了することがあります。"],
    },
    {
      h: "9. App Store からダウンロードしたアプリについて",
      body: [
        "Apple の App Store から入手したアプリには、本規約に加えて Apple の標準使用許諾契約（Licensed Application End User License Agreement）が適用されます。本規約は当方と利用者との間で締結されるものであり、Apple は本サービスおよびその内容について責任を負いません。",
      ],
      link: { href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", label: "Apple 標準使用許諾契約（EULA）" },
    },
    {
      h: "10. 本規約の変更",
      body: ["当方は、必要に応じて本規約を変更することがあります。変更後の規約は本ページに掲載した時点から効力を生じます。"],
    },
    {
      h: "11. 準拠法・管轄",
      body: [
        "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合は、当方の所在地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。",
      ],
    },
  ],
  contactHeading: "12. お問い合わせ",
  contactBody: "本規約に関するお問い合わせは、以下までご連絡ください。",
  operator: "ENGINEERNEST　運営責任者：後藤 智",
};

const termsEn = {
  title: "Terms of Service",
  updatedLabel: "Last updated",
  intro:
    "These Terms of Service (the \"Terms\") set out the conditions for using the applications, browser extensions and website provided by ENGINEERNEST (operated by Satoshi Goto; \"we\", \"us\") (collectively, the \"Services\"). By using the Services, you agree to these Terms.",
  sections: [
    {
      h: "1. Application",
      body: [
        "These Terms apply to every aspect of the relationship between you and us regarding the Services. If an individual app has its own terms, those terms form part of these Terms and take precedence where they conflict.",
      ],
    },
    {
      h: "2. License",
      body: ["We grant you a personal, non-exclusive, non-transferable right to use the Services in accordance with these Terms."],
    },
    {
      h: "3. Prohibited conduct",
      body: [
        "When using the Services, you must not:",
        [
          "Violate any law or public order and morals",
          "Decompile, reverse engineer, modify, redistribute or otherwise misuse the Services",
          "Interfere with the operation of the Services or of any third party's servers or networks",
          "Infringe the intellectual property, privacy or other rights of us or any third party",
          "Do anything else we reasonably consider inappropriate",
        ],
      ],
    },
    {
      h: "4. Paid features and purchases",
      body: [
        "Paid features and in-app purchases are provided through Apple's or Google's payment systems. Purchases, billing and refunds are governed by the terms and policies of the respective store.",
      ],
    },
    {
      h: "5. Intellectual property",
      body: [
        "Copyright, trademarks and other intellectual property rights in the Services belong to us or their rightful owners. These Terms do not transfer any of those rights to you.",
      ],
    },
    {
      h: "6. Disclaimer",
      body: [
        "The Services are provided \"as is\". We do not guarantee that the Services are free of errors or defects, fit for a particular purpose, or continuously available.",
        "Finance-related apps such as our trading simulators are for learning and entertainment only and are not investment advice. You are responsible for your own investment decisions. We also do not guarantee the accuracy or completeness of quiz and learning content.",
      ],
    },
    {
      h: "7. Limitation of liability",
      body: [
        "Except in cases of our intentional misconduct or gross negligence, we are not liable for any damage arising from your use of, or inability to use, the Services. Where we are held liable under the Consumer Contract Act of Japan or other laws, our liability is limited to the amount you paid us for the Service that gave rise to the damage.",
      ],
    },
    {
      h: "8. Changes to or end of the Services",
      body: ["We may change, suspend or discontinue the Services without prior notice."],
    },
    {
      h: "9. Apps downloaded from the App Store",
      body: [
        "For apps obtained from Apple's App Store, Apple's Licensed Application End User License Agreement also applies in addition to these Terms. These Terms are between you and us, and Apple is not responsible for the Services or their content.",
      ],
      link: { href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", label: "Apple Standard EULA" },
    },
    {
      h: "10. Changes to these Terms",
      body: ["We may update these Terms as needed. The updated Terms take effect when they are posted on this page."],
    },
    {
      h: "11. Governing law and jurisdiction",
      body: [
        "These Terms are governed by the laws of Japan. Any dispute relating to the Services shall be subject to the exclusive jurisdiction, in the first instance, of the district court with jurisdiction over our location.",
      ],
    },
  ],
  contactHeading: "12. Contact",
  contactBody: "For questions about these Terms, please contact:",
  operator: "ENGINEERNEST — operated by Satoshi Goto",
};

export const LEGAL = {
  privacy: { ja: privacyJa, en: privacyEn },
  terms: { ja: termsJa, en: termsEn },
};
