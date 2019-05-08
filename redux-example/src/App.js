import React from 'react';
import Greeting from './Greeting/Greeting.react';
import './App.css';
import ShowAgents from './ShowAgents/ShowAgents.react';

function App() {
  return (
    <div className="App">
    <h2>Redux Example</h2>
   {/* <Greeting></Greeting> */}
   <ShowAgents></ShowAgents>
     </div>
  );
}

export default App;
