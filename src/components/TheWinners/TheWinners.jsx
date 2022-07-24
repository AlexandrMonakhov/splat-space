import React, { useMemo, useState } from "react";
import "./TheWinners.scss";

import { winners } from "./seeds";

import planet from "./assets/img/planet.png";
import moon from "./assets/img/moon.png";
import star from "./assets/img/star.png";

const TheWinners = () => {
  const [isCardShow, setIsCardShow] = useState(false);

  const toggleTab = (val) => {
    if (val === isCardShow) return;
    setIsCardShow(val);
  };

  const filtredWinners = useMemo(() => {
    return winners.filter(
      ({ type }) => type === (isCardShow ? "card" : "prize")
    );
  }, [isCardShow]);

  return (
    <section className="winners" id="winners">
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

          <div className="winners__content">
            {!filtredWinners.length
              ? "увы, в этой категории пока никого нет"
              : filtredWinners.map((winner, index) => (
                  <div className="winners__line" key={winner.id}>
                    <p className="winners__line-number">{++index}</p>
                    <p className="winners__line-name">{winner.name}</p>
                    <p className="winners__line-email">{winner.email}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <div className="moon">
        <img src={moon} alt="Декоративная картинка: планета" />
      </div>

      <div className="planet">
        <img src={planet} alt="Декоративная картинка: планета" />
      </div>

      <div className="star">
        <img src={star} alt="Декоративная картинка: падающая звезда" />
      </div>
    </section>
  );
};

export default TheWinners;
