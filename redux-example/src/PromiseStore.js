import axios from 'axios';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';

const logger = createLogger();

const url = 'http://localhost:4000/agents';

const initialState ={
    fetching:false,
    fetched:false,
    agentList:[],
    error:null
};


// Action Creator

export const fetchAgents = (dispatch) =>{
    return{
            type:'FETCH_AGENTS',
            payload:axios.get(url)
    }
}
//Reducer
const agentReducer = (state =initialState, action) =>{

    switch (action.type) {
        case 'FETCH_AGENTS_PENDING':
               return {...state,fetching:true};
    case 'FETCH_AGENTS_FULFILLED':
    return {...state,fetching:false,fetched:true,agentList:action.payload};
    case 'FETCH_AGENTS_REJECTED':
    return {...state,fetching:false,error:action.payload};
        default:
            return state;
    }
    
}


 const middleware = applyMiddleware(promise,thunk,logger);

const promiseStore = createStore(agentReducer,composeWithDevTools(middleware));


      export default promiseStore;