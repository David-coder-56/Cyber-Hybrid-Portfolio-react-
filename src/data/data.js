
/* =========================================================
   CYBER HYBRID — PORTFOLIO DATA
   Verified against the information currently provided.
   Unknown dates, credentials, and achievements are not invented.
   ========================================================= */

// ─── Projects ─────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "My personal developer portfolio showcasing my projects, technical skills, education, and professional journey through a responsive interface with animations and light and dark modes.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
    link: "https://cyber-hybrid.netlify.app/",
    category: "Web Development",
    type: "Personal Project",
    status: "Active",
  },
  {
    id: 2,
    title: "Smart Coop System",
    description:
      "An IoT-based poultry management project designed to monitor environmental conditions, feed levels, and poultry activity using hardware integration and a web dashboard. The project received a reported second-place award.",
    tech: ["HTML", "CSS", "JavaScript", "Arduino", "IoT"],
    link: "https://smartcoop.netlify.app/",
    category: "IoT",
    type: "Organization / Client Project",
    status: "Completed",
    achievement: "Second-place award reported; competition details pending",
  },
  {
    id: 3,
    title: "KIBAL Website",
    description:
      "A responsive organizational website presenting KIBAL's information, services, outreach programs, team, blog content, and contact options.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://kibal.netlify.app/",
    category: "Web Development",
    type: "Organization / Client Project",
    status: "Built",
  },
  {
    id: 4,
    title: "Student Performance Dashboard",
    description:
      "A data analytics demonstration built with Python, Dash, and Plotly to explore student performance, visualize academic trends, and present insights through interactive charts.",
    tech: ["Python", "Dash", "Plotly", "Pandas"],
    link: "https://student-performance-dashboard-d0z6.onrender.com",
    category: "Data Science",
    type: "Demo Project",
    status: "Demo",
  },
  {
    id: 5,
    title: "Cyber Gear Shop",
    description:
      "A cyber-inspired e-commerce demonstration showcasing gaming and technology products through a modern, responsive shopping interface.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://cyber-gear-shop.vercel.app/",
    category: "Web App",
    type: "Demo Project",
    status: "Demo",
  },
  {
    id: 6,
    title: "Telecom Customer Retention Dashboard",
    description:
      "A data analytics demonstration using telecom churn data to explore customer retention patterns through KPIs, filters, charts, and interactive visualizations.",
    tech: ["Python", "Dash", "Plotly", "Pandas"],
    link: "https://telecom-dashboard-snlx.onrender.com",
    category: "Data Science",
    type: "Demo Project",
    status: "Demo",
  },
  {
    id: 7,
    title: "ENGA Website",
    description:
      "A multi-page website for Elite Next Gen Agency, focused on event planning and creative services. The project includes responsive layouts and integrations for content management and contact forms; development is not yet complete.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Sanity CMS",
      "Formspree",
      "JavaScript",
    ],
    link: "https://enga-website.vercel.app/",
    category: "Web Development",
    type: "Client / Agency Project",
    status: "In Progress",
  },
  {
    id: 8,
    title: "Media King Consultancy Website",
    description:
      "A professional business website developed for Media King Consultancy to present its branding, media strategy, consulting services, and business information.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://mediakingconsultancy.netlify.app/",
    category: "Web Development",
    type: "Client Project",
    status: "Built",
  },
  {
    id: 9,
    title: "Fortune Technical Services Website",
    description:
      "A corporate website developed for Fortune Technical Services to present its technical services, expertise, and business information through a responsive digital presence.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    link: "https://fortunetechnicalservices.netlify.app/",
    category: "Web Development",
    type: "Client Project",
    status: "Built",
  },
];

// ─── Certificates and Diplomas ────────────────────────────
// Only include credentials that the user reports having earned.
// Exact issuing details and completion dates still need confirmation.

