import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
    ja: {
        nav: {
            home: "ホーム",
            about: "自己紹介",
            projects: "プロジェクト",
            timeline: "経歴",
            skills: "スキル",
            contact: "連絡先" // Added Contact
        },
        contact: {
            title: "Contact",
            desc: "興味をお持ちいただけましたら、以下のリンクよりお気軽にご連絡ください！",
            items: [
                { label: "Email", value: "heisyoudan@yahoo.com", link: "mailto:heisyoudan@yahoo.com" },
                { label: "GitHub", value: "https://github.com/heisyoudan", link: "https://github.com/heisyoudan" }
            ]
        },
        home: {
            greeting: "ようこそ、私の世界へ！",
            intro: "初めまして、",
            name: "何暁丹と申します。",
            role: "Java / Unity XR / AI-Native / macOS",
            viewWork: "プロジェクトを見る",
            contact: "自己紹介"
        },
        about: {
            title: "自己紹介",
            content: `
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin-bottom: 15px;">// whoAmI()</div>
                <p>こんにちは、<strong>何暁丹</strong>です。</p>
                <p>私は、空間インタラクションの視点とバックエンドの設計思考をあわせ持つエンジニアです。要件整理、設計、実装、検証、納品まで、一連の流れを一貫して推進することを得意としています。</p>
                
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// background</div>
                <p>来日前は、中国で約4年間、Unity VR/AR 開発に従事していました。業務向けの可視化やインタラクション体験の設計に携わり、実装から納品までの一連の工程を担当してきました。この経験を通じて、複雑な要件を実行可能な形に落とし込む力を身につけるとともに、常にプロダクトの完成度とユーザー体験を意識して開発を進める姿勢を培いました。</p>
                
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// currentWork</div>
                <p>2022年に来日してからは、Java / Spring Boot / Cloud Native を中心とした開発へと領域を広げました。現在は、日本の大手企業における決済基盤のモダナイゼーションプロジェクトに参加し、新技術の検証および実装支援を中心とした業務に携わっています。具体的には、gRPC や AWS DynamoDB などの技術に関する PoC 検証、実装サンプルの作成、検証結果の整理とドキュメント化、さらに AI ツールのチーム開発への活用方法の整理と共有などを行っています。</p>
                
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// personalBuild</div>
                <p>個人開発では、日々の開発フローに AI を積極的に取り入れながら、Swift を用いた macOS 向けの生産性ツール開発・公開を継続しています。Vortex や Omit などのプロダクトを通じて、技術の幅、エンジニアリングの深さ、そしてプロダクト視点を組み合わせ、実際に使えるものを継続的に形にしていきたいと考えています。</p>
            `,
            career_title: "経歴概要",
            skills_title: "スキル概要"
        },
        projects: {
            title: "プロジェクト紹介",
            more: "詳しくはこちら",
            code: "コード",
            demo: "プレビュー",
            items: [
                {
                    title: "鄂州製鋼所デジタルツインプロジェクト",
                    industry: "業種：製鋼業",
                    desc: "製鋼所の生産現場をデジタルツインとして構築し、現場で発生する多様なデータソースを連携させ、システム上で集約・一元表示を実現しました。三次元空間による可視化によって、現地に行かなくても生産状況を直感的に把握できるようにし、関連データや映像との連携により、多面的な情報に基づく、より正確で迅速な判断を支援しました。<br><br><b>担当範囲:</b> Unity フロントエンドを一貫して担当し、API データ連携、3D モデル制御、ユーザーインタラクション機能の実装を行いました。",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "VR消火訓練体験",
                    industry: "業種：水力発電",
                    desc: "水力発電所の従業員向けに開発した VR 消火訓練アプリです。没入感のある空間表現により、消火訓練の安全性と臨場感を高めました。訓練内容を VR 上で再現することで、実際の火を使用せずに、火災に近い状況で効率的な訓練を実施できるようにしました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の策定、実装、試験、受け入れ対応、納品支援まで一貫して担当。個人で立ち上げから完成まで遂行したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "高所作業墜落体験",
                    industry: "業種：水力発電",
                    desc: "高所作業における安全教育向けの没入型体験アプリです。墜落事故の状況や心理的な緊張感を再現することで、作業者の安全意識を高め、危険認識の向上と事故防止につなげました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の策定、実装、試験、受け入れ対応、納品支援まで一貫して担当。個人で立ち上げから完成まで遂行したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "Hi5グローブ没入型訓練システム",
                    industry: "業種：水力発電",
                    desc: "Hi5 VR グローブを活用した没入型訓練システムです。仮想空間内で、繰り返し実技確認が必要な訓練内容を高い再現度で体験できるようにし、訓練効率と現場作業への習熟度向上を支援しました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の策定、実装、試験、受け入れ対応、納品支援まで一貫して担当。個人で立ち上げから完成まで遂行したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "ARグラス巡視支援アプリ",
                    industry: "業種：水力発電",
                    desc: "現場巡視を支援する AR アプリです。作業者は AR グラスを通じてデジタル化された作業手順を確認でき、現場の映像と音声を遠隔の技術者へリアルタイムに共有できます。遠隔支援側は、注記付き画像や指示内容を作業者の視界上へ表示でき、巡視の効率と連携品質の向上に貢献しました。<br><br><b>担当範囲:</b> 要件整理、提案・設計、技術構成の策定、実装、試験、受け入れ対応、納品支援まで一貫して担当。個人で立ち上げから完成まで遂行したプロジェクトです。",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "契約管理・収納代行システム",
                    industry: "業種：金融・決済システム",
                    desc: "大規模な収納代行サービス向けの契約管理システムです。Kickflow のワークフローと連携し、申請、承認、管理までの一連の業務を支える仕組みを構築しました。<br><br><b>担当範囲:</b> 基本設計から結合試験まで開発工程全体に参画し、BFF、バックエンド、共通 API の設計、PostgreSQL のデータベース設計、AWS 連携、React / TypeScript によるフロントエンド開発、試験およびコードレビューを担当しました。",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL"]
                },
                {
                    title: "大手企業向け決済基盤モダナイゼーション",
                    industry: "業種：金融・決済システム",
                    desc: "大手企業の決済基盤を対象としたモダナイゼーション再構築プロジェクトです。技術先行メンバーとして、新技術の導入検証とチームの開発力向上を推進し、後続の実装方針整備を支援しました。<br><br><b>担当範囲:</b> gRPC と AWS DynamoDB の実現性検証および先行開発、技術実装レポートと開発ガイドの作成、さらに GitHub Copilot の活用検証と標準化された開発フローの整理を担当しました。",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "gRPC", "AWS", "DynamoDB"]
                },
                {
                    title: "Omit（macOS向けミニマルシステムモニター）",
                    industry: "業種：macOS アプリ",
                    desc: "SwiftUI で開発した macOS メニューバー向けのシステムモニタリングツールです。CPU、メモリ、ネットワークの状態を、ミニマルな設計で軽快かつ直感的に確認できる体験を目指しました。<br><br><b>担当範囲:</b> UI / UX 設計、機能実装、アプリ公開までを一貫して個人で担当しました。Swift 未経験の状態から AI を活用して製品化まで進め、Apple ネイティブなデザイン方針に沿ったミニマルな操作体験を磨き込みました。",
                    imgSrc: "/VS-Style-Portfolio/img/8.png",
                    tech: ["Swift", "SwiftUI", "macOS"],
                    github: "https://github.com/heisyoudan/Omit/tree/main"
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
            skills: "技能",
            contact: "联系方式"
        },
        contact: {
            title: "Contact",
            desc: "如果您有兴趣与我联系，请随时通过以下链接与我交流！",
            items: [
                { label: "Email", value: "heisyoudan@yahoo.com", link: "mailto:heisyoudan@yahoo.com" },
                { label: "GitHub", value: "https://github.com/heisyoudan", link: "https://github.com/heisyoudan" }
            ]
        },
        home: {
            greeting: "欢迎来到我的世界！",
            intro: "你好，",
            name: "我是何晓丹。",
            role: "Java / Unity XR / AI-Native / macOS",
            viewWork: "查看项目",
            contact: "关于我"
        },
        about: {
            title: "关于我",
            content: `
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin-bottom: 15px;">// whoAmI()</div>
                <p>你好，我是<strong>何晓丹</strong>。</p>
                <p>我是一名兼具空间交互视角与后端工程思维的工程师，擅长从需求整理、方案设计到实现、验证、交付的全流程推进。</p>
                
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// background</div>
                <p>来日前，我在中国从事约 4 年 Unity VR/AR 开发，面向业务场景参与可视化与交互体验设计，并负责从实现到交付的完整链路。这段经历让我逐渐形成了将复杂需求拆解为可执行方案的能力，也让我在工程实践中始终关注最终交付质量与产品体验。</p>
                
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// currentWork</div>
                <p>2022 年移居日本后，我将技术方向扩展到 Java / Spring Boot / Cloud Native。目前参与日本大型企业的支付基盘现代化项目，主要围绕新技术验证与实现支援展开工作，包括 gRPC、AWS DynamoDB 等技术的 PoC 验证、实现样例制作、验证结果整理与文档化，以及 AI 工具在团队开发中的使用方式沉淀。</p>
                
                <div style="color: var(--text-muted); font-family: var(--font-mono); font-size: 14px; margin: 25px 0 15px 0;">// personalBuild</div>
                <p>在个人开发方面，我持续将 AI 融入开发工作流，并使用 Swift 开发和发布 macOS 效率工具，如 Vortex、Omit 等。我希望将技术广度、工程深度与产品意识结合起来，持续交付真正可用的产品。</p>
            `,
            career_title: "经历概要",
            skills_title: "技能概要"
        },
        projects: {
            title: "项目介绍",
            more: "了解更多",
            code: "代码",
            demo: "预览",
            items: [
                {
                    title: "鄂州钢厂数字孪生项目",
                    industry: "行业：炼钢业",
                    desc: "以数字孪生方式构建钢厂生产现场，将多种现场数据源打通并在系统中集中呈现。通过三维空间可视化，使管理者无需到现场即可直观掌握生产状态，并结合关联数据与视频进行联动，支撑更准确、迅速的多维决策。<br><br><b>担当范围:</b> 全程负责 Unity 前端开发，包括 API 数据对接、3D 模型控制、用户交互功能的实现。",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "VR 消防训练体验",
                    industry: "行业：水力发电",
                    desc: "面向水电站员工开发的 VR 灭火训练应用。通过沉浸式空间表现提升灭火训练的安全性与临场感，将训练内容在 VR 中还原，无需动用真火即可在接近火灾的环境下高效开展训练。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "高处作业坠落体验",
                    industry: "行业：水力发电",
                    desc: "面向高处作业安全教育的沉浸式体验应用。通过再现坠落事故的情境与心理紧张感，提升作业人员安全意识，促进危险认知能力提升和事故预防。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "Hi5 手套沉浸式训练系统",
                    industry: "行业：水力发电",
                    desc: "基于 Hi5 VR 手套的沉浸式训练系统。通过在虚拟空间中高还原度地体验需要反复实操确认的训练内容，提升训练效率及现场作业的熟练度。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "AR 眼镜巡检支援应用",
                    industry: "行业：水力发电",
                    desc: "支持现场巡检的 AR 应用。作业者可通过 AR 眼镜查看数字化作业指引，并将现场画面与音频实时共享给远端技术人员；远程支援方可将带有标注的图片或指令推送到作业者的视野中，提升巡检效率与协作质量。<br><br><b>担当范围:</b> 从需求梳理、方案设计、技术选型、开发实现、测试验收到交付支持全程独立负责，是个人从零到成品完成的项目。",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "契约管理·代收付系统",
                    industry: "行业：金融·支付系统",
                    desc: "面向大规模代收付服务的契约管理系统，与 Kickflow 工作流联动，构建了从申请、审批到管理的全流程业务支撑体系。<br><br><b>担当范围:</b> 参与了从基本设计到集成测试的完整开发流程，负责 BFF、后端、共通 API 的设计、PostgreSQL 数据库设计、AWS 集成、React / TypeScript 前端开发、测试及代码评审。",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL"]
                },
                {
                    title: "大型企业支付平台现代化重构",
                    industry: "行业：金融·支付系统",
                    desc: "面向大型企业支付基础设施的现代化重构项目。作为技术先行成员，推动新技术导入验证与团队开发能力提升，为后续实现方案奠定基础。<br><br><b>担当范围:</b> 负责 gRPC 与 AWS DynamoDB 的可行性验证及先行开发、技术实现报告与开发指南的编写，以及 GitHub Copilot 的应用验证与标准化开发流程的整理。",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "gRPC", "AWS", "DynamoDB"]
                },
                {
                    title: "Omit（macOS 极简系统监控）",
                    industry: "行业：macOS 应用",
                    desc: "基于 SwiftUI 开发的 macOS 菜单栏系统监控工具，以极简设计实现对 CPU、内存、网络状态的轻量、直观监控体验。<br><br><b>担当范围:</b> 从 UI / UX 设计、功能开发到应用上架全程独立完成。在 Swift 零基础的情况下借助 AI 完成了产品化，打磨出符合 Apple 原生设计语言的极简操作体验。",
                    imgSrc: "/VS-Style-Portfolio/img/8.png",
                    tech: ["Swift", "SwiftUI", "macOS"],
                    github: "https://github.com/heisyoudan/Omit/tree/main"
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
        },
        timeline: {
            title: "Timeline"
        },
        skills: {
            title: "Technical Skills"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            timeline: "Timeline",
            skills: "Skills"
        },
        home: {
            greeting: "Welcome to my world!",
            intro: "Hi, I am",
            name: "He Xiaodan.",
            role: "Java / Unity XR / AI-Native / macOS",
            viewWork: "View Projects",
            contact: "About Me"
        },
        about: {
            title: "About Me",
            content: `
                <p>Nice to meet you, I am <strong>He Xiaodan</strong>.</p>
                <p>Originally from Wuhan, China, I came to Japan in October 2022 and have been studying Japanese since then. I have passed the JLPT N2 exam and have no difficulty with reading, writing, or conversation in a business context.</p>
                <p>In China, I worked as a Unity Programmer for 4 years, specializing in industrial VR system development for construction and manufacturing. I was involved in the entire process from requirement definition to implementation and system testing, with extensive experience in external device integration and system development.</p>
                <p>After coming to Japan, I focused on backend development using Java, Spring Boot, and Spring MVC. On the frontend, I have experience with HTML, CSS, JavaScript, and React. For databases, I handle CRUD operations as well as complex SQL queries and performance tuning.</p>
                <p>In my most recent project, I participated in a <strong>large-scale payment agency service system linked with Kickflow</strong>, handling everything from basic design to integration testing. I covered a wide range of areas including AWS environment development, BFF/BE/Common module design, API development, S3 integration, and DB design, actively contributing to code reviews and team development.</p>
                <p>I aim to be an engineer who can contribute to the team while constantly learning new technologies and improving myself. Thank you.</p>
            `,
            career_title: "Career Summary",
            skills_title: "Skills Summary"
        },
        projects: {
            title: "Selected Projects",
            more: "Learn More",
            code: "Code",
            demo: "Demo"
        },
        timeline: {
            title: "Timeline"
        },
        skills: {
            title: "Technical Skills"
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('ja'); // Default to Japanese

    const value = {
        language,
        setLanguage,
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
