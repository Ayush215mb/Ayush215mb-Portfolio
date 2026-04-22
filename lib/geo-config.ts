/**
 * Central GEO (Generative Engine Optimization) Configuration
 *
 * This file defines all AI crawler user-agents, structured data defaults,
 * and llms.txt content. Edit this single file to customize GEO behavior
 * across your entire application.
 */

// ---------------------------------------------------------------------------
// AI Crawler Definitions
// ---------------------------------------------------------------------------

export interface AICrawler {
  /** User-agent token used in robots.txt rules */
  userAgent: string;
  /** Human-readable name of the crawler / AI system */
  name: string;
  /** The company or product that operates this crawler */
  operator: string;
}

/**
 * Known AI crawlers as of early 2026.
 * Add or remove entries here; robots.ts and middleware.ts read from this list.
 */
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

/**
 * User-agent substrings used by middleware to detect AI crawlers at runtime.
 * Kept lowercase for case-insensitive matching.
 */
export const AI_CRAWLER_PATTERNS: string[] = AI_CRAWLERS.map((c) =>
  c.userAgent.toLowerCase(),
);

// ---------------------------------------------------------------------------
// Structured Data Defaults (JSON-LD)
// ---------------------------------------------------------------------------

export const SITE_CONFIG = {
  /** Canonical origin — no trailing slash */
  url: "https:www//glevoidd.in",
  name: "Ayush Yadav — Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
    "Building scalable web and mobile applications. Patent holder, hackathon winner, " +
    "and co-founder of GDG NiT — a 2,500-member developer community.",
  logo: "https://www.glevoidd.in/favicon.ico",
  language: "en",
  /** Social / same-as links shown in Organization schema */
  socialLinks: ["https://x.com/glevoidd", "https://github.com/ayush215mb"],
};

// ---------------------------------------------------------------------------
// llms.txt Content
// ---------------------------------------------------------------------------

/**
 * Returns the plain-text content served at /llms.txt.
 * Follows the llms.txt proposed specification (https://llmstxt.org).
 */
export function getLlmsTxtContent(): string {
  return `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.description}

## About

${SITE_CONFIG.name} is a web application built with Next.js. This file
provides concise, machine-readable context so that large language models
can better understand and represent this site.

## Main Sections

- [Home](${SITE_CONFIG.url}/)
- [Blog](${SITE_CONFIG.url}/blogs)
- [Projects](${SITE_CONFIG.url}/projects)

## Key Facts

- Built with Next.js and React
- Follows GEO (Generative Engine Optimization) best practices
- Structured data provided via JSON-LD on every page

## Contact

- Website: ${SITE_CONFIG.url}
`;
}