export const certificates = [
  {
    id: 1,
    name: "Data Science Diploma",
    issuer: "Rhotel Digital & Innovation Hub",
    year: null,
    category: "Data Science",
    verified: false,
    credentialUrl: null,
  },
  {
    id: 2,
    name: "Full-Stack Web Development Diploma",
    issuer: "Rhotel Digital & Innovation Hub",
    year: null,
    category: "Development",
    verified: false,
    credentialUrl: null,
  },
  {
    id: 3,
    name: "Introduction to Computer Certificate",
    issuer: "Rhotel Digital & Innovation Hub",
    year: null,
    category: "IT Fundamentals",
    verified: false,
    credentialUrl: null,
  },
];

// ─── Courses and Independent Learning ─────────────────────
// These entries describe learning, not necessarily earned certificates.

export const learningItems = [
  {
    id: 1,
    name: "Introduction to Cybersecurity",
    provider: "BlueCrest coursework and independent study",
    category: "Cybersecurity",
    status: "Course completed",
    credentialUrl: null,
  },
  {
    id: 2,
    name: "Python",
    provider: "Rhotel digital hub and independent study",
    category: "Programming",
    status: "Course studied",
    credentialUrl: null,
  },
  {
    id: 3,
    name: "Claude 101",
    provider: "Claude",
    category: "AI Tools",
    status: "Studied",
    credentialUrl: null,
  },
  {
    id: 4,
    name: "Home Network Security",
    description:
      "Independent learning about securing Wi-Fi networks, routers, and smart devices.",
    provider: "Independent learning and cursa",
    category: "Cybersecurity",
    status: "Studied",
    credentialUrl: null,
  },
  {
    id: 5,
    name: "Flutter for Beginners",
    provider: "Coursa",
    category: "Mobile Development",
    status: "Studied",
    credentialUrl: null,
  },
  {
    id: 6,
    name: "Cybersecurity Fundamentals",
    provider: "BlueCrest coursework and independent study",
    category: "Cybersecurity",
    status: "Ongoing learning",
    credentialUrl: null,
  },
  {
    id: 7,
    name: "Networking Fundamentals",
    provider: "BlueCrest coursework and independent study",
    category: "Networking",
    status: "Ongoing learning",
    credentialUrl: null,
  },
];

// ─── CTF Challenges ───────────────────────────────────────
// No individual challenge completions are currently verified
// for publication. Add entries only after confirming them.

export const ctfChallenges = [];

// ─── Experience and Education Timeline ────────────────────

export const timelineItems = [
  {
    id: 1,
    type: "work",
    title: "IT Intern — Yellow Scholars",
    org: "Lonestar Cell MTN",
    date: "Oct 13, 2026",
    description:
      "Internship in the IT department through the Yellow Scholars program. Currently gaining exposure to IT operations and technical work.",
    tags: ["IT Support", "Information Technology"],
    status: "Current",
    endDateExpected: true,
  },
  {
    id: 2,
    type: "work",
    title: "Branding and Curriculum Assistant",
    org: "Orange Digital Center (ODC)",
    date: "February – September 2026",
    description:
      "Supported Coding School programs through curriculum and certificate tracking, program coordination, participant recruitment, teaching Snap programming and assisting with Python sessions, project judging, hardware organization, and branding activities.",
    tags: [
      "Program Coordination",
      "Curriculum Support",
      "Snap",
      "Python",
      "Branding",
    ],
    status: "Completed",
  },
  {
    id: 3,
    type: "training",
    title: "Technical Training and Project Development",
    org: "Rhotel Digital & Innovation Hub",
    date: "Since approximately 2024",
    description:
      "Developing practical skills through training and project work in full-stack web development, Python, data analysis, databases, and related technologies. Continues to visit occasionally for learning and guidance.",
    tags: [
      "Full-Stack Development",
      "Python",
      "Data Science",
      "Databases",
    ],
    status: "Occasional participation",
  },
  {
    id: 4,
    type: "education",
    title: "BSc Information Technology",
    org: "BlueCrest University College",
    date: "Fifth Semester · Expected graduation 2028",
    description:
      "Pursuing a Bachelor of Science in Information Technology with a specialization in Cybersecurity. University learning includes programming, databases, networking, and cybersecurity-related coursework.",
    tags: [
      "Cybersecurity",
      "Networking",
      "Java",
      "C++",
      "Database Systems",
    ],
    status: "In Progress",
  },
  {
    id: 5,
    type: "project",
    title: "Smart Coop System",
    org: "IoT Project",
    date: "2024",
    description:
      "Worked on an IoT-based poultry management solution combining hardware integration, environmental monitoring concepts, and a web dashboard. A second-place award has been reported; competition details are not yet confirmed.",
    tags: ["Arduino", "IoT", "JavaScript", "Hardware Integration"],
    status: "Completed",
  },
  {
    id: 6,
    type: "work",
    title: "Independent Web Development",
    org: "Client and Personal Projects",
    date: "Dates vary by project",
    description:
      "Building websites and web applications for organizations, clients, and personal demonstrations using modern frontend technologies and selected backend and content-management tools.",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    status: "Project-based",
  },
];

