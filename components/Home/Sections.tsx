const Sections = () => {
  return (
    <>
      <section className="after-hero__benefits">
        <div className="card">
          <img src="assets/img/trophy.svg" />
          <h2>Gana mientras aprendes</h2>
          <p>
            Puedes ganar dinero mientras aprendes, con nuestro sistema de
            streaming en directo
          </p>
        </div>
        <div className="card">
          <img src="assets/img/signals-filled.svg" />
          <h2>Clases en vivo</h2>
          <p>
            Clases en vivo todos los dias con profesores que viven del trading
          </p>
        </div>
        <div className="card">
          <img src="assets/img/smartphone.svg" />
          <h2>Copia a los expertos</h2>
          <p>
            Copia y gana! puedes copiar a los expertos y tendras el mismo
            resultado
          </p>
        </div>
      </section>
      <section className="academy__section" id="academy">
        <div className="academy__info">
          <h2>Academia</h2>
          <p>
            <span>+30</span> Videos sobre como ganar dinero con nuestras
            señales, mas una introduccion al trading de criptomonedas y forex
          </p>
        </div>
        <div className="academy__img">
          <img src="assets/img/academy-mockup.png" />
        </div>
      </section>
      <section className="signals__section" id="signals">
        <div className="signals__img">
          <img src="assets/img/mt4.png" />
        </div>
        <div className="signals__info">
          <h2>Señales de trading</h2>
          <p>
            Copia las señales de nuestros expertos en trading y gana dinero,
            enviamos <span>+10</span> señales diariamente de criptomonedas y
            forex
          </p>
        </div>
      </section>
      <section className="partner__section" id="partner">
        <div className="partner__info">
          <h2>Somos partner oficiales de XM</h2>
          <p>Crea tu cuenta y obtene un bono para operar de 30 U$D</p>
          <a href="https://www.xm.com/landing/promo-bonus/es" target="_blank">
            Ver promocion
          </a>
        </div>
        <div className="partner__img">
          <img src="favicon.png" />
          {/* <span>{""}</span> */}
          <img src="assets/img/xm-logo.svg" />
        </div>
      </section>
    </>
  );
};

export default Sections;
