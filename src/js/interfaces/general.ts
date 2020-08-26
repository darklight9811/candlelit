export default interface iResponse {
	id: string,
	name: string,
	description?: string,
	type?: "bullish" | "bearish",
}

export interface cacheInfo {
	maxCandles: number,
}