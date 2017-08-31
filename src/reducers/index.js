import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducers.js';
import SelectionReducer from './SelectionReducer.js';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});


//where reducer keys are set in the store
