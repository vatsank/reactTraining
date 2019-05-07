import React from 'react';
import MenuBar from '../MenuBar/MenuBar.react';

const links = ['Home','History','Contact'];
const Header = (props) => {

    return (
        <div>
        <MenuBar linkItems={links}></MenuBar>
        <img src={props.logo} alt="company logo"/>
        <h1>{props.majHeading}</h1>
        <img src ='pict/pict.jpg' alt="leo"/>
        </div>
    );


}

export default Header;