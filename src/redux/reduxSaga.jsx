
import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

//worker
function* getProducts() {
    let data = yield fetch('https://my-json-server.typicode.com/trvandat02/react-data/products');
    data = yield data.json();
    yield put({type: SET_PRODUCT_LIST, data})
}

//worker
function* searchProducts(data) {
    let result = yield fetch(`https://my-json-server.typicode.com/trvandat02/react-data/products?q=${data.query}`);
    result = yield result.json();
    yield put({type: SET_PRODUCT_LIST, data:result})
}

//watcher
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default productSaga;



