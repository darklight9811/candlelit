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

		// Check types (short, short, long)
		if (isLong(candle1) || isLong(candle2) || !isLong(candle3)) return;
		
		// Get candle size
		const candleSize1 = candle1[0] - candle1[3];
		const candleSize2 = candle2[0] - candle2[3];
		const candleSize3 = candle3[3] - candle3[0];
		
		// Compare short with first long
		if (candleSize2 > candleSize1 * 0.03) return;
		
		// Compare short with second long
		if (candleSize2 > candleSize3 * 0.03) return;

		// Compare the wick size to the body
		if ((candle2[2] - candle2[1]) * 6 < candleSize2) return;

		return info;
	}
}