// ─── Technical Skills ─────────────────────────────────────

export const skillCategories = [
  {
    title: "Frontend Development",
    level: "Intermediate to Advanced",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },
  {
    title: "Backend Development",
    level: "Intermediate",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication Concepts",
      "MongoDB",
      "SQL",
      "Database Integration",
    ],
  },
  {
    title: "Programming Languages",
    level: "Mixed",
    skills: [
      "Python — Intermediate",
      "JavaScript — Intermediate",
      "C++ — Beginner",
      "Java — Beginner",
    ],
  },
  {
    title: "Data Science and Analytics",
    level: "Intermediate",
    skills: [
      "Python",
      "Pandas",
      "Dash",
      "Plotly",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Cybersecurity and Networking",
    level: "Currently Learning",
    skills: [
      "Cybersecurity Fundamentals",
      "Network Security Concepts",
      "Home Network Security",
      "Networking Fundamentals",
      "API Security Concepts",
      "Database Security Concepts",
    ],
  },
  {
    title: "Systems and Mobile Development",
    level: "Currently Learning",
    skills: [
      "Linux Fundamentals",
      "Flutter",
      "Dart",
      "IT Fundamentals",
    ],
  },
  {
    title: "Tools and Platforms",
    level: "Intermediate",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Docker",
      "Vercel",
      "Netlify",
      "Render",
      "Sanity CMS",
      "Formspree",
    ],
  },
  {
    title: "IoT and Emerging Technology",
    level: "Project Experience",
    skills: [
      "Arduino",
      "IoT Concepts",
      "Hardware Integration",
      "AI Tools",
    ],
  },
];

// ─── Profile Summary ─────────────────────────────────────

export const profile = {
  name: "David D. Bankole",
  brand: "Cyber Hybrid",
  title: "IT Student | Web Developer | Cybersecurity Learner",
  education: "BSc Information Technology",
  institution: "BlueCrest University College",
  specialization: "Cybersecurity",
  semester: "Fifth Semester",
  expectedGraduation: "2028",
  location: "Liberia",
  summary:
    "Information Technology student specializing in Cybersecurity, with hands-on experience building responsive websites, web applications, and data dashboards. Currently developing practical skills in cybersecurity, networking, programming, and IT operations while gaining professional experience through internships and project-based work.",
  interests: [
    "Cybersecurity",
    "Web Development",
    "IT Operations",
    "Data Analytics",
    "Emerging Technologies",
  ],
  portfolioUrl: "https://cyber-hybrid.netlify.app/",
  githubUrl: "https://github.com/David-coder-56",
};

// ─── Important Implementation Notes ───────────────────────
// 1. Remove any old hardcoded certificate or CTF entries from
//    components that do not use these exports.
// 2. Verify that the portfolio UI supports null years and URLs.
// 3. The old project URLs are retained from your supplied data;
//    their current availability has not been independently tested.
// 4. Keep the Lonestar internship end date labelled "Expected"
//    until the internship is completed.
// 5. Certificate issuer and completion details should be checked
//    against the actual documents before displaying "Verified".
