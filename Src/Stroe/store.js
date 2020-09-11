import {createStore, applyMiddleware} from 'redux';
import {rootReducers} from '../Reducers/index';
import logger from 'redux-logger';

export const store = createStore(rootReducers, applyMiddleware(logger));