import React from 'react';



const Tour = (props) => {

    return (
        <div className='card'>
          <div className='card-body'>
         <div className='card-title'>{props.tourName}</div>
         <div className='panel-text'>{props.cost}</div>
        </div>
        </div>
    );

}

export default Tour;