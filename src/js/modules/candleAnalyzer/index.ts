// Interfaces
import candlegraph, {candlePatternFunction} from '../../interfaces/candle';
import patternResponse, {cacheInfo}			from '../../interfaces/general';

let patternlist: candlePatternFunction[] = [];
let cache: cacheInfo = {} as any;

/**
 * The main function that actually analyses data
 * 
 * @param {candlegraph} graph The candlestick graph to be analyzed
 * @param {candlePatternFunction[]} patternChecklist The patterns that will be used to analyze the graph
 * @returns {patternResponse[]} The matched patterns
 */
function analyze (graph: candlegraph, _patternList?: candlePatternFunction[], overwrite?: boolean): patternResponse[] {
	const funcs 	= _patternList ? (overwrite? patternlist.concat(_patternList):_patternList):patternlist;
	const _graph 	= cache? (graph.reverse().slice(0, cache.maxCandles).reverse()):graph;
	let response 	= [] as patternResponse[];

	// Search functions
	for (let i = 0; i < funcs.length; i++) {
		const answer = funcs[i](_graph);

		if (answer) response.push(answer);
	}

	return response;
}

analyze._patternlist = patternlist;
analyze._cache = cache;

/**
 * @param {candlePatternFunction} func Add the pattern detector to the global pattern list 
 */
analyze.add = (func: candlePatternFunction) => patternlist.push(func);
/**
 * @returns {candlePatternFunction[]} Return a list of all the global pattern detector functions
 */
analyze.list = () => patternlist;
/**
 * Resets the list
 */
analyze.reset = () => patternlist = [];
/**
 * Cache some info that can speed up the process of analyzing the data
 */
analyze.cache = () => {

}

export default analyze;