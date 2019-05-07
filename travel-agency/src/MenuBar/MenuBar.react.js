import React from 'react';



const MenuBar = (props) => {

    return (
        <div >
<ul>

 {
   props.linkItems.map((item,idx) =>{
      return  <li key={idx}><a href={item}>{item}</a></li>
   })  
 }
</ul>
        </div>
    );

}

export default MenuBar;