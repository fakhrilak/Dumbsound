import {API} from '../config/api';

import {ALL_USER, ALL_USER_FAIL} from './types';

export const getallusers = () => async (dispatch) => {
	try {
		let res = await API.get("/user");
		dispatch({
			type: ALL_USER,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: ALL_USER_FAIL,
			payload: err.response.data.error.message
		});
	}
};