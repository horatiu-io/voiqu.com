import { Button } from "@/components/ui/button"
import { Search, Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import ContactForm from "./components/ContactForm"
import LogoCarousel from "./components/LogoCarousel"

export default function Home() {
  const companies = [
    { name: "World Class", logo: "/logos/world-class.svg", invert: false, width: 80, height: 32 },
    { name: "WWF", logo: "/logos/wwf.svg", invert: false, width: 120, height: 48 }, // WWF original colors, slightly larger
    { name: "Genezio", logo: "/logos/genezio.svg", invert: false, width: 80, height: 32 },
    { name: "Answear", logo: "/logos/answear.svg", invert: false, width: 80, height: 32 },
    { name: "MTH Digital", logo: "/logos/mth-digital.svg", invert: false, width: 80, height: 32 },
  ]

  const steps = [
    {
      icon: Search,
      title: "Discovery & Data Audit",
      description: "I dive deep into your analytics and customer journey to find key growth opportunities.",
    },
    {
      icon: Rocket,
      title: "Strategy & Execution",
      description: "I design and launch targeted campaigns and A/B tests to move the needle.",
    },
    {
      icon: TrendingUp,
      title: "Analysis & Iteration",
      description: "I measure what matters, learn from the results, and continuously optimize for performance.",
    },
  ]

  const benefits = [
    "Data-driven growth strategies",
    "Conversion rate optimization",
    "Full-funnel marketing approach",
    "Continuous performance monitoring",
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-red-500/20 border border-cyan-500/30 rounded-full mb-8">
              <span className="text-white text-sm font-medium">Google Partner Certified</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              I Build Growth Engines for{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
                Ambitious Brands
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Leveraging data analytics, conversion rate optimization, and full-funnel marketing strategies to help you
              scale beyond your current limitations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className="bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white px-8 py-4 text-lg h-auto rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Get Free Proposal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg h-auto rounded-xl bg-transparent"
              >
                See My Work
              </Button>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-8 text-sm uppercase tracking-wide font-medium">Trusted by leading brands</p>
          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <LogoCarousel />
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className={`opacity-60 hover:opacity-100 transition-opacity duration-300 ${
                    company.invert ? "invert" : ""
                  } max-h-16 w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">A Partnership for Growth</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My proven 3-step process to accelerate your business with data-driven precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                €22M
              </div>
              <div className="text-gray-300">Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                12+
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-300">
              Let's discuss how I can accelerate your growth with proven strategies
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
