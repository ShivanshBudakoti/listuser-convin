import {Route,BrowserRouter,Routes }from 'react-router-dom';
import Home from './Home';
import React from 'react';

function App() {
 
  return (
    <div className="App">
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={}/>
    </Routes>
    </BrowserRouter> */}
    <Home/>
    </div>
  );
}

export default App;
