import { takeLatest } from 'redux-saga/effects';
import { STARTUP, startupSaga } from './startup';

export default function* root() {
  yield [
    takeLatest(STARTUP, startupSaga),
  ];
}
