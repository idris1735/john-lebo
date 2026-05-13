"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Briefcase,
  CheckCircle,
  GraduationCap,
  HandHelping,
  Heart,
  Leaf,
  Megaphone,
  MessageCircle,
  Smartphone,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const roles = [
  { role: "Youth Volunteer", icon: Users, tint: "bg-[#edf9f4]" },
  { role: "Student Coordinator", icon: GraduationCap, tint: "bg-[#eef6ff]" },
  { role: "Community Liaison", icon: HandHelping, tint: "bg-[#fff7e8]" },
  { role: "Professional Supporter", icon: Briefcase, tint: "bg-[#f5f0ff]" },
  { role: "Town Hall Organiser", icon: Megaphone, tint: "bg-[#fff2f1]" },
  { role: "Digital Mobiliser", icon: Smartphone, tint: "bg-[#eefafd]" },
  { role: "Development Partner", icon: Leaf, tint: "bg-[#f1f8eb]" },
  { role: "Women's Network", icon: Heart, tint: "bg-[#fff3f8]" },
]

export function GetInvolvedSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    community: "",
    helpType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ fullName: "", phoneNumber: "", community: "", helpType: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="get-involved"
      className="scroll-mt-28 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,251,246,1)_46%,rgba(244,248,251,1)_100%)] px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Join the Movement</p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
            Be part of the
            <span className="ml-2 text-primary">next chapter</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            Support can come in many forms, from volunteering and mobilisation to sharing ideas from the community.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-border/80 bg-[#071b2d] px-6 py-7 text-white shadow-[0_28px_60px_-42px_rgba(7,27,45,0.5)]">
              <h3 className="text-2xl font-semibold">Ways to get involved</h3>
              <p className="mt-3 text-sm leading-7 text-white/72 md:text-base">
                Support can come through mobilising people, coordinating events, strengthening feedback loops or
                helping spread the message across communities.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {roles.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.role}
                    className={`group rounded-[1.2rem] border border-border/80 ${item.tint} px-4 py-3.5 shadow-[0_18px_38px_-34px_rgba(7,27,45,0.14)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-primary/25 hover:bg-white hover:shadow-[0_24px_44px_-34px_rgba(7,27,45,0.18)]`}
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-[0.9rem] bg-white p-2.5 text-primary shadow-sm">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-semibold leading-6 text-foreground">{item.role}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button
              asChild
              className="group h-14 w-full rounded-full bg-gradient-to-r from-primary to-[#006b32] px-6 text-sm font-bold text-white shadow-[0_18px_38px_-20px_rgba(0,132,61,0.9)] transition-[box-shadow,filter,background-image] duration-300 hover:from-[#007235] hover:to-[#004f26] hover:text-white hover:shadow-[0_22px_42px_-18px_rgba(0,132,61,0.95)] sm:text-base"
            >
              <Link href="#volunteer-form">Register as a Volunteer</Link>
            </Button>
          </div>

          <div
            id="contact"
            className="rounded-[2rem] border border-border/80 bg-white/92 px-6 py-7 shadow-[0_28px_60px_-42px_rgba(7,27,45,0.24)]"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-[1rem] bg-primary/10 p-3 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Connect With Us</h3>
                <p className="mt-1 text-sm text-muted-foreground">Leadership should be accessible and responsive.</p>
              </div>
            </div>

            {submitted && (
              <div className="mb-5 flex items-center gap-3 rounded-[1.2rem] border border-green-200 bg-green-50 px-4 py-4">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <p className="font-semibold text-green-900">Thank you</p>
                  <p className="text-sm text-green-700">We'll be in touch shortly.</p>
                </div>
              </div>
            )}

            <form id="volunteer-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full rounded-[1.1rem] border-2 bg-card px-4 py-3 text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:outline-none ${
                    focusedField === "fullName" ? "border-primary shadow-[0_0_0_6px_rgba(0,132,61,0.08)]" : "border-border"
                  }`}
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="08XXXXXXXXX"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phoneNumber")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full rounded-[1.1rem] border-2 bg-card px-4 py-3 text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:outline-none ${
                    focusedField === "phoneNumber" ? "border-primary shadow-[0_0_0_6px_rgba(0,132,61,0.08)]" : "border-border"
                  }`}
                />
              </div>

              <div>
                <select
                  name="community"
                  value={formData.community}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("community")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full cursor-pointer appearance-none rounded-[1.1rem] border-2 bg-card px-4 py-3 text-foreground transition-all duration-300 focus:outline-none ${
                    focusedField === "community" ? "border-primary shadow-[0_0_0_6px_rgba(0,132,61,0.08)]" : "border-border"
                  }`}
                >
                  <option value="">Select your community / LGA</option>
                  <option value="abi">Abi LGA</option>
                  <option value="yakurr">Yakurr LGA</option>
                  <option value="outside">Outside Abi/Yakurr</option>
                </select>
              </div>

              <div>
                <select
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("helpType")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full cursor-pointer appearance-none rounded-[1.1rem] border-2 bg-card px-4 py-3 text-foreground transition-all duration-300 focus:outline-none ${
                    focusedField === "helpType" ? "border-primary shadow-[0_0_0_6px_rgba(0,132,61,0.08)]" : "border-border"
                  }`}
                >
                  <option value="">How would you like to help?</option>
                  <option value="volunteer">I want to volunteer</option>
                  <option value="donate">I want to donate</option>
                  <option value="connect">I want to connect</option>
                  <option value="feedback">Community feedback</option>
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={`w-full resize-none rounded-[1.1rem] border-2 bg-card px-4 py-3 text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:outline-none ${
                    focusedField === "message" ? "border-primary shadow-[0_0_0_6px_rgba(0,132,61,0.08)]" : "border-border"
                  }`}
                />
              </div>

              <Button
                type="submit"
                disabled={submitted}
                className="h-14 w-full rounded-full bg-gradient-to-r from-primary to-[#006b32] text-sm font-bold text-white shadow-[0_18px_38px_-20px_rgba(0,132,61,0.9)] transition-[box-shadow,filter,background-image] duration-300 hover:from-[#007235] hover:to-[#004f26] hover:text-white disabled:opacity-50 sm:text-base"
              >
                {submitted ? "Message sent!" : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
