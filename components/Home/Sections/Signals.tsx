import React from "react";
import Fade from "react-reveal/Fade";

const Signals = () => {
  return (
    <section className="signals__section" id="senales">
      <Fade right>
        <div className="signals__img">
          <img src="assets/img/redtraderlive-img.png" loading="lazy" />
        </div>
        <div className="signals__info">
          <h2>RedTrader Live</h2>
          <p>
            Aprende trading con las clases en vivo de nuestros educadores
            expertos, diariamente a travez de nuestra plataforma de streaming
            RedTrader Live
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Signals;
