import React from 'react';
import './MainScreen.scss';

import splatProduct from './assets/splat-product.png';

const MainScreen = () => {
  return (
    <section className="main-screen" id="main-screen">
      <div className="scheme">
        <div className="main-screen-content">
          <div className="main-screen__title">
            <h1 className="title">Чисти зубы как&nbsp;космонавт</h1>
          </div>

          <div className="main-screen__image">
            <img src={splatProduct} alt="Биоактивная зубная паста для детей 6-11 лет" />
          </div>

          <div className="main-screen__subtitle">
            <h2 className="subtitle">Натуральные инновации из&nbsp;будущего</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainScreen;