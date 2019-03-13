import { SAVE_COMMENT, FETCH_COMMENTS, LOG_OUT, LOG_IN } from "./types";
import axios from "axios";

export const saveComment = comment => {
	return {
		type: SAVE_COMMENT,
		payload: comment
	};
};

export const fetchComments = () => {
	const response = axios.get("https://jsonplaceholder.typicode.com/comments");
	return {
		type: FETCH_COMMENTS,
		payload: response
	};
};

export const login = () => {
	return {
		type: LOG_IN
	};
};

export const logout = () => {
	return {
		type: LOG_OUT
	};
};
