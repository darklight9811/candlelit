// Packages
import React from 'react';
import Chart from "react-google-charts";
import axios from 'axios';

// Components
import List from './shared/List';
import Item from '../../components/CandleItem';
import PatternItem from '../../components/PatternItem';

// Placeholder
import placeholderlist from '../../services/initialCandleGraph.json';
import Button from '../../components/Button';

// Library
import { analyzeCandle } from 'candlelit';

// Image
import logo from '../../../img/favicon.svg';

// Part
import style from './style.module.css';

window.analyzeCandle = analyzeCandle;

export default function Candle () {
	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// states
	const [ graph, setgraph ] = React.useState(placeholderlist);
	const [ match, setmatch ] = React.useState();

	//-------------------------------------------------
	// Callbacks
	//-------------------------------------------------

	const onAdd = React.useCallback(() => {
		const newgraph = [...graph];
		newgraph.push({open:0, close:0, high:0, low:0});

		setgraph(newgraph);
	}, [graph]);

	const onFetch = React.useCallback(() => {
		axios.get('https://testnet.binance.vision/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=100')
		.then((response) => {
			setgraph(response.data.map(item => {
				return {
					open: 	parseFloat(item[1].replace(/[0]+$/, '')),
					high: 	parseFloat(item[2].replace(/[0]+$/, '')),
					low: 	parseFloat(item[3].replace(/[0]+$/, '')),
					close: 	parseFloat(item[4].replace(/[0]+$/, '')),
				};
			}));
		});
	}, []);

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const series = React.useMemo(() => {
		return [["index", "open", "high", "low", "close"],...graph.map((item, index) => {
			return  [index, item.low, item.open, item.close, item.high];
		})];
	}, [graph]);

	const patternsAvailable = React.useMemo(() => {
		return analyzeCandle.list().map(item => {
			const { info } = item;

			return (
				<PatternItem key={info.id} info={info} />
			);
		});
	}, []);

	//-------------------------------------------------
	// Callbacks
	//-------------------------------------------------

	React.useEffect(() => {
		analyzeCandle(graph.map(item => [
			item.open,
			item.high,
			item.low,
			item.close
		])).then(match => {
			// No matches found
			if (!match.length) {
				setmatch('No patterns detected');
				return;
			}
	
			// Parse to JSX
			const response = [];
	
			response.push("Patterns detected: ");
	
			for (let i = 0; i < match.length; i++) {
				const type = match[i].type ? style[match[i].type]:'';
				response.push(<span className={type}>{match[i].name}</span>);
			}
	
			setmatch(response);
		});
	}, [graph]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="background-dark py-5">
			<div className="container">
				<div className="d-flex mb-5">
					<img alt="candlelit logo" src={logo} className="d-none d-sm-block" />
					<h1 className="col-11 m-0" style={{lineHeight:"85px"}}>Candlestick chart patterns</h1>
				</div>

				<div className="row">
					<div className={"col-md-6 " + style.overwrite}>
						<div className="row">
							<Button href="/"><i className="fa fa-arrow-left" /></Button>
							<Button onClick={onFetch}>Fetch from binance</Button>
						</div>
						<Chart
							chartType="CandlestickChart"
							data={series}
							height={350}
							width="100%"
							options={{
								legend: 'none',
								candlestick: {
									fallingColor: { strokeWidth: 0, fill: '#BA0000' }, // red
									risingColor: { strokeWidth: 0, fill: '#009311' }, // green
								}
							}}
						/>
						<p>{match}</p>
					</div>
					<div className="col-md-6 p-0 pr-3">
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
					<h3 className="title mt-5 mb-4">Patterns available</h3>

					{patternsAvailable}
				</div>
			</div>
		</div>
	);
}
