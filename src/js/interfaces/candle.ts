// Interfaces
import pattern from './general';

/**
 * Candlestick chart format
 */
type candleStickChart = [
	number, // open
	number, // high
	number, // low
	number, // close 
][];

export type candlePatternFunction = (graph: candleStickChart) => pattern | undefined;
export default candleStickChart;