import Hero from "@/components/sections/hero"
import Expertise from "@/components/sections/expertise"
import Competencies from "@/components/sections/competencies"
import HowWeWork from "@/components/sections/how-we-work"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pt-20">
        <Hero />
        <Expertise />
        <Competencies />
        <HowWeWork />
        <Footer />
       </div>
    </main>
  )
}
