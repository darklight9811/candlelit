// Packages
import React from 'react';
import Button from '../../../components/Button';

// Style
import style from '../style.module.css';

export default function Item ({setgraph, index, ...candle}) {

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="card text-dark">
			<div className="d-flex justify-content-between">
				{/* Position on array */}
				<div className="">
					{index !== 0 && <i className="fas fa-chevron-up" />}
					<i className="fas fa-chevron-down" />
				</div>

				{/* Content */}
				<div className="col d-flex justify-content-between px-4">
					<span>O - {candle.open}</span>
					<span>C - {candle.close}</span>
					<span>H - {candle.high}</span>
					<span>L - {candle.low}</span>
				</div>

				{/* Edit */}
				<Button className={style.button}>
					<i className="fa fa-edit text-light" />
				</Button>
			</div>
		</div>
	);
}
