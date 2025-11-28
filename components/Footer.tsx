"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const newsletterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        },
      )

      gsap.fromTo(
        newsletterRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 85%",
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const handleSocialHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      rotate: 360,
      duration: 0.4,
      ease: "back.out",
    })
  }

  const handleSocialLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "back.out",
    })
  }

  return (
    <footer ref={footerRef} className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div ref={contentRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4">MedPlatform</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A plataforma completa para gestão médica moderna e eficiente.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent transition-colors cursor-pointer">Alergista</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Endocrinologista</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Gestão de Dor</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Ortopedista</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent transition-colors cursor-pointer">Sobre Nós</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Carreiras</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-accent transition-colors cursor-pointer">Central de Ajuda</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Documentação</li>
              <li className="hover:text-accent transition-colors cursor-pointer">API</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Status</li>
            </ul>
          </div>
        </div>

        <div ref={newsletterRef} className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <Mail className="w-8 h-8 mx-auto text-accent" />
            <h4 className="font-semibold text-lg">Fique por dentro das novidades</h4>
            <p className="text-sm text-muted-foreground">
              Receba atualizações sobre novos recursos e melhores práticas
            </p>
            <div className="flex gap-2">
              <Input placeholder="seu@email.com" type="email" />
              <Button>Assinar</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 MedPlatform. Todos os direitos reservados.</p>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>
              <Facebook className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>
              <Instagram className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
