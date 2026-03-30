"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Zap, TrendingDown, LineChart, Database } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";


export default function DynamicHero() {


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0A0A] flex flex-col justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Blade Runner Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-40 pointer-events-none"></div>

      {/* Dynamic Mouse Following Spotlight (Neon Cyan & Red) */}
      {isClient && (
        <div 
          className="absolute rounded-full pointer-events-none z-0 mix-blend-screen transition-opacity duration-300"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(225,29,72,0.05) 50%, rgba(0,0,0,0) 70%)',
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            filter: 'blur(50px)',
          }}
        />
      )}
      
      {/* Ambient static lighting */}
      <div className="absolute top-20 right-0 w-1/2 h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Grain Overlay */}


      <div className="max-w-7xl mx-auto relative z-10 w-full py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side: Copywriting */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#111] border border-cyan-500/30 rounded-[4px] mb-8 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></div>
              <span className="text-cyan-400 text-xs font-mono tracking-[0.2em] uppercase">B2B SaaS & E-commerce Growth</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-[1.1] tracking-tight">
              Stop Wasting Budget. <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                Scale Predictably.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium max-w-xl font-mono">
              We help B2B SaaS and E-commerce brands unlock their true growth potential through deep data architecture, AI automation, and omnichannel performance marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button asChild className="relative group overflow-hidden bg-transparent border border-cyan-500 hover:border-cyan-400 text-cyan-400 hover:text-[#0A0A0A] px-8 py-6 text-lg h-auto rounded-[4px] font-mono font-bold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                <a href="https://calendar.app.google/7wZPxXhA4n8hDRes9" target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                  <span className="relative z-10 flex items-center">
                    Book Strategy Audit
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-gray-800 text-gray-300 hover:bg-white/5 hover:border-gray-600 hover:text-white px-8 py-6 text-lg h-auto rounded-[4px] font-mono font-bold transition-all duration-300 bg-[#111]"
              >
                <Link href="#contact-form-section" scroll={true}>
                  Submit Your Project
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right side: Animated Cyberpunk Graphic */}
          <ScrollReveal delay={200} className="hidden lg:flex justify-center relative">
            <div className="relative w-full aspect-square max-w-[500px]">
              {/* Core Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-[#0A0A0A] to-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              {/* Outer Rotating Cyber-Ring */}
              <div className="absolute inset-[5%] border border-cyan-900/40 rounded-full animate-[spin_40s_linear_infinite]">
                 {/* Decorative notches */}
                 <div className="absolute top-0 left-1/2 w-1 h-3 bg-cyan-500 shadow-[0_0_10px_#06b6d4] -translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-1/2 w-1 h-3 bg-red-500 shadow-[0_0_10px_#ef4444] -translate-x-1/2"></div>
              </div>

              {/* Middle Rotating Ring */}
              <div className="absolute inset-[20%] border border-dashed border-red-900/30 rounded-full animate-[spin_25s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-sm shadow-[0_0_15px_#22d3ee] -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              
              {/* Inner Rotating Ring */}
              <div className="absolute inset-[35%] border border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite]">
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-red-500 rounded-sm shadow-[0_0_15px_#ef4444] -translate-x-1/2 translate-y-1/2"></div>
              </div>

              {/* Central Component */}
              <div className="absolute inset-[40%] bg-gradient-to-br from-[#111] to-[#050505] rounded-full border border-cyan-800 flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.15)] group hover:scale-105 transition-transform duration-500 cursor-crosshair">

                <Zap className="w-14 h-14 text-cyan-400 animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] group-hover:text-red-400 transition-colors duration-500" />
              </div>

              {/* Floating Tech Nodes */}
              <div className="absolute top-[10%] left-[5%] bg-[#0A0A0A]/90 backdrop-blur-md border border-cyan-900/50 p-3 rounded-[4px] shadow-2xl animate-bounce" style={{ animationDuration: '3.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-cyan-950/50 flex items-center justify-center border border-cyan-800/50">
                    <TrendingDown className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[9px] text-cyan-600 font-mono tracking-[0.2em] uppercase mb-0.5">CAC // SYS</div>
                    <div className="text-white font-mono font-bold text-base leading-none">-42.4%</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[15%] right-[-5%] bg-[#0A0A0A]/90 backdrop-blur-md border border-red-900/50 p-3 rounded-[4px] shadow-2xl animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-red-950/50 flex items-center justify-center border border-red-800/50">
                    <LineChart className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <div className="text-[9px] text-red-600 font-mono tracking-[0.2em] uppercase mb-0.5">ROAS_OPT</div>
                    <div className="text-white font-mono font-bold text-base leading-none">3.84x</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[35%] right-[-10%] bg-[#0A0A0A]/90 backdrop-blur-md border border-cyan-900/50 p-3 rounded-[4px] shadow-2xl animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-cyan-950/50 flex items-center justify-center border border-cyan-800/50">
                    <Database className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[9px] text-cyan-600 font-mono tracking-[0.2em] uppercase mb-0.5">DATA.IO</div>
                    <div className="text-white font-mono font-bold text-base leading-none">SYNCED</div>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
