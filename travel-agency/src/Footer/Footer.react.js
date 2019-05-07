import React from 'react';



const Footer = (props) => {

    return (
        <div >

        <h6>Designed by Ramesh Infotech</h6>
        <button onClick={props.action}>Mail</button>
        </div>
    );

}

export default Footer;