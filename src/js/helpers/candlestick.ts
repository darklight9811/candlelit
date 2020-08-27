export function isLong(candle: number[]) {
	return candle[3] - candle[0] > 0;
}