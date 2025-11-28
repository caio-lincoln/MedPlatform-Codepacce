"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Zap, Activity, Clock, TrendingDown, AlertCircle } from "lucide-react"

export default function PainManagementDashboard() {
  return (
    <DashboardLayout title="Dashboard Gestão de Dor" specialty="Gestão de Dor">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-red-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">124</h3>
          <p className="text-sm text-muted-foreground">Pacientes em Tratamento</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">36</h3>
          <p className="text-sm text-muted-foreground">Bloqueios Agendados</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">6.2</h3>
          <p className="text-sm text-muted-foreground">Média de Dor (0-10)</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">-35%</h3>
          <p className="text-sm text-muted-foreground">Redução de Dor Média</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Escala de Dor - Últimas 24h</h2>
          <div className="space-y-4">
            {[
              { patient: "Roberto Silva", current: 7, previous: 8, trend: "down" },
              { patient: "Sandra Costa", current: 4, previous: 3, trend: "up" },
              { patient: "Eduardo Mendes", current: 5, previous: 7, trend: "down" },
              { patient: "Patricia Lima", current: 9, previous: 9, trend: "stable" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium">{item.patient}</p>
                  {item.current >= 8 && <AlertCircle className="w-5 h-5 text-red-500" />}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">Atual</span>
                      <span className="text-2xl font-bold">{item.current}/10</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          item.current <= 3 ? "bg-green-500" : item.current <= 6 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${item.current * 10}%` }}
                      />
                    </div>
                  </div>
                  {item.trend === "down" && <TrendingDown className="w-5 h-5 text-green-500" />}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Procedimentos da Semana</h2>
          <div className="space-y-4">
            {[
              { procedure: "Bloqueio Facetário", patient: "João Alves", date: "Segunda, 10:00" },
              { procedure: "Radiofrequência", patient: "Maria Santos", date: "Terça, 14:30" },
              { procedure: "Infiltração Epidural", patient: "Carlos Dias", date: "Quarta, 09:00" },
              { procedure: "Bloqueio de Gânglio", patient: "Ana Paula", date: "Quinta, 11:00" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <p className="font-medium text-accent mb-1">{item.procedure}</p>
                <p className="text-sm">{item.patient}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
