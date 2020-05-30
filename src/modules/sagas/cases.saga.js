import { takeLatest, put, call } from 'redux-saga/effects';
import { Types, Creators } from 'modules/ducks/cases.actions';
import { getGeolocation, getCasesByCountry, getHerokuAllStatus } from 'modules/services';
import isEmpty from 'lodash/isEmpty';

function* getInitialDataRequest() {
  try {
    const { country_name: country } = yield call(getGeolocation);
    const herokuAllStatus = yield call(getHerokuAllStatus);
    if (isEmpty(herokuAllStatus)) throw new Error('Error: no data available');
    yield put(Creators.getInitialDataSuccess({ country, herokuAllStatus }));
  } catch (error) {
    yield put(Creators.getInitialDataFailure(error.message));
  }
}

function* getCasesByCountryRequest(action) {
  try {
    let casesFromDayOne = yield call(getCasesByCountry, action.country);
    yield put(Creators.getCasesByCountrySuccess({ casesFromDayOne }));
  } catch (error) {
    yield put(Creators.getCasesByCountryFailure(error.message));
  }
}

export function* watchCases() {
  yield takeLatest(Types.GET_INITIAL_DATA, getInitialDataRequest);
  yield takeLatest(Types.GET_CASES_BY_COUNTRY, getCasesByCountryRequest);
}
