// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quadrinho from './pages/Quadrinho';
import Detalhes from './pages/Detalhes';
import Sobre from './pages/Sobre';
import LayoutPrincipal from './components/LayoutPrincipal';
import BackgroundImage from './BackgroundImage';
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <BackgroundImage />
      <div className="App">
        <LayoutPrincipal>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quadrinho" element={<Quadrinho />} />
            <Route path="/detalhes" element={<Detalhes />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </LayoutPrincipal>
      </div>
    </Router>
  );
};

export default App;
