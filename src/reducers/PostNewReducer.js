import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCESS} from '../actions/types';

const INITIAL_STATE = {
    loading: false, 
    error: '', 
    suggestions: []
};

export default (state  = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUGGESTIONS:
            return {...state, loading: true, error: ''};
            
        case GET_SUGGESTIONS_SUCCESS:
            return {...state,...INITIAL_STATE, loading:false, suggestions:action.payload}
       
        default:
            return state;
    }
}