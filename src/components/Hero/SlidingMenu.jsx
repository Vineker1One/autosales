import React from 'react';
import '../../styles/menu.css'; // Подключаем стили для меню

const SlidingMenu = ({ isOpen, items, onItemClick, closeMenu }) => {
  if (!isOpen) {
    return null; // Не рендерим меню, если оно закрыто
  }

  const handleItemClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
        block: 'start',    // Выровнять по верхнему краю секции
      });
    }
    onItemClick(); // Вызываем функцию закрытия меню после клика
  };

  return (
    // Добавляем overlay для клика вне меню (опционально)
    <div className="menu-overlay" onClick={closeMenu}>
      {/* Предотвращаем закрытие меню при клике на само меню */}
      <div className={`sliding-menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {/* Используем button, так как это действие, а не переход на другую страницу */}
              <button onClick={() => handleItemClick(item.targetId)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SlidingMenu;