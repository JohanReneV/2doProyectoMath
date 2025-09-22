import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecommendationsSection() {
  return (
    <Card className="mb-8 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold text-card-foreground">
          <span className="text-2xl">⭐</span>
          Recomendaciones para Ti
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground leading-relaxed">
          Refuerza tus conocimientos en <span className="font-semibold text-accent">Teoría Interactiva</span>
        </p>
        <p className="text-muted-foreground leading-relaxed">
          ¡Comienza una nueva <span className="font-semibold text-accent">racha de estudio</span>!
        </p>
      </CardContent>
    </Card>
  )
}
