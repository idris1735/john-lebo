"use client"

import { useEffect, useState } from "react"

const leaderCutoutSrc = "/personal/bg-removed.png"
const patternSrc = "/personal/pattern5-optimized.jpg"
const apcLogoSrc = "/personal/apc-logo.jpg"

export function Preloader() {
  const [mounted, setMounted] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const mountTimer = window.setTimeout(() => setMounted(true), 60)
    const exitTimer = window.setTimeout(() => setExiting(true), 3500)
    const goneTimer = window.setTimeout(() => setGone(true), 4200)

    return () => {
      window.clearTimeout(mountTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(goneTimer)
    }
  }, [])

  if (gone) return null

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden bg-[#07100d] text-white transition-opacity duration-700"
      style={{ opacity: exiting ? 0 : 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${patternSrc}")` }}
      />
      <div className="absolute inset-0 bg-[#06100d]/72" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,8,0.78)_0%,rgba(4,10,8,0.62)_34%,rgba(4,10,8,0.92)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,10,8,0.96)_0%,rgba(4,10,8,0.88)_39%,rgba(4,10,8,0.34)_73%,rgba(4,10,8,0.18)_100%)]" />
      <div className="absolute right-0 top-0 h-full w-[58%] bg-[radial-gradient(circle_at_58%_46%,rgba(236,211,139,0.28),rgba(0,132,61,0.13)_28%,transparent_58%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#040807] to-transparent" />

      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#00843d] via-[#d4a62f] to-[#005aa7]" />

      <div className="relative z-30 flex min-h-screen flex-col items-center justify-center gap-5 px-6 pb-24 pt-6 sm:px-10 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:px-10 lg:pb-20 lg:pt-0 xl:px-16">
        {/* Photo — first on mobile (top), second on desktop (right) */}
        <div
          className="pointer-events-none relative z-20 w-[min(76vw,300px)] shrink-0 sm:w-[min(56vw,380px)] lg:order-2 lg:w-[min(50vw,760px)]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translate3d(0,0,0) scale(1)"
              : "translate3d(18px,16px,0) scale(0.97)",
            transition: "opacity 900ms ease 420ms, transform 1000ms ease 420ms",
          }}
        >
          <img
            src={leaderCutoutSrc}
            alt=""
            aria-hidden="true"
            className="h-auto w-full drop-shadow-[0_34px_54px_rgba(0,0,0,0.54)]"
            style={{
              maskImage:
                "radial-gradient(ellipse 80% 88% at 50% 22%, black 44%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.45) 76%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 88% at 50% 22%, black 44%, rgba(0,0,0,0.88) 60%, rgba(0,0,0,0.45) 76%, transparent 90%)",
            }}
          />
        </div>

        {/* Text — second on mobile (below), first on desktop (left) */}
        <div className="w-full max-w-[520px] text-center lg:order-1 lg:max-w-[560px] lg:text-left">
          {/* APC logo */}
          <div
            className="mb-6 flex items-center justify-center lg:justify-start"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 550ms ease 60ms, transform 550ms ease 60ms",
            }}
          >
            <img
              src={apcLogoSrc}
              alt="All Progressives Congress"
              className="h-12 w-auto object-contain"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
            />
          </div>

          <div
            className="mb-8 flex items-center justify-center gap-4 lg:justify-start"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 600ms ease 120ms, transform 600ms ease 120ms",
            }}
          >
            <span className="h-px w-14 bg-[#d4a62f]" />
            <span className="text-xs font-black uppercase tracking-[0.34em] text-[#d4a62f]">
              People. Progress. Prosperity.
            </span>
          </div>

          <p
            className="mb-4 text-sm font-black uppercase tracking-[0.26em] text-white/68"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 650ms ease 280ms, transform 650ms ease 280ms",
            }}
          >
            Rt. Hon. Barr.
          </p>

          <h1
            className="font-serif text-[clamp(2.8rem,8.2vw,7.8rem)] font-bold leading-[0.9] tracking-normal text-white"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 760ms ease 420ms, transform 760ms ease 420ms",
            }}
          >
            John Gaul
            <span className="block text-[#22c773]">Lebo</span>
          </h1>

          <div
            className="mt-8 border-t-2 border-[#d4a62f] pt-5 lg:border-t-0 lg:border-l-4 lg:pl-5 lg:pt-0"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 720ms ease 640ms, transform 720ms ease 640ms",
            }}
          >
            <p className="text-xl font-black text-white sm:text-2xl">
              House of Representatives
            </p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-[#a9dfbf] sm:text-base">
              Abi/Yakurr Federal Constituency
            </p>
            <p className="mt-4 text-sm font-semibold text-white/58 sm:text-base">
              Development Plan 2027-2031
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
