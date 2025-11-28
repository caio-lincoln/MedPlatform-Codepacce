"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { specialties } from "@/lib/specialties"
import Link from "next/link"
import { ArrowLeft, UserPlus } from "lucide-react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<"doctor" | "patient" | "admin">("doctor")
  const [specialty, setSpecialty] = useState("")
  const [loading, setLoading] = useState(false)
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const success = await register(name, email, password, role, role === "doctor" ? (specialty as any) : undefined)

      if (success) {
        // Redirecionar baseado no papel
        if (role === "doctor" && specialty) {
          router.push(`/dashboard/${specialty}`)
        } else if (role === "patient") {
          router.push("/dashboard/paciente")
        } else if (role === "admin") {
          router.push("/dashboard/admin")
        }
      }
    } catch (error) {
      console.error("Erro no registro:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>
        </div>

        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Criar Conta</h1>
            <p className="text-muted-foreground">Preencha os dados para começar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. João Silva"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="joao@exemplo.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <Label htmlFor="role">Tipo de Conta</Label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full p-2 rounded-md border border-input bg-background"
              >
                <option value="doctor">Médico</option>
                <option value="patient">Paciente</option>
                <option value="admin">Administrador</option>
              </select>
            </div>

            {role === "doctor" && (
              <div>
                <Label htmlFor="specialty">Especialidade</Label>
                <select
                  id="specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full p-2 rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Selecione sua especialidade</option>
                  {specialties.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Criando conta..." : "Criar Conta"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-accent hover:underline">
                Fazer login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
