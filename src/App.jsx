import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import Name from './Components/Me/name';
import Welcome from './Components/Welcome/welcome';
import Projects from './Components/Projects/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      <Welcome />
      <Projects />
    </div>
  );
}

export default App;
