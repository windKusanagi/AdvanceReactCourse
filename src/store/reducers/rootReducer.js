import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import authReducer from './auth';

const rootReducer = combineReducers({
	comments: commentReducer,
	auth: authReducer
})

export default rootReducer;