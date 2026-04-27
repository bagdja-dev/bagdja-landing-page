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
  heroCarousel: {
    slides: Array<{
      id: string;
      name: string;
      pill: string;
      title: string;
      subtitle: string;
      ctaWhatsApp: string;
      ctaEmail: string;
      stats: Array<{ value: string; label: string }>;
      right: {
        title: string;
        subtitle: string;
        cards: Array<{ title: string; desc: string }>;
      };
    }>;
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
      items: Array<{
        id: string;
        title: string;
        description: string;
        image: string;
      }>;
    };
    latestProjectEyebrow: string;
    latestProjectTitle: string;
    latestProjectSubtitle: string;
    latestProjectSeeAll: string;
    latestProjects: Array<{
      id: string;
      media: string;
      mediaType: "image" | "video";
      title: string;
      description: string;
      demoUrl?: string;
      detailUrl?: string;
      learnMoreUrl: string;
    }>;
    ourProductEyebrow: string;
    ourProductTitle: string;
    ourProductSubtitle: string;
    ourProducts: Array<{
      id: string;
      name: string;
      tagline: string;
      description: string;
      image: string;
      link: string;
    }>;
    contactEyebrow: string;
    contactTitle: string;
    contactSubtitle: string;
    contactFormName: string;
    contactFormEmail: string;
    contactFormMessage: string;
    contactFormSendEmail: string;
    contactFormSendWA: string;
    contactLocations: Array<{
      id: string;
      name: string;
      address: string;
      lat: number;
      lng: number;
    }>;
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
    partnerEyebrow: string;
    partnerTitle: string;
    partnerSubtitle: string;
    partners: Array<{ name: string; logo: string }>;
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
    problem: "Platform",
    solution: "Development",
    platform: "Store",
    services: "Project",
    market: "Contact",
    business: "Business",
    gtm: "Go-to-market",
    email: "Email",
    whatsapp: "6285188448383",
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
  heroCarousel: {
    slides: [
      {
        id: "platform",
        name: "Bagdja Platform",
        pill: "App Store × Identity Platform × Monetization Layer",
        title: "The Integrated Distribution Platform for Modern Developers",
        subtitle:
          "Bagdja unifies discovery, authentication, and billing into one seamless ecosystem — so teams can ship in days, not months.",
        ctaWhatsApp: "Talk on WhatsApp",
        ctaEmail: "Email us",
        stats: [
          { value: "< 5 min", label: "Setup time" },
          { value: "80%", label: "Faster time-to-market" },
          { value: "60%", label: "Cost reduction" },
        ],
        right: {
          title: "One platform, three pillars",
          subtitle: "Store • Identity • Monetize",
          cards: [
            {
              title: "Store",
              desc: "Curated marketplace, recommendations, SEO pages, reviews.",
            },
            {
              title: "Identity",
              desc: "SSO, social login, MFA, passwordless, user management.",
            },
            {
              title: "Monetize",
              desc: "Subscriptions, usage billing, tax compliance, payouts & analytics.",
            },
          ],
        },
      },
      {
        id: "software-house",
        name: "Bagdja Development",
        pill: "Custom Apps × Product Engineering × Delivery Partner",
        title: "Ship custom web & mobile apps with Bagdja",
        subtitle:
          "We design, build, and maintain custom applications for startups and teams — from MVP to production.",
        ctaWhatsApp: "Get a quote on WhatsApp",
        ctaEmail: "Request via email",
        stats: [
          { value: "Web + Mobile", label: "Platforms" },
          { value: "End-to-end", label: "Design → Dev → QA" },
          { value: "Integrations", label: "Payments, auth, analytics" },
        ],
        right: {
          title: "Your delivery partner",
          subtitle: "Build • Integrate • Scale",
          cards: [
            {
              title: "Custom build",
              desc: "MVPs, dashboards, and production apps tailored to your needs.",
            },
            {
              title: "System integration",
              desc: "Connect payments, identity, APIs, and data pipelines.",
            },
            {
              title: "Scale & maintain",
              desc: "Monitoring, iteration, and long-term support.",
            },
          ],
        },
      },
    ],
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
    servicesTitle: "Our Services",
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
      items: [
        {
          id: "custom",
          title: "Custom App Development",
          description: "We design, build, and maintain custom applications for startups and teams — from MVP to production. Our team handles the full lifecycle from discovery to deployment.",
          image: "/images/services/custom-dev.svg",
        },
        {
          id: "procurement",
          title: "Procurement & Integration",
          description: "We help you procure software and solutions that fit your needs. From vendor selection to integration and rollout, we provide end-to-end support with documentation, training, and ongoing support.",
          image: "/images/services/procurement.svg",
        },
        {
          id: "partnership",
          title: "Partnership & Collaboration",
          description: "Build product and distribution collaboration, co-marketing and channel partnerships, and ecosystem integrations including API, SSO, and billing connections.",
          image: "/images/services/partnership.svg",
        },
      ],
    },
    latestProjectEyebrow: "07 — Our Work",
    latestProjectTitle: "Latest Projects",
    latestProjectSubtitle: "Explore our recent work and see how we've helped businesses grow.",
    latestProjectSeeAll: "See All Projects",
    latestProjects: [
      {
        id: "project-1",
        media: "/images/projects/project-1.jpg",
        mediaType: "image",
        title: "E-Commerce Platform Redesign",
        description: "A complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.",
        demoUrl: "#",
        detailUrl: "#",
        learnMoreUrl: "#",
      },
      {
        id: "project-2",
        media: "/images/projects/project-2.jpg",
        mediaType: "image",
        title: "Mobile Banking App",
        description: "Secure and intuitive mobile banking application with biometric authentication and real-time notifications.",
        demoUrl: "#",
        learnMoreUrl: "#",
      },
      {
        id: "project-3",
        media: "/images/projects/project-3.jpg",
        mediaType: "image",
        title: "Healthcare Dashboard",
        description: "Comprehensive dashboard for healthcare providers to monitor patient data and manage appointments.",
        demoUrl: "#",
        detailUrl: "#",
        learnMoreUrl: "#",
      },
      {
        id: "project-4",
        media: "/images/projects/project-4.jpg",
        mediaType: "image",
        title: "AI Content Generator",
        description: "AI-powered content generation platform for marketing teams to create engaging content at scale.",
        learnMoreUrl: "#",
      },
    ],
    ourProductEyebrow: "08 — Our Product",
    ourProductTitle: "Powerful Products Built on Bagdja",
    ourProductSubtitle:
      "Discover our suite of products designed to help developers ship faster and users get a seamless experience.",
    ourProducts: [
      {
        id: "auth-core",
        name: "AuthCore",
        tagline: "Enterprise-grade authentication made simple",
        description: "SSO, social login, MFA, passwordless — everything you need for secure user authentication in one SDK.",
        image: "/images/products/auth-core.jpg",
        link: "#",
      },
      {
        id: "billflow",
        name: "BillFlow",
        tagline: "Recurring billing without the complexity",
        description: "Subscriptions, usage-based billing, tax compliance, and global payouts — all automated.",
        image: "/images/products/billflow.jpg",
        link: "#",
      },
      {
        id: "storekit",
        name: "StoreKit",
        tagline: "Curated app marketplace in a box",
        description: "App pages, SEO optimization, ratings, reviews, and intelligent recommendations for your products.",
        image: "/images/products/storekit.jpg",
        link: "#",
      },
      {
        id: "insights",
        name: "Insights",
        tagline: "Unified analytics across your apps",
        description: "Acquisition, engagement, revenue, and churn analytics in one dashboard.",
        image: "/images/products/insights.jpg",
        link: "#",
      },
      {
        id: "sdk-connect",
        name: "SDK Connect",
        tagline: "One SDK, infinite possibilities",
        description: "Connect all Bagdja products with a single integration point.",
        image: "/images/products/sdk-connect.jpg",
        link: "#",
      },
      {
        id: "cloud-deploy",
        name: "CloudDeploy",
        tagline: "One-click deployment to global edge",
        description: "Deploy your apps to our global network with automatic scaling and CDN.",
        image: "/images/products/cloud-deploy.jpg",
        link: "#",
      },
    ],
    contactEyebrow: "09 — Contact Us",
    contactTitle: "Let's Talk",
    contactSubtitle: "Have a project in mind? We'd love to hear from you.",
    contactFormName: "Your Name",
    contactFormEmail: "Email Address",
    contactFormMessage: "Tell us about your project...",
    contactFormSendEmail: "Send Email",
    contactFormSendWA: "Send WhatsApp",
    contactLocations: [
      {
        id: "hq-jakarta",
        name: "Jakarta HQ",
        address: "Jl. Sudirman No. 123, Jakarta Selatan",
        lat: -6.2088,
        lng: 106.8456,
      },
      {
        id: "office-bandung",
        name: "Bandung Office",
        address: "Jl. Asia Afrika No. 45, Bandung",
        lat: -6.9175,
        lng: 107.6191,
      },
    ],
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
    partnerEyebrow: "06 — Our Partners",
    partnerTitle: "Our Partners",
    partnerSubtitle: "We work with industry leaders to deliver exceptional results.",
    partners: [
      { name: "InnovateLabs", logo: "/images/partners/allpower.png" },
      { name: "DataFlow", logo: "/images/partners/sfi.png" },
      { name: "CloudBase", logo: "/images/partners/cloudflare.png" },
      { name: "SecureNet", logo: "/images/partners/sbb.png" },
      { name: "CodeCraft", logo: "/images/partners/unilever.png" },
      { name: "CodeCraft", logo: "/images/partners/gcf.png" },
      { name: "AppWorks", logo: "/images/partners/shoppias.webp" },
      { name: "CloudBase", logo: "/images/partners/jamkrindo.webp" },
      { name: "DevStudio", logo: "/images/partners/yuanta.png" },
      { name: "DevStudio", logo: "/images/partners/sreeya.png" },
      { name: "SecureNet", logo: "/images/partners/akasia.png" },
      { name: "TechCorp", logo: "/images/partners/enerren.png" },
    ],
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
  heroCarousel: {
    slides: [
      {
        id: "platform",
        name: "Bagdja Platform",
        pill: en.hero.pill,
        title: "Platform Distribusi Terintegrasi untuk Developer Modern",
        subtitle:
          "Bagdja menyatukan discovery, autentikasi, dan billing dalam satu ekosistem — agar tim bisa ship dalam hitungan hari, bukan bulan.",
        ctaWhatsApp: "Chat via WhatsApp",
        ctaEmail: "Kirim Email",
        stats: [
          { value: "< 5 min", label: en.hero.stats.setup },
          { value: "80%", label: en.hero.stats.speed },
          { value: "60%", label: en.hero.stats.cost },
        ],
        right: {
          title: "Satu platform, tiga pilar",
          subtitle: "Store • Identity • Monetize",
          cards: [
            { title: en.hero.right.storeTitle, desc: "Marketplace terkurasi, rekomendasi, SEO page, dan ulasan." },
            { title: en.hero.right.identityTitle, desc: "SSO, social login, MFA, passwordless, dan user management." },
            {
              title: en.hero.right.monetizeTitle,
              desc: "Subscription, usage billing, compliance pajak, payout & analytics.",
            },
          ],
        },
      },
      {
        id: "software-house",
        name: "Bagdja Development",
        pill: "Aplikasi Kustom × Product Engineering × Partner Eksekusi",
        title: "Bangun aplikasi web & mobile kustom bersama Bagdja",
        subtitle:
          "Kami bantu desain, development, dan maintenance aplikasi kustom — dari MVP sampai production.",
        ctaWhatsApp: "Minta penawaran via WhatsApp",
        ctaEmail: "Minta via Email",
        stats: [
          { value: "Web + Mobile", label: "Platform" },
          { value: "End-to-end", label: "Desain → Dev → QA" },
          { value: "Integrasi", label: "Payment, auth, analytics" },
          { value: "Support", label: "Opsi maintenance" },
        ],
        right: {
          title: "Partner eksekusi Anda",
          subtitle: "Build • Integrasi • Scale",
          cards: [
            {
              title: "Pembuatan kustom",
              desc: "MVP, dashboard, dan aplikasi produksi sesuai kebutuhan.",
            },
            {
              title: "Integrasi sistem",
              desc: "Hubungkan payment, identity, API, dan data.",
            },
            {
              title: "Scale & maintenance",
              desc: "Monitoring, iterasi, dan support jangka panjang.",
            },
          ],
        },
      },
    ],
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
    servicesTitle: "Layanan Kami",
    servicesSubtitle:
      "Selain platform, kami bantu tim ship lebih cepat lewat layanan end-to-end: build, pengadaan, dan partnership.",
    marketTitle: "Ekosistem besar yang menunggu untuk dipersatukan",
    whyNowTitle: "Kenapa sekarang",
    gtmTitle: "Dari nol menjadi ekosistem",
    partnerEyebrow: "06 — Mitra Kami",
    partnerTitle: "Partner Kami",
    partnerSubtitle: "Kami bekerja dengan pemimpin industri untuk memberikan hasil luar biasa.",
    ctaTitle: "Bangun produk, bukan infrastruktur.",
    ctaPrimary: "Mulai diskusi",
    contactEyebrow: "09 — Hubungi Kami",
    contactTitle: "Mari Berdiskusi",
    contactSubtitle: "Punya proyek menarik? Kami ingin mendengar ide Anda.",
    contactFormName: "Nama Anda",
    contactFormEmail: "Alamat Email",
    contactFormMessage: "Ceritakan proyek Anda...",
    contactFormSendEmail: "Kirim Email",
    contactFormSendWA: "Kirim WhatsApp",
    contactLocations: [
      {
        id: "hq-jakarta",
        name: "Jakarta HQ",
        address: "Jl. Sudirman No. 123, Jakarta Selatan",
        lat: -6.2088,
        lng: 106.8456,
      },
      {
        id: "office-bandung",
        name: "Kantor Bandung",
        address: "Jl. Asia Afrika No. 45, Bandung",
        lat: -6.9175,
        lng: 107.6191,
      },
    ],
    latestProjectEyebrow: "07 — Portofolio",
    latestProjectTitle: "Proyek Terbaru",
    latestProjectSubtitle: "Lihat hasil kerja kami dan bagaimana kami membantu bisnis berkembang.",
    latestProjectSeeAll: "Lihat Semua Proyek",
    ourProductEyebrow: "08 — Produk Kami",
    ourProductTitle: "Produk Unggulan di Atas Bagdja",
    ourProductSubtitle: "Temukan rangkaian produk yang dirancang untuk membantu developer ship lebih cepat.",
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
  heroCarousel: {
    slides: [
      {
        id: "platform",
        name: "Bagdja Platform",
        pill: en.hero.pill,
        title: "منصة التوزيع المتكاملة للمطورين العصريين",
        subtitle:
          "Bagdja توحّد الاكتشاف والمصادقة والفوترة في نظام واحد — لتطلق الفرق منتجاتها خلال أيام لا أشهر.",
        ctaWhatsApp: "تواصل عبر واتساب",
        ctaEmail: "راسلنا",
        stats: [
          { value: "< 5 min", label: en.hero.stats.setup },
          { value: "80%", label: en.hero.stats.speed },
          { value: "60%", label: en.hero.stats.cost },
        ],
        right: {
          title: "منصة واحدة، ثلاثة أعمدة",
          subtitle: "Store • Identity • Monetize",
          cards: [
            { title: en.hero.right.storeTitle, desc: "متجر مُنسّق، توصيات، صفحات SEO، وتقييمات." },
            { title: en.hero.right.identityTitle, desc: "SSO، تسجيل اجتماعي، MFA، بدون كلمة مرور، وإدارة المستخدمين." },
            { title: en.hero.right.monetizeTitle, desc: "اشتراكات، فوترة حسب الاستخدام، امتثال ضريبي، مدفوعات وتحليلات." },
          ],
        },
      },
      {
        id: "software-house",
        name: "Bagdja Development",
        pill: "تطبيقات مخصصة × هندسة المنتجات × شريك تسليم",
        title: "ابنِ تطبيقات ويب وموبايل مخصصة مع Bagdja",
        subtitle: "نصمم ونبني ونصون تطبيقات مخصصة — من MVP إلى الإنتاج.",
        ctaWhatsApp: "اطلب عرضاً عبر واتساب",
        ctaEmail: "اطلب عبر البريد",
        stats: [
          { value: "ويب + موبايل", label: "المنصات" },
          { value: "شامل", label: "تصميم → تطوير → QA" },
          { value: "تكاملات", label: "مدفوعات، هوية، تحليلات" },
          { value: "دعم", label: "خيارات الصيانة" },
        ],
        right: {
          title: "شريك التسليم الخاص بك",
          subtitle: "بناء • تكامل • توسّع",
          cards: [
            { title: "بناء مخصص", desc: "MVP ولوحات تحكم وتطبيقات إنتاج وفق احتياجك." },
            { title: "تكامل الأنظمة", desc: "ربط المدفوعات والهوية وواجهات API وخطوط البيانات." },
            { title: "التوسّع والصيانة", desc: "مراقبة، تحسين مستمر، ودعم طويل الأمد." },
          ],
        },
      },
    ],
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
    contactEyebrow: "09 — تواصل معنا",
    contactTitle: "لنتحدث",
    contactSubtitle: "هل لديك مشروع في ذهنك؟ نود أن نسمع منك.",
    contactFormName: "اسمك",
    contactFormEmail: "البريد الإلكتروني",
    contactFormMessage: "أخبرنا عن مشروعك...",
    contactFormSendEmail: "إرسال بريد",
    contactFormSendWA: "إرسال واتساب",
    contactLocations: [
      {
        id: "hq-jakarta",
        name: "جاكارتا HQ",
        address: "Jl. Sudirman No. 123, Jakarta Selatan",
        lat: -6.2088,
        lng: 106.8456,
      },
      {
        id: "office-bandung",
        name: "مكتب باندونغ",
        address: "Jl. Asia Afrika No. 45, Bandung",
        lat: -6.9175,
        lng: 107.6191,
      },
    ],
    latestProjectEyebrow: "07 — أعمالنا",
    latestProjectTitle: "أحدث المشاريع",
    latestProjectSubtitle: "استكشف أعمالنا الأخيرة وكيف ساعدنا الشركات على النمو.",
    latestProjectSeeAll: "عرض جميع المشاريع",
    ourProductEyebrow: "08 — منتجاتنا",
    ourProductTitle: "منتجات قوية مبنية على Bagdja",
    ourProductSubtitle: "اكتشف مجموعة منتجاتنا المصممة لمساعدة المطورين على الإطلاق بشكل أسرع.",
    businessEyebrow: "05 — نموذج العمل",
    gtmEyebrow: "07 — الذهاب إلى السوق",
    gtmTitle: "من الصفر إلى نظام متكامل",
    partnerEyebrow: "06 — شركاؤنا",
    partnerTitle: "موثوق به من قبل الشركات الرائدة",
    partnerSubtitle: "نعمل مع قادة الصناعة لتقديم نتائج استثنائية.",
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
  heroCarousel: {
    slides: [
      {
        id: "platform",
        name: "Bagdja Platform",
        pill: en.hero.pill,
        title: "面向现代开发者的一体化分发平台",
        subtitle:
          "Bagdja 将应用发现、身份认证与计费整合为一个生态系统——让团队以“天”为单位交付，而不是“月”。",
        ctaWhatsApp: "WhatsApp 咨询",
        ctaEmail: "发送邮件",
        stats: [
          { value: "< 5 min", label: en.hero.stats.setup },
          { value: "80%", label: en.hero.stats.speed },
          { value: "60%", label: en.hero.stats.cost },
        ],
        right: {
          title: "一个平台，三大支柱",
          subtitle: "Store • Identity • Monetize",
          cards: [
            { title: en.hero.right.storeTitle, desc: "精选应用市场、推荐、SEO 页面与评价体系。" },
            { title: en.hero.right.identityTitle, desc: "SSO、社交登录、MFA、免密与用户管理。" },
            { title: en.hero.right.monetizeTitle, desc: "订阅、按量计费、税务合规、打款与数据分析。" },
          ],
        },
      },
      {
        id: "software-house",
        name: "Bagdja Development",
        pill: "定制应用 × 产品工程 × 交付伙伴",
        title: "与 Bagdja 共建定制 Web 与移动应用",
        subtitle: "从 MVP 到正式上线：设计、开发与长期维护一站式交付。",
        ctaWhatsApp: "WhatsApp 获取报价",
        ctaEmail: "邮件获取报价",
        stats: [
          { value: "Web + 移动", label: "平台" },
          { value: "端到端", label: "设计→开发→测试" },
          { value: "集成", label: "支付/身份/分析" },
          { value: "支持", label: "维护选项" },
        ],
        right: {
          title: "你的交付伙伴",
          subtitle: "构建 • 集成 • 扩展",
          cards: [
            { title: "定制开发", desc: "MVP、后台系统与生产级应用按需交付。" },
            { title: "系统集成", desc: "对接支付、身份、API 与数据管道。" },
            { title: "扩展与维护", desc: "监控、迭代与长期支持。" },
          ],
        },
      },
    ],
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
    contactEyebrow: "09 — 联系我们",
    contactTitle: "让我们聊聊",
    contactSubtitle: "有项目想聊？我们很乐意听取您的意见。",
    contactFormName: "您的姓名",
    contactFormEmail: "电子邮件",
    contactFormMessage: "请告诉我们您的项目...",
    contactFormSendEmail: "发送邮件",
    contactFormSendWA: "发送微信",
    contactLocations: [
      {
        id: "hq-jakarta",
        name: "雅加达总部",
        address: "Jl. Sudirman No. 123, Jakarta Selatan",
        lat: -6.2088,
        lng: 106.8456,
      },
      {
        id: "office-bandung",
        name: "万隆办事处",
        address: "Jl. Asia Afrika No. 45, Bandung",
        lat: -6.9175,
        lng: 107.6191,
      },
    ],
    latestProjectEyebrow: "07 — 我们的案例",
    latestProjectTitle: "最新项目",
    latestProjectSubtitle: "探索我们最近的作品，了解我们如何帮助企业成长。",
    latestProjectSeeAll: "查看所有项目",
    ourProductEyebrow: "08 — 我们的产品",
    ourProductTitle: "基于 Bagdja 的强大产品",
    ourProductSubtitle: "发现我们旨在帮助开发人员更快交付的产品系列。",
    businessEyebrow: "05 — 商业模式",
    gtmEyebrow: "07 — 增长策略",
    gtmTitle: "从 0 到生态系统",
    partnerEyebrow: "06 — 我们的合作伙伴",
    partnerTitle: "深受领先企业信赖",
    partnerSubtitle: "我们与行业领导者合作，提供卓越成果。",
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
  heroCarousel: {
    slides: [
      {
        id: "platform",
        name: "Bagdja Platform",
        pill: en.hero.pill,
        title: "La plataforma integrada de distribución para desarrolladores modernos",
        subtitle:
          "Bagdja unifica descubrimiento, autenticación y facturación en un solo ecosistema — para que los equipos lancen en días, no en meses.",
        ctaWhatsApp: "Hablar por WhatsApp",
        ctaEmail: "Escríbenos",
        stats: [
          { value: "< 5 min", label: en.hero.stats.setup },
          { value: "80%", label: en.hero.stats.speed },
          { value: "60%", label: en.hero.stats.cost },
        ],
        right: {
          title: "Una plataforma, tres pilares",
          subtitle: "Store • Identity • Monetize",
          cards: [
            { title: en.hero.right.storeTitle, desc: "Marketplace curado, recomendaciones, páginas SEO y reseñas." },
            { title: en.hero.right.identityTitle, desc: "SSO, login social, MFA, sin contraseña y gestión de usuarios." },
            {
              title: en.hero.right.monetizeTitle,
              desc: "Suscripciones, cobro por uso, cumplimiento fiscal, pagos y analítica.",
            },
          ],
        },
      },
      {
        id: "software-house",
        name: "Bagdja Development",
        pill: "Apps a medida × Ingeniería de producto × Socio de entrega",
        title: "Crea apps web y móviles a medida con Bagdja",
        subtitle:
          "Diseñamos, desarrollamos y mantenemos aplicaciones personalizadas — de MVP a producción.",
        ctaWhatsApp: "Pedir cotización por WhatsApp",
        ctaEmail: "Pedir por email",
        stats: [
          { value: "Web + Mobile", label: "Plataformas" },
          { value: "End-to-end", label: "Diseño → Dev → QA" },
          { value: "Integraciones", label: "Pagos, identidad, analítica" },
          { value: "Soporte", label: "Opciones de mantenimiento" },
        ],
        right: {
          title: "Tu socio de entrega",
          subtitle: "Construir • Integrar • Escalar",
          cards: [
            { title: "Desarrollo a medida", desc: "MVPs, dashboards y apps de producción según tu necesidad." },
            { title: "Integración de sistemas", desc: "Conecta pagos, identidad, APIs y datos." },
            { title: "Escala y mantenimiento", desc: "Monitoreo, iteración y soporte a largo plazo." },
          ],
        },
      },
    ],
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
    contactEyebrow: "09 — Contáctenos",
    contactTitle: "Hablemos",
    contactSubtitle: "¿Tienes un proyecto en mente? Nos encantaría saber de ti.",
    contactFormName: "Tu nombre",
    contactFormEmail: "Correo electrónico",
    contactFormMessage: "Cuéntanos sobre tu proyecto...",
    contactFormSendEmail: "Enviar correo",
    contactFormSendWA: "Enviar WhatsApp",
    contactLocations: [
      {
        id: "hq-jakarta",
        name: "Yakarta HQ",
        address: "Jl. Sudirman No. 123, Jakarta Selatan",
        lat: -6.2088,
        lng: 106.8456,
      },
      {
        id: "office-bandung",
        name: "Oficina de Bandung",
        address: "Jl. Asia Afrika No. 45, Bandung",
        lat: -6.9175,
        lng: 107.6191,
      },
    ],
    latestProjectEyebrow: "07 — Nuestro Trabajo",
    latestProjectTitle: "Proyectos Recientes",
    latestProjectSubtitle: "Explora nuestro trabajo reciente y mira cómo hemos ayudado a las empresas a crecer.",
    latestProjectSeeAll: "Ver todos los proyectos",
    ourProductEyebrow: "08 — Nuestro Producto",
    ourProductTitle: "Productos Potentes Creados en Bagdja",
    ourProductSubtitle: "Descubre nuestra suite de productos diseñados para ayudar a los desarrolladores a lanzar más rápido.",
    businessEyebrow: "05 — Modelo de Negocio",
    gtmEyebrow: "07 — Go-to-market",
    gtmTitle: "De cero a ecosistema",
    partnerEyebrow: "06 — Nuestros Socios",
    partnerTitle: "Empresas líderes confían en nosotros",
    partnerSubtitle: "Trabajamos con líderes de la industria para ofrecer resultados excepcionales.",
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
