"use client"

import { useEffect, useRef } from "react"
import {
  BriefcaseBusiness,
  Building2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Users,
  Wheat,
} from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "Education & Human Capital",
    description: "Scholarships, STEM learning, technical training and stronger school support systems.",
    summary: "Skills for the future",
    icon: GraduationCap,
    accent: "from-[#0f7bff] to-[#5db6ff]",
    tint: "bg-[#eef6ff]",
  },
  {
    number: "02",
    title: "Healthcare & Wellness",
    description: "Community outreach, primary healthcare support and better local health services.",
    summary: "Care within reach",
    icon: HeartPulse,
    accent: "from-[#0b9f67] to-[#63d6a6]",
    tint: "bg-[#edf9f4]",
  },
  {
    number: "03",
    title: "Youth Empowerment",
    description: "Opportunity, mentorship, leadership platforms and innovation pathways for young people.",
    summary: "Opportunity for youth",
    icon: Users,
    accent: "from-[#d18417] to-[#f2c36b]",
    tint: "bg-[#fff7e8]",
  },
  {
    number: "04",
    title: "Technology & Innovation",
    description: "Digital literacy, innovation hubs and support for future-ready thinking and enterprise.",
    summary: "Prepared for tomorrow",
    icon: Cpu,
    accent: "from-[#6b43d6] to-[#aa8cff]",
    tint: "bg-[#f5f0ff]",
  },
  {
    number: "05",
    title: "Enterprise & Economic Growth",
    description: "SME support, cooperatives, artisans and access-to-finance connections for wealth creation.",
    summary: "Growth that circulates",
    icon: BriefcaseBusiness,
    accent: "from-[#cf4d53] to-[#ff9b91]",
    tint: "bg-[#fff1f1]",
  },
  {
    number: "06",
    title: "Infrastructure & Community",
    description: "Roads, water systems, school infrastructure and stronger local access to public goods.",
    summary: "Communities that connect",
    icon: Building2,
    accent: "from-[#1c7087] to-[#73d4e0]",
    tint: "bg-[#eefafd]",
  },
  {
    number: "07",
    title: "Agriculture & Rural Prosperity",
    description: "Farmer support, value chains, agro-processing and practical rural development initiatives.",
    summary: "Prosperity from the land",
    icon: Wheat,
    accent: "from-[#408238] to-[#9bd36d]",
    tint: "bg-[#f1f8eb]",
  },
]

export function DevelopmentPlanSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      id="vision"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(247,250,245,1)_38%,rgba(244,248,251,1)_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal opacity-0 rounded-[1.9rem] border border-border/80 bg-white/92 p-6 shadow-[0_22px_44px_-36px_rgba(7,27,45,0.16)] lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Development Plan 2027-2031</p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Seven pillars holding up
                <span className="ml-2 text-primary">a stronger Abi/Yakurr</span>
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                This plan is easiest to understand when each priority stands clearly on its own while still supporting
                one shared development vision.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.2rem] bg-[#f7fbf7] px-4 py-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#0a7e4d]">Structure</p>
                <p className="mt-1 text-sm font-medium text-foreground">7 practical policy pillars</p>
              </div>
              <div className="rounded-[1.2rem] bg-[#fff8e8] px-4 py-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#b87910]">Focus</p>
                <p className="mt-1 text-sm font-medium text-foreground">People, progress and prosperity</p>
              </div>
              <div className="rounded-[1.2rem] bg-[#f6f9ff] px-4 py-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#2166c2]">Approach</p>
                <p className="mt-1 text-sm font-medium text-foreground">Visible and measurable priorities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <article key={pillar.number} className="reveal opacity-0 flex h-full flex-col" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="mx-3 h-4 rounded-t-[1rem] border border-b-0 border-border/80 bg-white/95" />

                <div
                  className={`relative flex flex-1 flex-col overflow-hidden rounded-[1.7rem] border border-border/80 ${pillar.tint} px-4 py-5 shadow-[0_20px_40px_-34px_rgba(7,27,45,0.18)] transition-colors duration-300 hover:bg-white`}
                >
                  <div className="pointer-events-none absolute inset-x-3 bottom-4 top-24 grid grid-cols-4 gap-2 opacity-35">
                    <div className="rounded-full bg-white/75" />
                    <div className="rounded-full bg-white/75" />
                    <div className="rounded-full bg-white/75" />
                    <div className="rounded-full bg-white/75" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold tracking-[0.18em] text-primary/75">
                        {pillar.number}
                      </span>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-[1rem] bg-gradient-to-r ${pillar.accent} text-white shadow-sm`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <h3 className="mt-5 text-base font-semibold leading-7 text-foreground">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                  </div>

                  <div className="relative z-10 mt-auto pt-8">
                    <div className="rounded-[1rem] bg-white/82 px-3 py-2.5 shadow-sm">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9b741e]">Focus Area</p>
                      <p className="mt-1 text-sm font-medium text-foreground">{pillar.summary}</p>
                    </div>
                  </div>
                </div>

                <div className="mx-1 h-5 rounded-b-[1rem] border border-t-0 border-border/80 bg-white/95" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
