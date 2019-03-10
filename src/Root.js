// can be used in .test file to setup a basic redux env

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './store/reducers/rootReducer';

const Root = props => {
	return (
		<Provider store = { createStore(rootReducers, {})}>
			{props.children}
		</Provider>
	);
}

export default Root;