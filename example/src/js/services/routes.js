// Packages
import { lazy } from 'react';

export default [
	{
		exact: true,
		path: "/graph",
		to: lazy(() => import(/* webpackChunkName: "Graph" */ '../views/Graph')),
	},
	{
		exact: true,
		path: "/candle",
		to: lazy(() => import(/* webpackChunkName: "Candle" */ '../views/Candle')),
	},
	{
		exact: true,
		path: "/",
		to: lazy(() => import(/* webpackChunkName: "Home" */ '../views/Home')),
	},
	{
		to: lazy(() => import(/* webpackChunkName: "NotFound" */ '../views/NotFound')),
	},
];