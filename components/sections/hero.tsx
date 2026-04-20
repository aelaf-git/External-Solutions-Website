"use client"

import { Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-background">
      {/* Decorative glow orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-20 max-w-7xl mx-auto w-full text-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Decorative tag */}
          <div className="inline-flex items-center gap-2 text-accent/80 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">Your Gateway to African Markets</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-semibold text-balance leading-tight">
            <span className="text-foreground">External Solutions </span>
            <span className="text-primary">LLC</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            We specialize in helping manufacturing, high-tech, and pharma companies expand their sales markets and develop strategic cooperation with African nations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-8 "
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="border-2 border-accent bg-transparent rounded-full px-8 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg cursor-pointer"
            >
              Our Expertise
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-16 flex gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Ethiopia</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Nigeria</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Mauritius</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Senegal</div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Cameroon</div>
          </div>
        </div>
      </div>
    </section>
  )
}
