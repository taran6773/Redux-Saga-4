import {take,call,all} from 'redux-saga/effects'

import {fetchDataSaga} from './FetchDataSaga'

export default function* rootSaga(){
    yield all([
        fetchDataSaga()
    ])
}