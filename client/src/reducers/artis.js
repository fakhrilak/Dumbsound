import {
    POST_ARTIS_FAIL,
    POST_ARTIS_SUCCSESS,
    GET_ALL_ARTIS,
    GET_ARTIS_FAIL
} from '../actions/types';
const initialState = {
    loading: true,
    allartis:[],
    error:'',
};
export default function(state = initialState, actions) {
    const { type, payload } = actions;
    switch (type) {
        case POST_ARTIS_SUCCSESS:
            return{
                ...state,
				loading: false
            }
        case GET_ALL_ARTIS:
            return{
                ...state,
                allartis:payload,
                loading: false
            }
        case POST_ARTIS_FAIL:
        case GET_ARTIS_FAIL:
        default:
        return state;
    }
}