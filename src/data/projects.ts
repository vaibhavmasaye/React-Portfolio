export type CaseStudyBlock =
  | { kind: "para"; text: string }
  | { kind: "list"; title: string; items: string[] }
  | { kind: "quote"; text: string; author?: string };

export type Project = {
  slug: string;
  n: string;
  name: string;
  tagline: string;
  desc: string;
  category: "company" | "personal";
  year: string;
  role: string;
  stack: string[];
  href?: string;
  cover: string;        // hex or css color used as placeholder bg
  accent: string;       // accent color for detail page
  gallery?: string[];   // image urls (placeholders for now)
  caseStudy?: {
    context: string;
    blocks: CaseStudyBlock[];
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dignisys",
    n: "01",
    category: "company",
    name: "Dignisys",
    tagline: "Trust infrastructure for modern teams.",
    desc: "Trust-first platform engineered for scale at Atomos Technology. Designing architecture, APIs and core product flows.",
    year: "2025 · In progress",
    role: "Full Stack · Architecture",
    stack: ["Next.js", "TypeScript", "Postgres", "Node.js", "Prisma"],
    cover: "#0F1B3D",
    accent: "#4F46E5",
    featured: true,
    gallery: [],
    caseStudy: {
      context:
        "Dignisys is a trust-first product Atomos is building for teams that need verifiable, auditable workflows. I'm shaping the architecture, the API contracts, and the core product flows from day one.",
      blocks: [
        { kind: "para", text: "The brief was deceptively simple: make trust legible. Every action a team takes should be inspectable later — by an auditor, a customer, or a future teammate — without making the product feel like a compliance tool." },
        { kind: "list", title: "What I'm responsible for", items: [
          "End-to-end product architecture across web, API, and data",
          "Designing the event log + audit trail as a first-class primitive",
          "Authentication, multi-tenant boundaries, and role design",
          "Core flows: onboarding, verification, signed activity",
        ]},
        { kind: "quote", text: "We're not building software that records what happened — we're building software where what happened is the artifact." },
      ],
    },
  },
  {
    slug: "atomos-technology",
    n: "02",
    category: "company",
    name: "Atomos Technology",
    tagline: "Internal platforms & client products.",
    desc: "Internal platforms and client-facing web apps. Owning full-stack delivery across React, Node and MongoDB.",
    year: "2024 — present",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "MongoDB", "AWS", "Express"],
    href: "https://vaibhavmasaye.onrender.com/",
    cover: "#1B4332",
    accent: "#2DD4A8",
    featured: true,
    caseStudy: {
      context: "Day-to-day product work at Atomos — shipping client projects and internal tooling across the stack.",
      blocks: [
        { kind: "para", text: "Most weeks look like this: a feature ticket from a client lead, a backend change to support it, a small migration, and a deploy. I own the path from idea to shipped." },
      ],
    },
  },
  {
    slug: "abc-jobs-portal",
    n: "03",
    category: "personal",
    name: "ABC Jobs Portal",
    tagline: "A jobs board, built end-to-end.",
    desc: "Job portal for software programmers — register, search, profiles and industry news feed.",
    year: "2023",
    role: "Solo build",
    stack: ["Java", "Struts2", "jQuery", "Bootstrap"],
    href: "https://github.com/vaibhavmasaye",
    cover: "#6B3A2A",
    accent: "#E85D3A",
    featured: true,
  },
  {
    slug: "abc-learning-site",
    n: "04",
    category: "personal",
    name: "ABC Learning Site",
    tagline: "Course platform for learners.",
    desc: "Browse Java/HTML courses, apply, and track progress.",
    year: "2023",
    role: "Solo build",
    stack: ["React", "Spring Boot", "REST", "Google API"],
    href: "https://github.com/vaibhavmasaye",
    cover: "#2D3748",
    accent: "#A78BFA",
  },
  {
    slug: "abc-car-portal",
    n: "05",
    category: "personal",
    name: "ABC Car Selling Portal",
    tagline: "Bidding & resale, online.",
    desc: "Registration + bidding system — list cars, place bids, sell to the highest bidder.",
    year: "2022",
    role: "Solo build",
    stack: ["Java", "Spring", "MySQL", "jQuery"],
    href: "https://github.com/vaibhavmasaye",
    cover: "#5C2018",
    accent: "#E8B84A",
  },
  {
    slug: "army-info-hub",
    n: "06",
    category: "personal",
    name: "Army Information Hub",
    tagline: "Aggregated exam intel.",
    desc: "Reliable, updated information about Indian Army entrance examinations — built with web scraping.",
    year: "2022",
    role: "Solo build",
    stack: ["Python", "BeautifulSoup", "MySQL", "Bootstrap"],
    href: "https://github.com/vaibhavmasaye",
    cover: "#1A3C2A",
    accent: "#5A8A5C",
  },
  {
    slug: "youtube-downloader",
    n: "07",
    category: "personal",
    name: "YouTube Downloader",
    tagline: "Free quick-utility for grabs.",
    desc: "Free utility website to download high-quality YouTube & Facebook videos.",
    year: "2022",
    role: "Solo build",
    stack: ["Python", "Flask", "HTML", "CSS"],
    href: "https://github.com/vaibhavmasaye",
    cover: "#0A0A1A",
    accent: "#FF6B6B",
  },
  {
    slug: "personal-portfolio-v1",
    n: "08",
    category: "personal",
    name: "Personal Portfolio (v1)",
    tagline: "First public portfolio.",
    desc: "Crafted developer portfolio — clean, fast, and content-first.",
    year: "2024",
    role: "Designer + Dev",
    stack: ["React", "Tailwind", "Vercel"],
    href: "https://vaibhavmasaye.onrender.com/",
    cover: "#141432",
    accent: "#73FFB8",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
