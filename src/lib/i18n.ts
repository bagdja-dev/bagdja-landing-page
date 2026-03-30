export const locales = ["en", "id", "ar", "zh", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeLabels: Record<Locale, string> = {
  en: "English",
  id: "Indonesia",
  ar: "العربية",
  zh: "中文",
  es: "Español",
};

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export type Messages = {
  nav: {
    problem: string;
    solution: string;
    platform: string;
    services: string;
    market: string;
    business: string;
    gtm: string;
    email: string;
    whatsapp: string;
  };
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaEmail: string;
    stats: {
      sdk: string;
      setup: string;
      speed: string;
      cost: string;
    };
    right: {
      title: string;
      subtitle: string;
      storeTitle: string;
      storeDesc: string;
      identityTitle: string;
      identityDesc: string;
      monetizeTitle: string;
      monetizeDesc: string;
    };
  };
  sections: {
    problemEyebrow: string;
    problemTitle: string;
    problemSubtitle: string;
    developerDilemma: string;
    userFriction: string;
    devStats: {
      marketing: string;
      auth: string;
      billing: string;
      footnote: string;
    };
    userStats: {
      passwords: string;
      abandon: string;
      ssoPref: string;
      ssoOffer: string;
      footnote: string;
    };
    solutionEyebrow: string;
    solutionTitle: string;
    solutionSubtitle: string;
    pillars: {
      storeTitle: string;
      storeItems: string[];
      identityTitle: string;
      identityItems: string[];
      monetizeTitle: string;
      monetizeItems: string[];
    };
    journeyTitle: string;
    journeySubtitle: string;
    journeyStats: {
      time: string;
      onboarding: string;
      abandonment: string;
    };
    platformEyebrow: string;
    platformTitle: string;
    platformSubtitle: string;
    devExpTitle: string;
    devExp: {
      authTitle: string;
      authDesc: string;
      payTitle: string;
      payDesc: string;
      userTitle: string;
      userDesc: string;
      analyticsTitle: string;
      analyticsDesc: string;
    };
    integrationTitle: string;
    integrationSubtitle: string;
    integrationStats: {
      launch: string;
      saved: string;
    };
    servicesEyebrow: string;
    servicesTitle: string;
    servicesSubtitle: string;
    services: {
      customTitle: string;
      customItems: string[];
      procurementTitle: string;
      procurementItems: string[];
      partnershipTitle: string;
      partnershipItems: string[];
      consultTitle: string;
      consultDesc: string;
      consultWhatsApp: string;
      consultEmail: string;
    };
    marketEyebrow: string;
    marketTitle: string;
    marketSubtitle: string;
    marketStats: {
      growth: string;
      customers: string;
      multiple: string;
    };
    segmentsTitle: string;
    segmentsItems: string[];
    whyNowTitle: string;
    whyNowBody: string;
    businessEyebrow: string;
    businessTitle: string;
    businessSubtitle: string;
    revenueShareTitle: string;
    revenueShareItems: string[];
    subscriptionsTitle: string;
    subscriptionsItems: string[];
    enterpriseTitle: string;
    enterpriseItems: string[];
    projection: {
      y1: string;
      y2: string;
      y3: string;
      breakeven: string;
    };
    gtmEyebrow: string;
    gtmTitle: string;
    gtmSubtitle: string;
    phases: {
      p1: string;
      p1Body: string;
      p2: string;
      p2Body: string;
      p3: string;
      p3Body: string;
    };
    gtmStats: {
      apps: string;
      users: string;
      nps: string;
    };
    ctaTitle: string;
    ctaBody: string;
    ctaPrimary: string;
  };
  footer: {
    tagline: string;
    rights: string;
    whatsappLabel: string;
  };
};

