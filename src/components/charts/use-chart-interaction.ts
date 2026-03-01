"use client";

import { localPoint } from "@visx/event";
import type { scaleLinear, scaleTime } from "@visx/scale";
import { useCallback, useState } from "react";
import type { LineConfig, Margin, TooltipData } from "./chart-context";

export interface ChartSelection {
  active: boolean;
  startX: number;
  endX: number;
  start: number;
  end: number;
}

type ScaleTime = ReturnType<typeof scaleTime<number>>;
type ScaleLinear = ReturnType<typeof scaleLinear<number>>;

interface UseChartInteractionProps {
  xScale: ScaleTime;
  yScale: ScaleLinear;
  data: Record<string, unknown>[];
  lines: LineConfig[];
  margin: Margin;
  xAccessor: (d: Record<string, unknown>) => Date;
  bisectDate: (data: Record<string, unknown>[], date: Date, lo?: number) => number;
  canInteract: boolean;
}

export function useChartInteraction({
  xScale,
  yScale,
  data,
  lines,
  margin,
  xAccessor,
  bisectDate,
  canInteract,
}: UseChartInteractionProps) {
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [selection, setSelection] = useState<ChartSelection | null>(null);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<SVGGElement>) => {
      if (!canInteract) return;
      const point = localPoint(event);
      if (!point) return;

      const x0 = xScale.invert(point.x - margin.left);
      const index = bisectDate(data, x0, 1);
      const d0 = data[index - 1];
      const d1 = data[index];

      let d = d0;
      if (d1 && d0) {
        d =
          x0.getTime() - xAccessor(d0).getTime() >
          xAccessor(d1).getTime() - x0.getTime()
            ? d1
            : d0;
      }

      if (!d) return;

      const actualIndex = d === d0 ? index - 1 : index;
      const xPos = xScale(xAccessor(d)) ?? 0;

      const yPositions: Record<string, number> = {};
      for (const line of lines) {
        const value = d[line.dataKey];
        if (typeof value === "number") {
          yPositions[line.dataKey] = yScale(value) ?? 0;
        }
      }

      setTooltipData({
        point: d,
        index: actualIndex,
        x: xPos,
        yPositions,
      });
    },
    [canInteract, xScale, yScale, data, lines, margin.left, xAccessor, bisectDate]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltipData(null);
  }, []);

  const clearSelection = useCallback(() => {
    setSelection(null);
  }, []);

  return {
    tooltipData,
    setTooltipData,
    selection,
    clearSelection,
    interactionHandlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    interactionStyle: { cursor: canInteract ? "crosshair" : "default" } as React.CSSProperties,
  };
}
