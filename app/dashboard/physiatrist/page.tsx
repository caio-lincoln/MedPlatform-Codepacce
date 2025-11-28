"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Heart, Activity, TrendingUp, Clock, Target } from "lucide-react"

export default function PhysiatristDashboard() {
  return (
    <DashboardLayout title="Dashboard Fisiatra" specialty="Fisiatria">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-teal-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">198</h3>
          <p className="text-sm text-muted-foreground">Em Reabilitação</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-cyan-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">42</h3>
          <p className="text-sm text-muted-foreground">Sessões Hoje</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">88%</h3>
          <p className="text-sm text-muted-foreground">Meta de Recuperação</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">8.5</h3>
          <p className="text-sm text-muted-foreground">Semanas Média</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Progresso de Reabilitação</h2>
          <div className="space-y-4">
            {[
              { patient: "Marcos Silva", condition: "Pós-AVC", progress: 85, weeks: 12 },
              { patient: "Helena Costa", condition: "Lesão Medular", progress: 60, weeks: 8 },
              { patient: "Rafael Dias", condition: "Pós-Cirúrgico", progress: 95, weeks: 6 },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium">{item.patient}</p>
                    <p className="text-sm text-muted-foreground">{item.condition}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.weeks} semanas</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-bold">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Planos Ativos de Tratamento</h2>
          <div className="space-y-4">
            {[
              { patient: "Amanda Souza", plan: "Mobilidade e Força", sessions: "24/40" },
              { patient: "Bruno Oliveira", plan: "Controle Motor", sessions: "15/30" },
              { patient: "Cristina Melo", plan: "Dor Crônica", sessions: "30/35" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <p className="font-medium mb-2">{item.patient}</p>
                <p className="text-sm text-accent mb-2">{item.plan}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Sessões realizadas</span>
                  <span className="text-sm font-medium">{item.sessions}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
