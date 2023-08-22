import { useState } from 'react'
import '../App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Result from './Result';

function App() {
  return (
    <BrowserRouter>
    <div className="wrap">
      <div className="header">
          <Link to="/">홈</Link><br/>
          <Link to="/about">소개</Link><br/>
          <Link to="result">결과</Link><br/>
        </div>
        <div className="main"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}
export default App
