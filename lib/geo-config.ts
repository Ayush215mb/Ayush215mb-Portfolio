export interface AICrawler {
  userAgent: string;
  name: string;
  operator: string;
}

export const AI_CRAWLERS: AICrawler[] = [
  { userAgent: "GPTBot", name: "GPTBot", operator: "OpenAI" },
  { userAgent: "ChatGPT-User", name: "ChatGPT-User", operator: "OpenAI" },
  { userAgent: "OAI-SearchBot", name: "OAI-SearchBot", operator: "OpenAI" },
  { userAgent: "Google-Extended", name: "Google-Extended", operator: "Google" },
  { userAgent: "Googlebot", name: "Googlebot", operator: "Google" },
  { userAgent: "anthropic-ai", name: "ClaudeBot", operator: "Anthropic" },
  { userAgent: "ClaudeBot", name: "ClaudeBot", operator: "Anthropic" },
  { userAgent: "Bytespider", name: "Bytespider", operator: "ByteDance" },
  { userAgent: "PerplexityBot", name: "PerplexityBot", operator: "Perplexity" },
  {
    userAgent: "Applebot-Extended",
    name: "Applebot-Extended",
    operator: "Apple",
  },
  { userAgent: "cohere-ai", name: "Cohere", operator: "Cohere" },
  {
    userAgent: "Meta-ExternalAgent",
    name: "Meta-ExternalAgent",
    operator: "Meta",
  },
];

export const AI_CRAWLER_PATTERNS: string[] = AI_CRAWLERS.map((c) =>
  c.userAgent.toLowerCase(),
);

export const SITE_CONFIG = {
  url: "https:www//glevoidd.in",
  name: "Ayush Yadav — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
    "Building scalable web and mobile applications. Patent holder, hackathon winner, " +
    "and co-founder of GDG NiT — a 2,500-member developer community.",
  logo: "https://www.glevoidd.in/favicon.ico",
  language: "en",
  socialLinks: ["https://x.com/glevoidd", "https://github.com/ayush215mb"],
};

export function getLlmsTxtContent(): string {
  return `# Ayush Yadav

## Role
Full-Stack Developer 

## Summary
Ayush Yadav is a Full-Stack Developer specializing in React, Next.js, Node.js, NestJS, and React Native.
He is a patent holder (Indian Patent 202531042207 A), hackathon winner, and co-founder of GDG NIT — 
a developer community grown from 0 to 2,500 members in 6 months.

## Location
India

## Contact
- Email: ayush215mb@gmail.com
- GitHub: https://github.com/ayush215mb
- X: https://x.com/glevoidd.in
- LinkedIn: https://www.linkedin.com/in/ayush215mb/
- Resume: https://drive.google.com/file/d/1suxUsgwERKwUrb5P22r5721UzOnvEGMo/view

## Skills
### Languages
- TypeScript
- JavaScript
- Python
- C++

### Frontend
- React
- React Native
- Next js
- Tailwind CSS
- Expo
- Redux Toolkit
- React Query
- Framer Motion



### Backend
- Node.js
- Express
- NestJS
- Socket.io

### Database
- MongoDB
- Supabase
- PostgreSQL
- Docker

### Tools
- Git
- Docker 
- Postman 
- Figma
- Vercel
- Expo EAS


## Projects
### Project Sentinel
- Description: Real-time AI governance proxy with PII detection and prompt injection blocking.
- Repo: https://github.com/ayush215mb
- Stack: Microsoft Presedio, Redis, MongoDB, Nest.js, Next.js, Motion

### Parse Spy
- Description: Automated digital forensics tool using Electron.js and Selenium.
- Repo: https://github.com/ayush215mb
- Stack: Electron, Node.js, Selenium

### Crop Sense
- Description: IoT-enabled predictive farming platform (patented).
- Repo: https://github.com/ayush215mb
- Stack: Machine Learing, React.js 

## Blog Posts
- COMING SOON

## Canonical Site
https://www.glevoidd.in`;
}
