import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSage from './root-saga';

const sagaMiddleware = createSagaMiddleware();

//middlewares may need to modifies in future, it's better to put it into array [logger], not just logger
const middlewares = [sagaMiddleware];

// check if we on dev mode
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSage);

// create persistStore
export const persistor = persistStore(store);

export default { store, persistStore };
