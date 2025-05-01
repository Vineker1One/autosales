import React from 'react';
import '../../styles/navbar.css';
import MenuButton from './MenuButton';
import LOGO from '../../image/logo.png';



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={LOGO} alt='logo'/>
      </div>
      <div className="navbar-title">
        <span className='navbar-text'> ABTOSALES </span>
        <MenuButton />
        </div>
      
    </div>
  );
};

export default Navbar;
