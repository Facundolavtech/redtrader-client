import { useRouter } from "next/router";
import { ArrowDownward } from "@material-ui/icons";

const Hero = ({ setOpenModal, setIsLoginForm, loggedIn }) => {
  const router = useRouter();

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
        <button
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
        </button>
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
