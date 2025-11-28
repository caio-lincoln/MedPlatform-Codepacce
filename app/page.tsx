"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Specialties from "@/components/Specialties"
import SpecialtyShowcase from "@/components/SpecialtyShowcase"
import ComparisonTable from "@/components/ComparisonTable"
import Footer from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      // Animar todos os elementos com classe .fade-in
      const fadeElements = document.querySelectorAll(".fade-in")

      fadeElements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }

    initGSAP()
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Specialties />
        <SpecialtyShowcase />
        <ComparisonTable />
        <Footer />
      </main>
    </>
  )
}
