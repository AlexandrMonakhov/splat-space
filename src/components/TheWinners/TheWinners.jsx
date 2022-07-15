import React from 'react';
import './TheWinners.scss';

import { winners } from './seeds';

const TheWinners = () => {
  return (
    <section className="winners">
      <div className="scheme">
        <div className="winners-content">
          <div className="winners__title">
            <h2 className="section__title">Победители</h2>
          </div>

          <div className="winners__tabs">
            <button className="winners__tabs-button active">Бонусы на карту</button>
            <button className="winners__tabs-button">Главный приз</button>
          </div>

          <div className="winners__content">
            {
              winners.map((winner, index) => (
                <div className="winners__line" key={winner.id}>
                  <p className="winners__line-number">{++index}</p>
                  <p className="winners__line-name">{winner.name}</p>
                  <p className="winners__line-email">{winner.email}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheWinners;