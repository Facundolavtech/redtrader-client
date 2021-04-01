import { useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Hero from "../components/Hero";
import AuthModal from "../components/Modal";
import { Login, Register } from "../components/AuthForms";

export default function Inicio() {
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header style={openModal ? { boxShadow: "none" } : null}>
        <Container className="header__container">
          <a href="/" className="header__logo">
            <img src="favicon.png" />
          </a>
          <nav>
            <li>
              <Link href="#academy">Academia</Link>
              <img src="/assets/img/academy.svg" />
            </li>
            <li>
              <Link href="#signals">Señales de Trading</Link>
              <img src="/assets/img/signals.svg" />
            </li>
            <li>
              <Link href="#partner">Partner</Link>
              <img src="/assets/img/partners.svg" />
            </li>
            <li>
              <Link href="/contacto">Precio</Link>
              <img src="/assets/img/dollar.svg" />
            </li>
            <hr className="nav__vertical-line" />
            <li className="nav__login">
              <a
                onClick={() => {
                  setOpenModal(true);
                  setModalTitle("Iniciar Sesion");
                }}
              >
                Iniciar Sesion
              </a>
              <img src="/assets/img/lock.svg" />
            </li>
            <li
              className="nav__comenzar-btn"
              onClick={() => {
                setOpenModal(true);
                setModalTitle("Registrarse");
              }}
            >
              <a>Comenzar</a>
            </li>
          </nav>
        </Container>
      </header>
      <Hero setOpenModal={setOpenModal} setModalTitle={setModalTitle} />
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
      <AuthModal open={openModal} close={handleCloseModal} title={modalTitle}>
        {modalTitle === "Iniciar Sesion" ? (
          <Login changeModalTitleFunction={setModalTitle} />
        ) : (
          <Register changeModalTitleFunction={setModalTitle} />
        )}
      </AuthModal>
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
          <span>+</span>
          <img src="assets/img/xm-logo.svg" />
        </div>
      </section>
    </>
  );
}
