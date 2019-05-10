import { createStore,applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger';
import {watchItem} from '../sagas/saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


const initialState ={

    itemCount :1
}

export const reducer = (state = initialState, action) => {
    
    const newState  ={...state}
    switch (action.type) {
        case 'ADD_ITEM_ASYNC':
             newState.itemCount+=action.value;
             break;
            case 'SUB_ITEM_ASYNC':
             newState.itemCount-=action.value;
             break;
    }
             return newState;
    }


const logger = createLogger();
const sagamiddle = createSagaMiddleware();

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(sagamiddle,logger)));
sagamiddle.run(watchItem);

export default store