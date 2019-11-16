import { takeLatest, all } from 'redux-saga/effects';
import { STARTUP, startupSaga } from './startup';

export default function* root() {
  yield all([takeLatest(STARTUP, startupSaga)]);
}
