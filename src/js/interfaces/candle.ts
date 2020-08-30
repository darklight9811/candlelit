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

/**
 * Used for mocking and testing
 */
export interface mockCandleStick {
	size: number;
	type: "short" | "long";
	wickStart?: number;
	wickSize?: number;
}

export type candlePatternFunction = (graph: candleStickChart) => pattern | undefined;
export default candleStickChart;