
import {takeEvery,put,takeLatest,delay} from 'redux-saga/effects';

 function* addItemAsync(){

   yield delay(2000);
    yield put({type:'ADD_ITEM_ASYNC',value:1})
}

function* subItemAsync(){

    yield put({type:'SUB_ITEM_ASYNC',value:1})
}

export function* watchItem(){

    yield takeLatest('ADD_ITEM',addItemAsync)
    yield takeEvery('SUB_ITEM',subItemAsync)


}