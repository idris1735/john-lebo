"use client"

import { useEffect, useRef } from "react"

const achievements = [
  {
    icon: "🏛️",
    title: "Pioneer PDP Speakers' Forum Chairman",
    description: "First chairman of the PDP Speakers' Forum nationally — demonstrating cross-constituency leadership recognized by peers across Nigeria.",
  },
  {
    icon: "🌐",
    title: "UN General Assembly Representative",
    description: "Represented Cross River State at the United Nations General Assembly in New York — one of the highest diplomatic platforms for a state legislature.",
  },
  {
    icon: "🌱",
    title: "COP22 Climate Conference Delegate",
    description: "Attended the Marrakech Climate Change Conference (2016), bringing global environmental governance thinking back to state-level policy.",
  },
  {
    icon: "🏆",
    title: "Zik Prize — Best Legislature Leadership",
    description: "Awarded the prestigious Nnamdi Azikiwe Zik Prize for best state legislature leadership in all of Nigeria in 2017.",
  },
  {
    icon: "🎓",
    title: "Harvard Fellowship Graduate",
    description: "Completed the Harvard Fellowship Training programme — one of the world's most competitive executive education platforms for public leaders.",
  },
  {
    icon: "📜",
    title: "Constitutional Reform Architect",
    description: "Served as Secretary of the Speakers' Forum Ad-Hoc Committee on Constitutional Amendment — shaping Nigeria's foundational governance document.",
  },
  {
    icon: "⚖️",
    title: "Best Performing Assembly Member",
    description: "Voted Best Performing House of Assembly Member in Cross River State for 2013 and 2014 — before even becoming Speaker.",
  },
  {
    icon: "🔬",
    title: "Economic Democracy Advocate",
    description: "Amongst the first Nigerian legislators to publicly call for Economic Democracy over Political Democracy during Nigeria's 2016 oil crisis recession.",
  },
]

export function TrackRecordSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="reveal opacity-0 mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Proven Track Record</h2>
        <p className="text-muted-foreground text-lg">A Record of Excellence at Every Level of Service</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="reveal opacity-0 p-6 rounded-lg border border-border bg-card/50 hover:border-accent transition-colors"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{achievement.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
