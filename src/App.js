// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Quadrinho from './pages/Quadrinho';
import Detalhes from './pages/Detalhes';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Home');

  const handleSelectPage = (page) => {
    setSelectedPage(page);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quadrinho">Gerar e Exibir Quadrinho</Link>
            </li>
            <li>
              {selectedPage === 'Detalhes' ? (
                <Link to="/">Voltar para Home</Link>
              ) : (
                <Link to="/detalhes">Ver Detalhes</Link>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quadrinho" element={<Quadrinho />} />
          <Route path="/detalhes" element={<Detalhes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
