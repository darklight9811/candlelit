// Packages
import React from 'react';
import { Form, Input } from 'formalization';

// Components
import Button from '../Button';

// Style
import style from './style.module.css';

// Helpers
import { move } from '../../helpers/array';

export default function Item ({setgraph, graph, last, index, ...candle}) {

	//-------------------------------------------------
	// Properties
	//-------------------------------------------------

	// states
	const [ onedit, setonedit ] = React.useState(false);
	const [ data, setdata ] = React.useState({});

	//-------------------------------------------------
	// Effects
	//-------------------------------------------------

	React.useEffect(() => {
		setdata(graph[index]);
	}, [graph, index]);

	//-------------------------------------------------
	// Callbacks
	//-------------------------------------------------

	const shiftUp = React.useCallback(() => {
		const newgraph = move([...graph], index, index - 1);

		setgraph(newgraph);
	}, [graph, index, setgraph]);

	const shiftDown = React.useCallback(() => {
		const newgraph = move([...graph], index, index + 1);

		setgraph(newgraph);
	}, [graph, index, setgraph]);

	const onSave = React.useCallback(() => {
		const newgraph = [...graph];
		newgraph[index] = {
			open: parseInt(data.open),
			close: parseInt(data.close),
			high: parseInt(data.high),
			low: parseInt(data.low),
		};

		setgraph(newgraph);
		setonedit(false);
	}, [data, graph, index, setgraph]);

	const onDelete = React.useCallback(() => {
		const newgraph = [...graph].filter((x, _index) => _index !== index);

		setgraph(newgraph);
	}, [graph, index, setgraph]);

	//-------------------------------------------------
	// Render
	//-------------------------------------------------

	return (
		<div className="card text-dark mb-2">
			<div className="d-flex justify-content-between">
				{/* Position on array */}
				<div className={style.arrows}>
					{index !== 0 && <i onClick={shiftUp} className="fas fa-chevron-up" />}
					{index !== last - 1 && <i onClick={shiftDown} className="fas fa-chevron-down" />}
				</div>

				{/* Content */}
				{
					onedit &&

					<Form className="d-flex px-4" data={[data, setdata]}>
						<div>
							<Input className="form-control" name="open" autoFocus />
						</div>
						<div>
							<Input className="form-control" name="close" />
						</div>
						<div>
							<Input className="form-control" name="high" />
						</div>
						<div>
							<Input className="form-control" name="low" />
						</div>
					</Form>
				}
				{
					!onedit &&

					<div className={"col d-flex justify-content-between px-4 " + style.content}>
						<span>O - {candle.open}</span>
						<span>C - {candle.close}</span>
						<span>H - {candle.high}</span>
						<span>L - {candle.low}</span>
					</div>
				}

				{/* Edit */}
				{
					!onedit &&

					<Button className={style.button} onClick={() => setonedit(true)}>
						<i className="fa fa-edit text-light" />
					</Button>
				}
				{
					onedit &&
					
					<Button className={style.button} onClick={onSave}>
						<i className="fa fa-save text-light" />
					</Button>
				}

				<div className="ml-2">
					<Button color="danger" className={style.button} onClick={onDelete}>
						<i className="fa fa-times text-light" />
					</Button>
				</div>
			</div>
		</div>
	);
}
