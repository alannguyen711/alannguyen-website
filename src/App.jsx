import React from 'react';
import './App.css';
import Sarah from './Components/Sarah';
import SarahHeader from './Components/SarahHeader/SarahHeader';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <SarahHeader />
      <div className="section" />
      <Sarah />
      <div className="section" />
      <Projects />
    </div>
  );
}

export default App;
