import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//middlewares may need to modifies in future, it's better to put it into array [logger], not just logger
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// create persistStore
export const persistor = persistStore(store);

export default { store, persistor };
