"use client"

import { useEffect, useRef } from "react"
import { Brain, HandshakeIcon, Heart, Leaf, Users } from "lucide-react"

const principles = [
  {
    number: "01",
    title: "People First",
    description:
      "Governance must prioritise citizens, communities and human development. Every policy choice should be measured against its effect on real lives.",
    icon: Heart,
    color: "from-[#cf4d53] to-[#ff9b91]",
    tint: "bg-[#fff2f1]",
  },
  {
    number: "02",
    title: "Knowledge-Driven Leadership",
    description:
      "Leadership becomes more useful when vision is backed by research, curiosity, policy discipline and exposure to broader ideas.",
    icon: Brain,
    color: "from-[#0f7bff] to-[#5db6ff]",
    tint: "bg-[#eef6ff]",
  },
  {
    number: "03",
    title: "Youth Empowerment",
    description:
      "Young people must be equipped with skills, opportunity, innovation platforms and mentorship that create visible pathways forward.",
    icon: Users,
    color: "from-[#0b9f67] to-[#63d6a6]",
    tint: "bg-[#edf9f4]",
  },
  {
    number: "04",
    title: "Sustainable Development",
    description:
      "Projects and policies should create long-term social and economic value, not short bursts of seasonal visibility.",
    icon: Leaf,
    color: "from-[#408238] to-[#9bd36d]",
    tint: "bg-[#f1f8eb]",
  },
  {
    number: "05",
    title: "Community Participation",
    description:
      "Town halls, grassroots feedback and community participation are not optional extras. They are part of how good representation works.",
    icon: HandshakeIcon,
    color: "from-[#d18417] to-[#f2c36b]",
    tint: "bg-[#fff7e8]",
  },
]

export function LeadershipPhilosophySection() {
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
      id="philosophy"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(250,252,248,1)_42%,rgba(245,249,252,1)_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal opacity-0 mb-10 grid gap-5 rounded-[1.9rem] border border-border/80 bg-white/92 p-6 shadow-[0_22px_44px_-36px_rgba(7,27,45,0.16)] lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Philosophy</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Values that shape
              <span className="ml-2 text-primary">every decision</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              These principles define the kind of representation Abi/Yakurr can expect: practical, people-focused and
              rooted in long-term development.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[1.2rem] bg-[#f7fbf7] px-4 py-3">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9b741e]">Focus</p>
              <p className="mt-1 text-sm font-medium text-foreground">People before politics</p>
            </div>
            <div className="rounded-[1.2rem] bg-[#f6f9ff] px-4 py-3">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#2166c2]">Approach</p>
              <p className="mt-1 text-sm font-medium text-foreground">Knowledge with accountability</p>
            </div>
            <div className="rounded-[1.2rem] bg-[#fff9ec] px-4 py-3">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#b87910]">Goal</p>
              <p className="mt-1 text-sm font-medium text-foreground">Visible progress in communities</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.number}
                className={`reveal opacity-0 rounded-[1.6rem] border border-border/80 ${principle.tint} px-5 py-5 shadow-[0_20px_42px_-36px_rgba(7,27,45,0.16)] transition-colors duration-300 hover:bg-white`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] bg-gradient-to-r ${principle.color} text-white shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold tracking-[0.18em] text-primary/70">
                    {principle.number}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-7 text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{principle.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
