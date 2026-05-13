"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight
      const progress = Math.min(scrollY / (sectionHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = 1 - scrollProgress * 0.05
  const borderRadius = scrollProgress * 24

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background pt-20">
      <div className="md:hidden">
        <div className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden">
          <img
            src="/personal/hero.png"
            alt="Rt. Hon. Barr. John Gaul Lebo"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "55% 18%" }}
          />

          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

          <div className="relative z-10 flex w-full flex-col items-center px-6 py-12 text-center">
            <div className="reveal opacity-0 mb-5 inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-background/70 px-3.5 py-2 backdrop-blur-sm">
              <img
                src="/personal/apc-logo.jpg"
                alt="APC logo"
                className="h-6 w-8 flex-shrink-0 rounded-sm bg-white object-cover"
              />
              <div className="text-left">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-primary">APC 2027 Campaign</p>
                <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  House of Representatives
                </p>
              </div>
            </div>

            <h1 className="font-serif text-[clamp(2.8rem,11vw,4rem)] font-medium leading-[1.06] text-foreground">
              <span className="block whitespace-nowrap">
                <AnimatedText text="Building the" delay={0.2} />
              </span>
              <span className="block text-accent">
                <AnimatedText text="Future" delay={0.6} />
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-[270px] text-sm leading-6 text-muted-foreground">
              <span className="font-semibold text-primary">Abi/Yakurr</span>{" "}
              deserves proven representation, practical development, youth empowerment, innovation, education,
              healthcare and sustainable prosperity.
            </p>

            <div className="mt-7 flex w-full max-w-xs flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="group min-h-[52px] w-full rounded-full bg-gradient-to-r from-primary to-[#006b32] px-5 text-sm font-bold text-white shadow-[0_18px_38px_-20px_rgba(0,132,61,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#007235] hover:to-[#004f26] hover:text-white hover:shadow-[0_22px_42px_-18px_rgba(0,132,61,0.95)]"
              >
                <Link href="#get-involved">
                  <span>Join the Abi/Yakurr Movement</span>
                  <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-[52px] w-full rounded-full border-primary/30 bg-background/70 px-5 text-sm font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background hover:text-primary"
              >
                <Link href="#vision">View the Development Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[calc(100svh-5rem)] md:flex md:items-center">
        <div
          ref={imageContainerRef}
          className="absolute inset-0 overflow-hidden transition-transform duration-100"
          style={{ transform: `scale(${scale})`, borderRadius: `${borderRadius}px` }}
        >
          <img
            src="/personal/hero.png"
            alt=""
            aria-hidden="true"
            className="hero-bg-image absolute top-0 h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background from-[32%] via-background/55 via-[50%] to-transparent" />
          <div
            className="absolute inset-y-0"
            style={{ left: "36%", width: "10%", background: "linear-gradient(to right, var(--background), transparent)" }}
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl md:grid-cols-[54%_46%] md:items-center md:px-8 lg:px-10">
          <div className="mx-auto w-full max-w-[560px] text-center md:justify-self-center md:text-left">
            <div className="reveal opacity-0 mb-4 flex items-center justify-center gap-3 md:mb-5 md:justify-start">
              <img
                src="/personal/apc-logo.jpg"
                alt="APC logo"
                className="h-12 w-14 rounded-md border border-border/70 bg-white object-cover shadow-sm sm:h-14 sm:w-16"
              />
              <div className="min-w-0">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary sm:text-xs">
                  APC 2027 Campaign
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
                  House of Representatives
                </p>
              </div>
            </div>

            <h1 className="font-serif text-[clamp(2.95rem,6vw,5.4rem)] font-medium leading-[0.95] text-balance text-foreground md:leading-[1.02]">
              <span className="whitespace-nowrap">
                <AnimatedText text="Building the" delay={0.2} />
              </span>
              <br />
              <span className="text-accent">
                <AnimatedText text="Future" delay={0.6} />
              </span>
            </h1>

            <p className="mt-4 max-w-[34rem] text-base leading-8 text-muted-foreground md:mt-5">
              <span className="text-xl font-semibold text-primary">Abi/Yakurr</span> deserves proven representation,
              practical development, youth empowerment, innovation, education, healthcare and sustainable prosperity.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                asChild
                size="lg"
                className="group h-14 rounded-full bg-gradient-to-r from-primary to-[#006b32] px-7 text-base font-bold text-white shadow-[0_18px_38px_-20px_rgba(0,132,61,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#007235] hover:to-[#004f26] hover:text-white hover:shadow-[0_22px_42px_-18px_rgba(0,132,61,0.95)]"
              >
                <Link href="#get-involved">
                  Join the Abi/Yakurr Movement
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-primary/25 bg-white/70 px-7 text-base font-bold text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white hover:text-primary"
              >
                <Link href="#vision">View the Development Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-bg-image {
          left: auto;
          right: 0;
          width: 62%;
          object-position: center top;
          opacity: 0.92;
        }
      `}</style>
    </section>
  )
}
