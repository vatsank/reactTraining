import React from 'react';
import {MyContext} from '../MyProvider/MyProvider.react';


const MyConsumer = () => {

    return (
        <div >

        <MyContext.Consumer>
          { ({title}) =><h1>{title}</h1>}

        </MyContext.Consumer>
        </div>
    );

}

export default MyConsumer;