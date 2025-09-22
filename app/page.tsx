import { Button } from "@/components/ui/button"
import { LearningCard } from "@/components/learning-card"
import { RecommendationsSection } from "@/components/recommendations-section"
import Link from "next/link"

export default function DashboardEducativo() {
  const learningCards = [
    {
      title: "Teoría Interactiva",
      progress: 0,
      items: ["Sucesiones Aritméticas", "Sucesiones Geométricas", "Términos y Patrones"],
      buttonText: "Continuar",
      isBlocked: false,
    },
    {
      title: "Práctica Guiada",
      progress: 0,
      items: ["Completar Términos", "Encontrar Patrones", "Drag & Drop"],
      buttonText: "Continuar",
      isBlocked: false,
    },
    {
      title: "Juegos y Simulaciones",
      progress: 0,
      items: ["Plataformas Matemáticas", "Simulador de Crecimiento", "Puzzle Numérico"],
      buttonText: "Bloqueado",
      isBlocked: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-40 h-40 bg-primary/8 rounded-full blur-2xl"></div>
        <div className="absolute top-32 right-10 w-32 h-32 bg-blue-500/8 rotate-45 blur-xl"></div>
        <div className="absolute bottom-40 left-10 w-48 h-48 bg-indigo-500/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 bg-primary/8 rotate-12 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-indigo-500/8 rotate-45 blur-lg"></div>
        <div className="absolute bottom-1/3 right-20 w-32 h-32 bg-primary/6 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        {/* Sección de recomendaciones */}
        <RecommendationsSection />

        {/* Tarjetas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {learningCards.map((card, index) => (
            <LearningCard
              key={index}
              title={card.title}
              progress={card.progress}
              items={card.items}
              buttonText={card.buttonText}
              isBlocked={card.isBlocked}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/fuera-de-servicio">
            <Button
              variant="outline"
              size="lg"
              className="font-medium border-border hover:bg-muted transition-colors duration-200 bg-transparent w-full sm:w-auto"
            >
              Ver Perfil
            </Button>
          </Link>
          <Link href="/fuera-de-servicio">
            <Button
              variant="outline"
              size="lg"
              className="font-medium border-border hover:bg-muted transition-colors duration-200 bg-transparent w-full sm:w-auto"
            >
              Análisis Detallado
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
