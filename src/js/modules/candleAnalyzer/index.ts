// Interfaces
import candlegraph 					from '../../interfaces/candle';
import patternResponse, {cacheInfo}	from '../../interfaces/general';

let patternlist: Function[] = [];
let cache: cacheInfo;

/**
 * The main function that actually analyses data
 * 
 * @param {candlegraph} graph The candlestick graph to be analyzed
 * @param {Function[]} patternChecklist The patterns that will be used to analyze the graph
 * @returns {patternResponse[]} The matched patterns
 */
function analyze (graph: candlegraph, _patternList?: Function[], overwrite?: boolean): patternResponse[] {
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

/**
 * @param {Function} func Add the pattern detector to the global pattern list 
 */
analyze.add = (func: Function) => patternlist.push(func);
/**
 * @returns {Function[]} Return a list of all the global pattern detector functions
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