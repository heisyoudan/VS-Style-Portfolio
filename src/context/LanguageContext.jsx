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
                <p>初めまして、<strong>何暁丹</strong>と申します。</p>
                <p>私は、「空間的なインタラクション思考」と「堅牢なバックエンド構築力」を併せ持つエンジニアです。来日前は、中国で4年間にわたり Unity エンジニア として VR/AR 開発に従事していました。2022年の来日以降は、Java (Spring Boot) を中心としたクラウドネイティブ開発へと専門領域を広げています。</p>
                <p>現在は、日本大手企業の決済基盤モダナイズプロジェクトに参画しています。チームのコアメンバー（技術検証担当）として、主に以下の役割を果たしています：</p>
                <ul style="padding-left: 20px; list-style-type: disc; margin-bottom: 20px;">
                    <li>gRPC や AWS DynamoDB など、プロジェクトで新規採用された技術の先行検証 (PoC) と実装サンプルの作成。</li>
                    <li>GitHub Copilot の活用方法を検証・体系化し、開発効率を高めるためのドキュメント整備やナレッジ共有。</li>
                </ul>
                <p>また、プライベートでは <strong>AI-Native なクリエイター</strong> として、AI技術を駆使して macOS アプリ（「Vortex」「Omit」など）を短期間で開発・リリースしています。</p>
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
                    title: "鄂州製鋼所デジタルツインのプロジェクト",
                    industry: "開発業種：製鋼業",
                    desc: "製鋼所をシステムに複製し、生産現場で発生する様々な形式のデータと接続できます。生産現場で発生するデータがシステム上で集約され、状況を一目で把握できます。立体的な空間表現により、現場を訪れなくても製造現場の状況を手に取るように把握できます。関連データや動画との連携により、多角的な情報を基に正確で迅速な状況判断ができます。",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "VR消防訓練体験",
                    industry: "開発業種：水力発電業",
                    desc: "水力発電所では、従業員向けのVR研修アプリを利用して、消火訓練をより安全で緊張感のあるものにすることができます。研修内容はVRで表現され、火災と同様の環境を再現できるため、実際に火を使わずに効果的な訓練が可能です。",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "作業中の高所からの墜落体験",
                    industry: "開発業種：水力発電業",
                    desc: "高所作業中の墜落事故をVRで完全再現し、恐怖の疑似体験を通じて事故を未然に防ぐことを目的としています。さらに、このシステムは安全教育や新人研修など幅広い場面で活用可能であり、従業員の安全意識向上やリスクマネジメントの強化にも貢献します。",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "訓練分野におけるVRのシステム",
                    industry: "開発業種：水力発電業",
                    desc: "Hi5 VRグローブを装着して仮想空間に没入し、繰り返しの実技確認が必要な現場実習などを、実際の現場にいるかのような臨場感でトレーニングできます。",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "ARグラスを装着した巡視点検業務用のアプリケーション",
                    industry: "開発業種：水力発電業",
                    desc: "工事現場検査をリモートで実施。デジタル化した作業手順書を閲覧しながら作業でき、現場映像や音声を遠隔の技術者へリアルタイム伝送。支援者はマニュアルや指示を書き込んだ画像を作業者のARグラス上に表示できます。",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "契約管理・決済代行システム",
                    industry: "開発業種：金融・決済システム",
                    desc: "大手決済代行サービスの契約管理システム開発。Kickflowワークフロー連携により申込から振込まで一元管理。<br><br><b>担当範囲:</b> 基本設計〜結合テスト、BFF・BE・共通API設計、PostgreSQL設計、AWS連携、React/TypeScript改修、テスト・レビュー",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL"]
                },
                {
                    title: "大手決済基盤刷新プロジェクト",
                    industry: "開発業種：金融・決済システム",
                    desc: "大手企業決済システム刷新プロジェクト。技術リードとして新技術導入を主導。<br><br><b>主な貢献:</b><br>・新技術検証(PoC): gRPC・AWS DynamoDB等の技術検証と実装<br>・標準策定: 実装ガイドライン・技術レポート作成<br>・AI活用: GitHub Copilot導入による開発効率化推進",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "gRPC", "AWS", "DynamoDB"]
                },
                {
                    title: "Omit (macOS向けシステムモニター)",
                    industry: "開発業種：macOSアプリ",
                    desc: "macOSメニューバー常駐型システム監視ツール。SwiftUI採用のミニマルデザイン。<br><br><b>特徴:</b><br>・個人開発: 企画からリリースまで独力完成<br>・AI駆動開発: Swift未経験からAIツール活用で短期開発<br>・UXデザイン: 直感的で美しいApple純正風インターフェース",
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
                    name: "AI-Driven Development (ChatGPT / Gemini / Copilot / Workflow Integration)",
                    level: 95
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
                <p>你好，我是<strong>何晓丹</strong>。</p>
                <p>我是一名将“空间交互思维”与“后端架构逻辑”相结合的开发者。来日前在中国拥有4年Unity VR/AR开发经验，主要面向工业与建筑领域，负责复杂系统的可视化与端到端交付，这塑造了我从零构建系统的宏观视角与实战能力。</p>
                <p>2022年移居日本后，我转向以Java（Spring Boot）为中心的云原生后端开发。现在我在一家日本大型企业参与支付基盘的现代化重构项目，担任技术攻坚与验证（Tech Validation）：</p>
                <ul style="padding-left: 20px; list-style-type: disc; margin-bottom: 20px;">
                    <li>主导团队未涉足技术（如 gRPC、AWS DynamoDB）的可行性验证（PoC）与先行开发，解决技术断层问题。</li>
                    <li>基于验证结果制定实现标准与技术报告，支持项目整体实施决策。</li>
                    <li>推动并建立基于 GitHub Copilot 的 AI 辅助编码工作流，显著提升团队开发效率。</li>
                </ul>
                <p>业余时间，我使用 AI 跨越语言壁垒，快速用 Swift 开发并发布了多款 macOS 效率工具（如 Vortex、Omit）。我不仅会写代码，更善于用 AI 重塑开发流程。期待用我的技术广度与工程深度，为更有趣的项目注入活力。</p>
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
                    industry: "开发行业：炼钢业",
                    desc: "将钢厂在系统中进行数字复制，并与现场产生的多种数据类型打通。现场数据在系统中集中汇聚，状态一目了然；通过三维空间表达，即使不去现场也能掌握生产情况。结合相关数据与视频进行联动，在多维信息基础上实现更准确、快速的判断。",
                    imgSrc: "/VS-Style-Portfolio/img/1.jpg",
                    link: "https://1drv.ms/f/s!ApmvHuIZS7NH734r2opVDz_NfUgF?e=E8RTCJ",
                    tech: ["Unity", "C#", "MQTT"]
                },
                {
                    title: "VR 消防训练体验",
                    industry: "开发行业：水力发电",
                    desc: "面向水电站员工的 VR 培训应用，使灭火训练更安全、更有临场感。训练内容以 VR 呈现，可还原类似火灾的环境，无需动用真火即可开展高效训练。",
                    imgSrc: "/VS-Style-Portfolio/img/2.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73pCdtLAFPWxUCmN?e=Aa43ua",
                    tech: ["Unity", "VR", "Safety"]
                },
                {
                    title: "高处作业坠落体验",
                    industry: "开发行业：水力发电",
                    desc: "完整还原高处作业的坠落事故，通过沉浸式\"恐惧体验\"来提升安全意识、预防事故。",
                    imgSrc: "/VS-Style-Portfolio/img/3.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73mxHP_X2rVvKCTX?e=RTW0Dq",
                    tech: ["Unity", "Physics", "VR"]
                },
                {
                    title: "训练领域的 VR 系统",
                    industry: "开发行业：水力发电",
                    desc: "佩戴 Hi5 VR 手套沉浸于虚拟空间，对需要反复实操确认的训练进行高还原度演练，如同置身真实现场。",
                    imgSrc: "/VS-Style-Portfolio/img/4.jpg",
                    link: "https://1drv.ms/u/s!ApmvHuIZS7NH73i4yWg3Fm1f5V6K?e=03aIN3",
                    tech: ["Unity", "Hi5 Gloves", "Training"]
                },
                {
                    title: "佩戴 AR 眼镜的巡检应用",
                    industry: "开发行业：水力发电",
                    desc: "远程实施工地巡检。作业者可在 AR 眼镜中查看数字化作业指引，并将现场视频/音频实时传送给远端技术人员；支援者可将带有标注的图片/指令推送并显示在作业者的 AR 眼镜上。",
                    imgSrc: "/VS-Style-Portfolio/img/5.jpg",
                    link: "https://1drv.ms/v/s!ApmvHuIZS7NHgsZYsNjoHyQCTrJHHw?e=Ro6M53",
                    tech: ["Unity", "AR", "HoloLens"]
                },
                {
                    title: "契约管理与代收付系统",
                    industry: "开发行业：金融·支付系统",
                    desc: "大型支付代办服务契约管理系统。与 Kickflow 工作流联动实现全流程管理。<br><br><b>负责范围:</b> 基本设计至集成测试、BFF/BE/共通API设计、PostgreSQL设计、AWS集成、React/TypeScript开发、测试与代码评审",
                    imgSrc: "/VS-Style-Portfolio/img/6.jpg",
                    tech: ["Java", "Spring Boot", "PostgreSQL"]
                },
                {
                    title: "大型企业支付平台现代化重构",
                    industry: "开发行业：金融·支付系统",
                    desc: "大型企业支付系统现代化重构项目。担任技术先行者，主导新技术导入与团队技术升级。<br><br><b>核心贡献:</b><br>・新技术攻坚: gRPC/AWS DynamoDB 可行性验证与先行开发<br>・标准制定: 技术实现报告与开发手册编写<br>・AI流程导入: GitHub Copilot 应用模式验证与标准化工作流建立",
                    imgSrc: "/VS-Style-Portfolio/img/7.png",
                    tech: ["Java", "gRPC", "AWS", "DynamoDB"]
                },
                {
                    title: "Omit (macOS 极简系统监控)",
                    industry: "开发行业：macOS 应用",
                    desc: "基于 SwiftUI 的 macOS 菜单栏系统监控工具。极简设计提供CPU/内存/网络监控。<br><br><b>开发特色:</b><br>・全栈独立开发: UI/UX设计至App上架全流程完成<br>・AI驱动开发: 零基础Swift通过AI辅助实现产品化<br>・极简交互: Apple Native设计语言，\"零干扰\"用户体验",
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
                    name: "AI-Driven Development (ChatGPT / Gemini / Copilot / Workflow Integration)",
                    level: 95
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
