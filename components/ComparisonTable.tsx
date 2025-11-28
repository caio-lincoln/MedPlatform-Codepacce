"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check, X } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    name: "Agendamento de Consultas",
    allergist: true,
    endocrinologist: true,
    painManagement: true,
    orthopedist: true,
    physiatrist: true,
    physiotherapist: true,
  },
  {
    name: "Prontuário Eletrônico",
    allergist: true,
    endocrinologist: true,
    painManagement: true,
    orthopedist: true,
    physiatrist: true,
    physiotherapist: true,
  },
  {
    name: "Testes Diagnósticos",
    allergist: true,
    endocrinologist: true,
    painManagement: false,
    orthopedist: true,
    physiatrist: false,
    physiotherapist: false,
  },
  {
    name: "Gestão de Medicamentos",
    allergist: true,
    endocrinologist: true,
    painManagement: true,
    orthopedist: true,
    physiatrist: true,
    physiotherapist: false,
  },
  {
    name: "Planos de Reabilitação",
    allergist: false,
    endocrinologist: false,
    painManagement: true,
    orthopedist: true,
    physiatrist: true,
    physiotherapist: true,
  },
  {
    name: "Análise de Imagens",
    allergist: false,
    endocrinologist: false,
    painManagement: true,
    orthopedist: true,
    physiatrist: true,
    physiotherapist: false,
  },
]

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          },
        },
      )

      // Animação sequencial das linhas da tabela
      gsap.fromTo(
        ".table-row",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".comparison-table",
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Compare Funcionalidades por{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Especialidade</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada especialidade possui ferramentas específicas adaptadas às suas necessidades
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="comparison-table w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 font-bold">Funcionalidade</th>
                <th className="text-center p-4 font-bold">Alergista</th>
                <th className="text-center p-4 font-bold">Endocrino</th>
                <th className="text-center p-4 font-bold">Dor</th>
                <th className="text-center p-4 font-bold">Ortopedia</th>
                <th className="text-center p-4 font-bold">Fisiatra</th>
                <th className="text-center p-4 font-bold">Fisio</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="table-row border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="text-center p-4">
                    {feature.allergist ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.endocrinologist ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.painManagement ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.orthopedist ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.physiatrist ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="text-center p-4">
                    {feature.physiotherapist ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto opacity-30" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
