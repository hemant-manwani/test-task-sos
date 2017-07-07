import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers/reducers';

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(sagaMiddleware),
  );
  return store;
}
