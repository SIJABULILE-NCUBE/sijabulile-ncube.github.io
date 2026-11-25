# Portfolio content: Sijabulile Ncube

This is the single source of truth for every word on the site. Build the site from this file.
Facts here are confirmed by Sijabulile. Do not invent numbers, clients, certificates or links.
Anything marked **TODO** must be filled in by Sijabulile before launch (or the item is hidden).
Writing style: no em dashes anywhere on the site.

---

## 1. Hero

- **Name:** Sijabulile Ncube
- **Title line:** Full-Stack Developer · AI-Augmented Engineering · 10+ years in Credit Risk
- **Headline:** I build software that people can trust with their money.
- **Rotating line (under the headline):** Full-Stack Developer · AI-Augmented Engineer · 1st Place, GAIC × Tether AI Bootcamp
- **Availability badge:** Available for work
- **Sub-headline:** Junior Full-Stack AI Software Engineer at Melsoft Digital and Credit Risk Specialist at Absa Group Limited. I combine React, TypeScript, Node.js and Supabase with over a decade of banking experience to build products that are secure, fair and easy to use.
- **Badges (small pills under the headline):**
  - 🏆 1st place, GAIC × Tether Advanced AI Foundations Bootcamp
  - ⭐ Melsoft Academy Top 25 (ranked 6th of 500+ applicants)
  - 🎓 Class Representative
- **Buttons:** View my work · Download CV
- **Photo:** black-and-white pencil sketch of the existing photo (/profile-sketch.webp; /profile-sketch.jpg for the social preview). The colour original is backed up outside the repo.

## 2. Stats strip (animated counters)

- 6th of 500+ · Melsoft Academy
- 1st Place · GAIC × Tether
- 6 live projects
- 10+ years in finance

## 3. About

I'm a full-stack developer with an unusual edge: I spent over ten years approving credit at Absa Group Limited before I started building software. I know how banks think about risk, trust and compliance, and I bring that into every product I build.

Today I'm a Junior Full-Stack AI Software Engineer at Melsoft Digital. At Melsoft Academy, on the SNPL AI-Augmented Full-Stack Developer Programme, I was selected in the Top 25 from more than 500 applicants and ranked 6th. My classmates voted me Class Representative. Before that, I completed CodeSpace Academy's 12-month Software Development Programme with Distinction.

I work the way modern teams work: PRD, designs, implementation plan, then test-driven development through Issues, branches and pull requests, with CI on every PR. I use AI tools like Claude Code and Google Antigravity to move fast, and I own and can explain every line.

**What I'm looking for:** a junior developer or intern software developer role where I can learn from experienced engineers and bring real-world business experience to the table.

## 4. Featured projects (in this order)

For each: screenshot, problem, my role, tech stack, live link, GitHub link.

### 4.1 Bit by Bit (Final capstone) · FEATURED FIRST
- **Tagline:** Own it bit by bit.
- **Problem:** Small South African shops still run lay-bys on paper cards. Customers lose track of what they've paid, shops chase payments and argue about balances, and stock sits on hold.
- **What it does:** A digital lay-by platform. Shops create instalment plans, customers see their balance and due dates, every payment is recorded with proof, and owners see what's on track, overdue or ready to collect. No interest, no credit checks, no debt.
- **Result:** Shipped and live as my final capstone: one place for shops and customers to track every lay-by and payment, with Row Level Security on every table, money rules built test-first, Playwright end-to-end tests and CI on every PR.
- **Demo video:** https://www.loom.com/share/4d8cb2d0a224459c94116a401b6623f0 (5 min) · Part 2: https://www.loom.com/share/57d46a717af24f6aac323089520fdf88
- **Highlights:** Customer and Shop owner roles; Row Level Security on every table; proof-of-payment uploads to private storage with owner confirm or reject; owner dashboard (overdue, ready to collect, total outstanding); lay-by risk score (credit-risk logic, fully unit tested); one-tap WhatsApp reminders; money rules built test-first; Playwright end-to-end tests; CI on every PR.
- **My role:** Solo founder and full-stack developer: business case, PRD, Stitch designs, implementation plan, build and deployment.
- **Stack:** React, TypeScript, Vite, Tailwind CSS, Node.js, Express, Supabase (Postgres, Auth, Storage, RLS), Vitest, React Testing Library, Supertest, Playwright, GitHub Actions, Vercel, Render
- **Live:** https://bit-by-bit-xpql.vercel.app
- **GitHub:** https://github.com/SIJABULILE-NCUBE/bit-by-bit

