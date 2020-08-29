// Candlestick chart patterns
import eveningStar 			from './patterns/candle/eveningStar';
import threeBarPlay 		from './patterns/candle/threeBarPlay';
import reversedThreeBarPlay from './patterns/candle/threeBarPlayReversed';

// Candlestick chart
import candleAnalyzer from './modules/candleAnalyzer';

// Add patterns
candleAnalyzer.add(threeBarPlay);
candleAnalyzer.add(reversedThreeBarPlay);
candleAnalyzer.add(eveningStar);

// Export
export const analyzeCandle = candleAnalyzer;