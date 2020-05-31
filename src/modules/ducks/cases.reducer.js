import { createReducer } from 'reduxsauce';
import { Types } from './cases.actions';

const defaultState = {
  error: null,
  isFetching: false,
  country: null,
  countries: [],
  casesFromDayOne: [],
  herokuAllStatus: [] // comes from heroku coronovirus 19 API
};

export default createReducer(defaultState, {
  [Types.SET_COUNTRY]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      country: action.country
    };
  },
  [Types.SET_COUNTRIES]: (state, action) => {
    const { countries } = action;
    return {
      ...state,
      countries
    };
  },
  [Types.GET_INITIAL_DATA]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },
  [Types.GET_INITIAL_DATA_SUCCESS]: (state, action) => {
    const { country, herokuAllStatus } = action.data;
    return {
      ...state,
      isFetching: false,
      country,
      herokuAllStatus,
      error: null
    };
  },
  [Types.GET_INITIAL_DATA_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  },
  [Types.GET_CASES_BY_COUNTRY]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },
  [Types.GET_CASES_BY_COUNTRY_SUCCESS]: (state, action) => {
    const { casesFromDayOne } = action.data;
    return {
      ...state,
      isFetching: false,
      casesFromDayOne,
      error: null
    };
  },
  [Types.GET_CASES_BY_COUNTRY_FAILURE]: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  }
});
