import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Retro  from './Retro/Retro';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Retro />
    </div>
  );
}

export default App;
