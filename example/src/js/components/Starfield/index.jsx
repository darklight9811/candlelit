// Packages
import React from 'react';

// Helpers
import { Star } from './helpers';
import style from './style.module.css';

export default function Starfield({ quantity = 200 }) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// refs
	const canvasElement = React.useRef();

	// states
	const [canvas, setcanvas] = React.useState();

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const stars = React.useMemo(() => {
		if (!canvas) return [];

		const _stars = [];

		for (let i = 0; i < quantity; i++) {
			var positionX = window.innerWidth * Math.random();
			var positionY = window.innerHeight * Math.random();
			var offset    = Math.random() * 100;
			var duration  = Math.random() * 50 + 50;
			var size      = Math.random() * 2;
			
			_stars.push(new Star(positionX, positionY, offset, duration, size, canvas));
		}

		return _stars;
	}, [quantity, canvas]);

	//-------------------------------------------------
	// Callbacks
	//-------------------------------------------------

	const onRenderFrame = React.useCallback(() => {
		//Clear canvas
		canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);
		
		//Call all stars to update their animation
		for (let i = 0; i < quantity; i++) {
		  stars[i].draw();
		}
		
		//Loop function
		setTimeout(onRenderFrame, 100);
	}, [canvas, quantity, stars]);

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	React.useEffect(() => {
		if (!canvasElement.current || canvas) return;
		
		setcanvas(canvasElement.current.getContext("2d"));
	}, [canvasElement, canvas]);

	// start
	React.useEffect(() => {
		if (!canvasElement.current || !canvas) return;

		//Set canvas size
		canvasElement.current.width = window.innerWidth;
		canvasElement.current.height = window.innerHeight;

		//Start animation
		onRenderFrame();
	}, [canvasElement, canvas, onRenderFrame]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<canvas ref={canvasElement} className={style.starfield} />
	);
}
