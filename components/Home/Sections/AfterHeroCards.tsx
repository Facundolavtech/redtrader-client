import React from "react";
import Fade from "react-reveal/Fade";

const AfterHeroCards = () => {
  return (
    <section className="after-hero__cards">
      <Fade left>
        <div className="card">
          <img src="/assets/img/trophy.svg" loading="lazy" />
          <h2>Únete a una comunidad de traders</h2>
          <p>
            Nuestra comunidad de traders te ayudará en todo el proceso para que
            puedas comenzar a generar ingresos lo antes posible
          </p>
        </div>
      </Fade>
      <Fade top>
        <div className="card">
          <img src="/assets/img/signals-filled.svg" loading="lazy" />
          <h2>Recibe señales de inversion con nuestra app de Red Trade</h2>
          <p>
            Recibe todos los dias señales de inversión de parte de nuestros
            expertos en trading con años de experiencia y genera ingresos
          </p>
        </div>
      </Fade>
      <Fade right>
        <div className="card">
          <img src="/assets/svg/play.svg" loading="lazy" />
          <h2>Aprende con clases en vivo diarias</h2>
          <p>
            Clases en vivo todos los dias a travez de nuestra plataforma de
            Streaming RedTrader Live, donde podras ver a los expertos operar en
            directo
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default AfterHeroCards;
