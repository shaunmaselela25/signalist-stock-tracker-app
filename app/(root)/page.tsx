import TradingViewWidgets from "@/components/ui/TradingViewWidgets"
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants"

const Home = () => {
  const TV_EMBED_BASE =
    "https://s3.tradingview.com/external-embedding/embed-widget-"

  return (
    <div className="flex flex-col gap-10 home-wrapper">
      <h1 className="text-4xl font-bold">Welcome to the TradingView Widget App!</h1>

      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingViewWidgets
            title="Market Overview"
            scriptUrl={`${TV_EMBED_BASE}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="md:col-span-1 xl:col-span-2">
          <TradingViewWidgets
            title="Stock Heatmap"
            scriptUrl={`${TV_EMBED_BASE}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>

      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidgets
            title="Top Stories"
            scriptUrl={`${TV_EMBED_BASE}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingViewWidgets
            title="Stock Quotes"
            scriptUrl={`${TV_EMBED_BASE}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
