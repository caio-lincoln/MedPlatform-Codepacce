"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { specialties } from "@/lib/specialties"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function SpecialtyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll(".specialty-card")

    const totalScrollWidth = cardsRef.current.scrollWidth - window.innerWidth

    const scrollTween = gsap.to(cardsRef.current, {
      x: () => -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    // Animação individual dos cards com parallax
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0.7,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: "left 90%",
            end: "left 30%",
            scrub: true,
          },
        },
      )

      // Parallax nas imagens
      const image = card.querySelector(".card-image")
      if (image) {
        gsap.fromTo(
          image,
          {
            scale: 1.1,
          },
          {
            scale: 1.3,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 container mx-auto px-4 pt-20 pb-12 pointer-events-none">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore as{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Especialidades
            </span>
          </h2>
          <p className="text-xl text-zinc-400">Role para descobrir cada mundo médico</p>
        </div>
      </div>

      <div ref={cardsRef} className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-8 px-8">
        {specialties.map((specialty) => {
          const Icon = specialty.icon
          return (
            <div
              key={specialty.id}
              className="specialty-card flex-shrink-0 w-[380px] md:w-[420px] h-[550px] group cursor-pointer"
            >
              <Link href={`/dashboard/${specialty.id}`}>
                <div className="relative h-full rounded-3xl overflow-hidden border-2 border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 bg-zinc-900">
                  {/* Background com gradiente */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Imagem placeholder com parallax */}
                  <div className="card-image absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-zinc-700 group-hover:text-cyan-500/30 transition-all duration-500" />
                    </div>
                    <div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </div>

                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-3">{specialty.name}</h3>
                      <p className="text-zinc-300 mb-4 line-clamp-2">{specialty.description}</p>
                      <ul className="space-y-2 mb-6">
                        {specialty.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-zinc-400">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                        Acessar Dashboard
                      </button>
                    </div>
                  </div>

                  {/* Card info básico (sempre visível) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                    <Icon className="w-10 h-10 text-cyan-400 mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-2">{specialty.name}</h3>
                    <p className="text-zinc-400 text-sm line-clamp-2">{specialty.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-zinc-500 pointer-events-none z-10">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
        <span className="text-sm font-medium">Arraste para navegar</span>
      </div>
    </section>
  )
}
