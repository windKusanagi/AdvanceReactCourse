import React, { Component } from "react";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/post" component={CommentBox} />
						<Route path="/" component={CommentList} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
