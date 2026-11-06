export interface AICrawler {
    userAgent: string;
    name: string;
    operator: string;
}

export const AI_CRAWLERS: AICrawler[] = [
    { userAgent: "GPTBot", name: "GPTBot", operator: "OpenAI" },
    { userAgent: "ChatGPT-User", name: "ChatGPT-User", operator: "OpenAI" },
    { userAgent: "OAI-SearchBot", name: "OAI-SearchBot", operator: "OpenAI" },
    {
        userAgent: "Google-Extended",
        name: "Google-Extended",
        operator: "Google",
    },
    { userAgent: "Googlebot", name: "Googlebot", operator: "Google" },
    { userAgent: "anthropic-ai", name: "ClaudeBot", operator: "Anthropic" },
    { userAgent: "ClaudeBot", name: "ClaudeBot", operator: "Anthropic" },
    { userAgent: "Bytespider", name: "Bytespider", operator: "ByteDance" },
    {
        userAgent: "PerplexityBot",
        name: "PerplexityBot",
        operator: "Perplexity",
    },
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
    url: "https://www.glevoidd.in",
    name: "Ayush Yadav — Full-Stack Developer",
    description:
        "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
        "Building scalable web and mobile applications. Patent holder, hackathon winner, " +
        "and co-founder of GDG NiT — a 2,500-member developer community.",
    logo: "https://www.glevoidd.in/favicon.ico",
    language: "en",
    socialLinks: [
        "https://x.com/glevoidd",
        "https://github.com/Ayush215mb",
        "https://www.linkedin.com/in/ayush215mb/",
    ],
};

export function getLlmsTxtContent(): string {
    return `# Ayush Yadav

## Role
Full-Stack & AI Engineer

## Summary
Ayush Yadav is a Full-Stack & AI Engineer specializing in React/Next.js, Nestjs, React Native and Langchain ecosystem. He has mentored students and organized a lot of tech sessions in his tenure as the App Dev Lead of GDG Nit'2025. He was selected in the Made in JIS cohort 1 which was a 3 months pre-incubation program where he ideated Echomate, an AI sales agent.

## Location
Kolkata, India

## Contact
- Email: ayush215mb@gmail.com
- GitHub: https://github.com/ayush215mb
- X: https://x.com/glevoidd
- LinkedIn: https://www.linkedin.com/in/glevoidd/
- Resume: https:www.glevoidd.in/CV-glevoidd

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

### Tools
- Git
- Docker
- Postman
- Figma
- Vercel
- Expo EAS

### AI
- ChatGPT SDK
- Langchain ecosystem
- Vercel/ai-sdk
- Ollama
- postgresSaver
- RAG applications

## Projects

### Project Sentinel
- Description: Real-time AI governance middleware for LLM APIs (Gemini, OpenAI, Anthropic).
  Intercepts requests to detect and redact 50+ PII types using Microsoft Presidio.
  Blocks jailbreak and prompt injection attempts with sub-50ms latency.
- Live: https://sentinel.theprinceraj.tech/
- Stack: NestJS, Next.js, Microsoft Presidio, Redis, MongoDB

### Kolkata Parking
- Description: ParkKolkata is a community-driven parking discovery platform for Kolkata, built
  to solve the city's lack of organized parking information. Users can search any area on an interactive map, filter spots by vehicle type, pricing, and verification status, and contribute new locations with photos and details — no login required. The app pairs Next.js with a Supabase/Prisma backend and uses OpenStreetMap's Nominatim API for geocoding, with caching and city-bounded search to keep lookups fast and relevant.
- Live: https://kolkata-parking.vercel.app/
- Tech Stack: Next.js, Supabase, Prisma, Leaflet, OpenStreetMap.

### Parse Spy
- Description: Desktop digital forensics application for extracting and reporting
  social media data. Cuts investigation time by 90% vs manual methods.
  Generates timestamped PDF reports with embedded screenshots.
- Live: https://parsespy.vercel.app/
- Stack: Electron.js, Node.js, Selenium WebDriver, PDFKit

### Crop Sense
- Description: IoT crop recommendation platform — Indian Patent 202531042207 A.
  Processes real-time soil, temperature, and humidity sensor data through
  Random Forest and Neural Network models to recommend optimal crops.
- Live: https://crop-sense-ai.vercel.app/
- Stack: React, Python, Machine Learning

## Achievements
- Indian Patent holder: Patent 202531042207 A (Crop Sense)
- App Dev Lead of GDG NiT'2025: Grew the developer community from 0 to 2,500 members in 6 months
- Organized 10+ tech events
- Mentored young students to develop critical thinking and follow the correct career path
- Made in JIS cohort 1

## Blog Posts
- COMING SOON

## Source
- Canonical URL: https://www.glevoidd.in
- Last Updated: 2026-11-06
- Content License: All rights reserved
- Author Verified: true
`;
}