const en: Messages = {
  nav: {
    problem: "Problem",
    solution: "Solution",
    platform: "Platform",
    services: "Services",
    market: "Market",
    business: "Business",
    gtm: "Go-to-market",
    email: "Email",
    whatsapp: "WhatsApp",
  },
  hero: {
    pill: "App Store × Identity Platform × Monetization Layer",
    title: "The Integrated Distribution Platform for Modern Developers",
    subtitle:
      "Bagdja unifies discovery, authentication, and billing into one seamless ecosystem — so teams can ship in days, not months.",
    ctaWhatsApp: "Talk on WhatsApp",
    ctaEmail: "Email us",
    stats: {
      sdk: "Integration surface",
      setup: "Setup time",
      speed: "Faster time-to-market",
      cost: "Cost reduction",
    },
    right: {
      title: "One platform, three pillars",
      subtitle: "Store • Identity • Monetize",
      storeTitle: "Store",
      storeDesc: "Curated marketplace, recommendations, SEO pages, reviews.",
      identityTitle: "Identity",
      identityDesc: "SSO, social login, MFA, passwordless, user management.",
      monetizeTitle: "Monetize",
      monetizeDesc:
        "Subscriptions, usage billing, tax compliance, payouts & analytics.",
    },
  },
  sections: {
    problemEyebrow: "01 — The Problem",
    problemTitle: "Developers waste months on infrastructure. Users churn from friction.",
    problemSubtitle:
      "Fragmented distribution, authentication, and monetization tooling slows teams down and hurts conversion.",
    developerDilemma: "The Developer Dilemma",
    userFriction: "The User Friction",
    devStats: {
      marketing: "time on marketing & distribution",
      auth: "to build secure auth",
      billing: "to implement billing & compliance",
      footnote:
        "Teams end up stitching 3–5 vendors together. Hidden maintenance cost compounds over time.",
    },
    userStats: {
      passwords: "passwords per user (avg.)",
      abandon: "abandon registration if forced to create accounts",
      ssoPref: "prefer SSO",
      ssoOffer: "apps offer SSO",
      footnote:
        "High friction means lower onboarding conversion, higher churn, and lower LTV.",
    },
    solutionEyebrow: "02 — Our Solution",
    solutionTitle: "One platform. Three pillars. Infinite possibilities.",
    solutionSubtitle:
      "Bagdja provides a unified approach: one SDK, one dashboard, unified analytics.",
    pillars: {
      storeTitle: "Store (Discovery & Distribution)",
      storeItems: [
        "Curated marketplace & app pages",
        "Intelligent recommendation engine",
        "Ratings, reviews, and better discovery",
      ],
      identityTitle: "Identity (Authentication)",
      identityItems: [
        "SSO, social login, MFA, passwordless",
        "Centralized user profiles & access control",
        "Reduce onboarding friction across apps",
      ],
      monetizeTitle: "Monetize (Revenue Engine)",
      monetizeItems: [
        "Subscriptions & usage-based billing",
        "Global tax compliance & payouts",
        "Revenue analytics and automation",
      ],
    },
    journeyTitle: "The 30-second journey",
    journeySubtitle: "Discovery → Auth → Subscribe → Value — with near-zero friction.",
    journeyStats: {
      time: "From discovery to value",
      onboarding: "Faster onboarding",
      abandonment: "Abandonment reduction",
    },
    platformEyebrow: "03 — The Platform",
    platformTitle: "Built for developers, loved by users",
    platformSubtitle: "Make infrastructure invisible. Focus on product, not plumbing.",
    devExpTitle: "Developer experience",
    devExp: {
      authTitle: "Zero-setup auth",
      authDesc: "Email, social, SSO, MFA, passwordless — ready out of the box.",
      payTitle: "Built-in payments",
      payDesc: "Subscriptions, usage billing, taxes, compliance, payouts.",
      userTitle: "Central user management",
      userDesc: "Profiles, roles, permissions, and admin tooling centralized.",
      analyticsTitle: "Unified analytics",
      analyticsDesc: "Acquisition, engagement, revenue, churn — in one dashboard.",
    },
    integrationTitle: "Sample integration",
    integrationSubtitle: "One SDK and a clean workflow for auth + billing.",
    integrationStats: {
      launch: "Typical launch time",
      saved: "Time saved vs in-house",
    },
    servicesEyebrow: "Services",
    servicesTitle: "Bagdja can also be your execution partner",
    servicesSubtitle:
      "Beyond the platform, we help teams ship faster with end-to-end services: build, procurement, and partnerships.",
    services: {
      customTitle: "Custom App Development",
      customItems: [
        "Project-based app development",
        "Discovery → design → build → deploy",
        "Optional: integrated auth & billing",
      ],
      procurementTitle: "Procurement",
      procurementItems: [
        "Procure software/solutions to fit your needs",
        "Vendor selection + integration + rollout",
        "Documentation, training, and support",
      ],
      partnershipTitle: "Partnership",
      partnershipItems: [
        "Product & distribution collaboration",
        "Co-marketing and channel partnerships",
        "Ecosystem integrations (API/SSO/Billing)",
      ],
      consultTitle: "Need a quick consult?",
      consultDesc:
        "Share your requirements — we’ll recommend the best route: platform, services, or a combination.",
      consultWhatsApp: "WhatsApp",
      consultEmail: "Email",
    },
    marketEyebrow: "04 — Market Opportunity",
    marketTitle: "A massive ecosystem waiting to be unified",
    marketSubtitle:
      "Bagdja sits at the intersection of identity, billing, and SaaS distribution.",
    marketStats: {
      growth: "Combined market growth (2024 → 2030)",
      customers: "Potential developer customers (target segments)",
      multiple: "Growth in 6 years",
    },
    segmentsTitle: "Target segments",
    segmentsItems: [
      "Indie developers (solo builders & bootstrappers)",
      "Small teams (2–10 person startups)",
      "AI tool builders (usage-based billing complexity)",
      "Niche B2B creators (distribution & licensing challenges)",
    ],
    whyNowTitle: "Why now",
    whyNowBody:
      "Developers prefer buy-first infrastructure, but still regret DIY due to hidden maintenance. Bagdja delivers a middle ground: powerful, accessible, and distribution-first.",
    businessEyebrow: "05 — Business Model",
    businessTitle: "Multiple revenue streams, sustainable growth",
    businessSubtitle:
      "Fair economics for developers, scalable revenue for the platform.",
    revenueShareTitle: "Revenue share (5–15%)",
    revenueShareItems: [
      "Lower than traditional app stores (30%)",
      "Covers distribution + auth + billing infrastructure",
      "Aligned incentives: earn when devs earn",
    ],
    subscriptionsTitle: "Subscriptions",
    subscriptionsItems: [
      "Freemium with Pro ($29/mo)",
      "Enterprise ($199/mo) for advanced needs",
      "Priority support & custom integrations",
    ],
    enterpriseTitle: "Enterprise & placement",
    enterpriseItems: [
      "White-label / private marketplace deployments",
      "Premium placement & sponsored discovery",
      "Usage-based API & infrastructure fees",
    ],
    projection: {
      y1: "Year 1 ARR (projected)",
      y2: "Year 2 ARR (projected)",
      y3: "Year 3 ARR (projected)",
      breakeven: "Break-even (projected)",
    },
    gtmEyebrow: "07 — Go-to-market",
    gtmTitle: "From zero to ecosystem",
    gtmSubtitle:
      "Start with foundation apps, then accelerate adoption via community and network effects.",
    phases: {
      p1: "Phase 1 (Months 1–6)",
      p1Body:
        "Launch 5–10 high-quality foundation apps to prove the platform and attract early users.",
      p2: "Phase 2 (Months 6–12)",
      p2Body:
        "Indie developer outreach with freemium tier, hackathons, and referral programs.",
      p3: "Phase 3 (Year 2+)",
      p3Body:
        "Scale via network effects, enterprise tier, international expansion, and AI tool focus.",
    },
    gtmStats: {
      apps: "Target apps (Year 1)",
      users: "Target users (Year 1)",
      nps: "Target satisfaction",
    },
    ctaTitle: "Build products, not infrastructure.",
    ctaBody:
      "Bagdja is building the default platform where great products find their audience and users get a seamless identity + subscription experience across apps.",
    ctaPrimary: "Start a conversation",
  },
  footer: {
    tagline: "Store × Identity × Monetize — in one integrated platform.",
    rights: "All rights reserved.",
    whatsappLabel: "WhatsApp:",
  },
};

