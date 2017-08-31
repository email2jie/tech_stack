import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducers.js';

export default combineReducers({
  libraries: LibraryReducer
});


//where reducer keys are set in the store