### 4.2 Thembeka App · 🏆 1st place, GAIC × Tether Demo Day
- **Problem:** Many people in South Africa sending money home to other African countries rely on informal carriers or black-market exchange, with high hidden costs and real scam risk.
- **What it does:** The Thembeka app is a safer way to send money home to other African countries in USDT: an offline KYC pre-check, a scam and money-mule shield, a true-cost comparison, and a human approval step before any USDT is sent.
- **My role:** Solo builder for the GAIC × Tether Advanced AI Foundations Bootcamp capstone, drawing on my KYC, fraud and banking experience. Won first place at Demo Day (14 Nov 2026).
- **Stack:** JavaScript, QVAC (on-device AI), USDT
- **Live:** TODO (if deployed, otherwise show "Demo on request")
- **GitHub:** https://github.com/Sijabulile-Ncube/thembeka

### 4.3 FixMyKasi (Team project)
- **Problem:** Residents report community faults (potholes, burst pipes, broken streetlights) but can't see who is fixing them or when.
- **What it does:** Residents report a fault with a photo, location and category; AI suggests the category and urgency and translates reports; residents track each fault until it's confirmed fixed.
- **My role:** Product Owner and Backend Developer in a team of 4 (Team Grok), and the team's submitter. Built the fault assignment backend and the assign screen.
- **Stack:** React, TypeScript, Node.js, Supabase, AI integration
- **Live:** https://fixmykasi.vercel.app
- **GitHub:** https://github.com/Paul280-cloud/fixmykasi

### 4.4 CreditWise AI
- **Problem:** Many South Africans don't understand their credit health or affordability until a bank says no.
- **What it does:** A mobile-first credit health and affordability app with DTI ratio cards that reference NCA thresholds, forensic audit-style transaction flagging, compliance-aware AI insights and plain-language vehicle finance explanations.
- **My role:** Solo developer, taken through the full SDLC on the Melsoft programme (concept document, PRD, Stitch designs, implementation plan, build).
- **Stack:** React 19, TypeScript, Vite, Tailwind CSS, Recharts, Framer Motion
- **Live:** TODO
- **GitHub:** https://github.com/Sijabulile-Ncube/creditwise-ai

### 4.5 House of Laundry (Client project)
- **Problem:** A real Soweto laundry business needed a modern website that explains its services and makes it easy for customers to choose and book.
- **What it does:** A full 7-page business website with a cart for service selection, laundry-themed CSS animations and a dark mode toggle, delivered with a client handover package.
- **My role:** Freelance developer: client outreach, requirements gathering, design, build and handover.
- **Stack:** React 18, Vite, Tailwind CSS, Netlify
- **Live:** https://house-of-laundry.netlify.app
- **GitHub:** https://github.com/Sijabulile-Ncube/HOUSE-OF-LAUNDRY-REDESIGN

### 4.6 Matshiya Technologies (Client project)
- **Problem:** A technology business needed a premium web presence to win clients.
- **What it does:** A landing page with a space-to-Earth intro animation, warp-speed starfield, glowing Earth and an animated wire network.
- **My role:** Freelance developer: pitched the concept to the owners, who approved the build.
- **Stack:** React, TypeScript, Vite, Tailwind CSS, canvas animation
- **Live:** no link (do not show a live link or a "Coming soon" button for this project)
- **GitHub:** private repo, show "Private client repo" instead of a link

## 5. More projects (small cards, optional section "Also built")

- **NeighbourLoan:** neighbourhood tool-lending marketplace with a Trust Score designed from credit-risk thinking. https://neighbourloan.netlify.app · https://github.com/Sijabulile-Ncube/neighbourloan-capstone

## 6. Experience (timeline)

1. **Junior Full-Stack AI Software Engineer** · Melsoft Digital · Nov 2026 to present
   Building full-stack web apps through PRD, designs, TDD, PRs and CI, using AI-augmented tools (Claude Code, Google Antigravity).
2. **Specialist: Credit Risk** · Absa Group Limited, Johannesburg · Sep 2022 to present
   Review, approve and manage credit limits (overdrafts, revolving loans, guarantees, letters of credit, credit cards) within a ZAR 35 million mandate. Validate financial documents and securities for Commercial and Business Banking.
3. **Specialist: Risk (Credit Officer)** · Absa Group Limited · Aug 2017 to Aug 2022
   Managed a Private Banking portfolio with a mandate of up to ZAR 5 million; creditworthiness reviews and risk analysis.
4. **Production Officer** · Absa Group Limited (Vehicle and Asset Finance) · Mar 2012 to Jul 2017
   Joined via learnership, permanent from 2014. NCA, FAIS and FICA compliance on vehicle finance contracts.
5. **Billing Support Consultant** · Virgin Mobile South Africa · Dec 2009 to Jun 2010

## 7. Awards and achievements

