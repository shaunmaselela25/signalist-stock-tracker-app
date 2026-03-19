'use client'

import { useEffect, useMemo, useRef } from 'react'

export type TradingViewWidgetConfig = Record<string, unknown>

const useTradingViewWidget = (
  scriptUrl: string,
  config: TradingViewWidgetConfig,
  height: number
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const configJson = useMemo(() => JSON.stringify({ ...config, height }), [config, height])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Avoid re-injecting the widget if it's already loaded.
    if (container.dataset.tradingviewLoaded === 'true') return

    const script = document.createElement('script')
    script.src = scriptUrl
    script.type = 'text/javascript'
    script.async = true

    // TradingView expects a JSON config object as the script content.
    script.innerHTML = configJson

    container.appendChild(script)
    container.dataset.tradingviewLoaded = 'true'

    return () => {
      if (!container) return
      container.dataset.tradingviewLoaded = 'false'
      // Remove injected scripts so remounts stay clean.
      container.querySelectorAll('script').forEach((el) => el.remove())
    }
  }, [scriptUrl, configJson])

  return containerRef
}

export default useTradingViewWidget
