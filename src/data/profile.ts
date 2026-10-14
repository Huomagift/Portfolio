import { SocialLink, Milestone } from '@/types';

export const profile = {
  name: "Gift Amadi",
  handle: "huomagift",
  email: "huomagift@gmail.com",
  location: "Nigeria",
  role: "Software Developer",
  status: "Currently building: Rights Compass",
  tagline: "I build products that solve problems.",
  
  bio: [
    "I'm a software developer and entrepreneur based in Nigeria.",
    "I build products from a blank file to a working MVP. My stack spans frontend (Next.js, React, React Native), backend systems (FastAPI, Node.js, Supabase), and applied AI features.",
    "My philosophy is simple: ship fast, eliminate friction, and keep it genuinely useful."
  ],

  leadership: [
    {
      role: "Campus Ambassador Lead - RSU",
      organization: "Cleva",
      description: "Driving cross-border financial technology awareness and adoption across campus community."
    },
    {
      role: "Campus Ambassador",
      organization: "Cowrywise",
      description: "Advocating financial literacy, automated savings, and digital wealth-building among young builders."
    },
    {
      role: "AI Product Builder",
      organization: " Renaissance Innovation Labs",
      description: "Active volunteer contributor across communities, hackathons, and builder networks."
    }
  ],

  milestones: [
    {
      year: "2024",
      title: "3MTT Rivers State Hackathon",
      context: "Placed Top 5 with Trackdem, building digital attendance infrastructure for schools under time pressure.",
      badge: "Top 5 Finalist"
    },
    {
      year: "2024",
      title: "3MTT Programme Capstone",
      context: "Completed rigorous 3 Million Technical Talent technical capstone delivering Task Manager.",
      badge: "Completed"
    },
    {
      year: "2025",
      title: "CS Girlies Hackathon",
      context: "Ranked Top 10 (9th place) with StuffSwap, an AI-powered cashless item bartering platform with safe meeting zones.",
      badge: "9th Place / Top 10"
    },
    {
      year: "Present",
      title: "Rights Compass",
      context: "Flagship legal literacy app in active development. AI tutor, learning paths, daily notifications and verified lawyers.",
      badge: "Active Development"
    }
  ] as Milestone[],

  socials: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/huomagift",
      username: "huomagift",
      active: true
    },
    {
      platform: "GitHub",
      url: "https://github.com/huomagift",
      username: "huomagift",
      active: true
    },
    {
      platform: "Instagram",
      url: null, 
      username: "",
      active: false
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/2347082744462",
      username: "+234 708 274 4462",
      active: true
    }
  ] as SocialLink[]
};
