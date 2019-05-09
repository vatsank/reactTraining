import React ,{useState} from 'react';
import Greeting from './Greeting/Greeting.react';
import './App.css';
import AddAgents  from './AddAgents/AddAgents.react';
import ShowAgents from './ShowAgents/ShowAgents.react';
import PromiseAgent from './PromiseAgent/PromiseAgent.react';
import axios from 'axios';
import MyProvider from './MyProvider/MyProvider.react';
import MyConsumer from './MyConsumer/MyConsumer.react';


function App() {

   const showResults = (values)=>{
    console.log(values)
    const url = 'http://localhost:4000/agents';
    axios.post(url,values).then(resp =>
      {    setStatus("One Agent Added");
    });
   
  }
  
  const [status,setStatus] =useState('');

   return (
    <div className="App">
   
    <h2>Redux Example</h2>
   {/* <Greeting></Greeting> */}
   {/*<ShowAgents></ShowAgents>*/}
   {/* <PromiseAgent></PromiseAgent> */}
   <p>{status}</p>
{/*    <AddAgents onSubmit={showResults}></AddAgents> */}
  
   <MyProvider>
    <MyConsumer></MyConsumer>
   </MyProvider>
     </div>
  );
}

export default App;
