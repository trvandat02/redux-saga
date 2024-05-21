// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import productSaga from './reduxSaga';

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:reducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);

export default store;