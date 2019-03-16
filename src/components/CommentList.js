import React, { Component } from "react";
import { connect } from 'react-redux';

class CommentList extends Component {

	renderComments = () => {
		return this.props.comments.map((el,index) => {
			return <li key={index}>{el}</li>
		})
	}

	render() {
		return (
			<div>
				<h4>Comment List</h4>
				<ul>{this.renderComments()}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comments: state.comments
	}
}
export default connect(mapStateToProps) (CommentList);
