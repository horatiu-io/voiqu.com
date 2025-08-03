"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const companies = [
    { name: "World Class", logo: "/logos/world-class.svg", invert: false, width: 60, height: 24 },
    { name: "WWF", logo: "/logos/wwf.svg", invert: true, width: 90, height: 36 },
    { name: "Genezio", logo: "/logos/genezio.svg", invert: false, width: 60, height: 24 },
    { name: "Answear", logo: "/logos/answear.svg", invert: false, width: 60, height: 24 },
    { name: "MTH Digital", logo: "/logos/mth-digital.svg", invert: false, width: 60, height: 24 },
  ]

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % companies.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [companies.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + companies.length) % companies.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % companies.length)
  }

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-600"
        aria-label="Previous logos"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-600"
        aria-label="Next logos"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Logo Container */}
      <div className="mx-16 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {companies.map((company, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center py-8">
              <div className="flex justify-center items-center h-20">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className={`opacity-80 hover:opacity-100 transition-opacity duration-300 ${
                    company.invert ? "invert" : ""
                  } max-h-16 w-auto object-contain`}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {companies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-gradient-to-r from-cyan-400 to-red-500 scale-110"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Company Name Display */}
      <div className="mt-4">
        <p className="text-white text-lg font-medium opacity-80">{companies[currentSlide].name}</p>
      </div>
    </div>
  )
}
