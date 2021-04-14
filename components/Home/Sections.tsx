import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

const Sections = ({ setOpenModal, setIsLoginForm, loggedIn }) => {
  const router = useRouter();

  return (
    <>
      <section className="after-hero__benefits">
        <div className="card">
          <img src="assets/img/trophy.svg" loading="lazy" />
          <h2>Únete a una comunidad de traders</h2>
          <p>
            Nuestra comunidad de traders te ayudará en todo el proceso para que
            puedas comenzar a generar ingresos lo antes posible
          </p>
        </div>
        <div className="card">
          <img src="assets/img/signals-filled.svg" loading="lazy" />
          <h2>Recibe señales de inversion vía Telegram</h2>
          <p>
            Recibe todos los dias señales de inversión de parte de nuestros
            expertos en trading con años de experiencia
          </p>
        </div>
        <div className="card">
          <img src="assets/img/smartphone.svg" loading="lazy" />
          <h2>Copia a los expertos y genera ingresos de forma automática</h2>
          <p>
            ¡Copia y gana! puedes copiar a los expertos y tendrás el mismo
            resultado, no necesitas ser un gurú para generar ingresos con el
            trading
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
      <section className="academy__section" id="academia">
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
      </section>
      <section className="signals__section" id="senales">
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
        <div className="partner__img">
          <img src="favicon.png" />
          {/* <span>{""}</span> */}
          <img src="assets/img/xm-logo.svg" loading="lazy" />
        </div>
        <div className="partner__info">
          <div className="partner__info-left">
            <h2>Somos partner oficiales de XM</h2>
            <p>
              Crea tu cuenta con XM y obtene beneficios unicos por ser parte de
              <span>RedTrader</span>
            </p>
            <a href="https://www.xm.com/landing/promo-bonus/es" target="_blank">
              Ver promoción
            </a>
          </div>
          <div className="partner__info-right">
            <div className="partner__info-bubble">
              <h2>100%</h2>
              <p>
                de tu deposito hasta <strong>500 U$D</strong>
              </p>
            </div>
            <div className="partner__info-bubble">
              <h2>20%</h2>
              <p>
                de tu deposito hasta <strong>4500 U$D</strong> en bono
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="price__section" id="precio">
        <div className="price__container">
          <h2>¡Únete ahora!</h2>
          <p>Accede a todo el contenido exclusivo de RedTrader por solo</p>
          <div className="price">
            <p>
              <span>70 U$D</span> / Primer mes
            </p>
            <p>
              <span>34.99 U$D</span> / Mes
            </p>
          </div>

          <ul>
            <li>
              <span>&#10004;</span> Academia con más de 20 videos para aprender
              a ganar dinero con nuestras señales
            </li>
            <li>
              <span>&#10004;</span> Señales diarias por telegram para que copies
              pegues y ganes dinero
            </li>
            <li>
              <span>&#10004;</span> Comunidad de RedTrader dispuesta a ayudarte
              en todo lo que necesites
            </li>
          </ul>

          <Button
            variant="contained"
            color="primary"
            onClick={
              loggedIn
                ? () => {
                    router.push("/dashboard");
                  }
                : () => {
                    setOpenModal(true);
                    setIsLoginForm(false);
                  }
            }
          >
            Comenzar
          </Button>
        </div>
        <img src="/assets/img/pricingBG.jpg" className="pricing__img" />
      </section>
      <section className="contact__section">
        <h2>
          ¿Necesitas ayuda? Contactanos en <a>soporte@redtrader.site</a>
        </h2>
        <div>
          Pagos 100% seguros con{" "}
          <img
            src="/assets/img/coinpayments-logo.png"
            alt="Coinpayments logo"
          />
        </div>
      </section>
    </>
  );
};

export default Sections;
