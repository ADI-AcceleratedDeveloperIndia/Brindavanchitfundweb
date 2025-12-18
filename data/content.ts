import {
  Branch,
  Chit,
  FeatureCard,
  Faq,
  Leader,
  NewsItem,
  ProcessStep,
  ScheduleEntry,
  TeamMember,
  Language,
} from "@/lib/types";

export const translations: Record<
  Language,
  {
    siteName: string;
    tagline: string;
    nav: {
      home: string;
      chits: string;
      news: string;
      services: string;
      about: string;
      contact: string;
    };
    actions: {
      getStarted: string;
      learnMore: string;
      viewAll: string;
      viewDetails: string;
      contactUs: string;
      filter: string;
      clear: string;
    };
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    trust: {
      founded: string;
      customers: string;
      active: string;
    };
    servicesSection: {
      title: string;
      subtitle: string;
      liveAuction: string;
      vrm: string;
      ourChits: string;
    };
    newsSection: {
      title: string;
      subtitle: string;
      badge: string;
    };
    featuredChits: {
      title: string;
      subtitle: string;
    };
    branchesSection: {
      title: string;
      subtitle: string;
    };
    chitsPage: {
      title: string;
      subtitle: string;
      filters: {
        status: string;
        frequency: string;
        minAmount: string;
        maxAmount: string;
        statusOptions: { all: string; active: string; upcoming: string };
        frequencyOptions: { all: string; monthly: string; weekly: string };
      };
      empty: string;
      resultsCount: (count: number) => string;
    };
    schedules: {
      title: string;
      subtitle: string;
      download: string;
      howToJoinTitle: string;
      howToJoinSteps: string[];
    };
    howItWorks: {
      title: string;
      subtitle: string;
      benefitsTitle: string;
      exampleTitle: string;
      example: string[];
      faqTitle: string;
    };
    auction: {
      title: string;
      subtitle: string;
      cta: string;
      processTitle: string;
      benefitsTitle: string;
      note: string;
    };
    vrm: {
      title: string;
      subtitle: string;
      benefitsTitle: string;
      cta: string;
    };
    about: {
      title: string;
      subtitle: string;
      story: string;
      companyInfoTitle: string;
      achievementsTitle: string;
      missionTitle: string;
      valuesTitle: string;
    };
    mission: string;
    values: string[];
    contact: {
      title: string;
      subtitle: string;
      formTitle: string;
      formDescription: string;
      name: string;
      phone: string;
      message: string;
      preferredTime: string;
      submit: string;
      success: string;
      branchesLink: string;
    };
    footer: {
      builtBy: string;
      rights: string;
    };
    team: {
      title: string;
      subtitle: string;
      stats: { members: string; departments: string; experience: string; served: string };
      departments: string[];
    };
  }
> = {
  en: {
    siteName: "Brindavan Chits",
    tagline: "Modern. Secure. Transparent.",
    nav: {
      home: "Home",
      chits: "Chits",
      news: "News",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    actions: {
      getStarted: "Get Started",
      learnMore: "Learn More",
      viewAll: "View All",
      viewDetails: "View Details",
      contactUs: "Contact Us",
      filter: "Filter",
      clear: "Clear",
    },
    hero: {
      badge: "Trusted Since 2007",
      title: "Modern. Secure. Transparent.",
      subtitle: "Easy. Transparent. Secure chit fund services.",
    },
    trust: {
      founded: "Founded: 2007",
      customers: "30,000+ customers served",
      active: "2,500+ active members",
    },
    servicesSection: {
      title: "Our Services",
      subtitle: "Specialized services tailored for you",
      liveAuction: "Conduct online chit auctions",
      vrm: "Field verification, collections & marketing",
      ourChits: "Various chit schemes available",
    },
    newsSection: {
      title: "Latest News & Events",
      subtitle: "Stay updated with our latest news and events",
      badge: "Latest Updates",
    },
    featuredChits: {
      title: "Featured Chits",
      subtitle: "Specially curated chit schemes",
    },
    branchesSection: {
      title: "Branches",
      subtitle: "Our branch locations and contact information",
    },
    chitsPage: {
      title: "Chits & Schedules",
      subtitle: "Browse all chit schemes, schedules, and learn how it works.",
      filters: {
        status: "Status",
        frequency: "Frequency",
        minAmount: "Min Amount (₹)",
        maxAmount: "Max Amount (₹)",
        statusOptions: { all: "All", active: "Active", upcoming: "Upcoming" },
        frequencyOptions: { all: "All", monthly: "Monthly", weekly: "Weekly" },
      },
      empty: "No chits match your filters. Try clearing filters.",
      resultsCount: (count: number) => `${count} result${count === 1 ? "" : "s"}`,
    },
    schedules: {
      title: "Schedules",
      subtitle: "Available chit schemes and bidding limits.",
      download: "Download schedule",
      howToJoinTitle: "How to join",
      howToJoinSteps: ["Choose your scheme", "Submit documents", "Start investing"],
    },
    howItWorks: {
      title: "How chit funds work",
      subtitle: "A simple 5-step process to participate and win",
      benefitsTitle: "Benefits of chit funds",
      exampleTitle: "Example calculation",
      example: [
        "Chit Value: ₹1,00,000 | Duration: 25 months | Members: 25 | Monthly: ₹4,000",
        "If you win in month 10: ₹70,000 (₹1L - ₹30K bid)",
        "Dividend for 9 months: ₹27,000 (₹3K × 9)",
        "Total investment: ₹40,000 | Net return: ₹57,000 profit",
      ],
      faqTitle: "FAQ",
    },
    auction: {
      title: "Live Auction",
      subtitle: "Transparent, secure online auctions for members.",
      cta: "Start auction",
      processTitle: "Auction process",
      benefitsTitle: "Benefits of online auctions",
      note: "Production auction links are shared securely with members.",
    },
    vrm: {
      title: "VRM System",
      subtitle: "Field operations management for verification, recovery, marketing.",
      benefitsTitle: "Benefits of VRM",
      cta: "Talk to us",
    },
    about: {
      title: "About Brindavan Chits",
      subtitle: "Serving Telangana since 2007 with transparent chit fund services.",
      story:
        "Brindavan Chits Karimnagar (India) Pvt. Ltd. has served 30,000+ members with transparent, reliable chit fund services. Established in 2007, we operate across Karimnagar, Jagtial, and Ramagundam with a focus on trust, technology, and customer-first service.",
      companyInfoTitle: "Company information",
      achievementsTitle: "Achievements",
      missionTitle: "Mission",
      valuesTitle: "Values",
    },
    mission:
      "To provide transparent, reliable, and efficient chit fund services that help our members achieve their financial goals while maintaining the highest standards of integrity and customer service.",
    values: [
      "Transparency in all operations",
      "Trust and reliability",
      "Customer satisfaction",
      "Innovation and technology",
    ],
    contact: {
      title: "Contact us",
      subtitle: "We are here to help. Reach out for chit details or auction access.",
      formTitle: "Send us a message",
      formDescription: "We will get back to you with the details you need.",
      name: "Name",
      phone: "Phone",
      message: "Message",
      preferredTime: "Preferred time to call (optional)",
      submit: "Submit",
      success: "Your message has been submitted. We will contact you soon.",
      branchesLink: "See all branches",
    },
    footer: {
      builtBy: "Built by",
      rights: "© 2025 Brindavan Chits. All rights reserved.",
    },
    team: {
      title: "Leadership & Team",
      subtitle: "Experienced leaders and dedicated teams across departments.",
      stats: {
        members: "22 team members",
        departments: "5 departments",
        experience: "17+ years of experience",
        served: "30,000+ members served",
      },
      departments: ["Management", "Accounting", "Verification", "Development", "Collection"],
    },
  },
  te: {
    siteName: "బ్రిందావన్ చిట్స్",
    tagline: "మోడరన్. సెక్యూర్. ట్రాన్స్‌పరెంట్.",
    nav: {
      home: "హోమ్",
      chits: "చిట్స్",
      news: "వార్తలు",
      services: "సేవలు",
      about: "గురించి",
      contact: "సంప్రదించండి",
    },
    actions: {
      getStarted: "ప్రారంభించండి",
      learnMore: "మరింత తెలుసుకోండి",
      viewAll: "అన్ని చూడండి",
      viewDetails: "వివరాలు",
      contactUs: "మమ్మల్ని సంప్రదించండి",
      filter: "ఫిల్టర్",
      clear: "రీసెట్",
    },
    hero: {
      badge: "2007 నుంచి నమ్మకం",
      title: "మోడరన్. సెక్యూర్. ట్రాన్స్‌పరెంట్.",
      subtitle: "సులభం. పారదర్శకం. భద్రతతో కూడిన చిట్టీలు.",
    },
    trust: {
      founded: "స్థాపన: 2007",
      customers: "30,000+ కస్టమర్లు",
      active: "2,500+ యాక్టివ్ సభ్యులు",
    },
    servicesSection: {
      title: "మా సేవలు",
      subtitle: "మీ కోసం ప్రత్యేకంగా రూపొందించిన సేవలు",
      liveAuction: "ఆన్‌లైన్ చిట్టీ వేలాలు నిర్వహించండి",
      vrm: "ఫీల్డ్ వెరిఫికేషన్, కలెక్షన్ & మార్కెటింగ్",
      ourChits: "వివిధ చిట్టీ పథకాలు",
    },
    newsSection: {
      title: "తాజా వార్తలు & ఈవెంట్స్",
      subtitle: "మా తాజా వార్తలు మరియు ఈవెంట్స్‌ను తెలుసుకోండి",
      badge: "కొత్త వార్తలు",
    },
    featuredChits: {
      title: "ప్రత్యేక చిట్టీలు",
      subtitle: "ప్రత్యేకంగా ఎంచుకున్న చిట్టీ పథకాలు",
    },
    branchesSection: {
      title: "మా శాఖలు",
      subtitle: "శాఖలు మరియు సంప్రదింపు సమాచారం",
    },
    chitsPage: {
      title: "చిట్స్ & షెడ్యూల్స్",
      subtitle: "అన్ని చిట్టీ పథకాలు, షెడ్యూల్స్ మరియు ప్రాసెస్ వివరాలు.",
      filters: {
        status: "స్థితి",
        frequency: "పద్ధతి",
        minAmount: "కనీస మొత్తం (₹)",
        maxAmount: "గరిష్ట మొత్తం (₹)",
        statusOptions: { all: "అన్నీ", active: "యాక్టివ్", upcoming: "రాబోయే" },
        frequencyOptions: { all: "అన్నీ", monthly: "నెలవారీ", weekly: "వారానికొక్కసారి" },
      },
      empty: "ఫిల్టర్‌లకు సరిపడే చిట్స్ లేవు. రీసెట్ చేయండి.",
      resultsCount: (count: number) => `${count} ఫలితం${count === 1 ? "" : "లు"}`,
    },
    schedules: {
      title: "షెడ్యూల్స్",
      subtitle: "అందుబాటులో ఉన్న చిట్టీలు మరియు బిడ్డింగ్ పరిమితులు.",
      download: "షెడ్యూల్ డౌన్‌లోడ్",
      howToJoinTitle: "ఎలా చేరాలి",
      howToJoinSteps: ["మీ స్కీమ్ ఎంచుకోండి", "డాక్యుమెంట్స్ ఇవ్వండి", "ఇన్వెస్ట్ చేయడం ప్రారంభించండి"],
    },
    howItWorks: {
      title: "చిట్ ఫండ్ ఎలా పనిచేస్తుంది",
      subtitle: "సులభమైన 5-స్టెప్ ప్రాసెస్",
      benefitsTitle: "చిట్ ఫండ్ ప్రయోజనాలు",
      exampleTitle: "ఉదాహరణ లెక్కింపు",
      example: [
        "చిట్ విలువ: ₹1,00,000 | వ్యవధి: 25 నెలలు | సభ్యులు: 25 | నెలవారీ: ₹4,000",
        "10వ నెలలో గెలిస్తే: ₹70,000 (₹1L - ₹30K బిడ్)",
        "9 నెలల డివిడెండ్: ₹27,000 (₹3K × 9)",
        "మొత్తం ఇన్వెస్ట్‌మెంట్: ₹40,000 | నికర లాభం: ₹57,000",
      ],
      faqTitle: "తరచుగా అడిగే ప్రశ్నలు",
    },
    auction: {
      title: "లైవ్ ఆక్షన్",
      subtitle: "సభ్యుల కోసం పారదర్శకమైన, సురక్షిత ఆన్‌లైన్ వేలం.",
      cta: "ఆక్షన్ ప్రారంభించండి",
      processTitle: "ఆక్షన్ ప్రాసెస్",
      benefitsTitle: "ఆన్‌లైన్ వేలం ప్రయోజనాలు",
      note: "ప్రొడక్షన్ ఆక్షన్ లింకులు సభ్యులకు సురక్షితంగా పంపబడతాయి.",
    },
    vrm: {
      title: "VRM సిస్టమ్",
      subtitle: "వెరిఫికేషన్, రికవరీ, మార్కెటింగ్ ఫీల్డ్ ఆపరేషన్స్ మేనేజ్‌మెంట్.",
      benefitsTitle: "VRM ప్రయోజనాలు",
      cta: "మాతో మాట్లాడండి",
    },
    about: {
      title: "బ్రిందావన్ చిట్స్ గురించి",
      subtitle: "2007 నుంచి తెలంగాణలో సేవలు, పారదర్శక చిట్ ఫండ్ సర్వీస్.",
      story:
        "బ్రిందావన్ చిట్స్ Karimnagar (India) Pvt. Ltd. 2007 నుంచి 30,000+ సభ్యులకు పారదర్శక, నమ్మకమైన చిట్ ఫండ్ సేవలు అందిస్తోంది. Karimnagar, Jagtial, Ramagundam శాఖలతో సాంకేతికత, కస్టమర్ ఫస్ట్ సర్వీస్ పై దృష్టి.",
      companyInfoTitle: "కంపెనీ సమాచారం",
      achievementsTitle: "అభివృద్ధులు",
      missionTitle: "మిషన్",
      valuesTitle: "విలువలు",
    },
    mission:
      "మా సభ్యులు తమ ఆర్థిక లక్ష్యాలను సాధించడంలో సహాయపడే పారదర్శకమైన, నమ్మకమైన మరియు సమర్థవంతమైన చిట్ ఫండ్ సేవలను అందించడం, అత్యధిక సమగ్రత మరియు కస్టమర్ సేవ ప్రమాణాలను నిర్వహిస్తూ.",
    values: [
      "అన్ని కార్యకలాపాలలో పారదర్శకత",
      "నమ్మకం మరియు విశ్వసనీయత",
      "కస్టమర్ సంతృప్తి",
      "నవీకరణ మరియు సాంకేతికత",
    ],
    contact: {
      title: "మమ్మల్ని సంప్రదించండి",
      subtitle: "చిట్టీ వివరాలు లేదా ఆక్షన్ యాక్సెస్ కోసం మేమున్నాం.",
      formTitle: "సందేశం పంపండి",
      formDescription: "మీకు కావాల్సిన వివరాలతో మేము సంప్రదిస్తాము.",
      name: "పేరు",
      phone: "ఫోన్",
      message: "సందేశం",
      preferredTime: "ఫోన్ చేయడానికి సమయం (ఐచ్చికం)",
      submit: "సబ్మిట్",
      success: "మీ సందేశం అందింది. త్వరలో సంప్రదిస్తాము.",
      branchesLink: "అన్ని శాఖలు చూడండి",
    },
    footer: {
      builtBy: "Built by",
      rights: "© 2025 Brindavan Chits. All rights reserved.",
    },
    team: {
      title: "నాయకత్వం & టీమ్",
      subtitle: "అనుభవజ్ఞులైన నాయకులు, అంకితభావంతో కూడిన విభాగాలు.",
      stats: {
        members: "22 టీమ్ సభ్యులు",
        departments: "5 విభాగాలు",
        experience: "17+ ఏళ్ల అనుభవం",
        served: "30,000+ సభ్యులకు సేవలు",
      },
      departments: ["మ్యానేజ్‌మెంట్", "అకౌంటింగ్", "వెరిఫికేషన్", "డెవలప్‌మెంట్", "కలెక్షన్"],
    },
  },
};

export const chits: Chit[] = [
  {
    id: "classic-100k",
    name: { en: "Classic 1,00,000 Chit", te: "క్లాసిక్ 1,00,000 చిట్టి" },
    amount: 100000,
    durationMonths: 20,
    members: 25,
    frequency: "Monthly",
    status: "Active",
  },
  {
    id: "200k-20m",
    name: { en: "2,00,000 Chit - 20/25M", te: "2,00,000 చిట్టి - 20/25 నెలలు" },
    amount: 200000,
    durationMonths: 20,
    members: 25,
    frequency: "Monthly",
    status: "Active",
    description: {
      en: "Available in 20 or 25 month terms.",
      te: "20 లేదా 25 నెలల గడువు అందుబాటులో ఉంది.",
    },
  },
  {
    id: "300k",
    name: { en: "3,00,000 Chit", te: "3,00,000 చిట్టి" },
    amount: 300000,
    durationMonths: 30,
    members: 30,
    frequency: "Monthly",
    status: "Active",
  },
  {
    id: "500k",
    name: { en: "5,00,000 Chit", te: "5,00,000 చిట్టి" },
    amount: 500000,
    durationMonths: 40,
    members: 40,
    frequency: "Monthly",
    status: "Active",
  },
  {
    id: "1m",
    name: { en: "10,00,000 Chit", te: "10,00,000 చిట్టి" },
    amount: 1000000,
    durationMonths: 50,
    members: 50,
    frequency: "Monthly",
    status: "Active",
  },
  {
    id: "1_5m",
    name: { en: "15,00,000 Chit", te: "15,00,000 చిట్టి" },
    amount: 1500000,
    durationMonths: 50,
    members: 50,
    frequency: "Monthly",
    status: "Upcoming",
  },
  {
    id: "2m",
    name: { en: "20,00,000 Chit", te: "20,00,000 చిట్టి" },
    amount: 2000000,
    durationMonths: 50,
    members: 50,
    frequency: "Monthly",
    status: "Upcoming",
  },
  {
    id: "50k-weekly",
    name: { en: "50,000 Weekly Chit", te: "50,000 వారానికిఈ చిట్టి" },
    amount: 50000,
    durationMonths: 10,
    members: 25,
    frequency: "Weekly",
    status: "Active",
  },
  {
    id: "250k-25m",
    name: { en: "Special 25 Months Chit", te: "స్పెషల్ 25 నెలలు చిట్టి" },
    amount: 250000,
    durationMonths: 25,
    members: 25,
    frequency: "Monthly",
    status: "Active",
  },
];

export const scheduleEntries: ScheduleEntry[] = [
  {
    category: { en: "Short Term", te: "షార్ట్ టర్మ్" },
    value: "₹1,00,000",
    series: "ST B",
    duration: "25 months",
    members: 25,
    maxBidding: "30%",
  },
  {
    category: { en: "Short Term", te: "షార్ట్ టర్మ్" },
    value: "₹2,00,000",
    series: "ST D",
    duration: "25 months",
    members: 25,
    maxBidding: "30%",
  },
  {
    category: { en: "30-Term", te: "30-టర్మ్" },
    value: "₹30,00,000",
    series: "TT Z",
    duration: "30 months",
    members: 30,
    maxBidding: "30%",
  },
  {
    category: { en: "40-Term", te: "40-టర్మ్" },
    value: "₹5,00,000",
    series: "FT D",
    duration: "40 months",
    members: 40,
    maxBidding: "35%",
  },
  {
    category: { en: "Long Term", te: "లాంగ్ టర్మ్" },
    value: "₹25,00,000",
    series: "LT Z",
    duration: "50 months",
    members: 50,
    maxBidding: "40%",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "news-2025-01-15",
    date: "2025-01-15",
    title: {
      en: "New Chit Schemes Launched - 2025",
      te: "కొత్త చిట్టీలు ప్రారంభం - 2025",
    },
    summary: {
      en: "₹15 Lakhs and ₹20 Lakhs chit schemes are now available.",
      te: "₹15 లక్షలు మరియు ₹20 లక్షల చిట్టీలు ఇప్పుడు అందుబాటులో ఉన్నాయి.",
    },
  },
  {
    id: "news-2024-12-20",
    date: "2024-12-20",
    title: {
      en: "Successful Launch of Live Online Auctions",
      te: "లైవ్ ఆన్‌లైన్ వేలం విజయవంతంగా ప్రారంభం",
    },
    summary: {
      en: "Members can participate from home via secure online auctions.",
      te: "సభ్యులు ఇంటి నుండి సురక్షిత ఆన్‌లైన్ వేలం ద్వారా పాల్గొనవచ్చు.",
    },
  },
  {
    id: "news-2024-11-10",
    date: "2024-11-10",
    title: {
      en: "17th Annual Day Celebrated Successfully",
      te: "17వ వార్షికోత్సవం విజయవంతంగా నిర్వహించాం",
    },
    summary: {
      en: "Brindavan Chits celebrated its 17th Annual Day with grandeur.",
      te: "బ్రిందావన్ చిట్స్ 17వ వార్షికోత్సవాన్ని ఘనంగా జరుపుకుంది.",
    },
  },
  {
    id: "news-2024-10-05",
    date: "2024-10-05",
    title: {
      en: "VRM System Upgrade - Enhanced Services",
      te: "VRM సిస్టమ్ అప్‌గ్రేడ్ - మెరుగైన సేవలు",
    },
    summary: {
      en: "VRM system upgraded to make field operations more efficient.",
      te: "ఫీల్డ్ ఆపరేషన్స్ మరింత సమర్థవంతంగా కావడానికి VRM సిస్టమ్ అప్‌గ్రేడ్ చేయబడింది.",
    },
  },
  {
    id: "news-2024-09-18",
    date: "2024-09-18",
    title: {
      en: "Reached 30,000+ Members Milestone",
      te: "30,000+ సభ్యుల మైలురాయి చేరుకుంది",
    },
    summary: {
      en: "Brindavan Chits reached milestone of 30,000+ members.",
      te: "బ్రిందావన్ చిట్స్ 30,000+ సభ్యుల మైలురాయిని చేరుకుంది.",
    },
  },
  {
    id: "news-2024-08-25",
    date: "2024-08-25",
    title: {
      en: "New Weekly Chit Scheme Launched",
      te: "కొత్త వారపు చిట్టీ ప్రారంభించబడింది",
    },
    summary: {
      en: "₹50,000 weekly chit scheme now available.",
      te: "₹50,000 వారపు చిట్టీ ఇప్పుడు అందుబాటులో ఉంది.",
    },
  },
  {
    id: "news-2024-07-12",
    date: "2024-07-12",
    title: {
      en: "Member Satisfaction Survey - 95% Satisfaction Rate",
      te: "మెంబర్ సంతృప్తి సర్వే - 95% సంతృప్తి",
    },
    summary: {
      en: "Survey showed 95% satisfaction rate.",
      te: "సర్వేలో 95% సంతృప్తి రేటు వచ్చింది.",
    },
  },
  {
    id: "news-2024-06-30",
    date: "2024-06-30",
    title: {
      en: "Mid-Year Achievements - 2024",
      te: "2024 మధ్య సంవత్సర విజయాలు",
    },
    summary: {
      en: "2,500+ active members and ₹50+ crores in chit volume achieved.",
      te: "2,500+ యాక్టివ్ సభ్యులు, ₹50+ కోట్ల చిట్ వాల్యూమ్ సాధించాం.",
    },
  },
];

export const branches: Branch[] = [
  {
    name: { en: "Head Office - Karimnagar", te: "హెడ్ ఆఫీస్ - Karimnagar" },
    address: "7-2-616, Mankamma Thota, Karimnagar - 505001",
    phone: "0878-2269666",
    cell: "9705166110",
  },
  {
    name: { en: "Jagtial Branch", te: "జగిత్యాల శాఖ" },
    address: "NGO's Building, Thahasil Chowrastha, Jagtial - 505327",
    phone: "08724-226966",
    cell: "9705166444",
  },
  {
    name: { en: "Ramagundam Branch", te: "రామగుందం శాఖ" },
    address: "FCI 'X' Road, Godavarikhani - 505209",
    phone: "08728-274166",
    cell: "9705166000",
  },
];

export const leadership: Leader[] = [
  {
    name: { en: "Vavilala Hanumantha Reddy", te: "వవిలాల హనుమంత రెడ్డి" },
    role: { en: "Chairman", te: "చైర్మన్" },
    since: "October 2007",
  },
  {
    name: { en: "Penta Srinivas", te: "పెంటా శ్రీనివాస్" },
    role: { en: "Managing Director", te: "మేనేజింగ్ డైరెక్టర్" },
    since: "December 2011",
  },
  {
    name: { en: "Gasireddy Janardhan Reddy", te: "గాసిరెడ్డి జనార్ధన్ రెడ్డి" },
    role: { en: "Director", te: "డైరెక్టర్" },
  },
  {
    name: { en: "Kanna Krishna", te: "కన్నా క్రిష్ణ" },
    role: { en: "Director", te: "డైరెక్టర్" },
  },
];

export const teamMembers: TeamMember[] = [
  { name: "P. Srinivas", designation: "Managing Director", department: "Management" },
  { name: "G. Satheesh", designation: "Accountant (HOD)", department: "Accounting", isHod: true },
  { name: "K. Santhosh Kumar", designation: "Accountant", department: "Accounting" },
  { name: "N. Krishna", designation: "Verification Officer (HOD)", department: "Verification", isHod: true },
  { name: "N. Durga Prasad", designation: "Verification Officer", department: "Verification" },
  { name: "M. Srinivas", designation: "Verification Officer", department: "Verification" },
  { name: "B. Sanjeev", designation: "Verification Officer", department: "Verification" },
  { name: "G. Ramesh", designation: "Development Officer (HOD)", department: "Development", isHod: true },
  { name: "G. Hanmandlu", designation: "Development Officer", department: "Development" },
  { name: "A. Kumara Swamy", designation: "Collection Officer (HOD)", department: "Collection", isHod: true },
  { name: "M. Maruthi", designation: "Collection Officer", department: "Collection" },
  { name: "A. Venugopal", designation: "Collection Officer", department: "Collection" },
  { name: "L. Venkatesh Babu", designation: "Collection Officer", department: "Collection" },
  { name: "K. Sravan Kumar", designation: "Collection Officer", department: "Collection" },
  { name: "M. Kannaiah", designation: "Collection Officer", department: "Collection" },
  { name: "P. Sathish", designation: "Collection Officer", department: "Collection" },
  { name: "K. Kishan", designation: "Collection Officer", department: "Collection" },
  { name: "G. Sandeep", designation: "Collection Officer", department: "Collection" },
  { name: "S. Rajashekar", designation: "Collection Officer", department: "Collection" },
  { name: "P. Vineeth", designation: "Collection Officer", department: "Collection" },
];

export const howItWorksSteps: ProcessStep[] = [
  {
    title: { en: "Join & Subscribe", te: "చేరండి & సబ్‌స్క్రైబ్ చేయండి" },
    description: {
      en: "Choose your preferred chit scheme and pay the initial subscription.",
      te: "మీకు అనుకూలమైన చిట్ ఎంచుకుని ప్రారంభ సబ్‌స్క్రిప్షన్ చెల్లించండి.",
    },
  },
  {
    title: { en: "Live Auction", te: "లైవ్ ఆక్షన్" },
    description: {
      en: "Monthly auctions conducted online or offline with transparent bidding.",
      te: "ప్రతి నెల పారదర్శక బిడ్డింగ్‌తో ఆన్‌లైన్/ఆఫ్‌లైన్ వేలం.",
    },
  },
  {
    title: { en: "Win Prize", te: "ప్రైజ్ గెలుచుకోండి" },
    description: {
      en: "Highest bidder wins the chit amount after deductions.",
      te: "అత్యధిక బిడ్డర్ డిడక్షన్ తర్వాత చిట్ అమౌంట్ అందుకుంటారు.",
    },
  },
  {
    title: { en: "Share Dividend", te: "డివిడెండ్ పంచుకోవడం" },
    description: {
      en: "Bid amount shared as dividend among non-winning members.",
      te: "బిడ్ అమౌంట్ మిగిలిన సభ్యులకు డివిడెండ్‌గా పంచబడుతుంది.",
    },
  },
  {
    title: { en: "Repeat Process", te: "ప్రాసెస్ కొనసాగుతుంది" },
    description: {
      en: "Continues monthly until all members receive their prize.",
      te: "అన్ని సభ్యులు ప్రైజ్ పొందే వరకు ప్రతి నెల కొనసాగుతుంది.",
    },
  },
];

export const chitBenefits: FeatureCard[] = [
  {
    title: { en: "Flexible investment", te: "సౌకర్యవంతమైన ఇన్వెస్ట్‌మెంట్" },
    description: {
      en: "Choose amount and duration to match your goals.",
      te: "మీ లక్ష్యాలకు తగిన మొత్తం మరియు వ్యవధిని ఎంచుకోండి.",
    },
  },
  {
    title: { en: "Guaranteed returns", te: "నిర్ధారిత రిటర్నులు" },
    description: {
      en: "Regular dividends and potential prize winnings.",
      te: "నియమిత డివిడెండ్లు మరియు గెలుపు అవకాశాలు.",
    },
  },
  {
    title: { en: "Safe & secure", te: "భద్రంగా & సురక్షితంగా" },
    description: {
      en: "Transparent operations backed by strong governance.",
      te: "పారదర్శక ఆపరేషన్స్, బలమైన గవర్నెన్స్.",
    },
  },
  {
    title: { en: "Better returns", te: "మంచి రిటర్నులు" },
    description: {
      en: "Potentially higher returns than traditional savings.",
      te: "సాంప్రదాయ సేవింగ్స్ కంటే మెరుగైన రిటర్నులు.",
    },
  },
  {
    title: { en: "Regular income", te: "నియమిత ఆదాయం" },
    description: {
      en: "Monthly dividends provide steady cash flow.",
      te: "నెలవారీ డివిడెండ్లు స్థిరమైన నగదు ప్రవాహం ఇస్తాయి.",
    },
  },
  {
    title: { en: "Customer support", te: "కస్టమర్ సపోర్ట్" },
    description: {
      en: "Dedicated team to assist with queries and processes.",
      te: "ప్రశ్నలు, ప్రాసెస్‌లకు సహాయపడే ప్రత్యేక టీమ్.",
    },
  },
];

export const auctionFeatures: FeatureCard[] = [
  {
    title: { en: "No travel required", te: "ప్రయాణం అవసరం లేదు" },
    description: {
      en: "Participate from home with secure access.",
      te: "ఇంటి నుండి సురక్షితంగా పాల్గొనండి.",
    },
  },
  {
    title: { en: "Transparent bidding", te: "పారదర్శక బిడ్డింగ్" },
    description: {
      en: "All bids visible in real time.",
      te: "అన్ని బిడ్లు రియల్‌టైమ్ లో కనిపిస్తాయి.",
    },
  },
  {
    title: { en: "Recorded for reference", te: "రికార్డ్ చేయబడుతుంది" },
    description: {
      en: "Auctions recorded for internal reference.",
      te: "వేలం రికార్డులు రిఫరెన్స్ కోసం ఉంచబడతాయి.",
    },
  },
  {
    title: { en: "Easy participation", te: "సులభంగా పాల్గొనండి" },
    description: {
      en: "Simple flow to place bids and mark attendance.",
      te: "సులభమైన ప్రవాహంలో బిడ్ పెట్టి హాజరు నమోదు చేయండి.",
    },
  },
];

export const auctionProcess: ProcessStep[] = [
  {
    title: { en: "Click the auction link", te: "ఆక్షన్ లింక్ క్లిక్ చేయండి" },
    description: {
      en: "Use the secure link shared by the foreman.",
      te: "ఫోరమెన్ పంపించిన సురక్షిత లింక్ ఉపయోగించండి.",
    },
  },
  {
    title: { en: "Mark attendance", te: "హాజరు నమోదు" },
    description: {
      en: "Confirm your presence in the session.",
      te: "సెషన్‌లో మీ హాజరును నమోదు చేయండి.",
    },
  },
  {
    title: { en: "View members", te: "సభ్యులను చూడండి" },
    description: {
      en: "See present/absent members before bidding.",
      te: "బిడ్డింగ్ ముందు హాజరు / గైర్హాజరు సభ్యులు చూడండి.",
    },
  },
  {
    title: { en: "Enter your bid", te: "మీ బిడ్ నమోదు చేయండి" },
    description: {
      en: "Place your discount bid securely.",
      te: "మీ డిస్కౌంట్ బిడ్ సురక్షితంగా నమోదు చేయండి.",
    },
  },
  {
    title: { en: "Winner declared", te: "విజేత ప్రకటించబడుతుంది" },
    description: {
      en: "Highest discount wins; winner and dividend shown instantly.",
      te: "అత్యధిక డిస్కౌంట్ విజేత; విజేత, డివిడెండ్ వెంటనే కనిపిస్తాయి.",
    },
  },
];

export const auctionBenefits: FeatureCard[] = [
  {
    title: { en: "Convenience", te: "సౌలభ్యం" },
    description: {
      en: "Join from home without travel.",
      te: "ప్రయాణం లేకుండానే ఇంటి నుంచి చేరండి.",
    },
  },
  {
    title: { en: "Time saving", te: "సమయం ఆదా" },
    description: {
      en: "Skip monthly branch visits.",
      te: "ప్రతి నెల బ్రాంచ్‌కు రావాల్సిన అవసరం లేదు.",
    },
  },
  {
    title: { en: "Transparency", te: "పారదర్శకత" },
    description: {
      en: "Real-time visibility for all bids.",
      te: "అన్ని బిడ్లకు రియల్‌టైమ్ స్పష్టత.",
    },
  },
  {
    title: { en: "Security", te: "భద్రత" },
    description: {
      en: "Secure, recorded sessions for members.",
      te: "సభ్యుల కోసం సురక్షిత, రికార్డ్ చేయబడిన సెషన్లు.",
    },
  },
];

export const vrmFeatures: FeatureCard[] = [
  {
    title: { en: "Geo-stamped selfie reports", te: "జియో-స్టాంప్ సెల్ఫీ రిపోర్ట్స్" },
    description: {
      en: "Verified on-ground presence for field teams.",
      te: "ఫీల్డ్ టీమ్ కోసం ధృవీకరించిన స్థల రిపోర్టులు.",
    },
  },
  {
    title: { en: "Collection & recovery tracking", te: "కలెక్షన్ & రికవరీ ట్రాకింగ్" },
    description: {
      en: "Track collections and recovery status in real time.",
      te: "కలెక్షన్, రికవరీ స్థితిని రియల్‌టైమ్‌లో ట్రాక్ చేయండి.",
    },
  },
  {
    title: { en: "Hierarchy-based reporting", te: "హైరార్కీ ఆధారిత రిపోర్టింగ్" },
    description: {
      en: "Clear reporting for managers and teams.",
      te: "మ్యానేజర్లు, టీమ్‌ల కోసం స్పష్టమైన రిపోర్టింగ్.",
    },
  },
  {
    title: { en: "Special executive deployment", te: "ప్రత్యేక ఎగ్జిక్యూటివ్ డిప్లాయ్‌మెంట్" },
    description: {
      en: "Deploy specialists for priority cases.",
      te: "ప్రాధాన్య కేసులకు ప్రత్యేక నిపుణులను పంపండి.",
    },
  },
];

export const vrmBenefits: FeatureCard[] = [
  {
    title: { en: "Efficient operations", te: "సమర్థవంతమైన ఆపరేషన్స్" },
    description: {
      en: "Streamlined field verification and recovery.",
      te: "ఫీల్డ్ వెరిఫికేషన్, రికవరీ సులభీకరణ.",
    },
  },
  {
    title: { en: "Real-time tracking", te: "రియల్‌టైమ్ ట్రాకింగ్" },
    description: {
      en: "Live dashboards for teams and managers.",
      te: "టీమ్స్, మ్యానేజర్లకు లైవ్ డ్యాష్‌బోర్డులు.",
    },
  },
  {
    title: { en: "Secure analytics", te: "సురక్షిత అనలిటిక్స్" },
    description: {
      en: "Data-backed decisions with secure storage.",
      te: "సురక్షిత నిల్వతో డేటా ఆధారిత నిర్ణయాలు.",
    },
  },
];

export const faqItems: Faq[] = [
  {
    question: {
      en: "What documents are required to join?",
      te: "చేరడానికి ఏ డాక్యుమెంట్స్ అవసరం?",
    },
    answer: {
      en: "Identity proof, address proof, income proof, and passport size photographs.",
      te: "ఐడెంటిటీ ప్రూఫ్, అడ్రస్ ప్రూఫ్, ఇన్కమ్ ప్రూఫ్, పాస్‌పోర్ట్ సైజ్ ఫోటోలు అవసరం.",
    },
  },
  {
    question: {
      en: "Can I join multiple schemes?",
      te: "ఒకటి కంటే ఎక్కువ స్కీమ్‌లలో చేరవచ్చా?",
    },
    answer: {
      en: "Yes, you can participate in multiple chit schemes based on eligibility.",
      te: "అవును, మీ అర్హత ఆధారంగా బహుళ చిట్టీల్లో పాల్గొనవచ్చు.",
    },
  },
  {
    question: {
      en: "What happens if I miss a payment?",
      te: "ఒక చెల్లింపు మిస్ అయితే ఏమవుతుంది?",
    },
    answer: {
      en: "We offer flexible payment options and grace periods. Please contact our team.",
      te: "సౌకర్యవంతమైన చెల్లింపు ఎంపికలు, గ్రేస్ పీరియడ్ అందిస్తాం. దయచేసి మా టీమ్‌ను సంప్రదించండి.",
    },
  },
  {
    question: {
      en: "How are auctions conducted?",
      te: "ఆక్షన్‌లు ఎలా నిర్వహిస్తారు?",
    },
    answer: {
      en: "Auctions are conducted monthly with complete transparency and documentation.",
      te: "ప్రతి నెల పారదర్శకత, డాక్యుమెంటేషన్‌తో ఆక్షన్‌లు నిర్వహిస్తాం.",
    },
  },
];

