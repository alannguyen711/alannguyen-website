import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
