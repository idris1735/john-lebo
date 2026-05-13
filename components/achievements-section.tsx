"use client"

import { useEffect, useRef } from "react"
import { Award, BookOpen, FileText, Globe2, Landmark, Scale, Sprout, Trophy } from "lucide-react"

const featuredAchievements = [
  {
    title: "Zik Prize for Legislature Leadership",
    description:
      "Awarded the Nnamdi Azikiwe Zik Prize in 2017 for outstanding state legislature leadership in Nigeria.",
    icon: Trophy,
    label: "National Recognition",
    accent: "bg-[#fff3dd] text-[#b87910]",
  },
  {
    title: "UN General Assembly Representation",
    description:
      "Represented Cross River State on one of the world's most visible diplomatic and governance platforms.",
    icon: Globe2,
    label: "International Exposure",
    accent: "bg-[#eaf4ff] text-[#2166c2]",
  },
  {
    title: "Speaker of the Cross River State House of Assembly",
    description:
      "Led the legislature at state level with institutional responsibility, coordination and parliamentary authority.",
    icon: Landmark,
    label: "Legislative Leadership",
    accent: "bg-[#eaf8f0] text-[#0a7e4d]",
  },
]

const supportingAchievements = [
  {
    title: "Pioneer Chairman, PDP Speakers' Forum",
    description: "Recognized by peers nationally for leadership beyond his immediate constituency.",
    icon: Award,
    tint: "bg-[#fff5f3]",
  },
  {
    title: "Harvard Fellowship Training",
    description: "Advanced policy and leadership exposure through respected executive learning.",
    icon: BookOpen,
    tint: "bg-[#eef6ff]",
  },
  {
    title: "COP22 Climate Conference Delegate",
    description: "Brought global climate and sustainability conversations into local governance thinking.",
    icon: Sprout,
    tint: "bg-[#edf9f4]",
  },
  {
    title: "Constitutional Amendment Committee Secretary",
    description: "Contributed to work touching Nigeria's foundational governance framework.",
    icon: FileText,
    tint: "bg-[#fff8e8]",
  },
  {
    title: "Best Performing Assembly Member",
    description: "Voted best performing House member in Cross River State for 2013 and 2014.",
    icon: Scale,
    tint: "bg-[#f4f0ff]",
  },
]

export function AchievementsSection() {
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
      id="track-record"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(248,251,246,1)_0%,rgba(255,255,255,1)_38%,rgba(245,249,252,1)_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal opacity-0 mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Track Record</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Evidence of leadership,
              <span className="ml-2 text-primary">already on record</span>
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
              This section should read like proof, not decoration. It shows where leadership has already been tested,
              recognized and trusted with responsibility.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[1.4rem] border border-border/80 bg-white/92 px-4 py-4 shadow-[0_18px_36px_-30px_rgba(7,27,45,0.16)]">
              <p className="text-2xl font-bold text-foreground">3</p>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">Major leadership platforms</p>
            </div>
            <div className="rounded-[1.4rem] border border-border/80 bg-primary/[0.05] px-4 py-4 shadow-[0_18px_36px_-30px_rgba(7,27,45,0.16)]">
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">Years voted best performing member</p>
            </div>
            <div className="rounded-[1.4rem] border border-border/80 bg-[#fff8e8] px-4 py-4 shadow-[0_18px_36px_-30px_rgba(7,27,45,0.16)]">
              <p className="text-2xl font-bold text-[#b87910]">Global</p>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">Exposure from state to world stage</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal opacity-0 rounded-[1.9rem] border border-border/80 bg-[#071b2d] px-6 py-6 text-white shadow-[0_28px_54px_-42px_rgba(7,27,45,0.52)]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#d4a62f]">Public Record</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">A career already trusted with serious responsibility.</h3>
            <p className="mt-4 text-sm leading-7 text-white/74">
              The case for representation is stronger when it rests on visible service, institutional leadership and
              recognition earned over time.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d4a62f]">Legislative Depth</p>
                <p className="mt-1 text-sm leading-6 text-white/78">Experience in lawmaking, parliamentary process and institutional leadership.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d4a62f]">Recognition</p>
                <p className="mt-1 text-sm leading-6 text-white/78">Awards and peer recognition that point to performance, not just visibility.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d4a62f]">Broader Exposure</p>
                <p className="mt-1 text-sm leading-6 text-white/78">National and international forums that sharpen policy judgment and perspective.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {featuredAchievements.map((achievement, index) => {
              const Icon = achievement.icon

              return (
                <article
                  key={achievement.title}
                  className="reveal opacity-0 rounded-[1.7rem] border border-border/80 bg-white/94 px-5 py-5 shadow-[0_22px_44px_-36px_rgba(7,27,45,0.18)]"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] md:items-start">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-[1.2rem] ${achievement.accent}`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-foreground/[0.04] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary/80">
                          {achievement.label}
                        </span>
                        <div className="h-px flex-1 bg-border/80" />
                      </div>
                      <h3 className="mt-3 text-xl font-semibold leading-8 text-foreground">{achievement.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="reveal opacity-0 mt-5 overflow-hidden rounded-[1.8rem] border border-border/80 bg-white/92 shadow-[0_22px_44px_-36px_rgba(7,27,45,0.16)]">
          <div className="border-b border-border/70 px-5 py-4 md:px-6">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#9b741e]">Additional Highlights</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5">
            {supportingAchievements.map((achievement, index) => {
              const Icon = achievement.icon

              return (
                <article
                  key={achievement.title}
                  className={`px-5 py-4 md:px-5 ${achievement.tint} ${
                    index !== supportingAchievements.length - 1 ? "border-b border-border/70 xl:border-b-0 xl:border-r" : ""
                  } ${index < supportingAchievements.length - 1 && index % 2 === 0 ? "md:border-r" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[0.95rem] bg-white/92 text-primary shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold leading-6 text-foreground">{achievement.title}</h4>
                      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
