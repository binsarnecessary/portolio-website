// generated from profile.json@09faf2d8 — do not edit
export const person = {
  "name": "Binsar Damanik",
  "full_name": "Binsar Pandapotan Damanik",
  "headlines": {
    "fulltime": "Backend Developer — Node.js / TypeScript (NestJS, Express) · PostgreSQL · banking & real-estate systems · Seeking remote (UTC+7)",
    "freelance": "Full-stack web apps & APIs for small businesses — Next.js + Node.js / TypeScript"
  },
  "location": {
    "city": "Surabaya",
    "country": "ID",
    "timezone": "Asia/Jakarta",
    "utc_offset": 7
  },
  "email": "binsar16febuary@gmail.com",
  "linkedin": "https://www.linkedin.com/in/binsardamanik",
  "github": "https://github.com/binsarnecessary",
  "portfolio": "https://binsar-portofolio.vercel.app",
  "years_phrase": "about 3 years of professional experience in contract roles on banking and real-estate systems, plus 2 years of part-time startup work while studying",
  "english": {
    "written": "fluent",
    "spoken": "conversational"
  },
  "freelance_hours_per_week": [
    5,
    20
  ],
  "positioning": [
    "Backend Developer — Node.js / TypeScript (NestJS, Express)",
    "PostgreSQL · banking & real-estate systems"
  ],
  "availability": "Seeking remote"
} as const;

