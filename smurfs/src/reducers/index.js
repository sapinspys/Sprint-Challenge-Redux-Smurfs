import {FETCH_SMURFS, 
  ADD_SMURF, 
  SUCCESS, 
  FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null,
      }
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true,
        error:null,
      }
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: null,
      }
    case FAILURE:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
