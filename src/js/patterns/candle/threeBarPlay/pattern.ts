// Interfaces
import candleStickChart from "../../../interfaces/candle";
import patternResponse	from '../../../interfaces/general';

// Part
import info from './info';

// Helpers
import { isLong } from "../../../helpers/candlestick";

/**
 * 
 * @param {candleStickChart} graph Graph to be analyzed 
 */
export default function pattern (graph: candleStickChart): patternResponse | undefined {
	// Not enough candles for pattern
	if (graph.length < 3) return;

	for (let i = 0; i < graph.length - 2; i++) {
		// Necessary candles for the pattern
		const candle1 = graph[i];
		const candle2 = graph[i + 1];
		const candle3 = graph[i + 2];

		// Check types (long, short, long)
		if (!isLong(candle1) || isLong(candle2) || !isLong(candle3)) return;

		// Get candle size
		const candleSize1 = candle1[3] - candle1[0];
		const candleSize2 = candle2[0] - candle2[3];
		const candleSize3 = candle3[3] - candle3[0];

		// Compare short with first long
		if (candleSize2 * 2 > candleSize1) return;

		// Compare short with second long
		if (candleSize2 * 2 > candleSize3) return;
	}

	return info;
}