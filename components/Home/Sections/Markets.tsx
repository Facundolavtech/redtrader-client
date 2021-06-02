import React from "react";
import Fade from "react-reveal/Fade";

const Markets = () => {
  return (
    <section className="markets__section">
      <Fade left>
        <div className="markets__title">
          <h2>Mercados que operamos</h2>
        </div>
      </Fade>
      <div className="markets__cards__container">
        <Fade left>
          <div className="markets__card">
            <img src="assets/img/forex-card.png" />
          </div>
        </Fade>
        <Fade right>
          <div className="markets__card">
            <img src="assets/img/cripto-card.png" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Markets;
