// Packages
import React from 'react';
import { Link } from 'react-complete-router';

export default function Button (props) {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const className = React.useMemo(() => {
		const response = [];

		// Required classes
		response.push('button');
		response.push('background-primary-interactive');

		// Optional classes
		if (props.className) response.push(props.className);

		return response.join(' ');
	}, [props.className]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	// button is a link
	if (props.href) {
		return (
			<Link to={props.href} className={className}>
				{props.children}
			</Link>
		);
	}
	return (
		<button className={className}>
			{props.children}
		</button>
	);
}
