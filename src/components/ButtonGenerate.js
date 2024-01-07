// ButtonGenerate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../images/b.png';
import '../styles/styles.css';
import Quadrinho from '../pages/Quadrinho';

const ButtonGenerate = () => {
  const [showQuadrinho, setShowQuadrinho] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowQuadrinho(true);
    // Navegar para a página '/quadrinho' após carregar um novo quadrinho
    navigate('/quadrinho');
  };

  return (
      <div className='btnDiv'>
        <button className='buttonGenerate' onClick={handleClick}>
          <img className="customImage pulsating-heart" src={Image} alt="Descrição da imagem" />
        </button>
        <button className='tap' onClick={handleClick}>
          <p className='paragraph-left-margin'>TAP TO START</p>
        </button>
        {/* Renderiza Quadrinho apenas se showQuadrinho for verdadeiro */}
        {showQuadrinho && <Quadrinho />}
      </div>
  );
};

export default ButtonGenerate;
