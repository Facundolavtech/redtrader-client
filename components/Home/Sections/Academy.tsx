import React from "react";
import Fade from "react-reveal/Fade";

const Academy = () => {
  return (
    <section className="academy__section" id="academia">
      <Fade left>
        <div className="academy__info">
          <h2>Academia</h2>
          <p>
            <span>+20</span> Videos sobre como ganar dinero con nuestras
            señales, mas una introducción al trading de criptomonedas y forex
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
