"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Brain, Shield, Zap, Users, BarChart3, Sparkles, Heart, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

gsap.registerPlugin(ScrollTrigger)

export default function NossoDiferencialPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const advantages = [
    {
      icon: Brain,
      title: "IA Integrada",
      description:
        "Algoritmos de inteligência artificial para auxiliar no diagnóstico e sugestão de tratamentos personalizados",
      details: [
        "Machine Learning avançado",
        "Análise preditiva de dados",
        "Sugestões baseadas em milhares de casos",
        "Atualização contínua do modelo",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Certificação HIPAA e LGPD com criptografia de ponta a ponta para proteger dados sensíveis dos pacientes",
      details: [
        "Criptografia AES-256",
        "Autenticação multifator",
        "Auditoria completa de acessos",
        "Backup automático seguro",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Performance Extrema",
      description: "Carregamento instantâneo e sincronização em tempo real entre todos os dispositivos",
      details: ["CDN global distribuído", "Cache inteligente", "Otimização automática", "99.9% de uptime garantido"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Colaboração em Equipe",
      description: "Trabalhe com sua equipe médica em tempo real, compartilhe casos e tome decisões conjuntas",
      details: [
        "Chat integrado em tempo real",
        "Compartilhamento de prontuários",
        "Videoconferência integrada",
        "Notificações inteligentes",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboards personalizados com insights profundos sobre seu desempenho e satisfação dos pacientes",
      details: ["Relatórios customizáveis", "KPIs em tempo real", "Análise de tendências", "Exportação para Excel/PDF"],
      color: "from-red-500 to-rose-500",
    },
    {
      icon: Sparkles,
      title: "Interface Intuitiva",
      description: "Design premium e moderno que torna a gestão da sua clínica mais agradável e produtiva",
      details: ["Design responsivo", "Modo escuro/claro", "Atalhos de teclado", "Personalização completa"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Telemedicina",
      description: "Consultas por vídeo integradas com prontuário eletrônico e prescrição digital",
      details: [
        "Vídeo HD com baixa latência",
        "Gravação de consultas",
        "Prescrição digital assinada",
        "Agendamento automatizado",
      ],
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível a qualquer momento para ajudar você e seus pacientes",
      details: [
        "Chat ao vivo 24 horas",
        "Telefone dedicado",
        "Base de conhecimento completa",
        "Treinamento personalizado",
      ],
      color: "from-cyan-500 to-teal-500",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleChars = document.querySelectorAll(".char")
      gsap.from(titleChars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
      })

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (sliderRef.current) {
      const activeCard = sliderRef.current.querySelector(".active-card")
      if (activeCard) {
        gsap.fromTo(
          activeCard,
          {
            filter: "blur(20px)",
            opacity: 0.3,
            scale: 0.9,
            rotateY: -90,
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "power3.out",
          },
        )
      }
    }
    setIsFlipped(false)
  }, [currentIndex])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setMousePosition({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  const splitText = (text: string) => {
    return text.split("").map((char, idx) => (
      <span key={idx} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % advantages.length)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + advantages.length) % advantages.length)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const currentAdvantage = advantages[currentIndex]
  const Icon = currentAdvantage.icon

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 perspective-1000">
            {splitText("Nosso Diferencial")}
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto">
            Tecnologia de ponta aliada à experiência médica para revolucionar sua prática
          </p>
        </div>
      </section>

      <section ref={sliderRef} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Card Container with Glassmorphism */}
          <div className="relative min-h-[500px] flex items-center justify-center perspective-1000">
            <div className="active-card relative w-full max-w-2xl" style={{ perspective: "1000px" }}>
              <div
                ref={cardRef}
                onClick={handleCardClick}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transform: `
                    rotateX(${mousePosition.x}deg) 
                    rotateY(${mousePosition.y}deg)
                    rotateY(${isFlipped ? 180 : 0}deg)
                  `,
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* Front Face */}
                <div
                  className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentAdvantage.color} opacity-10`} />

                  <div
                    className={`absolute bg-gradient-to-br ${currentAdvantage.color} opacity-30 blur-3xl transition-all duration-300`}
                    style={{
                      width: "200px",
                      height: "200px",
                      left: `${50 + mousePosition.y * 2}%`,
                      top: `${50 + mousePosition.x * 2}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon with hover animation */}
                    <div
                      className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${currentAdvantage.color} mb-8 shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12`}
                    >
                      <Icon className="w-16 h-16 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">{currentAdvantage.title}</h3>

                    {/* Description */}
                    <p className="text-xl text-zinc-300 leading-relaxed max-w-xl mx-auto mb-6">
                      {currentAdvantage.description}
                    </p>

                    <p className="text-sm text-cyan-400 animate-pulse">Clique para ver mais detalhes</p>
                  </div>

                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                <div
                  className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(20px)",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentAdvantage.color} opacity-20`} />

                  <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <h4 className="text-3xl font-bold text-white mb-8">Recursos Inclusos</h4>

                    <ul className="space-y-4 w-full max-w-md">
                      {currentAdvantage.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transform hover:scale-105 transition-all duration-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentAdvantage.color}`} />
                          <span className="text-lg text-white">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-cyan-400 mt-8 animate-pulse">Clique novamente para voltar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full p-4 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-20"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {advantages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentIndex(idx)
                    setTimeout(() => setIsAnimating(false), 800)
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-12 bg-cyan-400" : "w-2 bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-zinc-400 text-lg">
              {currentIndex + 1} / {advantages.length}
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Pronto para revolucionar sua prática?
          </h2>
          <p className="text-xl text-white/90 mb-8 relative z-10">
            Junte-se a milhares de médicos que já transformaram a forma como trabalham
          </p>
          <Link href="/registro">
            <Button className="bg-white text-cyan-600 hover:bg-zinc-100 px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300 relative z-10">
              Começar gratuitamente
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
