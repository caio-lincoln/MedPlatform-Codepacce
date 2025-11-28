import Hero from "@/components/Hero"
import Specialties from "@/components/Specialties"
import SpecialtyShowcase from "@/components/SpecialtyShowcase"
import ComparisonTable from "@/components/ComparisonTable"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="smooth-scroll">
      <Hero />
      <Specialties />
      <SpecialtyShowcase />
      <ComparisonTable />
      <Footer />
    </main>
  )
}
