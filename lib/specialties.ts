import { Activity, Brain, Bone, Stethoscope, Heart, Zap } from "lucide-react"

export const specialties = [
  {
    id: "allergist",
    name: "Alergista",
    description: "Tratamento de alergias e condições imunológicas",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
    features: ["Testes Alérgicos", "Imunoterapia", "Gestão de Asma"],
  },
  {
    id: "endocrinologist",
    name: "Endocrinologista",
    description: "Distúrbios hormonais e metabólicos",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    features: ["Diabetes", "Tireoide", "Hormônios"],
  },
  {
    id: "pain-management",
    name: "Gestão de Dor",
    description: "Tratamento especializado para dor crônica",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    features: ["Dor Crônica", "Bloqueios", "Reabilitação"],
  },
  {
    id: "orthopedist",
    name: "Ortopedista",
    description: "Especialista em ossos, articulações e músculos",
    icon: Bone,
    color: "from-green-500 to-emerald-500",
    features: ["Fraturas", "Cirurgias", "Lesões Esportivas"],
  },
  {
    id: "physiatrist",
    name: "Fisiatra",
    description: "Medicina física e reabilitação",
    icon: Heart,
    color: "from-teal-500 to-cyan-500",
    features: ["Reabilitação", "Dor Muscular", "Mobilidade"],
  },
  {
    id: "physiotherapist",
    name: "Fisioterapeuta",
    description: "Terapia física e recuperação",
    icon: Stethoscope,
    color: "from-indigo-500 to-blue-500",
    features: ["Exercícios", "Massoterapia", "Recuperação"],
  },
]

export const getSpecialtyById = (id: string) => {
  return specialties.find((s) => s.id === id)
}
