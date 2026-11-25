// Every word on the site comes from PORTFOLIO_CONTENT.md. Edit that file first, then mirror it here.
// No em dashes anywhere.

export const COMING_SOON = 'Coming soon';

export const hero = {
  name: 'Sijabulile Ncube',
  titleLine: ['Full-Stack Developer', 'AI-Augmented Engineering', '10+ years in Credit Risk'],
  rotating: ['Full-Stack Developer', 'AI-Augmented Engineer', '1st Place, GAIC × Tether AI Bootcamp'],
  availability: 'Available for work',
  headline: 'I build software that people can trust with their money.',
  subHeadline:
    'Junior Full-Stack AI Software Engineer at Melsoft Digital and Credit Risk Specialist at Absa Group Limited. I combine React, TypeScript, Node.js and Supabase with over a decade of banking experience to build products that are secure, fair and easy to use.',
  badges: [
    { icon: 'trophy', text: '1st place, GAIC × Tether Advanced AI Foundations Bootcamp' },
    { icon: 'star', text: 'Melsoft Academy Top 25 (ranked 6th of 500+ applicants)' },
    { icon: 'grad', text: 'Class Representative' },
  ] as const,
  primaryCta: 'View my work',
  cvCta: 'Download CV',
};

export const cvPath = '/Sijabulile_Ncube_CV.pdf';

/** Shown as: value + suffix (counted up), then qualifier, then label. Reads "6th of 500+ · Melsoft Academy". */
export type Stat = { value: number; suffix: string; qualifier?: string; label: string };
export const stats: Stat[] = [
  { value: 6, suffix: 'th', qualifier: 'of 500+', label: 'Melsoft Academy' },
  { value: 1, suffix: 'st', qualifier: 'Place', label: 'GAIC × Tether' },
  { value: 6, suffix: '', label: 'live projects' },
  { value: 10, suffix: '+', label: 'years in finance' },
];

export const about = {
  paragraphs: [
    "I'm a full-stack developer with an unusual edge: I spent over ten years approving credit at Absa Group Limited before I started building software. I know how banks think about risk, trust and compliance, and I bring that into every product I build.",
    "Today I'm a Junior Full-Stack AI Software Engineer at Melsoft Digital. At Melsoft Academy, on the SNPL AI-Augmented Full-Stack Developer Programme, I was selected in the Top 25 from more than 500 applicants and ranked 6th. My classmates voted me Class Representative. Before that, I completed CodeSpace Academy's 12-month Software Development Programme with Distinction.",
    'I work the way modern teams work: PRD, designs, implementation plan, then test-driven development through Issues, branches and pull requests, with CI on every PR. I use AI tools like Claude Code and Google Antigravity to move fast, and I own and can explain every line.',
  ],
  lookingForTitle: 'What I’m looking for',
  lookingFor:
    'a junior developer or intern software developer role where I can learn from experienced engineers and bring real-world business experience to the table.',
};

/** live: URL, or null for "Coming soon", or 'none' to show nothing. github: URL or a plain label. */
export type Project = {
  id: string;
  name: string;
  label?: string;
  award?: string;
  tagline?: string;
  problem: string;
  result?: string;
  whatItDoes: string;
  highlights?: string[];
  role: string;
  stack: string[];
  live: string | null | 'none';
  github: { url: string } | { label: string };
  images?: { src: string; alt: string }[];
  accent: 'emerald' | 'gold';
};

export const featured: Project = {
  id: 'bit-by-bit',
  name: 'Bit by Bit',
  label: 'Final capstone',
  tagline: 'Own it bit by bit.',
  problem:
    "Small South African shops still run lay-bys on paper cards. Customers lose track of what they've paid, shops chase payments and argue about balances, and stock sits on hold.",
  whatItDoes:
    "A digital lay-by platform. Shops create instalment plans, customers see their balance and due dates, every payment is recorded with proof, and owners see what's on track, overdue or ready to collect. No interest, no credit checks, no debt.",
  highlights: [
    'Customer and Shop owner roles',
    'Row Level Security on every table',
    'Proof-of-payment uploads to private storage with owner confirm or reject',
    'Owner dashboard (overdue, ready to collect, total outstanding)',
    'Lay-by risk score (credit-risk logic, fully unit tested)',
    'One-tap WhatsApp reminders',
    'Money rules built test-first',
    'Playwright end-to-end tests',
    'CI on every PR',
  ],
  result:
    'Shipped and live as my final capstone: one place for shops and customers to track every lay-by and payment, with Row Level Security on every table, money rules built test-first, Playwright end-to-end tests and CI on every PR.',
  role: 'Solo founder and full-stack developer: business case, PRD, Stitch designs, implementation plan, build and deployment.',
  stack: [
    'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express',
    'Supabase (Postgres, Auth, Storage, RLS)', 'Vitest', 'React Testing Library',
    'Supertest', 'Playwright', 'GitHub Actions', 'Vercel', 'Render',
  ],
  live: 'https://bit-by-bit-xpql.vercel.app',
  github: { url: 'https://github.com/SIJABULILE-NCUBE/bit-by-bit' },
  images: [
    { src: '/projects/bit-by-bit.webp', alt: 'Bit by Bit landing page with the headline "Own it bit by bit." and a lay-by progress card' },
    { src: '/projects/bit-by-bit-dashboard.webp', alt: 'Bit by Bit shop owner dashboard' },
  ],
  accent: 'gold',
};

