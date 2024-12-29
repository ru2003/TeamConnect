import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM naming convention for the defaultS
    <div className="App">
      <h1>
        Hello Programmers...lets buid the TeamConnect 
      </h1>
      
      <Header/>

      <div className="app_body">
        <Sidebar />
      </div>
 
      
        {/*react-Router -> */}



    </div>
  );
}

export default App;
