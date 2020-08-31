// Packages
import { lazy } from 'react';

export default [
	{
		exact: true,
		path: "/graph",
		component: lazy(() => import(/* webpackChunkName: "Graph" */ '../views/Graph')),
	},
	{
		exact: true,
		path: "/candle",
		component: lazy(() => import(/* webpackChunkName: "Candle" */ '../views/Candle')),
	},
	{
		exact: true,
		path: "/",
		component: lazy(() => import(/* webpackChunkName: "Home" */ '../views/Home')),
	},
	{
		component: lazy(() => import(/* webpackChunkName: "NotFound" */ '../views/NotFound')),
	},
];