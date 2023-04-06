import './App.css';
import axios from 'axios';
import Main from './component/Main';
import Sights from './component/Sights';
import Region from './component/Region';
import { useEffect } from 'react';
import $ from 'jquery';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sights" element={<Sights />} />
          <Route path="/region/:city" element={<Region />} />
        </Routes>
      </BrowserRouter>
      {/* <article className="month"></article> */}
    </div>
  );
}

export default App;
