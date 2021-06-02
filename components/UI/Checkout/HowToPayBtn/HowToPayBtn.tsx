import React from "react";

const HowToPayBtn = ({ onClickFunction }) => {
  return (
    <button onClick={onClickFunction} className="howtopay__btn">
      <span>?</span> Tutorial - Como pagar con criptomonedas
    </button>
  );
};

export default HowToPayBtn;
