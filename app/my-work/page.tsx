"use client"

import {
  Target,
  BarChart3,
  Search,
  Bot,
  ArrowRight,
  TrendingUp,
  LineChart,
  Network,
  Zap,
  Globe,
  Database
} from "lucide-react"
import Link from "next/link"
import ScrollReveal from "../components/ScrollReveal"
import LogoCarousel from "../components/LogoCarousel"
import Image from "next/image"
import Script from "next/script"

export default function MyWork() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Person",
      "name": "Horațiu Voicu",
      "url": "https://voiqu.com"
    },
    "serviceType": "Growth Consulting",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Growth Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GTM Strategy & Executive Workshops",
            "description": "Mapping out highly profitable, full-funnel digital ecosystems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Omnichannel Performance Marketing",
            "description": "High-ROI media buying across Google Ads, Meta Ads, TikTok Ads, and Reddit Ads."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Advanced Tracking & Search Architecture",
            "description": "GA4 audits, Server-Side Tracking, SEO, and Generative Engine Optimization (GEO)."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Business Automation",
            "description": "Integrating LLMs and n8n to eliminate business bottlenecks."
          }
        }
      ]
    }
  };

  const services = [
    {
      number: "01",
      icon: Target,
      title: "GTM Strategy & Executive Workshops",
      description:
        "I work directly with founders and executive teams to map out highly profitable, full-funnel digital ecosystems.",
      color: "from-cyan-500 to-blue-500",
      bgClass: "bg-cyan-500/10",
      bullets: [
        {
          title: "The 360° Growth Workshop",
          desc: "We break down every traffic source to identify gaps, allocate budgets effectively, and build a unified growth roadmap.",
        },
        {
          title: "Omnichannel Integration",
          desc: "Bridging the digital and physical worlds with advanced digital tracking and high-impact offline placements, including DOOH.",
        },
      ],
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Omnichannel Performance Marketing",
      description:
        "I execute high-ROI media buying across the platforms that actually make sense for your audience, extending far beyond the standard duopoly.",
      color: "from-blue-500 to-indigo-500",
      bgClass: "bg-blue-500/10",
      bullets: [
        {
          title: "Next-Gen PPC",
          desc: "Full-funnel campaign architecture on Google Ads, Meta Ads, TikTok Ads, and Reddit Ads.",
        },
        {
          title: "Premium Media Placements",
          desc: "Direct media buying and publisher negotiations for high-visibility banner campaigns on tier-1 publications.",
        },
        {
          title: "E-commerce & Lead Gen Scaling",
          desc: "Designing agile ad structures that maximize ROAS, adapt to algorithm changes, and drive needle-moving results.",
        },
      ],
    },
    {
      number: "03",
      icon: Search,
      title: "Advanced Tracking & Search Architecture",
      description:
        "You can't scale what you can't measure, and you can't win if you can't be found.",
      color: "from-purple-500 to-pink-500",
      bgClass: "bg-purple-500/10",
      bullets: [
        {
          title: "Data & Attribution",
          desc: "Complex GA4 audits, Server-Side Tracking setups, and custom Looker Studio dashboards.",
        },
        {
          title: "SEO & GEO",
          desc: "Legacy organic search strategy combined with cutting-edge Generative Engine Optimization tactics.",
        },
        {
          title: "High-Authority Backlinks",
          desc: "Strategic link-building and digital PR to solidify your domain's authority.",
        },
      ],
    },
    {
      number: "04",
      icon: Bot,
      title: "AI & Business Automation",
      description:
        "By integrating Large Language Models (LLMs) and advanced workflow automation tools, I help companies eliminate bottlenecks.",
      color: "from-rose-500 to-orange-500",
      bgClass: "bg-rose-500/10",
      bullets: [
        {
          title: "Internal Workflow Automation",
          desc: "Leveraging tools like n8n to automate repetitive tasks, data syncing, and complex reporting.",
        },
        {
          title: "Marketing Operations",
          desc: "Connecting your CRM, ad platforms, and tracking tools to create a seamless, self-updating lead generation pipeline.",
        },
      ],
    },
  ]

  const companies = [
    { name: "World Class", logo: "/logos/world-class.svg", invert: true, width: 60, height: 24 },
    { name: "WWF", logo: "/logos/wwf.svg", invert: false, width: 90, height: 36 },
    { name: "Genezio", logo: "/logos/genezio.svg", invert: false, width: 60, height: 24 },
    { name: "Answear", logo: "/logos/answear.svg", invert: false, width: 60, height: 24 },
    { name: "MTH Digital", logo: "/logos/mth-digital.svg", invert: false, width: 60, height: 24 },
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-cyan-900/20 via-[#0D0D0D] to-[#0D0D0D] -z-10 pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-white leading-tight">
                My Work on <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
                  GTM Strategy, Omnichannel & Automation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium border-l-4 border-cyan-500 pl-6">
                From bulletproof tracking and omnichannel media buying to AI-driven automation and Go-To-Market strategy.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Growth doesn't happen in a vacuum. It requires a 360-degree view of your business. Whether you are a fast-moving startup or an established enterprise, I help you bridge the gap between complex data architecture, high-ROI media buying, and cutting-edge automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-cyan-500/20">
                  Build Your Engine
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Visual Element in Hero */}
            <ScrollReveal delay={200} className="hidden lg:flex justify-center relative">
              <div className="relative w-full aspect-square max-w-md animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-red-500/20 rounded-full blur-3xl"></div>

                {/* Orbital Rings */}
                <div className="absolute inset-[10%] border border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute inset-[25%] border border-red-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-red-400 rounded-full shadow-[0_0_15px_#f87171] -translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Center Core */}
                <div className="absolute inset-[40%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-gray-700 flex items-center justify-center shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  <Network className="w-16 h-16 text-white z-10 animate-pulse" />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute top-[15%] left-[15%] w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="absolute bottom-[20%] right-[10%] w-14 h-14 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Bot className="w-7 h-7 text-purple-400" />
                </div>
                <div className="absolute top-[40%] -right-[5%] w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust / Logos Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-gray-900 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 mb-6 text-sm uppercase tracking-widest font-semibold">
            Architecting growth for industry leaders
          </p>
          <div className="block md:hidden">
            <LogoCarousel />
          </div>
          <div className="hidden md:grid grid-cols-5 gap-8 items-center opacity-70">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className={`grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ${company.invert ? "invert" : ""} max-h-12 w-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative">
        {/* Background Visuals */}
        <div className="absolute right-0 top-40 w-1/3 h-[600px] bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">How We'll Work Together</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">A systematic approach to scaling your revenue through data, automation, and targeted media buying.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative p-1 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-red-500/10 overflow-hidden group h-full">
                  {/* Animated border shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md"></div>

                  <div className="relative bg-[#0D0D0D] rounded-[calc(2rem-4px)] p-8 sm:p-10 border border-gray-800 transition-all duration-500 h-full flex flex-col z-10">
                    {/* Large Watermark Icon */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                      <service.icon className="w-64 h-64 text-white" />
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-6 mb-8 relative z-10">

                      <div className={`w-16 h-16 ${service.bgClass} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-gray-800/50`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="pt-2">
                        <div className="text-gray-500 font-mono font-bold text-sm mb-2 opacity-50 tracking-wider">SEQUENCE {service.number}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{service.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-10 relative z-10">
                      {service.description}
                    </p>

                    <div className="mt-auto relative z-10">
                      <div className="h-px w-full bg-gradient-to-r from-gray-800 via-gray-700 to-transparent mb-8"></div>
                      {/* Bullets */}
                      <ul className="space-y-6">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-5 group/bullet">
                            <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shrink-0 group-hover/bullet:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-shadow`}></div>
                            <div>
                              <strong className="text-gray-200 block mb-1.5 text-lg group-hover/bullet:text-white transition-colors">{bullet.title}</strong>
                              <span className="text-gray-500 text-sm leading-relaxed block">{bullet.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#0D0D0D] to-[#111]" id="contact">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Ready to Scale?</h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
              Every business requires a custom architecture. Choose how you'd like to initiate our partnership.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

            {/* Option 1: Form Link */}
            <ScrollReveal delay={100} className="h-full">
              <div className="relative p-1 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-red-500/10 overflow-hidden group h-full">
                {/* Animated border shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md"></div>

                <div className="bg-[#0D0D0D] border border-gray-800 rounded-[calc(2rem-4px)] p-10 transition-all duration-500 h-full flex flex-col z-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20 font-bold font-mono">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">Write me what you need <span className="text-lg font-normal text-gray-400 block mt-1">(if all is clear to you)</span></h3>
                  </div>

                  <p className="text-gray-400 text-lg mb-10 leading-relaxed flex-grow">
                    Already have a project mapped out, a specific budget in mind, or prefer to lay out the details in writing? Send me the specifics and I'll get back to you with a proposed strategy.
                  </p>

                  <Link
                    href="/#contact-form-section"
                    className="flex items-center justify-center w-full bg-[#1A1A1A] hover:bg-white text-white hover:text-black border border-gray-700 hover:border-white px-6 py-5 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
                  >
                    Submit Project Details
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Option 2: Calendar */}
            <ScrollReveal delay={200} className="h-full">
              <div className="relative p-1 rounded-[2rem] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-red-500/10 overflow-hidden group h-full">
                {/* Animated border shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md"></div>

                <div className="bg-[#0D0D0D] border border-gray-800 rounded-[calc(2rem-4px)] p-10 transition-all duration-500 h-full flex flex-col z-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 font-bold font-mono">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">Let’s have a 30-minute chat <span className="text-lg font-normal text-gray-400 block mt-1">(if you are not yet certain)</span></h3>
                  </div>

                  <p className="text-gray-400 text-lg mb-10 leading-relaxed flex-grow">
                    Not sure where to start or how I can help you win? Let's hop on a call to analyze your goals and see if we're a good fit for building your growth engine.
                  </p>

                  <a
                    href="https://calendar.app.google/7wZPxXhA4n8hDRes9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-1"
                  >
                    Book Discovery Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  )
}
