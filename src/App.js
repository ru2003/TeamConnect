import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Chat from './Chat';
function App() {
  return (

    <div className="App">
      <Router>
     
      <Header/>
       <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path ="/room/:roomId" element={<Chat/>}>   </Route>
          
          <Route path="/" element={<h1>Welcome</h1>}> </Route>
          
          
          </Routes>
           </div>
           {/*react-Router -> */}
          </Router>
        



    </div>
  );
}

export default App;
