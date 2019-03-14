import React, { Component } from "react";
import { connect } from 'react-redux';

const routerGuards = ChildComponet => {
	class ComposedComponent extends Component {
		componentDidMount = () => {
			this.navigateAway();
		}

		componentDidUpdate = () => {
			this.navigateAway();
		}

		navigateAway = () => {
			if(!this.props.isLogin){
				this.props.history.push('/');
			}
		}

		render(){
			console.log(this.props);
			return <ChildComponet {...this.props} />;
		}
	}

	const mapStateToProps = state => {
		return {
			isLogin: state.auth.isLogin
		}
	}

	return connect(mapStateToProps)(ComposedComponent);
};



export default routerGuards;
