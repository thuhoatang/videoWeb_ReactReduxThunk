import { combineReducers } from 'redux';
import videoReducer from './video';

export default combineReducers({
  video: videoReducer,
});
