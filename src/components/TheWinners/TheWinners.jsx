import React, { Suspense, useMemo, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import "./TheWinners.scss";

import { winners } from "./seeds";

import planet from "./assets/img/planet.png";
import moon from "./assets/img/moon.png";
import star from "./assets/img/star.png";
const Comets = React.lazy(() => import("../../misc/Comets"));

const TheWinners = () => {
  const planetPrlx = useParallax({ speed: 3, rotate: [0, 30] });
  const moonPrlx = useParallax({ translateX: [-20, 0], rotate: [0, 70] });
  const cometPrlx = useParallax({
    speed: 22,
    translateX: [250, 1],
    translateY: [-200, 1],
  });

  const [isCardShow, setIsCardShow] = useState(false);

  const toggleTab = (val) => {
    if (val === isCardShow) return;
    setIsCardShow(val);
  };

  const cardWinners = useMemo(
    () => winners.filter(({ type }) => type === "card"),
    []
  );

  const renderTable = () => console.log(cardWinners, "d");

  return (
    <section className="winners" id="winners">
      <Suspense>
        <Comets count={5} />
      </Suspense>
      <div className="scheme">
        <div className="winners-content">
          <div className="winners__title">
            <h2 className="section__title">Победители</h2>
          </div>

          <div className="winners__tabs">
            <button
              onClick={() => toggleTab(true)}
              className={`winners__tabs-button ${isCardShow ? "active" : ""}`}
            >
              Бонусы на карту
            </button>
            <button
              onClick={() => toggleTab(false)}
              className={`winners__tabs-button ${!isCardShow ? "active" : ""}`}
            >
              Главный приз
            </button>
          </div>

          <SwitchTransition>
            <CSSTransition
              key={isCardShow}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div className="d">
                {isCardShow ? (
                  <div
                    className={`winners__content ${
                      !cardWinners.length ? "centred" : ""
                    }`}
                  >
                    {!cardWinners.length
                      ? "увы, в этой категории пока никого нет"
                      : cardWinners.map((winner, index) => (
                          <div className="winners__line" key={winner.id}>
                            <p className="winners__line-number">{++index}</p>
                            <p className="winners__line-name">{winner.name}</p>
                            <p className="winners__line-email">
                              {winner.email}
                            </p>
                          </div>
                        ))}
                  </div>
                ) : (
                  <div className="winners__content__empty">
                    приз еще ищет победителя 😉
                   </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div ref={moonPrlx.ref} className="moon">
        <img src={moon} alt="Декоративная картинка: планета" />
      </div>

      <div ref={planetPrlx.ref} className="planet">
        <img src={planet} alt="Декоративная картинка: планета" />
      </div>

      <div ref={cometPrlx.ref} className="star">
        <img src={star} alt="Декоративная картинка: падающая звезда" />
      </div>
    </section>
  );
};

export default TheWinners;
