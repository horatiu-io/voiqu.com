"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"

export default function GrowthLab() {
  const [activeFilter, setActiveFilter] = useState("All Posts")

  const categories = ["All Posts", "Analytics", "GEO", "Performance", "Automation"]

  const filteredArticles =
    activeFilter === "All Posts" ? articles : articles.filter((article) => article.category === activeFilter)

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Growth Lab: SEO, AI & Marketing Automation</h1>
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
            <Link key={article.id} href={`/growth-lab/${article.slug}`} className="block h-full">
              <div className="relative p-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-red-500/10 overflow-hidden group h-full">
                {/* Animated border shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md"></div>

                <article className="relative bg-[#0D0D0D] rounded-[calc(1rem-4px)] overflow-hidden transition-all duration-300 h-full flex flex-col z-10 border border-gray-800/50">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-1 rounded text-xs mr-3 font-medium">{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white group-hover:text-cyan-400 transition-colors">{article.title}</h3>
                    <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed">{article.excerpt}</p>
                  </div>
                </article>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
