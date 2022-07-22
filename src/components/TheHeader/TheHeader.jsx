import React from 'react';
import './TheHeader.scss';

import logoSplat from "../../assets/img/logo-splat.svg";
import logoMagnit from "../../assets/img/logo-magnit.svg";

const TheHeader = ({ toggle }) => {
  return (
    <header className="header">
      <div className="scheme">
        <div className="header-content">
          <div className="header__logo header__logo-splat">
            <img src={logoSplat} alt="Логотип: SPLAT" />
          </div>

          <nav className="header-navigaton__links">
            <a
              className="header-navigation__link" 
              href="#rules"
            >
              Как выиграть
            </a>

            <a
              className="header-navigation__link" 
              href="#prizes"
            >
              Призы
            </a>
            
            <a
              className="header-navigation__link" 
              href="#winners"
            >
              Победители
            </a>

            <a
              className="header-navigation__link" 
              href="#questions"
            >
              Вопросы и ответы
            </a>
          </nav>

          <div className="header__logo header__logo-magnit">
            <img src={logoMagnit} alt="Логотип: Магнит" />
          </div>

          <button onClick={toggle} className="header-menu__button" />
        </div>
      </div>
    </header>
  )
}

export default TheHeader;