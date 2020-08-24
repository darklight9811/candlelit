// Packages
import React from 'react';

export default function List ({graph, children}) {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const items = React.useMemo(() => {
		const response = [];

		for (let i = 0; i < graph.length; i++) {
			response.push(React.cloneElement(children, {
				key: i,
				index: i,
				...graph[i],
			}));
		}

		return response;
	}, [children, graph]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return items;
}
