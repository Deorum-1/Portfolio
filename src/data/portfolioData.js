export const personalInfo = {
  name: "Sokunbi Oluwaferanmi Tantoolorun",
  shortName: "Feranmi Sokunbi",
  handle: "Deorum-1",
  title: "Software Developer & Frontend Engineer",
  tagline: "Crafting High-Performance, Animated Web Applications & AI-Assisted Systems",
  location: "Abeokuta, Ogun State, Nigeria",
  availability: "Open for Opportunities & High-Impact Roles",
  email: "feranmiisaac622@gmail.com",
  phone: "+234 702 536 4239",
  linkedin: "https://linkedin.com/in/oluwaferanmi212",
  github: "https://github.com/Deorum-1",
  resumeUrl: "/resume.pdf",
  bio: `Detail-oriented software developer and Computer Science graduate (B.Sc., 2026) who builds responsive, performant web applications with React.js, Next.js, and modern JavaScript. Experienced in the full development lifecycle—from planning and architecture to testing and deployment—and in explaining technical decisions clearly in writing. Anthropic AI Fluency certified, with 200+ hours of self-directed study in AI systems and prompt engineering.`,
  stats: [
    { label: "Hours in AI & Prompt Engineering", value: "200+", icon: "Sparkles" },
    { label: "Years Web Development", value: "3+", icon: "Code2" },
    { label: "Production Web Projects", value: "10+", icon: "Globe" },
    { label: "Anthropic AI Certified", value: "100%", icon: "Award" },
  ]
};

export const skillsData = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Languages", level: "Expert", icon: "Code", highlight: "Async/await, closures, modern ES features" },
  { name: "HTML5", category: "Languages", level: "Expert", icon: "FileCode", highlight: "Semantic markup, SEO optimization, accessible DOM" },
  { name: "CSS3", category: "Languages", level: "Expert", icon: "Palette", highlight: "Responsive flexbox/grid, keyframe animations, glassmorphism" },
  
  // Frameworks & Libraries
  { name: "React.js", category: "Frontend", level: "Advanced", icon: "Boxes", highlight: "Hooks, component lifecycles, state management, SPA architecture" },
  { name: "Next.js", category: "Frontend", level: "Advanced", icon: "Zap", highlight: "SSR, SSG, routing, full-stack optimizations" },
  { name: "GSAP (GreenSock)", category: "Frontend", level: "Advanced", icon: "Activity", highlight: "ScrollTrigger, timeline orchestrations, 60fps micro-interactions" },
  { name: "Tailwind CSS", category: "Frontend", level: "Expert", icon: "Layout", highlight: "Modern utility-first styling, rapid UI prototyping, responsive layouts" },

  // AI & Emerging Tech
  { name: "Prompt Engineering", category: "AI & Systems", level: "Advanced", icon: "Cpu", highlight: "Few-shot prompting, chain-of-thought, persona structuring" },
  { name: "AI-Assisted Workflows", category: "AI & Systems", level: "Advanced", icon: "Bot", highlight: "Agentic IDEs, test automation, AI code refactoring" },
  { name: "AI Response Evaluation", category: "AI & Systems", level: "Advanced", icon: "CheckCircle2", highlight: "Benchmarking accuracy, hallucination detection, prompt tuning" },
  { name: "Anthropic AI Fluency", category: "AI & Systems", level: "Certified", icon: "ShieldCheck", highlight: "Framework & Foundations certified by Anthropic" },

  // Backend & Tooling
  { name: "Appwrite", category: "Backend & Tools", level: "Intermediate", icon: "Database", highlight: "Authentication, database collections, storage & serverless functions" },
  { name: "Git & GitHub", category: "Backend & Tools", level: "Advanced", icon: "GitBranch", highlight: "Version control, branching strategies, collaborative PR workflows" },
  { name: "Vercel", category: "Backend & Tools", level: "Advanced", icon: "Cloud", highlight: "CI/CD automated pipelines, edge deployment, environment configuration" },
];

