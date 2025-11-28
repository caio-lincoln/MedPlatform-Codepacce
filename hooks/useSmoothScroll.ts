"use client"

import { useEffect } from "react"

export const useSmoothScroll = () => {
  useEffect(() => {
    // Implementação de smooth scroll customizado
    let scrollY = window.scrollY
    let targetY = scrollY

    const smoothScroll = () => {
      targetY = window.scrollY
      scrollY += (targetY - scrollY) * 0.1

      if (Math.abs(targetY - scrollY) > 0.5) {
        requestAnimationFrame(smoothScroll)
      }
    }

    const handleScroll = () => {
      requestAnimationFrame(smoothScroll)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
}
