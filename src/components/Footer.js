import React from 'react';
import logo from '../img/wcs.jpg'

function Footer() {
  return (
    <div className="footer">
      <img className='footer' src={logo} alt='wcs logo' />
      <img style={{ right: '0px' }} className='footer' src={logo} alt='wcs logo' />
      <p className='footer'>Made by Dylan Berthier in 2 days, for the Wild Code School Challenge</p>
    </div>
  );
}

export default Footer;