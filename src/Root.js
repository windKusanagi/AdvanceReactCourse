// can be used in .test file to setup a basic redux env
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./store/reducers/rootReducer";
import reduxPromise from "redux-promise";

const Root = props => {
	const { children, initialState } = props;
	const store = createStore(
		rootReducers,
		initialState ? initialState : {},
		applyMiddleware(reduxPromise)
	);
	return <Provider store={store}>{children}</Provider>;
};

export default Root;
