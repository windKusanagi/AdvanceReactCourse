import React, { Component } from "react";
import { connect } from 'react-redux'
import { saveComment } from "../store/actions";

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
					<button >Submit Comment</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		comments: state.comments
	}
}
const mapDispatchToProps = dispatch =>{
	return {
		saveComment: comment => dispatch(saveComment(comment))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
