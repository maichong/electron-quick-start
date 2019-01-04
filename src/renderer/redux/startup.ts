import { createAction, handleActions } from 'redux-actions';
import { put } from 'redux-saga/effects';
import immutable from 'seamless-immutable';

export type StartupState = immutable.Immutable<{
  started: boolean;
}>;

export const STARTUP = 'STARTUP';
export const STARTUP_SUCCESS = 'STARTUP_SUCCESS';

export const startSuccess = createAction(STARTUP_SUCCESS);

// 初始state
export const INITIAL_STATE: StartupState = immutable({
  started: false
});

export default handleActions({
  STARTUP_SUCCESS: (state) => {
    if (state.started) return state;
    return immutable({ started: true });
  }
}, INITIAL_STATE);

export function* startupSaga() {
  yield put(startSuccess());
}
