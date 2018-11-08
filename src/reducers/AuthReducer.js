import { 
    LOGIN_USER_SUCCESS, POST_USER_SUCCESS,
    LOGIN_USER_FAIL, POST_USER_FAIL,
    LOGIN_USER, POST_USER
} from '../actions/types';

const INITIAL_STATE = {
    loading: false, 
    error: '', 
    user: null
};

export default (state  = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading: true, error: ''};

        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE,  user: action.payload};
            
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', loading: false};

        case POST_USER:
            return {...state, loading: true, error: ''};

        case POST_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, response: action.payload};
            
        case POST_USER_FAIL:
            return {...state, error: 'Authentication Failed.', loading: false};
    
        default:
            return state;
    }
}