import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "../store/actions";
import routerGuards from "./routerGuards";

class CommentBox extends Component {
	state = {
		comment: ""
	};

	handleInput = event => {
		this.setState({
			comment: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({
			comment: ""
		});
	};

	handleFetch = event => {
		event.preventDefault();
		this.props.fetchComments();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					value={this.state.comment}
					onChange={this.handleInput}
				/>
				<div>
					<button type="submit">Submit Comment</button>
					<button
						className="fetch-comments-btn"
						onClick={this.handleFetch}
					>
						Fetch Comment
					</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		comments: state.comments
	};
};
const mapDispatchToProps = dispatch => {
	return {
		saveComment: comment => dispatch(saveComment(comment)),
		fetchComments: () => dispatch(fetchComments())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(routerGuards(CommentBox));
