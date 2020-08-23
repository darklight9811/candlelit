// Packages
import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-complete-router';

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
			<Router>
				<Suspense fallback={""}>
					<Switch>
						{renderRoutes}
					</Switch>
				</Suspense>
			</Router>
		</div>
	);
}
