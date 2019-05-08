
import {createStore} from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';


// should  take initialState and action as argument

const reducer = (prevState={text:'Hello'},action) =>{

    switch (action.type) {
        case 'BIRTHDAY':
            return {...prevState,...action};
         case 'WEDDINGDAY':
            return {...prevState,...action};
             default:
                 return prevState;
    }
}

const store = createStore(reducer,composeWithDevTools());

export default store;