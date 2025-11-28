"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do título fade-in de baixo
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 },
      )

      // Animação do subtítulo
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 },
      )

      // Animação dos botões
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 },
      )

      // Animação do modelo 3D (scale)
      gsap.fromTo(
        modelRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 },
      )

      // Animação contínua de flutuação
      gsap.to(modelRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Plataforma Premium para Médicos</span>
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              A plataforma completa para{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                sua prática médica
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty"
            >
              Dashboards personalizados para cada especialidade médica. Gerencie pacientes, agende consultas e acompanhe
              resultados em uma única plataforma intuitiva.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/registro">
                  Começar Agora
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/login">Fazer Login</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold">2.5k+</div>
                <div className="text-sm text-muted-foreground">Médicos Ativos</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50k+</div>
                <div className="text-sm text-muted-foreground">Pacientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Modelo 3D Placeholder */}
          <div ref={modelRef} className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-accent/20">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-primary animate-pulse" />
                <p className="text-muted-foreground">Modelo 3D Interativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}