export const stations = [
  {
    "id": "chat",
    "line": "trunk",
    "label": "Chat platform",
    "org": "Brighton Real Estate",
    "role": "Backend Developer",
    "period": {
      "start": "2026-01",
      "end": null
    },
    "team": null,
    "stack": [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Centrifugo",
      "Firebase Cloud Messaging",
      "Google Cloud",
      "Vitest",
      "Next.js"
    ],
    "claims": [
      {
        "id": "c-br-chat-backend",
        "text": "Designed and built the backend of an internal real-time chat platform end to end (NestJS, TypeScript, Prisma, PostgreSQL, Redis), with realtime messaging (Centrifugo) and push notifications (FCM) on Google Cloud"
      },
      {
        "id": "c-br-chat-scale",
        "text": "About 200 REST endpoints (218 route handlers) across 29 NestJS modules and 39 database models"
      },
      {
        "id": "c-br-chat-tests",
        "text": "Covered by 270+ automated test files (Vitest unit and end-to-end)"
      },
      {
        "id": "c-br-chat-design",
        "text": "Implemented production concerns in the chat API: a minimum-app-version guard that returns HTTP 426 to force mobile updates, server-side image resizing in a background job (sharp), idempotent message sending, and rate limiting"
      },
      {
        "id": "c-br-chat-ownership",
        "text": "Primary developer of the chat API (about 97% of commits)"
      },
      {
        "id": "c-br-chat-admin",
        "text": "Built the Next.js admin console (19 pages) on top of the same API"
      }
    ],
    "proof": null,
    "confidential": true,
    "employer": "Brighton Real Estate",
    "via": null,
    "employment": "Contract"
  },
  {
    "id": "roleplay",
    "line": "trunk",
    "label": "AI roleplay",
    "org": "Brighton Real Estate",
    "role": "Backend Developer",
    "period": {
      "start": "2026-01",
      "end": null
    },
    "team": null,
    "stack": [
      "Express",
      "TypeScript",
      "OpenAI API",
      "WebSockets",
      "Next.js"
    ],
    "claims": [
      {
        "id": "c-br-roleplay",
        "text": "Built an AI-powered roleplay app for sales training: Express + TypeScript backend with the OpenAI API and WebSockets, Next.js 15 frontend (32 pages), about 60 API routes"
      },
      {
        "id": "c-br-roleplay-ownership",
        "text": "Main contributor to both backend and frontend (about 85% of backend commits, 78% of frontend commits)"
      }
    ],
    "proof": null,
    "confidential": true,
    "employer": "Brighton Real Estate",
    "via": null,
    "employment": "Contract"
  },
  {
    "id": "apis",
    "line": "trunk",
    "label": "Internal APIs",
    "org": "Brighton Real Estate",
    "role": "Backend Developer",
    "period": {
      "start": "2026-01",
      "end": null
    },
    "team": null,
    "stack": [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "MySQL",
      "Redis",
      "JWT",
      "Swagger",
      "Docker"
    ],
    "claims": [
      {
        "id": "c-br-apis",
        "text": "Built and maintained REST endpoints across 9 internal Node.js / TypeScript API services (Express, Prisma, MySQL, Redis, JWT) behind the company dashboards and internal apps"
      },
      {
        "id": "c-br-apis-parity",
        "text": "Ported endpoints from the legacy PHP CMS to Node.js with matching responses, and documented service modules in Swagger / OpenAPI"
      },
      {
        "id": "c-br-apis-ops",
        "text": "Added Redis caching, Docker builds and a Node.js 24 LTS runtime upgrade to these services"
      },
      {
        "id": "c-br-apis-scale",
        "text": "About 1,200 commits across these services, linked to 160+ Jira tickets"
      }
    ],
    "proof": null,
    "confidential": true,
    "employer": "Brighton Real Estate",
    "via": null,
    "employment": "Contract"
  },
  {
    "id": "bds-cs",
    "line": "trunk",
    "label": "BDS CS PoC",
    "org": "Bank Mega (via Xsis Mitra Utama / IBM)",
    "role": "JavaScript Developer",
    "period": {
      "start": "2023-10",
      "end": "2025-10"
    },
    "team": "solo",
    "placement": "Outsourced developer placed at Bank Mega for two years: hired via Xsis Mitra Utama, contract continued under IBM after IBM acquired Xsis",
    "stack": [
      "Next.js",
      "MySQL"
    ],
    "claims": [
      {
        "id": "c-bm-cs",
        "text": "Solo-built a Next.js proof of concept for revamping the customer-service app (MySQL), about 50% built to pitch the full revamp; the bank then paused the project"
      }
    ],
    "proof": null,
    "confidential": false,
    "employer": "Bank Mega",
    "via": "via Xsis Mitra Utama / IBM",
    "employment": "Contract"
  },
  {
    "id": "bds-loan",
    "line": "trunk",
    "label": "BDS Loan",
    "org": "Bank Mega (via Xsis Mitra Utama / IBM)",
    "role": "JavaScript Developer",
    "period": {
      "start": "2023-10",
      "end": "2025-10"
    },
    "team": "team of 2",
    "placement": "Outsourced developer placed at Bank Mega for two years: hired via Xsis Mitra Utama, contract continued under IBM after IBM acquired Xsis",
    "stack": [
      "Next.js",
      "PostgreSQL"
    ],
    "claims": [
      {
        "id": "c-bm-loan",
        "text": "One of two developers on a new loan-transaction web app that consolidated features previously spread across several internal systems, built with Next.js and PostgreSQL"
      }
    ],
    "proof": null,
    "confidential": false,
    "employer": "Bank Mega",
    "via": "via Xsis Mitra Utama / IBM",
    "employment": "Contract"
  },
  {
    "id": "bds-portal",
    "line": "trunk",
    "label": "BDS Portal",
    "org": "Bank Mega (via Xsis Mitra Utama / IBM)",
    "role": "JavaScript Developer",
    "period": {
      "start": "2023-10",
      "end": "2025-10"
    },
    "team": "team of 2",
    "placement": "Outsourced developer placed at Bank Mega for two years: hired via Xsis Mitra Utama, contract continued under IBM after IBM acquired Xsis",
    "stack": [
      "React",
      "Node.js",
      "MySQL"
    ],
    "claims": [
      {
        "id": "c-bm-portal",
        "text": "One of two developers on the bank's SSO portal for its Branch Delivery System (one login to access other internal apps), built with React, Node.js and MySQL"
      }
    ],
    "proof": null,
    "confidential": false,
    "employer": "Bank Mega",
    "via": "via Xsis Mitra Utama / IBM",
    "employment": "Contract"
  },
  {
    "id": "xsis-academy",
    "line": "early",
    "label": "Xsis Academy",
    "org": "Xsis Academy",
    "role": "Internship Trainee (Full-Stack JavaScript)",
    "period": {
      "start": "2023-08",
      "end": "2023-10"
    },
    "team": null,
    "stack": [
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "Postman",
      "GitLab"
    ],
    "claims": [
      {
        "id": "c-xa-training",
        "text": "Full-stack JavaScript training: Node.js/Express backend, React frontend, PostgreSQL, REST API testing with Postman, team project on GitLab"
      }
    ],
    "proof": null,
    "confidential": false,
    "employer": null,
    "via": null,
    "employment": null
  },
  {
    "id": "museakademi",
    "line": "early",
    "label": "Museakademi",
    "org": "Museakademi (lecturer-led university project)",
    "role": "Student Project Lead",
    "period": {
      "start": "2023-01",
      "end": "2023-06"
    },
    "team": null,
    "stack": [
      "PostgreSQL",
      "Express",
      "React",
      "Node.js"
    ],
    "claims": [
      {
        "id": "c-ma-revamp",
        "text": "Led a lecturer-led university project revamping the Museakademi website with the PERN stack (PostgreSQL, Express, React, Node.js); handled backend API development and system testing"
      }
    ],
    "proof": null,
    "confidential": false,
    "employer": null,
    "via": null,
    "employment": null
  },
  {
    "id": "arkatama",
    "line": "early",
    "label": "Arkatama",
    "org": "PT Arkatama Multi Solusindo",
    "role": "QA Intern",
    "period": {
      "start": "2022-08",
      "end": "2022-12"
    },
    "team": null,
    "stack": [
      "Selenium",
      "Postman"
    ],
    "claims": [
      {
        "id": "c-ak-qa",
        "text": "Tested websites and mobile apps (including Selenium), documented bugs, and prepared UAT documents and user guides for clients"
      }
    ],
    "proof": null,
    "confidential": false,
    "employer": null,
    "via": null,
    "employment": null
  }
] as const;

