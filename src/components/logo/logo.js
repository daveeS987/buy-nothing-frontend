import React from 'react';
import logo from './BNLogo3.svg'; // Tell webpack this JS file uses this image

function Logo() {
  // Import result is the URL of your image
  return (
    <img
      src={logo}
      className="logoimage"
      alt="Logo"
      style={{ maxWidth: '300%', width: '100%' }}
    />
  );
}

export default Logo;
