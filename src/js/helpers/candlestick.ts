// Interfaces
import candleChart, { mockCandleStick } from '../interfaces/candle';

export function isLong(candle: number[]) {
	return candle[3] - candle[0] > 0;
}

export function generateCandle(type: "short" | "long" = "long", size : number = 10): [number, number, number, number] {
	if (type === "long")
		return [ 0, 0, 0, size ];
	else
		return [ size, 0, 0, 0 ];
}

export function generateCandleGraph(graph: mockCandleStick[]): candleChart {
	let node = graph[0];
	const response: candleChart = [];

	// First node
	response.push([(
		node.type === "short" ? node.size:0),
		(node.wickStart || 0) + (node.wickSize || 0),
		node.wickStart || 0,
		(node.type === "long" ? node.size:0)
	]);

	// Rest of the nodes
	for (let i = 1; i < graph.length; i++) {
		node = graph[i];
		const start = response[i - 1][3];
		const startWick = response[i - 1][2];

		response.push([
			start,
			startWick + (node.wickStart || 0) - (node.wickSize || 0),
			startWick + (node.wickStart || 0),
			start + node.size * (node.type === "long" ? 1:-1)
		]);
	}

	return response;
}