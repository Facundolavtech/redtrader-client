import { ArrowDownward } from "@material-ui/icons";
import ComenzarButton from "../../UI/Home/ComenzarButton";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__darkBG"></div>
      <img src="/assets/img/hero.jpg" className="hero__img" />
      <div className="hero__info">
        <h1>
          Lleva tu <span>Trading</span> al siguiente nivel
        </h1>
        <p>
          Somos una empresa especializada en servicios de educacion y señales de
          Trading, con expertos con mas de 5 años de experiencia en los mercados
        </p>
        <ComenzarButton />
      </div>
      <div className="xm__hero">
        <h2>Somos partners oficiales de XM</h2>
        <div>
          <img src="assets/img/xm-logo.svg" loading="lazy" />
        </div>
      </div>
      <ArrowDownward className="hero__arrowdown" />
    </section>
  );
};

export default Hero;
