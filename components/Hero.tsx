import React from "react";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__darkBG"></div>
      <img src="/assets/img/hero.jpg" />
      <div className="hero__info">
        <h1>Lleva tu <span>Trading</span> al siguiente nivel</h1>
        <p>Unete a RedTrader y comienza a generar ingresos ilimitados</p>
        <button>Comenzar</button>
      </div>
    </section>
  );
};

export default Hero;
