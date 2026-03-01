"use client"

import { AreaChart, Area } from "@/components/charts/area-chart"
import { Grid } from "@/components/charts/grid"
import { ChartTooltip } from "@/components/charts/tooltip/chart-tooltip"
import { useChart } from "@/components/charts/chart-context"
import type { YearlyTotal } from "@/lib/github"
import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

interface ContributionTrendProps {
  totals: YearlyTotal[]
}

interface Marker {
  date: Date
  icon: string
  title: string
}

const LIFE_MARKERS: Marker[] = [
  { date: new Date("2019-09-01"), icon: "🎓", title: "Started my B.Sc. — time to learn!" },
  { date: new Date("2022-03-01"), icon: "🔬", title: "Researcher at NOVA LINCS" },
  { date: new Date("2022-09-15"), icon: "🎓", title: "Started my M.Sc." },
  { date: new Date("2023-04-01"), icon: "🇩🇪", title: "Erasmus in Germany — Prost!" },
  { date: new Date("2023-12-01"), icon: "📱", title: "Joined Aptoide — Rust goes brr" },
  { date: new Date("2025-01-01"), icon: "💳", title: "Joined Paddle!" },
]

function YearAxis() {
  const { xScale, data, margin, containerRef, xAccessor } = useChart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = containerRef.current
  if (!(mounted && container)) return null

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createPortal } = require("react-dom") as typeof import("react-dom")

  const labels = data.map((d) => {
    const date = xAccessor(d)
    return {
      label: date.getFullYear().toString(),
      x: (xScale(date) ?? 0) + margin.left,
    }
  })

  return createPortal(
    <div className="pointer-events-none absolute inset-0">
      {labels.map((item) => (
        <div
          key={item.label}
          className="absolute"
          style={{
            left: item.x,
            bottom: 8,
            width: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="whitespace-nowrap text-xs" style={{ color: "var(--chart-label)" }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>,
    container
  )
}

YearAxis.displayName = "YearAxis"

interface LifeMarkersProps {
  onHoverChange?: (hovered: boolean) => void
}

function LifeMarkers({ onHoverChange }: LifeMarkersProps) {
  const { xScale, yScale, data, margin, containerRef, xAccessor, isLoaded } = useChart()
  const [mounted, setMounted] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Interpolate the y value for a given date from chart data
  const getYForDate = useMemo(() => {
    return (targetDate: Date) => {
      const targetTime = targetDate.getTime()
      // Find surrounding data points
      for (let i = 0; i < data.length - 1; i++) {
        const d0 = data[i]
        const d1 = data[i + 1]
        if (!d0 || !d1) continue
        const t0 = xAccessor(d0).getTime()
        const t1 = xAccessor(d1).getTime()
        if (targetTime >= t0 && targetTime <= t1) {
          const ratio = (targetTime - t0) / (t1 - t0)
          const v0 = (d0.contributions as number) ?? 0
          const v1 = (d1.contributions as number) ?? 0
          return v0 + ratio * (v1 - v0)
        }
      }
      // Before first or after last — clamp
      const first = data[0]
      const last = data[data.length - 1]
      if (first && targetTime <= xAccessor(first).getTime()) return (first.contributions as number) ?? 0
      if (last && targetTime >= xAccessor(last).getTime()) return (last.contributions as number) ?? 0
      return 0
    }
  }, [data, xAccessor])

  const container = containerRef.current
  if (!(mounted && container) || !isLoaded) return null

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createPortal } = require("react-dom") as typeof import("react-dom")

  const domain = xScale.domain()
  const minTime = domain[0]?.getTime() ?? 0
  const maxTime = domain[1]?.getTime() ?? 0

  // Calculate bottom of chart area for dashed lines
  const chartBottom = (yScale(0) ?? 0) + margin.top

  // Compute marker positions and stagger close ones vertically
  const MARKER_OFFSET = 42 // base offset above line
  const STAGGER_EXTRA = 44 // extra offset for close neighbors
  const CLOSE_THRESHOLD_PX = 50 // pixels apart to be considered "close"

  const markerPositions = LIFE_MARKERS.map((marker) => {
    const markerTime = marker.date.getTime()
    if (markerTime < minTime || markerTime > maxTime) return null
    const x = (xScale(marker.date) ?? 0) + margin.left
    const yValue = getYForDate(marker.date)
    const lineY = (yScale(yValue) ?? 0) + margin.top
    return { x, lineY }
  })

  // Determine stagger level for each marker (0 = normal, 1 = raised)
  const staggerLevels = markerPositions.map((pos, idx) => {
    if (!pos) return 0
    // Check if previous marker is close
    const prev = idx > 0 ? markerPositions[idx - 1] : null
    if (prev && Math.abs(pos.x - prev.x) < CLOSE_THRESHOLD_PX) {
      return 1
    }
    return 0
  })

  return createPortal(
    <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
      {LIFE_MARKERS.map((marker, idx) => {
        const pos = markerPositions[idx]
        if (!pos) return null
        const { x, lineY } = pos
        const totalOffset = MARKER_OFFSET + staggerLevels[idx] * STAGGER_EXTRA
        const badgeY = lineY - totalOffset
        const lineHeight = chartBottom - badgeY

        const delay = 0.5 + idx * 0.05

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay }}
          >
            {/* Dashed vertical line from marker down to x-axis */}
            <div
              className="absolute w-px"
              style={{
                left: x,
                top: badgeY,
                height: lineHeight,
                backgroundImage: "repeating-linear-gradient(to bottom, hsl(var(--muted-foreground) / 0.3) 0, hsl(var(--muted-foreground) / 0.3) 3px, transparent 3px, transparent 6px)",
              }}
            />

            {/* Circular badge */}
            <div
              className="absolute"
              style={{
                left: x,
                top: badgeY,
                transform: "translate(-50%, -50%)",
                pointerEvents: "auto",
              }}
            >
              <div
                className="relative cursor-default"
                onMouseEnter={() => { setHoveredIdx(idx); onHoverChange?.(true) }}
                onMouseLeave={() => { setHoveredIdx(null); onHoverChange?.(false) }}
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-secondary/80 border border-border/60 backdrop-blur-sm flex items-center justify-center text-sm select-none shadow-md shadow-black/20"
                  whileHover={{ scale: 1.15, backgroundColor: "hsl(var(--card))" }}
                >
                  {marker.icon}
                </motion.div>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 rounded-lg bg-popover border border-border/60 shadow-lg shadow-black/20 whitespace-nowrap z-50"
                      style={{ fontStyle: "normal" }}
                    >
                      <p className="text-xs font-medium text-foreground">{marker.title}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5">
                        {marker.date.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-popover" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>,
    container
  )
}

LifeMarkers.displayName = "LifeMarkers"

export default function ContributionTrend({ totals }: ContributionTrendProps) {
  const [markerHovered, setMarkerHovered] = useState(false)

  const data = totals.map((t) => ({
    date: new Date(`${t.year}-07-01`),
    contributions: t.contributions,
    year: t.year,
  }))

  return (
    <div className="rounded-2xl bg-card border border-border/60 p-6 shadow-sm shadow-black/10 hover:shadow-md hover:shadow-black/15 hover:border-border transition-all duration-200">
      <h3 className="text-sm font-semibold text-foreground mb-4" style={{ fontStyle: "normal" }}>
        Yearly Contributions
      </h3>
      <AreaChart
        data={data}
        xDataKey="date"
        aspectRatio="3 / 1"
        margin={{ top: 70, right: 20, bottom: 30, left: 20 }}
        animationDuration={800}
      >
        <Grid horizontal numTicksRows={4} strokeDasharray="2,4" />
        <Area
          dataKey="contributions"
          fill="hsl(99 26% 59%)"
          stroke="hsl(99 26% 59%)"
          fillOpacity={0.3}
          gradientToOpacity={0.02}
          strokeWidth={2}
        />
        <YearAxis />
        <LifeMarkers onHoverChange={setMarkerHovered} />
        {!markerHovered && (
          <ChartTooltip
            rows={(point) => [
              {
                color: "hsl(99 26% 59%)",
                label: "Contributions",
                value: point.contributions as number,
              },
            ]}
          />
        )}
      </AreaChart>
    </div>
  )
}
