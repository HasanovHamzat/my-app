import React from 'react';
import logo from './logo.svg';
import './App.css';
import { First } from './components/First';

function App() {
  console.log("Это майн ветка")
  console.log("Это dev ветка")

  return (
    <div className="App">
      <First />
    </div>
  );
}

export default App;
