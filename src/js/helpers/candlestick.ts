// Interfaces
import candleChart from '../interfaces/candle';

export function isLong(candle: number[]) {
	return candle[3] - candle[0] > 0;
}

export function generateCandle(type: "short" | "long" = "long", size : number = 10): [number, number, number, number] {
	if (type === "long")
		return [ 0, 0, 0, size ];
	else
		return [ size, 0, 0, 0 ];
}

export function generateCandleGraph(graph: {size:number,type:"long"|"short"}[]): candleChart {
	let node = graph[0];
	const response: candleChart = [];

	// First node
	response.push([(node.type === "short" ? node.size:0), 0, 0, (node.type === "long" ? node.size:0)]);

	// Rest of the nodes
	for (let i = 1; i < graph.length; i++) {
		node = graph[i];
		const start = response[i - 1][3];

		response.push([start, 0, 0, start + node.size * (node.type === "long" ? 1:-1)]);
	}

	return response;
}