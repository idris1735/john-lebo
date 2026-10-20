"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Development Plan", href: "#vision" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#philosophy" },
  { label: "Gallery", href: "#gallery" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-[1.75rem] border border-border/60 bg-background/88 shadow-[0_18px_40px_-28px_rgba(7,27,45,0.35)] backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-5 sm:h-[5.25rem] sm:px-6 lg:px-8">
          <Link href="#top" className="group flex items-center gap-2">
            <span className="jgl-logo font-serif text-[2rem] font-black leading-none tracking-tight sm:text-[2.2rem]">
              JGL
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="group h-13 rounded-full bg-gradient-to-r from-primary to-[#006b32] px-6 text-sm font-bold text-white shadow-[0_18px_34px_-22px_rgba(0,132,61,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#007235] hover:to-[#004f26] hover:text-white"
            >
              <Link href="#get-involved">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/88 text-foreground shadow-sm transition-colors duration-300 hover:border-primary/30 hover:text-primary md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border/50 px-4 pb-4 pt-3 md:hidden">
            <div className="rounded-[1.4rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,250,247,0.96))] p-3 shadow-[0_22px_44px_-32px_rgba(7,27,45,0.35)]">
              <div className="mb-3 rounded-2xl bg-primary/6 px-4 py-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">APC 2027 Campaign</p>
                <p className="mt-1 text-sm font-semibold text-foreground">Rt. Hon. Barr. John Gaul Lebo</p>
              </div>

              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-[0.95rem] font-semibold text-foreground transition-colors duration-300 hover:bg-primary/6 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Button
                asChild
                className="mt-3 h-13 w-full rounded-full bg-gradient-to-r from-primary to-[#006b32] text-sm font-bold text-white shadow-[0_18px_34px_-22px_rgba(0,132,61,0.9)] hover:from-[#007235] hover:to-[#004f26] hover:text-white"
              >
                <Link href="#get-involved" onClick={() => setIsOpen(false)}>
                  Join the Movement
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        .jgl-logo {
          background: linear-gradient(
            100deg,
            #00843d 0%,
            #00843d 30%,
            #d4a62f 48%,
            #ffe88a 54%,
            #d4a62f 60%,
            #00843d 72%,
            #00843d 100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: jgl-sparkle 3.6s ease-in-out infinite;
        }

        @keyframes jgl-sparkle {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </header>
  )
}
