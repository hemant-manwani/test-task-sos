import { call, takeEvery } from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import { PUSH_PATH } from './../actions/routeActions';

export function* pushPathSaga(action) {
  yield call(browserHistory.push, action.path);
}

export function* watchPushPathSaga() {
  yield takeEvery(PUSH_PATH, pushPathSaga);
}
