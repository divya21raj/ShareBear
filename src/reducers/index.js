import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostNewReducer from './PostNewReducer';

export default combineReducers({
    auth: AuthReducer,
    postNew: PostNewReducer,
});
