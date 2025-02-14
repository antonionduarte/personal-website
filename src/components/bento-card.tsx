import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  className?: string
  noPadding?: boolean
  animated?: boolean
}

export default function BentoCard({ children, title, icon, className, noPadding = false, animated = false }: BentoCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg", className)}>
      {title && (
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn(noPadding ? "p-0" : "", animated ? "transition-transform duration-300 ease-in-out transform hover:translate-x-2" : "")}>
        {children}
      </CardContent>
    </Card>
  )
}