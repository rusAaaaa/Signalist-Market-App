import TrandingViewWidgest from "../components/TrandingViewWidgest";
import {
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGETS_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "../lib/constants";

export default function Home() {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <div className="flex flex-col gap-12 min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* --- Первый ряд --- */}
      <section className="grid w-full gap-8 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <TrandingViewWidgest
            title="Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="xl:col-span-2">
          <TrandingViewWidgest
            title="Stock Heatmap"
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>

      {/* --- Второй ряд --- */}
      <section className="grid w-full gap-8 xl:grid-cols-2">
        <div className="xl:col-span-1">
          <TrandingViewWidgest
            scriptUrl={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        <div className="xl:col-span-1">
          <TrandingViewWidgest
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={MARKET_OVERVIEW_WIDGETS_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
      </section>
    </div>
  );
}