const id: Messages = {
  ...en,
  nav: {
    problem: "Masalah",
    solution: "Solusi",
    platform: "Platform",
    services: "Layanan",
    market: "Pasar",
    business: "Bisnis",
    gtm: "Go-to-market",
    email: "Email",
    whatsapp: "WhatsApp",
  },
  hero: {
    ...en.hero,
    title: "Platform Distribusi Terintegrasi untuk Developer Modern",
    subtitle:
      "Bagdja menyatukan discovery, autentikasi, dan billing dalam satu ekosistem — agar tim bisa ship dalam hitungan hari, bukan bulan.",
    ctaWhatsApp: "Chat via WhatsApp",
    ctaEmail: "Kirim Email",
    right: {
      ...en.hero.right,
      title: "Satu platform, tiga pilar",
      subtitle: "Store • Identity • Monetize",
      storeDesc: "Marketplace terkurasi, rekomendasi, SEO page, dan ulasan.",
      identityDesc: "SSO, social login, MFA, passwordless, dan user management.",
      monetizeDesc:
        "Subscription, usage billing, compliance pajak, payout & analytics.",
    },
  },
  sections: {
    ...en.sections,
    problemEyebrow: "01 — Masalah",
    problemTitle:
      "Developer kehilangan berbulan-bulan untuk infrastruktur. User churn karena friction.",
    problemSubtitle:
      "Tooling yang terfragmentasi untuk distribusi, autentikasi, dan monetisasi memperlambat tim dan menurunkan konversi.",
    developerDilemma: "Dilema Developer",
    userFriction: "Friction Pengguna",
    solutionEyebrow: "02 — Solusi",
    platformEyebrow: "03 — Platform",
    platformTitle: "Dibuat untuk developer, dicintai pengguna",
    platformSubtitle:
      "Buat infrastruktur jadi tidak terlihat. Fokus ke produk, bukan plumbing.",
    servicesTitle: "Bagdja juga hadir sebagai partner eksekusi",
    servicesSubtitle:
      "Selain platform, kami bantu tim ship lebih cepat lewat layanan end-to-end: build, pengadaan, dan partnership.",
    marketTitle: "Ekosistem besar yang menunggu untuk dipersatukan",
    whyNowTitle: "Kenapa sekarang",
    gtmTitle: "Dari nol menjadi ekosistem",
    ctaTitle: "Bangun produk, bukan infrastruktur.",
    ctaPrimary: "Mulai diskusi",
  },
  footer: {
    ...en.footer,
    tagline: "Store × Identity × Monetize — dalam satu platform terintegrasi.",
  },
};

