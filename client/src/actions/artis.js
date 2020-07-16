import { API } from '../config/api';

import {
    POST_ARTIS_SUCCSESS,
	POST_ARTIS_FAIL,
    GET_ALL_ARTIS,
    GET_ARTIS_FAIL
} from './types';

export const postartis = (
	name,
	old,
	type,
	startcarer,
  ) => async (dispatch) => {
	const config = {
	  headers: {
		"Content-Type": "application/json",
	  },
	};
  
	const body = JSON.stringify({
      name,
      old,
      type,
      startcarer,
	});
  
	try {
	  const res = await API.post("/artis", body, config);
	  dispatch({
		type: POST_ARTIS_SUCCSESS,
		payload: res.data.data,
	  });
	} catch (err) {
	  dispatch({
		type: POST_ARTIS_FAIL,
		payload: err.response.data
	  });
	  console.log(err)
	}
  };

export const getallartis =(limit) => async (dispatch)=>{
	try{
		let res = await API.get('/artis');
		dispatch({
			type: GET_ALL_ARTIS,
			payload: res.data.data,
		})
	}catch(err){
		dispatch({
			type: GET_ARTIS_FAIL,
			payload: err.response.data
		});
		console.log(err)
	}
}