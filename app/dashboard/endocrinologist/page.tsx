"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Brain, Activity, Droplet, Heart, TrendingUp, AlertTriangle } from "lucide-react"

export default function EndocrinologistDashboard() {
  return (
    <DashboardLayout title="Dashboard Endocrinologista" specialty="Endocrinologia">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Droplet className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">156</h3>
          <p className="text-sm text-muted-foreground">Pacientes Diabéticos</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-pink-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">89</h3>
          <p className="text-sm text-muted-foreground">Casos de Tireoide</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">92%</h3>
          <p className="text-sm text-muted-foreground">Controle Glicêmico</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">24</h3>
          <p className="text-sm text-muted-foreground">Exames Hoje</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Monitoramento Glicêmico</h2>
          <div className="space-y-4">
            {[
              { patient: "José Silva", level: 145, target: "< 140", status: "warning" },
              { patient: "Maria Oliveira", level: 98, target: "< 140", status: "good" },
              { patient: "Antonio Costa", level: 178, target: "< 140", status: "alert" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.patient}</p>
                  {item.status === "alert" && <AlertTriangle className="w-5 h-5 text-red-500" />}
                  {item.status === "warning" && <AlertTriangle className="w-5 h-5 text-orange-500" />}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{item.level} mg/dL</span>
                  <span className="text-sm text-muted-foreground">Meta: {item.target}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Próximos Ajustes de Medicação</h2>
          <div className="space-y-4">
            {[
              { patient: "Carlos Mendes", medication: "Metformina", adjustment: "Aumentar dosagem", date: "Amanhã" },
              { patient: "Luciana Souza", medication: "Levotiroxina", adjustment: "Reduzir dosagem", date: "3 dias" },
              { patient: "Fernando Dias", medication: "Insulina", adjustment: "Revisar plano", date: "1 semana" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.patient}</p>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.medication}</p>
                <p className="text-sm text-accent mt-1">{item.adjustment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
