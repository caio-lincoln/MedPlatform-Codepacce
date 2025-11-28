"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Calendar, FileText, Activity, Clock, Pill, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PatientDashboard() {
  return (
    <DashboardLayout title="Meu Painel de Saúde">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">3</h3>
          <p className="text-sm text-muted-foreground">Consultas Agendadas</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">12</h3>
          <p className="text-sm text-muted-foreground">Exames Realizados</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Pill className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">4</h3>
          <p className="text-sm text-muted-foreground">Medicamentos Ativos</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Próximas Consultas
          </h2>
          <div className="space-y-4">
            {[
              { doctor: "Dr. João Silva", specialty: "Alergista", date: "Segunda, 10:00", location: "Consultório A" },
              {
                doctor: "Dra. Maria Costa",
                specialty: "Endocrinologista",
                date: "Quarta, 14:30",
                location: "Consultório B",
              },
              {
                doctor: "Dr. Carlos Mendes",
                specialty: "Ortopedista",
                date: "Sexta, 09:00",
                location: "Consultório C",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium">{item.doctor}</p>
                    <p className="text-sm text-muted-foreground">{item.specialty}</p>
                  </div>
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-accent">{item.date}</span>
                  <span className="text-xs text-muted-foreground">{item.location}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  Ver Detalhes
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Pill className="w-5 h-5 text-accent" />
            Medicamentos
          </h2>
          <div className="space-y-4">
            {[
              { name: "Metformina 500mg", schedule: "2x ao dia", time: "08:00 e 20:00" },
              { name: "Losartana 50mg", schedule: "1x ao dia", time: "08:00" },
              { name: "Sinvastatina 20mg", schedule: "1x ao dia", time: "22:00" },
              { name: "AAS 100mg", schedule: "1x ao dia", time: "08:00" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <p className="font-medium mb-2">{item.name}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.schedule}</span>
                  <span className="text-accent">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            Adicionar Medicamento
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-accent" />
            Sinais Vitais
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Pressão Arterial</span>
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-2xl font-bold">120/80 mmHg</p>
              <p className="text-xs text-muted-foreground mt-1">Última medição: Hoje, 08:30</p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Frequência Cardíaca</span>
                <Activity className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-2xl font-bold">72 bpm</p>
              <p className="text-xs text-muted-foreground mt-1">Última medição: Hoje, 08:30</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            Exames Recentes
          </h2>
          <div className="space-y-4">
            {[
              { name: "Hemograma Completo", date: "15/01/2025", status: "Disponível" },
              { name: "Glicemia em Jejum", date: "15/01/2025", status: "Disponível" },
              { name: "Colesterol Total", date: "15/01/2025", status: "Disponível" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.name}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">{item.status}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            Ver Todos os Exames
          </Button>
        </Card>
      </div>
    </DashboardLayout>
  )
}
