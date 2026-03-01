"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useSpring } from "motion/react"
import type { ContributionDay } from "@/lib/github"

interface ContributionHeatmapProps {
  contributions: ContributionDay[]
}

const CELL_SIZE = 11
const CELL_GAP = 3
const CELL_STEP = CELL_SIZE + CELL_GAP
const LABEL_WIDTH = 28
const HEADER_HEIGHT = 16

const LEVEL_COLORS = [
  "hsl(90 5% 14%)",
  "hsl(99 26% 25%)",
  "hsl(99 26% 38%)",
  "hsl(99 26% 50%)",
  "hsl(99 26% 59%)",
]

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const DAY_LABELS = [
  { label: "Mon", row: 1 },
  { label: "Wed", row: 3 },
  { label: "Fri", row: 5 },
]

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function HeatmapTooltip({ tooltip }: { tooltip: { x: number; y: number; day: ContributionDay } | null }) {
  const springConfig = { stiffness: 300, damping: 30 }
  const animX = useSpring(0, springConfig)
  const animY = useSpring(0, springConfig)

  useEffect(() => {
    if (tooltip) {
      animX.set(tooltip.x)
      animY.set(tooltip.y)
    }
  }, [tooltip, animX, animY])

  if (!tooltip) return null

  return (
    <motion.div
      className="absolute pointer-events-none bg-popover text-popover-foreground text-xs px-2 py-1 rounded-md border border-border/60 shadow-md shadow-black/20 z-10 whitespace-nowrap -translate-x-1/2 -translate-y-full"
      style={{ left: animX, top: animY, fontStyle: "normal" }}
    >
      {tooltip.day.count} contribution{tooltip.day.count !== 1 ? "s" : ""} on{" "}
      {formatDate(tooltip.day.date)}
    </motion.div>
  )
}

export default function ContributionHeatmap({ contributions }: ContributionHeatmapProps) {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; day: ContributionDay } | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // Group contributions into weeks (columns)
  const weeks: (ContributionDay | null)[][] = []
  let currentWeek: (ContributionDay | null)[] = []

  for (const day of contributions) {
    const date = new Date(day.date + "T00:00:00")
    const dayOfWeek = date.getDay() // 0 = Sunday

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek)
      currentWeek = []
    }

    // Pad the first week with nulls if it doesn't start on Sunday
    if (weeks.length === 0 && currentWeek.length === 0 && dayOfWeek > 0) {
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(null)
      }
    }

    currentWeek.push(day)
  }
  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  const svgWidth = LABEL_WIDTH + weeks.length * CELL_STEP
  const svgHeight = HEADER_HEIGHT + 7 * CELL_STEP

  // Compute month label positions
  const monthPositions: { label: string; x: number }[] = []
  let lastMonth = -1
  for (let col = 0; col < weeks.length; col++) {
    const firstDay = weeks[col].find((d) => d !== null)
    if (!firstDay) continue
    const month = new Date(firstDay.date + "T00:00:00").getMonth()
    if (month !== lastMonth) {
      monthPositions.push({ label: MONTH_LABELS[month], x: LABEL_WIDTH + col * CELL_STEP })
      lastMonth = month
    }
  }

  return (
    <div ref={cardRef} className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-border transition-all duration-300 relative">
      <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontStyle: "normal" }}>
        Contributions
      </h3>
      <div className="overflow-x-auto">
        <svg width={svgWidth} height={svgHeight} className="block">
          {/* Month labels */}
          {monthPositions.map((m, i) => (
            <text
              key={i}
              x={m.x}
              y={10}
              className="fill-muted-foreground"
              fontSize={10}
              style={{ fontStyle: "normal" }}
            >
              {m.label}
            </text>
          ))}

          {/* Day labels */}
          {DAY_LABELS.map((d) => (
            <text
              key={d.label}
              x={0}
              y={HEADER_HEIGHT + d.row * CELL_STEP + CELL_SIZE - 1}
              className="fill-muted-foreground"
              fontSize={10}
              style={{ fontStyle: "normal" }}
            >
              {d.label}
            </text>
          ))}

          {/* Cells */}
          {weeks.map((week, col) =>
            week.map((day, row) => {
              if (!day) return null
              const x = LABEL_WIDTH + col * CELL_STEP
              const y = HEADER_HEIGHT + row * CELL_STEP
              return (
                <rect
                  key={day.date}
                  x={x}
                  y={y}
                  width={CELL_SIZE}
                  height={CELL_SIZE}
                  rx={2}
                  fill={LEVEL_COLORS[day.level]}
                  className="cursor-pointer"
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const card = cardRef.current?.getBoundingClientRect()
                    if (!card) return
                    setTooltip({
                      x: rect.left - card.left + CELL_SIZE / 2,
                      y: rect.top - card.top - 4,
                      day,
                    })
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              )
            }),
          )}
        </svg>
      </div>

      {/* Tooltip — positioned relative to card, outside scroll container */}
      <HeatmapTooltip tooltip={tooltip} />
    </div>
  )
}
