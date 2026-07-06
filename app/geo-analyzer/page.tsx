"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Terminal,
  SearchCode,
  Cpu,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  AlertTriangle,
  MessageSquareCode,
  MailWarning,
  ChevronDown,
  CheckSquare
} from "lucide-react";
import SeoAnalyzerForm from "../components/SeoAnalyzerForm";
import RadarGraphic from "../components/RadarGraphic";

export default function GeoAnalyzerPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Hide global navigation and footer when on this B2B landing page
  useEffect(() => {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("audit-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const steps = [
    {
      num: "01",
      title: "Target Identified",
      desc: "Input your target page URL and verified work email to authorize access.",
      meta: "SYS.INIT // REGISTRY_OK"
    },
    {
      num: "02",
      title: "Agent Deployed",
      desc: "Our automated system extracts headings structure, JSON-LD schema, and AI agent crawl permissions.",
      meta: "SYS.RUN // SCAN_ACTIVE"
    },
    {
      num: "03",
      title: "Intel Delivered",
      desc: "Receive a prioritized GEO & Technical SEO checklist detailing exact fixes directly in your inbox.",
      meta: "SYS.FIN // INTEL_SENT"
    }
  ];

  const faqs = [
    {
      question: "What is Generative Engine Optimization (GEO)?",
      answer: "GEO is the next generation of Search Engine Optimization. It focuses on making your website's content and data readable and authoritative for LLMs (like ChatGPT, Claude, and Gemini) and AI search search engines (like Perplexity and Google AI Overviews) so your brand is cited in AI responses."
    },
    {
      question: "Why do you need a work email?",
      answer: "To prevent automated script abuse, keep crawler costs under control, and ensure priority processing for legitimate B2B teams. Free email domains (Gmail, Yahoo, etc.) are restricted."
    },
    {
      question: "How is this different from a standard SEO audit?",
      answer: "Standard SEO looks at keyword density and backlinks for traditional ranking. A GEO audit inspects semantic hierarchy, machine-readability vectors, schema schema validation, and AI crawler agent access policies in robots.txt."
    }
  ];

  return (
    <div className="min-h-screen bg-[#060607] text-white flex flex-col font-sans relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Decorative Neon Cyan / Rose Glow Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-rose-500/3 blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: "12s" }}></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/3 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <header className="relative z-20 border-b border-slate-950/80 bg-[#070709]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group relative after:absolute after:inset-[-10px] after:content-['']">
            <Image
              src="/logo.svg"
              alt="Voiqu Logo"
              width={36}
              height={36}
              className="invert group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest border border-slate-900 hover:border-cyan-500/30 px-3.5 py-1.5 rounded-[3px] bg-slate-950/80"
          >
            Home_Core
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center relative z-10">

        {/* Above the Fold Hero */}
        <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-slate-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Side Content & Form */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-slate-950 border border-cyan-500/20 rounded-[4px] shadow-[0_0_10px_rgba(6,182,212,0.05)] w-fit">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-ping"></div>
                <span className="text-[10px] text-cyan-400 font-mono tracking-[0.18em] uppercase">
                  AGENTIC // PREDICTABLE_GEO_ENGINE
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                  Is Your Website <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                    Visible to AI?
                  </span>
                  <br />
                  <span className="text-white text-3xl sm:text-4xl lg:text-5xl">
                    Audit Your GEO & Technical SEO.
                  </span>
                </h1>
                <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-xl">
                  Deploy our agent to analyze how LLMs, Perplexity, and AI Search Engines read your headings, canonicals, and schema.
                </p>
              </div>

              {/* Form wrapper with anchor ID */}
              <div id="audit-form" className="w-full scroll-mt-28">
                <SeoAnalyzerForm />
              </div>
            </div>

            {/* Right Side Radar Graphic Visual */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
              <RadarGraphic />
            </div>

          </div>
        </section>

        {/* The Problem Section (Agitation) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-slate-950">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/20 border border-rose-900/30 rounded-[4px] mb-4">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
              <span className="text-[10px] text-rose-500 font-mono tracking-widest uppercase">CRITICAL_WARNING // DISRUPTION</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight mb-6">
              Traditional SEO is Dying. <br />
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                AI Search is Here.
              </span>
            </h2>
            <p className="text-slate-400 font-mono text-sm leading-relaxed">
              LLMs like ChatGPT and Perplexity synthesis models bypass traditional page rankings. They scrape and digest your page elements. If your technical architecture is unoptimized, you cease to exist in AI summaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-rose-950/30 bg-[#0A0709] p-6 rounded-[4px] relative group hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.06)] transition-all duration-300">
              <div className="w-10 h-10 rounded-[3px] bg-rose-950/40 border border-rose-900/40 flex items-center justify-center mb-4">
                <MessageSquareCode className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wider mb-2">LLMs Synthesize directly</h3>
              <p className="text-slate-400 font-mono text-xs leading-relaxed">
                AI agents answer queries directly on-platform. If your content isn't machine-readable, you are locked out of the AI citation loop entirely.
              </p>
            </div>

            <div className="border border-rose-950/30 bg-[#0A0709] p-6 rounded-[4px] relative group hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.06)] transition-all duration-300">
              <div className="w-10 h-10 rounded-[3px] bg-rose-950/40 border border-rose-900/40 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wider mb-2">Strict Semantic Hierarchy</h3>
              <p className="text-slate-400 font-mono text-xs leading-relaxed">
                LLMs rely heavily on rigid heading hierarchies (H1-H3) to extract context map layouts. Broken heading structures result in failed parsing models.
              </p>
            </div>

            <div className="border border-rose-950/30 bg-[#0A0709] p-6 rounded-[4px] relative group hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.06)] transition-all duration-300">
              <div className="w-10 h-10 rounded-[3px] bg-rose-950/40 border border-rose-900/40 flex items-center justify-center mb-4">
                <MailWarning className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wider mb-2">Schema Ground Truth</h3>
              <p className="text-slate-400 font-mono text-xs leading-relaxed">
                JSON-LD structured schemas act as factual databases for AI bots. Without clean JSON schema markup, your brand is categorized as unreliable.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works (Step-by-Step) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-slate-950">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-mono tracking-tight uppercase text-white">
              Tactical Execution // <span className="text-cyan-400">Step-by-Step</span>
            </h2>
            <p className="text-slate-400 font-mono text-xs mt-3 uppercase tracking-widest">
              Automated deployment pipeline flow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-slate-950/40 border border-slate-900 p-6 rounded-[4px] relative flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold font-mono text-cyan-500/40">
                      [{step.num}]
                    </span>
                    <span className="text-[8px] font-mono text-slate-500 tracking-wider">
                      {step.meta}
                    </span>
                  </div>
                  <h3 className="text-white font-mono text-sm font-bold uppercase tracking-wider mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-mono text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-cyan-500/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full border-b border-slate-950">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-mono uppercase tracking-tight text-white">
              System Queries // <span className="text-cyan-400">FAQ</span>
            </h2>
            <p className="text-slate-500 font-mono text-[10px] mt-2 tracking-widest uppercase">
              Resolving ambiguity and system rules
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-900 bg-slate-950/20 rounded-[4px] overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 flex justify-between items-center bg-slate-950/50 hover:bg-slate-950 font-mono text-xs uppercase tracking-wider text-left text-white transition-colors duration-300"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${isOpen ? "transform rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-48 border-t border-slate-900" : "max-h-0"
                      }`}
                  >
                    <p className="p-5 text-slate-400 font-mono text-xs leading-relaxed bg-[#08080a]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA (Bottom of Page) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-[#0A0A0A] to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              Ready to dominate <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-rose-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">AI Search?</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-xl mx-auto">
              Scan your site instantly for Generative Engine visibility. Deploy our automated analyzer to extract technical architecture directives.
            </p>
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleScrollToForm}
                className="relative group overflow-hidden bg-transparent border border-cyan-500 hover:border-cyan-400 text-cyan-400 font-mono font-bold py-4 px-10 rounded-[4px] transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center gap-3 uppercase cursor-pointer"
              >
                <span className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  Deploy Audit Agent
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Cyber Minimal Footer */}
      <footer className="border-t border-slate-950 py-6 relative z-10 bg-[#070708]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} VOIQU // ALL SYSTEMS OPERATIONAL
          </span>
          <span className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
            VERSION 4.2.1-RELEASE
          </span>
        </div>
      </footer>
    </div>
  );
}
