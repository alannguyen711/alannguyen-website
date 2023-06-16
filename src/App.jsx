import React from 'react';
import './App.css';
import Alan from './Components/AlanNguyen/Alan';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section" />
      <Alan />
      <div className="section" />
      <Projects />
      <div className="first-section" />
    </div>
  );
}

export default App;
