import React from 'react';
import Greeting from './Greeting/Greeting.react';
import './App.css';
import AddAgents  from './AddAgents/AddAgents.react';
import ShowAgents from './ShowAgents/ShowAgents.react';
import PromiseAgent from './PromiseAgent/PromiseAgent.react';

export const showResults = (values)=>{
  console.log(values)
 
}
function App() {

   return (
    <div className="App">
    <h2>Redux Example</h2>
   {/* <Greeting></Greeting> */}
   {/*<ShowAgents></ShowAgents>*/}
   {/* <PromiseAgent></PromiseAgent> */}
   <AddAgents onSubmit={showResults}></AddAgents>
     </div>
  );
}

export default App;
