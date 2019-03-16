import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types'; 

const commentReducer = (state = [], action) => {
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload]
		case FETCH_COMMENTS:
			const comments = action.payload.data.map(el=>el.name).slice(0,10);
			return [...state, ...comments]
		default:
			return state;
	}
};

export default commentReducer;
