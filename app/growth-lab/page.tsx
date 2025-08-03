"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GrowthLab() {
  const [activeFilter, setActiveFilter] = useState("All Posts")

  const categories = ["All Posts", "Analytics", "Strategy", "PPC", "SEO"]

  const articles = [
    {
      id: 1,
      title: "Web Analytics Fundamentals: A Complete Guide to Implementation and Optimization",
      excerpt:
        "We live in a world where documenting that something happened often matters more than how it actually occurred in reality. A doctor’s medical chart carries more weight than the actual treatment provided, because the next doctor will base their actions on that documented diagnosis and patient status. The same applies to police officers, lawyers, and accountants—their reports and documentation often matter more than the actual events.",
      category: "Analytics",
      date: "August 3, 2025",
      image: "/placeholder.svg?height=200&width=400&text=Web+Analytics",
      slug: "web-analytics-fundamentals",
    },
    {
      id: 2,
      title: "Advanced Google Analytics 4 Setup for Growth Teams",
      excerpt: "Master GA4 configuration to track the metrics that matter most for your growth initiatives.",
      category: "Analytics",
      date: "July 28, 2025",
      image: "/placeholder.svg?height=200&width=400&text=GA4+Setup",
      slug: "advanced-google-analytics-4-setup",
    },
    {
      id: 3,
      title: "Building a Data-Driven Growth Strategy Framework",
      excerpt: "Create a systematic approach to growth that leverages data insights and experimentation.",
      category: "Strategy",
      date: "July 22, 2025",
      image: "/placeholder.svg?height=200&width=400&text=Growth+Strategy",
      slug: "data-driven-growth-strategy-framework",
    },
    {
      id: 4,
      title: "PPC Campaign Optimization: Beyond Basic Bidding",
      excerpt: "Advanced techniques for optimizing paid campaigns that go beyond standard bidding strategies.",
      category: "PPC",
      date: "July 15, 2025",
      image: "/placeholder.svg?height=200&width=400&text=PPC+Optimization",
      slug: "ppc-campaign-optimization-advanced",
    },
    {
      id: 5,
      title: "SEO for Growth Hackers: Technical Wins That Scale",
      excerpt: "Focus on technical SEO improvements that can drive significant organic growth at scale.",
      category: "SEO",
      date: "July 8, 2025",
      image: "/placeholder.svg?height=200&width=400&text=Technical+SEO",
      slug: "seo-growth-hackers-technical-wins",
    },
    {
      id: 6,
      title: "A/B Testing Mistakes That Kill Your Results",
      excerpt: "Common pitfalls in A/B testing and how to avoid them to get reliable, actionable insights.",
      category: "CRO",
      date: "July 1, 2025",
      image: "/placeholder.svg?height=200&width=400&text=AB+Testing",
      slug: "ab-testing-mistakes-kill-results",
    },
  ]

  const filteredArticles =
    activeFilter === "All Posts" ? articles : articles.filter((article) => article.category === activeFilter)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Growth Lab: Experiments & Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into growth strategies, experiments, and insights from the trenches of digital marketing.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={
                activeFilter === category
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/growth-lab/${article.slug}`}>
              <article className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors duration-200 cursor-pointer">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs mr-3">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 line-clamp-3">{article.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
