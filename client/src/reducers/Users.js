import {
    ALL_USER,
    ALL_USER_FAIL
} from '../actions/types';

const initialState = {
    loading: true,
    allusers:[],
    error: '',
};

export default function(state = initialState, actions) {
    const { type, payload } = actions;
    switch (type) {
        case ALL_USER_FAIL:
        case ALL_USER:
            return{
                ...state,
                allusers:payload,
                loading:false
            }
        default:
        return state;
    }
}