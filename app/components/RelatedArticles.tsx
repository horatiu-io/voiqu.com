"use client"

import React, { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { articles } from "@/lib/articles"

interface RelatedArticlesProps {
  currentSlug: string
}

export default function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const currentArticle = articles.find((a) => a.slug === currentSlug)
  if (!currentArticle) return null

  // Filter out the current article
  const otherArticles = articles.filter((a) => a.slug !== currentSlug)

  // Sort other articles: prioritize those in the same category
  const relatedArticles = [...otherArticles].sort((a, b) => {
    const aMatch = a.category === currentArticle.category ? 1 : 0
    const bMatch = b.category === currentArticle.category ? 1 : 0
    return bMatch - aMatch
  })

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-20 border-t border-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          Other SEO, AI & Marketing Automation Stories
        </h2>

        <div className="relative w-full">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-600 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-600 ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next posts"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {relatedArticles.map((article) => (
                <div key={article.id} className="flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333333%]">
                  <Link href={`/growth-lab/${article.slug}`} className="block h-full">
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
                          <div className="flex items-center text-sm text-gray-400 mb-4">
                            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded text-xs mr-3 font-medium">
                              {article.category}
                            </span>
                            <span className="text-gray-400 text-sm">{article.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-white line-clamp-2 leading-snug group-hover:text-cyan-400 transition-colors duration-200">
                            {article.title}
                          </h3>
                          <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>
                      </article>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
