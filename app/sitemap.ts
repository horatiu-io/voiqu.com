import type { MetadataRoute } from "next"

// 1. Aici îți vei adăuga DOAR articolele noi, foarte simplu, pe o singură linie:
const blogPosts = [
  { slug: "best-llm-monitoring-tools-brand-visibility", date: "2026-02-24", priority: 0.9, frequency: "monthly" },
  { slug: "web-analytics-fundamentals", date: "2024-07-29", priority: 0.8, frequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://voiqu.com"

  // 2. Rutele statice ale site-ului rămân neatinse
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-02-24"), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/my-work`, lastModified: new Date("2026-02-24"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-02-24"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-02-24"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/growth-lab`, lastModified: new Date("2026-02-24"), changeFrequency: "weekly", priority: 0.9 },
  ]

  // 3. Generăm automat rutele pentru blog pe baza listei de sus
  const dynamicBlogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/growth-lab/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: post.frequency as "monthly" | "yearly" | "weekly" | "daily" | "always" | "hourly" | "never",
    priority: post.priority,
  }))

  return [...staticRoutes, ...dynamicBlogRoutes]
}