const ar: Messages = {
  ...en,
  nav: {
    problem: "المشكلة",
    solution: "الحل",
    platform: "المنصة",
    services: "الخدمات",
    market: "السوق",
    business: "نموذج العمل",
    gtm: "الذهاب إلى السوق",
    email: "البريد",
    whatsapp: "واتساب",
  },
  hero: {
    ...en.hero,
    title: "منصة التوزيع المتكاملة للمطورين العصريين",
    subtitle:
      "Bagdja توحّد الاكتشاف والمصادقة والفوترة في نظام واحد — لتطلق الفرق منتجاتها خلال أيام لا أشهر.",
    ctaWhatsApp: "تواصل عبر واتساب",
    ctaEmail: "راسلنا",
    right: {
      ...en.hero.right,
      title: "منصة واحدة، ثلاثة أعمدة",
      subtitle: "Store • Identity • Monetize",
      storeDesc: "متجر مُنسّق، توصيات، صفحات SEO، وتقييمات.",
      identityDesc: "SSO، تسجيل اجتماعي، MFA، بدون كلمة مرور، وإدارة المستخدمين.",
      monetizeDesc: "اشتراكات، فوترة حسب الاستخدام، امتثال ضريبي، مدفوعات وتحليلات.",
    },
  },
  sections: {
    ...en.sections,
    problemEyebrow: "01 — المشكلة",
    problemTitle:
      "المطورون يهدرون شهوراً على البنية التحتية. المستخدمون ينسحبون بسبب التعقيد.",
    problemSubtitle:
      "تجزئة أدوات التوزيع والمصادقة والدفع تبطئ الفرق وتضر بالتحويل.",
    developerDilemma: "معضلة المطور",
    userFriction: "تعقيد تجربة المستخدم",
    solutionEyebrow: "02 — الحل",
    solutionTitle: "منصة واحدة. ثلاثة أعمدة. إمكانيات لا نهائية.",
    platformEyebrow: "03 — المنصة",
    platformTitle: "مبنية للمطورين، محبوبة للمستخدمين",
    servicesEyebrow: "الخدمات",
    servicesTitle: "Bagdja شريكك في التنفيذ أيضاً",
    servicesSubtitle:
      "إلى جانب المنصة، نساعد الفرق على الإطلاق أسرع عبر خدمات شاملة: البناء، الشراء، والشراكات.",
    marketEyebrow: "04 — فرصة السوق",
    marketTitle: "نظام ضخم ينتظر التوحيد",
    businessEyebrow: "05 — نموذج العمل",
    gtmEyebrow: "07 — الذهاب إلى السوق",
    gtmTitle: "من الصفر إلى نظام متكامل",
    ctaTitle: "ابنِ منتجات، لا بنية تحتية.",
    ctaPrimary: "ابدأ المحادثة",
  },
  footer: {
    ...en.footer,
    tagline: "Store × Identity × Monetize — ضمن منصة واحدة متكاملة.",
    rights: "جميع الحقوق محفوظة.",
    whatsappLabel: "واتساب:",
  },
};

