"use client"

import { Briefcase, Landmark, Handshake } from "lucide-react"

export default function Problem() {
  const expertise = [
    {
      stat: "Technical Consulting & Structuring",
      description: "Effective engagement with state authorities to promote beneficial projects, pre-contract arrangements, and transfer of technologies (e.g. hubs in Ethiopia).",
      icon: Briefcase,
    },
    {
      stat: "Financing Support & Risk Management",
      description: "Provision of project financing, bank guarantees, letters of credit (LC), and engagements with local and development banks for significant infrastructure projects.",
      icon: Landmark,
    },
    {
      stat: "Official Business Missions",
      description: "Comprehensive support for business missions, organizing in-person, online, and hybrid protocol events, and facilitating expert-level negotiations.",
      icon: Handshake,
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Our Core Expertise</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Facilitating expansion into neighboring countries securely and efficiently.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group"
              >
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.stat}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
