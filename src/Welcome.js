// Welcome.js
import React from 'react';
import './styles/home.css';
import ButtonGenerate from './components/ButtonGenerate';

const Welcome = () => {
  return (
    <div className='welcome' >
      <h2 className='header2'>COMIC GENERATOR</h2>
      <ButtonGenerate />
    </div>
  );
};

export default Welcome;