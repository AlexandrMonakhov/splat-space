import React from "react";
import "./TheRules.scss";

import stepOne from "./assets/step-1.png";
import stepTwo from "./assets/step-2.png";
import stepThree from "./assets/step-3.png";

const TheRules = () => {
  return (
    <section className="rules" id="rules">
      <div className="scheme">
        <div className="rules-content">
          <div className="rules__title">
            <h2 className="section__title">Как выиграть</h2>
          </div>

          <div className="rules__steps">
            <div data-aos="zoom-in-up" className="rules__step">
              <img
                className="rules__step-image"
                src={stepOne}
                alt="Купи продукты SPLAT Kids или SPLAT Junior"
              />

              <h3 className="rules__step-title">
                Купи товары из детской серии SPLAT c 24 августа 2022 года по 21
                сентября 2022 года
              </h3>
            </div>

            <div data-aos="zoom-in-up" data-aos-delay="300" className="rules__step">
              <img
                className="rules__step-image"
                src={stepTwo}
                alt="Сохраняй чек до окончания розыгрыша"
              />

              <h3 className="rules__step-title">
                Сохраняй чек до окончания розыгрыша
              </h3>
            </div>

            <div data-aos="zoom-in-up" data-aos-delay="600" className="rules__step">
              <img
                className="rules__step-image"
                src={stepThree}
                alt="Участвуй в розыгрыше главного приза — полета на космодром на старт ракеты и призов от SPLAT и его партнёров"
              />

              <h3 className="rules__step-title">
                Участвуй в розыгрыше главного приза — полета на космодром
                на старт ракеты и призов от SPLAT и его партнёров
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheRules;
