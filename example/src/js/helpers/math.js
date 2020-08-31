export function min () {
	let _min;

	for (let i = 0; i < arguments.length; i++) {
		if (_min)
			_min = arguments[i] > _min ? _min:arguments[i];
		else
			_min = arguments[i];
	}
	return _min;
}

export function max () {
	let _max;

	for (let i = 0; i < arguments.length; i++) {
		if (_max)
		_max = arguments[i] < _max ? _max:arguments[i];
		else
		_max = arguments[i];
	}

	return _max;
}