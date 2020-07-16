import { API } from '../config/api';

import {
    POST_MUSIC_SUCCSESS,
	POST_MUSIC_FAIL,
	GET_ALL_MUSIC,
	GET_MUSIC_FAIL,
	GET_ONE_MUSIC_FAIL,
	GET_ONE_MUSIC_SUCCESS
} from './types';

export const getMusicAll = () => async (dispatch) => {
	try {
		let res = await API.get("/music");
		dispatch({
			type: GET_ALL_MUSIC,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: GET_MUSIC_FAIL,
			payload: err.response.data.error.message
		});
	}
};

export const postmusic = (
	title,
	year,
	thumbnail,
    artisId,
    attache
  ) => async (dispatch) => {
	const config = {
	  headers: {
		"Content-Type": "application/json",
	  },
	};
  
	const body = JSON.stringify({
		title,
		year,
		thumbnail,
		artisId,
		attache,
	});
  
	try {
	  const res = await API.post("/music", body, config);
	  dispatch({
		type: POST_MUSIC_SUCCSESS,
		payload: res.data.data,
	  });
	} catch (err) {
		dispatch({
			type: POST_MUSIC_FAIL,
			payload: err.response.data
		  });
	  console.log(err)
	}
  };

  export const getOneMusic = (limit) => async (dispatch) => {
	try {
		let res = await API.get(`/music/${limit}`);
		dispatch({
			type: GET_ONE_MUSIC_SUCCESS,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: GET_ONE_MUSIC_FAIL,
			payload: err
		});
	}
};