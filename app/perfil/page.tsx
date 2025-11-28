"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, MapPin, Briefcase, Calendar } from "lucide-react"

export default function PerfilPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) return null

  return (
    <DashboardLayout title="Meu Perfil" specialty={user.role === "doctor" ? user.specialty : undefined}>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1 fade-in">
          <CardHeader>
            <CardTitle>Foto do Perfil</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-white" />
            </div>
            <p className="text-xl font-bold">{user.name}</p>
            <p className="text-sm text-muted-foreground capitalize">{user.role}</p>
            {user.specialty && <p className="text-sm text-accent mt-1 capitalize">{user.specialty}</p>}
          </CardContent>
        </Card>

        <Card className="md:col-span-2 fade-in">
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>Gerencie suas informações de perfil</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="name" placeholder="Seu nome" className="pl-10" defaultValue={user.name} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10"
                    defaultValue={user.email}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="phone" placeholder="(00) 00000-0000" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Localização</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="location" placeholder="Cidade, Estado" className="pl-10" />
                </div>
              </div>

              {user.role === "doctor" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Especialidade</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="specialty" className="pl-10 capitalize" defaultValue={user.specialty} readOnly />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crm">CRM</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="crm" placeholder="000000" className="pl-10" />
                    </div>
                  </div>
                </>
              )}
            </div>

            <Button className="w-full md:w-auto">Salvar Alterações</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
