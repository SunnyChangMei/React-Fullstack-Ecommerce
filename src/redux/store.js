import {createStore, applyMiddleware} from 'redux'

import logger from 'redux-logger'

import rootReducer from './root-reducer'

//middlewares may need to modifies in future, it's better to put it into array [logger], not just logger
const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
