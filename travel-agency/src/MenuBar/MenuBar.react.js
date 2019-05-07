import React from 'react';



const MenuBar = (props) => {

    return (
        <div >
<ul>

 {
   props.linkItems.map((item,idx) =>{
      return  <li key={idx}>{item}</li>
   })  
 }
</ul>
        </div>
    );

}

export default MenuBar;