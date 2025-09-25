import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MathSEQ",
}

export default function FueraDeServicio() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Figuras geométricas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rotate-45 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/10 rotate-12 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Fuera de Servicio</h1>
          <p className="text-xl text-muted-foreground mb-2">Esta función no está disponible por el momento</p>
          <p className="text-muted-foreground">Estamos trabajando para mejorar tu experiencia educativa</p>
        </div>

        <Link href="/">
          <Button size="lg" className="font-medium">
            Volver al Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
