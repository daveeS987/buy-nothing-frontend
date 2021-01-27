import React from 'react';
import logo from './BNLogo2.svg' // Tell webpack this JS file uses this image



function Logo() {
  // Import result is the URL of your image
  return <img src={logo}  width="400px" alt="Logo" />;
}

export default Logo;