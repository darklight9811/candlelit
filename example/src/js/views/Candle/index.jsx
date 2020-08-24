// Packages
import React from 'react';

// Components
import Graph from './shared/Graph';
import List from './shared/List';
import Item from '../../components/CandleItem';

// Placeholder
import placeholderlist from '../../services/initialCandleGraph.json';

export default function Candle () {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// states
	const [ graph, setgraph ] = React.useState(placeholderlist);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="background-dark fullscreen py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<Graph graph={graph} />
					</div>
					<div className="col-md-6">
						<List graph={graph}>
							<Item setgraph={setgraph} last={graph.length} graph={graph} />
						</List>
					</div>
				</div>
				<div className="row">
					<h3 className="title mt-5 mb-2">About candlestick</h3>

					<p>In technical analysis, a candlestick pattern is a movement in prices shown graphically on a candlestick chart that some believe can predict a particular market movement. The recognition of the pattern is subjective and programs that are used for charting have to rely on predefined rules to match the pattern. There are 42 recognised patterns that can be split into simple and complex patterns.</p>
					<p>Some of the earliest technical trading analysis was used to track prices of rice in the 18th century. Much of the credit for candlestick charting goes to Munehisa Homma (1724–1803), a rice merchant from Sakata, Japan who traded in the Ojima Rice market in Osaka during the Tokugawa Shogunate. According to Steve Nison, however, candlestick charting came later, probably beginning after 1850</p>
				</div>
				<div className="row">
					<h3 className="title mt-5 mb-2">Patterns available</h3>
				</div>
			</div>
		</div>
	);
}
