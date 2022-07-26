import React from "react";
import "./comets.scss";
const Comets = ({ count = 1 }) => {
  const reset = function (e) {
    e.target.className = "";
    setTimeout(function () {
      e.target.className = "cometee";
    }, 0);
  };
  return (
    <div className="cometee_wrap">
      {Array.from({ length: count }).map((_, idx) => (
        <div onAnimationEnd={reset} key={idx} className="cometee"></div>
      ))}
    </div>
  );
};

export default Comets;
