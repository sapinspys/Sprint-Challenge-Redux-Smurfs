import {FETCH_SMURFS, 
  ADD_SMURF,
  UPDATE_SMURF, 
  DELETE_SMURF,
  SUCCESS, 
  FAILURE } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

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
    case UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: true,
        error:null,
      }
    case DELETE_SMURF:
      return {
        ...state,
        deletingSmurf: true,
        error:null,
      }
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null,
      }
    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
