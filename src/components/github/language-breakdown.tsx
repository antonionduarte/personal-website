"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useSpring } from "motion/react"
import type { LanguageData } from "@/lib/github"

interface LanguageBreakdownProps {
  languages: LanguageData[]
}

export default function LanguageBreakdown({ languages }: LanguageBreakdownProps) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<{ x: number; y: number; lang: LanguageData } | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const springConfig = { stiffness: 300, damping: 30 }
  const animX = useSpring(0, springConfig)
  const animY = useSpring(0, springConfig)

  useEffect(() => {
    if (tooltip) {
      animX.set(tooltip.x)
      animY.set(tooltip.y)
    }
  }, [tooltip, animX, animY])

  return (
    <div ref={cardRef} className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-border transition-all duration-200 relative">
      <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontStyle: "normal" }}>
        Languages
      </h3>

      {/* Stacked bar */}
      <div className="flex h-3 rounded-full overflow-hidden mb-5">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="cursor-pointer transition-opacity duration-150"
            style={{
              width: `${lang.percentage}%`,
              minWidth: 6,
              backgroundColor: lang.color,
              opacity: hovered && hovered !== lang.name ? 0.3 : 1,
            }}
            onMouseEnter={(e) => {
              setHovered(lang.name)
              const rect = e.currentTarget.getBoundingClientRect()
              const card = cardRef.current?.getBoundingClientRect()
              if (!card) return
              setTooltip({
                x: rect.left - card.left + rect.width / 2,
                y: rect.top - card.top - 4,
                lang,
              })
            }}
            onMouseLeave={() => {
              setHovered(null)
              setTooltip(null)
            }}
          />
        ))}
      </div>

      {/* Tooltip */}
      {tooltip && (
        <motion.div
          className="absolute pointer-events-none bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md border border-border/60 shadow-md shadow-black/20 z-10 whitespace-nowrap -translate-x-1/2 -translate-y-full"
          style={{ left: animX, top: animY, fontStyle: "normal" }}
        >
          <span className="inline-block w-2 h-2 rounded-full mr-1.5 align-middle" style={{ backgroundColor: tooltip.lang.color }} />
          {tooltip.lang.name}: {tooltip.lang.percentage.toFixed(1)}%
        </motion.div>
      )}

      {/* Legend list */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-2" style={{ fontStyle: "normal" }}>
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-2 cursor-default transition-opacity duration-150"
            style={{ opacity: hovered && hovered !== lang.name ? 0.4 : 1 }}
            onMouseEnter={() => setHovered(lang.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: lang.color }}
            />
            <span className="text-sm text-foreground truncate">{lang.name}</span>
            <span className="text-xs text-muted-foreground ml-auto tabular-nums">
              {lang.percentage.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
