import React from "react";
import ReactSwipeEvents from "react-swipe-events";
import "./MobileMenu.scss";

import closeBtn from "./close-menu.svg";

const MobileMenu = ({ toggle, show }) => {
  const tryToClose = () => {
    if (show) {
      toggle();
    }
  };

  return (
    <ReactSwipeEvents onSwipedRight={tryToClose}>
      <div className={`mobile-menu ${show ? "mobile-shown" : ""}`}>
        <button className="mobile-menu__close-btn" onClick={toggle}>
          <img src={closeBtn} alt="Закрыть меню" loading="lazy" />
        </button>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-nav">
            <a 
              className="header-nav__link" 
              href="#rules"
              onClick={toggle} 
            >
              Как выиграть
            </a>

            <a 
              className="header-nav__link" 
              href="#prizes"
              onClick={toggle} 
            >
              Призы
            </a>

            <a 
              className="header-nav__link" 
              href="#winners"
              onClick={toggle} 
            >
              Победители
            </a>
            
            <a
              className="header-nav__link" 
              href="#questions"
              onClick={toggle} 
            >
              Вопросы и ответы
            </a>
          </nav>
        </div>
      </div>
    </ReactSwipeEvents>
  );
};

export default MobileMenu;
