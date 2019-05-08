import axios from 'axios';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();

const url = 'http://localhost:4000/agents';

// Action Creator

const fetchAgents = (agentList)=>{

    return{
        type:'FETCH_AGENTS',
        agentList
    }

}

// Reducer with initalstate empty array 
// and an Action.

const agentReducer = (initalState={agentList:[{id:101,name:'ram',phone:45050}]},action)=>{

    switch (action.type) {
        case 'FETCH_AGENTS':
            return {...initalState,...action};
         default:
            return initalState;
    }
    
}

export  function getAllAgents(){

    return function(dispatch){

        return axios.get(url).then(resp =>{
            dispatch(fetchAgents(resp.data));
        });
    }
 }

const restStore = 
createStore(
    agentReducer,
      composeWithDevTools(applyMiddleware(thunk,logger)));

      export default restStore;