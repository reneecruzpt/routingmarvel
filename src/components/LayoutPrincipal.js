// LayoutPrincipal.js

import React from 'react';
import Navbar from './navbar';
const LayoutPrincipal = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default LayoutPrincipal;