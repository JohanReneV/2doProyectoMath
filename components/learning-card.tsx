import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressIndicator } from "./progress-indicator"
import Link from "next/link"

interface LearningCardProps {
  title: string
  progress: number
  items: string[]
  buttonText: string
  isBlocked?: boolean
}

export function LearningCard({ title, progress, items, buttonText, isBlocked = false }: LearningCardProps) {
  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground">{title}</CardTitle>
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Progreso</span>
            <span className="font-medium text-card-foreground">{progress}%</span>
          </div>
          <ProgressIndicator progress={progress} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {isBlocked ? (
          <Button
            className="w-full font-medium transition-all duration-200 bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300"
            disabled={true}
          >
            {buttonText}
          </Button>
        ) : (
          <Link href="/fuera-de-servicio" className="block">
            <Button className="w-full font-medium transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground">
              {buttonText}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