- 🏆 **1st place, Demo Day:** GAIC × Tether Advanced AI Foundations Bootcamp, Cohort 1 (Nov 2026), with the Thembeka app. Certificate: `/certificates/gaic-tether-bootcamp.pdf` (TODO: Sijabulile adds the file)
- ⭐ **Melsoft Academy Top 25:** ranked 6th of 500+ applicants (2026)
- 🥇 **Top 6** in a Melsoft Academy cohort hackathon (2026)
- 🎓 **Class Representative:** Melsoft Academy AI-Augmented Full-Stack Developer Programme
- 🎓 **Distinction:** CodeSpace Academy Software Development Programme (2026)
- 🎓 **Distinction:** National Certificate in Banking Services Advice, Milpark (2013)

## 8. Education and certifications

- AI-Augmented Full-Stack Developer Programme (SNPL) · Melsoft Academy · 2026 (in progress)
- Software Development Programme (Front-End) · CodeSpace Academy · Aug 2025 to Jul 2026 · Distinction
- Advanced AI Foundations Bootcamp, Cohort 1 · Gauteng AI Community (GAIC) × Tether · Nov 2026 · Certificate, 1st place at Demo Day (`/certificates/gaic-tether-bootcamp.pdf`)
- Artificial Intelligence in the 4IR · University of Johannesburg · 2026
- Advanced Diploma in Financial Markets (NQF 7) · University of Johannesburg · 2025
- Forensic and Investigative Auditing (NQF 6) · UNISA · 2019
- National Certificate in Banking Services Advice (NQF 5) · Milpark Education · 2013 · Distinction
- National Credit Act (NCA) Certificate · 2016
- Regulatory Examination (RE5) · 2016
- HTML Essentials · Cisco Networking Academy
- Udemy (Oct 2026): Build Autonomous AI Agents From Scratch With Python · Intro to AI Agents and Agentic AI · AI Agents and Agentic AI for Leaders · AI Fundamentals for the Workplace

Do NOT list AWS, Azure, IBM or other AI certificates yet (not completed).

## 9. Skills (grouped, with icons)

- **Languages:** JavaScript, TypeScript, HTML5, CSS3, SQL
- **Frontend:** React, Vite, Tailwind CSS, React Router, Recharts, Framer Motion, responsive and mobile-first design, PWAs
- **Backend and data:** Node.js, Express, REST API design, Supabase (PostgreSQL, Auth, Storage, Row Level Security), authentication and authorisation
- **Testing and quality:** Test-driven development, Vitest, React Testing Library, Supertest, Playwright (end-to-end), code reviews
- **DevOps and workflow:** Git, GitHub, Issues → branches → PRs, GitHub Actions CI, Vercel, Netlify, Render, Agile
- **AI engineering:** Claude Code, Google Antigravity, prompt engineering, LLM API integration, AI agents and function calling, RAG, MCP, on-device AI (QVAC)
- **Design:** Google Stitch, Figma, PRD writing, technical documentation
- **Domain:** Credit risk, affordability (NCA), KYC and fraud, FICA and FAIS compliance, financial document verification

## 10. Contact

- **Email:** s.mabhena@gmail.com
- **Phone:** +27 74 331 4940
- **LinkedIn:** https://linkedin.com/in/sijabulilemn
- **GitHub:** https://github.com/Sijabulile-Ncube
- **Location:** Gauteng, South Africa
- **CV:** `/Sijabulile_Ncube_CV.pdf` (Download CV button)
- **Call to action:** Looking for a junior or intern developer who learns fast and ships real products? Let's talk.

## 11. Project slides ("View slides" button)

Every project except Bit by Bit (which has its demo video) has a slide deck, built in `src/data/slides.ts` from that project's card.
Order: Title (name, pitch, award or label) · Problem · Solution (key features) · one slide per screenshot · Built with (stack) · Live and GitHub buttons (only the links the card has).
Pitches and features are taken from each card's "What it does" text:

- **Thembeka App:** A safer way to send money home to other African countries in USDT. Features: Offline KYC pre-check; Scam and money-mule shield; True-cost comparison; Human approval step before any USDT is sent.
- **FixMyKasi:** Residents report community faults and track each one until it's confirmed fixed. Features: Report a fault with a photo, location and category; AI suggests the category and urgency; AI translates reports; Track each fault until it's confirmed fixed.
- **CreditWise AI:** A mobile-first credit health and affordability app. Features: DTI ratio cards that reference NCA thresholds; Forensic audit-style transaction flagging; Compliance-aware AI insights; Plain-language vehicle finance explanations.
- **House of Laundry:** A full 7-page business website for a real Soweto laundry business. Features: Cart for service selection; Laundry-themed CSS animations; Dark mode toggle; Client handover package.
- **Matshiya Technologies:** A premium landing page for a technology business. Features: Space-to-Earth intro animation; Warp-speed starfield; Glowing Earth; Animated wire network.
- **NeighbourLoan:** A neighbourhood tool-lending marketplace. Features: Neighbourhood tool-lending marketplace; Trust Score designed from credit-risk thinking. (No problem or stack slide: the card has none.)
