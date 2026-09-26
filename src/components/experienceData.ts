export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  projects?: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    period: "Jan 2026 – Aug 2026",
    role: "Senior Frontend Engineer",
    company: "VLink India Pvt Ltd",
    location: "Gurugram, India",
    type: "Full-time",
    summary:
      "Owned frontend architecture and end-to-end delivery for production applications using React.js, Next.js, and TypeScript.",
    highlights: [
      "Migrated legacy React.js app to Next.js, cutting initial page load time by ~30%",
      "Refactored global state into Redux Toolkit with RTK Query, reducing redundant API calls by ~40%",
      "Implemented JWT-based authentication and route protection with role-aware UI",
      "Improved Core Web Vitals, raising Lighthouse scores from ~60s to 85–90+",
      "Built reusable typed UI components, cutting duplicate styling code by ~25%",
      "Shipped production releases 1–2 times weekly via CI/CD with Cypress test coverage",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Cypress",
    ],
  },
  {
    period: "Aug 2025 – Jan 2026",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "Freelance",
    summary:
      "Restructured cluttered AI-generated React projects into maintainable codebases and repaired end-to-end user flows.",
    highlights: [
      "Resolved majority of reported bugs within first two weeks of engagement",
      "Introduced Redux state management and Node.js/Express API endpoints",
      "Deployed via Vercel/Netlify and containerized services with Docker",
      "Improved perceived application speed by 50%+ through optimizations",
    ],
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "Docker",
      "Vercel",
      "Netlify",
    ],
  },
  {
    period: "Nov 2022 – Aug 2025",
    role: "Engineer – Software Development",
    company: "Codeblock Technologies Pvt. Ltd.",
    location: "Noida (Sector 135), India",
    type: "Full-time",
    summary:
      "Built React.js and Next.js applications in TypeScript across multiple client projects, improving page-load performance by 35%.",
    highlights: [
      "Designed and built 30+ reusable lightweight components, cutting feature development time by ~20%",
      "Implemented SSR and static generation in Next.js with on-page SEO improvements",
      "Optimized images and assets, reducing average page weight by 30–40%",
      "Wrote Cypress tests integrated into CI/CD, cutting regression bugs by ~25%",
      "Integrated REST APIs and MongoDB/Firebase data sources",
    ],
    projects: ["Yobiz", "Vitalic", "Imagineclick", "Yoembryo"],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cypress",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    period: "Jan 2022 – Jun 2022",
    role: "Frontend Development Intern",
    company: "Leads4Needs",
    location: "India",
    type: "Internship",
    summary:
      "Built responsive breadcrumbs, dialogs, drawers, and forms using React.js and JavaScript.",
    highlights: [
      "Implemented smooth animations and interaction patterns",
      "Learned responsive frontend development best practices",
    ],
    tech: ["React.js", "JavaScript", "CSS"],
  },
  {
    period: "Feb 2018 – Aug 2021",
    role: "Senior Process Associate",
    company: "Genpact",
    location: "Noida, India",
    type: "Full-time",
    summary:
      "Processed 18–22 medical, legal, auto, and liability claims daily with strong attention to detail.",
    highlights: [
      "Consistently met or exceeded daily throughput targets",
      "Maintained low error/rework rate across high-volume caseload",
      "Created accurate claims within 20–30-minute handling targets",
    ],
    tech: ["Claims Processing", "Data Analysis", "Process Optimization"],
  },
];
