import { LOG_IN, LOG_OUT } from "../actions/types";

let initialState = {
	isLogin: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogin: true
			};
		case LOG_OUT:
			return {
				...state,
				isLogin: false
			};
		default:
			return state;
	}
};

export default authReducer;
