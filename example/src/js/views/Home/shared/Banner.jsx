// Packages
import React from 'react';

// Components
import Button from '../../../components/Button';
import Starfield from '../../../components/Starfield';

// Images
import logo from '../../../../img/logo.svg';
import NY from '../../../../img/background.svg';

// Style
import style from '../style.module.css';

export default function Banner () {

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="container py-4">
			<Starfield />
			<img src={NY} className={style.image} alt="New York at night" />

			<div className="d-flex justify-content-center mt-5">
				<img className={"col-md-6 " + style.title} src={logo} alt="Candlelit logo" />
			</div>

			<div className="col-md-8 offset-md-2">
				<p>Candlelit is a bundle of useful functions and patterns to help you build your own matches for entry points in any market.</p>

				<div className='d-flex justify-content-around my-5'>
					<Button href='candle'>Candlestick</Button>
					<Button href='graph'>Graph</Button>
				</div>
			</div>
		</div>
	);
}
