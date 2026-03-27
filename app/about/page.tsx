import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart3, Bot, Network, Search, Globe, Award, GraduationCap, Heart, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "../components/ScrollReveal"

export default function About() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Horațiu Voicu",
    "jobTitle": "Senior Growth Consultant",
    "url": "https://voiqu.com/about",
    "sameAs": [
      "https://linkedin.com/in/voiqu"
    ],
    "knowsAbout": [
      "Generative Engine Optimization",
      "Growth Marketing",
      "AI Automation",
      "Advanced Tracking & SEO",
      "GTM Strategy",
      "Omnichannel Performance Marketing"
    ]
  };

  const achievements = [
    {
      company: "Genezio.com",
      role: "Pioneering AI & Search",
      description: "I am actively shaping the future of search at Genezio.com. Beyond scaling their cloud platform for developers, I am part of the core team that built a pioneering Generative Engine Optimization (GEO) tool. I actively drive the company's pivot and promotional strategies in the AI search and AI Agents Testing space.",
      metric: "GEO Innovation",
      icon: Sparkles,
      color: "from-purple-500 to-indigo-500",
      accent: "bg-purple-500"
    },
    {
      company: "ANSWEAR Romania",
      role: "E-commerce Scaling",
      description: "As a founding team member, my work in SEO, Google Ads, and Meta Ads was instrumental in scaling the company from its launch to massive sales.",
      metric: "€22M Sales",
      icon: TrendingUp,
      color: "from-cyan-400 to-blue-500",
      accent: "bg-cyan-500"
    },
    {
      company: "MTH.Digital",
      role: "Leading Organic Growth",
      description: "As SEO Director, I led the department to drive search rankings for major clients like Transavia and Bottega Verde.",
      metric: "SEO Director",
      icon: Search,
      color: "from-green-400 to-emerald-500",
      accent: "bg-emerald-500"
    },
    {
      company: "Perceptum.ro",
      role: "Navigating Digital Pivots",
      description: "As Head of Digital, I spearheaded integrated strategies during the COVID-19 pandemic, helping key clients like World Class Romania and Ceetrus (Auchan) adapt and thrive in uncertain market conditions.",
      metric: "Adapt & Thrive",
      icon: Globe,
      color: "from-orange-400 to-red-500",
      accent: "bg-orange-500"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* 1. Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-cyan-900/20 via-[#0D0D0D] to-[#0D0D0D] -z-10 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image Column */}
            <ScrollReveal className="w-full lg:w-5/12 relative">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-red-500 rounded-3xl blur-3xl opacity-30"></div>
                <div className="absolute inset-[-2px] bg-gradient-to-tr from-cyan-500/50 to-red-500/50 rounded-[2rem] z-0"></div>
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-gray-800 bg-gray-900 z-10">
                  <Image
                    src="/h-voiqu.webp"
                    alt="Horațiu Voicu"
                    fill
                    priority
                    className="object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Text Column */}
            <ScrollReveal className="w-full lg:w-7/12" delay={150}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                <span className="text-white text-sm font-medium tracking-wide">Google Partner</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Horațiu Voicu,
                </span> Senior Growth Consultant
              </h1>

              <div className="space-y-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
                <p>
                  I am a Senior Growth Consultant trusted with managing over <strong className="text-white font-semibold">€1M+</strong> in advertising budgets.
                </p>
                <p>
                  I thrive in fast-paced environments where my focus is entirely on delivering measurable, needle-moving business results.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Specialty Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="relative p-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-red-500/20 overflow-hidden group">
              {/* Animated border shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md"></div>

              <div className="relative bg-[#111] rounded-xl p-8 md:p-12 border border-gray-800 z-10">
                <div className="max-w-3xl mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Architecting Data-Driven Marketing Systems</h2>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    By leveraging advanced automation, modern analytics, and AI-driven tools, I build scalable, high-impact solutions designed for the modern digital landscape.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Advanced Automation", tool: "n8n", icon: Network, color: "text-red-400", bg: "bg-red-500/10" },
                    { title: "Modern Analytics", tool: "GA4", icon: BarChart3, color: "text-amber-400", bg: "bg-amber-500/10" },
                    { title: "AI-Driven Tools", tool: "LLMs & Agents", icon: Bot, color: "text-cyan-400", bg: "bg-cyan-500/10" }
                  ].map((skill, i) => (
                    <div key={i} className="flex flex-col items-start group/card">
                      <div className={`w-14 h-14 ${skill.bg} rounded-xl flex items-center justify-center mb-6 border border-gray-800 group-hover/card:border-gray-600 transition-colors`}>
                        <skill.icon className={`w-7 h-7 ${skill.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                      <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">[{skill.tool}]</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Achievements / Experience Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#151515] relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pioneering AI & Scaling Growth</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I've had the privilege of driving digital strategy for dynamic startups, established enterprises, and cutting-edge AI products.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative bg-[#0D0D0D] rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl overflow-hidden accent-bar">
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">

                    {/* Left: Icon & Title */}
                    <div className="flex-shrink-0 md:w-1/3">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">{item.company}</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-400">{item.role}</h3>
                    </div>

                    {/* Middle: Description */}
                    <div className="md:w-1/2">
                      <p className="text-gray-300 leading-relaxed pr-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Metric */}
                    <div className="flex-shrink-0 md:w-1/6 md:text-right">
                      <div className="inline-block px-4 py-2 bg-[#1A1A1A] rounded-lg border border-gray-800 group-hover:bg-gray-800 transition-colors">
                        <span className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.metric}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Teaching & Volunteering Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Teaching */}
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Teaching & Giving Back</h2>
              </div>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                I believe in sharing knowledge and using digital skills for good.
              </p>

              <div className="bg-[#151515] rounded-2xl p-8 border border-gray-800 hover:border-blue-500/30 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                <h3 className="text-2xl font-bold text-white mb-2">Guest Lecturer</h3>
                <p className="text-blue-400 font-medium mb-6">Universidad Europea de Valencia</p>
                <p className="text-gray-400 leading-relaxed">
                  Regularly teaching SEO Fundamentals to the next generation of digital professionals, sharing practical industry insights.
                </p>
              </div>
            </ScrollReveal>

            {/* Volunteering */}
            <ScrollReveal delay={150}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20">
                  <Heart className="w-6 h-6 text-rose-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Volunteer Projects</h2>
              </div>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed gap-2">
                Dedicating time and expertise to organizations I care about.
              </p>

              <div className="space-y-6">
                <div className="bg-[#151515] rounded-xl p-6 border border-gray-800 hover:border-rose-500/30 transition-colors flex gap-6 items-start">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shrink-0">
                    <span className="text-lg">🇸🇰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Slovak Red Cross</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Audited and implemented robust tracking systems to accurately monitor and optimize donation flows.</p>
                  </div>
                </div>

                <div className="bg-[#151515] rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-colors flex gap-6 items-start">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 shrink-0">
                    <span className="text-lg">🐼</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">WWF Romania</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Optimized Google Ad Grants infrastructure to significantly boost their brand awareness and environmental initiatives.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#151515] border-t border-gray-900">
        <ScrollReveal className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to navigate the new world of Generative Engine Optimization, overhaul your tracking infrastructure, or build automated growth engines, I'd love to chat.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-red-500 hover:from-cyan-600 hover:to-red-600 text-white px-8 py-6 text-lg h-auto rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-cyan-500/50 text-white hover:bg-cyan-500/10 px-8 py-6 text-lg h-auto rounded-xl font-semibold transition-all duration-300 bg-transparent group"
            >
              <Link href="/my-work">
                View My Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  )
}
