"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutDashboard, Users, User } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function MobileBottomNav() {
  const pathname = usePathname()
  const { user } = useAuth()

  // Não mostrar bottom nav em páginas de login/registro ou na landing page para não autenticados
  if (!user || pathname === "/login" || pathname === "/registro") {
    return null
  }

  const navItems = [
    {
      label: "Início",
      href: "/",
      icon: Home,
    },
    {
      label: "Dashboard",
      href:
        user.role === "doctor" && user.specialty
          ? `/dashboard/${user.specialty}`
          : user.role === "patient"
            ? "/dashboard/paciente"
            : "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Pacientes",
      href: "/pacientes",
      icon: Users,
    },
    {
      label: "Perfil",
      href: "/perfil",
      icon: User,
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                isActive ? "text-cyan-500" : "text-gray-600 active:text-cyan-400"
              }`}
            >
              <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
