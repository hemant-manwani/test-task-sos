import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store/store';
import { watchPushPathSaga } from '../routes/sagas/routeSaga';
import startup from '../modules/startup/sagas/startupSaga';

function* root() {
  yield fork(watchPushPathSaga);
  yield fork(startup);
}

const runRootSaga = () => sagaMiddleware.run(root);

export default runRootSaga;
