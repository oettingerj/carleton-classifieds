import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar.js';
import SideBar from './Components/SideBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <SideBar/>
    </div>
  );
}

export default App;
