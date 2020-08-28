// Pattern
import pattern from './index';

// Interfaces
import chart from '../../../interfaces/candle';

// Helpers
import { generateCandle, generateCandleGraph } from '../../../helpers/candlestick';

describe("Test three bar play", () => {

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
			{size:10, type:"long"},
			{size:2, type:"short"},
			{size:10, type:"long"},
		]);

		expect(pattern(graph)).toBeDefined();
	});

	// -------------------------------------------------
	// Candle type
	// -------------------------------------------------

	it ("It should return true for long, short, long candles", () => {
		const graph: chart = generateCandleGraph([
			{size:10, type:"long"},
			{size:2, type:"short"},
			{size:10, type:"long"},
		]);

		expect(pattern(graph)).toBeDefined();
	});

	it ("It should return false for all short candles", () => {
		const graph: chart = [
			generateCandle("short"),
			generateCandle("short"),
			generateCandle("short"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for short, short, long candles", () => {
		const graph: chart = [
			generateCandle("short"),
			generateCandle("short"),
			generateCandle("long"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for short, long, long candles", () => {
		const graph: chart = [
			generateCandle("short"),
			generateCandle("long"),
			generateCandle("long"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for all long candles", () => {
		const graph: chart = [
			generateCandle("long"),
			generateCandle("long"),
			generateCandle("long"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for long, long, short candles", () => {
		const graph: chart = [
			generateCandle("long"),
			generateCandle("long"),
			generateCandle("short"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for long, short, short candles", () => {
		const graph: chart = [
			generateCandle("long"),
			generateCandle("short"),
			generateCandle("short"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for short, long, short candles", () => {
		const graph: chart = [
			generateCandle("short"),
			generateCandle("long"),
			generateCandle("short"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	// -------------------------------------------------
	// Candle size comparison
	// -------------------------------------------------

	it ("It should return false for candles with the same size", () => {
		const graph: chart = [
			generateCandle("long"),
			generateCandle("short"),
			generateCandle("long"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	it ("It should return false for the short candle bigger than the other ones", () => {
		const graph: chart = [
			generateCandle("long"),
			generateCandle("short", 10),
			generateCandle("long"),
		];

		expect(pattern(graph)).toBeUndefined();
	});

	// -------------------------------------------------
	// Candle position comparison
	// -------------------------------------------------

	it ("It should return false for candles that do not open/close correctly", () => {
		const graph: chart = [
			generateCandle("long", 10),
			generateCandle("short", 2),
			generateCandle("long", 10),
		];

		expect(pattern(graph)).toBeUndefined();
	});
});