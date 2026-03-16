"use client"

import type { StockWithWatchlistStatus } from "@/lib/types"
import { cn } from "@/lib/utils"

export type SearchCommandProps = {
  renderAs?: "text" | "button"
  label?: string
  initialStocks?: StockWithWatchlistStatus[]
  className?: string
}

const baseClasses =
  "inline-flex items-center gap-2 text-sm font-medium transition-colors"

export default function SearchCommand({
  renderAs = "button",
  label = "Search",
  className,
}: SearchCommandProps) {
  const variantClasses =
    renderAs === "text"
      ? "text-gray-400 hover:text-yellow-500"
      : "rounded-md border border-transparent bg-gray-900 px-3 py-1.5 text-gray-100 hover:bg-gray-800"

  return (
    <button type="button" className={cn(baseClasses, variantClasses, className)}>
      {label}
    </button>
  )
}
