export interface SkillItem {
  name: string;
  category: 'frontend' | 'mobile' | 'backend' | 'ai' | 'integrations';
  iconName?: string;
  description: string;
}

export const skillCategories = [
  {
    key: "frontend",
    title: "Frontend Engineering",
    description: "Responsive, accessible web applications.",
    skills: [
      { name: "Next.js", note: "App Router, SSR, SEO & Performance" },
      { name: "React", note: "Component architectures, state systems" },
      { name: "TypeScript", note: "Strict types, interface definitions" },
      { name: "Tailwind CSS", note: "Utility-first design tokens & responsive systems" },
      { name: "Material 3", note: "Adaptive component theming, mobile-first design" },
    ]
  },
  {
    key: "mobile",
    title: "Mobile Development",
    description: "Cross-platform mobile apps for real-world users.",
    skills: [
      { name: "React Native", note: "Offline storage, cross-platform UI" }
    ]
  },
  {
    key: "backend",
    title: "Backend & Data",
    description: "Performant APIs, relational data modeling, and server-side logic.",
    skills: [
      { name: "Supabase", note: "PostgreSQL, Auth, Row Level Security, Realtime" },
      { name: "FastAPI", note: "Python REST APIs, async endpoints" },
      { name: "Node.js", note: "Server logic, background processing" }
    ]
  },
  {
    key: "ai",
    title: "AI & Agents",
    description: "Applied intelligent systems solving local domain bottlenecks.",
    skills: [
      { name: "AI Agents", note: "Autonomous and conversational agents and integrations (Swift Agent, AI Tutor)" },
      { name: "Crop Threat Prediction", note: "NDVI satellite vegetation & weather anomaly analysis" }
    ]
  },
  /*{
    key: "integrations",
    title: "Communications & Payments",
    description: "Essential rails for Nigerian digital products.",
    skills: [
      { name: "WhatsApp Cloud API", note: "OTP verification, alerts, and transactional messaging" },
      { name: "Paystack", note: "Escrow flows, card payments, webhook verification" }
    ]
  }*/
];

// Flat list for marquee strip
export const marqueeTools = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "Supabase",
  "Node.js",
  "AI Agents",
  "Material 3",
  "WhatsApp Cloud API",
  "Paystack",
];
