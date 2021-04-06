import { useState, useEffect } from "react";
import Hero from "../components/Home/HomeHero/HomeHero";
import AuthModal from "../components/Modal/Modal";
import AuthForm from "../components/Auth/AuthForms";
import Header from "../components/Header";
import Logo from "../components/Header/Logo";
import HomeNav from "../components/Home/HomeNav";
import Sections from "../components/Home/Sections";
import { useRouter } from "next/router";

export default function Inicio() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(null);
  const [backdrop, setBackdrop] = useState(false);

  const handleCloseModal: Function = () => {
    setOpenModal(false);
  };

  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <>
      <style jsx global>
        {`
          body {
            overflow-y: ${backdrop ? "hidden" : "unset"};
          }
        `}
      </style>
      <div className={backdrop ? "backdrop" : ""}></div>
      <Header
        style={openModal ? { boxShadow: "none" } : null}
        classes={"home__header"}
      >
        <div className="header__container">
          <Logo classes={"header__logo"} />
          <HomeNav
            classes={"home__nav"}
            setOpenModal={setOpenModal}
            setIsLoginForm={setIsLoginForm}
            setBackdrop={setBackdrop}
          />
        </div>
      </Header>
      <Hero setOpenModal={setOpenModal} setIsLoginForm={setIsLoginForm} />
      <Sections />
      <AuthModal
        open={openModal}
        close={handleCloseModal}
        title={isLoginForm ? "Iniciar Sesion" : "Registrarse"}
      >
        <AuthForm isLoginForm={isLoginForm} setIsLoginForm={setIsLoginForm} />
      </AuthModal>
    </>
  );
}
