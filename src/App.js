import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
     
      <Header/>
       <div className="app_body">
        <Sidebar />
        <Switch>
          <Route path ="/room/:roomId">
          <Chat />
          </Route>
          
          <Route path="/">
          <h1>Welcome</h1>
          </Route>
          </Switch>
           </div>
           {/*react-Router -> */}
          </Router>
        



    </div>
  );
}

export default App;
