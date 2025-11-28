"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Navbar"

gsap.registerPlugin(ScrollTrigger)

export default function ContatoPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".contact-hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Staggered form field animations
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      })

      // Contact info cards slide from sides
      gsap.from(".contact-info-left", {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".contact-info-right", {
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Parallax background
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        ease: "none",
      })
    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@medplatform.com.br",
      side: "left",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 9999-9999",
      side: "right",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Av. Paulista, 1000 - São Paulo, SP",
      side: "left",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg-Sex: 8h às 18h",
      side: "right",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      {/* Animated background */}
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 -z-10" />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="contact-hero-title text-5xl md:text-7xl font-bold text-zinc-900 mb-6">
            Vamos{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              conversar?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
            Estamos aqui para responder suas dúvidas e ajudar você a transformar sua prática médica
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section ref={contactInfoRef} className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <div
                key={idx}
                className={`contact-info-${info.side} bg-white rounded-2xl p-6 border-2 border-zinc-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 hover:scale-105`}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-zinc-900 mb-2">{info.title}</h3>
                <p className="text-zinc-600">{info.value}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-zinc-200 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center">Envie sua mensagem</h2>
            <p className="text-zinc-600 text-center mb-8">
              Preencha o formulário abaixo e entraremos em contato em até 24 horas
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Nome completo</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. João Silva"
                  className="h-12 border-2 border-zinc-200 focus:border-cyan-500 transition-colors"
                  required
                />
              </div>

              <div className="form-field grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="joao@email.com"
                    className="h-12 border-2 border-zinc-200 focus:border-cyan-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-2">Telefone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="h-12 border-2 border-zinc-200 focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Mensagem</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Como podemos ajudar você?"
                  rows={6}
                  className="border-2 border-zinc-200 focus:border-cyan-500 transition-colors resize-none"
                  required
                />
              </div>

              <div className="form-field">
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
