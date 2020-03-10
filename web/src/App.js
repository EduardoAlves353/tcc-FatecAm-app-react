import React from 'react';
import './App.css';

import logo from './assets/logoPet.png'

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="AdoPet"/>

      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
