import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './redux/reducers/root-reducer';
import rootSaga from './redux/sagas/ReactSaga';

const sagaMiddleWare=createSagaMiddleware();

const store=createStore(rootReducer,applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga);

export default store;