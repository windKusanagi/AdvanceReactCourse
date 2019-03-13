import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/actions";

const Header = props => {
	const { auth } = props;

	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/post">Post</Link>
				</li>
				<li>
					{auth.isLogin ? (
						<button onClick={props.logout}>Log Out</button>
					) : (
						<button onClick={props.login}>Log In</button>
					)}
				</li>
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	console.log(state);
	return {
		auth: state.auth
	};
};
const mapDispatchToProps = dispatch => {
	return {
		login: () => dispatch(login()),
		logout: () => dispatch(logout())
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
