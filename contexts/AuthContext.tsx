"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type UserRole = "doctor" | "patient" | "admin"

type Specialty = "allergist" | "endocrinologist" | "pain-management" | "orthopedist" | "physiatrist" | "physiotherapist"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  specialty?: Specialty
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, role: UserRole, specialty?: Specialty) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock database
const mockUsers: User[] = [
  {
    id: "1",
    name: "Dr. João Silva",
    email: "joao@exemplo.com",
    role: "doctor",
    specialty: "allergist",
  },
  {
    id: "2",
    name: "Maria Santos",
    email: "maria@exemplo.com",
    role: "patient",
  },
  {
    id: "3",
    name: "Admin Sistema",
    email: "admin@exemplo.com",
    role: "admin",
  },
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulação de login
    const foundUser = mockUsers.find((u) => u.email === email)

    if (foundUser) {
      setUser(foundUser)
      setIsAuthenticated(true)
      localStorage.setItem("user", JSON.stringify(foundUser))
      return true
    }

    return false
  }

  const register = async (
    name: string,
    email: string,
    password: string,
    role: UserRole,
    specialty?: Specialty,
  ): Promise<boolean> => {
    // Simulação de registro
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role,
      specialty: role === "doctor" ? specialty : undefined,
    }

    mockUsers.push(newUser)
    setUser(newUser)
    setIsAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}
