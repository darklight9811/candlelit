// Candlestick chart patterns
import threeBarPlay from './patterns/candle/threeBarPlay';

// Candlestick chart
import candleAnalyzer from './modules/candleAnalyzer';

// Add patterns
candleAnalyzer.add(threeBarPlay);

// Export
export const analyzeCandle = candleAnalyzer;