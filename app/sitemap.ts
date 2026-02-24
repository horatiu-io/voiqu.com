import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://voiqu.com"

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/my-work`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/growth-lab`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/growth-lab/best-llm-monitoring-tools-brand-visibility`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/growth-lab/web-analytics-fundamentals`,
      lastModified: new Date("2024-07-29"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ]
}
