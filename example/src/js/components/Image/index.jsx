// Packages
import React from 'react';

// Img
import fallbackImg from '../../../img/default.svg';

export default function Image ({context = "", src, ...props}) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// states
	const [image, setimage] = React.useState();

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	React.useEffect(() => {
		try {
			require(context + '/' + src)
			.then(img => {
				setimage(img);
			});
		}
		catch (e) {
			console.log(e);
		}
	}, [src, context]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<img {...props} src={image || fallbackImg} />
	);
}
