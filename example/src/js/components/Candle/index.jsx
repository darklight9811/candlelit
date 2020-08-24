// Packages
import React from 'react';

// Style
import style from './style.module.css';

export default function Candle ({high, low, open, close, average, units}) {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const className = React.useMemo(() => {
		const response = [];

		response.push(style.candle);
		response.push(style[open < close ? 'bull':'bear']); 

		return response.join(' ');
	}, [open, close]);

	const wickSize = React.useMemo(() => {
		return (Math.abs(high - low) * units) + "px";
	}, [high, low, units]);

	const candleSize = React.useMemo(() => {
		return (Math.abs(open - close) * units) + "px";
	}, [open, close, units]);

	const wickStartPosition = React.useMemo(() => {
		return low * units;
	}, [low, units]);

	const candleStartPosition = React.useMemo(() => {
		return ((open < close ? open:close) - low) * units;
	}, [close, low, open, units]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className={style.wick} style={{height:wickSize,marginBottom:wickStartPosition}}>
			<div className={className} style={{height:candleSize, marginBottom:candleStartPosition}} />
		</div>
	);
}
