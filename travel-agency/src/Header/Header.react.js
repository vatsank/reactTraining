import React from 'react';
import MenuBar from '../MenuBar/MenuBar.react';

const links = ['Home','History','Contact'];
const Header = (props) => {

    return (
        <div className='container'>
        
        <div className='row'>
          <div className='col-md-2'> 
            <img src={props.logo} alt="company logo" className='logo'/>
        </div>
          <div className='col-md-8'> 
            <h1>{props.majHeading}</h1>
        </div>
          <div className='col-md-2'> 
            <img src ='pict/pict.jpg' alt="leo" className='logo'/>
        </div>
        </div>

        <div className='row'>
          <MenuBar linkItems={links}></MenuBar>
        </div>
        
       
       
       
        
        
        </div>
    );


}

export default Header;