import React from 'react';
import './TheFooter.scss';

import logoSplat from '../../assets/img/logo-splat.svg';
import vk from './assets/vk.svg';
import yt from './assets/yt.svg';

const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="scheme">
        <div className="footer-content">
          <div className="footer__logo">
            <img src={logoSplat} alt="Логотип: SPLAT" />
          </div>

          <div className="footer__document-links">
            <a href="#">Правила акции</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Напишите нам</a>
          </div>

          <div className="footer__socials">
            <a href="#">
              <img src={vk} alt="Социальная сеть вконтакте" />
            </a>
            <a href="#">
              <img src={yt} alt="Канал ютуб" />
            </a>
          </div>

          <div className="footer__copyright">
            © SPLAT 2022
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TheFooter;