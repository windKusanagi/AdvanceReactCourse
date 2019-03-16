export default ({ dispatch }) => next => action => {
	// not a promise or doesn't have a payload, pass it to
	// the next middleware
	if (!action.payload || !action.payload.then) {
		return next(action);
	}

	action.payload.then((resp)=> {
		const newAction = { ...action, payload: resp };
		dispatch(newAction);
	})
};