/** Slides for the Bit by Bit demo player, in play order. */
export const bitByBitDemo = {
  slides: [
    { src: '/projects/bitbybit-poster.png', alt: 'Bit by Bit demo title card' },
    { src: '/projects/bitbybit-slide-how.png', alt: 'How Bit by Bit works, step by step' },
    featured.images![0],
    { src: '/projects/bitbybit-slide-features.png', alt: 'Bit by Bit key features' },
    featured.images![1],
    { src: '/projects/bitbybit-slide-stack.png', alt: 'Bit by Bit tech stack' },
  ],
  label: 'Watch the demo · 5 min',
  embed: 'https://www.loom.com/embed/4d8cb2d0a224459c94116a401b6623f0?autoplay=1',
  part2: { label: 'Part 2 of the demo', url: 'https://www.loom.com/share/57d46a717af24f6aac323089520fdf88' },
};

export const projects: Project[] = [
  {
    id: 'thembeka',
    name: 'Thembeka App',
    award: '1st place, GAIC × Tether Demo Day',
    problem:
      'Many people in South Africa sending money home to other African countries rely on informal carriers or black-market exchange, with high hidden costs and real scam risk.',
    whatItDoes:
      'The Thembeka app is a safer way to send money home to other African countries in USDT: an offline KYC pre-check, a scam and money-mule shield, a true-cost comparison, and a human approval step before any USDT is sent.',
    role: 'Solo builder for the GAIC × Tether Advanced AI Foundations Bootcamp capstone, drawing on my KYC, fraud and banking experience. Won first place at Demo Day (14 Nov 2026).',
    stack: ['JavaScript', 'QVAC (on-device AI)', 'USDT'],
    live: null,
    github: { url: 'https://github.com/Sijabulile-Ncube/thembeka' },
    images: [{ src: '/projects/thembeka.webp', alt: 'Thembeka safety check flagging a transfer as high risk, with the reasons and the closest known scam pattern' }],
    accent: 'gold',
  },
  {
    id: 'fixmykasi',
    name: 'FixMyKasi',
    label: 'Team project',
    problem:
      "Residents report community faults (potholes, burst pipes, broken streetlights) but can't see who is fixing them or when.",
    whatItDoes:
      "Residents report a fault with a photo, location and category; AI suggests the category and urgency and translates reports; residents track each fault until it's confirmed fixed.",
    role: "Product Owner and Backend Developer in a team of 4 (Team Grok), and the team's submitter. Built the fault assignment backend and the assign screen.",
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'AI integration'],
    live: 'https://fixmykasi.vercel.app',
    github: { url: 'https://github.com/Paul280-cloud/fixmykasi' },
    images: [
      { src: '/projects/fixmykasi.webp', alt: 'FixMyKasi landing page with the headline "Report it. Track it. Get it fixed." and options to create an account, log in or browse faults' },
      { src: '/projects/fixmykasi-2.webp', alt: 'FixMyKasi fault page for a pothole marked Fixed, showing its location, the responsible municipal roads team, the expected fix date and the status history' },
    ],
    accent: 'emerald',
  },
  {
    id: 'creditwise',
    name: 'CreditWise AI',
    problem:
      "Many South Africans don't understand their credit health or affordability until a bank says no.",
    whatItDoes:
      'A mobile-first credit health and affordability app with DTI ratio cards that reference NCA thresholds, forensic audit-style transaction flagging, compliance-aware AI insights and plain-language vehicle finance explanations.',
    role: 'Solo developer, taken through the full SDLC on the Melsoft programme (concept document, PRD, Stitch designs, implementation plan, build).',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    live: null,
    github: { url: 'https://github.com/Sijabulile-Ncube/creditwise-ai' },
    accent: 'emerald',
  },
  {
    id: 'house-of-laundry',
    name: 'House of Laundry',
    label: 'Client project',
    problem:
      'A real Soweto laundry business needed a modern website that explains its services and makes it easy for customers to choose and book.',
    whatItDoes:
      'A full 7-page business website with a cart for service selection, laundry-themed CSS animations and a dark mode toggle, delivered with a client handover package.',
    role: 'Freelance developer: client outreach, requirements gathering, design, build and handover.',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Netlify'],
    live: 'https://house-of-laundry.netlify.app',
    github: { url: 'https://github.com/Sijabulile-Ncube/HOUSE-OF-LAUNDRY-REDESIGN' },
    images: [{ src: '/projects/house-of-laundry.webp', alt: 'House of Laundry website home page with the headline "A chore-free day, every day."' }],
    accent: 'emerald',
  },
  {
    id: 'matshiya',
    name: 'Matshiya Technologies',
    label: 'Client project',
    problem: 'A technology business needed a premium web presence to win clients.',
    whatItDoes:
      'A landing page with a space-to-Earth intro animation, warp-speed starfield, glowing Earth and an animated wire network.',
    role: 'Freelance developer: pitched the concept to the owners, who approved the build.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'canvas animation'],
    live: 'none',
    github: { label: 'Private client repo' },
    images: [
      { src: '/projects/matshiya.webp', alt: 'Matshiya Technologies landing page with the headline "Integrated ICT and security infrastructure, engineered for continuity." over a city skyline' },
      { src: '/projects/matshiya-2.webp', alt: 'Matshiya Technologies capabilities section listing IT infrastructure and networking, wireless infrastructure, cybersecurity and Microsoft 365 services' },
    ],
    accent: 'gold',
  },
];

