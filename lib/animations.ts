import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = (element: string | HTMLElement, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    },
  )
}

export const staggerCards = (container: string, items: string, stagger = 0.1) => {
  gsap.fromTo(
    `${container} ${items}`,
    { opacity: 0, y: 50, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    },
  )
}

export const parallaxEffect = (element: string, yPercent = -20) => {
  gsap.to(element, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
}

export const fadeInSequential = (container: string, items: string) => {
  gsap.fromTo(
    `${container} ${items}`,
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    },
  )
}

export const scaleOnHover = (element: HTMLElement) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" })
  })

  element.addEventListener("mouseleave", () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" })
  })
}
