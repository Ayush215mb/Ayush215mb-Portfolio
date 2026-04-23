import type { MetadataRoute } from "next";
import { AI_CRAWLERS } from "@/lib/geo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow every AI crawler you listed
      ...AI_CRAWLERS.map((crawler) => ({
        userAgent: crawler.userAgent,
        allow: "/",
      })),
    ],
    sitemap: "https://www.glevoidd.in/sitemap.xml",
    host: "https://www.glevoidd.in",
  };
}
