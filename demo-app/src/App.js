import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
    </div>
  );
}

export default App;
