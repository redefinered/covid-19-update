import { takeLatest, put, call } from 'redux-saga/effects';
import { Types, Creators } from '../ducks/cases.actions';
import { getCountries } from '../services';

function* getCountriesAction() {
  try {
    let countries = yield call(getCountries);
    yield put(Creators.getCountriesSuccess(countries));
  } catch (error) {
    yield put(Creators.getCountriesFailure(error.message));
  }
}

export function* watchCases() {
  yield takeLatest(Types.GET_COUNTRIES, getCountriesAction);
}
