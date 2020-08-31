// Packages
import React from 'react';

// Utils
const images = require.context('../../../img/patterns/candle', true);

export default function PatternItem ({info}) {

	//-------------------------------------------------
	// Memos
	//-------------------------------------------------

	const description = React.useMemo(() => {
		return info.description? info.description:"No description given";
	}, [info]);

	const typedisplay = React.useMemo(() => {
		const color = info.type ? (info.type === "long" ? "green":"red"):"white";

		return <span className="ml-1" style={{color}}>{info.type}</span>;
	}, [info]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="card mb-2 pb-0">
			<div className="row">
				<div className="col-md-2">
					<img className="col-10 offset-1" alt={`${info.name} visual chart`} src={images(`./${info.id}.svg`)} />
					<div className="text-center mt-3">
						{typedisplay}
					</div>
				</div>
				<div className="col-md-10">
					<div className="d-flex flex-column justify-content-between" style={{height:"100%"}}>
						<p>{info.name}</p>
						{description}
						<div className="col-md-3">
							{
								info.link &&
								<a className="button background-secondary-interactive" rel="noopener noreferrer" href={info.link} target="_blank">See more here</a>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
