import { combineReducers } from 'redux';
import configureStore from './configureStore';
import rootSaga from './sagas';
import startupReducer, { StartupState } from './startup';

export interface StoreState {
  startup: StartupState;
}

function createStore() {
  const rootReducer = combineReducers({
    // @ts-ignore
    startup: startupReducer,
  });

  return configureStore(rootReducer, rootSaga);
}

const store = createStore();

export default store;
