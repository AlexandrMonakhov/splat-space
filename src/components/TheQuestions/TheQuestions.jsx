import React, { useState } from 'react';
import './TheQuestions.scss';

import { questions } from './seeds';

const TheQuestions = () => {
  const [curQuest, setCurQuest] = useState(0);

  const setQuestion = (id) => {
    if (id === curQuest) {
      setCurQuest(0);
      return;
    } else {
      setCurQuest(id);
    }
  };

  return (
    <section className="questions" id="questions">
      <div className="scheme">
        <div className="questions-content">
          <div className="questions__title">
            <h2 className="section__title">Вопросы и ответы</h2>
          </div>

          <div className="accordion">
            {questions.map(({ id, title, text }) => (
              <div className="accordion-item" key={id}>
                <div
                  className="accordion-item-header"
                  onClick={() => setQuestion(id)}
                >
                  <span className="accordion-item-header__title">{title}</span>

                  <div
                    className={`accordion-item-header__img ${
                      curQuest === id && "rotated"
                    }`}
                    alt="Стрелка"
                  />
                </div>

                <div
                  className={`accordion-item-body accordion-item-body${
                    curQuest === id && `--active`
                  }`}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheQuestions;