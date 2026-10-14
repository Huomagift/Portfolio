import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: "01",
    number: "01",
    slug: "rights-compass",
    title: "Rights Compass",
    featured: true,
    oneLiner: "A legal-rights literacy app helping ordinary Nigerians understand their rights, query an AI tutor, and connect with verified lawyers.",
    problem: "Most ordinary Nigerians face severe barriers accessing clear legal knowledge, cannot afford rapid legal consultation, and lack trusted means to verify legitimate legal practitioners.",
    whatIBuilt: "A digital legal literacy platform featuring bundled constitutional rights, offline capabilities, an AI tutor chat powered by live voice failover, and an escrow-protected marketplace for verified lawyers.",
    role: "Lead Developer & Product Architect",
    stack: [
      "React Native",
      "Supabase",
      "WhatsApp Cloud API",
      "Paystack",
      "Node.js"
    ],
    keyDecisions: [
      "Offline-first architecture: bundled essential legal content and local storage on web and native, ensuring full access even without an active data subscription.",
      "Lawyer marketplace with escrow for payments until both parties confirm delivery, preventing fraud.",
      "Manual lawyer verification against Nigerian Bar Association (NBA) official records; marketplace is deliberately locked behind a waitlist until verification pipelines are airtight.",
      "Dedicated Node.js server to handle real-time AI voice calls when a user's legal situation is flagged urgent, combined with WhatsApp Cloud API for fast OTP verification and daily digest notifications."
    ],
    status: "In active development",
    badges: ["Current Project", "Flagship"],
    links: [
      { type: "Live", url: "https://rights-compass.vercel.app/", label: "Live Demo" },
      { type: "GitHub", url: "https://github.com/Huomagift/Rights_Compass", label: "GitHub" },
    ],
    image: "/projects/rights-compass.jpg",
    imageAlt: "Rights Compass mobile application architecture and UI preview"
  },
  {
    id: "02",
    number: "02",
    slug: "harvest-rescue-ai",
    title: "Harvest Rescue AI",
    oneLiner: "An agritech hackathon MVP that watches weather and satellite vegetation data (NDVI) to predict crop threats 1–2 weeks ahead.",
    problem: "Nigerian farmers frequently lose crops to unpredicted adverse weather shifts and vegetation health declines that go unnoticed until destruction has already occurred.",
    whatIBuilt: "A mobile-first web app where farmers map farm plots and coordinates to receive real-time risk predictions and conversational guidance via Swift Agent.",
    role: "Developer",
    stack: [
      "FastAPI",
      "Supabase",
      "Next.js"
    ],
    keyDecisions: [
      "Mobile-first frontend design engineered with Material 3 guidelines.",
      "Telemetry pipeline that marries weather forecasts with satellite NDVI (Normalized Difference Vegetation Index) data to forecast crop threats 1–2 weeks before visual damage.",
      "Conversational support agent integration (Swift Agent) that translates technical telemetry metrics into simple, concrete actions farmers can take immediately."
    ],
    status: "Hackathon MVP",
    badges: ["Agritech", "Hackathon MVP"],
    links: [
      { type: "Live", url: "https://harvest-rescue.vercel.app/", label: "Live Demo" },
      { type: "GitHub", url: "https://github.com/Huomagift/harvest-rescue", label: "GitHub" }
    ],
    image: "/projects/harvest-rescue.jpg",
    imageAlt: "Harvest Rescue AI satellite NDVI crop health dashboard"
  },
  {
    id: "03",
    number: "03",
    slug: "stuffswap",
    title: "StuffSwap",
    oneLiner: "A cashless peer-to-peer bartering system that uses AI to match unused goods and recommend safe public exchange hubs.",
    problem: "Inflation and economic pressures leave many individuals with valuable, unused items but constrained liquid cash, while meeting unknown trade partners poses personal safety risks.",
    whatIBuilt: "A cashless swap ecosystem with an automated AI matchmaking system that pairs complementary items and pinpoints safe public locations to complete trades.",
    keyDecisions: [
      "Strict zero-cash mechanism: value is determined by mutual utility rather than currency transactions.",
      "AI matching engine that compares item characteristics, user needs, and location proximity to recommend fair swaps.",
      "Safety-first meeting protocol that suggests verified public venues for in-person handoffs."
    ],
    status: "Hackathon Project",
    badges: ["CS Girlies Hackathon 2025 · 9th Place"],
    achievement: "CS Girlies Hackathon 2025 — Top 10 (9th place)",
    links: [
      { type: "GitHub", url: "https://github.com/Huomagift/StuffSwap", label: "GitHub" },
     ],
    image: "/projects/stuffswap.png",
    imageAlt: "StuffSwap AI matching interface for item exchanges"
  },
  {
    id: "04",
    number: "04",
    slug: "trackdem",
    title: "Trackdem",
    oneLiner: "A fast attendance management system built for Nigerian schools, reducing roll-call overhead and improving institutional records.",
    problem: "Paper registers in crowded classrooms are slow to mark, easily damaged or lost, and impossible for school leadership to analyze in real time.",
    whatIBuilt: "A digital school attendance tracking platform built and pitched for the 2024 3MTT hackathon in Rivers State, placing Top 5.",
    keyDecisions: [
      "Streamlined attendance logging designed for minimal taps per class session.",
      "High reliability on low-bandwidth school networks."
    ],
    status: "Hackathon Project",
    badges: ["2024 3MTT Hackathon Rivers State · Top 5"],
    achievement: "2024 3MTT Hackathon Rivers State — Top 5",
    links: [
      { type: "GitHub", url: "https://github.com/Huomagift/bio-attendance-frontend", label: "GitHub" },
      ],
    image: "/projects/trackdem.svg",
    imageAlt: "Trackdem school attendance management workflow"
  },
  {
    id: "05",
    number: "05",
    slug: "artza",
    title: "Artza",
    oneLiner: "An e-commerce website built for a brand, showcasing custom gift boxes, portraits, and personalized merchandise.",
    problem: "A creative bespoke gifting business needed an elegant, credible digital storefront to showcase custom curated packages and convert visitors into buyers.",
    whatIBuilt: "A tailored digital catalog and brand experience with optimized product photography displays and direct order routing.",
    status: "Shipped & Live",
    badges: ["Live Client Site"],
    links: [
      { type: "Live", url: "https://www.artzaworld.com", label: "artzaworld.com" },
      { type: "GitHub", url: "https://github.com/Huomagift/artza", label: "GitHub" },
      ],
    image: "/projects/artza.jpg",
    imageAlt: "Artza e-commerce storefront showcasing luxruy arts"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(currentSlug: string) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return { next: projects[0], prev: projects[projects.length - 1] };
  
  const nextIndex = (currentIndex + 1) % projects.length;
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

  return {
    next: projects[nextIndex],
    prev: projects[prevIndex]
  };
}
