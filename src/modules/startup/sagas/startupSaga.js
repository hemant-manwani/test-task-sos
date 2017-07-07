/* global localStorage:true*/
/* eslint no-undef: "error"*/
import { put } from 'redux-saga/effects';

/* eslint-disable camelcase*/
function* startup() {
  yield put({ type: 'APP_STARTING_UP' });
}
/* eslint-enable camelcase*/

export default startup;
