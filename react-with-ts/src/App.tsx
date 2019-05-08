import React from 'react';
import './App.css';
import Banner from './components/Banner'
import AdminDashBoard from './container/AdminDashBoard';
const App: React.FC = () => {
  return (
    <div className="App">
       <h1>Using Typescript</h1>
       
       <Banner name={'Using Typescript'} age={550}></Banner>
    <AdminDashBoard></AdminDashBoard>
       </div>
  );
}

export default App;
