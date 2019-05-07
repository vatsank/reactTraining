import React from 'react';



const Agent = (props) => {

    return (
        <div >
        <div className='card'>
        <div className='card-body'>
       <div className='card-title'>{props.name}</div>
       <div className='panel-text'>{props.phoneNumber}</div>
      </div>
      </div>
        </div>
    );

}

export default Agent;