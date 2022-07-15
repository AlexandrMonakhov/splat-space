import React from 'react';
import './ThePrizes.scss';

import prizeOne from './assets/prize-1.png';
import prizeTwo from './assets/prize-2.png';
import clouds from './assets/clouds.png';

const ThePrizes = () => {
  return (
    <section className="prizes">
      <div className="scheme">
        <div className="prizes-content">
          <div className="prizes__title">
            <h2 className="section__title">Космические ПРИЗЫ</h2>
          </div>

          <div className="prizes__subtitle">
            <p>Участвуй, узнавай о космосе больше, выиграй поездку на настоящий космодром на запуск ракеты и встреться с настоящим космонавтом!</p>
          </div>

          <div className="prizes__cards">
            <div className="prizes__card">
              <img src={prizeOne} alt="Поездка на космодром на запуск ракеты" />

              <p className="prizes__card-title">поездка на космодром на запуск ракеты</p>
            </div>

            <div className="prizes__card">
              <img src={prizeTwo} alt="3000 бонусов на баланс карты Магнит" />

              <p className="prizes__card-title">3000 бонусов на баланс карты Магнит</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prizes__clouds">
        <img className="prizes__clouds-image" src={clouds} alt="Облака" />
      </div>
    </section>
  )
}

export default ThePrizes;