// Packages
import React from 'react';

// Components
import Candle from '../../../components/Candle';

// Helpers
import {min, max} from '../../../helpers/math';

export default function Graph ({graph = [], height = 200}) {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const renderGraph = React.useMemo(() => {
		const response = [];

		// get max
		const maximum = graph.reduce((prev, curr) => {
			const _max = max(...Object.values(curr));

			return prev === false ? _max:(_max < prev? prev:_max);
		}, false);

		//get average size
		const average = graph.reduce((prev, curr) => {
			const values = Object.values(curr);
			const avg = (max(...values) + min(...values)) / 2;

			return prev === false ? avg : ((prev + avg) / 2);
		}, false);

		// render graph
		for (let i = 0; i < graph.length; i++) {
			response.push(
				<Candle key={i} {...graph[i]} average={average} units={height / maximum} />
			);
		}

		return response;
	}, [graph, height]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="d-flex justify-content-center" style={{height, alignItems:'self-end'}}>
			{renderGraph}
		</div>
	);
}
