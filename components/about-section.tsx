"use client"

import { useEffect, useRef } from "react"
import { BookOpen, Globe2, Landmark, MapPin, Scale, Quote } from "lucide-react"

const credentials = [
  {
    label: "Legal And Academic Foundation",
    title: "Called to the Bar in 1998",
    description:
      "Trained in law, called to the Nigerian Bar, and later served in legal academia and publishing. That foundation gives his public service intellectual depth, not just political visibility.",
    icon: Scale,
    tone: "bg-white",
  },
  {
    label: "Legislative Leadership",
    title: "Speaker, Cross River State House of Assembly",
    description:
      "From representing Abi State Constituency to serving as Speaker, his record shows executive discipline, parliamentary experience and the ability to lead institutions.",
    icon: Landmark,
    tone: "bg-card/80",
  },
  {
    label: "Global Exposure",
    title: "Local roots, international perspective",
    description:
      "Engagements at the UN General Assembly, COP22, the World Government Summit and other global forums widened his view of what practical development leadership can look like at home.",
    icon: Globe2,
    tone: "bg-primary/[0.06]",
  },
]

export function AboutSection() {
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
      id="about"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,251,246,1)_42%,rgba(244,248,251,1)_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="reveal opacity-0 lg:pt-4">
            <div className="border-l-4 border-[#d4a62f] pl-5">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                The Man Behind The Mandate
              </p>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
                Prepared to represent Abi/Yakurr with substance.
              </h2>
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">
              Rt. Hon. Barr. John Gaul Lebo brings something rare into politics: legal training, legislative
              leadership, policy exposure and long-standing roots in the same constituency he seeks to represent.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-[1.4rem] border border-border/80 bg-white/90 px-5 py-5 shadow-[0_18px_40px_-34px_rgba(7,27,45,0.35)]">
                <p className="text-3xl font-bold text-foreground">8+</p>
                <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                  Years of legislative leadership experience
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-border/80 bg-primary/[0.06] px-5 py-5 shadow-[0_18px_40px_-34px_rgba(7,27,45,0.2)]">
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                  International policy and parliamentary forums
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-border/80 bg-[#071b2d] px-5 py-5 text-white shadow-[0_24px_48px_-34px_rgba(7,27,45,0.6)]">
              <div className="flex items-start gap-3">
                <Quote className="mt-0.5 h-5 w-5 text-[#d4a62f]" />
                <p className="text-sm leading-7 text-white/82 sm:text-base">
                  Leadership must directly improve the quality of life of the people. Not promises. Results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(120px,auto)]">
            <div className="reveal opacity-0 overflow-hidden rounded-[1.8rem] border border-border/80 bg-white shadow-[0_24px_52px_-36px_rgba(7,27,45,0.35)] md:col-span-7 md:row-span-2">
              <div className="relative h-full min-h-[420px]">
                <img
                  src="/personal/WhatsApp%20Image%202026-05-11%20at%2005.57.03%20(1).jpeg"
                  alt="Rt. Hon. Barr. John Gaul Lebo portrait"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "center 18%" }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071b2d]/92 via-[#071b2d]/38 to-transparent px-6 pb-6 pt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d4a62f]">
                    Public Service Record
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Lawyer. Legislator. Speaker. Advocate for Abi/Yakurr.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal opacity-0 rounded-[1.6rem] border border-border/80 px-5 py-5 shadow-[0_20px_44px_-36px_rgba(7,27,45,0.28)] md:col-span-5 bg-white">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                    Community Roots
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">Born in Abi LGA</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                He is not campaigning to discover the constituency. He is campaigning from within it, with a record
                already tied to the people and communities of Cross River.
              </p>
            </div>

            <div className="reveal opacity-0 rounded-[1.6rem] border border-border/80 px-5 py-5 shadow-[0_20px_44px_-36px_rgba(7,27,45,0.28)] md:col-span-5 bg-primary/[0.05]">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-primary shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                    Why It Matters
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">Representation with context</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                Constituency work is stronger when the representative understands the culture, pressures and ambitions
                of the people from lived experience, not briefings alone.
              </p>
            </div>

            {credentials.map((item, index) => {
              const Icon = item.icon
              const isLast = index === credentials.length - 1

              return (
                <div
                  key={item.title}
                  className={`reveal opacity-0 rounded-[1.6rem] border border-border/80 px-5 py-5 shadow-[0_20px_44px_-36px_rgba(7,27,45,0.28)] ${
                    isLast ? "md:col-span-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-5" : "md:col-span-6"
                  } ${item.tone}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className={`mb-4 flex items-center gap-3 ${isLast ? "lg:mb-0" : ""}`}>
                    <div className="rounded-2xl bg-[#071b2d] p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">{item.label}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
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
