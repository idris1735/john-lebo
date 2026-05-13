"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Globe2, Landmark, Medal, Scale, Target } from "lucide-react"

const timelineEvents = [
  {
    year: "1998",
    title: "Called to the Nigerian Bar",
    description:
      "Became a Barrister and Solicitor of the Supreme Court of Nigeria, laying the legal and intellectual foundation for public service.",
    location: "Legal Foundation",
    icon: Scale,
  },
  {
    year: "2011",
    title: "Cross River State House of Assembly",
    description:
      "Entered legislative service representing Abi State Constituency and earned recognition for performance and consistency.",
    location: "Abi State Constituency",
    icon: Landmark,
  },
  {
    year: "2015",
    title: "Elected Speaker",
    description:
      "Rose to lead the Cross River State House of Assembly, combining parliamentary process, discipline and institutional leadership.",
    location: "Leadership Mandate",
    icon: Target,
  },
  {
    year: "2015-19",
    title: "International Parliamentary Engagements",
    description:
      "Participated in the UN General Assembly, COP22, the Commonwealth Parliamentary Conference and the World Government Summit.",
    location: "Global Exposure",
    icon: Globe2,
  },
  {
    year: "2017",
    title: "Zik Prize And Fellowship Training",
    description:
      "Received national recognition and deepened policy capacity through high-level fellowship and governance training.",
    location: "National Recognition",
    icon: Medal,
  },
  {
    year: "2027",
    title: "House of Representatives Vision",
    description:
      "Seeking to bring tested legislative capacity, constituency understanding and development focus to Abi/Yakurr Federal Constituency.",
    location: "Abi/Yakurr Mandate",
    icon: BookOpen,
  },
]

export function TimelineSection() {
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
      id="experience"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(246,250,245,1)_45%,rgba(242,247,250,1)_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal opacity-0 mx-auto mb-14 max-w-3xl text-center md:mb-18">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Career Path</p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
            A public journey marked by
            <span className="ml-2 text-primary">service and growth</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            The story here should feel clear and memorable: a sequence of milestones that shows preparation,
            leadership and widening responsibility over time.
          </p>
        </div>

        <div className="relative md:hidden">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-[linear-gradient(180deg,rgba(0,132,61,0.3),rgba(212,166,47,0.35),rgba(7,27,45,0.18))]" />
          <div className="space-y-5">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon

              return (
                <article
                  key={event.year}
                  className="reveal opacity-0 relative ml-10 rounded-[1.6rem] border border-border/80 bg-white/90 px-5 py-5 shadow-[0_22px_46px_-36px_rgba(7,27,45,0.28)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -left-[2.35rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background text-primary shadow-sm">
                    <span className="text-[0.65rem] font-bold">{index + 1}</span>
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-[0.16em] text-white">
                      {event.year}
                    </span>
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9b741e]">{event.location}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-7 text-foreground">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{event.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(0,132,61,0.15),rgba(212,166,47,0.42),rgba(7,27,45,0.16))]" />

          <div className="space-y-12 lg:space-y-14">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const alignLeft = index % 2 === 0

              return (
                <div
                  key={event.year}
                  className={`reveal opacity-0 flex items-center ${alignLeft ? "justify-start" : "justify-end"}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`grid w-full items-center gap-8 md:grid-cols-[1fr_64px_1fr] ${alignLeft ? "" : ""}`}>
                    <div className={alignLeft ? "justify-self-end" : "justify-self-start md:col-start-3"}>
                      <article className="timeline-card relative w-[min(100%,31rem)] rounded-[1.8rem] border border-border/80 bg-white/92 p-6 shadow-[0_28px_52px_-40px_rgba(7,27,45,0.24)]">
                        <div className="absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_top_right,rgba(0,132,61,0.06),transparent_34%)]" />
                        <div className="relative">
                          <div className="mb-5 flex items-center justify-between gap-4">
                            <span className="inline-flex rounded-full bg-[linear-gradient(90deg,#00843d,#0ea35c)] px-4 py-2 text-xs font-bold tracking-[0.18em] text-white shadow-[0_16px_28px_-20px_rgba(0,132,61,0.7)]">
                              {event.year}
                            </span>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 bg-primary/8 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>

                          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#9b741e]">{event.location}</p>
                          <h3 className="mt-2 text-xl font-semibold leading-8 text-foreground">{event.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{event.description}</p>
                        </div>
                      </article>
                    </div>

                    <div className="relative flex h-16 items-center justify-center">
                      <div className="h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_0_6px_rgba(0,132,61,0.08)]" />
                    </div>

                    <div className={!alignLeft ? "hidden md:block" : "hidden md:block"} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
