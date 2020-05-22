import { takeLatest, put } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { Creators } from 'modules/ducks/app';

export function* appReady() {
  try {
    // This action will be launched after Finishing Store Rehydrate
    yield put(Creators.appReadySuccess());
  } catch (e) {
    yield put(Creators.appReadyFailure(e.message));
  }
}

export function* watchApp() {
  yield takeLatest(REHYDRATE, appReady);
}
