interface ProgressIndicatorProps {
  progress: number
  className?: string
}

export function ProgressIndicator({ progress, className = "" }: ProgressIndicatorProps) {
  return (
    <div className={`w-full bg-muted rounded-full h-2 ${className}`}>
      <div
        className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
