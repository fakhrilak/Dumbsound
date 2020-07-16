import {
    POST_MUSIC_FAIL,
    POST_MUSIC_SUCCSESS,
    GET_ALL_MUSIC,
    GET_MUSIC_FAIL,
    GET_ONE_MUSIC_FAIL,
    GET_ONE_MUSIC_SUCCESS,
} from '../actions/types';
const initialState = {
    loading: true,
    allmusic:[],
    onemusic:null,
    error: '',
};
export default function(state = initialState, actions) {
    const { type, payload } = actions;
    switch (type) {
        case POST_MUSIC_FAIL:
        case GET_MUSIC_FAIL:
        case GET_ONE_MUSIC_FAIL:
        case POST_MUSIC_SUCCSESS:
            return {
				...state,
				loading: false
            };
        case GET_ALL_MUSIC:
            return{
                ...state,
                allmusic:payload,
                loading:false
            }
        case GET_ONE_MUSIC_SUCCESS:
            return{
                ...state,
                onemusic:payload,
                loading:false
            }
        default:
        return state;
    }
}