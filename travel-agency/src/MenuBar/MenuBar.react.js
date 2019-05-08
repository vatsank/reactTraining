import React from 'react';
import {Link} from 'react-router-dom';


const MenuBar = (props) => {

    return (
        <div >
<ul>

 {
   props.linkItems.map((item,idx) =>{
      return  <li key={idx}><Link to={item}>{item}</Link></li>
   })  
 }
</ul>
        </div>
    );

}

export default MenuBar;