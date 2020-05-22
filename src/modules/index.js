import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appReducer from 'modules/ducks/app';
import casesReducer from 'modules/ducks/cases.reducer';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['casesReducer']
};

const appReducers = persistCombineReducers(persistConfig, {
  appReducer,
  casesReducer
});

export default (state, action) => {
  if (action.type === 'PURGE_STORE') {
    storage.removeItem('persist:primary');
    state = undefined;
  }

  return appReducers(state, action);
};
