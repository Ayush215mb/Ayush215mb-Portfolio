import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { schema } from "@/components/common/JsonLD";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"; 
const manrope = Manrope({ subsets: ["latin"] });

const BASE_URL = "https://www.glevoidd.in";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Ayush Yadav — Full-Stack Developer",
    template: "%s | Ayush Yadav",
  },

  description:
    "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
    "Building scalable web and mobile applications. Patent holder, hackathon winner, " +
    "and co-founder of GDG NiT — a 2,500-member developer community.",

  keywords: [
    "Ayush Yadav",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Native Developer",
    "NestJS",
    "TypeScript",
    "GraphQL",
    "Portfolio",
    "Kolkata Developer",
    "glevoidd",
  ],

  authors: [{ name: "Ayush Yadav", url: BASE_URL }],
  creator: "Ayush Yadav",
  publisher: "Ayush Yadav",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Ayush Yadav",
    title: "Ayush Yadav — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
      "Patent holder, hackathon winner, and co-founder of GDG NiT.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Yadav — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
      "Patent holder, hackathon winner, and co-founder of GDG NiT.",
    creator: "@glevoidd",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: BASE_URL,
  },

  verification: {
    google: "jSMrGicdxu1oDA6bMUTuFlHGTAj51e58deAMpMyqnV0",
  },

  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.className}  h-full antialiased`}
    >
      <head>
        <link rel="author" type="text/plain" href="/llms.txt" />
        <meta name="msvalidate.01" content="1BF4673C3030D00C738AFB0DBB1F4724" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>

      <body className="bg-neutral-950">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
