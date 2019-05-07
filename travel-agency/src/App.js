import React from 'react';

import './App.css';
import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';
import travel from './images/logo.jpg';

const  handleClick = (event) =>{

  console.log(event)
  console.log('click event fired');
}
function App() {
  return (
    <div className="App">
<Header majHeading={"Leo Travel Agency"} 
            logo={travel}></Header>
    <Footer action={handleClick} designer={'Ramesh Infotech'} ></Footer>
      </div>
  );
}

export default App;
