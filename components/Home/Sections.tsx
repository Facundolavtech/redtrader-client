import { Button } from "@material-ui/core";

const Sections = ({ setOpenModal, setIsLoginForm }) => {
  return (
    <>
      <section className="after-hero__benefits">
        <div className="card">
          <img src="assets/img/trophy.svg" loading="lazy" />
          <h2>Gana mientras aprendes</h2>
          <p>
            Puedes ganar dinero mientras aprendes, con nuestro sistema de
            streaming en directo
          </p>
        </div>
        <div className="card">
          <img src="assets/img/signals-filled.svg" loading="lazy" />
          <h2>Clases en vivo</h2>
          <p>
            Clases en vivo todos los dias con profesores que viven del trading
          </p>
        </div>
        <div className="card">
          <img src="assets/img/smartphone.svg" loading="lazy" />
          <h2>Copia a los expertos</h2>
          <p>
            Copia y gana! puedes copiar a los expertos y tendras el mismo
            resultado
          </p>
        </div>
      </section>
      <section className="markets__section">
        <div className="markets__title">
          <h2>Mercados que operamos</h2>
          <img src="assets/img/markets-icon.svg" />
        </div>
        <div className="markets__cards__container">
          <div className="markets__card">
            <img src="assets/img/forex-card.png" />
          </div>
          <div className="markets__card">
            <img src="assets/img/cripto-card.png" />
          </div>
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
          <img src="assets/img/academy-mockup.png" loading="lazy" />
        </div>
      </section>
      <section className="signals__section" id="signals">
        <div className="signals__img">
          <img src="assets/img/mt4.png" loading="lazy" />
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
          <img src="assets/img/xm-logo.svg" loading="lazy" />
        </div>
      </section>
      <section className="price__section" id="price">
        <div className="price__container">
          <h2>
            Plan premium <img src="assets/img/rocket.svg" />
          </h2>
          <p>
            Accede a todo por solo <span>$70 USD</span> por unica vez y luego{" "}
            <span>$20 USD</span> mensual
          </p>

          <li>
            <span>&#10004;</span> Academia con mas de 20 videos para aprender a
            ganar dinero con nuestras señales
          </li>
          <li>
            <span>&#10004;</span> Señales diarias por telegram para que copies
            pegues y ganes dinero
          </li>
          <li>
            <span>&#10004;</span> Comunidad de RedTrader dispuesta a ayudarte en
            todo lo que necesites
          </li>

          <Button
            variant="contained"
            color="primary"
            onClick={() => (setOpenModal(true), setIsLoginForm(false))}
          >
            Comenzar
          </Button>
        </div>
      </section>
    </>
  );
};

export default Sections;
