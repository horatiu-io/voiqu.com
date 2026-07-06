"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/my-work", label: "My Work" },
    { href: "/growth-lab", label: "Growth Lab" },
    { 
      label: "Tools", 
      submenu: [
        { href: "/geo-analyzer", label: "GEO Analyzer", isSoon: true }
      ]
    },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="relative flex items-center after:absolute after:inset-[-10px] after:content-['']">
            <Image src="/logo.svg" alt="Logo" width={40} height={40} className="invert" priority fetchPriority="high" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="relative group flex items-center">
                    <button className="text-gray-300 group-hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer py-2 text-sm font-medium">
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Submenu Dropdown Wrapper (Hover Bridge) */}
                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block min-w-[180px] z-50">
                      {/* Visual Dropdown Container */}
                      <div className="bg-[#0D0D0D] border border-gray-800 rounded-md shadow-2xl py-2">
                        {item.submenu.map((sub) => {
                          if (sub.isSoon) {
                            return (
                              <div
                                key={sub.label}
                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-500 cursor-not-allowed select-none"
                              >
                                <span>{sub.label}</span>
                                <span className="px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-zinc-900 text-zinc-500 border border-zinc-800/80 rounded-full">
                                  Soon
                                </span>
                              </div>
                            )
                          }
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-900/50 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group flex items-center text-sm font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-gray-300 hover:text-white after:absolute after:inset-[-10px] after:content-[''] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A1A1A] rounded-lg mt-2 border border-gray-800">
              {navItems.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.label} className="py-2 px-3 border-b border-gray-800/30">
                      <span className="text-gray-500 text-xs font-mono uppercase tracking-wider block mb-2">
                        {item.label}
                      </span>
                      <div className="pl-3 space-y-2">
                        {item.submenu.map((sub) => {
                          if (sub.isSoon) {
                            return (
                              <div
                                key={sub.label}
                                className="flex items-center justify-between py-1.5 text-sm text-gray-500 cursor-not-allowed select-none"
                              >
                                <span>{sub.label}</span>
                                <span className="px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase bg-zinc-900 text-zinc-500 border border-zinc-800/80 rounded-full">
                                  Soon
                                </span>
                              </div>
                            )
                          }
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="text-gray-300 hover:text-white block py-1.5 text-sm transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="text-gray-300 hover:text-white block px-3 py-2 text-sm transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

