"use client"

import { useState } from "react"
import { specialties } from "@/lib/specialties"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function SpecialtyShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < specialties.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex

    if (diff === 0) {
      // Card central (ativo)
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
      }
    } else if (diff === -1) {
      // Card anterior (esquerda)
      return {
        transform: "translateX(-40%) scale(0.85)",
        opacity: 0.5,
        zIndex: 20,
        pointerEvents: "none" as const,
      }
    } else if (diff === 1) {
      // Card próximo (direita)
      return {
        transform: "translateX(40%) scale(0.85)",
        opacity: 0.5,
        zIndex: 20,
        pointerEvents: "none" as const,
      }
    } else {
      // Cards fora da visão
      return {
        transform: diff < 0 ? "translateX(-60%) scale(0.7)" : "translateX(60%) scale(0.7)",
        opacity: 0,
        zIndex: 10,
        pointerEvents: "none" as const,
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-zinc-900 py-12 flex flex-col items-center justify-center overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 mb-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Explore as{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Especialidades
            </span>
          </h2>
          <p className="text-lg text-zinc-400">Use os botões para navegar entre as especialidades médicas</p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 h-[420px] md:h-[480px] flex items-center justify-center">
        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md h-full">
          {specialties.map((specialty, index) => {
            const cardStyle = getCardStyle(index)
            const Icon = specialty.icon
            const isActive = index === currentIndex

            return (
              <div
                key={specialty.id}
                className="absolute inset-0 transition-all duration-700 ease-in-out"
                style={{
                  transform: cardStyle.transform,
                  opacity: cardStyle.opacity,
                  zIndex: cardStyle.zIndex,
                  pointerEvents: cardStyle.pointerEvents,
                }}
              >
                <Link href={`/dashboard/${specialty.id}`} className={!isActive ? "pointer-events-none" : ""}>
                  <div className="relative h-full group cursor-pointer">
                    <div className="relative h-full rounded-2xl overflow-hidden border-2 border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 bg-zinc-900 shadow-2xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      <div className="card-image absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-24 h-24 md:w-28 md:h-28 text-zinc-700 group-hover:text-cyan-500/30 transition-all duration-500" />
                        </div>
                        <div
                          className="absolute inset-0 opacity-5"
                          style={{
                            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                            backgroundSize: "32px 32px",
                          }}
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Icon className="w-10 h-10 text-cyan-400 mb-3" />
                          <h3 className="text-2xl font-bold text-white mb-2">{specialty.name}</h3>
                          <p className="text-zinc-300 text-sm mb-3 line-clamp-2">{specialty.description}</p>
                          <ul className="space-y-1.5 mb-4">
                            {specialty.features.slice(0, 3).map((feature) => (
                              <li key={feature} className="flex items-center text-xs text-zinc-400">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm rounded-full font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                            Acessar Dashboard
                          </button>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                        <Icon className="w-8 h-8 text-cyan-400 mb-2" />
                        <h3 className="text-xl font-bold text-white mb-1.5">{specialty.name}</h3>
                        <p className="text-zinc-400 text-xs line-clamp-2">{specialty.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-6 w-full max-w-xs md:max-w-sm lg:max-w-md px-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 disabled:bg-zinc-800/50 disabled:cursor-not-allowed disabled:opacity-40 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center gap-2">
          {specialties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-cyan-500" : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label={`Ir para ${specialties[index].name}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentIndex === specialties.length - 1}
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-zinc-800/50 disabled:to-zinc-800/50 disabled:cursor-not-allowed disabled:opacity-40 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 group"
        >
          <span className="hidden sm:inline">Próximo</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="relative z-10 text-center mt-4">
        <span className="text-zinc-500 text-xs font-medium">
          {currentIndex + 1} de {specialties.length} especialidades
        </span>
      </div>
    </section>
  )
}
