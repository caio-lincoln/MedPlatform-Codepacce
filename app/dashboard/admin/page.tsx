"use client"

import DashboardLayout from "@/components/DashboardLayout"
import { Card } from "@/components/ui/card"
import { Users, Activity, TrendingUp, DollarSign, UserCheck, AlertCircle, BarChart, Settings } from "lucide-react"

export default function AdminDashboard() {
  return (
    <DashboardLayout title="Painel Administrativo">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">2,547</h3>
          <p className="text-sm text-muted-foreground">Total de Usuários</p>
          <p className="text-xs text-green-500 mt-2">+12% este mês</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-purple-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">342</h3>
          <p className="text-sm text-muted-foreground">Médicos Ativos</p>
          <p className="text-xs text-muted-foreground mt-2">6 especialidades</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">1,824</h3>
          <p className="text-sm text-muted-foreground">Consultas Este Mês</p>
          <p className="text-xs text-green-500 mt-2">+8% vs mês anterior</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-orange-500" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-1">R$ 124k</h3>
          <p className="text-sm text-muted-foreground">Receita Mensal</p>
          <p className="text-xs text-green-500 mt-2">+15% este mês</p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-accent" />
            Usuários por Especialidade
          </h2>
          <div className="space-y-4">
            {[
              { specialty: "Alergista", doctors: 48, patients: 342, color: "blue" },
              { specialty: "Endocrinologista", doctors: 62, patients: 478, color: "purple" },
              { specialty: "Ortopedista", doctors: 85, patients: 621, color: "green" },
              { specialty: "Fisioterapeuta", doctors: 91, patients: 534, color: "indigo" },
              { specialty: "Gestão de Dor", doctors: 34, patients: 289, color: "orange" },
              { specialty: "Fisiatra", doctors: 22, patients: 198, color: "teal" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium">{item.specialty}</p>
                  <span className="text-xs text-muted-foreground">{item.doctors} médicos</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Pacientes</span>
                      <span className="text-sm font-bold">{item.patients}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${item.color}-500`}
                        style={{ width: `${(item.patients / 621) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            Alertas do Sistema
          </h2>
          <div className="space-y-4">
            {[
              { type: "warning", message: "Servidor de backup precisa de manutenção", time: "2h atrás" },
              { type: "info", message: "Atualização de segurança disponível", time: "5h atrás" },
              { type: "success", message: "Backup automático concluído", time: "1d atrás" },
              { type: "warning", message: "Uso de armazenamento em 85%", time: "2d atrás" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      item.type === "warning" ? "bg-orange-500" : item.type === "info" ? "bg-blue-500" : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm mb-1">{item.message}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-accent" />
            Atividade Recente
          </h2>
          <div className="space-y-4">
            {[
              { action: "Novo médico cadastrado", user: "Dr. Rafael Silva", time: "10 min atrás" },
              { action: "Dashboard atualizado", user: "Sistema", time: "1h atrás" },
              { action: "Novo paciente registrado", user: "Maria Costa", time: "2h atrás" },
              { action: "Consulta agendada", user: "Dr. João Mendes", time: "3h atrás" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border">
                <p className="text-sm font-medium mb-1">{item.action}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.user}</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-accent" />
            Configurações Rápidas
          </h2>
          <div className="space-y-3">
            <button className="w-full p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors text-left">
              <p className="font-medium mb-1">Gerenciar Usuários</p>
              <p className="text-sm text-muted-foreground">Adicionar, editar ou remover usuários</p>
            </button>
            <button className="w-full p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors text-left">
              <p className="font-medium mb-1">Configurar Integrações</p>
              <p className="text-sm text-muted-foreground">APIs e serviços externos</p>
            </button>
            <button className="w-full p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors text-left">
              <p className="font-medium mb-1">Relatórios e Analytics</p>
              <p className="text-sm text-muted-foreground">Ver estatísticas detalhadas</p>
            </button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
