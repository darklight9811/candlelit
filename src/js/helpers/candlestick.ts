export function isLong(candle: number[]) {
	return candle[3] - candle[0] > 0;
}

export function generateCandle(type: "short" | "long" = "long", size : number = 10): [number, number, number, number] {
	if (type === "long")
		return [ 0, 0, 0, size ];
	else
		return [ size, 0, 0, 0 ];
}