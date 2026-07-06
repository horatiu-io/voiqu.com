"use client";

import { useEffect, useState } from "react";
import { Compass, Cpu, Database, Eye, Activity } from "lucide-react";

export default function RadarGraphic() {
  const [dots, setDots] = useState<Array<{ id: number; top: string; left: string; active: boolean; label: string }>>([]);
  const [pulseMetric, setPulseMetric] = useState(98.4);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Initialise some target dots
    setDots([
      { id: 1, top: "25%", left: "30%", active: true, label: "H1_EXTRACTED" },
      { id: 2, top: "60%", left: "20%", active: false, label: "CANONICAL_CHECK" },
      { id: 3, top: "45%", left: "75%", active: true, label: "SCHEMA_LD_JSON" },
      { id: 4, top: "75%", left: "60%", active: true, label: "META_ROBOTS" },
      { id: 5, top: "15%", left: "65%", active: false, label: "OG_CARD" },
    ]);

    const interval = setInterval(() => {
      // Randomly toggle active states of dots to simulate data scanning
      setDots((prevDots) =>
        prevDots.map((dot) =>
          Math.random() > 0.6 ? { ...dot, active: !dot.active } : dot
        )
      );
      // Simulate real-time metric change, keeping it between 95% and 100%
      setPulseMetric((prev) => {
        const nextValue = +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2);
        return Math.max(95.00, Math.min(nextValue, 100.00));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      {/* Glow Backing */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-[#0A0A0A] to-rose-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '6s' }}></div>

      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 rounded-full border border-slate-900/60 overflow-hidden bg-slate-950/20 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
        {/* Radar Crosshairs */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500/10"></div>
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-cyan-500/10"></div>
      </div>

      {/* Outer Rotating Compass/Ring */}
      <div className="absolute inset-[4%] border border-cyan-500/20 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[2px] h-4 bg-cyan-400 -translate-x-1/2 shadow-[0_0_8px_#22d3ee]"></div>
        <div className="absolute bottom-0 left-1/2 w-[2px] h-4 bg-rose-500 -translate-x-1/2 shadow-[0_0_8px_#f43f5e]"></div>
        <div className="absolute left-0 top-1/2 h-[2px] w-4 bg-slate-800 -translate-y-1/2"></div>
        <div className="absolute right-0 top-1/2 h-[2px] w-4 bg-slate-800 -translate-y-1/2"></div>
      </div>

      {/* Dotted Ring */}
      <div className="absolute inset-[15%] border border-dashed border-slate-800 rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none"></div>

      {/* Radar Sweep Sweep Line */}
      <div className="absolute inset-[8%] rounded-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] bg-gradient-to-tr from-cyan-500/10 to-transparent origin-bottom-left animate-[spin_4s_linear_infinite] border-r border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.05)]"></div>
      </div>

      {/* Inner Concentric Rings */}
      <div className="absolute inset-[30%] border border-cyan-500/10 rounded-full pointer-events-none"></div>
      <div className="absolute inset-[50%] border border-rose-500/10 rounded-full pointer-events-none"></div>
      <div className="absolute inset-[70%] border border-cyan-500/5 rounded-full pointer-events-none"></div>

      {/* Tech Nodes / Scanned Target Points */}
      {isClient &&
        dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute transition-all duration-700 ease-out"
            style={{ top: dot.top, left: dot.left }}
          >
            {/* The Dot */}
            <div
              className={`w-2.5 h-2.5 rounded-sm transition-all duration-300 ${
                dot.active
                  ? "bg-cyan-400 shadow-[0_0_10px_#22d3ee] scale-110"
                  : "bg-slate-800 scale-90"
              }`}
            ></div>
            {/* Pulsing ring around active dots */}
            {dot.active && (
              <div className="absolute -inset-2 border border-cyan-400/30 rounded-full animate-ping pointer-events-none"></div>
            )}
            {/* Cyber label */}
            <span
              className={`absolute top-4 -left-6 text-[8px] font-mono whitespace-nowrap tracking-wider transition-opacity duration-300 ${
                dot.active ? "text-cyan-400/80 opacity-100" : "text-slate-700 opacity-40"
              }`}
            >
              {dot.label}
            </span>
          </div>
        ))}

      {/* Central Core element */}
      <div className="absolute inset-[42%] bg-slate-950 border border-cyan-500/30 rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.1)] z-10">
        <Activity className="w-6 h-6 text-cyan-400 animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
        <span className="text-[7px] font-mono text-cyan-500/80 tracking-widest uppercase mt-1">
          CORE_SCAN
        </span>
      </div>

      {/* Floating System Widgets / Telemetry Data */}
      <div className="absolute top-[8%] left-[-8%] bg-slate-950/80 backdrop-blur-md border border-cyan-900/30 p-2.5 rounded-[2px] shadow-lg animate-bounce pointer-events-none" style={{ animationDuration: '4.8s' }}>
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-sm bg-cyan-950/50 border border-cyan-900/40">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div>
            <div className="text-[7px] text-cyan-600 font-mono tracking-wider uppercase mb-0.5">AGENT_ENG</div>
            <div className="text-white font-mono font-bold text-xs leading-none">ACTIVE</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[12%] right-[-8%] bg-slate-950/80 backdrop-blur-md border border-rose-900/30 p-2.5 rounded-[2px] shadow-lg animate-bounce pointer-events-none" style={{ animationDuration: '5.5s', animationDelay: '0.8s' }}>
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-sm bg-rose-950/30 border border-rose-900/30">
            <Database className="w-3.5 h-3.5 text-rose-500" />
          </div>
          <div>
            <div className="text-[7px] text-rose-600 font-mono tracking-wider uppercase mb-0.5">INDEX_GEO</div>
            <div className="text-white font-mono font-bold text-xs leading-none">{pulseMetric.toFixed(2)}%</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] left-[2%] bg-slate-950/80 backdrop-blur-md border border-slate-900 p-2 rounded-[2px] shadow-lg pointer-events-none text-left">
        <div className="flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-slate-500 animate-pulse" />
          <span className="text-[7px] text-slate-500 font-mono tracking-widest uppercase">
            TARGETS_READY // 05
          </span>
        </div>
      </div>
    </div>
  );
}
