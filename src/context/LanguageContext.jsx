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
            name: "He Xiaodan.",
            codeName: "He Xiaodan",
            role: "Software Engineer & Indie Developer",
            subtitle: "Backend · Full Stack · Product Engineering · AI Native Development",
            description: "Building production software across enterprise systems, indie products, and international client projects — with AI deeply integrated into real development and delivery workflows.",
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

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// aiNativeDev</div>
                <p>AI-assisted development and multi-agent engineering workflows are part of my active engineering practice — applied in enterprise backend work, independent product development, international client delivery, and workflow research. Architecture decisions, requirements, acceptance criteria, and final delivery remain under human control. AI agents operate under structured task contracts, quality gates, and explicit review.</p>

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
                    title: "International EdTech Platform Modernization",
                    industry: "Domain: EdTech · International Freelance",
                    role: "Independent Full-Stack Developer",
                    whatIBuilt: "Took ownership of and continued development on a live EdTech platform for an international client. The system spans Unity, C#, backend services, Azure, and MySQL. Conducted end-to-end architecture investigation, reviewed the cloud and database environment, established a reliable technical baseline, and advanced curriculum and localization architecture.<br><br><b>Scope:</b> Codebase investigation, Unity and backend architecture analysis, Azure environment review, database schema analysis, implementation, testing, technical documentation, and asynchronous international client communication across time zones.<br><br><b>Maestro / AI engineering practice:</b> Applied my own Maestro agent workflow to live commercial delivery — organizing AI Coding Agents through task contracts, role separation, isolated context, and quality gates to support investigation, implementation, verification, and delivery across Unity, backend, Azure, and database layers.",
                    imgSrc: "/VS-Style-Portfolio/img/edtech.png",
                    tech: ["Unity", "C#", "Azure", "MySQL", "Localization", "Full-Stack"],
                    privateLabel: "Upwork · Verified Contract"
                },
                {
                    title: "Enterprise Payment Platform Modernization",
                    industry: "Domain: FinTech · Payment Systems",
                    role: "Backend Engineer",
                    whatIBuilt: "Contributed to a large-scale enterprise payment infrastructure modernization project, participating across the full software development lifecycle — from design through implementation, unit testing, and integration testing. As a technical lead-in member, led feasibility validation and early implementation of gRPC and AWS DynamoDB, producing technical implementation reports and development guides that served as a foundation for downstream teams.<br><br><b>Scope:</b> Design documentation, Java / Spring Boot backend implementation, unit and integration testing, technical investigation, PoC, code review, technical documentation, and new technology adoption validation.<br><br><b>Long-term Agent Engineering practice:</b> Since Coding Agents became practically viable, sustained over a year of high-intensity real-world practice within a large-scale enterprise engineering environment. The workflow progressively evolved from AI-assisted development toward highly Agent-driven delivery — with Coding Agents actively involved across requirements understanding, design, implementation, testing, review, and technical documentation. Built hands-on experience in task decomposition, context management, multi-agent collaboration, verification, quality control, and human-in-the-loop practices under production engineering conditions.",
                    imgSrc: "/VS-Style-Portfolio/img/enterprise-payment.png",
                    tech: ["Java", "Spring Boot", "gRPC", "AWS", "DynamoDB", "AI-Assisted Dev"],
                    proprietary: true
                },
                {
                    title: "Vortex — Native macOS File Organizer",
                    industry: "Domain: macOS · Productivity",
                    role: "Solo Product Developer",
                    whatIBuilt: "Designed, developed, and shipped a native macOS file organization utility to the Mac App Store. From the menu bar you can instantly see newly downloaded files, auto-organize them into type-based folders, and open, drag, archive, or delete them — with a timeline that lets you safely undo recent moves. Everything runs locally and files are organized under ~/Downloads/Vortex.<br><br><b>Scope:</b> Product planning, UX design, SwiftUI implementation, menu bar app architecture, file watching and auto-organization, and StoreKit 2 in-app purchases (Vortex Pro) — end-to-end from product definition through App Store release.",
                    imgSrc: "/VS-Style-Portfolio/img/vortex-app.jpg",
                    link: "https://apps.apple.com/us/app/vortex-file-organizer/id6772141575?mt=12",
                    tech: ["Swift", "SwiftUI", "StoreKit 2", "App Sandbox", "File System APIs"]
                },
                {
                    title: "Contract Management & Payment System",
                    industry: "Domain: FinTech · Payment Systems",
                    role: "Backend Engineer",
                    whatIBuilt: "Built a contract management system for a large-scale payment agency service, integrated with the Kickflow workflow platform to support the full flow of applications, approvals, and management.<br><br><b>Scope:</b> Participated across the complete enterprise software development lifecycle — from basic design and detailed design through implementation, unit testing, and integration testing. Responsible for BFF, backend, and shared API design, PostgreSQL database design, AWS integration, React / TypeScript frontend development, testing, and code review.",
                    imgSrc: "/VS-Style-Portfolio/img/enterprise-contract.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS"],
                    proprietary: true
                },
                {
                    title: "Maestro",
                    industry: "Domain: AI Engineering · Developer Tools",
                    role: "Author · Independent Engineer",
                    whatIBuilt: "Designed and continuously maintains Maestro, an agent-first workflow controller for organizing AI Coding Agents in software development. It transforms requirements into tasks with explicit context, responsibilities, and acceptance criteria, then coordinates roles including Dev, QA, and Sage through development, independent verification, rollback, and closure.<br><br><b>Workflow:</b> Requirement → Task Contract → Dev → QA → Sage / Human Gate → Close. Each role works in isolated context, passing tasks, artifacts, evidence, and lifecycle state through shared project truth. Failed verification returns to development with evidence attached; successful verification advances state.<br><br><b>Core mechanisms:</b> Task Contract, Context Isolation, Shared Truth, Quality Gate, Atomic Rollback, Human Authority, and replaceable AI Worker / Provider Adapters.<br><br>Maestro has evolved through long-term real-world project use and now serves as personal workflow infrastructure across independent products and commercial client delivery.",
                    imgSrc: "/VS-Style-Portfolio/img/maestro.png",
                    tech: ["Multi-Agent", "CLI", "State Machine", "Context Engineering", "Quality Gates"],
                    privateLabel: "Private Repository · Personal Tooling"
                },
                {
                    title: "AI Agent Playbook",
                    industry: "Domain: Open Source · AI Engineering",
                    role: "Author · Independent",
                    whatIBuilt: "An ongoing open-source distillation of AI Agent software engineering methodology, built from hands-on experience across enterprise projects, independent development, and commercial client delivery. Abstracts real engineering experience into reusable principles: Task Decomposition, Context Isolation, Artifact, Verification, Gate, Contract, Convergence, and Human Authority.<br><br>The playbook focuses on integrating Coding Agents into verifiable software engineering workflows, and is continuously refined through real project practice. Related methods are tooled and validated in Maestro. Published on GitHub under MIT.",
                    imgSrc: "/VS-Style-Portfolio/img/ai-playbook.png",
                    github: "https://github.com/heisyoudan/ai-agent-playbook",
                    tech: ["AI Agents", "Agent Workflow", "Context Engineering", "Software Engineering", "Open Source"]
                },
                {
                    title: "Omit — Minimal macOS System Monitor",
                    industry: "Domain: macOS · Open Source",
                    role: "Solo Developer",
                    whatIBuilt: "Designed and shipped a minimal macOS menu bar system monitor built with SwiftUI, delivering a lightweight and intuitive way to check CPU, memory, and network status.<br><br><b>Scope:</b> End-to-end independent development — UI/UX design, SwiftUI implementation, and open-source release. Combined AI-assisted development with deliberate focus on clean, minimal design to deliver a native macOS experience.",
                    imgSrc: "/VS-Style-Portfolio/img/omit-monitor.png",
                    github: "https://github.com/heisyoudan/Omit",
                    tech: ["Swift", "SwiftUI", "MenuBarExtra", "macOS"]
                },
                {
                    title: "VR Fire Extinguishing Training",
                    industry: "Domain: Industrial XR · Safety Training",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "Developed a VR fire-extinguishing training application for hydroelectric power plant staff. By reproducing fire scenarios in immersive 3D space, trainees experience realistic safety training without using open flames — improving both training quality and safety.<br><br><b>Scope:</b> End-to-end delivery as an independent engineer: requirement analysis, proposal and system design, technical architecture, Unity VR implementation, testing, acceptance support, and final delivery.",
                    imgSrc: "/VS-Style-Portfolio/img/vr-fire-training.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "C#", "VR", "Safety Training"]
                },
                {
                    title: "AR Glasses Inspection Support App",
                    industry: "Domain: Industrial AR · Inspection",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "Built an AR application for HoloLens that supports on-site industrial inspections. Workers view digitized work instructions overlaid in their field of view, while sharing live video and audio with remote engineers who can annotate and push guidance directly into the worker's AR view — enabling real-time remote collaboration across distance.<br><br><b>Scope:</b> End-to-end delivery as an independent engineer: requirement analysis, HoloLens AR system design, Unity implementation, real-time video / audio integration, annotation overlay, testing, and delivery support.",
                    imgSrc: "/VS-Style-Portfolio/img/ar-glasses.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "HoloLens", "AR", "Remote Collaboration"]
                },
                {
                    title: "Steel Mill Digital Twin Visualization",
                    industry: "Domain: Industrial Visualization · Digital Twin",
                    role: "Unity Developer",
                    whatIBuilt: "Built a real-time digital twin system that recreates a steel mill's production floor in 3D space, aggregating live data from multiple on-site sources — MQTT feeds, REST APIs, and sensor streams — into a unified view. Enables managers to grasp production status intuitively without visiting the site, supporting faster and more accurate decisions.<br><br><b>Scope:</b> Unity frontend implementation — MQTT and REST API data integration, real-time 3D model state control, multi-source data binding, and user interaction design.",
                    imgSrc: "/VS-Style-Portfolio/img/xr-digital-twin.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT", "Digital Twin", "Real-time Data"]
                },
                {
                    title: "Hi5 Glove Immersive Training System",
                    industry: "Domain: Industrial VR · Immersive Training",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "Developed an immersive training system using Hi5 VR gloves, enabling hands-on procedural training in virtual space with high physical fidelity. Trainees perform real hand gestures and interact with virtual objects, improving both training efficiency and on-site proficiency.<br><br><b>Scope:</b> End-to-end delivery as an independent engineer: requirement analysis, Hi5 hardware SDK integration, hand interaction system design, Unity implementation, testing, and delivery support.",
                    imgSrc: "/VS-Style-Portfolio/img/vr-hi5-gloves.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Hand Interaction", "VR"]
                },
                {
                    title: "High-Altitude Fall Safety Experience",
                    industry: "Domain: Industrial VR · Safety Experience",
                    role: "Unity / XR Engineer",
                    whatIBuilt: "Built a VR safety training experience that immerses workers in a physically simulated high-altitude fall scenario. By triggering a visceral fear response in a controlled virtual environment, the application builds genuine safety awareness and risk recognition that standard training cannot achieve.<br><br><b>Scope:</b> End-to-end delivery as an independent engineer: requirement analysis, VR physics simulation design, height and fall scenario construction, Unity implementation, testing, and delivery support.",
                    imgSrc: "/VS-Style-Portfolio/img/vr-fall-safety.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "VR", "Physics Simulation", "Safety Training"]
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
                    date: "Jul 2023 – Present",
                    company: "NetWisdom Inc.",
                    desc: "Enterprise backend and full-stack engineer at a Japan-based software company. Work spans Java / Spring Boot web development, enterprise payment platform modernization (gRPC, AWS, DynamoDB), backend and BFF implementation, technical investigation, code review, and validation of AI-assisted development tooling."
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            groups: [
                { name: "Backend & Enterprise", items: ["Java", "Spring Boot", "REST APIs", "gRPC", "PostgreSQL", "SQL"] },
                { name: "Frontend & Full-Stack", items: ["React", "TypeScript", "JavaScript"] },
                { name: "Cloud & Infrastructure", items: ["AWS", "Azure", "DynamoDB", "MySQL"] },
                { name: "Native & Product Engineering", items: ["Swift", "SwiftUI", "macOS", "StoreKit 2", "App Sandbox"] },
                { name: "XR & Real-Time", items: ["Unity", "C#", "VR", "AR", "HoloLens", "Digital Twin"] },
                { name: "AI-Native Development", items: ["GitHub Copilot", "Codex", "Multi-Agent Workflow", "Context Engineering", "Agent-assisted QA", "Human-in-the-loop Validation"] }
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
            name: "Heisyoudan と申します。",
            codeName: "Heisyoudan",
            role: "Software Engineer & Indie Developer",
            subtitle: "Backend · Full Stack · Product Engineering · AI Native Development",
            description: "エンタープライズシステム、個人プロダクト、海外クライアントプロジェクトにわたり本番ソフトウェアを構築し、AI を実際の開発・納品フローに深く組み込んでいます。",
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

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// aiNativeDev</div>
                <p>AI 支援開発とマルチエージェントワークフローは、エンタープライズ開発・独立製品・国際クライアント納品・ワークフロー研究にわたる実際のエンジニアリング実践の一部です。アーキテクチャ設計、要件定義、受入基準、最終納品は人間が管理します。AI エージェントは構造化されたタスク契約、品質ゲート、明示的なレビューのもとで動作します。</p>

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
                    title: "国際 EdTech プラットフォーム モダナイゼーション",
                    industry: "領域：EdTech · 国際フリーランス",
                    role: "Independent Full-Stack Developer（独立フルスタック開発者）",
                    whatIBuilt: "国際クライアントの稼働中 EdTech プラットフォームを引き継ぎ、開発を継続。Unity / C# / バックエンド / Azure / MySQL にまたがる既存システムのアーキテクチャ調査・クラウドおよびデータベース環境確認・信頼できる技術ベースラインの確立を経て、カリキュラムおよびローカライゼーションアーキテクチャの改善開発を推進しました。<br><br><b>担当範囲：</b>コードベース調査、Unity・バックエンドアーキテクチャ分析、Azure 環境確認、DB スキーマ分析、実装、テスト、技術ドキュメント整備、時差をまたぐ非同期の国際クライアントコミュニケーション。<br><br><b>Maestro / AI エンジニアリング実践：</b>自ら設計した Maestro エージェントワークフローを実際の商業納品に適用。タスク契約・ロール分離・独立コンテキスト・品質ゲートによって AI Coding Agents を統制し、Unity / バックエンド / Azure / データベースにまたがる調査・実装・検証・納品を支援。",
                    imgSrc: "/VS-Style-Portfolio/img/edtech.png",
                    tech: ["Unity", "C#", "Azure", "MySQL", "ローカライゼーション", "Full-Stack"],
                    privateLabel: "Upwork · 契約確認済み"
                },
                {
                    title: "大手企業向け決済基盤モダナイゼーション",
                    industry: "領域：金融 · 決済システム",
                    role: "Backend Engineer（バックエンドエンジニア）",
                    whatIBuilt: "大規模エンタープライズ決済インフラのモダナイゼーションプロジェクトに参画し、設計から実装・単体テスト・結合テストまでの完整なソフトウェア開発ライフサイクルを担当しました。技術先行メンバーとして gRPC および AWS DynamoDB の実現性検証と先行開発を担い、技術実装レポートと開発ガイドを作成して後続チームの開発基盤を整備しました。<br><br><b>担当範囲：</b>設計書作成、Java / Spring Boot バックエンド実装、単体・結合テスト、技術調査、PoC、コードレビュー、技術ドキュメント作成、新技術導入検証。<br><br><b>長期 Agent Engineering 実践：</b>Coding Agents が実用段階に入って以降、大規模エンタープライズ開発環境において1年以上にわたり高強度で実践継続。AI-assisted development から高度な Agent-driven な開発フローへの段階的な進化を経験しました。Coding Agents は要件理解・設計・実装・テスト・レビュー・技術ドキュメントなどの工程に深く関与しており、Task Decomposition、Context Management、Multi-Agent コラボレーション、検証、品質管理、Human-in-the-loop の実践知見を積み上げました。",
                    imgSrc: "/VS-Style-Portfolio/img/enterprise-payment.png",
                    tech: ["Java", "Spring Boot", "gRPC", "AWS", "DynamoDB", "AI-Assisted Dev"],
                    proprietary: true
                },
                {
                    title: "Vortex（macOS メニューバー ダウンロード整理ツール）",
                    industry: "領域：macOS · Productivity",
                    role: "Solo Product Developer（独立プロダクト開発者）",
                    whatIBuilt: "macOS ネイティブのファイル整理ユーティリティを設計・開発し、Mac App Store にリリースしました。メニューバーから新着ダウンロードをすぐに確認でき、種類別フォルダへの自動整理・開く / ドラッグ / アーカイブ / 削除などの操作、タイムラインから安全に移動を取り消す機能を提供。整理はすべてローカルで完結し、ファイルは ~/Downloads/Vortex に整理されます。<br><br><b>担当範囲：</b>製品企画・UX 設計・SwiftUI 実装・メニューバーアプリのアーキテクチャ設計・ファイル監視と自動整理・Vortex Pro の StoreKit 2 課金実装まで、製品定義から App Store リリースまでを一貫して担当。",
                    imgSrc: "/VS-Style-Portfolio/img/vortex-app.jpg",
                    link: "https://apps.apple.com/jp/app/vortex-file-organizer/id6772141575?mt=12",
                    tech: ["Swift", "SwiftUI", "StoreKit 2", "App Sandbox", "File System APIs"]
                },
                {
                    title: "契約管理・決済代行システム",
                    industry: "領域：金融 · 決済システム",
                    role: "Backend Engineer（バックエンドエンジニア）",
                    whatIBuilt: "大規模決済代行サービス向けの契約管理システムを構築し、Kickflow ワークフローと連携して申請・承認・管理の全業務フローを支える仕組みを実現しました。<br><br><b>担当範囲：</b>基本設計・詳細設計から実装・単体テスト・結合テストまでのエンタープライズ開発フロー全体に参画。BFF・バックエンド・共通 API 設計、PostgreSQL データベース設計、AWS 連携、React / TypeScript フロントエンド開発、テスト、コードレビューを担当。",
                    imgSrc: "/VS-Style-Portfolio/img/enterprise-contract.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS"],
                    proprietary: true
                },
                {
                    title: "Maestro",
                    industry: "領域：AI Engineering · Developer Tools",
                    role: "Author / Solo Engineer（設計・開発者）",
                    whatIBuilt: "Maestro を設計し、長期にわたってメンテナンスを続けています。Maestro は AI Coding Agents をソフトウェア開発に組み込むためのエージェントファーストなワークフローコントローラーです。要件を明確なコンテキスト・責任・受け入れ基準を持つタスクに変換し、Dev / QA / Sage などのロールを通じて開発・独立検証・ロールバック・クローズのサイクルを協調します。<br><br><b>ワークフロー：</b>Requirement → Task Contract → Dev → QA → Sage / Human Gate → Close。各ロールは隔離されたコンテキストで動作し、共有プロジェクト状態を通じて Task・Artifact・Evidence・ライフサイクル情報を受け渡します。検証失敗時は証拠付きで開発に差し戻し、通過後は状態を進めます。<br><br><b>コアメカニズム：</b>Task Contract、Context Isolation、Shared Truth、Quality Gate、Atomic Rollback、Human Authority、交換可能な AI Worker / Provider Adapter。<br><br>Maestro は長期にわたる実プロジェクトでの使用を通じて進化を続け、現在は個人のワークフロー基盤として、個人プロダクト開発および商業クライアント納品に活用されています。",
                    imgSrc: "/VS-Style-Portfolio/img/maestro.png",
                    tech: ["Multi-Agent", "CLI", "State Machine", "Context Engineering", "Quality Gates"],
                    privateLabel: "Private Repository · Personal Tooling"
                },
                {
                    title: "AI Agent Playbook",
                    industry: "領域：Open Source · AI Engineering",
                    role: "Author / Independent（執筆・個人開発）",
                    whatIBuilt: "大規模企業プロジェクト・独立開発・商業クライアント納品を通じて形成した AI Agent ソフトウェアエンジニアリング方法論を継続的に整理し、オープンソースとして公開しています。実際の開発経験を Task Decomposition、Context Isolation、Artifact、Verification、Gate、Contract、Convergence、Human Authority などの再利用可能な工程原則に抽象化しています。<br><br>Coding Agents を検証可能なソフトウェアエンジニアリングフローに統合する方法に焦点を当て、実際のプロジェクト実践を通じて継続的に修正・拡張しています。関連する方法論は Maestro でもツール化・検証されており、Playbook 自体は GitHub にて MIT ライセンスで公開しています。",
                    imgSrc: "/VS-Style-Portfolio/img/ai-playbook.png",
                    github: "https://github.com/heisyoudan/ai-agent-playbook",
                    tech: ["AI Agents", "Agent Workflow", "Context Engineering", "Software Engineering", "Open Source"]
                },
                {
                    title: "Omit（macOS ミニマルシステムモニター）",
                    industry: "領域：macOS · Open Source",
                    role: "Solo Developer（個人開発）",
                    whatIBuilt: "SwiftUI を用いた macOS メニューバー向けシステムモニターを設計・開発し、CPU・メモリ・ネットワーク状態をミニマルなデザインで軽快かつ直感的に確認できる体験を実現しました。<br><br><b>担当範囲：</b>UI / UX 設計・SwiftUI 実装・オープンソース公開まで一貫して担当。AI-assisted development を活用して実装・製品化・公開までの完整な開発フローを完遂し、Apple らしいミニマルな操作体験を追求しました。",
                    imgSrc: "/VS-Style-Portfolio/img/omit-monitor.png",
                    github: "https://github.com/heisyoudan/Omit",
                    tech: ["Swift", "SwiftUI", "MenuBarExtra", "macOS"]
                },
                {
                    title: "VR 消火訓練体験",
                    industry: "領域：Industrial XR · 安全訓練",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "水力発電所の従業員向けに VR 消火訓練アプリケーションを開発しました。火災シナリオを没入型 3D 空間で再現することで、実際の火を使わずにリアルな安全訓練を実施でき、訓練品質と安全性を向上させます。<br><br><b>担当範囲：</b>要件分析・提案と設計・技術アーキテクチャ・Unity VR 実装・テスト・受け入れ対応・最終納品まで、独立エンジニアとして一貫して担当。",
                    imgSrc: "/VS-Style-Portfolio/img/vr-fire-training.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "C#", "VR", "Safety Training"]
                },
                {
                    title: "AR グラス巡視支援アプリ",
                    industry: "領域：Industrial AR · 設備点検",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "HoloLens を使用した現場巡視支援 AR アプリを構築しました。作業者は AR グラス上でデジタル化された作業手順を視野内に表示しながら、映像・音声をリアルタイムで遠隔エンジニアと共有。遠隔支援側は注記付き指示を作業者の視野に直接プッシュでき、距離を超えたリアルタイムの遠隔協調を実現しました。<br><br><b>担当範囲：</b>要件分析・HoloLens AR システム設計・Unity 実装・リアルタイム映像 / 音声連携・アノテーションオーバーレイ・テスト・納品支援まで一貫して担当。",
                    imgSrc: "/VS-Style-Portfolio/img/ar-glasses.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "HoloLens", "AR", "Remote Collaboration"]
                },
                {
                    title: "鄂州製鋼所デジタルツインシステム",
                    industry: "領域：産業可視化 · デジタルツイン",
                    role: "Unity エンジニア",
                    whatIBuilt: "製鋼所の生産フロアをリアルタイム デジタルツインとして再現し、MQTT フィード・REST API・センサーデータなど複数の現場データソースを 3D 空間上に統合表示するシステムを構築しました。管理者は現地を訪問せずに生産状況を直感的に把握し、より迅速で正確な意思決定が可能になります。<br><br><b>担当範囲：</b>Unity フロントエンド全般 — MQTT / REST API データ連携・リアルタイム 3D モデル状態制御・複数ソースデータバインディング・ユーザーインタラクション設計。",
                    imgSrc: "/VS-Style-Portfolio/img/xr-digital-twin.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT", "Digital Twin", "Real-time Data"]
                },
                {
                    title: "Hi5 グローブ没入型訓練システム",
                    industry: "領域：Industrial VR · 没入型訓練",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "Hi5 VR グローブを使用した没入型訓練システムを開発しました。訓練者は実際の手の動作で仮想オブジェクトを操作し、高い物理的忠実度で実作業手順を体験できるため、訓練効率と現場熟練度が向上します。<br><br><b>担当範囲：</b>要件分析・Hi5 ハードウェア SDK 統合・手インタラクションシステム設計・Unity 実装・テスト・納品支援まで一貫して担当。",
                    imgSrc: "/VS-Style-Portfolio/img/vr-hi5-gloves.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Hand Interaction", "VR"]
                },
                {
                    title: "高所作業墜落体感システム",
                    industry: "領域：Industrial VR · 安全体感",
                    role: "Unity / XR エンジニア",
                    whatIBuilt: "高所での物理シミュレーションによる墜落シナリオを体験させる VR 安全訓練アプリを構築しました。管理された仮想環境で恐怖感を体感させることで、標準的な訓練では難しい真の安全意識とリスク認識の定着を促します。<br><br><b>担当範囲：</b>要件分析・VR 物理シミュレーション設計・高所・墜落シナリオ構築・Unity 実装・テスト・納品支援まで一貫して担当。",
                    imgSrc: "/VS-Style-Portfolio/img/vr-fall-safety.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "VR", "Physics Simulation", "Safety Training"]
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
                    date: "2023年7月 – 現在",
                    company: "NetWisdom株式会社",
                    desc: "日本のソフトウェア会社にてエンタープライズバックエンド・フルスタックエンジニアとして従事。Java / Spring Boot を用いた Web 開発から、決済基盤のモダナイゼーション（gRPC / AWS / DynamoDB）、バックエンド・BFF の実装、技術調査、コードレビュー、AI 支援開発ツールの検証・推進まで担当。"
                }
            ]
        },
        skills: {
            title: "Skills",
            groups: [
                { name: "バックエンド & エンタープライズ", items: ["Java", "Spring Boot", "REST APIs", "gRPC", "PostgreSQL", "SQL"] },
                { name: "フロントエンド & フルスタック", items: ["React", "TypeScript", "JavaScript"] },
                { name: "クラウド & インフラ", items: ["AWS", "Azure", "DynamoDB", "MySQL"] },
                { name: "ネイティブ & プロダクト開発", items: ["Swift", "SwiftUI", "macOS", "StoreKit 2", "App Sandbox"] },
                { name: "XR & リアルタイム", items: ["Unity", "C#", "VR", "AR", "HoloLens", "Digital Twin"] },
                { name: "AI ネイティブ開発", items: ["GitHub Copilot", "Codex", "マルチエージェント ワークフロー", "コンテキスト設計", "エージェント QA", "ヒューマンインザループ検証"] }
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
            name: "我是何晓丹。",
            codeName: "何晓丹",
            role: "Software Engineer & Indie Developer",
            subtitle: "Backend · Full Stack · Product Engineering · AI Native Development",
            description: "在企业级系统、独立产品与海外商业项目中构建生产级软件，并将 AI 深度融入实际开发与交付流程。",
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

                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// aiNativeDev</div>
                <p>AI 辅助开发与多智能体工程工作流已是我工程实践的重要组成部分——应用于企业后端开发、独立产品交付、国际客户项目以及工作流研究。架构决策、需求定义、验收标准与最终交付由人控制。AI 智能体在结构化任务契约、质量门禁与明确评审下运作。</p>

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
                    title: "国际 EdTech 平台现代化",
                    industry: "领域：EdTech · 国际自由职业",
                    role: "独立全栈开发者（Independent Full-Stack Developer）",
                    whatIBuilt: "接手并持续开发国际客户的生产 EdTech 平台。承接横跨 Unity / C# / 后端服务 / Azure / MySQL 的既有系统，完成架构调研、云和数据库环境核查、建立可靠的技术基线，并推进课程及本地化架构的改进开发。<br><br><b>担当范围：</b>代码库调研、Unity 与后端架构分析、Azure 环境核查、数据库 Schema 分析、开发实现、测试及技术文档整理、跨时区异步国际客户沟通。<br><br><b>Maestro / AI 工程实践：</b>将自研 Maestro Agent Workflow 应用于实际商业交付，通过任务契约、角色分离、独立上下文与质量门禁组织 AI Coding Agents，辅助完成跨 Unity、Backend、Azure 与 Database 的调查、实现、验证和交付。",
                    imgSrc: "/VS-Style-Portfolio/img/edtech.png",
                    tech: ["Unity", "C#", "Azure", "MySQL", "本地化", "Full-Stack"],
                    privateLabel: "Upwork · 合同验证"
                },
                {
                    title: "大型企业支付平台现代化重构",
                    industry: "领域：金融 · 支付系统",
                    role: "后端工程师（Backend Engineer）",
                    whatIBuilt: "参与大型企业支付基础设施现代化项目，覆盖设计、实现、单体测试到结合测试等完整软件开发流程。同时作为技术先行成员，负责 gRPC、AWS DynamoDB 等新技术的可行性验证与先行开发，并将验证成果沉淀为技术实现报告和开发指南，为后续团队开发提供基础。<br><br><b>担当范围：</b>设计书编写、Java / Spring Boot 后端实现、单体与结合测试、技术调查、PoC、代码 Review、技术文档，以及新技术导入验证。<br><br><b>长期 Agent Engineering 实践：</b>自 Coding Agents 进入早期实用阶段起，在大型企业开发环境中持续一年以上进行高强度实践，亲历项目从 AI-assisted development 逐步演进为高度 Agent-driven 的开发流程。Coding Agents 已深度参与需求理解、设计、实现、测试、Review 与技术文档等完整工程环节。在这一过程中，积累了复杂工程中的任务拆分、上下文管理、多 Agent 协作、验证、质量控制与 Human-in-the-loop 等实践经验。",
                    imgSrc: "/VS-Style-Portfolio/img/enterprise-payment.png",
                    tech: ["Java", "Spring Boot", "gRPC", "AWS", "DynamoDB", "AI-Assisted Dev"],
                    proprietary: true
                },
                {
                    title: "Vortex（macOS 菜单栏下载整理工具）",
                    industry: "领域：macOS · Productivity",
                    role: "独立产品开发者（Solo Product Developer）",
                    whatIBuilt: "设计、开发并上架了一款 macOS 原生文件整理工具至 Mac App Store。从菜单栏即时查看新下载的文件，按类型自动整理到清晰文件夹，支持打开、拖拽、归档、删除等快捷操作，并通过时间线安全撤销最近的移动。所有整理均在本地完成，文件默认整理到 ~/Downloads/Vortex。<br><br><b>担当范围：</b>产品规划、UX 设计、SwiftUI 实现、菜单栏应用架构设计、文件监控与自动整理、Vortex Pro StoreKit 2 内购实现，从产品定义到 App Store 发布全程独立负责。",
                    imgSrc: "/VS-Style-Portfolio/img/vortex-app.jpg",
                    link: "https://apps.apple.com/us/app/vortex-file-organizer/id6772141575?mt=12",
                    tech: ["Swift", "SwiftUI", "StoreKit 2", "App Sandbox", "文件系统 API"]
                },
                {
                    title: "契约管理·代收付系统",
                    industry: "领域：金融 · 支付系统",
                    role: "后端工程师（Backend Engineer）",
                    whatIBuilt: "面向大规模代收付服务构建契约管理系统，与 Kickflow 工作流联动，实现从申请、审批到管理的全流程业务支撑体系。<br><br><b>担当范围：</b>参与从基本设计、详细设计、实现、单体测试到结合测试的完整企业开发流程，负责 BFF、后端、共通 API 设计、PostgreSQL 数据库设计、AWS 集成、React / TypeScript 前端开发、测试及代码 Review。",
                    imgSrc: "/VS-Style-Portfolio/img/enterprise-contract.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS"],
                    proprietary: true
                },
                {
                    title: "Maestro",
                    industry: "领域：AI Engineering · Developer Tools",
                    role: "作者 · 独立工程师",
                    whatIBuilt: "设计并长期维护 Maestro，一个用于组织 AI Coding Agents 参与软件开发的 Agent-first Workflow Controller。它将需求转化为具有明确上下文、职责和验收标准的任务，并协调 Dev、QA、Sage 等角色完成开发、独立验证、回退与关闭。<br><br><b>工作流程：</b>Requirement → Task Contract → Dev → QA → Sage / Human Gate → Close。不同角色在隔离上下文中工作，通过共享项目状态传递 Task、Artifact、Evidence 与生命周期信息；验证失败时携带证据回退开发，通过后继续推进状态。<br><br><b>核心机制：</b>Task Contract、Context Isolation、Shared Truth、Quality Gate、Atomic Rollback、Human Authority，以及可替换的 AI Worker / Provider Adapter。<br><br>Maestro 经过长期实际项目使用和持续演进，目前作为个人工作流基础设施，应用于独立产品开发与商业客户交付。",
                    imgSrc: "/VS-Style-Portfolio/img/maestro.png",
                    tech: ["Multi-Agent", "CLI", "State Machine", "Context Engineering", "Quality Gates"],
                    privateLabel: "私有仓库 · 个人工具"
                },
                {
                    title: "AI Agent Playbook",
                    industry: "领域：Open Source · AI Engineering",
                    role: "作者 · 独立开发",
                    whatIBuilt: "持续整理并开源自己在大型企业项目、独立开发和商业交付中形成的 AI Agent 软件工程方法论，将真实开发经验抽象为 Task Decomposition、Context Isolation、Artifact、Verification、Gate、Contract、Convergence 与 Human Authority 等可复用工程原则。<br><br>Playbook 关注如何将 Coding Agents 纳入可验证的软件工程流程，并持续通过真实项目实践进行修正和扩展。相关方法同时在 Maestro 中进行工具化验证，Playbook 本身已在 GitHub 开源。",
                    imgSrc: "/VS-Style-Portfolio/img/ai-playbook.png",
                    github: "https://github.com/heisyoudan/ai-agent-playbook",
                    tech: ["AI Agents", "Agent Workflow", "Context Engineering", "Software Engineering", "Open Source"]
                },
                {
                    title: "Omit（macOS 极简系统监控）",
                    industry: "领域：macOS · Open Source",
                    role: "独立开发者（Solo Developer）",
                    whatIBuilt: "设计并发布了一款基于 SwiftUI 的 macOS 菜单栏系统监控工具，以极简设计实现对 CPU、内存、网络状态的轻量直观监控体验。<br><br><b>担当范围：</b>UI / UX 设计、SwiftUI 实现、开源发布全程独立完成。结合 AI-assisted development 完成从实现、产品化到开源发布的完整开发流程，保持符合 Apple 原生设计语言的极简体验。",
                    imgSrc: "/VS-Style-Portfolio/img/omit-monitor.png",
                    github: "https://github.com/heisyoudan/Omit",
                    tech: ["Swift", "SwiftUI", "MenuBarExtra", "macOS"]
                },
                {
                    title: "VR 消防训练体验",
                    industry: "领域：工业 XR · 安全训练",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "为水电站员工开发 VR 消防训练应用。通过在沉浸式 3D 空间中还原火灾场景，使受训者无需真实火源即可进行高还原度安全训练，显著提升训练质量与安全性。<br><br><b>担当范围：</b>作为独立工程师全程负责：需求分析、方案与系统设计、技术架构、Unity VR 实现、测试、验收支持及最终交付。",
                    imgSrc: "/VS-Style-Portfolio/img/vr-fire-training.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "C#", "VR", "Safety Training"]
                },
                {
                    title: "AR 眼镜巡检支援应用",
                    industry: "领域：工业 AR · 设备巡检",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "构建了基于 HoloLens 的现场巡检支援 AR 应用。作业者在视野中查看数字化作业指引，同时将现场画面与音频实时共享给远端技术人员；远程支援方可将带标注的指令直接推送至作业者视野中，实现跨距离的实时远程协作。<br><br><b>担当范围：</b>作为独立工程师全程负责：需求分析、HoloLens AR 系统设计、Unity 实现、实时视频/音频集成、标注覆盖层、测试及交付支持。",
                    imgSrc: "/VS-Style-Portfolio/img/ar-glasses.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "HoloLens", "AR", "Remote Collaboration"]
                },
                {
                    title: "鄂州钢厂数字孪生系统",
                    industry: "领域：工业可视化 · 数字孪生",
                    role: "Unity 工程师",
                    whatIBuilt: "构建了将钢厂生产现场实时数字孪生化的系统，将 MQTT 数据流、REST API、传感器数据等多路现场数据源整合后以 3D 空间呈现。管理者无需到访现场即可直观把握生产状态，支撑更迅速、准确的多维决策。<br><br><b>担当范围：</b>全程负责 Unity 前端开发 —— MQTT / REST API 数据集成、实时 3D 模型状态控制、多源数据绑定、用户交互设计。",
                    imgSrc: "/VS-Style-Portfolio/img/xr-digital-twin.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT", "Digital Twin", "实时数据"]
                },
                {
                    title: "Hi5 手套沉浸式训练系统",
                    industry: "领域：工业 VR · 沉浸式训练",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "开发了基于 Hi5 VR 手套的沉浸式训练系统，使受训者通过真实手势操作虚拟对象，以高物理还原度体验实际操作流程，提升训练效率与现场熟练度。<br><br><b>担当范围：</b>作为独立工程师全程负责：需求分析、Hi5 硬件 SDK 集成、手部交互系统设计、Unity 实现、测试及交付支持。",
                    imgSrc: "/VS-Style-Portfolio/img/vr-hi5-gloves.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "手部交互", "VR"]
                },
                {
                    title: "高处作业坠落体验",
                    industry: "领域：工业 VR · 安全体感",
                    role: "Unity / XR 工程师",
                    whatIBuilt: "构建了通过 VR 物理仿真让作业者亲身体验高处坠落场景的安全训练应用。在可控的虚拟环境中触发真实恐惧感，培养标准培训难以实现的安全意识与风险认知。<br><br><b>担当范围：</b>作为独立工程师全程负责：需求分析、VR 物理仿真设计、高处/坠落场景构建、Unity 实现、测试及交付支持。",
                    imgSrc: "/VS-Style-Portfolio/img/vr-fall-safety.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "VR", "物理仿真", "安全训练"]
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
                    date: "2023年7月 – 至今",
                    company: "NetWisdom株式会社",
                    desc: "在日本软件公司担任企业级后端/全栈工程师，工作范围涵盖 Java / Spring Boot Web 开发、企业支付平台现代化（gRPC / AWS / DynamoDB）、后端与 BFF 开发、技术调查、代码评审，以及 AI 辅助开发工具的验证与推广。"
                }
            ]
        },
        skills: {
            title: "Skills",
            groups: [
                { name: "后端 & 企业级", items: ["Java", "Spring Boot", "REST APIs", "gRPC", "PostgreSQL", "SQL"] },
                { name: "前端 & 全栈", items: ["React", "TypeScript", "JavaScript"] },
                { name: "云 & 基础设施", items: ["AWS", "Azure", "DynamoDB", "MySQL"] },
                { name: "原生 & 产品工程", items: ["Swift", "SwiftUI", "macOS", "StoreKit 2", "App Sandbox"] },
                { name: "XR & 实时渲染", items: ["Unity", "C#", "VR", "AR", "HoloLens", "Digital Twin"] },
                { name: "AI 原生开发", items: ["GitHub Copilot", "Codex", "多智能体工作流", "上下文工程", "智能体辅助 QA", "人类闭环验证"] }
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
