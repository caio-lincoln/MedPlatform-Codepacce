"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Activity, Users, TrendingUp, Dumbbell, Calendar } from "lucide-react"

export default function PhysiotherapistDashboard() {
  return (
    <DashboardLayout title="Dashboard Fisioterapeuta" specialty="Fisioterapia">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-indigo-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">276</h3>
          <p className="text-sm text-muted-foreground">Pacientes Ativos</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">28</h3>
          <p className="text-sm text-muted-foreground">Sessões Hoje</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">156</h3>
          <p className="text-sm text-muted-foreground">Exercícios Prescritos</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">91%</h3>
          <p className="text-sm text-muted-foreground">Satisfação</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Sessões de Hoje
          </h2>
          <div className="space-y-4">
            {[
              { patient: "Laura Santos", time: "08:00", type: "RPG", duration: "60 min" },
              { patient: "Thiago Alves", time: "09:30", type: "Massoterapia", duration: "45 min" },
              { patient: "Isabela Costa", time: "11:00", type: "Pilates", duration: "60 min" },
              { patient: "Felipe Rocha", time: "14:00", type: "Hidroterapia", duration: "50 min" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.patient}</p>
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent">{item.type}</span>
                  <span className="text-xs text-muted-foreground">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-accent" />
            Protocolos de Exercícios
          </h2>
          <div className="space-y-4">
            {[
              { patient: "Gustavo Lima", protocol: "Fortalecimento Lombar", adherence: 85 },
              { patient: "Camila Dias", protocol: "Mobilidade de Ombro", adherence: 92 },
              { patient: "Diego Mendes", protocol: "Recuperação de Joelho", adherence: 78 },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium">{item.patient}</p>
                    <p className="text-sm text-muted-foreground">{item.protocol}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Adesão ao Tratamento</span>
                    <span className="text-sm font-bold">{item.adherence}%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        item.adherence >= 90 ? "bg-green-500" : item.adherence >= 75 ? "bg-blue-500" : "bg-orange-500"
                      }`}
                      style={{ width: `${item.adherence}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
