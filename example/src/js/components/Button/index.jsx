// Packages
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button ({className, color = "primary", fill = "background", ...props}) {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const _className = React.useMemo(() => {
		const response = [];

		// Required classes
		response.push('button');
		response.push(`${fill}-${color}-interactive`);

		// Optional classes
		if (className) response.push(className);

		return response.join(' ');
	}, [className, fill, color]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	// button is a link
	if (props.href) {
		return (
			<Link to={props.href} className={_className}>
				{props.children}
			</Link>
		);
	}
	return (
		<button {...props} className={_className}>
			{props.children}
		</button>
	);
}
