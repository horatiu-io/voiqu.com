import { Button } from "@/components/ui/button"
import { 
  Database, 
  Zap, 
  Cog, 
  LineChart, 
  ArrowRight,
  Target, // for Pain points instead of Activity
  AlertOctagon, // Instead of AlertCircle
  TrendingDown,
  Network
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "./components/ContactForm"
import LogoCarousel from "./components/LogoCarousel"
import LatestExperimentsCarousel from "./components/LatestExperimentsCarousel"
import ScrollReveal from "./components/ScrollReveal"
import DynamicHero from "./components/DynamicHero"

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Horațiu Voicu",
    "jobTitle": "Senior Growth Consultant",
    "url": "https://voiqu.com",
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

  const companies = [
    { name: "World Class", logo: "/logos/world-class.svg", invert: true, width: 60, height: 24 },
    { name: "WWF", logo: "/logos/wwf.svg", invert: false, width: 90, height: 36 },
    { name: "Genezio", logo: "/logos/genezio.svg", invert: false, width: 60, height: 24 },
    { name: "Answear", logo: "/logos/answear.svg", invert: false, width: 60, height: 24 },
    { name: "MTH Digital", logo: "/logos/mth-digital.svg", invert: false, width: 60, height: 24 },
  ]

  const painPoints = [
    {
      icon: TrendingDown,
      title: "Rising CAC & Stagnant Growth",
      description: "Your customer acquisition costs are increasing month over month, bleeding into your profit margins and stalling your scale.",
      color: "from-red-500/20 to-orange-500/20",
      glowColor: "from-red-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Broken Data Architecture",
      description: "You're flying blind. You can't accurately attribute conversions, your analytics are a mess, and you're guessing your true ROI.",
      color: "from-orange-500/20 to-yellow-500/20",
      glowColor: "from-orange-500 to-yellow-500"
    },
    {
      icon: AlertOctagon,
      title: "Siloed Marketing Channels",
      description: "Your Google Ads, Meta, and SEO don't talk to each other. You lack a unified, omnichannel system to capture and convert demand.",
      color: "from-cyan-500/20 to-blue-500/20",
      glowColor: "from-cyan-500 to-blue-500"
    }
  ];

  const steps = [
    {
      number: "01",
      icon: Database,
      title: "Data & Architecture Audit",
      description: "We fix your tracking so you can accurately measure LTV, CAC, and true ROI across all acquisition channels.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "02",
      icon: Zap,
      title: "GTM & Automation Strategy",
      description: "We architect a full-funnel digital ecosystem, integrating AI and automation to eliminate leaks and scale your operations.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      number: "03",
      icon: Network,
      title: "Omnichannel Execution",
      description: "We orchestrate high-ROI campaigns across Search, Social, and Publisher Placements to capture high-intent demand.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "04",
      icon: LineChart,
      title: "Analysis & Iterative Scale",
      description: "Continuous CRO, creative testing, and budget reallocation to maximize profitability and predict revenue growth.",
      color: "from-rose-500 to-orange-500"
    },
  ]

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* Dynamic Hero Section */}
      <DynamicHero />

      {/* Trust / Logos Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-gray-900 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 mb-6 text-sm uppercase tracking-widest font-semibold">
            Deploying Growth Systems For
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

      {/* Pain Points Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative">
        <div className="absolute right-0 top-20 w-1/4 h-[400px] bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Do any of these sound familiar?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Most companies hit a plateau because their foundations are cracked. You can't outspend bad strategy and broken tracking.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {painPoints.map((pain, index) => (
              <ScrollReveal key={index} delay={index * 100} className="h-full">
                <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden group h-full">
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pain.glowColor} opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md`}></div>
                  
                  <div className="relative bg-[#0D0D0D] rounded-[calc(2rem-4px)] p-8 sm:p-10 border border-gray-800 transition-all duration-500 h-full flex flex-col z-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800/20 rounded-full blur-3xl group-hover:bg-gray-800/40 transition-colors"></div>

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pain.color} flex items-center justify-center mb-8 border border-gray-800/50 group-hover:scale-110 transition-transform duration-500`}>
                      <pain.icon className="w-7 h-7 text-white opacity-90" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{pain.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed flex-grow">{pain.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Protocol Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111] border-t border-gray-900 relative">
        <div className="absolute left-0 top-40 w-1/3 h-[600px] bg-gradient-to-r from-cyan-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">A Partnership Built for Growth</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We apply a proven 4-step framework to accelerate your business with data-driven precision and engineered execution.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100} className="h-full">
                <div className="relative p-1 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden group h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity duration-1000 blur-md`}></div>
                  
                  <div className="relative bg-[#0D0D0D] rounded-[calc(1rem-4px)] p-8 border border-gray-800 transition-all duration-500 h-full flex flex-col z-10">
                    {/* Number badge */}
                    <div className="text-5xl font-bold text-gray-800 mb-6 group-hover:text-gray-700 transition-colors font-mono">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-gray-800/50 shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - The Terminal */}
      <section id="contact-form-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Initialize Your Growth Sequence</h2>
            <p className="text-gray-400 text-lg">Send us the details and we'll reply with a proposed strategy.</p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="bg-[#0A0A0A] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-shadow duration-500">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-cyan-500/20 px-6 py-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-red-600"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-yellow-600"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 border border-green-600"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono ml-4 font-semibold tracking-wide">growth-sequence.sh</span>
              </div>

              {/* Terminal Content */}
              <div className="p-8 md:p-10 font-mono text-sm">
                <div className="mb-8 flex items-center gap-3 text-base">
                  <span className="text-cyan-400 font-bold">~ $</span>
                  <span className="text-gray-300">Executing command: ./init-project.sh</span>
                </div>

                <ContactForm />

                <div className="mt-10 pt-8 border-t border-gray-800/80">
                  <button
                    type="submit"
                    form="contact-form"
                    className="relative group overflow-hidden bg-transparent border border-cyan-500 hover:border-cyan-400 text-cyan-400 hover:text-[#0A0A0A] w-full px-6 py-5 text-lg rounded-[4px] font-mono font-bold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] uppercase tracking-wider"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      Execute Command
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Growth Experiments Section */}
      <LatestExperimentsCarousel />
    </div>
  )
}
