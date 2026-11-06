import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.glevoidd.in",
            lastModified: new Date("2026-11-06"),
            changeFrequency: "monthly",
            priority: 1,
            alternates: {
                languages: { "en-US": "https://www.glevoidd.in" },
            },
        },
        {
            url: "https://www.glevoidd.in/projects",
            lastModified: new Date("2026-11-06"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://www.glevoidd.in/blogs",
            lastModified: new Date("2026-11-07"),
            changeFrequency: "weekly",
            priority: 0.6,
        },
    ];
}
