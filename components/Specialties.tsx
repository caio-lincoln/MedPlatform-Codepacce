"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { specialties } from "@/lib/specialties"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animação staggered dos cards
      gsap.fromTo(
        ".specialty-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Dashboards Especializados para{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Cada Especialidade
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ferramentas personalizadas que se adaptam às necessidades específicas da sua área de atuação médica
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon
            return (
              <Link key={specialty.id} href={`/dashboard/${specialty.id}`}>
                <Card className="specialty-card relative p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-accent/50 glow-effect">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${specialty.color} opacity-10 rounded-bl-[100px] transition-opacity group-hover:opacity-20`}
                  />

                  <div className="relative space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.color} flex items-center justify-center text-white transform transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {specialty.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{specialty.description}</p>
                    </div>

                    <div className="space-y-2">
                      {specialty.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-accent font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explorar Dashboard
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
