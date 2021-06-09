import React from 'react';
import logo from './BNLogo3.svg';

function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{ objectFit: 'contain', width: '100%' }}
    />
  );
}

export default Logo;
