import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const STORAGE_KEY = 'portfolio-language';
const SUPPORTED_LANGUAGES = ['en', 'ja', 'zh'];

/**
 * Language resolution priority:
 *   1. Manual preference (localStorage: portfolio-language)
 *   2. Browser language (navigator.languages / navigator.language)
 *   3. Fallback: English
 *
 * No IP / Geo API — zero external dependencies, works on GitHub Pages out of the box.
 */
const getInitialLanguage = () => {
    // 1. Manual preference (user explicitly chose a language before)
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
            return saved;
        }
    } catch {
        /* ignore storage errors */
    }

    // 2. Browser language
    try {
        const langs = (navigator.languages && navigator.languages.length > 0)
            ? navigator.languages
            : [navigator.language || 'en'];

        for (const lang of langs) {
            const code = String(lang).toLowerCase();
            if (code.startsWith('ja')) return 'ja';      // ja / ja-JP -> Japanese
            if (code.startsWith('zh')) return 'zh';      // zh / zh-CN / zh-SG / zh-Hans -> Chinese
        }
    } catch {
        /* ignore navigator errors */
    }

    // 3. Fallback
    return 'en';
};

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            timeline: "Timeline",
            skills: "Skills"
        },
        contact: {
            title: "Contact",
            desc: "The best way to reach me is through the channel below.",
            items: [
                { label: "GitHub", value: "https://github.com/heisyoudan", link: "https://github.com/heisyoudan" }
            ]
        },
        home: {
            greeting: "Welcome to my world!",
            intro: "Hi, I am",
            name: "He Xiaodan.",
            codeName: "He Xiaodan",
            role: "Software Engineer & Indie Developer",
            subtitle: "Backend · macOS · XR · AI-Assisted Development",
            description: "I build production software across backend systems, native macOS applications, and immersive XR experiences. My work spans enterprise payment systems, independently shipped Mac apps, and industrial VR/AR solutions.",
            viewWork: "View Projects",
            viewPlaybook: "View AI Playbook",
            contact: "About Me"
        },
        about: {
            title: "About Me",
            content: `
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin-bottom: 15px;">// whoAmI()</div>
                <p>I'm a software engineer based in <strong>Tokyo</strong>, working across backend systems, native macOS applications, and immersive XR products.</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// currentWork</div>
                <p>My recent professional work focuses on enterprise backend development using Java, Spring Boot, AWS, gRPC, PostgreSQL, and related cloud technologies.</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// personalBuild</div>
                <p>Outside of client and enterprise work, I independently design and ship macOS applications using Swift and SwiftUI. Vortex, my file organization utility, is currently available on the Mac App Store.</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// background</div>
                <p>Earlier in my career, I spent several years building industrial Unity VR/AR systems, including safety training, digital twins, hardware interaction, and HoloLens-based inspection tools.</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// openSource</div>
                <p>I also explore AI-assisted software development and multi-agent engineering workflows through my open-source projects.</p>

                <p>I value clear requirements, reliable implementation, and asynchronous written communication.</p>
            `,
            career_title: "Career Summary",
            skills_title: "Skills Summary"
        },
        projects: {
            title: "Selected Projects",
            more: "Learn More",
            code: "Code",
            demo: "Demo",
            store: "App Store",
            roleLabel: "Role",
            whatIBuiltLabel: "What I Built",
            proprietary: "Proprietary enterprise project",
            items: [
                {
                    title: "Vortex — Native macOS File Organizer",
                    industry: "macOS App · Live on the Mac App Store",
                    role: "Solo Developer",
                    whatIBuilt: "Designed, developed, tested, and shipped a native macOS file organization utility to the Mac App Store. From the menu bar you can instantly see newly downloaded files, auto-organize them into type-based folders, and open, drag, archive, or delete them — with a timeline that lets you safely undo recent moves. Everything runs locally and files are organized under ~/Downloads/Vortex.<br><br><b>Scope:</b> Product planning, SwiftUI implementation, menu bar app architecture, file watching & auto-organization, and StoreKit 2 in-app purchases (Vortex Pro) — all the way to App Store release.",
                    imgSrc: "/VS-Style-Portfolio/img/9.jpg",
                    link: "https://apps.apple.com/us/app/vortex-file-organizer/id6772141575?mt=12",
                    tech: ["Swift", "SwiftUI", "StoreKit 2", "App Sandbox", "File System APIs"]
                },
                {
                    title: "Enterprise Payment Platform Modernization",
                    industry: "Enterprise · FinTech",
                    role: "Backend Engineer",
                    whatIBuilt: "Contributed to the modernization of a large-scale payment platform as a technical lead-in member, driving the validation and adoption of new technologies and helping shape implementation standards for downstream development.<br><br><b>Scope:</b> Feasibility validation and lead implementation of gRPC and AWS DynamoDB, technical implementation reports and development guides, and validating AI-assisted development tools (GitHub Copilot) to standardize the team's workflow.",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "Spring Boot", "gRPC", "AWS", "DynamoDB"],
                    proprietary: true
                },
                {
                    title: "Contract Management & Payment System",
                    industry: "Enterprise · FinTech",
                    role: "Backend Engineer",
                    whatIBuilt: "Built a contract management system for a large-scale payment agency service, integrated with the Kickflow workflow platform to support the full flow of applications, approvals, and management.<br><br><b>Scope:</b> Participated across the whole development process from basic design through integration testing — BFF, backend, and shared API design, PostgreSQL database design, AWS integration, React + TypeScript frontend development, testing, and code review.",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS"],
                    proprietary: true
                },
                {
                    title: "VR Fire Extinguishing Training",
                    industry: "Industrial VR · Hydroelectric",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "Developed a VR fire-extinguishing training app for hydroelectric power plant staff. Immersive spatial presentation increases safety and realism, letting trainees practice in a near-fire environment without using real flames.<br><br><b>Scope:</b> Requirement analysis, proposal & design, technical architecture, implementation, testing, acceptance, and delivery support — delivered end-to-end as an independent engineer.",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "Omit — Minimal macOS System Monitor",
                    industry: "macOS App · Open Source",
                    role: "Solo Developer",
                    whatIBuilt: "Designed and shipped a minimal macOS menu bar system monitor with SwiftUI, aiming for a light, intuitive way to check CPU, memory, and network status with a clean, minimal design.<br><br><b>Scope:</b> UI/UX design, feature implementation, and app release completed independently — productized from scratch with AI-assisted development, pursuing an Apple-native minimal experience.",
                    imgSrc: "/VS-Style-Portfolio/img/8.png",
                    github: "https://github.com/heisyoudan/Omit",
                    tech: ["Swift", "SwiftUI", "MenuBarExtra", "macOS"]
                },
                {
                    title: "AR Glasses Inspection Support App",
                    industry: "Industrial AR · Hydroelectric",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "An AR app that supports on-site inspections. Workers view digitized work instructions on AR glasses and share live video and audio with remote engineers, who can display annotated images and instructions in the worker's field of view — improving inspection efficiency and collaboration.<br><br><b>Scope:</b> Requirement analysis, proposal & design, technical architecture, implementation, testing, acceptance, and delivery support — delivered end-to-end as an independent engineer.",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "Steel Mill Digital Twin Visualization",
                    industry: "Industrial Visualization · Steel Manufacturing",
                    role: "Unity Developer",
                    whatIBuilt: "Built a digital twin system that recreates a steel mill's production site in 3D space and aggregates data from multiple on-site sources into one view. Managers can grasp production status intuitively without visiting the site, supported by linked data and video for faster, more accurate decisions.<br><br><b>Scope:</b> Unity frontend implementation — API data integration, 3D model control, and user interaction.",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "Hi5 Glove Immersive Training System",
                    industry: "Industrial VR · Hydroelectric",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "An immersive training system using Hi5 VR gloves. Hands-on procedures that need repeated practice can be experienced with high fidelity in virtual space, improving training efficiency and on-site proficiency.<br><br><b>Scope:</b> Requirement analysis, proposal & design, technical architecture, implementation, testing, acceptance, and delivery support — delivered end-to-end as an independent engineer.",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "High-Altitude Fall Safety Experience",
                    industry: "Industrial VR · Hydroelectric",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "An immersive safety-training app for work at height. By reproducing the situation and fear of a fall, it raises workers' safety awareness and helps prevent accidents.<br><br><b>Scope:</b> Requirement analysis, proposal & design, technical architecture, implementation, testing, acceptance, and delivery support — delivered end-to-end as an independent engineer.",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "AI Agent Playbook",
                    industry: "Open Source · Developer Tools",
                    role: "Author / Independent",
                    whatIBuilt: "A practical, open-source methodology for AI-agent collaboration, distilled from two years of production use in a large-scale payment project — covering task decomposition, context design, constraint systems, quality gates, and designing workflows as products.<br><br>The methodology is validated in code by an internal agent-collaboration framework I designed and built (SwiftUI + CLI, with JSON-based state machines and atomic rollback). The playbook itself is published on GitHub under MIT.",
                    imgSrc: "/VS-Style-Portfolio/img/10.svg",
                    github: "https://github.com/heisyoudan/ai-agent-playbook",
                    tech: ["Swift", "SwiftUI", "AI Agents", "Workflow Design"]
                }
            ]
        },
        timeline: {
            title: "Timeline",
            items: [
                {
                    date: "Dec 2014",
                    company: "Wuhan Guoce Sanlian Hydroelectric Equipment Co., Ltd.",
                    desc: "Worked as a Project Manager."
                },
                {
                    date: "May 2018",
                    company: "Wuhan Blue Ocean Kechuang Technology Co., Ltd.",
                    desc: "VR Engineer — Unity-based virtual reality development and technical research."
                },
                {
                    date: "Feb 2019",
                    company: "MCC Wisdom (Wuhan) Engineering Technology Co., Ltd.",
                    desc: "VR/AR Engineer — Unity development, new technology validation, and solving technical challenges with the team."
                },
                {
                    date: "Oct 2022",
                    company: "Noda Japanese Language School",
                    desc: "Moved to Japan and studied Japanese, improving language and cultural understanding. Achieved JLPT N2."
                },
                {
                    date: "Jul 2023",
                    company: "NetWisdom Inc.",
                    desc: "Web development using Spring MVC / Spring Boot."
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            items: [
                {
                    name: "AI-Assisted Development (Codex / Copilot / Antigravity / Multi-Agent Workflow)",
                    level: 95
                },
                {
                    name: "macOS Product Development (SwiftUI / AppKit / Menu Bar Apps)",
                    level: 85
                },
                {
                    name: "Unity VR/AR Development (XR Interaction / AR Foundation / SteamVR)",
                    level: 95
                },
                {
                    name: "Java / Spring Boot (Backend / Microservices)",
                    level: 90
                },
                {
                    name: "C# (Unity / .NET)",
                    level: 90
                },
                {
                    name: "Cloud Native / AWS (DynamoDB / S3 / Serverless)",
                    level: 80
                },
                {
                    name: "gRPC / Protocol Buffers (IDL / High Performance)",
                    level: 80
                },
                {
                    name: "PostgreSQL / SQL (RDB / Data Modeling)",
                    level: 80
                },
                {
                    name: "React / TypeScript (Frontend)",
                    level: 65
                }
            ]
        }
    },
    ja: {
        nav: {
            home: "ホーム",
            about: "自己紹介",
            projects: "プロジェクト",
            timeline: "経歴",
            skills: "スキル"
        },
        contact: {
            title: "Contact",
            desc: "お気軽に以下のリンクからご連絡ください。",
            items: [
                { label: "GitHub", value: "https://github.com/heisyoudan", link: "https://github.com/heisyoudan" }
            ]
        },
        home: {
            greeting: "ようこそ、私の世界へ！",
            intro: "初めまして、",
            name: "Heisyoudan と申します。",
            codeName: "Heisyoudan",
            role: "Software Engineer & Indie Developer",
            subtitle: "Backend · macOS · XR · AI-Assisted Development",
            description: "バックエンドシステム、ネイティブ macOS アプリ、没入型 XR 体験にわたり、本番運用されるソフトウェアを開発しています。エンタープライズ決済基盤、個人開発でリリースした Mac アプリ、産業向け VR/AR ソリューションを手がけてきました。",
            viewWork: "プロジェクトを見る",
            viewPlaybook: "AI Playbook を見る",
            contact: "自己紹介"
        },
        about: {
            title: "自己紹介",
            content: `
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin-bottom: 15px;">// whoAmI()</div>
                <p><strong>東京</strong>を拠点に、バックエンドシステム、ネイティブ macOS アプリ、没入型 XR プロダクトにまたがって開発に取り組むソフトウェアエンジニアです。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// currentWork</div>
                <p>現在の業務は、Java / Spring Boot / AWS / gRPC / PostgreSQL などのクラウド技術を用いたエンタープライズ向けバックエンド開発が中心です。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// personalBuild</div>
                <p>クライアント・業務の傍らで、Swift / SwiftUI を用いた macOS アプリを個人で企画・開発・公開しています。ファイル整理ツールの <strong>Vortex</strong> は Mac App Store で公開中です。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// background</div>
                <p>これまでに数年にわたり、安全訓練、デジタルツイン、ハードウェア連携、HoloLens を活用した点検ツールなど、産業向け Unity VR/AR システムの開発に携わってきました。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// openSource</div>
                <p>また、オープンソースプロジェクトを通じて、AI 支援開発やマルチエージェントのエンジニアリングワークフローも探求しています。</p>

                <p>明確な要件、確実な実装、そして非同期の文書ベースのコミュニケーションを大切にしています。</p>
            `,
            career_title: "経歴概要",
            skills_title: "スキル概要"
        },
        projects: {
            title: "プロジェクト紹介",
            more: "詳しくはこちら",
            code: "コード",
            demo: "プレビュー",
            store: "App Store",
            roleLabel: "役割",
            whatIBuiltLabel: "実装内容",
            proprietary: "社内専用プロジェクト",
            items: [
                {
                    title: "Vortex（macOS メニューバー ダウンロード整理ツール）",
                    industry: "業種：macOS アプリ",
                    role: "Solo Developer（個人開発）",
                    whatIBuilt: "macOS のメニューバーから Downloads フォルダを整理できるファイルオーガナイザーです。新しくダウンロードしたファイルをメニューバーですぐに確認でき、種類ごとのフォルダへ自動整理、ファイルの開く・ドラッグ・アーカイブ・削除、履歴タイムラインからの安全な取り消しまでを一通りカバーしています。整理はすべてローカルで完結し、ファイルは ~/Downloads/Vortex 配下に整理されます。<br><br><b>担当範囲:</b> 企画・設計から SwiftUI による機能実装、Mac App Store での公開までを個人で一貫して担当しました。メニューバー常駐アプリの設計、ファイル監視・自動整理、Vortex Pro の課金実装も含みます。",
                    imgSrc: "/VS-Style-Portfolio/img/9.jpg",
                    link: "https://apps.apple.com/jp/app/vortex-file-organizer/id6772141575?mt=12",
                    tech: ["Swift", "SwiftUI", "StoreKit 2", "App Sandbox", "File System APIs"]
                },
                {
                    title: "大手企業向け決済基盤モダナイゼーションプロジェクト",
                    industry: "業種：金融・決済システム",
                    role: "Backend Engineer（バックエンドエンジニア）",
                    whatIBuilt: "大手企業の決済基盤を対象としたモダナイゼーションプロジェクトです。技術先行メンバーとして新技術の導入検証とチームの開発力向上を推進し、後続開発の実装方針整備を支援しました。<br><br><b>担当範囲:</b> gRPC および AWS DynamoDB の実現性検証と先行開発、技術実装レポートや開発ガイドの作成、さらに GitHub Copilot の活用検証と標準化された開発フローの整備を担当しました。",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "Spring Boot", "gRPC", "AWS", "DynamoDB"],
                    proprietary: true
                },
                {
                    title: "契約管理・決済代行システム",
                    industry: "業種：金融・決済システム",
                    role: "Backend Engineer（バックエンドエンジニア）",
                    whatIBuilt: "大規模な決済代行サービス向けの契約管理システムです。Kickflow のワークフローと連携し、申請、承認、管理までの業務を一貫して支える仕組みを構築しました。<br><br><b>担当範囲:</b> 基本設計から結合テストまで開発工程全体に参画し、BFF、バックエンド、共通 API の設計、PostgreSQL のデータベース設計、AWS 連携、React / TypeScript によるフロントエンド開発、テストおよびコードレビューを担当しました。",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS"],
                    proprietary: true
                },
                {
                    title: "VR消火訓練体験",
                    industry: "業種：水力発電",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "水力発電所の従業員向けに開発した VR 消火訓練アプリです。没入感のある空間表現によって、消火訓練の安全性と臨場感を高めました。実際の火を使わずに、火災に近い状況を再現した訓練を効率的に行えるようにしました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の検討、実装、テスト、受け入れ対応、納品支援まで一貫して担当しました。立ち上げからリリースまで単独で担当したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "Omit（macOS向けミニマルシステムモニター）",
                    industry: "業種：macOS アプリ",
                    role: "Solo Developer（個人開発）",
                    whatIBuilt: "SwiftUI で開発した macOS メニューバー向けのシステムモニタリングツールです。CPU、メモリ、ネットワークの状態を、ミニマルなデザインで軽快かつ直感的に確認できる体験を目指しました。<br><br><b>担当範囲:</b> UI / UX 設計、機能実装、アプリ公開までを個人で一貫して担当しました。Swift 未経験の状態から AI を活用して製品化まで進め、Apple らしいミニマルな操作体験を追求しました。",
                    imgSrc: "/VS-Style-Portfolio/img/8.png",
                    github: "https://github.com/heisyoudan/Omit",
                    tech: ["Swift", "SwiftUI", "MenuBarExtra", "macOS"]
                },
                {
                    title: "ARグラス巡視支援アプリ",
                    industry: "業種：水力発電",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "現場巡視を支援する AR アプリです。作業者は AR グラス上でデジタル化された作業手順を確認でき、現場の映像と音声を遠隔の技術者へリアルタイムに共有できます。遠隔支援側は、注記付きの画像や指示内容を作業者の視界上に表示でき、巡視の効率向上と円滑な連携を実現しました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の検討、実装、テスト、受け入れ対応、納品支援まで一貫して担当しました。立ち上げからリリースまで単独で担当したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "鄂州製鋼所デジタルツインプロジェクト",
                    industry: "業種：製鋼業",
                    role: "Unity エンジニア",
                    whatIBuilt: "製鋼所の生産現場をデジタル空間上に再現し、現場で発生するさまざまなデータを連携・集約できるシステムを構築しました。三次元空間による可視化により、現地に行かなくても生産状況を直感的に把握できるようにし、関連データや映像との連携によって、より正確かつ迅速な状況判断を支援しました。<br><br><b>担当範囲:</b> Unity フロントエンドの実装を一貫して担当し、API 連携、3D モデル制御、ユーザーインタラクションの実装を行いました。",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "Hi5グローブ対応没入型訓練システム",
                    industry: "業種：水力発電",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "Hi5 VR グローブを活用した没入型訓練システムです。仮想空間内で、繰り返し実技確認が必要な訓練を高い再現度で体験できるようにし、訓練効率と現場作業への習熟度向上を支援しました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の検討、実装、テスト、受け入れ対応、納品支援まで一貫して担当しました。立ち上げからリリースまで単独で担当したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "高所作業墜落体験",
                    industry: "業種：水力発電",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "高所作業における安全教育向けの没入型体験アプリです。墜落事故の状況や恐怖感を再現することで、作業者の安全意識を高め、危険認識の向上と事故防止につなげました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の検討、実装、テスト、受け入れ対応、納品支援まで一貫して担当しました。立ち上げからリリースまで単独で担当したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "AI Agent Playbook",
                    industry: "オープンソース · 開発ツール",
                    role: "Author / Independent（執筆・個人開発）",
                    whatIBuilt: "大規模決済プロジェクトでの 2 年間の実運用から抽出した、AI エージェント協業の実践方法論をオープンソースとして公開（MIT）。タスク分解、コンテキスト設計、制約の体系化、品質ゲート、ワークフローを製品として設計する方法を扱います。<br><br>本方法論は、私が設計・実装した社内のエージェント協業フレームワーク（SwiftUI + CLI、JSON ベースの状態機械とアトミックロールバックを搭載）でコードレベルに検証されています。",
                    imgSrc: "/VS-Style-Portfolio/img/10.svg",
                    github: "https://github.com/heisyoudan/ai-agent-playbook",
                    tech: ["Swift", "SwiftUI", "AI Agents", "ワークフロー設計"]
                }
            ]
        },
        timeline: {
            title: "Timeline",
            items: [
                {
                    date: "2014年12月",
                    company: "武漢國測三連水電設備有限公司",
                    desc: "プロジェクトマネージャーに従事。"
                },
                {
                    date: "2018年5月",
                    company: "武漢藍海科創技術有限公司",
                    desc: "VRエンジニアとして、Unityを使用した仮想現実プロジェクトの開発と技術研究を担当。"
                },
                {
                    date: "2019年2月",
                    company: "中冶智誠（武漢）工程技術有限公司",
                    desc: "VR/ARエンジニアとして、Unityでの開発と新技術の検証に従事し、チームと共に技術課題を解決。"
                },
                {
                    date: "2022年10月",
                    company: "能達日本語学校",
                    desc: "来日後、日本語学校で学習を進め、文化理解と語学力を向上。JLPT N2 を取得。"
                },
                {
                    date: "2023年7月",
                    company: "NetWisdom株式会社",
                    desc: "Spring MVC / Spring Boot などを用いた Web 開発に従事。"
                }
            ]
        },
        skills: {
            title: "Skills",
            items: [
                {
                    name: "AI-Assisted Development (Codex / Copilot / Antigravity / Multi-Agent Workflow)",
                    level: 95
                },
                {
                    name: "macOS Product Development (SwiftUI / AppKit / Menu Bar Apps)",
                    level: 85
                },
                {
                    name: "Unity VR/AR Development (XR Interaction / AR Foundation / SteamVR)",
                    level: 95
                },
                {
                    name: "Java / Spring Boot (Backend / Microservices)",
                    level: 90
                },
                {
                    name: "C# (Unity / .NET)",
                    level: 90
                },
                {
                    name: "Cloud Native / AWS (DynamoDB / S3 / Serverless)",
                    level: 80
                },
                {
                    name: "gRPC / Protocol Buffers (IDL / High Performance)",
                    level: 80
                },
                {
                    name: "PostgreSQL / SQL (RDB / Data Modeling)",
                    level: 80
                },
                {
                    name: "React / TypeScript (Frontend)",
                    level: 65
                }
            ]
        }
    },
    zh: {
        nav: {
            home: "首页",
            about: "关于我",
            projects: "项目展示",
            timeline: "经历",
            skills: "技能"
        },
        contact: {
            title: "Contact",
            desc: "欢迎通过以下方式与我联系。",
            items: [
                { label: "GitHub", value: "https://github.com/heisyoudan", link: "https://github.com/heisyoudan" }
            ]
        },
        home: {
            greeting: "欢迎来到我的世界！",
            intro: "你好，",
            name: "我是何晓丹。",
            codeName: "何晓丹",
            role: "Software Engineer & Indie Developer",
            subtitle: "Backend · macOS · XR · AI-Assisted Development",
            description: "我构建可投入生产环境的软件，覆盖后端系统、原生 macOS 应用与沉浸式 XR 体验。工作范围包括企业支付平台、独立上架的 Mac 应用，以及工业 VR/AR 解决方案。",
            viewWork: "查看项目",
            viewPlaybook: "查看 AI Playbook",
            contact: "关于我"
        },
        about: {
            title: "关于我",
            content: `
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin-bottom: 15px;">// whoAmI()</div>
                <p>我是一名常驻<strong>东京</strong>的软件工程师，工作覆盖后端系统、原生 macOS 应用与沉浸式 XR 产品。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// currentWork</div>
                <p>近期的专业工作聚焦于企业级后端开发，主要使用 Java、Spring Boot、AWS、gRPC、PostgreSQL 及相关的云原生技术。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// personalBuild</div>
                <p>在客户与企业项目之外，我使用 Swift 和 SwiftUI 独立设计并发布 macOS 应用。文件整理工具 <strong>Vortex</strong> 目前已上架 Mac App Store。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// background</div>
                <p>职业生涯早期，我花了几年的时间构建工业级 Unity VR/AR 系统，包括安全培训、数字孪生、硬件交互，以及基于 HoloLens 的巡检工具。</p>

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// openSource</div>
                <p>我也通过开源项目探索 AI 辅助软件开发与多智能体工程工作流。</p>

                <p>我重视清晰的需求、可靠的实现，以及异步的文字沟通。</p>
            `,
            career_title: "经历概要",
            skills_title: "技能概要"
        },
        projects: {
            title: "项目介绍",
            more: "了解更多",
            code: "代码",
            demo: "预览",
            store: "App Store",
            roleLabel: "角色",
            whatIBuiltLabel: "我做了什么",
            proprietary: "企业专有项目",
            items: [
                {
                    title: "Vortex（macOS 菜单栏下载整理工具）",
                    industry: "行业：macOS 应用",
                    role: "独立开发者（Solo Developer）",
                    whatIBuilt: "从 macOS 菜单栏掌控下载文件夹的文件整理工具，帮你告别下载杂乱。可在菜单栏即时查看新下载的文件，按类型自动整理到清晰文件夹，支持打开、拖拽、归档、删除等快捷操作，并通过清晰的时间线安全撤销最近的移动。所有整理均在本地完成，文件默认整理到 ~/Downloads/Vortex。<br><br><b>担当范围:</b> 从需求策划、SwiftUI 功能开发到 Mac App Store 上架发布全程独立负责，涵盖菜单栏常驻应用设计、文件监控与自动整理、Vortex Pro 内购等功能实现。",
                    imgSrc: "/VS-Style-Portfolio/img/9.jpg",
                    link: "https://apps.apple.com/us/app/vortex-file-organizer/id6772141575?mt=12",
                    tech: ["Swift", "SwiftUI", "StoreKit 2", "App Sandbox", "文件系统 API"]
                },
                {
                    title: "大型企业支付平台现代化重构",
                    industry: "行业：金融·支付系统",
                    role: "后端工程师（Backend Engineer）",
                    whatIBuilt: "面向大型企业支付基础设施的现代化重构项目。作为技术先行成员，推动新技术导入验证与团队开发能力提升，为后续实现方案奠定基础。<br><br><b>担当范围:</b> 负责 gRPC 与 AWS DynamoDB 的可行性验证及先行开发、技术实现报告与开发指南的编写，以及 GitHub Copilot 的应用验证与标准化开发流程的整理。",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "Spring Boot", "gRPC", "AWS", "DynamoDB"],
                    proprietary: true
                },
                {
                    title: "契约管理·代收付系统",
                    industry: "行业：金融·支付系统",
                    role: "后端工程师（Backend Engineer）",
                    whatIBuilt: "面向大规模代收付服务的契约管理系统，与 Kickflow 工作流联动，构建了从申请、审批到管理的全流程业务支撑体系。<br><br><b>担当范围:</b> 参与了从基本设计到集成测试的完整开发流程，负责 BFF、后端、共通 API 的设计、PostgreSQL 数据库设计、AWS 集成、React / TypeScript 前端开发、测试及代码评审。",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS"],
                    proprietary: true
                },
                {
                    title: "VR 消防训练体验",
                    industry: "行业：水力发电",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "面向水电站员工开发的 VR 灭火训练应用。通过沉浸式空间表现提升灭火训练的安全性与临场感，将训练内容在 VR 中还原，无需动用真火即可在接近火灾的环境下高效开展训练。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "Omit（macOS 极简系统监控）",
                    industry: "行业：macOS 应用",
                    role: "独立开发者（Solo Developer）",
                    whatIBuilt: "基于 SwiftUI 开发的 macOS 菜单栏系统监控工具，以极简设计实现对 CPU、内存、网络状态的轻量、直观监控体验。<br><br><b>担当范围:</b> 从 UI / UX 设计、功能开发到应用上架全程独立完成。在 Swift 零基础的情况下借助 AI 完成了产品化，打磨出符合 Apple 原生设计语言的极简操作体验。",
                    imgSrc: "/VS-Style-Portfolio/img/8.png",
                    github: "https://github.com/heisyoudan/Omit",
                    tech: ["Swift", "SwiftUI", "MenuBarExtra", "macOS"]
                },
                {
                    title: "AR 眼镜巡检支援应用",
                    industry: "行业：水力发电",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "支持现场巡检的 AR 应用。作业者可通过 AR 眼镜查看数字化作业指引，并将现场画面与音频实时共享给远端技术人员；远程支援方可将带有标注的图片或指令推送到作业者的视野中，提升巡检效率与协作质量。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "鄂州钢厂数字孪生项目",
                    industry: "行业：炼钢业",
                    role: "Unity 工程师",
                    whatIBuilt: "以数字孪生方式构建钢厂生产现场，将多种现场数据源打通并在系统中集中呈现。通过三维空间可视化，使管理者无需到现场即可直观掌握生产状态，并结合关联数据与视频进行联动，支撑更准确、迅速的多维决策。<br><br><b>担当范围:</b> 全程负责 Unity 前端开发，包括 API 数据对接、3D 模型控制、用户交互功能的实现。",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "Hi5 手套沉浸式训练系统",
                    industry: "行业：水力发电",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "基于 Hi5 VR 手套的沉浸式训练系统。通过在虚拟空间中高还原度地体验需要反复实操确认的训练内容，提升训练效率及现场作业的熟练度。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "高处作业坠落体验",
                    industry: "行业：水力发电",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "面向高处作业安全教育的沉浸式体验应用。通过再现坠落事故的情境与心理紧张感，提升作业人员安全意识，促进危险认知能力提升和事故预防。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "AI Agent Playbook",
                    industry: "开源 · 开发工具",
                    role: "作者 · 独立开发",
                    whatIBuilt: "开源分享（MIT）在大规模支付项目中两年实战沉淀的 AI 智能体协作方法论，涵盖任务拆解、上下文设计、约束体系、质量门禁，以及把工作流当作产品来设计。<br><br>相关方法论已通过我设计并实现的内部智能体协作框架（SwiftUI + CLI，含 JSON 状态机与原子回滚）完成代码级验证；Playbook 本身已在 GitHub 公开。",
                    imgSrc: "/VS-Style-Portfolio/img/10.svg",
                    github: "https://github.com/heisyoudan/ai-agent-playbook",
                    tech: ["Swift", "SwiftUI", "AI Agents", "工作流设计"]
                }
            ]
        },
        timeline: {
            title: "Timeline",
            items: [
                {
                    date: "2014年12月",
                    company: "武汉国测三联水电设备有限公司",
                    desc: "担任项目经理。"
                },
                {
                    date: "2018年5月",
                    company: "武汉蓝海科创技术有限公司",
                    desc: "作为 VR 工程师，负责使用 Unity 开发虚拟现实项目并进行技术研究。"
                },
                {
                    date: "2019年2月",
                    company: "中冶智诚（武汉）工程技术有限公司",
                    desc: "作为 VR/AR 工程师，使用 Unity 开发并验证新技术，与团队一起解决技术难题。"
                },
                {
                    date: "2022年10月",
                    company: "能达日语学校",
                    desc: "来日后在日语学校学习，提升语言能力与文化理解，并取得 JLPT N2。"
                },
                {
                    date: "2023年7月",
                    company: "NetWisdom株式会社",
                    desc: "从事基于 Spring MVC / Spring Boot 的 Web 开发。"
                }
            ]
        },
        skills: {
            title: "Skills",
            items: [
                {
                    name: "AI-Assisted Development (Codex / Copilot / Antigravity / Multi-Agent Workflow)",
                    level: 95
                },
                {
                    name: "macOS Product Development (SwiftUI / AppKit / Menu Bar Apps)",
                    level: 85
                },
                {
                    name: "Unity VR/AR Development (XR Interaction / AR Foundation / SteamVR)",
                    level: 95
                },
                {
                    name: "Java / Spring Boot (Backend / Microservices)",
                    level: 90
                },
                {
                    name: "C# (Unity / .NET)",
                    level: 90
                },
                {
                    name: "Cloud Native / AWS (DynamoDB / S3 / Serverless)",
                    level: 80
                },
                {
                    name: "gRPC / Protocol Buffers (IDL / High Performance)",
                    level: 80
                },
                {
                    name: "PostgreSQL / SQL (RDB / Data Modeling)",
                    level: 80
                },
                {
                    name: "React / TypeScript (Frontend)",
                    level: 65
                }
            ]
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getInitialLanguage);

    const changeLanguage = (lang) => {
        if (!SUPPORTED_LANGUAGES.includes(lang)) return;
        setLanguage(lang);
        // Persist the manual preference — it is always respected afterwards.
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            /* ignore storage errors */
        }
    };

    const value = {
        language,
        setLanguage: changeLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
