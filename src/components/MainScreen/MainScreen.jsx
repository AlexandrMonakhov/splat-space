import React from "react";
import { useParallax } from "react-scroll-parallax";

import "./MainScreen.scss";

import splatProduct from "./assets/splat-product.png";

const MainScreen = () => {
  const titlePrlx = useParallax({ speed: -3 });
  const subtitlePrlx = useParallax({ speed: 4 });

  return (
    <section className="main-screen" id="main-screen">
      <div className="scheme">
        <div className="main-screen-content">
          <div ref={titlePrlx.ref} className="main-screen__title">
            <h1 className="title">Чисти зубы как&nbsp;космонавт</h1>
          </div>

          <div className="main-screen__image">
            <img
              src={splatProduct}
              alt="Биоактивная зубная паста для детей 6-11 лет"
            />
          </div>

          <div ref={subtitlePrlx.ref} className="main-screen__subtitle">
            <h2 className="subtitle">Натуральные инновации из&nbsp;будущего</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
