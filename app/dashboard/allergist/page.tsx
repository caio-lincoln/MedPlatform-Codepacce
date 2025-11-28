"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Activity, Users, Calendar, TrendingUp, TestTube, Syringe, AlertCircle, CheckCircle } from "lucide-react"

export default function AllergistDashboard() {
  return (
    <DashboardLayout title="Dashboard Alergista" specialty="Alergologia">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">248</h3>
          <p className="text-sm text-muted-foreground">Pacientes Ativos</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">18</h3>
          <p className="text-sm text-muted-foreground">Consultas Hoje</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <TestTube className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">32</h3>
          <p className="text-sm text-muted-foreground">Testes Pendentes</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">94%</h3>
          <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TestTube className="w-5 h-5 text-accent" />
            Testes Alérgicos Agendados
          </h2>
          <div className="space-y-4">
            {[
              { patient: "Ana Costa", test: "Teste de Alergia Alimentar", time: "09:00", status: "pending" },
              { patient: "Pedro Lima", test: "Teste Cutâneo", time: "10:30", status: "pending" },
              { patient: "Julia Santos", test: "Teste IgE Específico", time: "14:00", status: "completed" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {item.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                  )}
                  <div>
                    <p className="font-medium">{item.patient}</p>
                    <p className="text-sm text-muted-foreground">{item.test}</p>
                  </div>
                </div>
                <span className="text-sm font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Syringe className="w-5 h-5 text-accent" />
            Imunoterapia em Andamento
          </h2>
          <div className="space-y-4">
            {[
              { patient: "Carlos Mendes", progress: 75, sessions: "15/20" },
              { patient: "Beatriz Silva", progress: 45, sessions: "9/20" },
              { patient: "Roberto Alves", progress: 90, sessions: "18/20" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium">{item.patient}</p>
                  <span className="text-sm text-muted-foreground">{item.sessions}</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{item.progress}% completo</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
