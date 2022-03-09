import { combineReducers } from 'redux';
import videoListReducer from './videoListReducer';

export default combineReducers({
    videos : videoListReducer
})