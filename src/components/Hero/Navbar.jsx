import React from 'react';
import '../../styles/navbar.css';
import MenuButton from './MenuButton';
import LOGO from '../../image/logo.png';
import TITLE from '../../image/AUTOSALES.png';



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
      <div className="navbar-logo">
        <img src={LOGO} alt='logo'/>
      </div>
        <span className='navbar-text'> <img src={TITLE}/> </span>
        <MenuButton />
        </div>
      
    </div>
  );
};

export default Navbar;
