import {createStore,applyMiddleware, combineReducers} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import {reducer as formReducer} from 'redux-form';

const logger = createLogger();

const formstore = createStore(
    combineReducers({form:formReducer}),
    composeWithDevTools(applyMiddleware(thunk,logger)));

export default  formstore;
