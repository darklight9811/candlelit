// Packages
import React, { Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Services
import routes from '../../services/routes';

export default function App () {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const renderRoutes = React.useMemo(() => {
		return routes.map((item, index) => {
			return (
				<Route key={index} {...item} />
			);
		});
	}, []);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="text-white" id="app">
			<HashRouter>
				<Suspense fallback={""}>
					<Switch>
						{renderRoutes}
					</Switch>
				</Suspense>
			</HashRouter>
		</div>
	);
}
