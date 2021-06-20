import Fade from "react-reveal/Fade";
import ComenzarButton from "../../UI/Home/ComenzarButton";

const Plans = () => {
  return (
    <section className="plans__section" id="planes">
      <div className="plans__container">
        <Fade top>
          <div className="plans__title">
            <h2>Comienza hoy a construir tu futuro</h2>
            <p>
              Selecciona entre los distintos planes de RedTrader y comienza a
              generar ingresos con nuestros servicios
            </p>
          </div>
        </Fade>
        <div className="plans__card__container">
          <Fade left>
            <div className="plan__card plan__premium">
              <h2 className="plan__card-title">Plan Premium</h2>
              <div className="prices">
                <h3 className="price__firstmonth">
                  $<span>70.00</span> / Primer mes
                </h3>
                <h3 className="price__monthly">
                  $<span>50.00</span> / Mensual
                </h3>
              </div>
              <div className="plan__benefits">
                <li>
                  <span>&#10003;</span>
                  Acceso a señales de Criptomonedas y Forex desde la aplicacion
                  RedTrade
                </li>
                <li>
                  <span>&#10003;</span>
                  Acceso ilimitado a la academia basica con mas de 20 videos
                  educativos
                </li>
                <li>
                  <span>&#10003;</span>
                  Acceso ilimitado a las clases en vivo de RedTrader Live
                </li>
              </div>
              <ComenzarButton />
            </div>
          </Fade>
          <Fade right>
            <div className="plan__card plan__premium__plus">
              <h2 className="plan__card-title">Plan Premium Plus</h2>
              <div className="prices">
                <h3 className="price__firstmonth">
                  $<span>99.00</span> / Primer mes
                </h3>
                <h3 className="price__monthly">
                  $<span>70.00</span> / Mensual
                </h3>
              </div>
              <div className="plan__benefits">
                <li>
                  <span>&#10003;</span>
                  Todos los beneficios del Plan Premium
                </li>
                <li>
                  <span>&#10003;</span>
                  Señales de acciones
                </li>
                <li>
                  <span>&#10003;</span>
                  Academia de Arbitraje de Criptomonedas
                </li>
                <li>
                  <span>&#10003;</span>
                  Academia de acciones <small>(Proximamente)</small>
                </li>
              </div>
              <ComenzarButton />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Plans;
