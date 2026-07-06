"use client";

import { useState } from "react";
import { Terminal, ShieldAlert, Cpu, CheckCircle } from "lucide-react";

const FREE_EMAIL_DOMAINS = [
  // Freemails
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "icloud.com",
  "hotmail.com",
  "aol.com",
  "mail.com",
  "zoho.com",
  "proton.me",
  "protonmail.com",
  "live.com",
  "msn.com",
  "yandex.com",
  "gmx.com",
  "mail.ru",
  "free.fr",
  "fastmail.com",
  "hushmail.com",
  // Common disposable/temp domains (instant client-side rejection)
  "imxwe.com",
  "mailinator.com",
  "yopmail.com",
  "tempmail.com",
  "10minutemail.com",
  "trashmail.com",
  "guerrillamail.com",
  "sharklasers.com",
  "dispostable.com",
  "getairmail.com",
  "burnermail.io",
  "temp-mail.org",
  "tempmailo.com",
  "10minutemail.one"
];

export default function SeoAnalyzerForm() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setStatus("idle");

    // Clean up input
    const cleanUrl = url.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanUrl || !cleanEmail) {
      setErrorMessage("Error: All fields are required.");
      setStatus("error");
      return;
    }

    // Basic URL format validation
    try {
      new URL(cleanUrl.startsWith("http") ? cleanUrl : `https://${cleanUrl}`);
    } catch (err) {
      setErrorMessage("Error: Please enter a valid URL.");
      setStatus("error");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage("Error: Please enter a valid email address.");
      setStatus("error");
      return;
    }

    // Strict B2B Email domain check
    const domain = cleanEmail.split("@")[1];
    if (FREE_EMAIL_DOMAINS.includes(domain)) {
      setErrorMessage("Access Denied: Please use a valid company email.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/n8n-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: cleanUrl,
          email: cleanEmail,
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(
          errorData.error || "System Error: Failed to trigger SEO analysis. Please try again."
        );
        setStatus("error");
      }
    } catch (error) {
      console.error("SEO Analyzer request failed:", error);
      setErrorMessage("System Connection Error: Network timeout. Please retry.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-cyan-500/30 bg-cyan-950/10 p-8 rounded-[4px] shadow-[0_0_25px_rgba(6,182,212,0.15)] max-w-lg w-full backdrop-blur-md relative overflow-hidden animate-fadeIn">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-cyan-950/80 border border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            <CheckCircle className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold font-mono tracking-widest text-cyan-400 uppercase drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            [ AUDIT TRIGGERED ]
          </h3>
          <p className="text-gray-300 font-mono text-sm leading-relaxed max-w-sm">
            Audit Triggered. Report will be delivered to your inbox.
          </p>
          <div className="text-[10px] text-cyan-600 font-mono tracking-[0.2em] pt-4 border-t border-cyan-900/30 w-full">
            SYS.STATUS // COMPLETED_SUCCESS
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-slate-900 bg-slate-950/65 p-6 sm:p-8 rounded-[4px] shadow-[0_0_30px_rgba(0,0,0,0.8)] max-w-lg w-full backdrop-blur-md relative overflow-hidden">
      {/* Decorative scanline or grid indicators */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-slate-800 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-slate-800 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-mono text-cyan-400 tracking-[0.25em] uppercase font-bold">
            GEO_ANALYSIS.EXE
          </span>
        </div>
        <span className="text-[10px] font-mono text-rose-500/80 uppercase tracking-widest bg-rose-950/20 px-2 py-0.5 border border-rose-950 rounded">
          B2B ACCESS ONLY
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
            Target Page URL
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-600 font-mono text-sm select-none">
              url:
            </span>
            <input
              type="url"
              required
              disabled={status === "loading"}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://domain.com/article_url"
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-400 text-cyan-300 placeholder:text-slate-600 font-mono text-sm pl-12 pr-4 py-3 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
            Work Email Address
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-600 font-mono text-sm select-none">
              sys:
            </span>
            <input
              type="email"
              required
              disabled={status === "loading"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className={`w-full bg-slate-950/80 border text-cyan-300 placeholder:text-slate-600 font-mono text-sm pl-12 pr-4 py-3 rounded-[4px] focus:outline-none focus:ring-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${status === "error" && errorMessage.includes("Access Denied")
                ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500"
                : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400"
                }`}
            />
          </div>
        </div>

        {status === "error" && (
          <div className="flex items-start gap-2.5 p-3.5 bg-rose-950/20 border border-rose-500/30 rounded-[4px] text-xs font-mono text-rose-500 animate-shake">
            <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="relative group overflow-hidden bg-transparent border border-cyan-500 hover:border-cyan-400 text-cyan-400 font-mono font-bold py-3.5 px-6 rounded-[4px] transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.15)] hover:shadow-[0_0_24px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2.5 w-full uppercase cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Cpu className="w-4 h-4 animate-spin text-cyan-400" />
              <span className="tracking-[0.15em]">[ SYSTEM ANALYZING... ]</span>
            </>
          ) : (
            <>
              <span className="absolute inset-0 bg-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-black font-mono">
                Deploy Agent & Audit
                <span className="font-sans font-normal">→</span>
              </span>
            </>
          )}
        </button>

        <div className="text-[9px] text-slate-500 text-center font-mono uppercase tracking-widest pt-2">
          SECURE ENCRYPTED HANDSHAKE // 256-BIT SSL
        </div>
      </form>
    </div>
  );
}
