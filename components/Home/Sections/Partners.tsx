import React from "react";
import Fade from "react-reveal/Fade";

const Partners = () => {
  return (
    <section className="partner__section" id="partners">
      <Fade>
        <div className="partner__img">
          <img src="/assets/img/logo.png" />
          <img src="assets/img/xm-logo.svg" loading="lazy" />
        </div>
      </Fade>
      <div className="partner__info">
        <Fade left>
          <div className="partner__info-left">
            <h2>Somos partner oficiales de XM</h2>
            <p>
              Crea tu cuenta con XM y obtene beneficios unicos por ser parte de
              <span>RedTrader</span>
            </p>
          </div>
        </Fade>
        <div className="partner__info-right">
          <Fade left>
            <div className="partner__info-bubble">
              <h2>100%</h2>
              <p>
                de tu deposito hasta <strong>500 U$D</strong>
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="partner__info-bubble">
              <h2>20%</h2>
              <p>
                de tu deposito hasta <strong>4500 U$D</strong> en bono
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <Fade>
        <a
          href="https://clicks.pipaffiliates.com/c?c=365075&l=es&p=1"
          target="_blank"
          className="partner-action__btn"
        >
          Ver promoción
        </a>
      </Fade>
      <div className="fxprimus__section">
        <Fade left>
          <div className="fxprimus__img">
            <img src="/assets/img/fxprimus.jpg" alt="" />
          </div>
        </Fade>
        <Fade right>
          <div className="fxprimus__info">
            <h2>Crea tu cuenta con FX Primus</h2>
            <p>
              Obten un bono del <span>100%</span> sobre tu deposito (minimo 250
              U$D) y un bono del <span>50%</span> para depositos de 100 U$D
            </p>
            <a
              href="https://clients.fxprimus.com/en/register?ref=50005341®️ulator=vu"
              target="_blank"
            >
              Ver promoción
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Partners;
