const Hero = ({ setOpenModal, setIsLoginForm }) => {
  return (
    <section className="hero__section">
      <div className="hero__darkBG"></div>
      <img className="hero__img" src="/assets/img/hero.jpg" />
      <div className="hero__info">
        <h1>
          Lleva tu <span>Trading</span> al siguiente nivel
        </h1>
        <p>Unete a RedTrader y comienza a generar ingresos ilimitados</p>
        <button
          onClick={() => {
            setOpenModal(true);
            setIsLoginForm(false);
          }}
        >
          Comenzar
        </button>
      </div>
      <div className="xm__hero">
        <h2>Somos partners oficiales de XM</h2>
        <div>
          <img src="assets/img/xm-logo.svg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
