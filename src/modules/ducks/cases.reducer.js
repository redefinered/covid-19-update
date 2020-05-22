import { createReducer } from 'reduxsauce';
import { Types } from './cases.actions';

const defaultState = {
  errpr: null,
  isFetching: false,
  countries: []
};

export default createReducer(defaultState, {
  [Types.GET_COUNTRIES]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },
  [Types.GET_COUNTRIES_SUCCESS]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      countries: action.data
    };
  },
  [Types.GET_COUNTRIES_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  }
});
