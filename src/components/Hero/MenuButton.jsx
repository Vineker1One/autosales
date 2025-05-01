import React, { useState } from 'react';
import '../../styles/menu.css';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -80; // если есть фиксированное меню
      const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false); // закрыть меню после перехода
    }
  };

  return (
    <>
      <div className="menu-button-text" onClick={() => setIsOpen(true)}>
        MENU
      </div>

      {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)}>
          <div className="menu-panel" onClick={(e) => e.stopPropagation()}>
            <nav className="menu-links">
              <div onClick={() => scrollToSection('home')}>Главная</div>
              <div onClick={() => scrollToSection('team')}>Наши клиенты</div>
              <div onClick={() => scrollToSection('overview')}>Обзор авто</div>
              <div onClick={() => scrollToSection('contacts')}>Контакты</div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuButton;
