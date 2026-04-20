"use client"

import { Building, Shield, Truck, Landmark, Puzzle } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Building,
      title: "Operational & Financial Infrastructure",
      description: "Establishment and ongoing operations of management structures and settlement mechanisms in various jurisdictions to minimize risks.",
    },
    {
      icon: Shield,
      title: "Asset Protection & Structuring",
      description: "Structuring and administration of closed-end funds (CEF) and closed trusts for asset preservation and UBO confidentiality.",
    },
    {
      icon: Truck,
      title: "Trade & Logistics Support",
      description: "Contract negotiation, payment arrangements, and logistics for machinery, medical equipment, construction materials, and telecom.",
    },
    {
      icon: Landmark,
      title: "Banking & Guarantees",
      description: "Consideration and issuance of bank guarantees to ensure transaction security and fulfillment.",
    },
    {
      icon: Puzzle,
      title: "Tailored Solutions",
      description: "Custom-tailored financial and legal solutions designed carefully for every sophisticated request.",
    },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">Key Competencies & Solutions</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Adding value through specialized financial, legal, and logistical support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-8 rounded-xl glassmorphism glow-border hover:border-accent transition group">
                <Icon className="w-10 h-10 text-primary group-hover:text-accent transition mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
