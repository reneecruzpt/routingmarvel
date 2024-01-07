// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
        <h1 className='navbarHeader centerText'>R A N D O M C O M I C S</h1>
        <div className='navbar'>
            <nav>
            <ul>
                <li>
                <Link to="/">HOME</Link>
                </li>
                <li>
                <Link to="/quadrinho">BANDA DESENHADA</Link>
                </li>
                <li>
                <Link to="/sobre">SOBRE A APP</Link>
                </li>
            </ul>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;
