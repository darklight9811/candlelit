// Packages
import React from 'react';
import ApexChart from 'react-apexcharts';
import axios from 'axios';

// Components
import List from './shared/List';
import Item from '../../components/CandleItem';

// Placeholder
import placeholderlist from '../../services/initialCandleGraph.json';
import Button from '../../components/Button';

export default function Candle () {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// states
	const [ graph, setgraph ] = React.useState(placeholderlist);

	//-------------------------------------------------
	// Callbacks
	//-------------------------------------------------

	const onAdd = React.useCallback(() => {
		const newgraph = [...graph];
		newgraph.push({open:0, close:0, high:0, low:0});

		setgraph(newgraph);
	}, [graph]);

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const options = React.useMemo(() => {
		return {
			dataLabels:{enabled:false},
			tooltip:{enabled:false},
			legend:{show:false},
		};
	}, []);

	const series = React.useMemo(() => {
		return graph.map((item, index) => {
			return  [index, item.open, item.high, item.low, item.close];
		});
	}, [graph]);

	const onFetch = React.useCallback(() => {
		axios.get('https://testnet.binance.vision/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=100')
		.then((response) => {
			setgraph(response.data.map(item => {
				return {
					open: item[1].replace(/[0]+$/, ''),
					high: item[2].replace(/[0]+$/, ''),
					low: item[3].replace(/[0]+$/, ''),
					close: item[4].replace(/[0]+$/, ''),
				};
			}));
		});
	}, []);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="background-dark fullscreen py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="row">
							<Button onClick={onFetch}>Fetch from binance</Button>
						</div>
						<ApexChart options={options} type="candlestick" series={[{data:series}]} height={350} />
						<p>No patterns detected</p>
					</div>
					<div className="col-md-6">
						<div style={{maxHeight:500, overflow:"auto"}}>
							<div className="d-flex justify-content-center flex-column">
								<List graph={graph}>
									<Item setgraph={setgraph} last={graph.length} graph={graph} />
								</List>
								<Button onClick={onAdd}>Add new candle</Button>
							</div>
						</div>
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
