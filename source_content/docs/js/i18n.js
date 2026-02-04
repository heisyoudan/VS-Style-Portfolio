
(() => {
  const LANGS = ["ja", "zh"];
  const DEFAULT_LANG = "ja";
  const STORAGE_KEY = "site_lang";

  const DICTS = {
    "ja": {
      "index.title": "何暁丹 | Java開発 | Unity VR/AR | ポートフォリオ",
      "nav.home": "ホーム",
      "nav.about": "自己紹介",
      "nav.projects": "プロジェクト紹介",
      "nav.timeline": "キャリアタイムライン",
      "nav.skills": "技術スキル",
      "nav.github": "GitHub",
      "index.hero.hello": "初めまして、",
      "index.hero.name": "何暁丹と申します。",
      "index.hero.subtitle": "Java / Unity XR / AI-Native / macOS",
      "index.cta.about": "自己紹介を見る",
      "index.cta.projects": "プロジェクトを見る",

      "about.title": "自己紹介",
      "common.back": "戻る",
        "about.body_html": "初めまして、何暁丹と申します。<br><br>私は、「空間的なインタラクション思考」と「堅牢なバックエンド構築力」を併せ持つエンジニアです。来日前は、中国で4年間にわたり Unity エンジニア として VR/AR 開発に従事していました。2022年の来日以降は、Java (Spring Boot) を中心としたクラウドネイティブ開発へと専門領域を広げています。<br><br>現在は、日本大手企業の決済基盤モダナイズプロジェクトに参画しています。チームの<strong>コアメンバー（技術検証担当）</strong>として、主に以下の役割を果たしています：<br><br>・gRPC や AWS DynamoDB など、プロジェクトで新規採用された技術の先行検証 (PoC) と実装サンプルの作成。<br><br>・GitHub Copilot の活用方法を検証・体系化し、開発効率を高めるためのドキュメント整備やナレッジ共有。<br><br>また、プライベートでは AI-Native なクリエイター として、AI技術を駆使して macOS アプリ（<strong>「Vortex」「Omit」</strong>など）を短期間で開発・リリースしています。",
      "projects.title": "プロジェクト紹介",
      "projects.more": "詳しくはこちら",
      "projects.sectionTag": "Project & Introduction",
    
      "projects.item1.title": "鄂州製鋼所デジタルツインのプロジェクト",
      "projects.item1.industry": "開発業種：製鋼業",
      "projects.item1.body_html": "製鋼所をシステムに複製し、生産現場で発生する様々な形式のデータと接続できます。生産現場で発生するデータがシステム上で集約され、状況を一目で把握できます。立体的な空間表現により、現場を訪れなくても製造現場の状況を手に取るように把握できます。関連データや動画との連携により、多角的な情報を基に正確で迅速な状況判断ができます。",
    
      "projects.item2.title": "VR消防訓練体験",
      "projects.item2.industry": "開発業種：水力発電業",
      "projects.item2.body_html": "水力発電所では、従業員向けのVR研修アプリを利用して、消火訓練をより安全で緊張感のあるものにすることができます。研修内容はVRで表現され、火災と同様の環境を再現できるため、実際に火を使わずに効果的な訓練が可能です。",
    
      "projects.item3.title": "作業中の高所からの墜落体験",
      "projects.item3.industry": "開発業種：水力発電業",
      "projects.item3.body_html": "高所作業中の墜落事故をVRで完全再現し、恐怖の疑似体験を通じて事故を未然に防ぐことを目的としています。さらに、このシステムは安全教育や新人研修など幅広い場面で活用可能であり、従業員の安全意識向上やリスクマネジメントの強化にも貢献します。",
    
      "projects.item4.title": "訓練分野におけるVRのシステム",
      "projects.item4.industry": "開発業種：水力発電業",
      "projects.item4.body_html": "Hi5 VRグローブを装着して仮想空間に没入し、繰り返しの実技確認が必要な現場実習などを、実際の現場にいるかのような臨場感でトレーニングできます。",
    
      "projects.item5.title": "ARグラスを装着した巡視点検業務用のアプリケーション",
      "projects.item5.industry": "開発業種：水力発電業",
      "projects.item5.body_html": "工事現場検査をリモートで実施。デジタル化した作業手順書を閲覧しながら作業でき、現場映像や音声を遠隔の技術者へリアルタイム伝送。支援者はマニュアルや指示を書き込んだ画像を作業者のARグラス上に表示できます。",
    
      "projects.item6.title": "契約管理・決済代行システム",
      "projects.item6.industry": "開発業種：金融・決済システム",
      "projects.item6.body_html": "大手決済代行サービスにおける契約管理システムの開発プロジェクト。Kickflowとのワークフロー連携により、申込・審査・振込通知までを一元的に管理。<br><br><b>担当内容・役割：</b><br>1. 基本設計〜結合テストまで一連の工程を担当<br>2. BFF・BE・共通モジュールのAPI設計・実装<br>3. データベース（PostgreSQL）設計・SQL実装<br>4. AWS連携（S3、EventBridge 等）<br>5. フロントエンド改修（React / TypeScript）および画面テスト<br>6. 単体・結合テストの実施、バグ対応、コードレビュー",

      "projects.item7.title": "大手決済基盤刷新プロジェクト",
      "projects.item7.industry": "開発業種：金融・決済システム",
      "projects.item7.body_html": "<b>概要：</b><br>日本大手企業の既存決済システムを対象とした大規模刷新案件。<b>技術リード（先行実装担当）</b>として、確定した技術ロードマップに基づき、チーム内で未経験領域となる新技術の検証と導入を主導。<br><br><b>主な貢献：</b><br><b>新技術の先行検証 (PoC)：</b> gRPC や AWS DynamoDB など、チームにとって未知の技術要素について、先行して<b>技術検証（PoC）</b>と実装を行い、技術的な懸念点を解消。<br><br><b>実装標準の策定：</b> 検証結果に基づき、実装ガイドラインや技術レポートを作成。プロジェクト全体の開発方針決定における技術的根拠を提供し、チームへの展開を支援。<br><br><b>AI開発プロセスの導入：</b> GitHub Copilot の実務における活用方法を検証・体系化。コード生成やレビューの標準プロセスを確立し、開発効率化を推進。",
      "projects.item8.title": "Omit (macOS向けシステムモニター)",
      "projects.item8.industry": "開発業種：macOSアプリ",
      "projects.item8.body_html": "<b>タイトル：</b>Omit (macOS向けシステムモニター)<br><br><b>概要：</b><br>「デジタル断捨離」をコンセプトにした、macOSメニューバー常駐型のシステム監視ツール。SwiftUI を採用し、Apple 純正アプリのようなミニマルなデザインと軽快な動作を実現。<br><br><b>主な貢献：</b><br>・個人開発 (Indie Dev): 企画・UIデザイン・実装・リリースまでを独力で完遂。<br>・AI駆動開発の実践: 業務外の技術領域 (Swift/macOS) であっても、AIツールを駆使することで短期間での製品化を実現。<br>・UXデザイン: 既存の監視ツールの複雑さを排除し、直感的で美しいインターフェースを設計。<br><br><b>技術スタック：</b>Swift / SwiftUI / macOS API / Combine / AI-Assisted",
      "timeline.title": "キャリアタイムライン",
      "timeline.expandAll": "すべて展開",
      "timeline.collapseAll": "すべて折りたたむ",

      "timeline.item1.date": "2014年12月",
      "timeline.item1.company": "武漢国測三聯水電設備有限公司",
      "timeline.item1.desc": "プロジェクトマネージャーに従事。",

      "timeline.item2.date": "2018年5月",
      "timeline.item2.company": "武漢藍海科創技術有限公司",
      "timeline.item2.desc": "VRエンジニアとして、Unityを使用した仮想現実プロジェクトの開発と技術研究を担当。",

      "timeline.item3.date": "2019年2月",
      "timeline.item3.company": "中冶智誠（武漢）工程技術有限公司",
      "timeline.item3.desc": "VR/ARエンジニアとして、Unityでの開発と新技術の検証に従事し、チームと共に技術課題を解決。",

      "timeline.item4.date": "2022年10月",
      "timeline.item4.company": "能達日本語学校",
      "timeline.item4.desc": "来日後、日本語学校で学習を進め、文化理解と語学力を向上。JLPT N2 を取得。",

      "timeline.item5.date": "2023年7月",
      "timeline.item5.company": "NetWisdom株式会社",
      "timeline.item5.desc": "Spring MVC / Spring Boot などを用いた Web 開発に従事。",
      "skills.title": "技術スキル",
      "common.back": "戻る"
    },
    "zh": {
      "index.title": "何暁丹 | Java开发 | Unity VR/AR | 作品集",
      "nav.home": "首页",
      "nav.about": "自我介绍",
      "nav.projects": "项目介绍",
      "nav.timeline": "职业时间线",
      "nav.skills": "技术技能",
      "nav.github": "GitHub",
      "index.hero.hello": "初次见面，",
      "index.hero.name": "我叫何晓丹。",
      "index.hero.subtitle": "Java / Unity XR / AI-Native / macOS",
      "index.cta.about": "查看自我介绍",
      "index.cta.projects": "查看项目",

      "about.title": "自我介绍",
      "common.back": "返回",
        "about.body_html": "你好，我是何晓丹。<br><br>我是一名将“空间交互思维”与“后端架构逻辑”相结合的开发者。来日前在中国拥有4年Unity VR/AR开发经验，主要面向工业与建筑领域，负责复杂系统的可视化与端到端交付，这塑造了我从零构建系统的宏观视角与实战能力。<br><br>2022年移居日本后，我转向以Java（Spring Boot）为中心的云原生后端开发。现在我在一家日本大型企业参与支付基盘的现代化重构项目，担任技术攻坚与验证（Tech Validation Lead）：<br><br>・主导团队未涉足技术（如 gRPC、AWS DynamoDB）的可行性验证（PoC）与先行开发，解决技术断层问题。<br>・基于验证结果制定实现标准与技术报告，支持项目整体实施决策。<br>・推动并建立基于 GitHub Copilot 的 AI 辅助编码工作流，显著提升团队开发效率。<br><br>业余时间，我使用 AI 跨越语言壁垒，快速用 Swift 开发并发布了多款 macOS 效率工具（如 Vortex、Omit）。我不仅会写代码，更善于用 AI 重塑开发流程。期待用我的技术广度与工程深度，为更有趣的项目注入活力。",
      "projects.title": "项目介绍",
      "projects.more": "了解更多",

    
      "projects.item1.title": "鄂州钢厂数字孪生项目",
      "projects.item1.industry": "开发行业：炼钢业",
      "projects.item1.body_html": "将钢厂在系统中进行数字复制，并与现场产生的多种数据类型打通。现场数据在系统中集中汇聚，状态一目了然；通过三维空间表达，即使不去现场也能掌握生产情况。结合相关数据与视频进行联动，在多维信息基础上实现更准确、快速的判断。",
    
      "projects.item2.title": "VR 消防训练体验",
      "projects.item2.industry": "开发行业：水力发电",
      "projects.item2.body_html": "面向水电站员工的 VR 培训应用，使灭火训练更安全、更有临场感。训练内容以 VR 呈现，可还原类似火灾的环境，无需动用真火即可开展高效训练。",
    
      "projects.item3.title": "高处作业坠落体验",
      "projects.item3.industry": "开发行业：水力发电",
      "projects.item3.body_html": "完整还原高处作业的坠落事故，通过沉浸式“恐惧体验”来提升安全意识、预防事故。",
    
      "projects.item4.title": "训练领域的 VR 系统",
      "projects.item4.industry": "开发行业：水力发电",
      "projects.item4.body_html": "佩戴 Hi5 VR 手套沉浸于虚拟空间，对需要反复实操确认的训练进行高还原度演练，如同置身真实现场。",
    
      "projects.item5.title": "佩戴 AR 眼镜的巡检应用",
      "projects.item5.industry": "开发行业：水力发电",
      "projects.item5.body_html": "远程实施工地巡检。作业者可在 AR 眼镜中查看数字化作业指引，并将现场视频/音频实时传送给远端技术人员；支援者可将带有标注的图片/指令推送并显示在作业者的 AR 眼镜上。",
    
      "projects.item6.title": "契约管理与代收付系统",
      "projects.item6.industry": "开发行业：金融·支付系统",
      "projects.item6.body_html": "面向大型支付代办服务的契约管理系统。通过与 Kickflow 的工作流联动，实现从申请、审核到打款通知的全流程统一管理。<br><br><b>本人职责：</b><br>1. 负责从基本设计到系统集成测试的各阶段<br>2. 设计与实现 BFF/BE/共通模块的 API<br>3. 设计 PostgreSQL 并编写 SQL<br>4. AWS 联动（S3、EventBridge 等）<br>5. 前端改修（React/TypeScript）与页面测试<br>6. 单体/结合测试、缺陷修复、代码评审",

      "projects.item7.title": "大型企业支付平台现代化重构",
      "projects.item7.industry": "开发行业：金融·支付系统",
      "projects.item7.body_html": "<b>项目简介：</b><br>针对日本大型企业的核心支付系统，采用最新的云原生技术栈进行全面重构。作为技术先行者，在技术路线确定的前提下，负责解决团队面临的技术断层问题，确保新技术的顺利落地。<br><br><b>核心贡献：</b><br><b>新技术验证与攻坚 (Tech Validation)：</b> 针对团队不熟悉的 gRPC 与 AWS DynamoDB 等核心技术，负责进行可行性验证 (PoC) 与先行开发，解决技术难题并确定最佳实践方案。<br><br><b>技术标准制定 (Standardization)：</b> 编写详细的技术实现报告与开发手册，确立代码规范与实施路径，为项目组的整体技术推广提供核心依据。<br><br><b>AI 开发流程落地 (AI Implementation)：</b> 主动探索并验证 GitHub Copilot 在实际开发中的应用模式，制定标准化的 AI 辅助编码工作流，推动团队开发模式的现代化转型。",
      "projects.item8.title": "Omit (macOS 极简系统监控)",
      "projects.item8.industry": "开发行业：macOS 应用",
      "projects.item8.body_html": "<b>项目名称：</b> Omit (macOS 极简系统监控)<br><br><b>项目简介：</b><br>一款基于 SwiftUI 开发的 macOS 菜单栏效率工具，旨在以最极简的设计提供系统状态监控（CPU/内存/网络）。这是我利用 AI 辅助，从零学习 Swift 并独立完成设计与开发的产品。<br><br><b>核心贡献：</b><br>・全栈独立开发: 负责从 UI/UX 设计、SwiftUI 编码到 App Notarization 的全流程。<br>・AI 驱动开发: 利用 ChatGPT/Claude 解决 Swift 语法障碍，通过 Prompt Engineering 实现复杂系统底层接口的调用。<br>・极简交互设计: 摒弃传统监控软件的繁杂，采用 Apple Native 设计语言，提供“零干扰”的用户体验。<br><br><b>技术栈：</b>Swift / SwiftUI / macOS API / Combine / AI-Assisted",
      "timeline.title": "职业时间线",
      "timeline.expandAll": "全部展开",
      "timeline.collapseAll": "全部收起",

      "timeline.item1.date": "2014年12月",
      "timeline.item1.company": "武汉国测三联水电设备有限公司",
      "timeline.item1.desc": "担任项目经理。",

      "timeline.item2.date": "2018年5月",
      "timeline.item2.company": "武汉蓝海科创技术有限公司",
      "timeline.item2.desc": "作为 VR 工程师，负责使用 Unity 开发虚拟现实项目并进行技术研究。",

      "timeline.item3.date": "2019年2月",
      "timeline.item3.company": "中冶智诚（武汉）工程技术有限公司",
      "timeline.item3.desc": "作为 VR/AR 工程师，使用 Unity 开发并验证新技术，与团队一起解决技术难题。",

      "timeline.item4.date": "2022年10月",
      "timeline.item4.company": "能达日语学校",
      "timeline.item4.desc": "来日后在日语学校学习，提升语言能力与文化理解，并取得 JLPT N2。",

      "timeline.item5.date": "2023年7月",
      "timeline.item5.company": "NetWisdom株式会社",
      "timeline.item5.desc": "从事基于 Spring MVC / Spring Boot 的 Web 开发。",
      "skills.title": "技术技能",
      "common.back": "返回"
    }
  };

  const applyI18n = (dict) => {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (dict[k]) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k]) el.innerHTML = dict[k];
    });
  };

  const setActiveBtn = (lang) => {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  };

  const switchLang = (lang) => {
    if (!LANGS.includes(lang)) lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);
    setActiveBtn(lang);                       
    const dict = DICTS[lang] || DICTS[DEFAULT_LANG];
    applyI18n(dict);
    document.documentElement.setAttribute("lang", lang);
  };

  document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => switchLang(btn.dataset.lang));
    });

    const lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    switchLang(lang);
  });
})();
