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
      "Leading frontend architecture and end-to-end delivery for production-grade applications, driving measurable performance and developer-experience improvements across the engineering org.",
    highlights: [
      "Spearheaded migration of a legacy React.js codebase to Next.js, reducing initial page load time by ~30% and modernizing the entire rendering strategy",
      "Refactored global state management into Redux Toolkit with RTK Query, eliminating ~40% of redundant API calls and simplifying data-fetching logic",
      "Designed and implemented JWT-based authentication with role-aware route protection, strengthening application security across user tiers",
      "Elevated Core Web Vitals and Lighthouse scores from ~60 to 85–90+, directly improving SEO rankings and user engagement metrics",
      "Architected a reusable typed component library, reducing duplicate styling code by ~25% and accelerating feature delivery",
      "Owned CI/CD release pipeline, shipping production updates 1–2 times weekly with comprehensive Cypress test coverage",
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
      "Partnered with early-stage startups to transform unstructured, AI-generated React codebases into scalable, maintainable products with reliable end-to-end user flows.",
    highlights: [
      "Diagnosed and resolved the majority of critical bugs within the first two weeks of each engagement, restoring stakeholder confidence",
      "Introduced Redux for predictable state management and built Node.js/Express API endpoints to support full-stack feature delivery",
      "Streamlined deployment workflows with Vercel/Netlify and containerized services using Docker for consistent environments",
      "Optimized rendering and asset delivery, improving perceived application speed by 50%+ across client projects",
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
      "Delivered high-performance React.js and Next.js applications in TypeScript across multiple enterprise client projects, consistently improving page-load performance by 35%.",
    highlights: [
      "Designed and built 30+ reusable, lightweight components, reducing feature development time by ~20% across teams",
      "Implemented SSR and static site generation in Next.js with on-page SEO enhancements, boosting organic visibility for client products",
      "Optimized image and asset delivery, reducing average page weight by 30–40% and improving mobile performance",
      "Established Cypress testing integrated into CI/CD pipelines, cutting regression bugs by ~25%",
      "Integrated REST APIs with MongoDB and Firebase data sources, enabling real-time features and scalable data handling",
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
      "Kicked off my engineering career by building responsive UI components — breadcrumbs, dialogs, drawers, and forms — using React.js and JavaScript.",
    highlights: [
      "Implemented smooth animations and interaction patterns that elevated the overall user experience",
      "Gained hands-on exposure to responsive frontend development best practices and component-driven architecture",
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
      "Managed high-volume medical, legal, auto, and liability claims processing with precision, consistently exceeding performance benchmarks in a fast-paced operations environment.",
    highlights: [
      "Processed 18–22 claims daily while consistently meeting or exceeding throughput targets",
      "Maintained an exceptionally low error/rework rate across a high-volume caseload",
      "Delivered accurate claims within strict 20–30-minute handling targets, demonstrating strong time management under pressure",
    ],
    tech: ["Claims Processing", "Data Analysis", "Process Optimization"],
  },
];
