"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

gsap.registerPlugin(ScrollTrigger)

export default function PrecosPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - fade from bottom
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      })

      // Pricing cards staggered slide-in
      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    })

    return () => ctx.revert()
  }, [])

  const plans = [
    {
      name: "Básico",
      price: "R$ 149",
      period: "/mês",
      icon: Zap,
      features: [
        "Até 50 pacientes",
        "Dashboard básico",
        "Agendamento online",
        "Suporte por email",
        "Relatórios mensais",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 299",
      period: "/mês",
      icon: Crown,
      features: [
        "Pacientes ilimitados",
        "Dashboard avançado",
        "Agendamento inteligente",
        "Suporte prioritário 24/7",
        "Relatórios personalizados",
        "Integração com laboratórios",
        "Prescrição digital",
        "Telemedicina integrada",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      icon: Sparkles,
      features: [
        "Tudo do Profissional",
        "Multi-clínicas",
        "API dedicada",
        "Gerente de conta dedicado",
        "Treinamento personalizado",
        "Customização completa",
      ],
      gradient: "from-orange-500 to-red-500",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-zinc-900 mb-6">
            Planos que{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              crescem com você
            </span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua especialidade e transforme a gestão da sua prática médica
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={cardsRef} className="pb-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div key={plan.name} className={`pricing-card relative group ${plan.popular ? "md:scale-110 z-10" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </div>
                )}

                <div
                  className={`h-full bg-white rounded-2xl border-2 p-8 transition-all duration-500 ${
                    plan.popular
                      ? "border-purple-500 shadow-2xl shadow-purple-500/20"
                      : "border-zinc-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10"
                  } hover:scale-105 group-hover:border-opacity-100`}
                >
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-zinc-900">{plan.price}</span>
                    {plan.period && <span className="text-zinc-600 ml-2">{plan.period}</span>}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Começar agora
                  </Button>
                </div>

                {/* Glow effect on hover */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zinc-900 to-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ainda tem dúvidas?</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano
          </p>
          <Link href="/contato">
            <Button className="bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300">
              Falar com um especialista
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