export const experienceData = [
  {
    role: "Remote Software Developer",
    company: "Self-Employed / Freelance",
    period: "2023 – Present",
    type: "Remote / Contract",
    location: "Global",
    description: "Designing and building high-performance, production-quality web applications for freelance clients and public portfolio projects.",
    achievements: [
      "Owned end-to-end product requirements, architecture planning, coding, quality testing, and production deployment.",
      "Delivered clean, performant, and accessible user interfaces utilizing React.js, Next.js, and GSAP.",
      "Debugged and reviewed code methodically, verifying edge cases, responsive breakpoints, and cross-browser consistency before shipping.",
      "Adopted emerging tooling independently, including AI-assisted development workflows and prompt engineering practices to accelerate delivery cycles."
    ],
    tech: ["React.js", "Next.js", "GSAP", "JavaScript", "Tailwind CSS", "Vercel"]
  },
  {
    role: "Software Development Intern",
    company: "Information & Communication Technology Resource Center (ICTREC)",
    institution: "Federal University of Agriculture, Abeokuta (FUNAAB)",
    period: "2024 – 2025",
    type: "Internship",
    location: "Abeokuta, Nigeria",
    description: "Contributed to core campus web applications and digital infrastructure serving university stakeholders.",
    achievements: [
      "Built and maintained scalable web applications with HTML/CSS, React.js, and Next.js, prioritizing clean code structure and reliable performance.",
      "Reviewed technical documentation and codebases for accuracy, clarity, and consistency, correcting discrepancies prior to deployment.",
      "Collaborated with senior technical leads and multidisciplinary teams to troubleshoot bugs, document solutions, and articulate technical progress to non-technical stakeholders.",
      "Delivered assigned frontend modules on schedule with minimal supervision."
    ],
    tech: ["React.js", "Next.js", "HTML5/CSS3", "JavaScript", "Documentation", "Git"]
  }
];

export const projectsData = [
  {
    title: "Award-Winning Website",
    category: "Interactive & Animated Web Experience",
    subtitle: "Complex Scroll & Interaction-Based Animations with GSAP",
    description: "An interactive, animated website showcasing modern frontend development, immersive storytelling, and buttery-smooth user experiences powered by GSAP and React.",
    liveUrl: "https://award-winning-website-with-reactjs.vercel.app",
    githubUrl: "https://github.com/Deorum-1",
    featured: true,
    tags: ["React.js", "GSAP", "CSS Animations", "Vercel", "Interactive UI"],
    achievements: [
      "Implemented complex scroll-triggered and interaction-based animations with GSAP while maintaining optimal 60fps performance.",
      "Optimized load times and asset caching to ensure seamless user transitions and responsive visual fidelity.",
      "Crafted custom micro-interactions that elevate engagement and communicate product narratives effectively."
    ],
    accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/50"
  },
  {
    title: "Real Estate Listing Platform",
    category: "Full Web Application",
    subtitle: "Modern Property Discovery Platform with Responsive Architecture",
    description: "A comprehensive, responsive property listing platform featuring seamless multi-page navigation, clean component structures, and intuitive discovery filters.",
    liveUrl: "https://real-estate-website-five-bice.vercel.app",
    githubUrl: "https://github.com/Deorum-1",
    featured: true,
    tags: ["React.js", "Tailwind CSS", "Component Architecture", "Vercel"],
    achievements: [
      "Architected modular, reusable UI components for long-term maintainability and codebase clarity.",
      "Designed a responsive layout with unified navigation patterns across mobile, tablet, and desktop views.",
      "Structured property browsing with clear filtering states and performant DOM updates."
    ],
    accentColor: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50"
  },
  {
    title: "Interactive Developer Portfolio",
    category: "Portfolio & Personal Brand",
    subtitle: "Modern Dark Glassmorphism, Tailwind v4 & Vite",
    description: "Custom-built personal developer portfolio featuring reactive UI components, embedded resume viewer, interactive skill badges, and contact feedback.",
    liveUrl: "#",
    githubUrl: "https://github.com/Deorum-1",
    featured: false,
    tags: ["React.js", "Tailwind CSS v4", "Lucide Icons", "Vite", "Canvas Confetti"],
    achievements: [
      "Engineered a polished cyber-minimalist interface with zero layout shift and sub-second load times.",
      "Included dynamic copy-to-clipboard interactions, direct PDF resume download, and responsive navigation drawer."
    ],
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50"
  }
];

export const educationData = {
  degree: "B.Sc. in Computer Science",
  institution: "Federal University of Agriculture, Abeokuta (FUNAAB)",
  period: "Graduating 2026",
  location: "Abeokuta, Nigeria",
  description: "Rigorous academic training in core computer science disciplines, algorithms, and practical software engineering.",
  coursework: [
    "Software Development & Lifecycle",
    "Data Structures & Algorithms",
    "Web Technologies & Architectures",
    "Database Management Systems",
    "Systems Analysis & Design"
  ]
};

export const certificationsData = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "Certified",
    badge: "Official Certificate",
    description: "Comprehensive qualification covering modern AI foundation models, prompt engineering frameworks, AI safety considerations, and enterprise AI evaluation methodologies.",
    skillsCovered: ["Prompt Engineering", "Evaluation Benchmarks", "AI Ethics & Safety", "Foundation Model Architectures"]
  }
];
