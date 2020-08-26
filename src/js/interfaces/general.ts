export default interface iResponse {
	// SID that should not change, ever
	id: string,
	// Human readable name
	name: string,
	// More in-depth description that could help indicate situations
	description?: string,
	// Does it indicate buy or sell?
	type?: "long" | "short",
	// Link with more info about the pattern (should go to the repository wiki)
	link?: string,
}

export interface cacheInfo {
	maxCandles: number,
}