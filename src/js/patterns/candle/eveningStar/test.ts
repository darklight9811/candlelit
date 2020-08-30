// Pattern
import pattern from './index';

// Interfaces
import chart from '../../../interfaces/candle';

// Helpers
import { generateCandle, generateCandleGraph } from '../../../helpers/candlestick';

describe("Test evening star", () => {

	// -------------------------------------------------
	// Candle quantity
	// -------------------------------------------------

	it ("It should return false to only two candles", () => {
		const graph: chart = [
			generateCandle(),
			generateCandle(),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return true to three candles or more", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"short"},
			{size:2, type:"short", wickSize:10},
			{size:100, type:"long"},
		]);

		expect(pattern(graph)).toBeDefined();
	});

	// -------------------------------------------------
	// Candle type
	// -------------------------------------------------

	it ("It should return true for short, short, long candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"short"},
			{size:2, type:"short", wickSize:10},
			{size:100, type:"long"},
		]);

		expect(pattern(graph)).toBeDefined();
	});

	it ("It should return false for all short candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"short"},
			{size:2, type:"short", wickSize:10},
			{size:100, type:"short"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for long, short, long candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"long"},
			{size:2, type:"short", wickSize:10},
			{size:100, type:"long"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for short, long, long candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"short"},
			{size:2, type:"long", wickSize:10},
			{size:100, type:"long"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for all long candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"long"},
			{size:2, type:"long", wickSize:10},
			{size:100, type:"long"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for long, long, short candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"long"},
			{size:2, type:"long", wickSize:10},
			{size:100, type:"short"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for long, short, short candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"long"},
			{size:2, type:"short", wickSize:10},
			{size:100, type:"short"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for short, long, short candles", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"short"},
			{size:2, type:"long", wickSize:10},
			{size:100, type:"short"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	// -------------------------------------------------
	// Candle size comparison
	// -------------------------------------------------

	it ("It should return false for candles with the same size", () => {
		const graph: chart = generateCandleGraph([
			{size:100, type:"short"},
			{size:100, type:"long", wickSize:10},
			{size:100, type:"short"},
		]);

		expect(pattern(graph)).toBeUndefined();
	});

	// -------------------------------------------------
	// Candle position comparison
	// -------------------------------------------------

	it ("It should return false for candles that do not open/close correctly", () => {
		const graph: chart = [
			generateCandle("short", 10),
			generateCandle("long", 2),
			generateCandle("short", 10),
		];

		expect(pattern(graph)).toBeUndefined();
	});
});