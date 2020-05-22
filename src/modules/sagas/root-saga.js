import { fork, all } from 'redux-saga/effects';

import { watchApp } from 'modules/sagas/app-saga';
import { watchCases } from 'modules/sagas/cases.saga';

export default function* rootSaga() {
  yield all([fork(watchApp), fork(watchCases)]);
}
