"use client"

import { SearchCode, FileSignature, Users, CheckCircle } from "lucide-react"

export default function UseCases() {
  const steps = [
    { icon: SearchCode, title: "#1 Project Scoping", description: "Project scoping and preliminary analysis to identify viable opportunities." },
    { icon: FileSignature, title: "#2 Agency Agreement", description: "Negotiation of agency agreement (incl. NDA, LOI) based on agreed scope of work." },
    { icon: Users, title: "#3 Operational Interaction", description: "Maintaining interaction between interested parties considering cultural specifics." },
    { icon: CheckCircle, title: "#4 Successful Completion", description: "Receiving agreed succession fee upon completion of intermediate/entire project." },
  ]

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-balance neon-text-glow">How We Work</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">A structured process ensuring mutual success</p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-4 gap-0 border border-primary/20 rounded-lg overflow-hidden">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="p-8 glassmorphism transition group text-center border-b md:border-r last:border-0 md:last:border-r-0 border-primary/20 hover:bg-primary/5"
              >
                <Icon className="w-12 h-12 text-accent group-hover:text-primary transition mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
