export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.glevoidd.in/#ayush",
      name: "Ayush Yadav",
      url: "https://www.glevoidd.in",
      email: "ayush215mb@gmail.com",
      image: "https://www.glevoidd.in/AyushYadav.jpeg",
      jobTitle: "Full-Stack Developer",
      description:
        "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. Patent holder, hackathon winner, and co-founder of GDG NiT — a 2,500-member developer community.",
      nationality: "Indian",
      sameAs: [
        "https://www.linkedin.com/in/ayush215mb/",
        "https://github.com/ayush215mb",
      ],
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "React Native",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Docker",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Narula Institute of Technology",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressCountry: "IN",
        },
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "B.Tech in Computer Science and Engineering — Specialization in AI & ML",
      },
      worksFor: {
        "@type": "Organization",
        name: "Self-employed / Freelance",
      },
      award: [
        "Indian Patent 202531042207 A — Crop Sense IoT Farming Platform",
        "Hackathon Winner",
        "Co-founder GDG NiT — grew community to 2,500 members in 6 months",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.glevoidd.in/#profilepage",
      url: "https://www.glevoidd.in",
      name: "Ayush Yadav — Full-Stack Developer Portfolio",
      about: { "@id": "https://www.glevoidd.in/#ayush" },
      mainEntity: { "@id": "https://www.glevoidd.in/#ayush" },
      dateModified: "2026-04-23",
      inLanguage: "en-US",
    },

    {
      "@type": "WebSite",
      "@id": "https://www.glevoidd.in/#website",
      url: "https://www.glevoidd.in",
      name: "Ayush Yadav — Portfolio",
      description:
        "Portfolio of Ayush Yadav, a Full-Stack Developer from India.",
      author: { "@id": "https://www.glevoidd.in/#ayush" },
      inLanguage: "en-US",
    },

    {
      "@type": "SoftwareApplication",
      name: "Sentinel",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      url: "https://sentinel.theprinceraj.tech/",
      author: { "@id": "https://www.glevoidd.in/#ayush" },
      applicationCategory: "DeveloperApplication",
      description:
        "A real-time AI governance proxy that intercepts and validates requests between applications and LLM APIs (OpenAI, Anthropic, Gemini). Features PII detection using Microsoft Presidio and semantic prompt injection detection with sub-50ms latency overhead.",
      programmingLanguage: ["TypeScript", "NestJS", "Next.js"],
      keywords: "AI governance, LLM proxy, PII detection, prompt injection",
    },
    {
      "@type": "SoftwareApplication",
      name: "Crop Sense",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      url: "https://crop-sense-ai.vercel.app/",
      author: { "@id": "https://www.glevoidd.in/#ayush" },
      applicationCategory: "WebApplication",
      description:
        "IoT-enabled predictive farming platform (Indian Patent: 202531042207 A) that recommends optimal crops based on real-time soil, temperature, and humidity sensor data using Random Forest and Neural Network models.",
      programmingLanguage: ["React", "Python"],
      keywords: "IoT, machine learning, agriculture, crop prediction",
    },
    {
      "@type": "SoftwareApplication",
      name: "Parse Spy",
      operatingSystem: "Windows",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      url: "https://parsespy.vercel.app/",
      author: { "@id": "https://www.glevoidd.in/#ayush" },
      applicationCategory: "DesktopApplication",
      description:
        "Automated digital forensic tool using Selenium WebDriver for high-fidelity data extraction from social media platforms, built with Electron.js and Node.js.",
      programmingLanguage: ["JavaScript", "Electron.js", "Node.js"],
      keywords: "digital forensics, automation, Electron, Selenium",
    },
  ],
};