export const alsoBuilt = [
  {
    name: 'NeighbourLoan',
    description: 'neighbourhood tool-lending marketplace with a Trust Score designed from credit-risk thinking.',
    live: 'https://neighbourloan.netlify.app',
    github: 'https://github.com/Sijabulile-Ncube/neighbourloan-capstone',
    image: { src: '/projects/neighbourloan.webp', alt: 'NeighbourLoan marketplace listing tools to borrow, each with a trust score' },
  },
];

export const experience = [
  {
    title: 'Junior Full-Stack AI Software Engineer',
    org: 'Melsoft Digital',
    dates: 'Nov 2026 to present',
    body: 'Building full-stack web apps through PRD, designs, TDD, PRs and CI, using AI-augmented tools (Claude Code, Google Antigravity).',
    current: true,
  },
  {
    title: 'Specialist: Credit Risk',
    org: 'Absa Group Limited, Johannesburg',
    dates: 'Sep 2022 to present',
    body: 'Review, approve and manage credit limits (overdrafts, revolving loans, guarantees, letters of credit, credit cards) within a ZAR 35 million mandate. Validate financial documents and securities for Commercial and Business Banking.',
    current: true,
  },
  {
    title: 'Specialist: Risk (Credit Officer)',
    org: 'Absa Group Limited',
    dates: 'Aug 2017 to Aug 2022',
    body: 'Managed a Private Banking portfolio with a mandate of up to ZAR 5 million; creditworthiness reviews and risk analysis.',
  },
  {
    title: 'Production Officer',
    org: 'Absa Group Limited (Vehicle and Asset Finance)',
    dates: 'Mar 2012 to Jul 2017',
    body: 'Joined via learnership, permanent from 2014. NCA, FAIS and FICA compliance on vehicle finance contracts.',
  },
  {
    title: 'Billing Support Consultant',
    org: 'Virgin Mobile South Africa',
    dates: 'Dec 2009 to Jun 2010',
  },
] as { title: string; org: string; dates: string; body?: string; current?: boolean }[];

export const topAward = {
  title: '1st place, Demo Day',
  detail: 'GAIC × Tether Advanced AI Foundations Bootcamp, Cohort 1 (Nov 2026), with the Thembeka app.',
};

export const certificate = {
  title: 'Advanced AI Foundations Bootcamp, Cohort 1',
  org: 'Gauteng AI Community (GAIC) × Tether',
  date: 'Nov 2026',
  pdf: '/certificates/gaic-tether-bootcamp.pdf',
  image: '/certificates/gaic-tether-bootcamp.jpg',
  thumb: '/certificates/gaic-tether-bootcamp-thumb.webp',
  alt: 'Certificate of completion for the Advanced AI Foundations Bootcamp, Cohort 1, awarded to Sijabulile Ncube by the Gauteng AI Community and Tether',
};

