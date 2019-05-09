import React from 'react';
import  Contxt from '../MyProvider/MyProvider.react';


const MyConsumer = () => {

    return (
        <div >
     <Contxt.Consumer>
     {({ title }) => <h1>title </h1>}
     </Contxt.Consumer>
        </div>
    );

}

export default MyConsumer;