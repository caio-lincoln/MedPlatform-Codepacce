"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Bone, Activity, TrendingUp, Scissors, ImageIcon } from "lucide-react"

export default function OrthopedistDashboard() {
  return (
    <DashboardLayout title="Dashboard Ortopedista" specialty="Ortopedia">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Bone className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">342</h3>
          <p className="text-sm text-muted-foreground">Pacientes Ativos</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Scissors className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">8</h3>
          <p className="text-sm text-muted-foreground">Cirurgias Esta Semana</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">45</h3>
          <p className="text-sm text-muted-foreground">Exames Pendentes</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-orange-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">96%</h3>
          <p className="text-sm text-muted-foreground">Taxa de Recuperação</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Scissors className="w-5 h-5 text-accent" />
            Cirurgias Agendadas
          </h2>
          <div className="space-y-4">
            {[
              {
                patient: "Ricardo Pereira",
                procedure: "Artroplastia de Joelho",
                date: "Segunda, 08:00",
                status: "confirmed",
              },
              {
                patient: "Fernanda Lima",
                procedure: "Artroscopia de Ombro",
                date: "Terça, 10:00",
                status: "confirmed",
              },
              { patient: "Gabriel Costa", procedure: "Fixação de Fratura", date: "Quarta, 14:00", status: "pending" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.patient}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.status === "confirmed"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-orange-500/10 text-orange-500"
                    }`}
                  >
                    {item.status === "confirmed" ? "Confirmado" : "Pendente"}
                  </span>
                </div>
                <p className="text-sm text-accent">{item.procedure}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-accent" />
            Imagens para Análise
          </h2>
          <div className="space-y-4">
            {[
              { patient: "Lucas Martins", type: "Raio-X Joelho", priority: "high" },
              { patient: "Julia Oliveira", type: "Ressonância Ombro", priority: "medium" },
              { patient: "Pedro Santos", type: "Tomografia Coluna", priority: "high" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.patient}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.priority === "high" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"
                    }`}
                  >
                    {item.priority === "high" ? "Urgente" : "Normal"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.type}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
