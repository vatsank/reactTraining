import React from 'react';



const Greeter = (props) => {

    return (
        <div >
<button onClick={props.action}>{props.label}</button>

        </div>
    );

}

export default Greeter;