export const careerBreak = {
  "from": "2025-11",
  "to": "2025-12",
  "reason": "break between roles",
  "text": "Career break (Nov 2025 – Dec 2025) between contracts"
} as const;

export const education = [
  {
    "school": "Universitas Negeri Malang (State University of Malang)",
    "degree": "S.T. (Bachelor of Engineering), Informatics Engineering",
    "start": "2019",
    "end": "2023"
  },
  {
    "school": "SYNRGY Academy",
    "degree": "Bootcamp, Full-Stack Web JavaScript",
    "start": "2022-09",
    "end": "2023-01"
  }
] as const;

export const otherWork = [
  {
    "id": "crm",
    "name": "CRM (crm-be + crm-fe)",
    "type": "Backend API + dashboard",
    "stack": [
      "TypeScript",
      "Node.js",
      "Next.js"
    ],
    "href": "https://github.com/binsarnecessary/crm-be"
  },
  {
    "id": "bank-kids",
    "name": "Bank Kids",
    "type": "Educational web game",
    "stack": [
      "HTML",
      "CSS",
      "TypeScript"
    ],
    "href": "https://bank-kids.vercel.app"
  },
  {
    "id": "find-geometry",
    "name": "Find Geometry",
    "type": "Educational web game",
    "stack": [
      "HTML",
      "CSS",
      "TypeScript"
    ],
    "href": "https://finds-geometri.vercel.app/"
  },
  {
    "id": "nana-varna",
    "name": "Nana Varna",
    "type": "Educational web game",
    "stack": [
      "HTML",
      "CSS",
      "TypeScript"
    ],
    "href": null
  },
  {
    "id": "dorma-mada",
    "name": "Dorma Mada",
    "type": "Company profile site",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "href": null
  },
  {
    "id": "topsis",
    "name": "Topsis",
    "type": "Talent decision support system",
    "stack": [
      "JavaScript"
    ],
    "href": "https://github.com/binsarnecessary/topsis-client"
  }
] as const;

export type StationId = (typeof stations)[number]["id"];
