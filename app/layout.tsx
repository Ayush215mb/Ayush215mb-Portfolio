import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import FractalTree from "@/components/common/fractal-tree";
import Footer from "@/components/common/footer";

const manrope = Manrope({ subsets: ["latin"] });

const BASE_URL = "https://glevoidd.in";

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
      "Patent holder, hackathon winner, and co-founder of GDG NIT.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ayush Yadav — Full-Stack Developer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ayush Yadav — Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, Node.js, and React Native. " +
      "Patent holder, hackathon winner, and co-founder of GDG NIT.",
    creator: "@glevoidd",
    images: ["/og-image.png"],
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

  // ─── Search Console Verification (fill in when ready) ────────────────────────
  verification: {
    // google: "your-google-site-verification-token",
    // yandex: "your-yandex-verification-token",
  },

  other: {
    "theme-color": "#0a0a0a",
    "color-scheme": "dark light",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.className}  h-full antialiased`}>
      <body className=" bg-neutral-950 pt-20 pb-5 ">
        <FractalTree />
        <Navbar />
        <main className="w-full my-10  flex justify-center items-center flex-col gap-16 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
