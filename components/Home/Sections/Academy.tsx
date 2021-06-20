import React from "react";
import Fade from "react-reveal/Fade";

const Academy = () => {
  return (
    <section className="academy__section" id="academia">
      <Fade left>
        <div className="academy__info">
          <h2>Academia Basica</h2>
          <p>
            <span>+20</span> Videos de introduccion al trading en forex,
            obtendras una base solida para utilizar las herramientas mas basicas
            de trading y copiar las señales de RedTrade
          </p>
        </div>
        <div className="academy__img">
          <img src="assets/img/academy-mockup.png" loading="lazy" />
        </div>
      </Fade>
    </section>
  );
};

export default Academy;
