import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
  {
    appReady: null,
    appReadySuccess: null,
    appReadyFailure: ['error'],
    default: null
  },
  {}
);

export { Types, Creators };

const defaultState = {
  isLoading: true,
  error: null
};

export default createReducer(defaultState, {
  [Types.APP_READY]: (state) => {
    return {
      ...state,
      isLoading: true
    };
  },
  [Types.APP_READY_SUCCESS]: (state) => {
    return {
      ...state,
      isLoading: false
    };
  },
  [Types.APP_READY_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false
    };
  },
  [Types.DEFAULT]: () => {
    return {
      ...defaultState,
      isLoading: false
    };
  }
});