export const awards = [
  { icon: 'star', title: 'Melsoft Academy Top 25', detail: 'ranked 6th of 500+ applicants (2026)' },
  { icon: 'medal', title: 'Top 6', detail: 'in a Melsoft Academy cohort hackathon (2026)' },
  { icon: 'grad', title: 'Class Representative', detail: 'Melsoft Academy AI-Augmented Full-Stack Developer Programme' },
  { icon: 'grad', title: 'Distinction', detail: 'CodeSpace Academy Software Development Programme (2026)' },
  { icon: 'grad', title: 'Distinction', detail: 'National Certificate in Banking Services Advice, Milpark (2013)' },
] as const;

export type EducationItem = { title: string; meta: string[]; tags?: string[]; certificate?: string };
export const education: EducationItem[] = [
  { title: 'AI-Augmented Full-Stack Developer Programme (SNPL)', meta: ['Melsoft Academy', '2026'], tags: ['in progress'] },
  { title: 'Software Development Programme (Front-End)', meta: ['CodeSpace Academy', 'Aug 2025 to Jul 2026'], tags: ['Distinction'] },
  {
    title: 'Advanced AI Foundations Bootcamp, Cohort 1',
    meta: ['Gauteng AI Community (GAIC) × Tether', 'Nov 2026'],
    tags: ['1st place at Demo Day'],
    certificate: '/certificates/gaic-tether-bootcamp.pdf',
  },
  { title: 'Artificial Intelligence in the 4IR', meta: ['University of Johannesburg', '2026'] },
  { title: 'Advanced Diploma in Financial Markets (NQF 7)', meta: ['University of Johannesburg', '2025'] },
  { title: 'Forensic and Investigative Auditing (NQF 6)', meta: ['UNISA', '2019'] },
  { title: 'National Certificate in Banking Services Advice (NQF 5)', meta: ['Milpark Education', '2013'], tags: ['Distinction'] },
  { title: 'National Credit Act (NCA) Certificate', meta: ['2016'] },
  { title: 'Regulatory Examination (RE5)', meta: ['2016'] },
  { title: 'HTML Essentials', meta: ['Cisco Networking Academy'] },
];

export const udemy = {
  title: 'Udemy (Oct 2026)',
  courses: [
    'Build Autonomous AI Agents From Scratch With Python',
    'Intro to AI Agents and Agentic AI',
    'AI Agents and Agentic AI for Leaders',
    'AI Fundamentals for the Workplace',
  ],
};

export const skills = [
  { group: 'Languages', icon: 'code', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'] },
  { group: 'Frontend', icon: 'layout', items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Recharts', 'Framer Motion', 'responsive and mobile-first design', 'PWAs'] },
  { group: 'Backend and data', icon: 'server', items: ['Node.js', 'Express', 'REST API design', 'Supabase (PostgreSQL, Auth, Storage, Row Level Security)', 'authentication and authorisation'] },
  { group: 'Testing and quality', icon: 'test', items: ['Test-driven development', 'Vitest', 'React Testing Library', 'Supertest', 'Playwright (end-to-end)', 'code reviews'] },
  { group: 'DevOps and workflow', icon: 'git', items: ['Git', 'GitHub', 'Issues → branches → PRs', 'GitHub Actions CI', 'Vercel', 'Netlify', 'Render', 'Agile'] },
  { group: 'AI engineering', icon: 'ai', items: ['Claude Code', 'Google Antigravity', 'prompt engineering', 'LLM API integration', 'AI agents and function calling', 'RAG', 'MCP', 'on-device AI (QVAC)'] },
  { group: 'Design', icon: 'design', items: ['Google Stitch', 'Figma', 'PRD writing', 'technical documentation'] },
  { group: 'Domain', icon: 'domain', items: ['Credit risk', 'affordability (NCA)', 'KYC and fraud', 'FICA and FAIS compliance', 'financial document verification'] },
] as const;

export const contact = {
  email: 's.mabhena@gmail.com',
  phone: '+27 74 331 4940',
  phoneHref: 'tel:+27743314940',
  linkedin: 'https://linkedin.com/in/sijabulilemn',
  github: 'https://github.com/Sijabulile-Ncube',
  location: 'Gauteng, South Africa',
  cta: "Looking for a junior or intern developer who learns fast and ships real products? Let's talk.",
};
