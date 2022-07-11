import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
