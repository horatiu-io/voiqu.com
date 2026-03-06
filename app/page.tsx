import { Button } from "@/components/ui/button"
import { Database, Zap, Cog, LineChart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "./components/ContactForm"
import LogoCarousel from "./components/LogoCarousel"
import LatestExperimentsCarousel from "./components/LatestExperimentsCarousel"

export default function Home() {
  const companies = [
    { name: "World Class", logo: "/logos/world-class.svg", invert: true, width: 60, height: 24 },
    { name: "WWF", logo: "/logos/wwf.svg", invert: false, width: 90, height: 36 },
    { name: "Genezio", logo: "https://genezio.com/images/logo-white.svg", invert: false, width: 60, height: 24 },
    { name: "Answear", logo: "/logos/answear.svg", invert: false, width: 60, height: 24 },
    { name: "MTH Digital", logo: "/logos/mth-digital.svg", invert: false, width: 60, height: 24 },
  ]

  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Data Audit",
      description: "Deep dive into analytics and customer journey.",
    },
    {
      number: "02",
      icon: Zap,
      title: "Strategy",
      description: "Defining KPIs and architecting automation.",
    },
    {
      number: "03",
      icon: Cog,
      title: "System Implementation",
      description: "Implementation of campaigns and integrations.",
    },
    {
      number: "04",
      icon: LineChart,
      title: "Analysis & Iteration",
      description: "Continuous optimization of ROAS and LTV.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-red-500/20 border border-cyan-500/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Google Partner Certified</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              Growth Engines for <br />
              <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
                B2B SaaS & E-comm
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Senior Growth Consultant blending Data, AI, and Automation. Ex-Head of Digital, helped scale brands to
              €22M+ revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="https://calendar.app.google/7wZPxXhA4n8hDRes9">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 text-lg h-auto rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                  BOOK STRATEGY AUDIT
                </Button>
              </Link>
              <Link href="#contact-form-section" scroll={true}>
                <Button
                  variant="outline"
                  className="border border-cyan-500/50 text-white hover:bg-cyan-500/10 px-8 py-4 text-lg h-auto rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  Get Proposal
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wide font-medium">
            Systems Deployed For
          </p>
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
                  className={`opacity-60 hover:opacity-100 transition-opacity duration-300 ${company.invert ? "invert" : ""
                    } max-h-16 w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section - The Protocol */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">A Partnership for Growth</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My proven 4-step process to accelerate your business with data-driven precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative p-6 bg-[#1A1A1A] border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                {/* Number badge */}
                <div className="text-5xl font-bold text-gray-800 mb-4 group-hover:text-cyan-500/20 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title and Description */}
                <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                13+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                10
              </div>
              <div className="text-gray-400">Years Google Partner</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent mb-2">
                +1M €
              </div>
              <div className="text-gray-400">Ad Spend Managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - The Terminal */}
      <section id="contact-form-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0A0A] border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-red-500/10 border-b border-cyan-500/20 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono ml-4">growth-sequence.sh</span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm">
              <div className="mb-4">
                <span className="text-cyan-400">$</span>
                <span className="text-white ml-2">Let's initialize your growth sequence</span>
              </div>

              <ContactForm />

              <div className="mt-8 pt-6 border-t border-gray-800">
                <button
                  type="submit"
                  form="contact-form"
                  className="w-full bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white px-6 py-4 rounded-lg font-mono font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 uppercase tracking-wide"
                >
                  INITIALIZE_GROWTH_SEQUENCE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Growth Experiments Section */}
      <LatestExperimentsCarousel />
    </div>
  )
}
