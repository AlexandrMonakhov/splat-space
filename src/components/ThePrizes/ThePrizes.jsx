import React, { Suspense } from "react";
import "./ThePrizes.scss";

import prizeOne from "./assets/prize-1.png";
import prizeTwo from "./assets/prize-2.png";
import clouds from "./assets/clouds.png";
import planet from "./assets/planet.png";
import planetTwo from "./assets/planet-2.png";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

const Comets = React.lazy(() => import("../../misc/Comets"));

const ThePrizes = () => {
  const titlePrlx = useParallax({ speed: 3 });
  const cloudsPrlx = useParallax({ speed: -10 });
  const planetPrlx = useParallax({ speed: -20 });
  const planet1Prlx = useParallax({
    easing: "easeOutQuad",
    translateY: [0, 221],
  });

  return (
    <section className="prizes" id="prizes">
      <Suspense>
        <Comets count={9} />
      </Suspense>

      <div className="scheme">
        <div className="prizes-content">
          <div className="prizes__title" ref={titlePrlx.ref}>
            <h2 className="section__title">Космические ПРИЗЫ</h2>
          </div>

          <div className="prizes__subtitle">
            <p>
              Участвуй, узнавай о космосе больше, выиграй поездку на настоящий
              космодром на запуск ракеты и встреться с настоящим космонавтом!
            </p>
          </div>

          <div className="prizes__cards">
            <div className="prizes__card">
              <Tilt scale={1.1} transitionSpeed={2500}>
                <img
                  src={prizeOne}
                  alt="Поездка на космодром на запуск ракеты"
                />
              </Tilt>
              <p className="prizes__card-title">
                поездка на космодром на запуск ракеты
              </p>{" "}
            </div>

            <div className="prizes__card">
              <Tilt scale={1.1} transitionSpeed={2500}>
                <img src={prizeTwo} alt="3000 бонусов на баланс карты Магнит" />
              </Tilt>
              <p className="prizes__card-title">
                3000 бонусов на баланс карты Магнит
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={cloudsPrlx.ref} className="prizes__clouds">
        <img className="prizes__clouds-image" src={clouds} alt="Облака" />
      </div>
      <div className="planet" ref={planet1Prlx.ref}>
        <img src={planet} alt="Декоративная картинка: планета" />
      </div>
      <div className="planet-2" ref={planetPrlx.ref}>
        <img src={planetTwo} alt="Декоративная картинка: планета" />
      </div>

      <ParallaxBanner
        layers={[{ image: "/static/stars.png", speed: -15 }]}
        className="aspect-[2/1] stt"
      />
    </section>
  );
};

export default ThePrizes;