const zh: Messages = {
  ...en,
  nav: {
    problem: "痛点",
    solution: "方案",
    platform: "平台",
    services: "服务",
    market: "市场",
    business: "商业模式",
    gtm: "增长策略",
    email: "邮箱",
    whatsapp: "WhatsApp",
  },
  hero: {
    ...en.hero,
    title: "面向现代开发者的一体化分发平台",
    subtitle:
      "Bagdja 将应用发现、身份认证与计费整合为一个生态系统——让团队以“天”为单位交付，而不是“月”。",
    ctaWhatsApp: "WhatsApp 咨询",
    ctaEmail: "发送邮件",
    right: {
      ...en.hero.right,
      title: "一个平台，三大支柱",
      subtitle: "Store • Identity • Monetize",
      storeDesc: "精选应用市场、推荐、SEO 页面与评价体系。",
      identityDesc: "SSO、社交登录、MFA、免密与用户管理。",
      monetizeDesc: "订阅、按量计费、税务合规、打款与数据分析。",
    },
  },
  sections: {
    ...en.sections,
    problemEyebrow: "01 — 痛点",
    problemTitle: "开发团队被基础设施拖慢数月；用户因摩擦而流失。",
    problemSubtitle: "分发、认证与变现工具割裂，降低速度并损害转化。",
    developerDilemma: "开发者困境",
    userFriction: "用户摩擦",
    solutionEyebrow: "02 — 方案",
    solutionTitle: "一个平台。三大支柱。无限可能。",
    platformEyebrow: "03 — 平台",
    platformTitle: "为开发者而生，让用户爱用",
    servicesEyebrow: "服务",
    servicesTitle: "Bagdja 也可以成为你的交付伙伴",
    servicesSubtitle:
      "除了平台，我们也提供端到端服务：定制开发、采购落地与合作伙伴关系。",
    marketEyebrow: "04 — 市场机会",
    marketTitle: "一个等待被统一的巨大生态",
    businessEyebrow: "05 — 商业模式",
    gtmEyebrow: "07 — 增长策略",
    gtmTitle: "从 0 到生态系统",
    ctaTitle: "做产品，不做基础设施。",
    ctaPrimary: "开始沟通",
  },
  footer: {
    ...en.footer,
    tagline: "Store × Identity × Monetize — 一体化平台。",
  },
};

const es: Messages = {
  ...en,
  nav: {
    problem: "Problema",
    solution: "Solución",
    platform: "Plataforma",
    services: "Servicios",
    market: "Mercado",
    business: "Negocio",
    gtm: "Go-to-market",
    email: "Email",
    whatsapp: "WhatsApp",
  },
  hero: {
    ...en.hero,
    title: "La plataforma integrada de distribución para desarrolladores modernos",
    subtitle:
      "Bagdja unifica descubrimiento, autenticación y facturación en un solo ecosistema — para que los equipos lancen en días, no en meses.",
    ctaWhatsApp: "Hablar por WhatsApp",
    ctaEmail: "Escríbenos",
    right: {
      ...en.hero.right,
      title: "Una plataforma, tres pilares",
      subtitle: "Store • Identity • Monetize",
      storeDesc: "Marketplace curado, recomendaciones, páginas SEO y reseñas.",
      identityDesc: "SSO, login social, MFA, sin contraseña y gestión de usuarios.",
      monetizeDesc:
        "Suscripciones, cobro por uso, cumplimiento fiscal, pagos y analítica.",
    },
  },
  sections: {
    ...en.sections,
    problemEyebrow: "01 — El Problema",
    problemTitle:
      "Los equipos pierden meses en infraestructura. Los usuarios abandonan por fricción.",
    problemSubtitle:
      "La fragmentación en distribución, identidad y monetización ralentiza y reduce la conversión.",
    solutionEyebrow: "02 — Nuestra Solución",
    platformEyebrow: "03 — La Plataforma",
    servicesEyebrow: "Servicios",
    servicesTitle: "Bagdja también puede ser tu socio de ejecución",
    servicesSubtitle:
      "Además de la plataforma, ayudamos a equipos a lanzar más rápido con servicios end-to-end: desarrollo, procurement y partnerships.",
    marketEyebrow: "04 — Oportunidad de Mercado",
    businessEyebrow: "05 — Modelo de Negocio",
    gtmEyebrow: "07 — Go-to-market",
    ctaTitle: "Crea productos, no infraestructura.",
    ctaPrimary: "Iniciar conversación",
  },
  footer: {
    ...en.footer,
    tagline: "Store × Identity × Monetize — en una plataforma integrada.",
  },
};

export const messagesByLocale: Record<Locale, Messages> = {
  en,
  id,
  ar,
  zh,
  es,
};

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}
