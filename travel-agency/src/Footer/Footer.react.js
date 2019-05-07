import React from 'react';
import PropTypes from 'prop-types'


const Footer = (props) => {

    return (
        <div >

        <h6>Designed by {props.designer}</h6>
        <p>{props.copyRight}</p>
        {props.children}
        <button onClick={props.action}>Mail</button>
 
        </div>
    );

}

Footer.propTypes = {
    action :PropTypes.func,
    designer:PropTypes.string.isRequired
  }

  Footer.defaultProps ={
    copyRight:'2018-2020'
  }
export default Footer;