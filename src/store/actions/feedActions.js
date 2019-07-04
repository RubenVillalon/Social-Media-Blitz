import axios from 'axios';

export const setFeedToState = (feed) => {
	return {
		type: 'getFeed',
		payload: feed
	};
};

export const addBlitz = (blitz) => (dispatch, getState) => {
	const token = getState().authorizationReducer.token;
	const body = JSON.stringify(blitz);

	const headers = new Headers({
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json'
	});

	const config = {
		method: 'POST',
		headers,
		body
	};

	return fetch('https://propulsion-blitz.herokuapp.com/api/blitzs', config)
		.then((response) => {
			console.log(response);
		})
		.catch((err) => err);
};

export const getFeed = () => (dispatch, getState) => {
	const token = getState().authorizationReducer.token;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	};

	axios
		.get('https://propulsion-blitz.herokuapp.com/api/feed', config)
		.then((res) => {
			dispatch(setFeedToState(res.data));
		})
		.catch((err) => err);
};
