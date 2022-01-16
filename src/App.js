import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'; 

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
